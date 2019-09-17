CREATE DATABASE  IF NOT EXISTS `SGIColegio` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `SGIColegio`;
-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: SGIColegio
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

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
-- Dumping data for table `ACL`
--

LOCK TABLES `ACL` WRITE;
/*!40000 ALTER TABLE `ACL` DISABLE KEYS */;
/*!40000 ALTER TABLE `ACL` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `AccessToken`
--

LOCK TABLES `AccessToken` WRITE;
/*!40000 ALTER TABLE `AccessToken` DISABLE KEYS */;
/*!40000 ALTER TABLE `AccessToken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Aula`
--

LOCK TABLES `Aula` WRITE;
/*!40000 ALTER TABLE `Aula` DISABLE KEYS */;
INSERT INTO `Aula` VALUES (2,'sum',200,'Disponible'),(3,'sum',200,'Disponible');
/*!40000 ALTER TABLE `Aula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Curso`
--

LOCK TABLES `Curso` WRITE;
/*!40000 ALTER TABLE `Curso` DISABLE KEYS */;
INSERT INTO `Curso` VALUES (1,'primero','A',1,NULL),(3,'Tercero','A',1,3),(4,'segundo','A',1,2),(8,'Quinto','A',1,3),(11,'Sexto','B',2,3),(12,'Septimo','A',1,3),(13,'Cuarto','A',1,3);
/*!40000 ALTER TABLE `Curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Docente`
--

LOCK TABLES `Docente` WRITE;
/*!40000 ALTER TABLE `Docente` DISABLE KEYS */;
INSERT INTO `Docente` VALUES (2222,'Gon','Barrientos','Tu casa','5555','2222','1996-09-16','2019-09-06','2019-09-18','M'),(6666,'Maximiliano','Esbiza','En su casa','+5493874123123','454','2019-08-28','2019-08-27','2019-08-27','F'),(12038,'Jorgelina','Robertita Perez','asdasd','12312','12983','2019-09-24','2019-09-14','2019-09-25','F'),(89787,'Jeremias Ruben','Toledo Medrano','brown 81','5','20393642948','2019-08-27','2019-08-27','2019-08-28','M'),(9999999,'Jeremías ','Toledo','asdasdw','123123','123123','2019-09-24','2019-09-14','2019-09-24','M'),(19283746,'Jeremías','Toledo','his house','19283746','19283746','2019-09-24','2019-09-14','2019-09-23','M'),(38951736,'Virginia','Bassi Soledad','J Hernandez 1469, Jose Maria Bosch','string','23-38951736-4','1995-07-26','2019-08-26','2010-05-25','Mujer'),(39364283,'Jeremias Ruben','Toledo Medrano','brown 81','342','20393642948','2019-08-27','2019-08-27','2019-08-27','M'),(39364294,'Jeremias Ruben','Toledo Medrano','brown 81','4912680','20393642948','1996-02-24','2019-08-26','2014-02-02','Hombre'),(40330241,'Fernando Gabriel','Castillo Sorani','Barrio San Carlos Manzana 61 Casa 18, Salta Capital','+5493874137551','20-40330241-5','1997-04-10','2019-08-26','2010-05-25','Hombre'),(40330242,'Fernando Gabriel','Castillo Sorani','Barrio San Carlos Manzana 61 Casa 18, Salta Capital','+5493874137551','20-40330241-5','1997-04-10','2019-09-14','2019-09-17','M'),(55555555,'Jeremias','TM','brown 81','5757\\','5787','2019-08-28','2019-08-28','2019-08-21','M'),(666666666,'Jeremias','R','brown 81','342','56565','2019-08-19','2019-08-27','2019-08-29','M');
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
-- Dumping data for table `Docente-Historico`
--

LOCK TABLES `Docente-Historico` WRITE;
/*!40000 ALTER TABLE `Docente-Historico` DISABLE KEYS */;
INSERT INTO `Docente-Historico` VALUES (222,'Jorge','ASD','asdasd','123123','641','2019-09-24','2019-09-14','2019-09-17','2019-09-17','M'),(92684,'Pedro','Sanchez','Su casaa','4556','13216','2019-09-17','2019-09-14','2019-09-17','2019-09-24','M'),(36987412,'JR','TM','brown 81','5758','23','1992-02-02','2019-08-28','2019-09-17','2019-08-28','M');
/*!40000 ALTER TABLE `Docente-Historico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Empleado`
--

LOCK TABLES `Empleado` WRITE;
/*!40000 ALTER TABLE `Empleado` DISABLE KEYS */;
INSERT INTO `Empleado` VALUES (6,'Gonzalo','Barrientos',39123123,'2039123123','Su casaa','+5493874137551','1996-09-16','2019-09-16','M','Administración'),(7,'Gabriel','Sorani',1234931,'201729340','Su casaa','9123089123','1993-02-20','2019-09-16','M','Administración'),(9,'Gabriel','Barrientos',12344,'5331','12344','1234','2019-09-03','2019-09-16','F','Ordenanza');
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
-- Dumping data for table `Empleado-Historico`
--

LOCK TABLES `Empleado-Historico` WRITE;
/*!40000 ALTER TABLE `Empleado-Historico` DISABLE KEYS */;
INSERT INTO `Empleado-Historico` VALUES (8,'test','Castillo Sorani',1223441,'67844','Su casaa','111','2019-09-17','2019-09-16','2019-09-17','F','Administración');
/*!40000 ALTER TABLE `Empleado-Historico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `FormacionDocente`
--

LOCK TABLES `FormacionDocente` WRITE;
/*!40000 ALTER TABLE `FormacionDocente` DISABLE KEYS */;
INSERT INTO `FormacionDocente` VALUES (1,'Título Secundario','w','1990-12-22T02:00:00.000Z','88'),(2,'Título Secundario','ll','2019-08-15','89787'),(3,'Título Secundario','kljkj','2019-08-28','36987412'),(4,NULL,'','',NULL),(5,NULL,'','',NULL),(6,'Título Secundario','asdasd','2019-08-28',NULL),(7,'Título Secundario','asdasd','2019-08-28','6666'),(8,'Título Secundario','jkljk','2019-08-28','89787'),(9,'Título Secundario','nnnnn','2019-08-20','55555555'),(10,'Título Terciario','Experto en casi todo','2019-09-18','2222'),(11,'Maestria','aasdasd','2019-08-27','2222'),(12,'Título Terciario','asdasd','2019-09-02','222'),(13,'Título Universitario','Ingeniero en Informática','2019-09-30','40330242'),(14,'Título Universitario','asdasd','2019-09-02','92684'),(15,'Título Terciario','asdasdasd','2019-09-02','12038'),(16,'Título Secundario','qweeee','2019-09-10','9999999'),(17,'Título Secundario','qweeee','2019-09-10','19283746');
/*!40000 ALTER TABLE `FormacionDocente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `FormacionEmpleado`
--

LOCK TABLES `FormacionEmpleado` WRITE;
/*!40000 ALTER TABLE `FormacionEmpleado` DISABLE KEYS */;
INSERT INTO `FormacionEmpleado` VALUES (1,'Título Terciario','sss','2019-09-02','1234','2019-09-24','2020-01-30','sssss');
/*!40000 ALTER TABLE `FormacionEmpleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Materia`
--

LOCK TABLES `Materia` WRITE;
/*!40000 ALTER TABLE `Materia` DISABLE KEYS */;
INSERT INTO `Materia` VALUES (26,'Eticaffff','ETC'),(27,'Lenguajes 2','L2'),(28,'Lenguajes 3','L3'),(29,'Lenguajes 4','L4'),(38,'nery','nery'),(40,'NahuelSO','SONA');
/*!40000 ALTER TABLE `Materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `MateriaDocente`
--

LOCK TABLES `MateriaDocente` WRITE;
/*!40000 ALTER TABLE `MateriaDocente` DISABLE KEYS */;
INSERT INTO `MateriaDocente` VALUES (19,27,39364294),(20,28,39364294),(21,26,39364294),(22,26,39364294),(23,26,39364294),(24,26,39364294),(25,28,39364294),(26,40,39364294),(27,27,39364294),(29,26,6666),(30,27,6666),(31,40,6666),(32,38,6666),(33,27,89787),(34,26,89787),(35,38,2222);
/*!40000 ALTER TABLE `MateriaDocente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Nivel`
--

LOCK TABLES `Nivel` WRITE;
/*!40000 ALTER TABLE `Nivel` DISABLE KEYS */;
INSERT INTO `Nivel` VALUES (1,'Primaria'),(2,'Secundaria');
/*!40000 ALTER TABLE `Nivel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `PlanEstudio`
--

LOCK TABLES `PlanEstudio` WRITE;
/*!40000 ALTER TABLE `PlanEstudio` DISABLE KEYS */;
INSERT INTO `PlanEstudio` VALUES (2,'2019',3,1),(5,'2019',3,1);
/*!40000 ALTER TABLE `PlanEstudio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `PlanMateria`
--

LOCK TABLES `PlanMateria` WRITE;
/*!40000 ALTER TABLE `PlanMateria` DISABLE KEYS */;
INSERT INTO `PlanMateria` VALUES (1,NULL,NULL);
/*!40000 ALTER TABLE `PlanMateria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Role`
--

LOCK TABLES `Role` WRITE;
/*!40000 ALTER TABLE `Role` DISABLE KEYS */;
/*!40000 ALTER TABLE `Role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `RoleMapping`
--

LOCK TABLES `RoleMapping` WRITE;
/*!40000 ALTER TABLE `RoleMapping` DISABLE KEYS */;
/*!40000 ALTER TABLE `RoleMapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Usuario`
--

LOCK TABLES `Usuario` WRITE;
/*!40000 ALTER TABLE `Usuario` DISABLE KEYS */;
INSERT INTO `Usuario` VALUES (1,19283746,'jtoledo746','jtoledo@hotmail.com','Docente'),(2,12344,'gbarrientos344','asd@hotmail.com','Ordenanza');
/*!40000 ALTER TABLE `Usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'SGIColegio'
--

--
-- Dumping routines for database 'SGIColegio'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-17 18:41:57
