import Page from "@/components/Page"
import { Button, TextField, Typography } from "@mui/material"

const RegisterPage = () => {
    return <Page title="Login">
        <div className="flex flex-col h-screen items-center justify-center">
            <Typography variant="h4" sx={{
                marginY: '2rem'
            }}>Register</Typography>
            <TextField label="Email" sx={{
                marginY: '1rem'
            }} />
            <TextField label="Password" type="password" sx={{
                marginY: '1rem'
            }} />
            
            <TextField label="Confirm password" type="password" sx={{
                marginY: '1rem'
            }} />
            
            <TextField label="First name" sx={{
                marginY: '1rem'
            }} />
            
            <TextField label="Last name" sx={{
                marginY: '1rem'
            }} />
            
            
            <Button variant="contained">Register</Button>
            <Typography variant="body2" sx={{
                marginY: '1rem'
            }}>
                Already have an account? <a href="/auth/register">Register</a>
            </Typography>
        </div>
    </Page>
}

export default RegisterPage;