const getContacts = async (token) => {

    var myHeaders = new Headers();
    myHeaders.append("jwt",token);
    myHeaders.append("Content-Type", "application/json");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
      mode:'cors'
    };
    
    let response = await fetch("http://localhost:8080/api/contactos/", requestOptions);
    let jsonData = await response.json();
    return jsonData;
}

export default getContacts;
