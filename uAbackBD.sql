CREATE TABLE `aerolinea` (
  `id_aerolinea` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `codigo` varchar(4) NOT NULL,
  `created_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id_aerolinea`),
  KEY `id_aviones_idx` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
CREATE TABLE `avion` (
  `id_avion` int(11) NOT NULL AUTO_INCREMENT,
  `id_aerolinea` int(11) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `matricula` varchar(45) NOT NULL,
  `capacidad` varchar(45) NOT NULL,
  `created_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_avion`),
  KEY `avion_aerolinea_idx` (`id_aerolinea`),
  CONSTRAINT `avion_aerolinea` FOREIGN KEY (`id_aerolinea`) REFERENCES `aerolinea` (`id_aerolinea`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COMMENT='			';
CREATE TABLE `cronograma` (
  `id_cronograma` int(11) NOT NULL AUTO_INCREMENT,
  `id_vuelo` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id_cronograma`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `estado` (
  `id_estado` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) NOT NULL,
  `created_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id_estado`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `pasajero` (
  `id_pasajero` int(11) NOT NULL AUTO_INCREMENT,
  `id_avion` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `created_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id_pasajero`),
  KEY `pasajero_avion_idx` (`id_avion`),
  CONSTRAINT `pasajero_avion` FOREIGN KEY (`id_avion`) REFERENCES `avion` (`id_avion`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `piloto` (
  `id_piloto` int(11) NOT NULL AUTO_INCREMENT,
  `id_avion` int(11) DEFAULT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `created_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id_piloto`),
  KEY `piloto_avion_idx` (`id_avion`),
  CONSTRAINT `piloto_avion` FOREIGN KEY (`id_avion`) REFERENCES `avion` (`id_avion`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `puerta` (
  `id_puerta` int(11) NOT NULL AUTO_INCREMENT,
  `id_terminal` int(11) NOT NULL,
  `created_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id_puerta`),
  KEY `terminal_puerta_idx` (`id_terminal`),
  CONSTRAINT `puerta_terminal` FOREIGN KEY (`id_terminal`) REFERENCES `terminal` (`id_terminal`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `terminal` (
  `id_terminal` int(11) NOT NULL AUTO_INCREMENT,
  `direccion` varchar(45) NOT NULL,
  `created_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id_terminal`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `ubicacion` (
  `id_ubicacion` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `codigo` varchar(45) NOT NULL,
  `created_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id_ubicacion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `ubicacion_avion` (
  `id_ubicacion_avion` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `cordenada` varchar(45) NOT NULL,
  PRIMARY KEY (`id_ubicacion_avion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `permisos` varchar(45) NOT NULL,
  `id_aerolinea` varchar(45) NOT NULL,
  `created_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `vuelo` (
  `id_vuelo` int(11) NOT NULL AUTO_INCREMENT,
  `id_origen` int(11) NOT NULL,
  `id_destino` int(11) NOT NULL,
  `id_aerolinea` int(11) NOT NULL,
  `id_avion` int(11) NOT NULL,
  `id_terminal` int(11) NOT NULL,
  `id_puerta` int(11) NOT NULL,
  `id_estado` int(11) NOT NULL,
  `id_ubicacion_avion` int(11) NOT NULL,
  `duracion` varchar(45) NOT NULL,
  `fecha` datetime NOT NULL,
  `hora_salida` datetime(6) NOT NULL,
  `hora_llegada` datetime(6) NOT NULL,
  `clima` varchar(45) NOT NULL,
  `codigo_vuelo` varchar(45) NOT NULL,
  `created_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id_vuelo`),
  KEY `origen_ubicacion_idx` (`id_origen`),
  KEY `destino_ubicacion_idx` (`id_destino`),
  KEY `origen_destino_ubicacion_idx` (`id_origen`,`id_destino`),
  KEY `aerolinea_aerolinea_idx` (`id_aerolinea`),
  KEY `vuelo_avion_idx` (`id_avion`),
  KEY `terminal_terminal_idx` (`id_terminal`),
  KEY `puerta_puerta` (`id_puerta`),
  KEY `estado_estado_idx` (`id_estado`),
  KEY `ubicacion_avion_ubicacion_avion_idx` (`id_ubicacion_avion`),
  CONSTRAINT `aerolinea_aerolinea` FOREIGN KEY (`id_aerolinea`) REFERENCES `aerolinea` (`id_aerolinea`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `destino_ubicacion` FOREIGN KEY (`id_destino`) REFERENCES `ubicacion` (`id_ubicacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `estado_estado` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `origen_ubicacion` FOREIGN KEY (`id_origen`) REFERENCES `ubicacion` (`id_ubicacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `puerta_puerta` FOREIGN KEY (`id_puerta`) REFERENCES `puerta` (`id_puerta`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `terminal_terminal` FOREIGN KEY (`id_terminal`) REFERENCES `terminal` (`id_terminal`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `ubicacion_avion_ubicacion_avion` FOREIGN KEY (`id_ubicacion_avion`) REFERENCES `ubicacion_avion` (`id_ubicacion_avion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `vuelo_avion` FOREIGN KEY (`id_avion`) REFERENCES `avion` (`id_avion`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
