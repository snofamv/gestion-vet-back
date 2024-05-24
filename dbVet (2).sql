-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_clinicavet
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


create database if not exists bd_clinicaVet;

use bd_clinicaVet;

--
-- Table structure for table `atencion_paciente`
--

DROP TABLE IF EXISTS `atencion_paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atencion_paciente` (
  `idFichaClinica` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `idFichaIngreso` varchar(36) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atencion_paciente`
--

LOCK TABLES `atencion_paciente` WRITE;
/*!40000 ALTER TABLE `atencion_paciente` DISABLE KEYS */;
/*!40000 ALTER TABLE `atencion_paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cargo`
--

DROP TABLE IF EXISTS `cargo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cargo` (
  `idCargo` int NOT NULL AUTO_INCREMENT,
  `tipoCargo` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idCargo`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargo`
--

LOCK TABLES `cargo` WRITE;
/*!40000 ALTER TABLE `cargo` DISABLE KEYS */;
INSERT INTO `cargo` VALUES (1,'Veterinario'),(2,'Enfermero'),(3,'Recepcionista'),(4,'Administrador'),(5,'Veterinario'),(6,'Enfermero'),(7,'Recepcionista'),(8,'Administrador'),(9,'Veterinario'),(10,'Enfermero'),(11,'Recepcionista'),(12,'Administrador');
/*!40000 ALTER TABLE `cargo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `citamedica`
--

DROP TABLE IF EXISTS `citamedica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `citamedica` (
  `idCitaMedica` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `fechaCitaMedica` datetime DEFAULT NULL,
  `horaCitaMedica` time DEFAULT NULL,
  `idMascota` varchar(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `idEstadoCita` int DEFAULT NULL,
  PRIMARY KEY (`idCitaMedica`),
  KEY `FK_id_mascota` (`idMascota`),
  KEY `fk_estado_cita` (`idEstadoCita`),
  CONSTRAINT `fk_estado_cita` FOREIGN KEY (`idEstadoCita`) REFERENCES `estadoscita` (`idEstadoCita`),
  CONSTRAINT `FK_id_mascota` FOREIGN KEY (`idMascota`) REFERENCES `mascota` (`idMascota`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `citamedica`
--

LOCK TABLES `citamedica` WRITE;
/*!40000 ALTER TABLE `citamedica` DISABLE KEYS */;
/*!40000 ALTER TABLE `citamedica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dueño_mascota`
--

DROP TABLE IF EXISTS `dueño_mascota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dueño_mascota` (
  `idDueño` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `idPersona` varchar(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`idDueño`),
  KEY `fk_dueño_persona` (`idPersona`),
  CONSTRAINT `fk_dueño_persona` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`idPersona`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dueño_mascota`
--

LOCK TABLES `dueño_mascota` WRITE;
/*!40000 ALTER TABLE `dueño_mascota` DISABLE KEYS */;
/*!40000 ALTER TABLE `dueño_mascota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleado` (
  `idEmpleado` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `codMedico` varchar(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `fechaIngreso` datetime DEFAULT NULL,
  `fechaSalida` datetime DEFAULT NULL,
  `idPersona` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `idCargo` int NOT NULL,
  `idEstadoEmpleado` int NOT NULL,
  `idEspecialidad` int NOT NULL,
  PRIMARY KEY (`idEmpleado`),
  KEY `idPersona` (`idPersona`),
  KEY `idCargo` (`idCargo`),
  KEY `idEstadoEmpleado` (`idEstadoEmpleado`),
  KEY `idEspecialidad` (`idEspecialidad`),
  CONSTRAINT `empleado_ibfk_1` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`idPersona`),
  CONSTRAINT `empleado_ibfk_2` FOREIGN KEY (`idCargo`) REFERENCES `cargo` (`idCargo`),
  CONSTRAINT `empleado_ibfk_3` FOREIGN KEY (`idEstadoEmpleado`) REFERENCES `estadoempleado` (`idEstadoEmpleado`),
  CONSTRAINT `empleado_ibfk_4` FOREIGN KEY (`idEspecialidad`) REFERENCES `especialidad` (`idEspecialidad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
INSERT INTO `empleado` VALUES ('2a2dc55b-c37f-41fb-98d1-945c1164a0c0','23','1970-01-01 00:00:00','1970-01-01 00:00:00','0234aa34-f1bb-4fb1-b807-6aad4880b68f',4,1,8);
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especialidad`
--

DROP TABLE IF EXISTS `especialidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `especialidad` (
  `idEspecialidad` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idEspecialidad`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especialidad`
--

LOCK TABLES `especialidad` WRITE;
/*!40000 ALTER TABLE `especialidad` DISABLE KEYS */;
INSERT INTO `especialidad` VALUES (1,'Cirugía'),(2,'Dermatología'),(3,'Cardiología'),(4,'Oftalmología'),(5,'Neurología'),(6,'Oncología'),(7,'Medicina Animales Exóticos'),(8,'Medicina General'),(9,'Tens'),(10,'Cirugía'),(11,'Dermatología'),(12,'Cardiología'),(13,'Oftalmología'),(14,'Neurología'),(15,'Oncología'),(16,'Medicina Animales Exóticos'),(17,'Medicina General'),(18,'Tens'),(19,'Cirugía'),(20,'Dermatología'),(21,'Cardiología'),(22,'Oftalmología'),(23,'Neurología'),(24,'Oncología'),(25,'Medicina Animales Exóticos'),(26,'Medicina General'),(27,'Tens'),(28,'Medicina animales');
/*!40000 ALTER TABLE `especialidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadoempleado`
--

DROP TABLE IF EXISTS `estadoempleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estadoempleado` (
  `idEstadoEmpleado` int NOT NULL AUTO_INCREMENT,
  `estado` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idEstadoEmpleado`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadoempleado`
--

LOCK TABLES `estadoempleado` WRITE;
/*!40000 ALTER TABLE `estadoempleado` DISABLE KEYS */;
INSERT INTO `estadoempleado` VALUES (1,'Activo'),(2,'Desvinculado'),(3,'Vacaciones'),(4,'Licencia'),(5,'Inactivo');
/*!40000 ALTER TABLE `estadoempleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estados`
--

DROP TABLE IF EXISTS `estados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estados` (
  `idEstados` int NOT NULL AUTO_INCREMENT,
  `estado` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idEstados`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados`
--

LOCK TABLES `estados` WRITE;
/*!40000 ALTER TABLE `estados` DISABLE KEYS */;
INSERT INTO `estados` VALUES (1,'Activo'),(2,'Inactivo'),(3,'En espera'),(4,'En tratamiento'),(5,'Dado de alta'),(6,'En observación'),(7,'En recuperación'),(8,'En espera de pago'),(9,'En proceso'),(10,'Cancelado');
/*!40000 ALTER TABLE `estados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadosala`
--

DROP TABLE IF EXISTS `estadosala`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estadosala` (
  `idEstadoSala` int NOT NULL AUTO_INCREMENT,
  `estadoSala` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idEstadoSala`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadosala`
--

LOCK TABLES `estadosala` WRITE;
/*!40000 ALTER TABLE `estadosala` DISABLE KEYS */;
INSERT INTO `estadosala` VALUES (1,'Disponible'),(2,'Ocupado'),(3,'En limpieza'),(4,'En mantenimiento'),(5,'Disponible'),(6,'Ocupado'),(7,'En limpieza'),(8,'En mantenimiento'),(9,'Disponible'),(10,'Ocupado'),(11,'En limpieza'),(12,'En mantenimiento');
/*!40000 ALTER TABLE `estadosala` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadoscita`
--

DROP TABLE IF EXISTS `estadoscita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estadoscita` (
  `idEstadoCita` int NOT NULL AUTO_INCREMENT,
  `estadoCita` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`idEstadoCita`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadoscita`
--

LOCK TABLES `estadoscita` WRITE;
/*!40000 ALTER TABLE `estadoscita` DISABLE KEYS */;
INSERT INTO `estadoscita` VALUES (1,'Agendado'),(2,'Cancelado'),(3,'Finalizado');
/*!40000 ALTER TABLE `estadoscita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fichaclinica`
--

DROP TABLE IF EXISTS `fichaclinica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fichaclinica` (
  `idFichaClinica` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `fechaIngreso` datetime NOT NULL,
  `enfermedades` text COLLATE utf8mb4_general_ci,
  `peso` double NOT NULL,
  `observaciones` text COLLATE utf8mb4_general_ci,
  `antecedentes` text COLLATE utf8mb4_general_ci,
  `idMascota` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `idCitaMedica` varchar(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`idFichaClinica`),
  KEY `idMascota` (`idMascota`),
  KEY `fk_idCita_idfichaClinica` (`idCitaMedica`),
  CONSTRAINT `fichaclinica_ibfk_1` FOREIGN KEY (`idMascota`) REFERENCES `mascota` (`idMascota`),
  CONSTRAINT `fk_idCita_idfichaClinica` FOREIGN KEY (`idCitaMedica`) REFERENCES `citamedica` (`idCitaMedica`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fichaclinica`
--

LOCK TABLES `fichaclinica` WRITE;
/*!40000 ALTER TABLE `fichaclinica` DISABLE KEYS */;
/*!40000 ALTER TABLE `fichaclinica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fichaingreso`
--

DROP TABLE IF EXISTS `fichaingreso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fichaingreso` (
  `idFichaIngreso` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `sintomas` text COLLATE utf8mb4_general_ci,
  `antecedentes` text COLLATE utf8mb4_general_ci NOT NULL,
  `fechaAlta` datetime DEFAULT NULL,
  `fechaIngreso` datetime DEFAULT NULL,
  `diagnostico` text COLLATE utf8mb4_general_ci,
  `observaciones` text COLLATE utf8mb4_general_ci,
  `temperatura` double DEFAULT NULL,
  `idEstados` int NOT NULL,
  `idFichaClinica` varchar(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  KEY `idEstados` (`idEstados`),
  KEY `idx_idFichaIngreso` (`idFichaIngreso`),
  KEY `fk_id_ficha_clinica_ficha_ingreso` (`idFichaClinica`),
  CONSTRAINT `fichaingreso_ibfk_1` FOREIGN KEY (`idEstados`) REFERENCES `estados` (`idEstados`),
  CONSTRAINT `fk_id_ficha_clinica_ficha_ingreso` FOREIGN KEY (`idFichaClinica`) REFERENCES `fichaclinica` (`idFichaClinica`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fichaingreso`
--

LOCK TABLES `fichaingreso` WRITE;
/*!40000 ALTER TABLE `fichaingreso` DISABLE KEYS */;
/*!40000 ALTER TABLE `fichaingreso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `insumo`
--

DROP TABLE IF EXISTS `insumo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `insumo` (
  `idInsumo` int NOT NULL AUTO_INCREMENT,
  `insumo` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `fechaCaducidad` datetime DEFAULT NULL,
  `valorUnitario` int DEFAULT NULL,
  PRIMARY KEY (`idInsumo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insumo`
--

LOCK TABLES `insumo` WRITE;
/*!40000 ALTER TABLE `insumo` DISABLE KEYS */;
INSERT INTO `insumo` VALUES (1,'jeringa',400,'2025-01-20 00:00:00',2000);
/*!40000 ALTER TABLE `insumo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `insumotratamiento`
--

DROP TABLE IF EXISTS `insumotratamiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `insumotratamiento` (
  `idTratamiento` varchar(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `idInsumo` int DEFAULT NULL,
  `stockUsado` int DEFAULT NULL,
  `idInsumoTratamiento` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idInsumoTratamiento`),
  KEY `fk_insumo_tratamiento` (`idInsumo`),
  KEY `fk_tratamiento` (`idTratamiento`),
  CONSTRAINT `fk_insumo_tratamiento` FOREIGN KEY (`idInsumo`) REFERENCES `insumo` (`idInsumo`),
  CONSTRAINT `fk_tratamiento` FOREIGN KEY (`idTratamiento`) REFERENCES `tratamiento` (`idTratamiento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insumotratamiento`
--

LOCK TABLES `insumotratamiento` WRITE;
/*!40000 ALTER TABLE `insumotratamiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `insumotratamiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mascota`
--

DROP TABLE IF EXISTS `mascota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mascota` (
  `idMascota` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `nombreMascota` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `especie` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `raza` varchar(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `genero` enum('macho','hembra') COLLATE utf8mb4_general_ci NOT NULL,
  `edadMascota` int NOT NULL,
  PRIMARY KEY (`idMascota`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mascota`
--

LOCK TABLES `mascota` WRITE;
/*!40000 ALTER TABLE `mascota` DISABLE KEYS */;
/*!40000 ALTER TABLE `mascota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mascotas_dueño`
--

DROP TABLE IF EXISTS `mascotas_dueño`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mascotas_dueño` (
  `idMascota` varchar(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `idDueño` varchar(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  KEY `fk_mascota_dueño` (`idMascota`),
  KEY `fk_dueño` (`idDueño`),
  CONSTRAINT `fk_dueño` FOREIGN KEY (`idDueño`) REFERENCES `dueño_mascota` (`idDueño`),
  CONSTRAINT `fk_mascota_dueño` FOREIGN KEY (`idMascota`) REFERENCES `mascota` (`idMascota`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mascotas_dueño`
--

LOCK TABLES `mascotas_dueño` WRITE;
/*!40000 ALTER TABLE `mascotas_dueño` DISABLE KEYS */;
/*!40000 ALTER TABLE `mascotas_dueño` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `idPersona` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `nombre` varchar(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `apellidoPaterno` varchar(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `apellidoMaterno` varchar(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `rut` int DEFAULT NULL,
  `dv` char(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `sexo` varchar(1) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `telefono` int DEFAULT NULL,
  `direccion` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`idPersona`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES ('0234aa34-f1bb-4fb1-b807-6aad4880b68f','administrador','Veterinaria','Veterinaria','1990-01-01',9878745,'k','m',97878451,'calle 1','admin@vet.cl');
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receta`
--

DROP TABLE IF EXISTS `receta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receta` (
  `idReceta` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_general_ci NOT NULL,
  `medico` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `vigencia` tinyint(1) DEFAULT NULL,
  `fechaEmision` datetime NOT NULL,
  `retieneReceta` tinyint(1) DEFAULT NULL,
  KEY `idx_idReceta` (`idReceta`),
  KEY `fk_medico_empleado` (`medico`),
  CONSTRAINT `fk_medico_empleado` FOREIGN KEY (`medico`) REFERENCES `empleado` (`idEmpleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receta`
--

LOCK TABLES `receta` WRITE;
/*!40000 ALTER TABLE `receta` DISABLE KEYS */;
/*!40000 ALTER TABLE `receta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receta_ficha`
--

DROP TABLE IF EXISTS `receta_ficha`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receta_ficha` (
  `idReceta` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `idFichaIngreso` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  KEY `idReceta` (`idReceta`),
  KEY `idFichaIngreso` (`idFichaIngreso`),
  CONSTRAINT `receta_ficha_ibfk_1` FOREIGN KEY (`idReceta`) REFERENCES `receta` (`idReceta`),
  CONSTRAINT `receta_ficha_ibfk_2` FOREIGN KEY (`idFichaIngreso`) REFERENCES `fichaingreso` (`idFichaIngreso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receta_ficha`
--

LOCK TABLES `receta_ficha` WRITE;
/*!40000 ALTER TABLE `receta_ficha` DISABLE KEYS */;
/*!40000 ALTER TABLE `receta_ficha` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sala`
--

DROP TABLE IF EXISTS `sala`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sala` (
  `idSala` int NOT NULL AUTO_INCREMENT,
  `idTipoSala` int NOT NULL,
  `idEstadoSala` int NOT NULL,
  PRIMARY KEY (`idSala`),
  KEY `idTipoSala` (`idTipoSala`),
  KEY `idEstadoSala` (`idEstadoSala`),
  CONSTRAINT `sala_ibfk_1` FOREIGN KEY (`idTipoSala`) REFERENCES `tiposala` (`idTipoSala`),
  CONSTRAINT `sala_ibfk_2` FOREIGN KEY (`idEstadoSala`) REFERENCES `estadosala` (`idEstadoSala`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sala`
--

LOCK TABLES `sala` WRITE;
/*!40000 ALTER TABLE `sala` DISABLE KEYS */;
/*!40000 ALTER TABLE `sala` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiposala`
--

DROP TABLE IF EXISTS `tiposala`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tiposala` (
  `idTipoSala` int NOT NULL AUTO_INCREMENT,
  `tipoSala` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idTipoSala`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiposala`
--

LOCK TABLES `tiposala` WRITE;
/*!40000 ALTER TABLE `tiposala` DISABLE KEYS */;
INSERT INTO `tiposala` VALUES (1,'Consulta'),(2,'Quirófano'),(3,'Sala de espera'),(4,'Rayos X'),(5,'Laboratorio'),(6,'Hospitalización'),(7,'Consulta'),(8,'Quirófano'),(9,'Sala de espera'),(10,'Rayos X'),(11,'Laboratorio'),(12,'Hospitalización'),(13,'Consulta'),(14,'Quirófano'),(15,'Sala de espera'),(16,'Rayos X'),(17,'Laboratorio'),(18,'Hospitalización');
/*!40000 ALTER TABLE `tiposala` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tratamiento`
--

DROP TABLE IF EXISTS `tratamiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tratamiento` (
  `idTratamiento` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_general_ci NOT NULL,
  `fecha` date NOT NULL,
  `tipo` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `costo` double DEFAULT NULL,
  PRIMARY KEY (`idTratamiento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tratamiento`
--

LOCK TABLES `tratamiento` WRITE;
/*!40000 ALTER TABLE `tratamiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `tratamiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tratamiento_mascota`
--

DROP TABLE IF EXISTS `tratamiento_mascota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tratamiento_mascota` (
  `idFichaClinica` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `idTratamiento` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  KEY `idFichaClinica` (`idFichaClinica`),
  KEY `idTratamiento` (`idTratamiento`),
  CONSTRAINT `tratamiento_mascota_ibfk_1` FOREIGN KEY (`idFichaClinica`) REFERENCES `fichaclinica` (`idFichaClinica`),
  CONSTRAINT `tratamiento_mascota_ibfk_2` FOREIGN KEY (`idTratamiento`) REFERENCES `tratamiento` (`idTratamiento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tratamiento_mascota`
--

LOCK TABLES `tratamiento_mascota` WRITE;
/*!40000 ALTER TABLE `tratamiento_mascota` DISABLE KEYS */;
/*!40000 ALTER TABLE `tratamiento_mascota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `idEmpleado` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `nombreUsuario` varchar(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `nombreUsuario` (`nombreUsuario`),
  KEY `idEmpleado` (`idEmpleado`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`idEmpleado`) REFERENCES `empleado` (`idEmpleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('a93e4c22-c949-41fe-8c03-69e9f27fc5d3','2a2dc55b-c37f-41fb-98d1-945c1164a0c0','$2b$10$YiTFHV5V7LdSH6aEyyc47OjDE8MkaW8oMlacyzbQYifOU/9guyzbe','admin');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-23 16:48:43
