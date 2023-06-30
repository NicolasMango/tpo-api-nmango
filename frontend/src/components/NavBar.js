import * as React from 'react';
import { navigate } from 'react-router-web';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';
const { Link } = require("react-router-dom");


export default function Navbar() {
    const [showSuccess, setShowSuccess] = React.useState(false);

    const handleNotShowSuccess = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowSuccess(false);
    };
    const handleLogOut = async (e) => {
        e.preventDefault();
        setShowSuccess(true);
        //setLogged(true);
        sessionStorage.removeItem("authenticated", true);
        setTimeout(() => navigate("/login"), 2000);
    }
    return (
        <React.Fragment>
            <Snackbar open={showSuccess} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} TransitionComponent={Slide} autoHideDuration={6000} onClose={handleNotShowSuccess}>
                <Alert size="md" variant="filled" onClose={handleNotShowSuccess} severity="success" sx={{ width: '100%' }}>
                    Hasta Luego!
                </Alert>
            </Snackbar>
            <nav id='nav-wrap'>
                <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>Show navigation</a>
                <a className='mobile-btn' href='#' title='Hide navigation'>Hide navigation</a>
                <ul id='nav' className='nav'>
                    <li className='current'>
                        <a className='smoothscroll'>
                            <Link to="/">
                                Home
                            </Link>
                        </a>
                    </li>
                    <li style={{ padding: "10px" }} onClick={handleLogOut}>
                        <Link> Logout </Link>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    );
};