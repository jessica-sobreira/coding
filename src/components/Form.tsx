import LoginIcon from '@mui/icons-material/Login';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function Form() {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',

          }}
    >


        <form style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '55%'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
                <LoginIcon />
                <h1>Sign in</h1>
            </div>
            <TextField id="email" label="E-mail" variant="outlined" style={{marginBottom: '10px'}} />
            <TextField id="senha" label="Senha" variant="outlined" />    
            <Button variant="contained" type="submit">Entrar</Button>
            <br />
            <p style={{fontSize: '14px', textAlign: 'center'}}>Não tem uma conta? <a href="/criar-usuario">Cadastre-se!</a></p>
            <br />
            <p style={{fontSize: '12px', textAlign: 'center', color: 'gray'}}>Copyright © Jessica Sobreira 2024</p>        
        </form>
        </Box>

    )
}