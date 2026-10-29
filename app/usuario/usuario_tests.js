let usuario_def_tests = Array(

    //Definicion de los test

    //dni
    Array('usuario','dni','input',1,'El dni cumple tamaño mínimo','min_size','ADD','dni_min_size_ko','El tamaño de dni debe ser como mínimo 9 caracteres.'),
    Array('usuario','dni','input',2,'El dni cumple tamaño máximo','max_size','ADD','dni_max_size_ko','El tamaño de dni debe ser como máximo 9 caracteres.'),
    Array('usuario','dni','input',3,'El dni cumple formato','format','ADD','dni_format_ko','Formato inválido. Debe tener 8 números y una letra mayúscula'),
    Array('usuario','dni','input',4,'comprobar correspondencia entre número y letra','personalized','ADD','dni_personalized_ko','La letra del DNI no corresponde a sus ocho números'),
    Array('usuario','dni','input',5,'El dni es correcto','valid','ADD',true,'El dni es correcto.'),
    Array('usuario','dni','input',6,'El dni cumple tamaño mínimo','min_size','EDIT','dni_min_size_ko','El tamaño de dni debe ser como mínimo 9 caracteres.'),
    Array('usuario','dni','input',7,'El dni cumple tamaño máximo','max_size','EDIT','dni_max_size_ko','El tamaño de dni debe ser como máximo 9 caracteres.'),
    Array('usuario','dni','input',8,'El dni cumple formato','format','EDIT','dni_format_ko','Formato inválido. Debe tener 8 números y una letra mayúscula'),
    Array('usuario','dni','input',9,'comprobar correspondencia entre número y letra','personalized','EDIT','dni_personalized_ko','La letra del DNI no corresponde a sus ocho números'),
    Array('usuario','dni','input',10,'El dni es correcto','valid','EDIT',true,'El dni es correcto.'),
    Array('usuario','dni','input',11,'El dni cumple tamaño máximo','max_size','SEARCH','dni_max_size_ko','El tamaño de dni debe ser como máximo 9 caracteres.'),
    Array('usuario','dni','input',12,'El dni cumple formato','format','SEARCH','dni_format_ko','Formato de búsqueda inválido. Se permiten dígitos y, opcionalmente, una letra mayúscula al final'),
    Array('usuario','dni','input',13,'El dni es correcto','valid','SEARCH',true,'El dni es correcto.'),
    Array('usuario','dni','input',14,'campo vacío: no filtrar por este campo','valid','SEARCH',true,'Campo vacío permitido en la búsqueda'),

    //usuario
    Array('usuario','usuario','input',15,'El usuario cumple tamaño mínimo','min_size','ADD','usuario_min_size_ko','El tamaño de usuario debe ser como mínimo 5 caracteres.'),
    Array('usuario','usuario','input',16,'El usuario cumple tamaño máximo','max_size','ADD','usuario_max_size_ko','El tamaño de usuario debe ser como máximo 45 caracteres.'),
    Array('usuario','usuario','input',17,'El usuario cumple formato','format','ADD','usuario_format_ko','El formato de usuario debe ser caracteres alfabéticos sin ñ ni tildes.'),
    Array('usuario','usuario','input',18,'El usuario es correcto','valid','ADD',true,'El usuario es correcto.'),
    Array('usuario','usuario','input',19,'El usuario cumple tamaño mínimo','min_size','EDIT','usuario_min_size_ko','El tamaño de usuario debe ser como mínimo 5 caracteres.'),
    Array('usuario','usuario','input',20,'El usuario cumple tamaño máximo','max_size','EDIT','usuario_max_size_ko','El tamaño de usuario debe ser como máximo 45 caracteres.'),
    Array('usuario','usuario','input',21,'El usuario cumple formato','format','EDIT','usuario_format_ko','El formato de usuario debe ser caracteres alfabéticos sin ñ ni tildes.'),
    Array('usuario','usuario','input',22,'El usuario es correcto','valid','EDIT',true,'El usuario es correcto.'),
    Array('usuario','usuario','input',23,'El usuario cumple tamaño máximo','max_size','SEARCH','usuario_max_size_ko','El tamaño de usuario debe ser como máximo 45 caracteres.'),
    Array('usuario','usuario','input',24,'El usuario cumple formato','format','SEARCH','usuario_format_ko','El formato de usuario debe ser caracteres alfabéticos sin ñ ni tildes.'),
    Array('usuario','usuario','input',25,'El usuario es correcto','valid','SEARCH',true,'El usuario es correcto.'),
    
    //contrasena
    Array('usuario','contrasena','input',26,'La contraseña cumple tamaño mínimo','min_size','ADD','contrasena_min_size_ko','El tamaño de contraseña debe ser como mínimo 8 caracteres.'),
    Array('usuario','contrasena','input',27,'La contraseña cumple tamaño máximo','max_size','ADD','contrasena_max_size_ko','El tamaño de contraseña debe ser como máximo 45 caracteres.'),
    Array('usuario','contrasena','input',28,'La contraseña cumple formato','format','ADD','contrasena_format_ko','El formato de contraseña debe ser caracteres alfabéticos sin ñ ni tildes.'),
    Array('usuario','contrasena','input',29,'La contraseña es correcta','valid','ADD',true,'La contraseña es correcta.'),
    Array('usuario','contrasena','input',30,'La contraseña cumple tamaño mínimo','min_size','EDIT','contrasena_min_size_ko','El tamaño de contraseña debe ser como mínimo 8 caracteres.'),
    Array('usuario','contrasena','input',31,'La contraseña cumple tamaño máximo','max_size','EDIT','contrasena_max_size_ko','El tamaño de contraseña debe ser como máximo 45 caracteres.'),
    Array('usuario','contrasena','input',32,'La contraseña cumple formato','format','EDIT','contrasena_format_ko','El formato de contraseña debe ser caracteres alfabéticos sin ñ ni tildes.'),
    Array('usuario','contrasena','input',33,'La contraseña es correcta','valid','EDIT',true,'La contraseña es correcta.'),
    Array('usuario','contrasena','input',34,'La contraseña cumple tamaño máximo','max_size','SEARCH','contrasena_max_size_ko','El tamaño de contraseña debe ser como máximo 45 caracteres.'),
    Array('usuario','contrasena','input',35,'La contraseña cumple formato','format','SEARCH','contrasena_format_ko','El formato de contraseña debe ser caracteres alfabéticos sin ñ ni tildes.'),
    Array('usuario','contrasena','input',36,'La contraseña es correcta','valid','SEARCH',true,'La contraseña es correcta.'),
    
    //id_rol
    Array('usuario','id_rol','select',37,'El id cumple tamaño mínimo','min_size','ADD','id_rol_min_size_ko','El tamaño de id debe ser como mínimo 1 carácter.'),
    Array('usuario','id_rol','select',38,'El id cumple tamaño máximo','max_size','ADD','id_rol_max_size_ko','El tamaño de id debe ser como máximo 11 caracteres.'),
    Array('usuario','id_rol','select',39,'El id cumple formato','format','ADD','id_rol_format_ko','El id debe ser un número entero.'),
    Array('usuario','id_rol','select',40,'El id es correcto','valid','ADD',true,'El id es correcto.'),
    Array('usuario','id_rol','select',41,'El id cumple tamaño mínimo','min_size','EDIT','id_rol_min_size_ko','El tamaño de id debe ser como mínimo 1 carácter.'),
    Array('usuario','id_rol','select',42,'El id cumple tamaño máximo','max_size','EDIT','id_rol_max_size_ko','El tamaño de id debe ser como máximo 11 caracteres.'),
    Array('usuario','id_rol','select',43,'El id cumple formato','format','EDIT','id_rol_format_ko','El id debe ser un número entero.'),
    Array('usuario','id_rol','select',44,'El id es correcto','valid','EDIT',true,'El id es correcto.'),
    Array('usuario','id_rol','select',45,'El id cumple tamaño máximo','max_size','SEARCH','id_rol_max_size_ko','El tamaño de id debe ser como máximo 11 caracteres.'),
    Array('usuario','id_rol','select',46,'El id cumple formato','format','SEARCH','id_rol_format_ko','El id debe ser un número entero.'),
    Array('usuario','id_rol','select',47,'El id es correcto','valid','SEARCH',true,'El id es correcto.'),
    Array('usuario','id_rol','select',48,'campo vacío: no filtrar por rol','valid','SEARCH',true,'Todos los roles: no filtrar por este campo')

);
let usuario_pruebas = Array(

    //Definicion de las pruebas

    //dni
    Array('usuario','dni',1,1,'ADD',{dni:'123'},'dni_min_size_ko'),
    Array('usuario','dni',2,2,'ADD',{dni:'1'.repeat(10)},'dni_max_size_ko'),
    Array('usuario','dni',3,3,'ADD',{dni:'1234567as'},'dni_format_ko'),
    Array('usuario','dni',4,4,'ADD',{dni:'12345678A'},'dni_personalized_ko'),
    Array('usuario','dni',5,5,'ADD',{dni:'12345678Z'},true),
    Array('usuario','dni',6,6,'EDIT',{dni:'123'},'dni_min_size_ko'),
    Array('usuario','dni',7,7,'EDIT',{dni:'1'.repeat(10)},'dni_max_size_ko'),
    Array('usuario','dni',8,8,'EDIT',{dni:'1234567as'},'dni_format_ko'),
    Array('usuario','dni',9,9,'EDIT',{dni:'12345678A'},'dni_personalized_ko'),
    Array('usuario','dni',10,10,'EDIT',{dni:'12345678Z'},true),
    Array('usuario','dni',11,11,'SEARCH',{dni:'1'.repeat(10)},'dni_max_size_ko'),
    Array('usuario','dni',12,12,'SEARCH',{dni:'1234567as'},'dni_format_ko'),
    Array('usuario','dni',12,13,'SEARCH',{dni:'12345678z'},'dni_format_ko'),
    Array('usuario','dni',13,14,'SEARCH',{dni:'12345678A'},true),
    Array('usuario','dni',14,15,'SEARCH',{dni:''},true),

    //usuario
    Array('usuario','usuario',15,16,'ADD',{usuario:'asd'},'usuario_min_size_ko'),
    Array('usuario','usuario',16,17,'ADD',{usuario:'a'.repeat(50)},'usuario_max_size_ko'),
    Array('usuario','usuario',17,18,'ADD',{usuario:'asdñásd'},'usuario_format_ko'),
    Array('usuario','usuario',18,19,'ADD',{usuario:'aaaaaa'},true),
    Array('usuario','usuario',19,20,'EDIT',{usuario:'asd'},'usuario_min_size_ko'),
    Array('usuario','usuario',20,21,'EDIT',{usuario:'a'.repeat(50)},'usuario_max_size_ko'),
    Array('usuario','usuario',21,22,'EDIT',{usuario:'asdñásd'},'usuario_format_ko'),
    Array('usuario','usuario',22,23,'EDIT',{usuario:'aaaaaa'},true),
    Array('usuario','usuario',23,24,'SEARCH',{usuario:'a'.repeat(50)},'usuario_max_size_ko'),
    Array('usuario','usuario',24,25,'SEARCH',{usuario:'asdñásd'},'usuario_format_ko'),
    Array('usuario','usuario',25,26,'SEARCH',{usuario:'aaaaaa'},true),
    Array('usuario','usuario',25,27,'SEARCH',{usuario:''},true),

    //contrasena
    Array('usuario','contrasena',26,28,'ADD',{contrasena:'asd'},'contrasena_min_size_ko'),
    Array('usuario','contrasena',27,29,'ADD',{contrasena:'a'.repeat(50)},'contrasena_max_size_ko'),
    Array('usuario','contrasena',28,30,'ADD',{contrasena:'asdñásdhgfh'},'contrasena_format_ko'),
    Array('usuario','contrasena',29,31,'ADD',{contrasena:'aaaaaaaaa'},true),
    Array('usuario','contrasena',30,32,'EDIT',{contrasena:'asd'},'contrasena_min_size_ko'),
    Array('usuario','contrasena',31,33,'EDIT',{contrasena:'a'.repeat(50)},'contrasena_max_size_ko'),
    Array('usuario','contrasena',32,34,'EDIT',{contrasena:'asdñásdhj'},'contrasena_format_ko'),
    Array('usuario','contrasena',33,35,'EDIT',{contrasena:'aaaaaaaaa'},true),
    Array('usuario','contrasena',34,36,'SEARCH',{contrasena:'a'.repeat(50)},'contrasena_max_size_ko'),
    Array('usuario','contrasena',35,37,'SEARCH',{contrasena:'asdñásdhfg'},'contrasena_format_ko'),
    Array('usuario','contrasena',36,38,'SEARCH',{contrasena:'aaaaaaaaa'},true),
    Array('usuario','contrasena',36,39,'SEARCH',{contrasena:''},true),

    //id_rol
    Array('usuario','id_rol',37,40,'ADD',{id_rol:''},'id_rol_min_size_ko'),
    Array('usuario','id_rol',38,41,'ADD',{id_rol:'1'.repeat(15)},'id_rol_max_size_ko'),
    Array('usuario','id_rol',39,42,'ADD',{id_rol:'asd'},'id_rol_format_ko'),
    Array('usuario','id_rol',40,43,'ADD',{id_rol:'1234'},true),
    Array('usuario','id_rol',41,44,'EDIT',{id_rol:''},'id_rol_min_size_ko'),
    Array('usuario','id_rol',42,45,'EDIT',{id_rol:'1'.repeat(15)},'id_rol_max_size_ko'),
    Array('usuario','id_rol',43,46,'EDIT',{id_rol:'asd'},'id_rol_format_ko'),
    Array('usuario','id_rol',44,47,'EDIT',{id_rol:'1234'},true),
    Array('usuario','id_rol',45,48,'SEARCH',{id_rol:'1'.repeat(15)},'id_rol_max_size_ko'),
    Array('usuario','id_rol',46,49,'SEARCH',{id_rol:'asd'},'id_rol_format_ko'),
    Array('usuario','id_rol',47,50,'SEARCH',{id_rol:'1234'},true),
    Array('usuario','id_rol',48,51,'SEARCH',{id_rol:''},true)

);