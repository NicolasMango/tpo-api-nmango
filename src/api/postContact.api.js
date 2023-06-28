const postContact = async (firstname, email, subject, message) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var contact = JSON.stringify({
        "contact": {
            "firstname": firstname,
            "email": email,
            "subject": subject,
            "message": message
        }
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: contact,
        redirect: 'follow'
    };

    console.log(requestOptions)
    let response = await fetch("http://localhost:8080/api/contactos/", requestOptions);
    console.log(response);
    //let jsonData = await response.json();
    //console.log(jsonData);
    return response;
}

export default postContact;