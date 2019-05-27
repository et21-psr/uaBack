CREATE TABLE `aerolinea` (
  `id_aerolinea` int(11) NOT NULL AUTO_INCREMENT,
  `id_aviones` varchar(45) NOT NULL,
  `id_vuelos` varchar(45) NOT NULL,
  `created_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id_aerolinea`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
CREATE TABLE `cronograma` (
  `idcronograma` int(11) NOT NULL AUTO_INCREMENT,
  `id_vuelo` varchar(45) NOT NULL,
  `created_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`idcronograma`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `estado` (
  `idestado` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) NOT NULL,
  `created_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`idestado`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `pasajero` (
  `idPasajero` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  PRIMARY KEY (`idPasajero`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `piloto` (
  `idpiloto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  PRIMARY KEY (`idpiloto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `puerta` (
  `idpuerta` int(11) NOT NULL AUTO_INCREMENT,
  `id_terminal` varchar(45) NOT NULL,
  PRIMARY KEY (`idpuerta`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `terminal` (
  `idterminal` int(11) NOT NULL AUTO_INCREMENT,
  `puerta` varchar(45) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  PRIMARY KEY (`idterminal`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `ubicacion` (
  `idubicacion` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `codigo` varchar(45) NOT NULL,
  PRIMARY KEY (`idubicacion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `permisos` varchar(45) NOT NULL,
  `id_aerolinea` varchar(45) NOT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `vuelo` (
  `id_vuelo` int(11) NOT NULL AUTO_INCREMENT,
  `id_origen` varchar(45) NOT NULL,
  `id_destino` varchar(45) NOT NULL,
  `id_aerolinea` varchar(45) NOT NULL,
  `id_avion` varchar(45) NOT NULL,
  `duracion` varchar(45) NOT NULL,
  `fecha` datetime NOT NULL,
  `hora_salida` datetime(6) NOT NULL,
  `hora_llegada` datetime(6) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `id_ubicacion` varchar(45) NOT NULL,
  `clima` varchar(45) NOT NULL,
  `codigo_vuelo` varchar(45) NOT NULL,
  `id_terminal` varchar(45) NOT NULL,
  `id_puerta` varchar(45) NOT NULL,
  PRIMARY KEY (`id_vuelo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `avion` (
  `idavion` int(90) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `matricula` varchar(45) NOT NULL,
  `capacidad` varchar(45) NOT NULL,
  `id_pasajeros` varchar(45) NOT NULL,
  `id_pilotos` varchar(45) NOT NULL,
  `created_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`idavion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='			';

