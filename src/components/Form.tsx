import { Box, Button, Typography, TextField, Link } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../config/hooks';

export default function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const fazerLogin = (e: any) => {
        e.preventDefault();
        const email = e.target.email.value;
        const senha = e.target.senha.value;

        if (!email || !senha) {
            alert('Por favor, preencha todos os campos');
            return;
        }

        dispatch({ type: 'login', payload: { email, senha } });
        navigate('/bem-vindo');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                <LoginIcon sx={{ fontSize: '40px', marginBottom: '10px' }} />
                <Typography variant="h5">Sign in</Typography>
            </Box>
            <form onSubmit={fazerLogin} style={{ width: '300px' }}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="E-mail"
                    variant="outlined"
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    id="senha"
                    name="senha"
                    label="Senha"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    required
                />
                <Button variant="contained" type="submit" fullWidth sx={{ marginTop: '10px' }}>
                    Entrar
                </Button>
            </form>
            <Typography variant="body1" sx={{ marginTop: '20px' }}>
                Não tem uma conta? <Link href="/criar-usuario">Cadastre-se!</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
                &copy; Jessica Sobreira 2024
            </Typography>
        </Box>
    );
}
