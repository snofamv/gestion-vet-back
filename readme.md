# variables de entorno .env

```bash
PORT = 80
NODE_ENVIRONMENT = 'production'

DB_HOST='localhost'
DB_PORT=3306
DB_NAME='bd_clinicaVet'
DB_USER='userVet'
DB_PASSWORD='root'
```

## ENDPOINT USUARIO

LOGIN USUARIO
POST /auth/login

```json
{
  "nombreUsuario": "",
  "password": ""
}
```

SIGNUP USUARIO => REGISTRAR PERSONA => EMPLEADO => USUARIO
POST /auth/login

```json
{
  "nombreUsuario": "",
  "password": "",
  "nombre": "Ana",
  "apellidoPaterno": "Rodriguez",
  "apellidoMaterno": "Rodriguez",
  "fechaNacimiento": "1990-01-01",
  "rut": 9878745,
  "dv": "k",
  "sexo": "M",
  "telefono": 97878451,
  "direccion": "calle 1",
  "email": "ana@ana123.cl"
}
```

## ENDPOINT DUEÑO MASCOTAS

REGISTRAR DUEÑO MASCOTA
POST /titular-mascota

```json
{
  "nombre": "Ana",
  "apellidoPaterno": "Rodriguez",
  "apellidoMaterno": "Rodriguez",
  "fechaNacimiento": "1990-01-01",
  "rut": 9878745,
  "dv": "k",
  "sexo": "M",
  "telefono": 97878451,
  "direccion": "calle 1",
  "email": "ana@ana123.cl"
}
```

OTENER TODOS LOS DUEÑOS DE MASCOTAS
GET /titulares-mascota

OBTENER DUEÑO DE MASCOTA POR ID
GET /titular-mascota/rut/:rut

## ENDPOINT PERSONA

ACTUALIZAR DATOS PERSONA
PATCH /persona

```json
{
  "idPersona": "###############",
  "nombre": "Ana",
  "apellidoPaterno": "Rodriguez",
  "apellidoMaterno": "Rodriguez",
  "fechaNacimiento": "1990-01-01",
  "rut": 9878745,
  "dv": "k",
  "sexo": "M",
  "telefono": 97878451,
  "direccion": "calle 1",
  "email": "ana@ana123.cl"
}
```

LISTAR TODAS LAS PERSONAS
GET /personas

## ENDPOINT EMPLEADO

OBTENER EMPLEADO POR RUT
GET /empleado/rut/:rut

OBTENER EMPLEADO POR NOMBRE USUARIO
GET /empleado/nombre-usuario/:nombreUsuario

OBTENER EMPLEADO POR ID PERSONA
GET /empleado/id-persona/:idPersona

ACTUALIZAR EMPLEADO
PATCH /empleado

```json
{
  "idEmpleado": "###############",
  "codMedico": "AAD",
  "fechaIngreso": "2021-01-01",
  "fechaSalida": "201-01-01",
  "idCargo": 1,
  "idEstadoEmpleado": 5,
  "idEspecialidad": 1
}
```

## ENDPOINTS MASCOTAS

OBTENER TODAS LAS MASCOTAS
GET /MASCOTAS

OBTENER MASCOTAS DE UN DUEÑO
GET /titular-mascota/rut/:RUT/mascotas

OBTENER DETALLE DE MASCOTA
GET /mascota/:idMascota

REGISTRAR MASCOTA
POST /titular-mascota/rut/:rut/mascota

```json
{
  "nombreMascota": "destructor letal23",
  "especie": "perro",
  "raza": "chihuahua",
  "genero": "macho",
  "edadMascota": 5
}
```

ACTUALIZAR MASCOTA
PATCH /mascota

```json
{
  "idMascota": "88fbc312-63ff-47f3-8dc7-bb73bcee5a48",
  "nombreMascota": "destructor letallll",
  "especie": "perro",
  "raza": "chihuahua",
  "genero": "macho",
  "edadMascota": 5
}
```

# paquetes de prettier y linter

```

    //  instalación  y config de linter
    npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin


    // instalación y config de prettier con ts
    npm install --save-dev eslint-config-prettier eslint-plugin-prettier

```
