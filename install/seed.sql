CREATE SCHEMA IF NOT EXISTS `nkdev` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;

CREATE TABLE IF NOT EXISTS `nkdev`.`users` (
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

INSERT INTO `nkdev`.`users` 
( `type`, `acl`, `ts`, `company`, `luts`, `username`, `password`, `first`, `last` )
VALUES
( 2, 3, NOW(), 1, NOW(), 'rik', '<ReplaceWithAHashedPassword>', 'Richard', 'Winters' );

CREATE TABLE IF NOT EXISTS `nkdev`.`companies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` INT NULL,
  `ts` DATETIME NULL,
  `owner` INT NULL,
  `luts` DATETIME NULL,
  `luby` INT NULL,
  `name` TEXT NULL,
  `description` TEXT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `nkdev`.`companies` 
( `type`, `ts`, `owner`, `luts`, `luby`, `name`, `description` )
VALUES
( 2, NOW(), 1, NOW(), 1, 'Massively Modified, Inc.', 'A massively modified, massively modern corporation!' );


CREATE SCHEMA IF NOT EXISTS `nkpro` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;

CREATE TABLE IF NOT EXISTS `nkpro`.`users` (
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

INSERT INTO `nkpro`.`users` 
( `type`, `acl`, `ts`, `company`, `luts`, `username`, `password`, `first`, `last` )
VALUES
( 2, 3, NOW(), 1, NOW(), 'rik', '<ReplaceWithAHashedPassword>', 'Richard', 'Winters' );


CREATE TABLE IF NOT EXISTS `nkpro`.`companies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` INT NULL,
  `ts` DATETIME NULL,
  `owner` INT NULL,
  `luts` DATETIME NULL,
  `luby` INT NULL,
  `name` TEXT NULL,
  `description` TEXT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `nkpro`.`companies` 
( `type`, `ts`, `owner`, `luts`, `luby`, `name`, `description` )
VALUES
( 2, NOW(), 1, NOW(), 1, 'Massively Modified, Inc.', 'A massively modified, massively modern corporation!' );
