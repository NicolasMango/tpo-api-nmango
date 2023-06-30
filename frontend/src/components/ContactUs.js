import * as React from 'react';
import {postContact} from '../api/postContact.api';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
const { Link } = require("react-router-dom");

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function ContactUs() {

    const [values, setValues] = React.useState({
        firstName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const [snack, setSnack] = React.useState('');
    const [showSuccess, setShowSuccess] = React.useState(false);
    const [showWarning, setShowWarning] = React.useState(false);
    const [showError, setShowError] = React.useState(false);

    const handleNotShowSuccess = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowSuccess(false);
    };

    const handleNotShowWarning = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowWarning(false);
    };

    const handleNotShowError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowError(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await postContact(values.firstName, values.email, values.subject, values.message)
            .then(response => response.json())
            .catch(error => alert(error))
            .then(response => {
                if (response.message === "Created!") {
                    setShowSuccess(true);
                    setSnack("Mensaje enviado , estaremos en contacto")
                } else {
                    if (response.message === 'Error in createUser Service') {
                        setShowWarning(true);
                        setSnack("Ops hubo un error")
                    }
                }
            });

    };

    return (
        <section id='contact'>
            <ThemeProvider theme={darkTheme}>
                <Container component="main" maxWidth="xs">
                    <Snackbar open={showSuccess} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} autoHideDuration={6000} onClose={handleNotShowSuccess}>
                        <Alert size="md" variant="filled" onClose={handleNotShowSuccess} severity="success" sx={{ width: '100%' }}>
                        {snack}
                        </Alert>
                    </Snackbar>
                    <Snackbar open={showWarning} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} TransitionComponent={Slide} autoHideDuration={6000} onClose={handleNotShowWarning}>
                        <Alert size="sm" variant="filled" severity="warning" onClose={handleNotShowWarning} sx={{ width: '100%' }}>
                            {snack}
                        </Alert>
                    </Snackbar>
                    <Snackbar open={showError} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} TransitionComponent={Slide} autoHideDuration={6000} onClose={handleNotShowError}>
                        <Alert size="lg" variant="filled" severity="error" onClose={handleNotShowError} sx={{ width: '100%' }}>
                            {snack}
                        </Alert>
                    </Snackbar>

                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            marginBottom: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h3" sx={{ fontSize: 50, color: 'White' }} >
                            Contact with me
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        fullWidth
                                        id="firstName"
                                        label="Name"
                                        onChange={handleChange('firstName')}
                                        value={values.firstName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                        onChange={handleChange('email')}
                                        value={values.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="subject"
                                        label="Subject"
                                        name="subject"
                                        autoComplete="subject"
                                        onChange={handleChange('subject')}
                                        value={values.subject}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="message"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        defaultValue="Send me your opinion"
                                        onChange={handleChange('message')}
                                        value={values.message}
                                    />
                                </Grid>

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Send
                            </Button>
                        </Box>
                    </Box>
                    <br></br>
                </Container>
            </ThemeProvider>
        </section >
    );
}