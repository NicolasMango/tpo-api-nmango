# TPO API - Nicolas Mango

Este es el proyecto final de la materia API de la universidad UADE, dictado en 2023 en Buenos Aires Argentina.

## Comenzando 🚀

_Estas instrucciones te permitirÃ¡n obtener una copia del proyecto en funcionamiento en tu mÃ¡quina local para propÃ³sitos de desarrollo y pruebas._

Ejecutar el siguiente comando:

```
git clone https://github.com/NicolasMango/tpo-api-backend.git
```



### Pre-requisitos 📋

_Qué cosas necesitas para instalar el software y cómo instalarlas_

```
Mongo versiÃ³n 3.4.10 o superior
Node versiÃ³n 18.16.0 o superior
```

### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

Verificar que en el archivo .env estÃ© definido lo siguiente. Caso contrario definirlo.
```
PORT = 8080
CONNECTION_STRING = mongodb+srv://nicolasmango:proyectouade@clusternmango.x1aj9xc.mongodb.net/
SALT =  $2b$10$PXKmPlQNG/LGEqJYXdX/Qu
PRIVATE_KEY = $2b$10$PXKmPlQNG/LGEqJYXdX/Qu
```

Ejecutar desde una terminal:

```
cd tpo-api-backend
cd backend
npm install
npm start
```

Desde otra terminal:
```
cd tpo-api-backend
cd frontend
npm install
npm start
```

#Y todo listo!! Ya puedes ejecutar el programa en tu mÃ¡quina local


## Construido con 🛠️

_Las herramientas utilizadas para crear el proyecto son:_

* [React](https://es.react.dev/learn) - React lets you build user interfaces out of individual pieces called components
* [Material UI](https://mui.com) - Material UI is an open-source React component library that implements Google's Material Design.
* [Express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node.
* [Bcrypt](https://www.npmjs.com/package/bcrypt) - A library to help you hash passwords.
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - An implementation of JSON Web Tokens..
* [CORS](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
* [Mongoose](https://www.npmjs.com/package/mongoose) - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
* [MailJet](https://github.com/mailjet/mailjet-apiv3-nodejs) - Mailjet NodeJs Wrapper.

## Autor ✒️

* **Nicolas Mango** - *DiseÃ±o, programaciÃ³n, pruebas y documentaciÃ³n* - [NicolasMango](https://github.com/NicolasMango/)
