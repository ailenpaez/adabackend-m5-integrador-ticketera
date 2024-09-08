<h1 align="center"> DESAFÍO INTEGRADOR - MÓDULO 5 </h1>
<h3 align="center"> RESTful API </h3>

<p align="center">
    <img src="https://pbs.twimg.com/media/GW2wv3XWUAAL6sm?format=jpg&name=medium" alt="INTRO" width="300">
</p>

## 🔹 INTRODUCCIÓN:

En este trabajo se construyó una API-Rest desde cero, usando distintas herramientas de *nodeJS*, *express* y otras dependencias como **zod**, **UUID**, **jsonfile** y encriptación de las contraseñas para brindar mayor seguridad.

Se crearon dos archivos JSON que almacenan datos de **usuarios** y otro para almacenar los datos de la temática seleccionada: **un registro para reportes de bugs basado en tickets**.

Se proyectó la idea basándome en una herramienta que pueda ser útil en mi trabajo diario, donde los usuarios puedan realizar distintas acciones sobre los reportes y los usuarios. Para ello ***es necesario tener una cuenta***, luego loguearse con usuario y contraseña. Esto les administrará un ***token*** único para cada usuario y cada sesión iniciada, que será fundamental para realizar las acciones que el usuario desee.

***

## 📍EJECUCIÓN DEL SISTEMA:

 Para ejecutar estos procesos, poder ver la información solicitada y realizar las distintas acciones del sistema, debemos levantar el servidor con un comando de node.
Aquí se podrán apreciar los comandos de ejecución que se enviarán por consola:
 
| COMANDO DE EJECUCIÓN |    TIPO DE ACCESO    |
| -------------------- | :------------------: |
| npm run start        |       USUARIOS       |
| npm run dev          |   DESARROLLADORES    |
| npm run build        | COMPILADO/PRODUCCIÓN |

*** 

## 📍 INSTRUCCIONES PARA EL USUARIO.

#### 🟢 Para los ***Usuarios***, estas acciones requieren tener la sesión iniciada:

* Para obtener toda la lista de usuarios.
* Para obtener la información de un usuario en particular por su username.
* Para modificar los datos del usuario propio.
* Para borrar usuario.
* Para iniciar la sesión.
* Para cerrar la sesión.
  
#### 🟢 Para realizar las siguientes modificaciones en ***Tickets***, se requiere tener la sesión iniciada:

* Para crear un nuevo Ticket.
* Para modificar los datos de un Ticket.
* Para buscar un Ticket por ID.
* Para ver el listado de Tickets.
* Filtrar Tickets por STATUS (pending/done).
* Para borrar un Ticket.

#### 🔴 Acciones de ***usuarios*** que no requieren iniciar sesión:

* Ver el status y el entorno bajo el endpoint '/status'.

***
## 🔹 NOTAS PARA DESARROLLADORES:
Los desarrolladores que deseen probar el sistema, deben contar con nodeJs y se instalarán las dependecias adjuntas en el **packaje.json**. 
Al compilar con el comando, y ejecutar desde el sistema compilado mejora la calidad y la rapidez de las respuestas a las peticiones.
Por último, adjunto la publicación de la documentación ***'API- Bug Register'*** para pruebas en **POSTMAN**, que se puede importar para realizar las peticiones de prueba.

### Documentación POSTMAN 🚀

Acceso al reporte  [API - Bug Register ](https://documenter.getpostman.com/view/27356547/2sAXjRWA3w).


## 🔹 ENDPOINTS: 


* http://localhost:{PORT}/status->  *(getter)*. 👉🏼 No requiere el token de inicio de sesión, muestra la información del estado de la aplicación .


* http://localhost:{PORT}/users/ -> **REQUIERE TOKEN**, *(getter)*. 👉🏼 Muestra la lista de todos los usuarios, sin datos sensibles.


* http://localhost:{PORT}/users/:username -> **REQUIERE TOKEN**, *(getter)*. 👉🏼 Muestra la información del usuario pasado por username, sin datos sensibles.


* http://localhost:{PORT}/auth/register ->  *(setter)*. 👉🏼 Crea un nuevo usuario con la información enviada por el **body**. Ejemplo de uso:

```
{
"username": "example",
"email": "example@example.com",
"password": "example123",
"level": 3,
"status": "active",
"position": ["support", "dev"],
"country": "WES"
}
```

* http://localhost:{PORT}/auth/login ->  *(setter)*. 👉🏼 Genera el token de inicio de sesión, requiere usuario y contraseña mediante el **body**. Ejemplo de uso:

```
{
"username": "robbstark",
"password": "got123"
}
```

* http://localhost:{PORT}/auth/:id -> **REQUIERE TOKEN**, *(setter)*. 👉🏼 Requiere el token de inicio de sesión, para modificar uno o varios elementos del registro de usuarios mediante el **body**. Ejemplo de uso:

```
{"level": 5}
```

* http://localhost:{PORT}/auth/:id -> **REQUIERE TOKEN**, *(setter)*. 👉🏼 Requiere el token de inicio de sesión, para eliminar un registro de usuario.


* http://localhost:{PORT}/auth/logout -> **REQUIERE TOKEN**, *(setter)*. 👉🏼 Requiere el token de inicio de sesión, para eliminar el token y cerrar la sesión de usuario.


* http://localhost:{PORT}/tickets/ -> **REQUIERE TOKEN**, *(getter)*. 👉🏼 Requiere el token de inicio de sesión, para buscar y mostrar TODA información del registro de tickets .


* http://localhost:{PORT}/tickets/:id -> **REQUIERE TOKEN**, *(getter)*. 👉🏼 Requiere el token de inicio de sesión, para buscar y mostrar la información de un registro de tickets por número de ID.


* http://localhost:{PORT}/tickets/ -> **REQUIERE TOKEN**, *(setter)*. 👉🏼 Requiere el token de inicio de sesión, para crear un ticket nuevo mediante la información enviada por el **body**. Ejemplo de uso:

```
{
"username": "ejemplo",
"date": "2024-09-09T13:30:00Z",
"area": ["frontend"],
"bugType": "Error de diseño",
"description": "El texto en el botón de 'Enviar' está cortado en el idioma alemán.",
"link": "https://github.com/issue15",
"evidence": ["pdf"],
"status": "pending"
}
```

* http://localhost:{PORT}/tickets/:id -> **REQUIERE TOKEN**, *(setter)*. 👉🏼 Requiere el token de inicio de sesión, para editar la información parcial o total de un ticket mediante la información enviada por el **body**. Ejemplo de uso:

```
{"status": "done"}
```


* http://localhost:{PORT}/tickets/:id -> **REQUIERE TOKEN**, *(setter)*. 👉🏼 Requiere el token de inicio de sesión, para eliminar un ticket .


* http://localhost:{PORT}/tickets?status=pending -> **REQUIERE TOKEN**, *(getter)*. 👉🏼 Requiere el token de inicio de sesión, para ver el listado de tickets según el status (puede ser *pendig* o *done)*  .


## 🔹 ERD PARA EL FLUJO DE FUNCIONAMIENTO DE LA API: 
![ERD](https://pbs.twimg.com/media/GW78uYOWcAE_2tC?format=jpg&name=large)


- 💼[Linkedin](https://www.linkedin.com/in/paezailenj/)
- 🚀 [Deploy](https://adabackend-m5-integrador-ticketera.onrender.com/status)
- 📝Autor: Ailén Páez.
