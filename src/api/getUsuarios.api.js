const getUsuarios = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    let response = await fetch("http://localhost:8080/api/usuarios/", requestOptions);
    let jsonData = await response.json();
    return jsonData;
}

export default getUsuarios;