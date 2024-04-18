import Page from "@/components/Page"
import { Button, TextField, Typography } from "@mui/material"

const LoginPage = () => {
    return <Page title="Login">
        <div className="flex flex-col h-screen items-center justify-center">
            <Typography variant="h4" sx={{
                marginY: '2rem'
            }}>Login</Typography>
            <TextField label="Email" sx={{
                marginY: '1rem'
            }} />
            <TextField label="Password" type="password" sx={{
                marginY: '1rem'
            }} />
            <Button variant="contained">Login</Button>
            <Typography variant="body2" sx={{
                marginY: '1rem'
            }}>
                Do not have an account? <a href="/auth/register">Register</a>
            </Typography>
        </div>
    </Page>
}

export default LoginPage;