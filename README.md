# Building an App with NoSQL Database Cassandra

Guía de Pasos: Aplicación CRUD con Apache Cassandra
Esta guía te llevará paso a paso para crear y ejecutar una aplicación CRUD usando Apache Cassandra y Node.js.

1. Clona el Repositorio
Abre tu terminal y ejecuta el siguiente comando para clonar el proyecto en tu máquina local:

git clone https://github.com/tu_usuario/nombre_repositorio.git
cd nombre_repositorio

2. Instala las Dependencias
Asegúrate de que estás en el directorio del proyecto y luego instala las dependencias de Node.js:

npm install

3. Configura la Conexión a Cassandra
Abre el archivo database.js.
Configura los contactPoints y localDataCenter de acuerdo con la configuración de tu clúster de Cassandra para garantizar la conexión.

5. Crea el Keyspace y la Tabla en Cassandra
Inicia el shell de Cassandra (cqlsh) en tu terminal.

Ejecuta los siguientes comandos para crear el keyspace y la tabla:

CREATE KEYSPACE IF NOT EXISTS social_app
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '3'};

CREATE TABLE social_app.users (
  user_id UUID PRIMARY KEY,
  name TEXT,
  email TEXT,
  created_at TIMESTAMP
);

5. Inicia el Servidor
Ejecuta el siguiente comando para iniciar el servidor de la aplicación:

node server.js

Tu aplicación ahora estará ejecutándose en http://localhost:3000.

6. Prueba los Endpoints de la API
Usa Postman o curl para interactuar con los endpoints de la API:

Endpoints Disponibles
Crear un Usuario (POST /users):

En el body de la solicitud (JSON):
json
{
  "name": "Nombre de Usuario",
  "email": "usuario@correo.com"
}
Obtener un Usuario (GET /users/
):

Respuesta esperada (JSON):
json
{
  "user_id": "UUID",
  "name": "Nombre de Usuario",
  "email": "usuario@correo.com",
  "created_at": "Fecha de creación"
}
Actualizar un Usuario (PUT /users/
):

En el body de la solicitud (JSON):
json
{
  "name": "Nuevo Nombre",
  "email": "nuevo@correo.com"
}
Eliminar un Usuario (DELETE /users/
):

Elimina el usuario con el id especificado.
