const signup = async (firstname,lastname,email,password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "name": firstname,
      "lastname" : lastname,
      "email": email,
      "password": password
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    let response = await fetch("http://localhost:8080/api/usuarios", requestOptions);
    console.log(response);
    //let jsonData = await response.json();
    //console.log(jsonData);
    return response;
}

export default signup;