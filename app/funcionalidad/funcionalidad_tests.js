let funcionalidad_def_tests = Array(
    
    //id_funcionalidad
    Array('funcionalidad','id_funcionalidad','input',1,'cumple formato','format','ADD','id_funcionalidad_format_ko','Formato incorrecto. Debe ser numerico'),
    Array('funcionalidad','id_funcionalidad','input',2,'cumple tamaño minimo','min_size','ADD','id_funcionalidad_min_size_ko','Tamaño muy corto. Debe estar entre 1 y 11 digitos'),
    Array('funcionalidad','id_funcionalidad','input',3,'cumple tamaño maximo','max_size','ADD','id_funcionalidad_max_size_ko','Tamaño muy largo. Debe estar entre 1 y 11 digitos'),
    Array('funcionalidad','id_funcionalidad','input',4,'es correcto','valid','ADD',true,'Id funcionalidad correcto'),
    Array('funcionalidad','id_funcionalidad','input',5,'cumple formato numerico','format','EDIT','id_funcionalidad_format_ko','Formato id incorrecto. Debe ser numerico'),
    Array('funcionalidad','id_funcionalidad','input',6,'cumple tamaño minimo','min_size','EDIT','id_funcionalidad_min_size_ko','Tamaño muy corto. Debe estar entre 1 y 11 digitos'),
    Array('funcionalidad','id_funcionalidad','input',7,'cumple tamaño maximo','max_size','EDIT','id_funcionalidad_max_size_ko','Tamaño muy largo. Debe estar entre 1 y 11 digitos'),
    Array('funcionalidad','id_funcionalidad','input',8,'es correcto','valid','EDIT',true,'Id funcionalidad correcto'),
    Array('funcionalidad','id_funcionalidad','input',9,'cumple formato numerico','format','SEARCH','id_funcionalidad_format_ko','Formato id incorrecto. Debe ser numerico'),
    Array('funcionalidad','id_funcionalidad','input',10,'cumple tamaño maximo','max_size','SEARCH','id_funcionalidad_max_size_ko','Criterio de búsqueda muy largo. Debe tener como máximo 11 dígitos'),
    Array('funcionalidad','id_funcionalidad','input',11,'es correcto','valid','SEARCH',true,'Id funcionalidad correcto'),

    //nombre_funcionalidad
    Array('funcionalidad','nombre_funcionalidad','input',12,'cumple formato','format','ADD','nombre_funcionalidad_format_ko','Formato incorrecto. Debe ser alfabetico pudiendo incluir ñ'),
    Array('funcionalidad','nombre_funcionalidad','input',13,'cumple tamaño minimo','min_size','ADD','nombre_funcionalidad_min_size_ko','Tamaño muy corto. Debe estar entre 5 y 48 caracteres'),
    Array('funcionalidad','nombre_funcionalidad','input',14,'cumple tamaño maximo','max_size','ADD','nombre_funcionalidad_max_size_ko','Tamaño muy largo. Debe estar entre 5 y 48 caracteres'),
    Array('funcionalidad','nombre_funcionalidad','input',15,'es correcto','valid','ADD',true,'Nombre funcionalidad es correcto'),
    Array('funcionalidad','nombre_funcionalidad','input',16,'cumple formato alfabetico con ñ','format','EDIT','nombre_funcionalidad_format_ko','Formato nombre incorrecto. Debe ser alfabetico pudiendo incluir ñ'),
    Array('funcionalidad','nombre_funcionalidad','input',17,'cumple tamaño minimo','min_size','EDIT','nombre_funcionalidad_min_size_ko','Tamaño muy corto. Debe estar entre 5 y 48 caracteres'),
    Array('funcionalidad','nombre_funcionalidad','input',18,'cumple tamaño maximo','max_size','EDIT','nombre_funcionalidad_max_size_ko','Tamaño muy largo. Debe estar entre 5 y 48 caracteres'),
    Array('funcionalidad','nombre_funcionalidad','input',19,'es correcto','valid','EDIT',true,'Nombre funcionalidad es correcto'),
    Array('funcionalidad','nombre_funcionalidad','input',20,'cumple formato alfabetico con ñ','format','SEARCH','nombre_funcionalidad_format_ko','Formato nombre incorrecto. Debe ser alfabetico pudiendo incluir ñ'),
    Array('funcionalidad','nombre_funcionalidad','input',21,'cumple tamaño maximo','max_size','SEARCH','nombre_funcionalidad_max_size_ko','Criterio de búsqueda muy largo. Debe tener como máximo 48 caracteres'),
    Array('funcionalidad','nombre_funcionalidad','input',22,'es correcto','valid','SEARCH',true,'Nombre funcionalidad es correcto'),

    //descrip_funcionalidad
    Array('funcionalidad','descrip_funcionalidad','textarea',23,'cumple formato','format','ADD','descrip_funcionalidad_format_ko','Formato incorrecto. Debe ser alfabetico pudiendo incluir ñ, espacio y signos de puntuacion'),
    Array('funcionalidad','descrip_funcionalidad','textarea',24,'cumple tamaño minimo','min_size','ADD','descrip_funcionalidad_min_size_ko','Tamaño muy corto. Debe estar entre 5 y 200 caracteres'),
    Array('funcionalidad','descrip_funcionalidad','textarea',25,'cumple tamaño maximo','max_size','ADD','descrip_funcionalidad_max_size_ko','Tamaño muy largo. Debe estar entre 5 y 200 caracteres'),
    Array('funcionalidad','descrip_funcionalidad','textarea',26,'es correcto','valid','ADD',true,'Descripcion funcionalidad correcta'),
    Array('funcionalidad','descrip_funcionalidad','textarea',27,'cumple formato','format','EDIT','descrip_funcionalidad_format_ko','Formato incorrecto. Debe ser alfabetico pudiendo incluir ñ, espacio y signos de puntuacion'),
    Array('funcionalidad','descrip_funcionalidad','textarea',28,'cumple tamaño minimo','min_size','EDIT','descrip_funcionalidad_min_size_ko','Tamaño muy corto. Debe estar entre 5 y 200 caracteres'),
    Array('funcionalidad','descrip_funcionalidad','textarea',29,'cumple tamaño maximo','max_size','EDIT','descrip_funcionalidad_max_size_ko','Tamaño muy largo. Debe estar entre 5 y 200 caracteres'),
    Array('funcionalidad','descrip_funcionalidad','textarea',30,'es correcto','valid','EDIT',true,'Descripcion funcionalidad correcta'),
    Array('funcionalidad','descrip_funcionalidad','textarea',31,'cumple formato','format','SEARCH','descrip_funcionalidad_format_ko','Formato incorrecto. Debe ser alfabetico pudiendo incluir ñ, espacio y signos de puntuacion'),
    Array('funcionalidad','descrip_funcionalidad','textarea',32,'cumple tamaño maximo','max_size','SEARCH','descrip_funcionalidad_max_size_ko','Criterio de búsqueda muy largo. Debe tener como máximo 200 caracteres'),
    Array('funcionalidad','descrip_funcionalidad','textarea',33,'es correcto','valid','SEARCH',true,'Descripcion funcionalidad correcta')

);

let funcionalidad_pruebas = Array(

    //id_funcionalidad
    Array('funcionalidad','id_funcionalidad',1,1,'ADD',{id_funcionalidad:'aa'},'id_funcionalidad_format_ko'),
    Array('funcionalidad','id_funcionalidad',2,2,'ADD',{id_funcionalidad:''},'id_funcionalidad_min_size_ko'),
    Array('funcionalidad','id_funcionalidad',3,3,'ADD',{id_funcionalidad:'1111111111111'},'id_funcionalidad_max_size_ko'),
    Array('funcionalidad','id_funcionalidad',4,4,'ADD',{id_funcionalidad:'12345'},true),
    Array('funcionalidad','id_funcionalidad',5,5,'EDIT',{id_funcionalidad:'aa'},'id_funcionalidad_format_ko'),
    Array('funcionalidad','id_funcionalidad',6,6,'EDIT',{id_funcionalidad:''},'id_funcionalidad_min_size_ko'),
    Array('funcionalidad','id_funcionalidad',7,7,'EDIT',{id_funcionalidad:'1111111111111'},'id_funcionalidad_max_size_ko'),
    Array('funcionalidad','id_funcionalidad',8,8,'EDIT',{id_funcionalidad:'12345'},true),
    Array('funcionalidad','id_funcionalidad',9,9,'SEARCH',{id_funcionalidad:'aa'},'id_funcionalidad_format_ko'),
    Array('funcionalidad','id_funcionalidad',10,10,'SEARCH',{id_funcionalidad:'111111111111111'},'id_funcionalidad_max_size_ko'),
    Array('funcionalidad','id_funcionalidad',11,11,'SEARCH',{id_funcionalidad:'12345'},true),
    Array('funcionalidad','id_funcionalidad',11,12,'SEARCH',{id_funcionalidad:''},true),

    //nombre_funcionalidad
    Array('funcionalidad','nombre_funcionalidad',12,13,'ADD',{nombre_funcionalidad:'23452'},'nombre_funcionalidad_format_ko'),
    Array('funcionalidad','nombre_funcionalidad',13,14,'ADD',{nombre_funcionalidad:'aaa'},'nombre_funcionalidad_min_size_ko'),
    Array('funcionalidad','nombre_funcionalidad',14,15,'ADD',{nombre_funcionalidad:'a'.repeat(50)},'nombre_funcionalidad_max_size_ko'),
    Array('funcionalidad','nombre_funcionalidad',15,16,'ADD',{nombre_funcionalidad:'buenos'},true),
    Array('funcionalidad','nombre_funcionalidad',16,17,'EDIT',{nombre_funcionalidad:'12345'},'nombre_funcionalidad_format_ko'),
    Array('funcionalidad','nombre_funcionalidad',17,18,'EDIT',{nombre_funcionalidad:'aa'},'nombre_funcionalidad_min_size_ko'),
    Array('funcionalidad','nombre_funcionalidad',18,19,'EDIT',{nombre_funcionalidad:'a'.repeat(53)},'nombre_funcionalidad_max_size_ko'),
    Array('funcionalidad','nombre_funcionalidad',19,20,'EDIT',{nombre_funcionalidad:'sirven'},true),
    Array('funcionalidad','nombre_funcionalidad',20,21,'SEARCH',{nombre_funcionalidad:'1234567'},'nombre_funcionalidad_format_ko'),
    Array('funcionalidad','nombre_funcionalidad',21,22,'SEARCH',{nombre_funcionalidad:'a'.repeat(52)},'nombre_funcionalidad_max_size_ko'),
    Array('funcionalidad','nombre_funcionalidad',22,23,'SEARCH',{nombre_funcionalidad:'sirven'},true),
    Array('funcionalidad','nombre_funcionalidad',22,24,'SEARCH',{nombre_funcionalidad:''},true),


    //descrip_funcionalidad
    Array('funcionalidad','descrip_funcionalidad',23,25,'ADD',{descrip_funcionalidad:'12345'},'descrip_funcionalidad_format_ko'),
    Array('funcionalidad','descrip_funcionalidad',24,26,'ADD',{descrip_funcionalidad:'as'},'descrip_funcionalidad_min_size_ko'),
    Array('funcionalidad','descrip_funcionalidad',25,27,'ADD',{descrip_funcionalidad:'a'.repeat(202)},'descrip_funcionalidad_max_size_ko'),
    Array('funcionalidad','descrip_funcionalidad',26,28,'ADD',{descrip_funcionalidad:'correcta'},true),
    Array('funcionalidad','descrip_funcionalidad',27,29,'EDIT',{descrip_funcionalidad:'123445'},'descrip_funcionalidad_format_ko'),
    Array('funcionalidad','descrip_funcionalidad',28,30,'EDIT',{descrip_funcionalidad:'ad'},'descrip_funcionalidad_min_size_ko'),
    Array('funcionalidad','descrip_funcionalidad',29,31,'EDIT',{descrip_funcionalidad:'d'.repeat(201)},'descrip_funcionalidad_max_size_ko'),
    Array('funcionalidad','descrip_funcionalidad',30,32,'EDIT',{descrip_funcionalidad:'correcta'},true),
    Array('funcionalidad','descrip_funcionalidad',31,33,'SEARCH',{descrip_funcionalidad:'123445'},'descrip_funcionalidad_format_ko'),
    Array('funcionalidad','descrip_funcionalidad',32,34,'SEARCH',{descrip_funcionalidad:'d'.repeat(221)},'descrip_funcionalidad_max_size_ko'),
    Array('funcionalidad','descrip_funcionalidad',33,35,'SEARCH',{descrip_funcionalidad:'correcta'},true),
    Array('funcionalidad','descrip_funcionalidad',33,36,'SEARCH',{descrip_funcionalidad:''},true)
);