import { Button, Typography, Box } from "@mui/material";

export function BemVindo() {
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
            <Typography variant="h1" gutterBottom>
                Bem-vindo!
            </Typography>
            <Button
                variant="contained"
                onClick={() => window.location.href = '/'}
                sx={{ marginTop: '20px' }}
            >
                Sair
            </Button>
        </Box>
    );
}
