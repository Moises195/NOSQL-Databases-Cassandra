# Building an App with NoSQL Database Cassandra

## Aplicación CRUD con Apache Cassandra
Este proyecto es una aplicación CRUD sencilla que utiliza la base de datos NoSQL Apache Cassandra. Desarrollada en Node.js, la aplicación permite realizar operaciones de creación, lectura, actualización y eliminación de usuarios en una base de datos distribuida.

## Características
Apache Cassandra: Aprovecha la alta disponibilidad y escalabilidad de Cassandra para gestionar grandes volúmenes de datos.
Operaciones CRUD: Implementación de operaciones CRUD sobre una tabla de usuarios.
Modelo de Datos: Uso de particiones y claves principales para organizar los datos y optimizar el rendimiento.
API REST: Exposición de las operaciones mediante una API REST sencilla usando Express.

## Requisitos
Node.js y npm
Apache Cassandra instalado y en funcionamiento
Cassandra-driver para Node.js
## Instalación
## Clona el repositorio:

git clone https://github.com/tu_usuario/nombre_repositorio.git
cd nombre_repositorio

## Instala las dependencias:

npm install
Configura la conexión a Cassandra en database.js.

## Inicia la aplicación:

node server.js

## La aplicación expone una API REST para gestionar usuarios:

POST /users - Crea un nuevo usuario.
GET /users/
- Obtiene un usuario por ID.
PUT /users/
- Actualiza la información de un usuario.
DELETE /users/
- Elimina un usuario.
