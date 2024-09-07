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
* Para obtener la información de un usuario en particular por su nombre de usuario.
* Para modificar los datos del usuario propio.
* Para borrar mi usuario.
* Para cerrar la sesión.
  
#### 🟢 Para realizar las siguientes modificaciones en ***Tickets***, se requiere tener la sesión iniciada:

* Para crear un nuevo Ticket.
* Para modificar los datos de un Ticket.
* Para buscar un Ticket por ID.
* Para ver el listado de Tickets.
* Para ver el status del/los Ticket.
* Para borrar un Ticket.

#### 🔴 Acciones de ***usuarios*** que no requieren iniciar sesión:

* Ver el status y el entorno bajo el endpoint '/status'.

***
## 🔹 NOTAS PARA DESARROLLADORES:
Los desarrolladores que deseen probar el sistema, deben contar con nodeJs y se instalarán las dependecias adjuntas en el **packaje.json**. 
Al compilar con el comando, y ejecutar desde el sistema compilado mejora la calidad y la rapidez de las respuestas a las peticiones.
Por último, se agregó un archivo ***'API- Bug Register'*** para pruebas en **POSTMAN**, que se puede importar para realizar las peticiones de prueba.

## 🔹 ERD PARA EL FLUJO DE FUNCIONAMIENTO DE LA API:
![ERD](https://pbs.twimg.com/media/GKEA9gSXQAAtbC-?format=jpg&name=large)

- 📝Autor: Ailén Páez.
- 💼[Linkedin](https://www.linkedin.com/in/paezailenj/)
