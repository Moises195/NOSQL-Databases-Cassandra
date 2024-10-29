# Building an App with NoSQL Database Cassandra

## Aplicación CRUD con Apache Cassandra
Este proyecto es una aplicación CRUD desarrollada en Node.js que utiliza Apache Cassandra como base de datos NoSQL. Está diseñado para mostrar cómo construir una aplicación escalable y distribuida, capaz de realizar operaciones básicas de creación, lectura, actualización y eliminación en una base de datos de usuarios, aprovechando las ventajas de Cassandra en cuanto a disponibilidad y rendimiento.

## Características
Apache Cassandra: Base de datos NoSQL distribuida, ideal para aplicaciones que necesitan alta disponibilidad, resistencia a fallos y capacidad de manejar grandes volúmenes de datos.
API REST: Interfaz API sencilla creada con Express.js, que expone endpoints para gestionar usuarios y sus datos.
Operaciones CRUD: Implementación de las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una tabla de usuarios en Cassandra.
Modelo de Datos: Diseño de esquema basado en particiones y claves principales, optimizando la estructura de datos para mejorar el rendimiento de las consultas y el escalado horizontal.
Conexión a Cassandra: Integración del controlador cassandra-driver para Node.js, que facilita la conexión y comunicación con el clúster de Cassandra.
Tecnologías Utilizadas
Apache Cassandra: Base de datos NoSQL
Node.js: Entorno de ejecución de JavaScript
Express.js: Framework para crear API REST en Node.js
cassandra-driver: Controlador de Cassandra para Node.js

## Requisitos
Asegúrate de tener instalados los siguientes componentes:

Node.js y npm
Apache Cassandra (instalado y en funcionamiento)
Cassandra-driver (se instalará con npm)

## Instalación y Configuración
Clonar el repositorio:

git clone https://github.com/tu_usuario/nombre_repositorio.git
cd nombre_repositorio

## Instalar las dependencias:

npm install

## Configurar la conexión a Cassandra:

En el archivo database.js, asegúrate de que los contactPoints y localDataCenter corresponden a la configuración de tu clúster de Cassandra.
Crear la base de datos y tablas:

## Inicia el shell de Cassandra (cqlsh) y ejecuta los comandos en el archivo schema.cql para crear el keyspace y las tablas necesarias:

CREATE KEYSPACE IF NOT EXISTS social_app
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '3'};

CREATE TABLE social_app.users (
  user_id UUID PRIMARY KEY,
  name TEXT,
  email TEXT,
  created_at TIMESTAMP
);

## Iniciar el servidor:

node server.js

## Uso
Una vez que el servidor está en funcionamiento, la aplicación estará disponible en http://localhost:3000. Puedes usar herramientas como Postman o curl para interactuar con los endpoints de la API.

## Endpoints de la API
POST /users: Crea un nuevo usuario.

Body (JSON):

{
  "name": "Nombre de Usuario",
  "email": "usuario@correo.com"
}
GET /users/
: Obtiene un usuario por su ID único.

Respuesta (JSON):

{
  "user_id": "UUID",
  "name": "Nombre de Usuario",
  "email": "usuario@correo.com",
  "created_at": "Fecha de creación"
}
PUT /users/
: Actualiza la información de un usuario.

Body (JSON):

{
  "name": "Nuevo Nombre",
  "email": "nuevo@correo.com"
}
DELETE /users/
: Elimina un usuario por su ID.

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

- database.js      # Configuración y conexión a Cassandra
- app.js           # Lógica de CRUD para la tabla de usuarios
- server.js        # Configuración del servidor y rutas de la API
- package.json     # Archivo de configuración del proyecto Node.js
- README.md        # Documentación del proyecto
