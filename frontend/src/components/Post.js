import React, { useEffect, useState  } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Divider, Avatar, Grid, Paper } from "@mui/material";
import getContacts from "../api/contactos.api";
import {DeleteContact} from "../api/postContact.api";


const imgLink =
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

export default function Post() {

    const [contacts, setContacts] = useState([]);
    const [isCommentsEmpty, setCommentsIsEmpty] = useState([true]);
    const accessToken = sessionStorage.getItem('access-token')

    useEffect(() => {
  
         getContacts(accessToken)
        .then(response => {
            if (typeof response !='undefined' && response.length > 0) {
                setCommentsIsEmpty(false);
                setContacts(response);
            } else {
                setCommentsIsEmpty(true);
            }
          })
          .catch(error =>  {
            //setShowError(true);
            //setSnack("Falla de sistema vuelva intentar en unos momentos");
            console.log(error);
          });
    }, [setContacts,accessToken,isCommentsEmpty]);


    const handleDelete = async (idComment) => {
        console.log("pedido delete :" + idComment )
        var opcion = window.confirm("¿Estás Seguro que deseas eliminar el comentario? ");
        if (opcion === true) {
            setContacts(
				contacts.filter((item) => {
					return item._id !== idComment;
				})
			);
            DeleteContact(accessToken,idComment)
            .then(response => {
                console.log(response);
              })
              .catch(error =>  {
                console.log(error);
              });

            if (typeof contacts !='undefined' && contacts.length > 0) {
                setCommentsIsEmpty(false);
            } else {
                setCommentsIsEmpty(true);
            }
        }
    };
    

    return (
        <div style={{ padding: 14 }} className="App">
            <h1>Comments</h1>
            {isCommentsEmpty
                ? <h2 style={{ margin: 0, textAlign: "center" , color:"white" }}> {"Sin mensajes"}  </h2>
                : <h2 style={{ margin: 0, textAlign: "center" , color:"white" }}> {"Mensajes Disponibles"}  </h2>
            }
            {contacts.map(((item) => (
                <div key={item._id}>
                    <Paper style={{ padding: "30px 20px", marginTop: 10 }}>
                        <Grid xs={8} container wrap="nowrap" spacing={2}>
                            <Grid justifyContent="left">
                                <IconButton onClick={() => handleDelete(item._id)} value={item._id} aria-label="delete">
                                    {<DeleteIcon />}
                                </IconButton >
                            </Grid>
                            <Grid item> <Avatar alt="Remy Sharp" src={imgLink} /> </Grid>
                            <Grid justifyContent="left" item xs zeroMinWidth>
                                <h3 style={{ margin: 0, textAlign: "left" }}> {item.firstname}  {item.lastname} ({item.email})
                                </h3>
                                <h5 style={{ margin: 0, textAlign: "left" }}> Asunto : {item.subject}</h5>
                                <p style={{ textAlign: "left" }}>
                                    {item.message}
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
