-- 1-borrar base de dato si existe
DROP DATABASE IF EXISTS base_dato;

-- 2-crear base de dato
CREATE DATABASE base_dato;

-- 3-indicar la base de datos donde vamos a trabajar
USE base_dato;

-- 4-crear tablaS en la base de dato
CREATE TABLE medico(
        medico_cuit VARCHAR(11) NOT NULL
    ,   nombre VARCHAR(200)
    ,   especialidad VARCHAR(200)
    ,   PRIMARY KEY (medico_cuit)
);

CREATE TABLE paciente(
        paciente_dni VARCHAR(8) NOT NULL
    ,   email VARCHAR(200)
    ,   edad INT
    ,   PRIMARY KEY (paciente_dni)
);

CREATE TABLE link_medico_paciente(
        medico_cuit VARCHAR(11)             -- FK
    ,   paciente_dni VARCHAR(8)             -- FK
    ,   medico_cabecera BOOLEAN DEFAULT TRUE
    ,   PRIMARY KEY (medico_cuit, paciente_dni)
);

ALTER TABLE link_medico_paciente
    ADD CONSTRAINT fk_medico_link
    FOREIGN KEY (medico_cuit) REFERENCES medico(medico_cuit);

ALTER TABLE link_medico_paciente
    ADD CONSTRAINT fk_paciente_link
    FOREIGN KEY (paciente_dni) REFERENCES paciente(paciente_dni);


-- creando tabla relacion muchos a muchos
CREATE TABLE obra_social(
        obra_social_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT
    ,   plan VARCHAR(100)
    ,   nombre VARCHAR(200)
);



CREATE TABLE facturacion(
        facturacion_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT
   ,    medico_cuit VARCHAR(11)
   ,    paciente_dni VARCHAR(8)
   ,    obra_social_id INT
   ,    precio DECIMAL(10,2)
   ,    fecha DATE
);

ALTER TABLE facturacion
    ADD CONSTRAINT fk_medico_fact
    FOREIGN KEY (medico_cuit) REFERENCES medico(medico_cuit);

ALTER TABLE facturacion
    ADD CONSTRAINT fk_paciente__fact
    FOREIGN KEY (paciente_dni) REFERENCES paciente(paciente_dni);

ALTER TABLE facturacion
    ADD CONSTRAINT fk_obra_social_fact
    FOREIGN KEY (obra_social_id) REFERENCES obra_social(obra_social_id);


-- ingresando datos-----------------
USE base_dato;

INSERT INTO medico
    VALUE ("38484892921", "ALEXIS", "Maquinista");

SELECT
    medico_cuit 
,   nombre
,   especialidad
FROM medico;

INSERT INTO paciente
    VALUE ("38484839", "ajsdjd@Maquinista", 99);

INSERT INTO link_medico_paciente
    VALUE("38484892921", "38484839", FALSE);

INSERT INTO obra_social
(nombre, plan)
VALUE 
("osde", "210")
,("galeno", "oro")
,("sancor", "310")
,("galeno", "platinium")
,("osde", "510");

SELECT * FROM obra_social;

INSERT INTO facturacion
VALUE (NULL, "38484892921", "38484839", 4, 345666.98, DEFAULT);

INSERT INTO facturacion
VALUE (NULL, "38484892921", "38484839", 2, 66.98, "2024-1023");

INSERT INTO facturacion
VALUE (5, "38484892921", "38484839", 1, 1290.98, "2021-02-02");   


-- actualizar tabla-set(modificar)-where(en donde)
UPDATE facturacion  
SET precio = $ 1500
WHERE facturacion_id = 6