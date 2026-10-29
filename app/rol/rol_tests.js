let rol_def_tests = Array(

    //Definicion de los test

    //id_rol
    Array('rol','id_rol','input',1,'El id cumple tamaño mínimo','min_size','ADD','id_rol_min_size_ko','El tamaño de id debe ser como mínimo 1 carácter.'),
    Array('rol','id_rol','input',2,'El id cumple tamaño máximo','max_size','ADD','id_rol_max_size_ko','El tamaño de id debe ser como máximo 11 caracteres.'),
    Array('rol','id_rol','input',3,'El id cumple formato','format','ADD','id_rol_format_ko','El id debe ser un número entero.'),
    Array('rol','id_rol','input',4,'El id es correcto','valid','ADD',true,'El id es correcto.'),
    Array('rol','id_rol','input',5,'El id cumple tamaño mínimo','min_size','EDIT','id_rol_min_size_ko','El tamaño de id debe ser como mínimo 1 carácter.'),
    Array('rol','id_rol','input',6,'El id cumple tamaño máximo','max_size','EDIT','id_rol_max_size_ko','El tamaño de id debe ser como máximo 11 caracteres.'),
    Array('rol','id_rol','input',7,'El id cumple formato','format','EDIT','id_rol_format_ko','El id debe ser un número entero.'),
    Array('rol','id_rol','input',8,'El id es correcto','valid','EDIT',true,'El id es correcto.'),
    Array('rol','id_rol','input',9,'El id cumple tamaño máximo','max_size','SEARCH','id_rol_max_size_ko','El tamaño de id debe ser como máximo 11 caracteres.'),
    Array('rol','id_rol','input',10,'El id cumple formato','format','SEARCH','id_rol_format_ko','El id debe ser un número entero.'),
    Array('rol','id_rol','input',11,'El id es correcto','valid','SEARCH',true,'El id es correcto.'),

    //rol_name
    Array('rol','rol_name','input',12,'El rol_name cumple tamaño mínimo','min_size','ADD','rol_name_min_size_ko','El tamaño de nombre debe ser como mínimo 5 caracteres.'),
    Array('rol','rol_name','input',13,'El rol_name cumple tamaño máximo','max_size','ADD','rol_name_max_size_ko','El tamaño de nombre debe ser como máximo 48 caracteres.'),
    Array('rol','rol_name','input',14,'El rol_name cumple formato','format','ADD','rol_name_format_ko','El formato de nombre debe ser solo caracteres alfabéticos.'),
    Array('rol','rol_name','input',15,'El rol_name es correcto','valid','ADD',true,'El nombre es correcto.'),
    Array('rol','rol_name','input',16,'El rol_name cumple tamaño mínimo','min_size','EDIT','rol_name_min_size_ko','El tamaño de nombre debe ser como mínimo 5 caracteres.'),
    Array('rol','rol_name','input',17,'El rol_name cumple tamaño máximo','max_size','EDIT','rol_name_max_size_ko','El tamaño de nombre debe ser como máximo 48 caracteres.'),
    Array('rol','rol_name','input',18,'El rol_name cumple formato','format','EDIT','rol_name_format_ko','El formato de nombre debe ser solo caracteres alfabéticos.'),
    Array('rol','rol_name','input',19,'El rol_name es correcto','valid','EDIT',true,'El nombre es correcto.'),
    Array('rol','rol_name','input',20,'El rol_name cumple tamaño máximo','max_size','SEARCH','rol_name_max_size_ko','El tamaño de nombre debe ser como máximo 48 caracteres.'),
    Array('rol','rol_name','input',21,'El rol_name cumple formato','format','SEARCH','rol_name_format_ko','El formato de nombre debe ser solo caracteres alfabéticos.'),
    Array('rol','rol_name','input',22,'El rol_name es correcto','valid','SEARCH',true,'El nombre es correcto.'),

    //rol_description
    Array('rol','rol_description','textarea',23,'La descripción cumple tamaño mínimo','min_size','ADD','rol_description_min_size_ko','La descripción debe ser como mínimo 5 caracteres.'),
    Array('rol','rol_description','textarea',24,'La descripción cumple tamaño máximo','max_size','ADD','rol_description_max_size_ko','La descripción debe ser como máximo 200 caracteres.'),
    Array('rol','rol_description','textarea',25,'La descripción cumple formato','format','ADD','rol_description_format_ko','El formato de la descripción debe ser caracteres alfabéticos con espacios, signos de puntuación y ñ.'),
    Array('rol','rol_description','textarea',26,'La descripción es correcta','valid','ADD',true,'La descripción es correcta.'),
    Array('rol','rol_description','textarea',27,'La descripción cumple tamaño mínimo','min_size','EDIT','rol_description_min_size_ko','La descripción debe ser como mínimo 5 caracteres.'),
    Array('rol','rol_description','textarea',28,'La descripción cumple tamaño máximo','max_size','EDIT','rol_description_max_size_ko','La descripción debe ser como máximo 200 caracteres.'),
    Array('rol','rol_description','textarea',29,'La descripción cumple formato','format','EDIT','rol_description_format_ko','El formato de la descripción debe ser caracteres alfabéticos con espacios, signos de puntuación y ñ.'),
    Array('rol','rol_description','textarea',30,'La descripción es correcta','valid','EDIT',true,'La descripción es correcta.'),
    Array('rol','rol_description','textarea',31,'La descripción cumple tamaño máximo','max_size','SEARCH','rol_description_max_size_ko','La descripción debe ser como máximo 200 caracteres.'),
    Array('rol','rol_description','textarea',32,'La descripción cumple formato','format','SEARCH','rol_description_format_ko','El formato de la descripción debe ser caracteres alfabéticos con espacios, signos de puntuación y ñ.'),
    Array('rol','rol_description','textarea',33,'La descripción es correcta','valid','SEARCH',true,'La descripción es correcta.')
);

let rol_pruebas = Array(

    //Definicion de las pruebas

    //id_rol
    Array('rol','id_rol',1,1,'ADD',{id_rol:''},'id_rol_min_size_ko'),
    Array('rol','id_rol',2,2,'ADD',{id_rol:'1'.repeat(15)},'id_rol_max_size_ko'),
    Array('rol','id_rol',3,3,'ADD',{id_rol:'asd'},'id_rol_format_ko'),
    Array('rol','id_rol',4,4,'ADD',{id_rol:'1234'},true),
    Array('rol','id_rol',5,5,'EDIT',{id_rol:''},'id_rol_min_size_ko'),
    Array('rol','id_rol',6,6,'EDIT',{id_rol:'1'.repeat(15)},'id_rol_max_size_ko'),
    Array('rol','id_rol',7,7,'EDIT',{id_rol:'asd'},'id_rol_format_ko'),
    Array('rol','id_rol',8,8,'EDIT',{id_rol:'1234'},true),
    Array('rol','id_rol',9,9,'SEARCH',{id_rol:'1'.repeat(15)},'id_rol_max_size_ko'),
    Array('rol','id_rol',10,10,'SEARCH',{id_rol:'asd'},'id_rol_format_ko'),
    Array('rol','id_rol',11,11,'SEARCH',{id_rol:'1234'},true),
    Array('rol','id_rol',11,12,'SEARCH',{id_rol:''},true),

    //rol_name
    Array('rol','rol_name',12,13,'ADD',{rol_name:'asd'},'rol_name_min_size_ko'),
    Array('rol','rol_name',13,14,'ADD',{rol_name:'a'.repeat(50)},'rol_name_max_size_ko'),
    Array('rol','rol_name',14,15,'ADD',{rol_name:'asd1234'},'rol_name_format_ko'),
    Array('rol','rol_name',15,16,'ADD',{rol_name:'Administrador'},true),
    Array('rol','rol_name',16,17,'EDIT',{rol_name:'asd'},'rol_name_min_size_ko'),
    Array('rol','rol_name',17,18,'EDIT',{rol_name:'a'.repeat(50)},'rol_name_max_size_ko'),
    Array('rol','rol_name',18,19,'EDIT',{rol_name:'asd1234'},'rol_name_format_ko'),
    Array('rol','rol_name',19,20,'EDIT',{rol_name:'Administrador'},true),
    Array('rol','rol_name',20,21,'SEARCH',{rol_name:'a'.repeat(50)},'rol_name_max_size_ko'),
    Array('rol','rol_name',21,22,'SEARCH',{rol_name:'asd1234'},'rol_name_format_ko'),
    Array('rol','rol_name',22,23,'SEARCH',{rol_name:'Administrador'},true),
    Array('rol','rol_name',22,24,'SEARCH',{rol_name:''},true),
    //rol_description
    Array('rol','rol_description',23,25,'ADD',{rol_description:'asd'},'rol_description_min_size_ko'),
    Array('rol','rol_description',24,26,'ADD',{rol_description:'a'.repeat(205)},'rol_description_max_size_ko'),
    Array('rol','rol_description',25,27,'ADD',{rol_description:'asd123'},'rol_description_format_ko'),
    Array('rol','rol_description',26,28,'ADD',{rol_description:'asdñ , asd'},true),
    Array('rol','rol_description',27,29,'EDIT',{rol_description:'asd'},'rol_description_min_size_ko'),
    Array('rol','rol_description',28,30,'EDIT',{rol_description:'a'.repeat(205)},'rol_description_max_size_ko'),
    Array('rol','rol_description',29,31,'EDIT',{rol_description:'asd123'},'rol_description_format_ko'),
    Array('rol','rol_description',30,32,'EDIT',{rol_description:'asdñ , asd'},true),
    Array('rol','rol_description',31,33,'SEARCH',{rol_description:'a'.repeat(205)},'rol_description_max_size_ko'),
    Array('rol','rol_description',32,34,'SEARCH',{rol_description:'asd123'},'rol_description_format_ko'),
    Array('rol','rol_description',33,35,'SEARCH',{rol_description:'asdñ , asd'},true),
    Array('rol','rol_description',33,36,'SEARCH',{rol_description:''},true)

);