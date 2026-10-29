let rolaccionfuncionalidad_def_tests = Array(

    //Definicion de los test

    //id_funcionalidad
    Array('rolaccionfuncionalidad','id_funcionalidad','select',1,'El id_funcionalidad cumple el tamaño mínimo','min_size','ADD','id_funcionalidad_min_size_ko','El tamaño de id_funcionalidad debe ser como mínimo 1 carácter'),
    Array('rolaccionfuncionalidad','id_funcionalidad','select',2,'El id_funcionalidad cumple el tamaño máximo','max_size','ADD','id_funcionalidad_max_size_ko','El tamaño de id_funcionalidad debe ser como máximo 11 caracteres'),
    Array('rolaccionfuncionalidad','id_funcionalidad','select',3,'El id_funcionalidad cumple el formato','format','ADD','id_funcionalidad_format_ko','El id_funcionalidad debe ser un número entero'),
    Array('rolaccionfuncionalidad','id_funcionalidad','select',4,'El id_funcionalidad es correcto','valid','ADD',true,'El id_funcionalidad es correcto'),
    Array('rolaccionfuncionalidad','id_funcionalidad','select',5,'El id_funcionalidad cumple el tamaño mínimo','min_size','EDIT','id_funcionalidad_min_size_ko','El tamaño de id_funcionalidad debe ser como mínimo 1 carácter'),
    Array('rolaccionfuncionalidad','id_funcionalidad','select',6,'El id_funcionalidad cumple el tamaño máximo','max_size','EDIT','id_funcionalidad_max_size_ko','El tamaño de id_funcionalidad debe ser como máximo 11 caracteres'),
    Array('rolaccionfuncionalidad','id_funcionalidad','select',7,'El id_funcionalidad cumple el formato','format','EDIT','id_funcionalidad_format_ko','El id_funcionalidad debe ser un número entero'),
    Array('rolaccionfuncionalidad','id_funcionalidad','select',8,'El id_funcionalidad es correcto','valid','EDIT',true,'El id_funcionalidad es correcto'),
    Array('rolaccionfuncionalidad','id_funcionalidad','select',9,'El id_funcionalidad cumple el tamaño máximo','max_size','SEARCH','id_funcionalidad_max_size_ko','El tamaño de id_funcionalidad debe ser como máximo 11 caracteres'),
    Array('rolaccionfuncionalidad','id_funcionalidad','select',10,'El id_funcionalidad cumple el formato','format','SEARCH','id_funcionalidad_format_ko','El id_funcionalidad debe ser un número entero'),
    Array('rolaccionfuncionalidad','id_funcionalidad','select',11,'El id_funcionalidad es correcto','valid','SEARCH',true,'El id_funcionalidad es correcto'),

    //id_accion
    Array('rolaccionfuncionalidad','id_accion','select',12,'El id_accion cumple el tamaño mínimo','min_size','ADD','id_accion_min_size_ko','El tamaño de id_accion debe ser como mínimo 1 carácter'),
    Array('rolaccionfuncionalidad','id_accion','select',13,'El id_accion cumple el tamaño máximo','max_size','ADD','id_accion_max_size_ko','El tamaño de id_accion debe ser como máximo 11 caracteres'),
    Array('rolaccionfuncionalidad','id_accion','select',14,'El id_accion cumple el formato','format','ADD','id_accion_format_ko','El id_accion debe ser un número entero'),
    Array('rolaccionfuncionalidad','id_accion','select',15,'El id_accion es correcto','valid','ADD',true,'El id_accion es correcto'),
    Array('rolaccionfuncionalidad','id_accion','select',16,'El id_accion cumple el tamaño mínimo','min_size','EDIT','id_accion_min_size_ko','El tamaño de id_accion debe ser como mínimo 1 carácter'),
    Array('rolaccionfuncionalidad','id_accion','select',17,'El id_accion cumple el tamaño máximo','max_size','EDIT','id_accion_max_size_ko','El tamaño de id_accion debe ser como máximo 11 caracteres'),
    Array('rolaccionfuncionalidad','id_accion','select',18,'El id_accion cumple el formato','format','EDIT','id_accion_format_ko','El id_accion debe ser un número entero'),
    Array('rolaccionfuncionalidad','id_accion','select',19,'El id_accion es correcto','valid','EDIT',true,'El id_accion es correcto'),
    Array('rolaccionfuncionalidad','id_accion','select',20,'El id_accion cumple el tamaño máximo','max_size','SEARCH','id_accion_max_size_ko','El tamaño de id_accion debe ser como máximo 11 caracteres'),
    Array('rolaccionfuncionalidad','id_accion','select',21,'El id_accion cumple el formato','format','SEARCH','id_accion_format_ko','El id_accion debe ser un número entero'),
    Array('rolaccionfuncionalidad','id_accion','select',22,'El id_accion es correcto','valid','SEARCH',true,'El id_accion es correcto'),

    //id_rol
    Array('rolaccionfuncionalidad','id_rol','select',23,'El id_rol cumple tamaño mínimo','min_size','ADD','id_rol_min_size_ko','El tamaño de id_rol debe ser como mínimo 1 carácter.'),
    Array('rolaccionfuncionalidad','id_rol','select',24,'El id_rol cumple tamaño máximo','max_size','ADD','id_rol_max_size_ko','El tamaño de id_rol debe ser como máximo 11 caracteres.'),
    Array('rolaccionfuncionalidad','id_rol','select',25,'El id_rol cumple formato','format','ADD','id_rol_format_ko','El id_rol debe ser un número entero.'),
    Array('rolaccionfuncionalidad','id_rol','select',26,'El id_rol es correcto','valid','ADD',true,'El id_rol es correcto.'),
    Array('rolaccionfuncionalidad','id_rol','select',27,'El id_rol cumple tamaño mínimo','min_size','EDIT','id_rol_min_size_ko','El tamaño de id_rol debe ser como mínimo 1 carácter.'),
    Array('rolaccionfuncionalidad','id_rol','select',28,'El id_rol cumple tamaño máximo','max_size','EDIT','id_rol_max_size_ko','El tamaño de id_rol debe ser como máximo 11 caracteres.'),
    Array('rolaccionfuncionalidad','id_rol','select',29,'El id_rol cumple formato','format','EDIT','id_rol_format_ko','El id_rol debe ser un número entero.'),
    Array('rolaccionfuncionalidad','id_rol','select',30,'El id_rol es correcto','valid','EDIT',true,'El id_rol es correcto.'),
    Array('rolaccionfuncionalidad','id_rol','select',31,'El id_rol cumple tamaño máximo','max_size','SEARCH','id_rol_max_size_ko','El tamaño de id_rol debe ser como máximo 11 caracteres.'),
    Array('rolaccionfuncionalidad','id_rol','select',32,'El id_rol cumple formato','format','SEARCH','id_rol_format_ko','El id_rol debe ser un número entero.'),
    Array('rolaccionfuncionalidad','id_rol','select',33,'El id_rol es correcto','valid','SEARCH',true,'El id_rol es correcto.')


)

let rolaccionfuncionalidad_pruebas = Array(

    //Definicion de las pruebas

    //id_funcionalidad
    Array('rolaccionfuncionalidad','id_funcionalidad',1,1,'ADD',{id_funcionalidad:''},'id_funcionalidad_min_size_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad',2,2,'ADD',{id_funcionalidad:'1'.repeat(15)},'id_funcionalidad_max_size_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad',3,3,'ADD',{id_funcionalidad:'asd'},'id_funcionalidad_format_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad',4,4,'ADD',{id_funcionalidad:'1234'},true),
    Array('rolaccionfuncionalidad','id_funcionalidad',5,5,'EDIT',{id_funcionalidad:''},'id_funcionalidad_min_size_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad',6,6,'EDIT',{id_funcionalidad:'1'.repeat(15)},'id_funcionalidad_max_size_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad',7,7,'EDIT',{id_funcionalidad:'asd'},'id_funcionalidad_format_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad',8,8,'EDIT',{id_funcionalidad:'1234'},true),
    Array('rolaccionfuncionalidad','id_funcionalidad',9,9,'SEARCH',{id_funcionalidad:'1'.repeat(15)},'id_funcionalidad_max_size_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad',10,10,'SEARCH',{id_funcionalidad:'asd'},'id_funcionalidad_format_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad',11,11,'SEARCH',{id_funcionalidad:'1234'},true),
    Array('rolaccionfuncionalidad','id_funcionalidad',11,12,'SEARCH',{id_funcionalidad:''},true),
    
    //id_accion
    Array('rolaccionfuncionalidad','id_accion',12,13,'ADD',{id_accion:''},'id_accion_min_size_ko'),
    Array('rolaccionfuncionalidad','id_accion',13,14,'ADD',{id_accion:'1'.repeat(15)},'id_accion_max_size_ko'),
    Array('rolaccionfuncionalidad','id_accion',14,15,'ADD',{id_accion:'asd'},'id_accion_format_ko'),
    Array('rolaccionfuncionalidad','id_accion',15,16,'ADD',{id_accion:'1234'},true),
    Array('rolaccionfuncionalidad','id_accion',16,17,'EDIT',{id_accion:''},'id_accion_min_size_ko'),
    Array('rolaccionfuncionalidad','id_accion',17,18,'EDIT',{id_accion:'1'.repeat(15)},'id_accion_max_size_ko'),
    Array('rolaccionfuncionalidad','id_accion',18,19,'EDIT',{id_accion:'asd'},'id_accion_format_ko'),
    Array('rolaccionfuncionalidad','id_accion',19,20,'EDIT',{id_accion:'1234'},true),
    Array('rolaccionfuncionalidad','id_accion',20,21,'SEARCH',{id_accion:'1'.repeat(15)},'id_accion_max_size_ko'),
    Array('rolaccionfuncionalidad','id_accion',21,22,'SEARCH',{id_accion:'asd'},'id_accion_format_ko'),
    Array('rolaccionfuncionalidad','id_accion',22,23,'SEARCH',{id_accion:'1234'},true),
    Array('rolaccionfuncionalidad','id_accion',22,24,'SEARCH',{id_accion:''},true),

    //id_rol
    Array('rolaccionfuncionalidad','id_rol',23,25,'ADD',{id_rol:''},'id_rol_min_size_ko'),
    Array('rolaccionfuncionalidad','id_rol',24,26,'ADD',{id_rol:'1'.repeat(15)},'id_rol_max_size_ko'),
    Array('rolaccionfuncionalidad','id_rol',25,27,'ADD',{id_rol:'asd'},'id_rol_format_ko'),
    Array('rolaccionfuncionalidad','id_rol',26,28,'ADD',{id_rol:'1234'},true),
    Array('rolaccionfuncionalidad','id_rol',27,29,'EDIT',{id_rol:''},'id_rol_min_size_ko'),
    Array('rolaccionfuncionalidad','id_rol',28,30,'EDIT',{id_rol:'1'.repeat(15)},'id_rol_max_size_ko'),
    Array('rolaccionfuncionalidad','id_rol',29,31,'EDIT',{id_rol:'asd'},'id_rol_format_ko'),
    Array('rolaccionfuncionalidad','id_rol',30,32,'EDIT',{id_rol:'1234'},true),
    Array('rolaccionfuncionalidad','id_rol',31,33,'SEARCH',{id_rol:'1'.repeat(15)},'id_rol_max_size_ko'),
    Array('rolaccionfuncionalidad','id_rol',32,34,'SEARCH',{id_rol:'asd'},'id_rol_format_ko'),
    Array('rolaccionfuncionalidad','id_rol',33,35,'SEARCH',{id_rol:'1234'},true),
    Array('rolaccionfuncionalidad','id_rol',33,36,'SEARCH',{id_rol:''},true)

)