import * as React from 'react';
const { Link } = require("react-router-dom");

export default function NotAutorized() {
    const mystyle = {
        text: {
            color: "white",
            backgroundColor: "Black",
            padding: "10px",
            fontFamily: "Arial",
            textAlign: "center"
        },
        img : {
            margin: "-10px auto 0",
            width: "20vw"
        }
    };
    return (
        <html>
            <h1 style={mystyle.text}>401 Error</h1>
            <div style={mystyle.text}>
                <div style={mystyle.text}>
                    <h2 style={mystyle.text}>Oops, something went wrong.</h2>
                    <h3 style={mystyle.text}>Invalid credentials.</h3>
                    <Link style={mystyle.text} to="/login"> {">Click here to signin"} </Link> 
                </div> 
                <div style={mystyle.img}>
                    <img src='https://media2.giphy.com/media/830H0uF08yM5J29qjf/source.gif' />
                </div>
            </div>
        </html>
    );
}