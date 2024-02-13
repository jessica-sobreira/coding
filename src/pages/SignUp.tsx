import { useDispatch } from 'react-redux';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const validarEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validarSenha = (senha: string) => {
   return senha.length >= 5;
};

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cadastrarUsuario = (e: any) => {
    e.preventDefault();

    const email = e.target.email.value;
    const senha = e.target.password.value;
    const confirmarSenha = e.target.confirmPassword.value;

    if (!email || !senha || !confirmarSenha) {
      return alert('Preencha todos os campos');
    } else if (senha !== confirmarSenha) {
      return alert('Senhas diferentes');
    } else if (!validarEmail(email)) {
      return alert('E-mail inválido');
    } else if (!validarSenha(senha)) {
      return alert('Senha inválida');
    } else {
      dispatch({ type: 'criar-usuario', payload: { email, senha } });
      navigate('/bem-vindo');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <VpnKeyIcon sx={{ fontSize: '40px', marginBottom: '10px' }} />
      <br />
      <Typography variant="h4" gutterBottom>
        Sign up
      </Typography>
      <form onSubmit={cadastrarUsuario} style={{ width: '300px' }}>
        <TextField
          fullWidth
          label="Endereço de Email"
          name="email"
          type="email"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Senha"
          name="password"
          type="password"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Confirmação de Senha"
          name="confirmPassword"
          type="password"
          variant="outlined"
          margin="normal"
          required
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Cadastre-se
        </Button>
      </form>
      <Typography variant="body2" gutterBottom style={{ marginTop: '16px' }}>
        Já tem uma conta? <Link to="/">Faça login</Link>
      </Typography>
    </Box>
  );
}
