CREATE SCHEMA sistemaInventario;
USE sistemaInventario;

CREATE TABLE usuario(
idUsuario int primary key auto_increment,
admin bool,
nombre varchar(30) not null,
contraseña nvarchar(80) not null
);

CREATE TABLE productosInventario(
idProducto int primary key auto_increment,
categoria varchar(30) not null,
nombreProducto varchar(30) not null,
cantidad int not null,
precio int not null,
idUsuario int,
constraint fkIdUsuario foreign key(idUsuario) references usuario(idUsuario)
);


