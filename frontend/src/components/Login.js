import * as React from 'react';

import login from '../api/login.api';
import getUsuarios from '../api/getUsuarios.api';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { navigate } from 'react-router-web';
import { Icon } from '@mui/material';
const { Link } = require("react-router-dom");

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        NicolasMango
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function Login() {

  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });

  const [isLogged, setLogged] = React.useState(false);
  const [isFirstUser, setFirstUser] = React.useState(false);
  const [snack, setSnack] = React.useState('');

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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

  React.useEffect(() => {
    getUsuarios()
      .then(response => {
        if (response.length === 0) {
          setFirstUser(true);
        } else {
          setFirstUser(false);
        }
      })
      .catch(error =>  {
        setShowError(true);
        setSnack("Falla de sistema vuelva intentar en unos momentos");
        console.log(error);
      });

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (values.email === "" || values.password === "") {
      setShowWarning(true);
      setSnack("Ingrese email y contraseña")
    } else {

      await login(values.email, values.password)
        .then(response => {
          if (response.status === 200) {
            setLogged(true);
            setShowSuccess(true);
            sessionStorage.setItem("access-token", response.token);
            sessionStorage.setItem("authenticated", true);
            setTimeout(() => navigate("/dashboard"), 2000);
          } else {
            if (response.status === 401) {
              setShowWarning(true);
              setSnack("Las credenciales son inválidas")
            }
          }
        })
        .catch(error => {
          setShowError(true);
          setSnack("Falla de sistema vuelva intentar en unos momentos")
          console.log(error);
        });
    }
  };

  return (

    <ThemeProvider theme={darkTheme}>

      <Container component="main" maxWidth="xs">
        
        <Snackbar open={showSuccess} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} TransitionComponent={Slide} autoHideDuration={6000} onClose={handleNotShowSuccess}>
          <Alert size="md" variant="filled" onClose={handleNotShowSuccess} severity="success" sx={{ width: '100%' }}>
            Ingreso exitoso!
          </Alert>
        </Snackbar>
        <Snackbar open={showWarning} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} TransitionComponent={Slide} autoHideDuration={6000} onClose={handleNotShowWarning}>
          <Alert size="md" variant="filled" severity = "warning" onClose={handleNotShowWarning} sx={{ width: '100%' }}>
            {snack}
          </Alert>
        </Snackbar>
        <Snackbar open={showError} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} TransitionComponent={Slide} autoHideDuration={6000} onClose={handleNotShowError}>
          <Alert size="md" variant="filled" severity = "error" onClose={handleNotShowError} sx={{ width: '100%' }}>
            {snack}
          </Alert>
        </Snackbar>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              onChange={handleChange('email')}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={values.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleChange('password')}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              value={values.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Link to="/">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Volver
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  type="submit"
                  fullWidth
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              {isFirstUser
                ? <Grid item> <Link to="/signup" variant="body2"> {"Don't have an account? Sign Up"} </Link> </Grid>
                : <Grid item>  {""}  </Grid>
              }
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container >
    </ThemeProvider >
  );
}