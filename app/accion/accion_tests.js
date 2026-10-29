let accion_def_tests = Array(

    //id_accion
    Array('accion','id_accion','input',1,'cumple formato','format','ADD','id_accion_format_ko','Formato id incorrecto. Debe ser numerico'),
    Array('accion','id_accion','input',2,'cumple tamaño minimo','min_size','ADD','id_accion_min_size_ko','Tamaño muy corto. Debe estar entre 1 y 11 digitos'),
    Array('accion','id_accion','input',3,'cumple tamaño maximo','max_size','ADD','id_accion_max_size_ko','Tamaño muy largo. Debe estar entre 1 y 11 digitos'),
    Array('accion','id_accion','input',4,'es correcto','valid','ADD',true,'Id accion correcto'),
    Array('accion','id_accion','input',5,'cumple formato','format','EDIT','id_accion_format_ko','Formato id incorrecto. Debe ser numerico'),
    Array('accion','id_accion','input',6,'cumple tamaño minimo','min_size','EDIT','id_accion_min_size_ko','Tamaño muy corto. Debe estar entre 1 y 11 digitos'),
    Array('accion','id_accion','input',7,'cumple tamaño maximo','max_size','EDIT','id_accion_max_size_ko','Tamaño muy largo. Debe estar entre 1 y 11 digitos'),
    Array('accion','id_accion','input',8,'es correcto','valid','EDIT',true,'Id accion correcto'),
    Array('accion','id_accion','input',9,'cumple formato','format','SEARCH','id_accion_format_ko','Formato id incorrecto. Debe ser numerico'),
    Array('accion','id_accion','input',10,'cumple tamaño maximo','max_size','SEARCH','id_accion_max_size_ko','Criterio de búsqueda muy largo. Debe tener como máximo 11 dígitos'),
    Array('accion','id_accion','input',11,'es correcto','valid','SEARCH',true,'Id accion correcto'),

    //nombre_accion
    Array('accion','nombre_accion','input',12,'cumple formato','format','ADD','nombre_accion_format_ko','Formato nombre accion incorrecto. Debe ser alfabetico pudiendo incluir ñ'),
    Array('accion','nombre_accion','input',13,'cumple tamaño minimo','min_size','ADD','nombre_accion_min_size_ko','Tamaño muy corto. Debe ser entre 5 y 48 caracteres'),
    Array('accion','nombre_accion','input',14,'cumple tamaño maximo','max_size','ADD','nombre_accion_max_size_ko','Tamaño muy largo. Debe ser entre 5 y 48 caracteres'),
    Array('accion','nombre_accion','input',15,'es correcto','valid','ADD',true,'Nombre accion correcto'),
    Array('accion','nombre_accion','input',16,'cumple formato','format','EDIT','nombre_accion_format_ko','Formato nombre accion incorrecto. Debe ser alfabetico pudiendo incluir ñ'),
    Array('accion','nombre_accion','input',17,'cumple tamaño minimo','min_size','EDIT','nombre_accion_min_size_ko','Tamaño muy corto. Debe ser entre 5 y 48 caracteres'),
    Array('accion','nombre_accion','input',18,'cumple tamaño maximo','max_size','EDIT','nombre_accion_max_size_ko','Tamaño muy largo. Debe ser entre 5 y 48 caracteres'),
    Array('accion','nombre_accion','input',19,'es correcto','valid','EDIT',true,'Nombre accion correcto'),
    Array('accion','nombre_accion','input',20,'cumple formato','format','SEARCH','nombre_accion_format_ko','Formato nombre accion incorrecto. Debe ser alfabetico pudiendo incluir ñ'),
    Array('accion','nombre_accion','input',21,'cumple tamaño maximo','max_size','SEARCH','nombre_accion_max_size_ko','Criterio de búsqueda muy largo. Debe tener como máximo 48 caracteres'),
    Array('accion','nombre_accion','input',22,'es correcto','valid','SEARCH',true,'Nombre accion correcto'),

    //descrip_accion
    Array('accion','descrip_accion','textarea',23,'cumple formato','format','ADD','descrip_accion_format_ko','Formato incorrecto. Debe ser alfabetico pudiendo incluir ñ, espacio y signos de puntuacion'),
    Array('accion','descrip_accion','textarea',24,'cumple tamaño minimo','min_size','ADD','descrip_accion_min_size_ko','Tamaño muy corto. Debe estar entre 5 y 200 caracteres'),
    Array('accion','descrip_accion','textarea',25,'cumple tamaño maximo','max_size','ADD','descrip_accion_max_size_ko','Tamaño muy largo. Debe estar entre 5 y 200 caracteres'),
    Array('accion','descrip_accion','textarea',26,'es correcto','valid','ADD',true,'Descripcion accion correcta'),
    Array('accion','descrip_accion','textarea',27,'cumple formato','format','EDIT','descrip_accion_format_ko','Formato incorrecto. Debe ser alfabetico pudiendo incluir ñ, espacio y signos de puntuacion'),
    Array('accion','descrip_accion','textarea',28,'cumple tamaño minimo','min_size','EDIT','descrip_accion_min_size_ko','Tamaño muy corto. Debe estar entre 5 y 200 caracteres'),
    Array('accion','descrip_accion','textarea',29,'cumple tamaño maximo','max_size','EDIT','descrip_accion_max_size_ko','Tamaño muy largo. Debe estar entre 5 y 200 caracteres'),
    Array('accion','descrip_accion','textarea',30,'es correcto','valid','EDIT',true,'Descripcion accion correcta'),
    Array('accion','descrip_accion','textarea',31,'cumple formato','format','SEARCH','descrip_accion_format_ko','Formato incorrecto. Debe ser alfabetico pudiendo incluir ñ, espacio y signos de puntuacion'),
    Array('accion','descrip_accion','textarea',32,'cumple tamaño maximo','max_size','SEARCH','descrip_accion_max_size_ko','Criterio de búsqueda muy largo. Debe tener como máximo 200 caracteres'),
    Array('accion','descrip_accion','textarea',33,'es correcto','valid','SEARCH',true,'Descripcion accion correcta')
);

let accion_pruebas = Array(

    //id_accion
    Array('accion','id_accion',1,1,'ADD',{id_accion:'aa'},'id_accion_format_ko'),
    Array('accion','id_accion',2,2,'ADD',{id_accion:''},'id_accion_min_size_ko'),
    Array('accion','id_accion',3,3,'ADD',{id_accion:'1111111111111'},'id_accion_max_size_ko'),
    Array('accion','id_accion',4,4,'ADD',{id_accion:'12345'},true),
    Array('accion','id_accion',5,5,'EDIT',{id_accion:'aa'},'id_accion_format_ko'),
    Array('accion','id_accion',6,6,'EDIT',{id_accion:''},'id_accion_min_size_ko'),
    Array('accion','id_accion',7,7,'EDIT',{id_accion:'1111111111111'},'id_accion_max_size_ko'),
    Array('accion','id_accion',8,8,'EDIT',{id_accion:'12345'},true),
    Array('accion','id_accion',9,9,'SEARCH',{id_accion:'aa'},'id_accion_format_ko'),
    Array('accion','id_accion',10,10,'SEARCH',{id_accion:'111111111111111'},'id_accion_max_size_ko'),
    Array('accion','id_accion',11,11,'SEARCH',{id_accion:'12345'},true),
    Array('accion','id_accion',11,12,'SEARCH',{id_accion:''},true),

    //nombre_accion
    Array('accion','nombre_accion',12,13,'ADD',{nombre_accion:'23452'},'nombre_accion_format_ko'),
    Array('accion','nombre_accion',13,14,'ADD',{nombre_accion:'aaa'},'nombre_accion_min_size_ko'),
    Array('accion','nombre_accion',14,15,'ADD',{nombre_accion:'a'.repeat(50)},'nombre_accion_max_size_ko'),
    Array('accion','nombre_accion',15,16,'ADD',{nombre_accion:'buenos'},true),
    Array('accion','nombre_accion',16,17,'EDIT',{nombre_accion:'12345'},'nombre_accion_format_ko'),
    Array('accion','nombre_accion',17,18,'EDIT',{nombre_accion:'aa'},'nombre_accion_min_size_ko'),
    Array('accion','nombre_accion',18,19,'EDIT',{nombre_accion:'a'.repeat(53)},'nombre_accion_max_size_ko'),
    Array('accion','nombre_accion',19,20,'EDIT',{nombre_accion:'sirven'},true),
    Array('accion','nombre_accion',20,21,'SEARCH',{nombre_accion:'1234567'},'nombre_accion_format_ko'),
    Array('accion','nombre_accion',21,22,'SEARCH',{nombre_accion:'a'.repeat(52)},'nombre_accion_max_size_ko'),
    Array('accion','nombre_accion',22,23,'SEARCH',{nombre_accion:'sirven'},true),
    Array('accion','nombre_accion',22,24,'SEARCH',{nombre_accion:''},true),

    //descrip_accion
    Array('accion','descrip_accion',23,25,'ADD',{descrip_accion:'12345'},'descrip_accion_format_ko'),
    Array('accion','descrip_accion',24,26,'ADD',{descrip_accion:'as'},'descrip_accion_min_size_ko'),
    Array('accion','descrip_accion',25,27,'ADD',{descrip_accion:'a'.repeat(202)},'descrip_accion_max_size_ko'),
    Array('accion','descrip_accion',26,28,'ADD',{descrip_accion:'correcta'},true),
    Array('accion','descrip_accion',27,29,'EDIT',{descrip_accion:'123445'},'descrip_accion_format_ko'),
    Array('accion','descrip_accion',28,30,'EDIT',{descrip_accion:'ad'},'descrip_accion_min_size_ko'),
    Array('accion','descrip_accion',29,31,'EDIT',{descrip_accion:'d'.repeat(201)},'descrip_accion_max_size_ko'),
    Array('accion','descrip_accion',30,32,'EDIT',{descrip_accion:'correcta'},true),
    Array('accion','descrip_accion',31,33,'SEARCH',{descrip_accion:'123445'},'descrip_accion_format_ko'),
    Array('accion','descrip_accion',32,34,'SEARCH',{descrip_accion:'d'.repeat(221)},'descrip_accion_max_size_ko'),
    Array('accion','descrip_accion',33,35,'SEARCH',{descrip_accion:'correcta'},true),
    Array('accion','descrip_accion',33,36,'SEARCH',{descrip_accion:''},true)

);