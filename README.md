<h1 align="center"> DESAFÍO INTEGRADOR - MÓDULO 5 </h1>
<h3 align="center"> RESTful API </h3>

![INTRO](https://pbs.twimg.com/media/GW2vPJ7WQAAZCNN?format=png&name=4096x4096)

## 🔸 Introducción:

En este trabajo se buscó consumir una api publica para poder ingresar a los distintos endpoints y hacer distintas consultas. Se implementó un protocolo TCP para formar una relación cliente/servidor que hará posible hacer las consultas.

A partir de esas consultas, se devolverá un resultado. Este puede ser positivo o negativo, y estas quedaran alojadas en un archivo denominado 'history.json' que va construyendo un array de objetos por cantidad de consultas hechas.


***

## 🔹 Modo de ejecución:

 Para ejecutar estos procesos, poder ver la información solicitada y realizar las distintas acciones del sistema, debemos levantar la relación servidor/cliente con un comando de node. Aquí se podrán apreciar los comandos de ejecución que se enviarán por la  consola:
 
| 🛡️ COMANDO DE EJECUCIÓN | TIPO DE EJECUCIÓN     | 
| -------------------- | :-----------------:   | 
| npm run build        | Transpilación a js    |       
| npm run dev          | Levanta el servidor   |       
| npm run client       |Levanta el client      |       

### 📍 INSTRUCCIONES PARA EL USUARIO.

Por cada consulta que se quiera ejecutar, se debe descomentar una a una la porción de código que arroja los endpoints en el **client.ts**: 

```typescript

client.on("connect", () => {
  // const messageC = { path: "Characters" }; // -> DEVOLVERÁ TODOS LOS PERSONAJES
  // const messageC = { path: "Continents" }; // -> DEVOLVERÁ TODOS LOS CONTINENTES
  // const messageC = { path: "Character/4" }; // -> DEVOLVERÁ EL PERSONAJE CON ID 4(*)
  // const messageC = { path: "Continent/3" }; // -> DEVOLVERÁ EL CONTINENTE CON ID 3(**)
  
  // (*) el número se puede reemplazar del 0 al 52
  // (*) el número se puede reemplazar del 0 al 3

  const response = JSON.stringify(messageC);
  client.write(response);
  
});

```

***

### 📋 <u> Fuentes y documentación: </u> ###

* EMOJIS PARA PERSONALIZAR LAS RESPONSES ➡️[Emojipedia.](https://emojipedia.org/)
* API GAME OF THRONES ➡️ [API GOT](https://thronesapi.com/api/v2/)

***
