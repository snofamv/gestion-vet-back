-[Variables de entorno](#variables-de-entorno-env)  
-[Endpoint Usuario](#endpoint-usuario)  
-[Endpoint Persona](#endpoint-persona)  
-[Endpoint empleado](#endpoint-empleado)  
-[Endpoint Dueño Mascota](#endpoint-dueño-mascotas)  
-[Endpoint Mascota](#endpoint-mascotas)  
-[Endpoint FichaClinica](#endpoint-fichaclinica)  
-[Endpoint Tratamiento](#endpoint-tratamiento)  
-[Endpoint fichaIngreso](#endpoint-fichaingreso)  
-[Endpoint receta](#endpoint-receta)

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

VALIDAR TOKEN
GET /auth/validate-token?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzdWFyaW8iOiIwZmQ5MTYyMC05MGU3LTRkMjQtYjBiMC01ODNlNDBlNzY3NjciLCJpZEVtcGxlYWRvIjoiYWZjYTM3OGUtZjc3MC00ZmY2LWJiNmUtZDg2NGY2YjBiZWMzIiwibm9tYnJlVXN1YXJpbyI6InVzZXIxMjMiLCJpYXQiOjE3MTU3MDYyNDcsImV4cCI6MTcxNTcwOTg0N30.YindwLU_E8ME0BC9PeKoqmjxzh_TdvPHxSs4rBmFl4o

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

## ENDPOINT MASCOTAS

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

## ENDPOINT FICHACLINICA

OBTENER FICHAS CLINICAS DE TODOS LOS DUEÑOS DE MASCOTAS

GET /fichas-clinicas

REGISTRAR FICHA CLINICA

POST /ficha-clinica

```json
{
  "fechaIngreso": "2024/05/01",
  "enfermedades": "parvovirosis",
  "peso": 3,
  "observaciones": "vómitos, diarrea, sin apetito",
  "antecedentes": "",
  "idMascota": "88fbc312-63ff-47f3-8dc7-bb73bcee5a48"
}
```

ACTUALIZAR FICHA CLINICA`

PATCH /ficha-clinica

```json
{
  "idFichaClinica": "5cc77a63-9954-4405-85da-55da2f04ed03",
  "fechaIngreso": "2024/05/01",
  "enfermedades": "parvovirosis",
  "peso": 3,
  "observaciones": "vómitos, diarrea, sin apetito",
  "antecedentes": "",
  "idMascota": "88fbc312-63ff-47f3-8dc7-bb73bcee5a48"
}
```

OBTENER FICHAS CLINICAS DUEÑO POR RUT

GET /fichas-clinicas/rut/:rut

OBTENER FICHA CLINICA POR IdFichaClinica

GET /ficha-clinica/:idFichaClinica

OBTENER FICHA CLINICA POR IdMascota

GET /ficha-clinica/mascota/:idMascota

## ENDPOINT TRATAMIENTO

REGISTRAR TRATAMIENTO VINCULADO A FICHA CLINICA

POST /tratamiento-mascota/ficha-clinica/:idFichaClinica

```json
{
  "descripcion": "control médico revisión mascota",
  "fecha": "2024-05-01",
  "tipo": "general",
  "costo": 15000
}
```

ACTUALIZAR TRATAMIENTO MASCOTA

PATCH /tratamiento-mascota

```json
{
  "idTratamiento": "240dd527-2943-4d25-94e5-cf287b714088",
  "descripcion": "control médico revisión mascota",
  "fecha": "2024-05-01",
  "tipo": "general",
  "costo": 10000
}
```

OBTENER TRATAMIENTOS MASCOTA POR ID FICHA CLINICA

GET /tratamientos-mascotas/ficha-clinica/:idFichaClinica'

OBTENER TRATAMIENTO MASCOTA POR ID TRATAMIENTO

GET /tratamiento-mascota/tratamiento/:idTratamiento

## ENDPOINT FICHAINGRESO

REGISTRAR UNA FICHA INGRESO

POST /ficha-ingreso

```json
{
  "sintomas": "Diarrea acuosa y frecuente durante los últimos tres días",
  "antecedentes": "comenzó con diarrea hace tres días. Inicialmente, las heces eran blandas, pero han progresado a ser acuosas. El dueño reporta que ha estado menos activo y no muestra interés en la comida.",
  "fechaAlta": "2024-01-01",
  "fechaIngreso": "2024-01-02",
  "diagnostico": "Gastroenteritis infecciosa (bacteriana, viral o parasitaria).",
  "observaciones": "Instrucciones al propietario para monitorear la ingesta de agua y comida de Max, así como la consistencia de sus heces.",
  "temperatura": 38,
  "idEstados": 5,
  "idFichaClinica": "5cc77a63-9954-4405-85da-55da2f04ed03"
}
```

ACTUALIZAR UNA FICHA INGRESO

PATCH /ficha-ingreso

```json
{
  "idFichaIngreso": "e5450417-f2b1-43d8-911b-870fbf7c37b5",
  "sintomas": "Diarrea acuosa y frecuente durante los últimos tres días",
  "antecedentes": "comenzó con diarrea hace tres días. Inicialmente, las heces eran blandas, pero han progresado a ser acuosas. El dueño reporta que ha estado menos activo y no muestra interés en la comida.",
  "fechaAlta": "2024-01-03",
  "fechaIngreso": "2024-01-01",
  "diagnostico": "Gastroenteritis infecciosa (bacteriana, viral o parasitaria).",
  "observaciones": "Instrucciones al propietario para monitorear la ingesta de agua y comida de Max, así como la consistencia de sus heces.",
  "temperatura": 38,
  "idEstados": 5,
  "idFichaClinica": "5cc77a63-9954-4405-85da-55da2f04ed03"
}
```

OBTENER FICHA INGRESO POR IdFichaClinica

GET /ficha-ingreso/Ficha-clinica/:idFichaClinica

OBTENER FICHA INGRESO POR idFichaIngreso

GET /ficha-ingreso/:idFichaIngreso

## ENDPOINT RECETA

REGISTRAR RECETA MEDICA MASCOTA POR idFichaIngreso

POST /receta-mascota/ficha-ingreso/:idFichaIngreso

```json
{
  "descripcion": "Metronidazol: 15 mg/kg dos veces al día durante 5 días para tratar la Giardia",
  "medico": "afca378e-f770-4ff6-bb6e-d864f6b0bec3",
  "vigencia": 1,
  "fechaEmision": "2024-01-01",
  "retieneReceta": 0
}
```

ACTUALIZAR RECETA MEDICA MASCOTA

PATCH /receta-mascota

```json
{
  "idReceta": "c13852a8-e561-440e-a0c5-6be2c76096d1",
  "descripcion": "Metronidazol: 15 mg/kg dos veces al día durante 5 días para tratar la Giardia",
  "medico": "afca378e-f770-4ff6-bb6e-d864f6b0bec3",
  "vigencia": 1,
  "fechaEmision": "2024-01-01",
  "retieneReceta": 0
}
```

OBTENER RECETAS MEDICAS MASCOTA POR IdFichaIngreso

GET /recetas-mascota/ficha-ingreso/:idFichaIngreso

### paquetes de prettier y linter

```

    //  instalación  y config de linter
    npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin


    // instalación y config de prettier con ts
    npm install --save-dev eslint-config-prettier eslint-plugin-prettier

```
