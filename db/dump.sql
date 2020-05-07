-- MySQL dump 10.13  Distrib 5.7.30, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: sdaf_propuesta_permisos
-- ------------------------------------------------------
-- Server version	5.7.29

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
-- Table structure for table `knex_migrations`
--

DROP TABLE IF EXISTS `knex_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `knex_migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations`
--

LOCK TABLES `knex_migrations` WRITE;
/*!40000 ALTER TABLE `knex_migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `knex_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations_lock`
--

DROP TABLE IF EXISTS `knex_migrations_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `knex_migrations_lock` (
  `index` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int(11) DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations_lock`
--

LOCK TABLES `knex_migrations_lock` WRITE;
/*!40000 ALTER TABLE `knex_migrations_lock` DISABLE KEYS */;
INSERT INTO `knex_migrations_lock` VALUES (1,0);
/*!40000 ALTER TABLE `knex_migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paquetes_permisos`
--

DROP TABLE IF EXISTS `paquetes_permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paquetes_permisos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paquetes_permisos`
--

LOCK TABLES `paquetes_permisos` WRITE;
/*!40000 ALTER TABLE `paquetes_permisos` DISABLE KEYS */;
INSERT INTO `paquetes_permisos` VALUES (16,'Permisos','Permisos'),(17,'Paquetes de permisos','Permisos'),(18,'Permisos de Usuarios','Permisos');
/*!40000 ALTER TABLE `paquetes_permisos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permisos`
--

DROP TABLE IF EXISTS `permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permisos` (
  `nombre` varchar(45) NOT NULL,
  `nombre_mostrable` varchar(45) NOT NULL,
  PRIMARY KEY (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos`
--

LOCK TABLES `permisos` WRITE;
/*!40000 ALTER TABLE `permisos` DISABLE KEYS */;
INSERT INTO `permisos` VALUES ('asignar-paquete','Paquetes - Asignar Permisos'),('asignar-permisos-usuario','Permisos de Usuarios - Asignar'),('borrar-paquete','Paquetes - Borrar'),('borrar-permiso','Permisos - Borrar'),('crear-paquete','Paquetes - Crear'),('crear-permiso','Permisos - Crear'),('listar-paquete','Paquetes - listar'),('listar-permiso','Permisos - listar'),('listar-permisos-usuario','Permisos de Usuario - Listar permisos usuario'),('mover-paquetes-permisos-usuario','Permisos de Usuario - mover paquetes'),('pagina-paquetes','Paquetes - pagina'),('pagina-permisos','Permisos - pagina'),('pagina-permisos-usuario','Permisos de Usuario - Acceso a Pagina');
/*!40000 ALTER TABLE `permisos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permisos_users`
--

DROP TABLE IF EXISTS `permisos_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permisos_users` (
  `permisos_nombre` varchar(45) NOT NULL,
  `users_id` int(11) NOT NULL,
  PRIMARY KEY (`permisos_nombre`,`users_id`),
  KEY `fk_permisos_has_users_users1_idx` (`users_id`),
  KEY `fk_permisos_has_users_permisos1_idx` (`permisos_nombre`),
  CONSTRAINT `fk_permisos_has_users_permisos1` FOREIGN KEY (`permisos_nombre`) REFERENCES `permisos` (`nombre`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_permisos_has_users_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos_users`
--

LOCK TABLES `permisos_users` WRITE;
/*!40000 ALTER TABLE `permisos_users` DISABLE KEYS */;
INSERT INTO `permisos_users` VALUES ('asignar-paquete',1),('asignar-permisos-usuario',1),('borrar-paquete',1),('borrar-permiso',1),('crear-paquete',1),('crear-permiso',1),('listar-paquete',1),('listar-permiso',1),('listar-permisos-usuario',1),('mover-paquetes-permisos-usuario',1),('pagina-paquetes',1),('pagina-permisos',1),('pagina-permisos-usuario',1);
/*!40000 ALTER TABLE `permisos_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `relacion_paquetes_permisos`
--

DROP TABLE IF EXISTS `relacion_paquetes_permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `relacion_paquetes_permisos` (
  `paquetes_permisos_id` int(11) NOT NULL,
  `permisos_nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`paquetes_permisos_id`,`permisos_nombre`),
  KEY `fk_paquetes_permisos_has_permisos_permisos1_idx` (`permisos_nombre`),
  KEY `fk_paquetes_permisos_has_permisos_paquetes_permisos1_idx` (`paquetes_permisos_id`),
  CONSTRAINT `fk_paquetes_permisos_has_permisos_paquetes_permisos1` FOREIGN KEY (`paquetes_permisos_id`) REFERENCES `paquetes_permisos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_paquetes_permisos_has_permisos_permisos1` FOREIGN KEY (`permisos_nombre`) REFERENCES `permisos` (`nombre`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relacion_paquetes_permisos`
--

LOCK TABLES `relacion_paquetes_permisos` WRITE;
/*!40000 ALTER TABLE `relacion_paquetes_permisos` DISABLE KEYS */;
INSERT INTO `relacion_paquetes_permisos` VALUES (16,'borrar-permiso'),(16,'crear-permiso'),(16,'listar-permiso'),(16,'pagina-permisos'),(17,'asignar-paquete'),(17,'borrar-paquete'),(17,'crear-paquete'),(17,'listar-paquete'),(17,'pagina-paquetes'),(18,'asignar-permisos-usuario'),(18,'listar-permisos-usuario'),(18,'mover-paquetes-permisos-usuario'),(18,'pagina-permisos-usuario');
/*!40000 ALTER TABLE `relacion_paquetes_permisos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-06  9:03:34
