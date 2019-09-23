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
-- Table structure for table `Curso`
--

DROP TABLE IF EXISTS `Curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Curso` (
  `idCurso` int(11) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `division` varchar(45) DEFAULT NULL,
  `idNivel` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `AnioLectivo` varchar(45) DEFAULT NULL,
  `idPlan` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idNivel_idx` (`idNivel`),
  CONSTRAINT `idNivel` FOREIGN KEY (`idNivel`) REFERENCES `Nivel` (`idNivel`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Curso`
--

LOCK TABLES `Curso` WRITE;
/*!40000 ALTER TABLE `Curso` DISABLE KEYS */;
INSERT INTO `Curso` VALUES (1,'primero','A',1,14,NULL,NULL),(3,'Tercero','A',1,15,NULL,NULL),(4,'segundo','A',1,16,NULL,NULL),(8,'Quinto','A',1,17,NULL,NULL),(11,'Sexto','B',2,18,NULL,NULL),(12,'Septimo','A',1,19,NULL,NULL),(13,'Cuarto','A',1,20,NULL,NULL);
/*!40000 ALTER TABLE `Curso` ENABLE KEYS */;
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
  `idDocenteCurso` int(11) NOT NULL,
  `idCurso` int(11) DEFAULT NULL,
  `DNIDocente` int(11) DEFAULT NULL,
  PRIMARY KEY (`idDocenteCurso`),
  KEY `DNIDocente_idx` (`DNIDocente`),
  CONSTRAINT `DNIDocente` FOREIGN KEY (`DNIDocente`) REFERENCES `Empleado` (`dni`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DocenteCurso`
--

LOCK TABLES `DocenteCurso` WRITE;
/*!40000 ALTER TABLE `DocenteCurso` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Empleado`
--

LOCK TABLES `Empleado` WRITE;
/*!40000 ALTER TABLE `Empleado` DISABLE KEYS */;
INSERT INTO `Empleado` VALUES (12,'camil','Toledo',852963,'741','uuu','852','2019-09-19','2019-09-19','F','Administración',NULL,NULL,NULL);
/*!40000 ALTER TABLE `Empleado` ENABLE KEYS */;
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER tr_bajaEmpleado AFTER DELETE ON Empleado FOR EACH ROW
BEGIN
	INSERT INTO `Empleado-Historico` VALUES(OLD.idEmpleado,OLD.nombre,OLD.apellido,OLD.dni,OLD.cuil,OLD.direccion,OLD.telefono,OLD.fechaNacimiento,OLD.fechaIngColegio,CURDATE(),OLD.sexo,OLD.tipoEmpleado);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FormacionEmpleado`
--

LOCK TABLES `FormacionEmpleado` WRITE;
/*!40000 ALTER TABLE `FormacionEmpleado` DISABLE KEYS */;
INSERT INTO `FormacionEmpleado` VALUES (1,'Título Terciario','sss','2019-09-02','1234','2019-09-24','2020-01-30','sssss'),(2,'Título Terciario','asd','2019-09-18','963','2019-09-13','2019-09-20','asd'),(3,'Título Secundario','ii','2019-09-19','852963','2019-09-19','2019-09-19','iii');
/*!40000 ALTER TABLE `FormacionEmpleado` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Materia`
--

LOCK TABLES `Materia` WRITE;
/*!40000 ALTER TABLE `Materia` DISABLE KEYS */;
INSERT INTO `Materia` VALUES (26,'Eticaffff','ETC'),(27,'Lenguajes 2','L2'),(28,'Lenguajes 3','L3'),(29,'Lenguajes 4','L4'),(38,'nery','nery'),(40,'NahuelSO','SONA');
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
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MateriaDocente`
--

LOCK TABLES `MateriaDocente` WRITE;
/*!40000 ALTER TABLE `MateriaDocente` DISABLE KEYS */;
INSERT INTO `MateriaDocente` VALUES (19,27,39364294,NULL,NULL),(20,28,39364294,NULL,NULL),(21,26,39364294,NULL,NULL),(22,26,39364294,NULL,NULL),(23,26,39364294,NULL,NULL),(24,26,39364294,NULL,NULL),(25,28,39364294,NULL,NULL),(26,40,39364294,NULL,NULL),(27,27,39364294,NULL,NULL),(33,27,89787,NULL,NULL),(34,26,89787,NULL,NULL);
/*!40000 ALTER TABLE `MateriaDocente` ENABLE KEYS */;
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
-- Table structure for table `PlanEstudio`
--

DROP TABLE IF EXISTS `PlanEstudio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PlanEstudio` (
  `idPlanEstudio` int(11) NOT NULL AUTO_INCREMENT,
  `idNivel` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPlanEstudio`),
  KEY `idNivel_idx` (`idNivel`),
  CONSTRAINT `nivelID` FOREIGN KEY (`idNivel`) REFERENCES `Nivel` (`idNivel`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PlanEstudio`
--

LOCK TABLES `PlanEstudio` WRITE;
/*!40000 ALTER TABLE `PlanEstudio` DISABLE KEYS */;
INSERT INTO `PlanEstudio` VALUES (2,1),(5,1),(6,1),(7,2),(8,2);
/*!40000 ALTER TABLE `PlanEstudio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PlanMateria`
--

DROP TABLE IF EXISTS `PlanMateria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PlanMateria` (
  `idPlanMateria` int(11) NOT NULL AUTO_INCREMENT,
  `idMateria` int(11) DEFAULT NULL,
  `idPlan` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPlanMateria`),
  KEY `idMateria_idx` (`idMateria`),
  KEY `idPlan_idx` (`idPlan`),
  CONSTRAINT `idPlan` FOREIGN KEY (`idPlan`) REFERENCES `PlanEstudio` (`idPlanEstudio`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `materiaID` FOREIGN KEY (`idMateria`) REFERENCES `Materia` (`idMateria`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PlanMateria`
--

LOCK TABLES `PlanMateria` WRITE;
/*!40000 ALTER TABLE `PlanMateria` DISABLE KEYS */;
INSERT INTO `PlanMateria` VALUES (1,NULL,NULL),(2,27,6),(3,28,7),(4,27,7),(5,29,8);
/*!40000 ALTER TABLE `PlanMateria` ENABLE KEYS */;
UNLOCK TABLES;

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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-23 17:44:43
