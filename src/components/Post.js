import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Divider, Avatar, Grid, Paper } from "@mui/material";

const data = new Array(10).fill().map((value, index) => ({ id: index, author: "Nicolas Mango", title: 'Propuesta Laboral', body: 'Me contacto desde la compania de HR Evolution , estamos buascando candidatos para el puesto de developer sr en cobol' }))

const imgLink =
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

class Post extends Component {

    state = {
        data: data
    }

    constructor(props) {
        super(props)

        this.deletePost = this.deletePost.bind(this);
    }

    deletePost = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
        if (opcion == true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato.id == registro.id) {
                    arreglo.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: arreglo });
        }
    };

    render() {
        return (
            <div style={{ padding: 14 }} className="App">
                <h1>Comments</h1>

                {data.map(((item) => (
                    <div key={item.id}>
                        <Paper style={{ padding: "30px 20px", marginTop: 10 }}>
                            <Grid xs={8} container wrap="nowrap" spacing={2}>
                                <Grid justifyContent="left">
                                    <IconButton  onClick={() => this.deletePost(item)} aria-label="delete">
                                        {<DeleteIcon />}
                                    </IconButton >
                                </Grid>
                                <Grid item> <Avatar alt="Remy Sharp" src={imgLink} /> </Grid>
                                <Grid justifyContent="left" item xs zeroMinWidth>
                                    <h3 style={{ margin: 0, textAlign: "left" }}> {item.author}
                                    </h3>
                                    <h4 style={{ margin: 0, textAlign: "left" }}> {item.title}</h4>
                                    <p style={{ textAlign: "left" }}>
                                        {item.body}
                                    </p>
                                    <p style={{ textAlign: "left", color: "gray" }}>
                                        posted 1 minute ago
                                    </p>

                                </Grid>
                                <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                            </Grid>
                        </Paper>
                    </div>
                )))}

            </div>

        );
    }
}

export default Post;