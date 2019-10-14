CREATE DATABASE  IF NOT EXISTS `SGIColegio` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `SGIColegio`;
-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: SGIColegio
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.19.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ACL`
--

DROP TABLE IF EXISTS `ACL`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ACL` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(512) DEFAULT NULL,
  `property` varchar(512) DEFAULT NULL,
  `accessType` varchar(512) DEFAULT NULL,
  `permission` varchar(512) DEFAULT NULL,
  `principalType` varchar(512) DEFAULT NULL,
  `principalId` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ACL`
--

LOCK TABLES `ACL` WRITE;
/*!40000 ALTER TABLE `ACL` DISABLE KEYS */;
/*!40000 ALTER TABLE `ACL` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AccessToken`
--

DROP TABLE IF EXISTS `AccessToken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AccessToken` (
  `id` varchar(255) NOT NULL,
  `ttl` int(11) DEFAULT NULL,
  `scopes` text,
  `created` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AccessToken`
--

LOCK TABLES `AccessToken` WRITE;
/*!40000 ALTER TABLE `AccessToken` DISABLE KEYS */;
/*!40000 ALTER TABLE `AccessToken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Alumno`
--

DROP TABLE IF EXISTS `Alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Alumno` (
  `DNIAlumno` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `fechaNacimiento` varchar(45) NOT NULL,
  `domicilio` varchar(200) NOT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `fechaIngColegio` varchar(45) NOT NULL,
  `cuil` varchar(45) NOT NULL,
  PRIMARY KEY (`DNIAlumno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Alumno`
--

LOCK TABLES `Alumno` WRITE;
/*!40000 ALTER TABLE `Alumno` DISABLE KEYS */;
INSERT INTO `Alumno` VALUES (39364294,'Jeremias Ruben','Toledo Medrano','M','1996-02-24','brown 81','4912680',NULL,'2019-10-03','545646'),(42916547,'Rocio Alexandra','Farfan','F','2000-12-14','cornejo 711','3874699199','alexandrafarfan123@gmail.com','2019-10-13','24429165478');
/*!40000 ALTER TABLE `Alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AlumnoCurso`
--

DROP TABLE IF EXISTS `AlumnoCurso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AlumnoCurso` (
  `idAlumnoCurso` int(11) NOT NULL AUTO_INCREMENT,
  `DNIAlumno` int(11) NOT NULL,
  `idCurso` int(11) NOT NULL,
  PRIMARY KEY (`idAlumnoCurso`),
  KEY `fk_Alumno_idx` (`DNIAlumno`),
  KEY `fk_Curso_idx` (`idCurso`),
  CONSTRAINT `fk_Alumno` FOREIGN KEY (`DNIAlumno`) REFERENCES `Alumno` (`DNIAlumno`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Curso` FOREIGN KEY (`idCurso`) REFERENCES `Curso` (`idCurso`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AlumnoCurso`
--

LOCK TABLES `AlumnoCurso` WRITE;
/*!40000 ALTER TABLE `AlumnoCurso` DISABLE KEYS */;
INSERT INTO `AlumnoCurso` VALUES (6,39364294,1);
/*!40000 ALTER TABLE `AlumnoCurso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AlumnoFichaMedica`
--

DROP TABLE IF EXISTS `AlumnoFichaMedica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AlumnoFichaMedica` (
  `DNIAlumno` int(11) NOT NULL,
  `obraSocialNom` varchar(45) DEFAULT NULL,
  `obraSocialNroAfil` varchar(45) DEFAULT NULL,
  `tieneAlergia` varchar(45) NOT NULL,
  `alergiaMed` varchar(45) DEFAULT NULL,
  `alergiaDetalle` varchar(45) DEFAULT NULL,
  `emergenciaNom` varchar(45) NOT NULL,
  `emergenciaTel` varchar(45) NOT NULL,
  `emergenciaVinculo` varchar(45) NOT NULL,
  `medicoCabNom` varchar(45) DEFAULT NULL,
  `medicoCabTel` varchar(45) DEFAULT NULL,
  `medHabNom` varchar(45) DEFAULT NULL,
  `medHabDosis` varchar(45) DEFAULT NULL,
  `tieneMedicoCab` varchar(45) NOT NULL,
  `tieneMedHab` varchar(45) NOT NULL,
  `tieneObraSocial` varchar(45) NOT NULL,
  PRIMARY KEY (`DNIAlumno`),
  KEY `fk_DNIAlumno_idx` (`DNIAlumno`),
  CONSTRAINT `fk_DNIAlumno` FOREIGN KEY (`DNIAlumno`) REFERENCES `Alumno` (`DNIAlumno`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AlumnoFichaMedica`
--

LOCK TABLES `AlumnoFichaMedica` WRITE;
/*!40000 ALTER TABLE `AlumnoFichaMedica` DISABLE KEYS */;
INSERT INTO `AlumnoFichaMedica` VALUES (39364294,'','','No','','','jere','4912680','jere','','','','','No','No','No');
/*!40000 ALTER TABLE `AlumnoFichaMedica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AlumnoTutor`
--

DROP TABLE IF EXISTS `AlumnoTutor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AlumnoTutor` (
  `DNITutor` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `fechaNacimiento` varchar(45) NOT NULL,
  `domicilio` varchar(200) NOT NULL,
  `telefonoPersonal` varchar(45) NOT NULL,
  `telefonoTrabajo` varchar(45) DEFAULT NULL,
  `cuil` varchar(45) NOT NULL,
  `parentezco` varchar(45) NOT NULL,
  `DNIAlumno` int(11) NOT NULL,
  PRIMARY KEY (`DNITutor`),
  KEY `fk_DNIAlumno_idx` (`DNIAlumno`),
  CONSTRAINT `fk_AlumnoTutor_1` FOREIGN KEY (`DNIAlumno`) REFERENCES `Alumno` (`DNIAlumno`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AlumnoTutor`
--

LOCK TABLES `AlumnoTutor` WRITE;
/*!40000 ALTER TABLE `AlumnoTutor` DISABLE KEYS */;
INSERT INTO `AlumnoTutor` VALUES (555,'Jeremias','Toledo','M','9999-02-24','brown 82','495656','5656','555','hijo',39364294);
/*!40000 ALTER TABLE `AlumnoTutor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AsignacionDocente`
--

DROP TABLE IF EXISTS `AsignacionDocente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AsignacionDocente` (
  `idAsignacionDocente` int(11) NOT NULL AUTO_INCREMENT,
  `DNIDocente` int(8) DEFAULT NULL,
  `idPeriodo` varchar(45) DEFAULT NULL,
  `curso` varchar(45) DEFAULT NULL,
  `materia` varchar(45) DEFAULT NULL,
  `nombreDocente` varchar(45) DEFAULT NULL,
  `apellidoDocente` varchar(45) DEFAULT NULL,
  `division` varchar(45) DEFAULT NULL,
  `nivel` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idAsignacionDocente`),
  KEY `dniDoc_idx` (`DNIDocente`),
  CONSTRAINT `dniDoc` FOREIGN KEY (`DNIDocente`) REFERENCES `Empleado` (`dni`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AsignacionDocente`
--

LOCK TABLES `AsignacionDocente` WRITE;
/*!40000 ALTER TABLE `AsignacionDocente` DISABLE KEYS */;
INSERT INTO `AsignacionDocente` VALUES (1,43396665,'26','PRIMERO','Lengua y Literatura','Carolina','Toledo','A','2');
/*!40000 ALTER TABLE `AsignacionDocente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Aula`
--

DROP TABLE IF EXISTS `Aula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Aula` (
  `idAula` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `capacidad` int(11) DEFAULT NULL,
  `disponibilidad` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idAula`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Aula`
--

LOCK TABLES `Aula` WRITE;
/*!40000 ALTER TABLE `Aula` DISABLE KEYS */;
INSERT INTO `Aula` VALUES (2,'sum',200,'Disponible'),(3,'sum',200,'Disponible');
/*!40000 ALTER TABLE `Aula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cobro`
--

DROP TABLE IF EXISTS `Cobro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Cobro` (
  `idCobro` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` varchar(45) DEFAULT NULL,
  `nro_comprobante` varchar(45) DEFAULT NULL,
  `dniAlumno` bigint(30) DEFAULT NULL,
  `idFormapago` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idCobro`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cobro`
--

LOCK TABLES `Cobro` WRITE;
/*!40000 ALTER TABLE `Cobro` DISABLE KEYS */;
/*!40000 ALTER TABLE `Cobro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cuota`
--

DROP TABLE IF EXISTS `Cuota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Cuota` (
  `idCuota` int(11) NOT NULL AUTO_INCREMENT,
  `dniAlumno` bigint(30) DEFAULT NULL,
  `nroCuota` varchar(45) DEFAULT NULL,
  `mes` varchar(45) DEFAULT NULL,
  `vencimiento` varchar(45) DEFAULT NULL,
  `anio` varchar(45) DEFAULT NULL,
  `importe` double DEFAULT NULL,
  `saldo` double DEFAULT NULL,
  PRIMARY KEY (`idCuota`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cuota`
--

LOCK TABLES `Cuota` WRITE;
/*!40000 ALTER TABLE `Cuota` DISABLE KEYS */;
/*!40000 ALTER TABLE `Cuota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Curso`
--

DROP TABLE IF EXISTS `Curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Curso` (
  `idCurso` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `division` varchar(45) NOT NULL,
  `nivel` varchar(20) NOT NULL,
  PRIMARY KEY (`idCurso`),
  KEY `idNivel_idx` (`nivel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Curso`
--

LOCK TABLES `Curso` WRITE;
/*!40000 ALTER TABLE `Curso` DISABLE KEYS */;
INSERT INTO `Curso` VALUES (1,'Primero','A','Primaria'),(2,'Primero','B','Primaria'),(3,'Segundo','A','Primaria'),(4,'Segundo','A','Primaria'),(5,'Tercero','A','Primaria'),(6,'Tercero','B','Primaria'),(7,'Cuarto','A','Primaria'),(8,'Cuarto','B','Primaria'),(9,'Quinto','A','Primaria'),(10,'Quinto','B','Primaria'),(11,'Sexto','A','Primaria'),(12,'Sexto','B','Primaria'),(13,'Primero','A','Secundaria'),(14,'Primero','B','Secundaria'),(15,'Segundo','A','Secundaria'),(16,'Segundo','B','Secundaria'),(17,'Tercero','A','Secundaria'),(18,'Tercero','B','Secundaria'),(19,'Cuarto','A','Secundaria'),(20,'Cuarto','B','Secundaria'),(21,'Quinto','A','Secundaria'),(22,'Quinto','B','Secundaria');
/*!40000 ALTER TABLE `Curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DetallePlanMateria`
--

DROP TABLE IF EXISTS `DetallePlanMateria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DetallePlanMateria` (
  `idDetallePlanMateria` int(11) NOT NULL,
  `codMateria` int(11) DEFAULT NULL,
  PRIMARY KEY (`idDetallePlanMateria`),
  KEY `codMateria` (`codMateria`),
  CONSTRAINT `codMateria` FOREIGN KEY (`codMateria`) REFERENCES `Materia` (`idMateria`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DetallePlanMateria`
--

LOCK TABLES `DetallePlanMateria` WRITE;
/*!40000 ALTER TABLE `DetallePlanMateria` DISABLE KEYS */;
/*!40000 ALTER TABLE `DetallePlanMateria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Docente`
--

DROP TABLE IF EXISTS `Docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Docente` (
  `DNI` bigint(20) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `cuil` varchar(14) NOT NULL,
  `fechaNacimiento` varchar(45) NOT NULL,
  `fechaIngColegio` varchar(45) NOT NULL,
  `fechaIngDocencia` varchar(45) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  PRIMARY KEY (`DNI`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Docente`
--

LOCK TABLES `Docente` WRITE;
/*!40000 ALTER TABLE `Docente` DISABLE KEYS */;
INSERT INTO `Docente` VALUES (12038,'Jorgelina','Robertita Perez','asdasd','12312','12983','2019-09-24','2019-09-14','2019-09-25','F'),(89787,'Jeremias Ruben','Toledo Medrano','brown 81','5','20393642948','2019-08-27','2019-08-27','2019-08-28','M'),(598181,'Lechon','Lechon','asda','124','198237','0008-09-29','2019-09-17','2019-09-10','M'),(9876544,'carolina','Toledo','brown 81','8','654321','2001-03-16','2019-09-19','2019-09-19','F'),(9999999,'Jeremías ','Toledo','asdasdw','123123','123123','2019-09-24','2019-09-14','2019-09-24','M'),(19283746,'Jeremías','Toledo','his house','19283746','19283746','2019-09-24','2019-09-14','2019-09-23','M'),(38951736,'Virginia','Bassi Soledad','J Hernandez 1469, Jose Maria Bosch','string','23-38951736-4','1995-07-26','2019-08-26','2010-05-25','Mujer'),(39364283,'Jeremias Ruben','Toledo Medrano','brown 81','342','20393642948','2019-08-27','2019-08-27','2019-08-27','M'),(39364294,'Jeremias Ruben','Toledo Medrano','brown 81','4912680','20393642948','1996-02-24','2019-08-26','2014-02-02','Hombre'),(40330241,'Fernando Gabriel','Castillo Sorani','Barrio San Carlos Manzana 61 Casa 18, Salta Capital','+5493874137551','20-40330241-5','1997-04-10','2019-08-26','2010-05-25','Hombre'),(40330242,'Fernando Gabriel','Castillo Sorani','Barrio San Carlos Manzana 61 Casa 18, Salta Capital','+5493874137551','20-40330241-5','1997-04-10','2019-09-14','2019-09-17','M'),(55555555,'Jeremias','TM','brown 81','5757\\','5787','2019-08-28','2019-08-28','2019-08-21','M'),(666666666,'Jeremias','R','brown 81','342','56565','2019-08-19','2019-08-27','2019-08-29','M');
/*!40000 ALTER TABLE `Docente` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER tr_bajaDocente AFTER DELETE ON Docente FOR EACH ROW
BEGIN
	INSERT INTO `Docente-Historico` VALUES(OLD.DNI,OLD.nombre,OLD.apellido,OLD.direccion,OLD.telefono,OLD.cuil,OLD.fechaNacimiento,OLD.fechaIngColegio,CURDATE(),OLD.fechaIngDocencia,OLD.sexo);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Docente-Historico`
--

DROP TABLE IF EXISTS `Docente-Historico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Docente-Historico` (
  `DNI` bigint(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `cuil` varchar(45) NOT NULL,
  `fechaNacimiento` varchar(45) NOT NULL,
  `fechaIngColegio` varchar(45) NOT NULL,
  `fechaEgrColegio` varchar(45) NOT NULL,
  `fechaIngDocencia` varchar(45) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  PRIMARY KEY (`DNI`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Docente-Historico`
--

LOCK TABLES `Docente-Historico` WRITE;
/*!40000 ALTER TABLE `Docente-Historico` DISABLE KEYS */;
INSERT INTO `Docente-Historico` VALUES (222,'Jorge','ASD','asdasd','123123','641','2019-09-24','2019-09-14','2019-09-17','2019-09-17','M'),(2222,'Gon','Barrientos','Tu casa','5555','2222','1996-09-16','2019-09-06','2019-09-23','2019-09-18','M'),(6666,'Maximiliano','Esbiza','En su casa','+5493874123123','454','2019-08-28','2019-08-27','2019-09-23','2019-08-27','F'),(92684,'Pedro','Sanchez','Su casaa','4556','13216','2019-09-17','2019-09-14','2019-09-17','2019-09-24','M'),(36987412,'JR','TM','brown 81','5758','23','1992-02-02','2019-08-28','2019-09-17','2019-08-28','M');
/*!40000 ALTER TABLE `Docente-Historico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DocenteCurso`
--

DROP TABLE IF EXISTS `DocenteCurso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DocenteCurso` (
  `idDocenteCurso` int(11) NOT NULL AUTO_INCREMENT,
  `curso` varchar(50) DEFAULT NULL,
  `DNIDocente` int(11) DEFAULT NULL,
  `idMateria` int(11) DEFAULT NULL,
  `seccion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idDocenteCurso`),
  KEY `DNIDocente_idx` (`DNIDocente`),
  KEY `Materia_idx` (`idMateria`),
  CONSTRAINT `DNIDocente` FOREIGN KEY (`DNIDocente`) REFERENCES `Empleado` (`dni`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Materia` FOREIGN KEY (`idMateria`) REFERENCES `Materia` (`idMateria`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DocenteCurso`
--

LOCK TABLES `DocenteCurso` WRITE;
/*!40000 ALTER TABLE `DocenteCurso` DISABLE KEYS */;
INSERT INTO `DocenteCurso` VALUES (1,'PRIMERO',43396665,1,'A'),(2,'PRIMERO',43396665,11,'A'),(3,'PRIMERO',43396665,11,'A'),(4,'PRIMERO',43396665,2,'A');
/*!40000 ALTER TABLE `DocenteCurso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Empleado`
--

DROP TABLE IF EXISTS `Empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Empleado` (
  `idEmpleado` int(8) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `dni` int(8) NOT NULL,
  `cuil` varchar(14) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `fechaNacimiento` varchar(45) NOT NULL,
  `fechaIngColegio` varchar(45) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `tipoEmpleado` varchar(45) NOT NULL,
  `fechaIngDocencia` varchar(45) DEFAULT NULL,
  `correo` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idEmpleado`),
  UNIQUE KEY `idEmpleado_UNIQUE` (`idEmpleado`),
  UNIQUE KEY `dni_UNIQUE` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Empleado`
--

LOCK TABLES `Empleado` WRITE;
/*!40000 ALTER TABLE `Empleado` DISABLE KEYS */;
INSERT INTO `Empleado` VALUES (1,'sdf','sdf',4445,'45445','broasd','4343','2019-09-26','2019-09-26','M','Docente',NULL,'werwer@asdas.com','ssdf445'),(2,'Carolina','Toledo',43396665,'20-43396665-8','brown 81','5555`','2001-03-16','2019-10-04','F','Docente',NULL,'caro@o.com','ctoledo665');
/*!40000 ALTER TABLE `Empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Empleado-Historico`
--

DROP TABLE IF EXISTS `Empleado-Historico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Empleado-Historico` (
  `idEmpleado` int(8) DEFAULT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `dni` int(8) NOT NULL,
  `cuil` varchar(14) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `fechaNacimiento` varchar(45) NOT NULL,
  `fechaIngColegio` varchar(45) NOT NULL,
  `fechaEgrColegio` varchar(45) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `tipoEmpleado` varchar(45) NOT NULL,
  `correo` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`dni`),
  UNIQUE KEY `dni_UNIQUE` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Empleado-Historico`
--

LOCK TABLES `Empleado-Historico` WRITE;
/*!40000 ALTER TABLE `Empleado-Historico` DISABLE KEYS */;
INSERT INTO `Empleado-Historico` VALUES (10,'camil','toledo',963,'852','e','2','2019-09-19','2019-09-19','2019-09-19','F','Cocina',NULL,NULL),(9,'Gabriel','Barrientos',12344,'5331','12344','1234','2019-09-03','2019-09-16','2019-09-17','F','Cocina',NULL,NULL),(8,'test','Castillo Sorani',1223441,'67844','Su casaa','111','2019-09-17','2019-09-16','2019-09-17','F','Administración',NULL,NULL),(7,'Gabriel','Sorani',1234931,'201729340','Su casaa','9123089123','1993-02-20','2019-09-16','2019-09-18','M','Administración',NULL,NULL),(6,'Gonzalo','Barrientos',39123123,'2039123123','Su casaa','+5493874137551','1996-09-16','2019-09-16','2019-09-18','M','Administración',NULL,NULL),(8,'Jeremias','Toledo',39364294,'20393642948','casa','97889','1996-02-24','2019-09-16','2019-09-19','M','Administracion',NULL,NULL),(9,'Jere','Toledo',39364295,'209666','casa','6565','1996-02-24','2019-09-16','2019-09-19','M','Administracion',NULL,NULL),(10,'Jere','Toledo',39364296,'209666','casa','6565','1996-02-24','2019-09-16','2019-09-18','M','Administracion',NULL,NULL),(11,'Jere','Toledo',39364297,'209666','casa','6565','1996-02-24','2019-09-16','2019-09-18','M','Administracion',NULL,NULL),(12,'Jere','Toledo',39364298,'209666','casa','6565','1996-02-24','2019-09-16','2019-09-18','M','Administracion',NULL,NULL);
/*!40000 ALTER TABLE `Empleado-Historico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FormaPago`
--

DROP TABLE IF EXISTS `FormaPago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FormaPago` (
  `idFormaPago` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idFormaPago`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FormaPago`
--

LOCK TABLES `FormaPago` WRITE;
/*!40000 ALTER TABLE `FormaPago` DISABLE KEYS */;
/*!40000 ALTER TABLE `FormaPago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FormacionDocente`
--

DROP TABLE IF EXISTS `FormacionDocente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FormacionDocente` (
  `idFormacionDocente` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `annio` varchar(45) DEFAULT NULL,
  `DNIDocente` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idFormacionDocente`),
  KEY `DNIDocente_idx` (`DNIDocente`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FormacionDocente`
--

LOCK TABLES `FormacionDocente` WRITE;
/*!40000 ALTER TABLE `FormacionDocente` DISABLE KEYS */;
INSERT INTO `FormacionDocente` VALUES (1,'Título Secundario','w','1990-12-22T02:00:00.000Z','88'),(2,'Título Secundario','ll','2019-08-15','89787'),(3,'Título Secundario','kljkj','2019-08-28','36987412'),(4,NULL,'','',NULL),(5,NULL,'','',NULL),(6,'Título Secundario','asdasd','2019-08-28',NULL),(7,'Título Secundario','asdasd','2019-08-28','6666'),(8,'Título Secundario','jkljk','2019-08-28','89787'),(9,'Título Secundario','nnnnn','2019-08-20','55555555'),(10,'Título Terciario','Experto en casi todo','2019-09-18','2222'),(11,'Maestria','aasdasd','2019-08-27','2222'),(12,'Título Terciario','asdasd','2019-09-02','222'),(13,'Título Universitario','Ingeniero en Informática','2019-09-30','40330242'),(14,'Título Universitario','asdasd','2019-09-02','92684'),(15,'Título Terciario','asdasdasd','2019-09-02','12038'),(16,'Título Secundario','qweeee','2019-09-10','9999999'),(17,'Título Secundario','qweeee','2019-09-10','19283746'),(18,'Título Universitario','asddwwe','2019-09-03','598181'),(19,'Título Secundario','kljnl','2019-09-19','9876544'),(20,'Título Secundario','kjh','2019-09-19','2222');
/*!40000 ALTER TABLE `FormacionDocente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FormacionEmpleado`
--

DROP TABLE IF EXISTS `FormacionEmpleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FormacionEmpleado` (
  `idFormacionEmpleado` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `año` varchar(45) NOT NULL,
  `DNIEmpleado` varchar(45) NOT NULL,
  `fechaDesde` varchar(45) DEFAULT NULL,
  `fechaHasta` varchar(45) DEFAULT NULL,
  `descripcionExp` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idFormacionEmpleado`),
  KEY `DNIEmpleado_idx` (`DNIEmpleado`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FormacionEmpleado`
--

LOCK TABLES `FormacionEmpleado` WRITE;
/*!40000 ALTER TABLE `FormacionEmpleado` DISABLE KEYS */;
INSERT INTO `FormacionEmpleado` VALUES (1,'Título Terciario','sss','2019-09-02','1234','2019-09-24','2020-01-30','sssss'),(2,'Título Terciario','asd','2019-09-18','963','2019-09-13','2019-09-20','asd'),(3,'Título Secundario','ii','2019-09-19','852963','2019-09-19','2019-09-19','iii'),(4,'Título Secundario','asdas','2019-09-26','4445',NULL,'2019-09-19','qweasd'),(5,'Título Secundario','eeee','2019-10-04','43396665','2019-10-04','2019-10-04','eee');
/*!40000 ALTER TABLE `FormacionEmpleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `InscripcionAlumno`
--

DROP TABLE IF EXISTS `InscripcionAlumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `InscripcionAlumno` (
  `idInscripcionAlumno` int(11) NOT NULL AUTO_INCREMENT,
  `DNIAlumno` int(11) DEFAULT NULL,
  `idPeriodo` int(11) DEFAULT NULL,
  `curso` varchar(45) DEFAULT NULL,
  `division` varchar(45) DEFAULT NULL,
  `nivel` int(11) DEFAULT NULL,
  `fechaInscripcion` date DEFAULT NULL,
  PRIMARY KEY (`idInscripcionAlumno`),
  KEY `DNIAlumno_idx` (`DNIAlumno`),
  CONSTRAINT `dniAlumno` FOREIGN KEY (`DNIAlumno`) REFERENCES `Alumno` (`DNIAlumno`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `InscripcionAlumno`
--

LOCK TABLES `InscripcionAlumno` WRITE;
/*!40000 ALTER TABLE `InscripcionAlumno` DISABLE KEYS */;
INSERT INTO `InscripcionAlumno` VALUES (1,39364294,5,'PRIMERO','A',2,'2019-10-14');
/*!40000 ALTER TABLE `InscripcionAlumno` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER InscripcionAlumno_BEFORE_INSERT BEFORE INSERT ON InscripcionAlumno FOR EACH ROW
BEGIN
	set new.fechaInscripcion = NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `SGIColegio`.`InscripcionAlumno_AFTER_DELETE` AFTER DELETE ON `InscripcionAlumno` FOR EACH ROW
BEGIN
INSERT INTO `SGIColegio`.`InscripcionAlumnoHistorico`
    (`DNIAlumno`,`idPeriodo`,`curso`,`division`,`nivel`,`fechaInscripcion`,`fechaBaja`)
VALUES
(old.DNIAlumno,
old.idPeriodo,
old.curso,
old.division,
old.nivel,
old.fechaInscripcion,
NOW());

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `InscripcionAlumnoHistorico`
--

DROP TABLE IF EXISTS `InscripcionAlumnoHistorico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `InscripcionAlumnoHistorico` (
  `DNIAlumno` int(11) NOT NULL,
  `idPeriodo` int(11) DEFAULT NULL,
  `curso` varchar(45) DEFAULT NULL,
  `division` varchar(45) DEFAULT NULL,
  `nivel` int(11) DEFAULT NULL,
  `fechaInscripcion` varchar(45) DEFAULT NULL,
  `fechaBaja` date DEFAULT NULL,
  PRIMARY KEY (`DNIAlumno`),
  KEY `DNIAlumno_idx` (`DNIAlumno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `InscripcionAlumnoHistorico`
--

LOCK TABLES `InscripcionAlumnoHistorico` WRITE;
/*!40000 ALTER TABLE `InscripcionAlumnoHistorico` DISABLE KEYS */;
/*!40000 ALTER TABLE `InscripcionAlumnoHistorico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Materia`
--

DROP TABLE IF EXISTS `Materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Materia` (
  `idMateria` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `codigo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idMateria`),
  UNIQUE KEY `idMateria_UNIQUE` (`idMateria`),
  UNIQUE KEY `codigo_UNIQUE` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Materia`
--

LOCK TABLES `Materia` WRITE;
/*!40000 ALTER TABLE `Materia` DISABLE KEYS */;
INSERT INTO `Materia` VALUES (1,'Lengua','LNG'),(2,'Matematica','MAT'),(3,'Ciencias Sociales','CSS'),(4,'Ciencias Naturales','CSN'),(5,'Tecnologia','TEC'),(6,'Formacion Etica y Ciudadana','ETC'),(7,'Ingles','ING'),(8,'Educacion Fisica','EDF'),(9,'Educacion Artistica','EAR'),(10,'Educacion Religiosa','ERE'),(11,'Lengua y Literatura','LIT'),(12,'Historia','HIS'),(13,'Geografia','GEO'),(14,'Economia','ECO'),(15,'Biologia','BIO'),(16,'Fisica','FIS'),(17,'Quimica','QMC'),(18,'Filosofia','FIL'),(19,'Psicologia','PSI'),(20,'Tutoria','TUT');
/*!40000 ALTER TABLE `Materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MateriaDocente`
--

DROP TABLE IF EXISTS `MateriaDocente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MateriaDocente` (
  `idMateriaDocente` int(11) NOT NULL AUTO_INCREMENT,
  `idMateria` int(11) DEFAULT NULL,
  `IdDocente` bigint(20) DEFAULT NULL,
  `desde` varchar(45) DEFAULT NULL,
  `hasta` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idMateriaDocente`),
  KEY `idMateria_idx` (`idMateria`),
  KEY `DNI_idx` (`IdDocente`),
  CONSTRAINT `idDocente` FOREIGN KEY (`IdDocente`) REFERENCES `Docente` (`DNI`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idMateria` FOREIGN KEY (`idMateria`) REFERENCES `Materia` (`idMateria`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MateriaDocente`
--

LOCK TABLES `MateriaDocente` WRITE;
/*!40000 ALTER TABLE `MateriaDocente` DISABLE KEYS */;
/*!40000 ALTER TABLE `MateriaDocente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Matricula`
--

DROP TABLE IF EXISTS `Matricula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Matricula` (
  `idMatricula` int(11) NOT NULL AUTO_INCREMENT,
  `dniAlumno` bigint(30) DEFAULT NULL,
  `periodo` varchar(45) DEFAULT NULL,
  `curso` varchar(45) DEFAULT NULL,
  `nivel` varchar(45) DEFAULT NULL,
  `importe` double DEFAULT NULL,
  `saldo` double DEFAULT NULL,
  `division` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idMatricula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Matricula`
--

LOCK TABLES `Matricula` WRITE;
/*!40000 ALTER TABLE `Matricula` DISABLE KEYS */;
/*!40000 ALTER TABLE `Matricula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Nivel`
--

DROP TABLE IF EXISTS `Nivel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Nivel` (
  `idNivel` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`idNivel`),
  UNIQUE KEY `idNivel_UNIQUE` (`idNivel`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Nivel`
--

LOCK TABLES `Nivel` WRITE;
/*!40000 ALTER TABLE `Nivel` DISABLE KEYS */;
INSERT INTO `Nivel` VALUES (1,'Primaria'),(2,'Secundaria');
/*!40000 ALTER TABLE `Nivel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PeriodoLectivo`
--

DROP TABLE IF EXISTS `PeriodoLectivo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PeriodoLectivo` (
  `idPeriodoLectivo` int(11) NOT NULL AUTO_INCREMENT,
  `periodo` varchar(45) DEFAULT NULL,
  `idPlanEstudio` int(11) DEFAULT NULL,
  `idCurso` int(11) DEFAULT NULL,
  `idNivel` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPeriodoLectivo`),
  KEY `idPlanEstudio_idx` (`idPlanEstudio`),
  KEY `idCurso_idx` (`idCurso`),
  KEY `idNivel_idx` (`idNivel`),
  CONSTRAINT `idCurso` FOREIGN KEY (`idCurso`) REFERENCES `Curso` (`idCurso`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idNivel` FOREIGN KEY (`idNivel`) REFERENCES `Nivel` (`idNivel`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idPlanEstudio` FOREIGN KEY (`idPlanEstudio`) REFERENCES `PlanEstudio` (`idPlanEstudio`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PeriodoLectivo`
--

LOCK TABLES `PeriodoLectivo` WRITE;
/*!40000 ALTER TABLE `PeriodoLectivo` DISABLE KEYS */;
INSERT INTO `PeriodoLectivo` VALUES (3,'2020',25,NULL,1),(4,'2021',25,NULL,1),(5,'2020',26,NULL,2);
/*!40000 ALTER TABLE `PeriodoLectivo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `PeriodoLectivoView`
--

DROP TABLE IF EXISTS `PeriodoLectivoView`;
/*!50001 DROP VIEW IF EXISTS `PeriodoLectivoView`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `PeriodoLectivoView` AS SELECT 
 1 AS `idPlanEstudio`,
 1 AS `periodo`,
 1 AS `nombrePlan`,
 1 AS `idPeriodoLectivo`,
 1 AS `idNivel`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `PlanEstudio`
--

DROP TABLE IF EXISTS `PlanEstudio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PlanEstudio` (
  `idPlanEstudio` int(11) NOT NULL AUTO_INCREMENT,
  `idNivel` int(11) DEFAULT NULL,
  `nombrePlan` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPlanEstudio`),
  KEY `idNivel_idx` (`idNivel`),
  CONSTRAINT `nivelID` FOREIGN KEY (`idNivel`) REFERENCES `Nivel` (`idNivel`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PlanEstudio`
--

LOCK TABLES `PlanEstudio` WRITE;
/*!40000 ALTER TABLE `PlanEstudio` DISABLE KEYS */;
INSERT INTO `PlanEstudio` VALUES (25,1,'PRIMARIA'),(26,2,'SECUNDARIA'),(27,2,'CICLO BASICO');
/*!40000 ALTER TABLE `PlanEstudio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `PlanEstudioView`
--

DROP TABLE IF EXISTS `PlanEstudioView`;
/*!50001 DROP VIEW IF EXISTS `PlanEstudioView`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `PlanEstudioView` AS SELECT 
 1 AS `nombrePlan`,
 1 AS `anio`,
 1 AS `nombre`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `PlanMateria`
--

DROP TABLE IF EXISTS `PlanMateria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PlanMateria` (
  `idPlanMateria` int(11) NOT NULL AUTO_INCREMENT,
  `idPlan` int(11) DEFAULT NULL,
  `anio` varchar(45) DEFAULT NULL,
  `codMateria` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPlanMateria`),
  KEY `idPlan_idx` (`idPlan`),
  KEY `codMateria_idx` (`codMateria`),
  CONSTRAINT `idMat` FOREIGN KEY (`codMateria`) REFERENCES `Materia` (`idMateria`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idPlan` FOREIGN KEY (`idPlan`) REFERENCES `PlanEstudio` (`idPlanEstudio`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=217 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PlanMateria`
--

LOCK TABLES `PlanMateria` WRITE;
/*!40000 ALTER TABLE `PlanMateria` DISABLE KEYS */;
INSERT INTO `PlanMateria` VALUES (1,NULL,NULL,NULL),(45,25,'PRIMERO',1),(46,25,'PRIMERO',2),(47,25,'SEGUNDO',8),(48,25,'SEGUNDO',9),(49,25,'TERCERO',1),(50,25,'SEGUNDO',10),(51,25,'TERCERO',4),(52,25,'TERCERO',2),(53,25,'TERCERO',5),(54,25,'TERCERO',3),(55,25,'TERCERO',6),(56,25,'TERCERO',7),(57,25,'TERCERO',8),(58,25,'TERCERO',9),(59,25,'TERCERO',10),(60,25,'CUARTO',2),(61,25,'CUARTO',1),(62,25,'CUARTO',3),(63,25,'CUARTO',4),(64,25,'CUARTO',5),(65,25,'CUARTO',6),(66,25,'CUARTO',7),(67,25,'CUARTO',8),(68,25,'CUARTO',9),(69,25,'CUARTO',10),(70,25,'QUINTO',1),(71,25,'QUINTO',2),(72,25,'QUINTO',3),(73,25,'QUINTO',4),(74,25,'QUINTO',6),(75,25,'QUINTO',5),(76,25,'QUINTO',7),(77,25,'QUINTO',8),(78,25,'QUINTO',9),(79,25,'QUINTO',10),(80,25,'SEXTO',1),(81,25,'SEXTO',2),(82,25,'SEXTO',4),(83,25,'SEXTO',3),(84,25,'SEXTO',5),(85,25,'SEXTO',6),(86,25,'SEXTO',7),(87,25,'SEXTO',8),(88,25,'SEPTIMO',1),(89,25,'SEXTO',9),(90,25,'SEXTO',10),(91,25,'SEPTIMO',2),(92,25,'SEPTIMO',4),(93,25,'SEPTIMO',3),(94,25,'SEPTIMO',6),(95,25,'SEPTIMO',5),(96,25,'SEPTIMO',7),(97,25,'SEPTIMO',8),(98,25,'SEPTIMO',9),(99,25,'PRIMERO',3),(100,25,'SEPTIMO',10),(101,25,'PRIMERO',4),(102,25,'PRIMERO',5),(103,25,'PRIMERO',6),(104,25,'PRIMERO',7),(105,25,'PRIMERO',8),(106,25,'PRIMERO',10),(107,25,'SEGUNDO',1),(108,25,'PRIMERO',9),(109,25,'SEGUNDO',2),(110,25,'SEGUNDO',3),(111,25,'SEGUNDO',4),(112,25,'SEGUNDO',7),(113,25,'SEGUNDO',6),(114,25,'SEGUNDO',5),(115,26,'PRIMERO',11),(116,26,'PRIMERO',12),(117,26,'PRIMERO',15),(118,26,'PRIMERO',14),(119,26,'PRIMERO',16),(120,26,'PRIMERO',13),(121,26,'PRIMERO',17),(122,26,'PRIMERO',18),(123,26,'PRIMERO',2),(124,26,'PRIMERO',19),(125,26,'PRIMERO',20),(126,26,'PRIMERO',6),(127,26,'PRIMERO',7),(128,26,'PRIMERO',5),(129,26,'PRIMERO',8),(130,26,'PRIMERO',9),(131,26,'SEGUNDO',11),(132,26,'SEGUNDO',2),(133,26,'SEGUNDO',13),(134,26,'SEGUNDO',12),(135,26,'SEGUNDO',14),(136,26,'SEGUNDO',15),(137,26,'SEGUNDO',16),(138,26,'SEGUNDO',6),(139,26,'SEGUNDO',18),(140,26,'SEGUNDO',17),(141,26,'SEGUNDO',5),(142,26,'SEGUNDO',19),(143,26,'SEGUNDO',7),(144,26,'SEGUNDO',9),(145,26,'SEGUNDO',8),(146,26,'SEGUNDO',20),(147,26,'TERCERO',11),(148,26,'TERCERO',12),(149,26,'TERCERO',13),(150,26,'TERCERO',15),(151,26,'TERCERO',16),(152,26,'TERCERO',14),(153,26,'TERCERO',17),(154,26,'TERCERO',18),(155,26,'TERCERO',19),(156,26,'TERCERO',20),(157,26,'TERCERO',2),(158,26,'TERCERO',6),(159,26,'TERCERO',5),(160,26,'TERCERO',8),(161,26,'TERCERO',9),(162,26,'TERCERO',7),(163,26,'CUARTO',19),(164,26,'CUARTO',20),(165,26,'CUARTO',18),(166,26,'CUARTO',17),(167,26,'CUARTO',16),(168,26,'CUARTO',15),(169,26,'CUARTO',14),(170,26,'CUARTO',13),(171,26,'CUARTO',12),(172,26,'CUARTO',11),(173,26,'CUARTO',9),(174,26,'CUARTO',8),(175,26,'CUARTO',7),(176,26,'CUARTO',6),(177,26,'CUARTO',5),(178,26,'QUINTO',19),(179,26,'QUINTO',20),(180,26,'CUARTO',2),(181,26,'QUINTO',17),(182,26,'QUINTO',16),(183,26,'QUINTO',15),(184,26,'QUINTO',18),(185,26,'QUINTO',14),(186,26,'QUINTO',13),(187,26,'QUINTO',12),(188,26,'QUINTO',11),(189,26,'QUINTO',9),(190,26,'QUINTO',8),(191,26,'QUINTO',7),(192,26,'QUINTO',6),(193,26,'QUINTO',2),(194,26,'QUINTO',5),(195,27,'PRIMERO',13),(196,27,'PRIMERO',14),(197,27,'PRIMERO',15),(198,27,'SEGUNDO',14),(199,27,'PRIMERO',12),(200,27,'PRIMERO',11),(201,27,'SEGUNDO',13),(202,27,'PRIMERO',17),(203,27,'SEGUNDO',15),(204,27,'SEGUNDO',16),(205,27,'SEGUNDO',12),(206,27,'PRIMERO',16),(207,27,'SEGUNDO',17),(208,27,'TERCERO',1),(209,27,'TERCERO',2),(210,27,'TERCERO',4),(211,27,'TERCERO',5),(212,27,'QUINTO',2),(213,27,'TERCERO',3),(214,27,'QUINTO',1),(215,27,'CUARTO',1),(216,27,'QUINTO',3);
/*!40000 ALTER TABLE `PlanMateria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `PlanMateriaView`
--

DROP TABLE IF EXISTS `PlanMateriaView`;
/*!50001 DROP VIEW IF EXISTS `PlanMateriaView`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `PlanMateriaView` AS SELECT 
 1 AS `idPlanEstudio`,
 1 AS `idNivel`,
 1 AS `nombrePlan`,
 1 AS `idPlanMateria`,
 1 AS `anio`,
 1 AS `codMateria`,
 1 AS `nombreMateria`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `PlanesGroupView`
--

DROP TABLE IF EXISTS `PlanesGroupView`;
/*!50001 DROP VIEW IF EXISTS `PlanesGroupView`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `PlanesGroupView` AS SELECT 
 1 AS `idPlanEstudio`,
 1 AS `idNivel`,
 1 AS `nombrePlan`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `Role`
--

DROP TABLE IF EXISTS `Role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Role`
--

LOCK TABLES `Role` WRITE;
/*!40000 ALTER TABLE `Role` DISABLE KEYS */;
/*!40000 ALTER TABLE `Role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RoleMapping`
--

DROP TABLE IF EXISTS `RoleMapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RoleMapping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `principalType` varchar(512) DEFAULT NULL,
  `principalId` varchar(255) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `principalId` (`principalId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RoleMapping`
--

LOCK TABLES `RoleMapping` WRITE;
/*!40000 ALTER TABLE `RoleMapping` DISABLE KEYS */;
/*!40000 ALTER TABLE `RoleMapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `realm` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `email` varchar(512) NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `vInscripcionAlumno`
--

DROP TABLE IF EXISTS `vInscripcionAlumno`;
/*!50001 DROP VIEW IF EXISTS `vInscripcionAlumno`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `vInscripcionAlumno` AS SELECT 
 1 AS `idInscripcionAlumno`,
 1 AS `DNIAlumno`,
 1 AS `nombre`,
 1 AS `apellido`,
 1 AS `idPeriodo`,
 1 AS `curso`,
 1 AS `division`,
 1 AS `nivel`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `PeriodoLectivoView`
--

/*!50001 DROP VIEW IF EXISTS `PeriodoLectivoView`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `PeriodoLectivoView` AS select `PE`.`idPlanEstudio` AS `idPlanEstudio`,`PL`.`periodo` AS `periodo`,`PE`.`nombrePlan` AS `nombrePlan`,`PL`.`idPeriodoLectivo` AS `idPeriodoLectivo`,`PL`.`idNivel` AS `idNivel` from (`PlanEstudio` `PE` join `PeriodoLectivo` `PL` on((`PL`.`idPlanEstudio` = `PE`.`idPlanEstudio`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `PlanEstudioView`
--

/*!50001 DROP VIEW IF EXISTS `PlanEstudioView`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `PlanEstudioView` AS select `PE`.`nombrePlan` AS `nombrePlan`,`PM`.`anio` AS `anio`,`M`.`nombre` AS `nombre` from ((`PlanEstudio` `PE` join `PlanMateria` `PM` on((`PE`.`idPlanEstudio` = `PM`.`idPlan`))) join `Materia` `M` on((`M`.`idMateria` = `PM`.`codMateria`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `PlanMateriaView`
--

/*!50001 DROP VIEW IF EXISTS `PlanMateriaView`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `PlanMateriaView` AS select `PE`.`idPlanEstudio` AS `idPlanEstudio`,`PE`.`idNivel` AS `idNivel`,`PE`.`nombrePlan` AS `nombrePlan`,`PM`.`idPlanMateria` AS `idPlanMateria`,`PM`.`anio` AS `anio`,`PM`.`codMateria` AS `codMateria`,`M`.`nombre` AS `nombreMateria` from ((`PlanEstudio` `PE` join `PlanMateria` `PM` on((`PE`.`idPlanEstudio` = `PM`.`idPlan`))) join `Materia` `M` on((`PM`.`codMateria` = `M`.`idMateria`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `PlanesGroupView`
--

/*!50001 DROP VIEW IF EXISTS `PlanesGroupView`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `PlanesGroupView` AS select `PE`.`idPlanEstudio` AS `idPlanEstudio`,`PE`.`idNivel` AS `idNivel`,`PE`.`nombrePlan` AS `nombrePlan` from `PlanEstudio` `PE` group by `PE`.`idPlanEstudio` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vInscripcionAlumno`
--

/*!50001 DROP VIEW IF EXISTS `vInscripcionAlumno`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vInscripcionAlumno` AS select `IA`.`idInscripcionAlumno` AS `idInscripcionAlumno`,`A`.`DNIAlumno` AS `DNIAlumno`,`A`.`nombre` AS `nombre`,`A`.`apellido` AS `apellido`,`IA`.`idPeriodo` AS `idPeriodo`,`IA`.`curso` AS `curso`,`IA`.`division` AS `division`,`IA`.`nivel` AS `nivel` from (`Alumno` `A` join `InscripcionAlumno` `IA` on((`IA`.`DNIAlumno` = `A`.`DNIAlumno`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-14 19:52:55
