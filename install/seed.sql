CREATE SCHEMA IF NOT EXISTS `mmogpd` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;

CREATE TABLE IF NOT EXISTS `mmogpd`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` INT NULL,
  `acl` INT NULL,
  `ts` DATETIME NULL,
  `company` INT NULL,
  `luts` DATETIME NULL,
  `luby` INT NULL,
  `username` VARCHAR(255) NULL,
  `password` TEXT NULL,
  `first` VARCHAR(100) NULL,
  `middle` VARCHAR(45) NULL,
  `last` VARCHAR(100) NULL,
  `add1` TEXT NULL,
  `add2` TEXT NULL,
  `city` VARCHAR(255) NULL,
  `state` VARCHAR(255) NULL,
  `zip` VARCHAR(45) NULL,
  `email` TEXT NULL,
  `phone` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

INSERT INTO `mmogpd`.`users` 
( `type`, `acl`, `ts`, `company`, `luts`, `username`, `password`, `first`, `last` )
VALUES
( 2, 3, NOW(), 1, NOW(), 'rik', '<ReplaceWithAHashedPassword>', 'Richard', 'Winters' );

CREATE TABLE IF NOT EXISTS `mmogpd`.`companies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` INT NULL,
  `ts` DATETIME NULL,
  `owner` INT NULL,
  `luts` DATETIME NULL,
  `luby` INT NULL,
  `name` TEXT NULL,
  `description` TEXT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `mmogpd`.`companies` 
( `type`, `ts`, `owner`, `luts`, `luby`, `name`, `description` )
VALUES
( 2, NOW(), 1, NOW(), 1, 'Massively Modified, Inc.', 'A massively modified, massively modern corporation!' );


CREATE SCHEMA IF NOT EXISTS `mmogpp` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;

CREATE TABLE IF NOT EXISTS `mmogpp`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` INT NULL,
  `acl` INT NULL,
  `ts` DATETIME NULL,
  `company` INT NULL,
  `luts` DATETIME NULL,
  `luby` INT NULL,
  `username` VARCHAR(255) NULL,
  `password` TEXT NULL,
  `first` VARCHAR(100) NULL,
  `middle` VARCHAR(45) NULL,
  `last` VARCHAR(100) NULL,
  `add1` TEXT NULL,
  `add2` TEXT NULL,
  `city` VARCHAR(255) NULL,
  `state` VARCHAR(255) NULL,
  `zip` VARCHAR(45) NULL,
  `email` TEXT NULL,
  `phone` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

INSERT INTO `mmogpp`.`users` 
( `type`, `acl`, `ts`, `company`, `luts`, `username`, `password`, `first`, `last` )
VALUES
( 2, 3, NOW(), 1, NOW(), 'rik', '<ReplaceWithAHashedPassword>', 'Richard', 'Winters' );


CREATE TABLE IF NOT EXISTS `mmogpp`.`companies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` INT NULL,
  `ts` DATETIME NULL,
  `owner` INT NULL,
  `luts` DATETIME NULL,
  `luby` INT NULL,
  `name` TEXT NULL,
  `description` TEXT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `mmogpp`.`companies` 
( `type`, `ts`, `owner`, `luts`, `luby`, `name`, `description` )
VALUES
( 2, NOW(), 1, NOW(), 1, 'Massively Modified, Inc.', 'A massively modified, massively modern corporation!' );
