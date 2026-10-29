let persona_def_tests = Array(
    // ADD dni
    Array('persona', 'dni', 'input', 1, 'comprobar tamaño minimo', 'min_size', 'ADD', 'dni_min_size_ko', 'Tamaño muy corto. Debe tener 9 caracteres'),
    Array('persona', 'dni', 'input', 2, 'comprobar tamaño maximo', 'max_size', 'ADD', 'dni_max_size_ko', 'Tamaño muy grande. Debe tener 9 caracteres'),
    Array('persona', 'dni', 'input', 3, 'comprobar formato', 'format', 'ADD', 'dni_format_ko', 'Formato inválido. Debe tener 8 números y una letra mayúscula'),
    Array('persona', 'dni', 'input', 4, 'comprobar correspondencia entre número y letra', 'personalized', 'ADD', 'dni_personalized_ko', 'La letra del DNI no corresponde a sus ocho números'),
    Array('persona', 'dni', 'input', 5, 'es correcto', 'valid', 'ADD', true, 'DNI correcto'),
    // EDIT dni
    Array('persona', 'dni', 'input', 6, 'comprobar tamaño minimo', 'min_size', 'EDIT', 'dni_min_size_ko', 'Tamaño muy corto. Debe tener 9 caracteres'),
    Array('persona', 'dni', 'input', 7, 'comprobar tamaño maximo', 'max_size', 'EDIT', 'dni_max_size_ko', 'Tamaño muy grande. Debe tener 9 caracteres'),
    Array('persona', 'dni', 'input', 8, 'comprobar formato', 'format', 'EDIT', 'dni_format_ko', 'Formato inválido. Debe tener 8 números y una letra mayúscula'),
    Array('persona', 'dni', 'input', 9, 'comprobar correspondencia entre número y letra', 'personalized', 'EDIT', 'dni_personalized_ko', 'La letra del DNI no corresponde a sus ocho números'),
    Array('persona', 'dni', 'input', 10, 'es correcto', 'valid', 'EDIT', true, 'DNI correcto'),
    // SEARCH dni
    Array('persona', 'dni', 'input', 11, 'comprobar tamaño maximo del criterio de búsqueda', 'max_size', 'SEARCH', 'dni_max_size_ko', 'Criterio de búsqueda muy largo. Debe tener como máximo 9 caracteres'),
    Array('persona', 'dni', 'input', 12, 'comprobar formato del criterio de búsqueda', 'format', 'SEARCH', 'dni_format_ko', 'Formato de búsqueda inválido. Se permiten dígitos y, opcionalmente, una letra mayúscula al final'),
    Array('persona', 'dni', 'input', 13, 'criterio de búsqueda parcial o completo correcto', 'valid', 'SEARCH', true, 'Criterio de búsqueda correcto'),
    Array('persona', 'dni', 'input', 14, 'campo vacío: no filtrar por este campo', 'valid', 'SEARCH', true, 'Campo vacío permitido en la búsqueda'),
    // ADD nombre_persona
    Array('persona', 'nombre_persona', 'input', 15, 'comprobar tamaño minimo', 'min_size', 'ADD', 'nombre_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 2 y 45 caracteres'),
    Array('persona', 'nombre_persona', 'input', 16, 'comprobar tamaño maximo', 'max_size', 'ADD', 'nombre_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 2 y 45 caracteres'),
    Array('persona', 'nombre_persona', 'input', 17, 'comprobar formato', 'format', 'ADD', 'nombre_persona_format_ko', 'Formato inválido. Se permiten letras, ñ, acentos, puntos, guiones y espacios'),
    Array('persona', 'nombre_persona', 'input', 18, 'es correcto', 'valid', 'ADD', true, 'Nombre persona correcto'),
    // EDIT nombre_persona
    Array('persona', 'nombre_persona', 'input', 19, 'comprobar tamaño minimo', 'min_size', 'EDIT', 'nombre_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 2 y 45 caracteres'),
    Array('persona', 'nombre_persona', 'input', 20, 'comprobar tamaño maximo', 'max_size', 'EDIT', 'nombre_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 2 y 45 caracteres'),
    Array('persona', 'nombre_persona', 'input', 21, 'comprobar formato', 'format', 'EDIT', 'nombre_persona_format_ko', 'Formato inválido. Se permiten letras, ñ, acentos, puntos, guiones y espacios'),
    Array('persona', 'nombre_persona', 'input', 22, 'es correcto', 'valid', 'EDIT', true, 'Nombre persona correcto'),
    // SEARCH nombre_persona
    Array('persona', 'nombre_persona', 'input', 23, 'comprobar tamaño maximo del criterio de búsqueda', 'max_size', 'SEARCH', 'nombre_persona_max_size_ko', 'Criterio de búsqueda muy largo. Debe tener como máximo 45 caracteres'),
    Array('persona', 'nombre_persona', 'input', 24, 'comprobar formato del criterio de búsqueda', 'format', 'SEARCH', 'nombre_persona_format_ko', 'Formato de búsqueda inválido. Se permiten letras, ñ, acentos, puntos, guiones y espacios'),
    Array('persona', 'nombre_persona', 'input', 25, 'criterio de búsqueda parcial o completo correcto', 'valid', 'SEARCH', true, 'Criterio de búsqueda correcto'),
    Array('persona', 'nombre_persona', 'input', 26, 'campo vacío: no filtrar por este campo', 'valid', 'SEARCH', true, 'Campo vacío permitido en la búsqueda'),
    // ADD apellidos_persona
    Array('persona', 'apellidos_persona', 'input', 27, 'comprobar tamaño minimo', 'min_size', 'ADD', 'apellidos_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 3 y 100 caracteres'),
    Array('persona', 'apellidos_persona', 'input', 28, 'comprobar tamaño maximo', 'max_size', 'ADD', 'apellidos_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 3 y 100 caracteres'),
    Array('persona', 'apellidos_persona', 'input', 29, 'comprobar formato', 'format', 'ADD', 'apellidos_persona_format_ko', 'Formato inválido. Se permiten letras, ñ, acentos, puntos, guiones y espacios'),
    Array('persona', 'apellidos_persona', 'input', 30, 'es correcto', 'valid', 'ADD', true, 'Apellidos persona correctos'),
    // EDIT apellidos_persona
    Array('persona', 'apellidos_persona', 'input', 31, 'comprobar tamaño minimo', 'min_size', 'EDIT', 'apellidos_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 3 y 100 caracteres'),
    Array('persona', 'apellidos_persona', 'input', 32, 'comprobar tamaño maximo', 'max_size', 'EDIT', 'apellidos_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 3 y 100 caracteres'),
    Array('persona', 'apellidos_persona', 'input', 33, 'comprobar formato', 'format', 'EDIT', 'apellidos_persona_format_ko', 'Formato inválido. Se permiten letras, ñ, acentos, puntos, guiones y espacios'),
    Array('persona', 'apellidos_persona', 'input', 34, 'es correcto', 'valid', 'EDIT', true, 'Apellidos persona correctos'),
    // SEARCH apellidos_persona
    Array('persona', 'apellidos_persona', 'input', 35, 'comprobar tamaño maximo del criterio de búsqueda', 'max_size', 'SEARCH', 'apellidos_persona_max_size_ko', 'Criterio de búsqueda muy largo. Debe tener como máximo 100 caracteres'),
    Array('persona', 'apellidos_persona', 'input', 36, 'comprobar formato del criterio de búsqueda', 'format', 'SEARCH', 'apellidos_persona_format_ko', 'Formato de búsqueda inválido. Se permiten letras, ñ, acentos, puntos, guiones y espacios'),
    Array('persona', 'apellidos_persona', 'input', 37, 'criterio de búsqueda parcial o completo correcto', 'valid', 'SEARCH', true, 'Criterio de búsqueda correcto'),
    Array('persona', 'apellidos_persona', 'input', 38, 'campo vacío: no filtrar por este campo', 'valid', 'SEARCH', true, 'Campo vacío permitido en la búsqueda'),
    // ADD fechaNacimiento_persona
    Array('persona', 'fechaNacimiento_persona', 'input', 39, 'comprobar formato', 'format', 'ADD', 'fechaNacimiento_persona_format_ko', 'Formato de fecha inválido. El formato correcto es dd/mm/aaaa'),
    Array('persona', 'fechaNacimiento_persona', 'input', 40, 'comprobar que la fecha exista', 'personalized', 'ADD', 'fechaNacimiento_persona_personalized_inexistente_ko', 'Fecha inválida. El día, mes y año deben formar una fecha existente'),
    Array('persona', 'fechaNacimiento_persona', 'input', 41, 'comprobar que la fecha no sea posterior a hoy', 'personalized', 'ADD', 'fechaNacimiento_persona_personalized_futura_ko', 'La fecha de nacimiento no puede ser posterior al día de hoy'),
    Array('persona', 'fechaNacimiento_persona', 'input', 42, 'es correcto', 'valid', 'ADD', true, 'Fecha de nacimiento correcta'),
    // EDIT fechaNacimiento_persona
    Array('persona', 'fechaNacimiento_persona', 'input', 43, 'comprobar formato', 'format', 'EDIT', 'fechaNacimiento_persona_format_ko', 'Formato de fecha inválido. El formato correcto es dd/mm/aaaa'),
    Array('persona', 'fechaNacimiento_persona', 'input', 44, 'comprobar que la fecha exista', 'personalized', 'EDIT', 'fechaNacimiento_persona_personalized_inexistente_ko', 'Fecha inválida. El día, mes y año deben formar una fecha existente'),
    Array('persona', 'fechaNacimiento_persona', 'input', 45, 'comprobar que la fecha no sea posterior a hoy', 'personalized', 'EDIT', 'fechaNacimiento_persona_personalized_futura_ko', 'La fecha de nacimiento no puede ser posterior al día de hoy'),
    Array('persona', 'fechaNacimiento_persona', 'input', 46, 'es correcto', 'valid', 'EDIT', true, 'Fecha de nacimiento correcta'),
    // SEARCH fechaNacimiento_persona
    Array('persona', 'fechaNacimiento_persona', 'input', 47, 'comprobar tamaño maximo del criterio de búsqueda', 'max_size', 'SEARCH', 'fechaNacimiento_persona_max_size_ko', 'Criterio de búsqueda muy largo. Debe tener como máximo 10 caracteres'),
    Array('persona', 'fechaNacimiento_persona', 'input', 48, 'comprobar formato del criterio de búsqueda', 'format', 'SEARCH', 'fechaNacimiento_persona_format_ko', 'Formato de búsqueda inválido. Se permiten dígitos y / para buscar fragmentos de una fecha'),
    Array('persona', 'fechaNacimiento_persona', 'input', 49, 'comprobar fecha existente cuando el criterio es completo', 'personalized', 'SEARCH', 'fechaNacimiento_persona_personalized_inexistente_ko', 'Fecha inválida. El día, mes y año deben formar una fecha existente'),
    Array('persona', 'fechaNacimiento_persona', 'input', 50, 'criterio de búsqueda parcial o completo correcto', 'valid', 'SEARCH', true, 'Criterio de búsqueda correcto'),
    Array('persona', 'fechaNacimiento_persona', 'input', 51, 'campo vacío: no filtrar por este campo', 'valid', 'SEARCH', true, 'Campo vacío permitido en la búsqueda'),
    // ADD direccion_persona
    Array('persona', 'direccion_persona', 'textarea', 52, 'comprobar tamaño minimo', 'min_size', 'ADD', 'direccion_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 10 y 200 caracteres'),
    Array('persona', 'direccion_persona', 'textarea', 53, 'comprobar tamaño maximo', 'max_size', 'ADD', 'direccion_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 10 y 200 caracteres'),
    Array('persona', 'direccion_persona', 'textarea', 54, 'comprobar formato', 'format', 'ADD', 'direccion_persona_format_ko', 'Formato inválido. Se permiten caracteres alfanuméricos, ñ, acentos, puntos, guiones, punto y coma, espacios y /'),
    Array('persona', 'direccion_persona', 'textarea', 55, 'es correcto', 'valid', 'ADD', true, 'Dirección persona correcta'),
    // EDIT direccion_persona
    Array('persona', 'direccion_persona', 'textarea', 56, 'comprobar tamaño minimo', 'min_size', 'EDIT', 'direccion_persona_min_size_ko', 'Tamaño muy corto. Debe estar entre 10 y 200 caracteres'),
    Array('persona', 'direccion_persona', 'textarea', 57, 'comprobar tamaño maximo', 'max_size', 'EDIT', 'direccion_persona_max_size_ko', 'Tamaño muy grande. Debe estar entre 10 y 200 caracteres'),
    Array('persona', 'direccion_persona', 'textarea', 58, 'comprobar formato', 'format', 'EDIT', 'direccion_persona_format_ko', 'Formato inválido. Se permiten caracteres alfanuméricos, ñ, acentos, puntos, guiones, punto y coma, espacios y /'),
    Array('persona', 'direccion_persona', 'textarea', 59, 'es correcto', 'valid', 'EDIT', true, 'Dirección persona correcta'),
    // SEARCH direccion_persona
    Array('persona', 'direccion_persona', 'textarea', 60, 'comprobar tamaño maximo del criterio de búsqueda', 'max_size', 'SEARCH', 'direccion_persona_max_size_ko', 'Criterio de búsqueda muy largo. Debe tener como máximo 200 caracteres'),
    Array('persona', 'direccion_persona', 'textarea', 61, 'comprobar formato del criterio de búsqueda', 'format', 'SEARCH', 'direccion_persona_format_ko', 'Formato de búsqueda inválido. Se permiten caracteres alfanuméricos, ñ, acentos, puntos, guiones, punto y coma, espacios y /'),
    Array('persona', 'direccion_persona', 'textarea', 62, 'criterio de búsqueda parcial o completo correcto', 'valid', 'SEARCH', true, 'Criterio de búsqueda correcto'),
    Array('persona', 'direccion_persona', 'textarea', 63, 'campo vacío: no filtrar por este campo', 'valid', 'SEARCH', true, 'Campo vacío permitido en la búsqueda'),
    // ADD telefono_persona
    Array('persona', 'telefono_persona', 'input', 64, 'comprobar tamaño minimo', 'min_size', 'ADD', 'telefono_persona_min_size_ko', 'Tamaño muy corto. Debe tener 9 dígitos'),
    Array('persona', 'telefono_persona', 'input', 65, 'comprobar tamaño maximo', 'max_size', 'ADD', 'telefono_persona_max_size_ko', 'Tamaño muy grande. Debe tener 9 dígitos'),
    Array('persona', 'telefono_persona', 'input', 66, 'comprobar formato', 'format', 'ADD', 'telefono_persona_format_ko', 'Formato inválido. Debe contener 9 dígitos, sin prefijo, espacios ni separadores'),
    Array('persona', 'telefono_persona', 'input', 67, 'comprobar numeración de teléfono español', 'personalized', 'ADD', 'telefono_persona_personalized_ko', 'Teléfono español inválido. Debe comenzar por 6, 7, 8 o 9'),
    Array('persona', 'telefono_persona', 'input', 68, 'es correcto', 'valid', 'ADD', true, 'Teléfono persona correcto'),
    // EDIT telefono_persona
    Array('persona', 'telefono_persona', 'input', 69, 'comprobar tamaño minimo', 'min_size', 'EDIT', 'telefono_persona_min_size_ko', 'Tamaño muy corto. Debe tener 9 dígitos'),
    Array('persona', 'telefono_persona', 'input', 70, 'comprobar tamaño maximo', 'max_size', 'EDIT', 'telefono_persona_max_size_ko', 'Tamaño muy grande. Debe tener 9 dígitos'),
    Array('persona', 'telefono_persona', 'input', 71, 'comprobar formato', 'format', 'EDIT', 'telefono_persona_format_ko', 'Formato inválido. Debe contener 9 dígitos, sin prefijo, espacios ni separadores'),
    Array('persona', 'telefono_persona', 'input', 72, 'comprobar numeración de teléfono español', 'personalized', 'EDIT', 'telefono_persona_personalized_ko', 'Teléfono español inválido. Debe comenzar por 6, 7, 8 o 9'),
    Array('persona', 'telefono_persona', 'input', 73, 'es correcto', 'valid', 'EDIT', true, 'Teléfono persona correcto'),
    // SEARCH telefono_persona
    Array('persona', 'telefono_persona', 'input', 74, 'comprobar tamaño maximo del criterio de búsqueda', 'max_size', 'SEARCH', 'telefono_persona_max_size_ko', 'Criterio de búsqueda muy largo. Debe tener como máximo 9 caracteres'),
    Array('persona', 'telefono_persona', 'input', 75, 'comprobar formato del criterio de búsqueda', 'format', 'SEARCH', 'telefono_persona_format_ko', 'Formato de búsqueda inválido. Solo se permiten dígitos. No se exige un número completo'),
    Array('persona', 'telefono_persona', 'input', 76, 'criterio de búsqueda parcial o completo correcto', 'valid', 'SEARCH', true, 'Criterio de búsqueda correcto'),
    Array('persona', 'telefono_persona', 'input', 77, 'campo vacío: no filtrar por este campo', 'valid', 'SEARCH', true, 'Campo vacío permitido en la búsqueda'),
    // ADD email_persona
    Array('persona', 'email_persona', 'input', 78, 'comprobar tamaño minimo', 'min_size', 'ADD', 'email_persona_min_size_ko', 'El email no puede estar vacío. Debe tener al menos 1 carácter'),
    Array('persona', 'email_persona', 'input', 79, 'comprobar tamaño maximo', 'max_size', 'ADD', 'email_persona_max_size_ko', 'Tamaño muy grande. El email debe tener como máximo 45 caracteres'),
    Array('persona', 'email_persona', 'input', 80, 'comprobar formato', 'format', 'ADD', 'email_persona_format_ko', 'Formato inválido. Debe ser un email válido, por ejemplo nombre@dominio.com'),
    Array('persona', 'email_persona', 'input', 81, 'es correcto', 'valid', 'ADD', true, 'Email persona correcto'),
    // EDIT email_persona
    Array('persona', 'email_persona', 'input', 82, 'comprobar tamaño minimo', 'min_size', 'EDIT', 'email_persona_min_size_ko', 'El email no puede estar vacío. Debe tener al menos 1 carácter'),
    Array('persona', 'email_persona', 'input', 83, 'comprobar tamaño maximo', 'max_size', 'EDIT', 'email_persona_max_size_ko', 'Tamaño muy grande. El email debe tener como máximo 45 caracteres'),
    Array('persona', 'email_persona', 'input', 84, 'comprobar formato', 'format', 'EDIT', 'email_persona_format_ko', 'Formato inválido. Debe ser un email válido, por ejemplo nombre@dominio.com'),
    Array('persona', 'email_persona', 'input', 85, 'es correcto', 'valid', 'EDIT', true, 'Email persona correcto'),
    // SEARCH email_persona
    Array('persona', 'email_persona', 'input', 86, 'comprobar tamaño maximo del criterio de búsqueda', 'max_size', 'SEARCH', 'email_persona_max_size_ko', 'Criterio de búsqueda muy largo. Debe tener como máximo 45 caracteres'),
    Array('persona', 'email_persona', 'input', 87, 'comprobar formato del criterio de búsqueda', 'format', 'SEARCH', 'email_persona_format_ko', 'Formato de búsqueda inválido. Introduzca un fragmento de email sin espacios ni caracteres de control. No se exige un email completo'),
    Array('persona', 'email_persona', 'input', 88, 'criterio de búsqueda parcial o completo correcto', 'valid', 'SEARCH', true, 'Criterio de búsqueda correcto'),
    Array('persona', 'email_persona', 'input', 89, 'campo vacío: no filtrar por este campo', 'valid', 'SEARCH', true, 'Campo vacío permitido en la búsqueda'),
    // ADD foto_persona, no se contempla en el formulario final
    Array('persona', 'foto_persona', 'input', 90, 'comprobar tamaño minimo del nombre', 'min_size', 'ADD', 'foto_persona_min_size_ko', 'Nombre muy corto. Debe estar entre 5 y 15 caracteres, incluida la extensión'),
    Array('persona', 'foto_persona', 'input', 91, 'comprobar tamaño maximo del nombre', 'max_size', 'ADD', 'foto_persona_max_size_ko', 'Nombre muy largo. Debe estar entre 5 y 15 caracteres, incluida la extensión'),
    Array('persona', 'foto_persona', 'input', 92, 'comprobar formato del nombre', 'format', 'ADD', 'foto_persona_format_ko', 'Formato inválido. Debe tener un nombre con letras y puntos, al menos una letra antes de la extensión y terminar en jpg o jpeg'),
    Array('persona', 'foto_persona', 'input', 93, 'es correcto', 'valid', 'ADD', true, 'Nombre de foto correcto'),
    // EDIT foto_persona
    Array('persona', 'foto_persona', 'input', 94, 'comprobar tamaño minimo del nombre', 'min_size', 'EDIT', 'foto_persona_min_size_ko', 'Nombre muy corto. Debe estar entre 5 y 15 caracteres, incluida la extensión'),
    Array('persona', 'foto_persona', 'input', 95, 'comprobar tamaño maximo del nombre', 'max_size', 'EDIT', 'foto_persona_max_size_ko', 'Nombre muy largo. Debe estar entre 5 y 15 caracteres, incluida la extensión'),
    Array('persona', 'foto_persona', 'input', 96, 'comprobar formato del nombre', 'format', 'EDIT', 'foto_persona_format_ko', 'Formato inválido. Debe tener un nombre con letras y puntos, al menos una letra antes de la extensión y terminar en jpg o jpeg'),
    Array('persona', 'foto_persona', 'input', 97, 'es correcto', 'valid', 'EDIT', true, 'Nombre de foto correcto'),
    // SEARCH foto_persona
    Array('persona', 'foto_persona', 'input', 98, 'comprobar tamaño maximo del criterio de búsqueda', 'max_size', 'SEARCH', 'foto_persona_max_size_ko', 'Criterio de búsqueda muy largo. Debe tener como máximo 15 caracteres'),
    Array('persona', 'foto_persona', 'input', 99, 'comprobar formato del criterio de búsqueda', 'format', 'SEARCH', 'foto_persona_format_ko', 'Formato de búsqueda inválido. Se permiten letras y puntos. No se exige la extensión completa'),
    Array('persona', 'foto_persona', 'input', 100, 'criterio de búsqueda parcial o completo correcto', 'valid', 'SEARCH', true, 'Criterio de búsqueda correcto'),
    Array('persona', 'foto_persona', 'input', 101, 'campo vacío: no filtrar por este campo', 'valid', 'SEARCH', true, 'Campo vacío permitido en la búsqueda'),
    // ADD nuevo_foto_persona
    Array('persona', 'nuevo_foto_persona', 'file', 102, 'comprobar existencia de fichero', 'exist_file', 'ADD', 'nuevo_foto_persona_exist_file_ko', 'No existe foto. Debe subir un fichero jpg o jpeg'),
    Array('persona', 'nuevo_foto_persona', 'file', 103, 'comprobar tamaño minimo del nombre', 'min_size', 'ADD', 'nuevo_foto_persona_min_size_ko', 'Nombre muy corto. Debe estar entre 5 y 15 caracteres, incluida la extensión'),
    Array('persona', 'nuevo_foto_persona', 'file', 104, 'comprobar tamaño maximo del nombre', 'max_size', 'ADD', 'nuevo_foto_persona_max_size_ko', 'Nombre muy largo. Debe estar entre 5 y 15 caracteres, incluida la extensión'),
    Array('persona', 'nuevo_foto_persona', 'file', 105, 'comprobar formato del nombre', 'format_name_file', 'ADD', 'nuevo_foto_persona_format_name_file_ko', 'Formato inválido. El nombre solo permite letras y puntos y debe incluir al menos una letra antes de la extensión'),
    Array('persona', 'nuevo_foto_persona', 'file', 106, 'comprobar tipo de fichero', 'type_file', 'ADD', 'nuevo_foto_persona_type_file_ko', 'Tipo de fichero inválido. Debe tener extensión jpg o jpeg'),
    Array('persona', 'nuevo_foto_persona', 'file', 107, 'comprobar tamaño del fichero', 'max_size_file', 'ADD', 'nuevo_foto_persona_max_size_file_ko', 'Fichero demasiado grande. El tamaño máximo es 2 MB'),
    Array('persona', 'nuevo_foto_persona', 'file', 108, 'es correcto', 'valid', 'ADD', true, 'Foto persona correcta'),
    // EDIT nuevo_foto_persona
    Array('persona', 'nuevo_foto_persona', 'file', 109, 'comprobar existencia de fichero; sin fichero conservar la foto actual', 'exist_file', 'EDIT', true, 'Si no se selecciona un fichero se conserva la foto actual'),
    Array('persona', 'nuevo_foto_persona', 'file', 110, 'comprobar tamaño minimo del nombre', 'min_size', 'EDIT', 'nuevo_foto_persona_min_size_ko', 'Nombre muy corto. Debe estar entre 5 y 15 caracteres, incluida la extensión'),
    Array('persona', 'nuevo_foto_persona', 'file', 111, 'comprobar tamaño maximo del nombre', 'max_size', 'EDIT', 'nuevo_foto_persona_max_size_ko', 'Nombre muy largo. Debe estar entre 5 y 15 caracteres, incluida la extensión'),
    Array('persona', 'nuevo_foto_persona', 'file', 112, 'comprobar formato del nombre', 'format_name_file', 'EDIT', 'nuevo_foto_persona_format_name_file_ko', 'Formato inválido. El nombre solo permite letras y puntos y debe incluir al menos una letra antes de la extensión'),
    Array('persona', 'nuevo_foto_persona', 'file', 113, 'comprobar tipo de fichero', 'type_file', 'EDIT', 'nuevo_foto_persona_type_file_ko', 'Tipo de fichero inválido. Debe tener extensión jpg o jpeg'),
    Array('persona', 'nuevo_foto_persona', 'file', 114, 'comprobar tamaño del fichero', 'max_size_file', 'EDIT', 'nuevo_foto_persona_max_size_file_ko', 'Fichero demasiado grande. El tamaño máximo es 2 MB'),
    Array('persona', 'nuevo_foto_persona', 'file', 115, 'es correcto', 'valid', 'EDIT', true, 'Foto persona correcta'),
    // SEARCH nuevo_foto_persona, no se contempla en el formulario final
    Array('persona', 'nuevo_foto_persona', 'file', 116, 'comprobar tamaño minimo del nombre', 'min_size', 'SEARCH', 'nuevo_foto_persona_min_size_ko', 'Nombre muy corto. Debe estar entre 5 y 15 caracteres, incluida la extensión'),
    Array('persona', 'nuevo_foto_persona', 'file', 117, 'comprobar tamaño maximo del nombre', 'max_size', 'SEARCH', 'nuevo_foto_persona_max_size_ko', 'Nombre muy largo. Debe estar entre 5 y 15 caracteres, incluida la extensión'),
    Array('persona', 'nuevo_foto_persona', 'file', 118, 'comprobar formato del nombre', 'format_name_file', 'SEARCH', 'nuevo_foto_persona_format_name_file_ko', 'Formato inválido. El nombre solo permite letras y puntos y debe incluir al menos una letra antes de la extensión'),
    Array('persona', 'nuevo_foto_persona', 'file', 119, 'comprobar tipo de fichero', 'type_file', 'SEARCH', 'nuevo_foto_persona_type_file_ko', 'Tipo de fichero inválido. Debe tener extensión jpg o jpeg y tipo image/jpeg'),
    Array('persona', 'nuevo_foto_persona', 'file', 120, 'comprobar tamaño del fichero', 'max_size_file', 'SEARCH', 'nuevo_foto_persona_max_size_file_ko', 'Fichero demasiado grande. El tamaño máximo es 2 MB'),
    Array('persona', 'nuevo_foto_persona', 'file', 121, 'es correcto', 'valid', 'SEARCH', true, 'Fichero correcto para la prueba de búsqueda'),
    Array('persona', 'nuevo_foto_persona', 'file', 122, 'sin fichero: no filtrar por este campo', 'valid', 'SEARCH', true, 'Sin fichero permitido en la búsqueda')
);


let persona_pruebas = Array(
    // ADD dni
    // comprobar tamaño minimo
    Array("persona", "dni", 1, 1, "ADD", { dni: "" }, "dni_min_size_ko"),
    Array("persona", "dni", 1, 2, "ADD", { dni: "11111111" }, "dni_min_size_ko"),
    // comprobar tamaño maximo
    Array("persona", "dni", 2, 3, "ADD", { dni: '1'.repeat(10) }, "dni_max_size_ko"),
    // comprobar formato
    Array("persona", "dni", 3, 4, "ADD", { dni: "12345678z" }, "dni_format_ko"),
    Array("persona", "dni", 3, 5, "ADD", { dni: "123456789" }, "dni_format_ko"),
    // comprobar correspondencia entre número y letra
    Array("persona", "dni", 4, 6, "ADD", { dni: "00000000X" }, "dni_personalized_ko"),
    Array("persona", "dni", 4, 7, "ADD", { dni: "00000000T" }, true),
    // correcto
    Array("persona", "dni", 5, 8, "ADD", { dni: "12345678Z" }, true),
    // EDIT dni
    // comprobar tamaño minimo
    Array("persona", "dni", 6, 9, "EDIT", { dni: "" }, "dni_min_size_ko"),
    Array("persona", "dni", 6, 10, "EDIT", { dni: "11111111" }, "dni_min_size_ko"),
    // comprobar tamaño maximo
    Array("persona", "dni", 7, 11, "EDIT", { dni: '1'.repeat(10) }, "dni_max_size_ko"),
    // comprobar formato
    Array("persona", "dni", 8, 12, "EDIT", { dni: "12345678z" }, "dni_format_ko"),
    Array("persona", "dni", 8, 13, "EDIT", { dni: "123456789" }, "dni_format_ko"),
    // comprobar correspondencia entre número y letra
    Array("persona", "dni", 9, 14, "EDIT", { dni: "00000000X" }, "dni_personalized_ko"),
    Array("persona", "dni", 9, 15, "EDIT", { dni: "00000000T" }, true),
    // correcto
    Array("persona", "dni", 10, 16, "EDIT", { dni: "12345678Z" }, true),
    // SEARCH dni
    // comprobar tamaño maximo del criterio de búsqueda
    Array("persona", "dni", 11, 17, "SEARCH", { dni: "11111111" }, true),
    Array("persona", "dni", 11, 18, "SEARCH", { dni: "111111111" }, true),
    Array("persona", "dni", 11, 19, "SEARCH", { dni: '1'.repeat(10) }, "dni_max_size_ko"),
    // comprobar formato del criterio de búsqueda
    Array("persona", "dni", 12, 20, "SEARCH", { dni: "12A34" }, "dni_format_ko"),
    Array("persona", "dni", 12, 21, "SEARCH", { dni: "12345678z" }, "dni_format_ko"),
    // criterio de búsqueda parcial o completo correcto
    Array("persona", "dni", 13, 22, "SEARCH", { dni: "Z" }, true),
    Array("persona", "dni", 13, 23, "SEARCH", { dni: "12345678Z" }, true),
    // campo vacío: no filtrar por este campo
    Array("persona", "dni", 14, 24, "SEARCH", { dni: "" }, true),
    // ADD nombre_persona
    // comprobar tamaño minimo
    Array("persona", "nombre_persona", 15, 25, "ADD", { nombre_persona: "" }, "nombre_persona_min_size_ko"),
    Array("persona", "nombre_persona", 15, 26, "ADD", { nombre_persona: "a" }, "nombre_persona_min_size_ko"),
    Array("persona", "nombre_persona", 15, 27, "ADD", { nombre_persona: "aa" }, true),
    Array("persona", "nombre_persona", 15, 28, "ADD", { nombre_persona: "aaa" }, true),
    // comprobar tamaño maximo
    Array("persona", "nombre_persona", 16, 29, "ADD", { nombre_persona: 'a'.repeat(44) }, true),
    Array("persona", "nombre_persona", 16, 30, "ADD", { nombre_persona: 'a'.repeat(45) }, true),
    Array("persona", "nombre_persona", 16, 31, "ADD", { nombre_persona: 'a'.repeat(46) }, "nombre_persona_max_size_ko"),
    // comprobar formato
    Array("persona", "nombre_persona", 17, 32, "ADD", { nombre_persona: "Ana2" }, "nombre_persona_format_ko"),
    Array("persona", "nombre_persona", 17, 33, "ADD", { nombre_persona: "Ana@" }, "nombre_persona_format_ko"),
    // correcto
    Array("persona", "nombre_persona", 18, 34, "ADD", { nombre_persona: "M. Iñaki-José" }, true),
    // EDIT nombre_persona
    // comprobar tamaño minimo
    Array("persona", "nombre_persona", 19, 35, "EDIT", { nombre_persona: "" }, "nombre_persona_min_size_ko"),
    Array("persona", "nombre_persona", 19, 36, "EDIT", { nombre_persona: "a" }, "nombre_persona_min_size_ko"),
    Array("persona", "nombre_persona", 19, 37, "EDIT", { nombre_persona: "aa" }, true),
    Array("persona", "nombre_persona", 19, 38, "EDIT", { nombre_persona: "aaa" }, true),
    // comprobar tamaño maximo
    Array("persona", "nombre_persona", 20, 39, "EDIT", { nombre_persona: 'a'.repeat(44) }, true),
    Array("persona", "nombre_persona", 20, 40, "EDIT", { nombre_persona: 'a'.repeat(45) }, true),
    Array("persona", "nombre_persona", 20, 41, "EDIT", { nombre_persona: 'a'.repeat(46) }, "nombre_persona_max_size_ko"),
    // comprobar formato
    Array("persona", "nombre_persona", 21, 42, "EDIT", { nombre_persona: "Ana2" }, "nombre_persona_format_ko"),
    Array("persona", "nombre_persona", 21, 43, "EDIT", { nombre_persona: "Ana@" }, "nombre_persona_format_ko"),
    // correcto
    Array("persona", "nombre_persona", 22, 44, "EDIT", { nombre_persona: "M. Iñaki-José" }, true),
    // SEARCH nombre_persona
    // comprobar tamaño maximo del criterio de búsqueda
    Array("persona", "nombre_persona", 23, 45, "SEARCH", { nombre_persona: 'a'.repeat(44) }, true),
    Array("persona", "nombre_persona", 23, 46, "SEARCH", { nombre_persona: 'a'.repeat(45) }, true),
    Array("persona", "nombre_persona", 23, 47, "SEARCH", { nombre_persona: 'a'.repeat(46) }, "nombre_persona_max_size_ko"),
    // comprobar formato del criterio de búsqueda
    Array("persona", "nombre_persona", 24, 48, "SEARCH", { nombre_persona: "Ana2" }, "nombre_persona_format_ko"),
    Array("persona", "nombre_persona", 24, 49, "SEARCH", { nombre_persona: "Ana@" }, "nombre_persona_format_ko"),
    // criterio de búsqueda parcial o completo correcto
    Array("persona", "nombre_persona", 25, 50, "SEARCH", { nombre_persona: "A" }, true),
    Array("persona", "nombre_persona", 25, 51, "SEARCH", { nombre_persona: "M. Iñaki-José" }, true),
    // campo vacío: no filtrar por este campo
    Array("persona", "nombre_persona", 26, 52, "SEARCH", { nombre_persona: "" }, true),
    // ADD apellidos_persona
    // comprobar tamaño minimo
    Array("persona", "apellidos_persona", 27, 53, "ADD", { apellidos_persona: "" }, "apellidos_persona_min_size_ko"),
    Array("persona", "apellidos_persona", 27, 54, "ADD", { apellidos_persona: "aa" }, "apellidos_persona_min_size_ko"),
    Array("persona", "apellidos_persona", 27, 55, "ADD", { apellidos_persona: "aaa" }, true),
    Array("persona", "apellidos_persona", 27, 56, "ADD", { apellidos_persona: "aaaa" }, true),
    // comprobar tamaño maximo
    Array("persona", "apellidos_persona", 28, 57, "ADD", { apellidos_persona: 'a'.repeat(99) }, true),
    Array("persona", "apellidos_persona", 28, 58, "ADD", { apellidos_persona: 'a'.repeat(100) }, true),
    Array("persona", "apellidos_persona", 28, 59, "ADD", { apellidos_persona: 'a'.repeat(101) }, "apellidos_persona_max_size_ko"),
    // comprobar formato
    Array("persona", "apellidos_persona", 29, 60, "ADD", { apellidos_persona: "Boo2" }, "apellidos_persona_format_ko"),
    Array("persona", "apellidos_persona", 29, 61, "ADD", { apellidos_persona: "Boo@" }, "apellidos_persona_format_ko"),
    // correcto
    Array("persona", "apellidos_persona", 30, 62, "ADD", { apellidos_persona: "P. Núñez-López" }, true),
    // EDIT apellidos_persona
    // comprobar tamaño minimo
    Array("persona", "apellidos_persona", 31, 63, "EDIT", { apellidos_persona: "" }, "apellidos_persona_min_size_ko"),
    Array("persona", "apellidos_persona", 31, 64, "EDIT", { apellidos_persona: "aa" }, "apellidos_persona_min_size_ko"),
    Array("persona", "apellidos_persona", 31, 65, "EDIT", { apellidos_persona: "aaa" }, true),
    Array("persona", "apellidos_persona", 31, 66, "EDIT", { apellidos_persona: "aaaa" }, true),
    // comprobar tamaño maximo
    Array("persona", "apellidos_persona", 32, 67, "EDIT", { apellidos_persona: 'a'.repeat(99) }, true),
    Array("persona", "apellidos_persona", 32, 68, "EDIT", { apellidos_persona: 'a'.repeat(100) }, true),
    Array("persona", "apellidos_persona", 32, 69, "EDIT", { apellidos_persona: 'a'.repeat(101) }, "apellidos_persona_max_size_ko"),
    // comprobar formato
    Array("persona", "apellidos_persona", 33, 70, "EDIT", { apellidos_persona: "Boo2" }, "apellidos_persona_format_ko"),
    Array("persona", "apellidos_persona", 33, 71, "EDIT", { apellidos_persona: "Boo@" }, "apellidos_persona_format_ko"),
    // correcto
    Array("persona", "apellidos_persona", 34, 72, "EDIT", { apellidos_persona: "P. Núñez-López" }, true),
    // SEARCH apellidos_persona
    // comprobar tamaño maximo del criterio de búsqueda
    Array("persona", "apellidos_persona", 35, 73, "SEARCH", { apellidos_persona: 'a'.repeat(99) }, true),
    Array("persona", "apellidos_persona", 35, 74, "SEARCH", { apellidos_persona: 'a'.repeat(100) }, true),
    Array("persona", "apellidos_persona", 35, 75, "SEARCH", { apellidos_persona: 'a'.repeat(101) }, "apellidos_persona_max_size_ko"),
    // comprobar formato del criterio de búsqueda
    Array("persona", "apellidos_persona", 36, 76, "SEARCH", { apellidos_persona: "Boo2" }, "apellidos_persona_format_ko"),
    Array("persona", "apellidos_persona", 36, 77, "SEARCH", { apellidos_persona: "Boo@" }, "apellidos_persona_format_ko"),
    // criterio de búsqueda parcial o completo correcto
    Array("persona", "apellidos_persona", 37, 78, "SEARCH", { apellidos_persona: "P" }, true),
    Array("persona", "apellidos_persona", 37, 79, "SEARCH", { apellidos_persona: "P. Núñez-López" }, true),
    // campo vacío: no filtrar por este campo
    Array("persona", "apellidos_persona", 38, 80, "SEARCH", { apellidos_persona: "" }, true),
    // ADD fechaNacimiento_persona
    // comprobar formato
    Array("persona", "fechaNacimiento_persona", 39, 81, "ADD", { fechaNacimiento_persona: "" }, "fechaNacimiento_persona_format_ko"),
    Array("persona", "fechaNacimiento_persona", 39, 82, "ADD", { fechaNacimiento_persona: "23-09-2000" }, "fechaNacimiento_persona_format_ko"),
    Array("persona", "fechaNacimiento_persona", 39, 83, "ADD", { fechaNacimiento_persona: "1/9/2000" }, "fechaNacimiento_persona_format_ko"),
    Array("persona", "fechaNacimiento_persona", 39, 84, "ADD", { fechaNacimiento_persona: "aa/09/2000" }, "fechaNacimiento_persona_format_ko"),
    // comprobar que la fecha exista
    Array("persona", "fechaNacimiento_persona", 40, 85, "ADD", { fechaNacimiento_persona: "00/09/2000" }, "fechaNacimiento_persona_personalized_inexistente_ko"),
    Array("persona", "fechaNacimiento_persona", 40, 86, "ADD", { fechaNacimiento_persona: "23/13/2000" }, "fechaNacimiento_persona_personalized_inexistente_ko"),
    Array("persona", "fechaNacimiento_persona", 40, 87, "ADD", { fechaNacimiento_persona: "30/02/2005" }, "fechaNacimiento_persona_personalized_inexistente_ko"),
    Array("persona", "fechaNacimiento_persona", 40, 88, "ADD", { fechaNacimiento_persona: "29/02/1900" }, "fechaNacimiento_persona_personalized_inexistente_ko"),
    Array("persona", "fechaNacimiento_persona", 40, 89, "ADD", { fechaNacimiento_persona: "29/02/2024" }, true),
    Array("persona", "fechaNacimiento_persona", 40, 90, "ADD", { fechaNacimiento_persona: "29/02/2000" }, true),
    // comprobar que la fecha no sea posterior a hoy
    Array("persona", "fechaNacimiento_persona", 41, 91, "ADD", { fechaNacimiento_persona: "20/09/2026" }, true),
    Array("persona", "fechaNacimiento_persona", 41, 92, "ADD", { fechaNacimiento_persona: "30/08/2030" }, "fechaNacimiento_persona_personalized_futura_ko"),
    // correcto
    Array("persona", "fechaNacimiento_persona", 42, 93, "ADD", { fechaNacimiento_persona: "23/09/2000" }, true),
    // EDIT fechaNacimiento_persona
    // comprobar formato
    Array("persona", "fechaNacimiento_persona", 43, 94, "EDIT", { fechaNacimiento_persona: "" }, "fechaNacimiento_persona_format_ko"),
    Array("persona", "fechaNacimiento_persona", 43, 95, "EDIT", { fechaNacimiento_persona: "23-09-2000" }, "fechaNacimiento_persona_format_ko"),
    Array("persona", "fechaNacimiento_persona", 43, 96, "EDIT", { fechaNacimiento_persona: "1/9/2000" }, "fechaNacimiento_persona_format_ko"),
    Array("persona", "fechaNacimiento_persona", 43, 97, "EDIT", { fechaNacimiento_persona: "aa/09/2000" }, "fechaNacimiento_persona_format_ko"),
    // comprobar que la fecha exista
    Array("persona", "fechaNacimiento_persona", 44, 98, "EDIT", { fechaNacimiento_persona: "00/09/2000" }, "fechaNacimiento_persona_personalized_inexistente_ko"),
    Array("persona", "fechaNacimiento_persona", 44, 99, "EDIT", { fechaNacimiento_persona: "23/13/2000" }, "fechaNacimiento_persona_personalized_inexistente_ko"),
    Array("persona", "fechaNacimiento_persona", 44, 100, "EDIT", { fechaNacimiento_persona: "30/02/2005" }, "fechaNacimiento_persona_personalized_inexistente_ko"),
    Array("persona", "fechaNacimiento_persona", 44, 101, "EDIT", { fechaNacimiento_persona: "29/02/1900" }, "fechaNacimiento_persona_personalized_inexistente_ko"),
    Array("persona", "fechaNacimiento_persona", 44, 102, "EDIT", { fechaNacimiento_persona: "29/02/2024" }, true),
    Array("persona", "fechaNacimiento_persona", 44, 103, "EDIT", { fechaNacimiento_persona: "29/02/2000" }, true),
    // comprobar que la fecha no sea posterior a hoy
    Array("persona", "fechaNacimiento_persona", 45, 104, "EDIT", { fechaNacimiento_persona: "20/08/2026" }, true),
    Array("persona", "fechaNacimiento_persona", 45, 105, "EDIT", { fechaNacimiento_persona: "30/08/2030" }, "fechaNacimiento_persona_personalized_futura_ko"),
    // correcto
    Array("persona", "fechaNacimiento_persona", 46, 106, "EDIT", { fechaNacimiento_persona: "23/09/2000" }, true),
    // SEARCH fechaNacimiento_persona
    // comprobar tamaño maximo del criterio de búsqueda
    Array("persona", "fechaNacimiento_persona", 47, 107, "SEARCH", { fechaNacimiento_persona: "111111111" }, true),
    Array("persona", "fechaNacimiento_persona", 47, 108, "SEARCH", { fechaNacimiento_persona: '1'.repeat(10) }, true),
    Array("persona", "fechaNacimiento_persona", 47, 109, "SEARCH", { fechaNacimiento_persona: '1'.repeat(11) }, "fechaNacimiento_persona_max_size_ko"),
    // comprobar formato del criterio de búsqueda
    Array("persona", "fechaNacimiento_persona", 48, 110, "SEARCH", { fechaNacimiento_persona: "23-09" }, "fechaNacimiento_persona_format_ko"),
    Array("persona", "fechaNacimiento_persona", 48, 111, "SEARCH", { fechaNacimiento_persona: "23/09" }, true),
    // comprobar fecha existente cuando el criterio es completo
    Array("persona", "fechaNacimiento_persona", 49, 112, "SEARCH", { fechaNacimiento_persona: "30/02/2005" }, "fechaNacimiento_persona_personalized_inexistente_ko"),
    Array("persona", "fechaNacimiento_persona", 49, 113, "SEARCH", { fechaNacimiento_persona: "29/02/2024" }, true),
    // criterio de búsqueda parcial o completo correcto
    Array("persona", "fechaNacimiento_persona", 50, 114, "SEARCH", { fechaNacimiento_persona: "2000" }, true),
    Array("persona", "fechaNacimiento_persona", 50, 115, "SEARCH", { fechaNacimiento_persona: "23/09/2000" }, true),
    // campo vacío: no filtrar por este campo
    Array("persona", "fechaNacimiento_persona", 51, 116, "SEARCH", { fechaNacimiento_persona: "" }, true),
    // ADD direccion_persona
    // comprobar tamaño minimo
    Array("persona", "direccion_persona", 52, 117, "ADD", { direccion_persona: "" }, "direccion_persona_min_size_ko"),
    Array("persona", "direccion_persona", 52, 118, "ADD", { direccion_persona: "aaaaaaaaa" }, "direccion_persona_min_size_ko"),
    Array("persona", "direccion_persona", 52, 119, "ADD", { direccion_persona: 'a'.repeat(10) }, true),
    Array("persona", "direccion_persona", 52, 120, "ADD", { direccion_persona: 'a'.repeat(11) }, true),
    // comprobar tamaño maximo
    Array("persona", "direccion_persona", 53, 121, "ADD", { direccion_persona: 'a'.repeat(199) }, true),
    Array("persona", "direccion_persona", 53, 122, "ADD", { direccion_persona: 'a'.repeat(200) }, true),
    Array("persona", "direccion_persona", 53, 123, "ADD", { direccion_persona: 'a'.repeat(201) }, "direccion_persona_max_size_ko"),
    // comprobar formato
    Array("persona", "direccion_persona", 54, 124, "ADD", { direccion_persona: "Calle Norte@12" }, "direccion_persona_format_ko"),
    // correcto
    Array("persona", "direccion_persona", 55, 125, "ADD", { direccion_persona: "Av. Pequeña-2; Ático/A" }, true),
    // EDIT direccion_persona
    // comprobar tamaño minimo
    Array("persona", "direccion_persona", 56, 126, "EDIT", { direccion_persona: "" }, "direccion_persona_min_size_ko"),
    Array("persona", "direccion_persona", 56, 127, "EDIT", { direccion_persona: "aaaaaaaaa" }, "direccion_persona_min_size_ko"),
    Array("persona", "direccion_persona", 56, 128, "EDIT", { direccion_persona: 'a'.repeat(10) }, true),
    Array("persona", "direccion_persona", 56, 129, "EDIT", { direccion_persona: 'a'.repeat(11) }, true),
    // comprobar tamaño maximo
    Array("persona", "direccion_persona", 57, 130, "EDIT", { direccion_persona: 'a'.repeat(199) }, true),
    Array("persona", "direccion_persona", 57, 131, "EDIT", { direccion_persona: 'a'.repeat(200) }, true),
    Array("persona", "direccion_persona", 57, 132, "EDIT", { direccion_persona: 'a'.repeat(201) }, "direccion_persona_max_size_ko"),
    // comprobar formato
    Array("persona", "direccion_persona", 58, 133, "EDIT", { direccion_persona: "Calle Norte@12" }, "direccion_persona_format_ko"),
    // correcto
    Array("persona", "direccion_persona", 59, 134, "EDIT", { direccion_persona: "Av. Pequeña-2; Ático/A" }, true),
    // SEARCH direccion_persona
    // comprobar tamaño maximo del criterio de búsqueda
    Array("persona", "direccion_persona", 60, 135, "SEARCH", { direccion_persona: 'a'.repeat(199) }, true),
    Array("persona", "direccion_persona", 60, 136, "SEARCH", { direccion_persona: 'a'.repeat(200) }, true),
    Array("persona", "direccion_persona", 60, 137, "SEARCH", { direccion_persona: 'a'.repeat(201) }, "direccion_persona_max_size_ko"),
    // comprobar formato del criterio de búsqueda
    Array("persona", "direccion_persona", 61, 138, "SEARCH", { direccion_persona: "Calle Norte@12" }, "direccion_persona_format_ko"),
    // criterio de búsqueda parcial o completo correcto
    Array("persona", "direccion_persona", 62, 139, "SEARCH", { direccion_persona: "C" }, true),
    Array("persona", "direccion_persona", 62, 140, "SEARCH", { direccion_persona: "Av. Pequeña-2; Ático/A" }, true),
    // campo vacío: no filtrar por este campo
    Array("persona", "direccion_persona", 63, 141, "SEARCH", { direccion_persona: "" }, true),
    // ADD telefono_persona
    // comprobar tamaño minimo
    Array("persona", "telefono_persona", 64, 142, "ADD", { telefono_persona: "" }, "telefono_persona_min_size_ko"),
    Array("persona", "telefono_persona", 64, 143, "ADD", { telefono_persona: "11111111" }, "telefono_persona_min_size_ko"),
    // comprobar tamaño maximo
    Array("persona", "telefono_persona", 65, 144, "ADD", { telefono_persona: '1'.repeat(10) }, "telefono_persona_max_size_ko"),
    // comprobar formato
    Array("persona", "telefono_persona", 66, 145, "ADD", { telefono_persona: "61234A678" }, "telefono_persona_format_ko"),
    // comprobar numeración de teléfono español
    Array("persona", "telefono_persona", 67, 146, "ADD", { telefono_persona: "112345678" }, "telefono_persona_personalized_ko"),
    // correcto
    Array("persona", "telefono_persona", 68, 147, "ADD", { telefono_persona: "612345678" }, true),
    // EDIT telefono_persona
    // comprobar tamaño minimo
    Array("persona", "telefono_persona", 69, 148, "EDIT", { telefono_persona: "" }, "telefono_persona_min_size_ko"),
    Array("persona", "telefono_persona", 69, 149, "EDIT", { telefono_persona: "11111111" }, "telefono_persona_min_size_ko"),
    // comprobar tamaño maximo
    Array("persona", "telefono_persona", 70, 150, "EDIT", { telefono_persona: '1'.repeat(10) }, "telefono_persona_max_size_ko"),
    // comprobar formato
    Array("persona", "telefono_persona", 71, 151, "EDIT", { telefono_persona: "61234A678" }, "telefono_persona_format_ko"),
    // comprobar numeración de teléfono español
    Array("persona", "telefono_persona", 72, 152, "EDIT", { telefono_persona: "112345678" }, "telefono_persona_personalized_ko"),
    // correcto
    Array("persona", "telefono_persona", 73, 153, "EDIT", { telefono_persona: "612345678" }, true),
    // SEARCH telefono_persona
    // comprobar tamaño maximo del criterio de búsqueda
    Array("persona", "telefono_persona", 74, 154, "SEARCH", { telefono_persona: "11111111" }, true),
    Array("persona", "telefono_persona", 74, 155, "SEARCH", { telefono_persona: "111111111" }, true),
    Array("persona", "telefono_persona", 74, 156, "SEARCH", { telefono_persona: '1'.repeat(10) }, "telefono_persona_max_size_ko"),
    // comprobar formato del criterio de búsqueda
    Array("persona", "telefono_persona", 75, 157, "SEARCH", { telefono_persona: "6-12" }, "telefono_persona_format_ko"),
    // criterio de búsqueda parcial o completo correcto
    Array("persona", "telefono_persona", 76, 158, "SEARCH", { telefono_persona: "123" }, true),
    Array("persona", "telefono_persona", 76, 159, "SEARCH", { telefono_persona: "612345678" }, true),
    // campo vacío: no filtrar por este campo
    Array("persona", "telefono_persona", 77, 160, "SEARCH", { telefono_persona: "" }, true),
    // ADD email_persona
    // comprobar tamaño minimo
    Array("persona", "email_persona", 78, 161, "ADD", { email_persona: "" }, "email_persona_min_size_ko"),
    // comprobar tamaño maximo
    Array("persona", "email_persona", 79, 162, "ADD", { email_persona: 'a'.repeat(40) + '@a.es' }, true),
    Array("persona", "email_persona", 79, 163, "ADD", { email_persona: 'a'.repeat(41) + '@a.es' }, "email_persona_max_size_ko"),
    // comprobar formato
    Array("persona", "email_persona", 80, 164, "ADD", { email_persona: "ana.example.com" }, "email_persona_format_ko"),
    Array("persona", "email_persona", 80, 165, "ADD", { email_persona: "ana perez@example.com" }, "email_persona_format_ko"),
    Array("persona", "email_persona", 80, 166, "ADD", { email_persona: "o'connor@dominio.es" }, true),
    Array("persona", "email_persona", 80, 167, "ADD", { email_persona: "a" }, "email_persona_format_ko"),
    // correcto
    Array("persona", "email_persona", 81, 168, "ADD", { email_persona: "ana.perez+clase@example.com" }, true),
    // EDIT email_persona
    // comprobar tamaño minimo
    Array("persona", "email_persona", 82, 169, "EDIT", { email_persona: "" }, "email_persona_min_size_ko"),
    // comprobar tamaño maximo
    Array("persona", "email_persona", 83, 170, "EDIT", { email_persona: 'a'.repeat(40) + '@a.es' }, true),
    Array("persona", "email_persona", 83, 171, "EDIT", { email_persona: 'a'.repeat(41) + '@a.es' }, "email_persona_max_size_ko"),
    // comprobar formato
    Array("persona", "email_persona", 84, 172, "EDIT", { email_persona: "ana.example.com" }, "email_persona_format_ko"),
    Array("persona", "email_persona", 84, 173, "EDIT", { email_persona: "ana perez@example.com" }, "email_persona_format_ko"),
    Array("persona", "email_persona", 84, 174, "EDIT", { email_persona: "o'connor@dominio.es" }, true),
    Array("persona", "email_persona", 84, 175, "EDIT", { email_persona: "a" }, "email_persona_format_ko"),
    // correcto
    Array("persona", "email_persona", 85, 176, "EDIT", { email_persona: "ana.perez+clase@example.com" }, true),
    // SEARCH email_persona
    // comprobar tamaño maximo del criterio de búsqueda
    Array("persona", "email_persona", 86, 177, "SEARCH", { email_persona: 'a'.repeat(40) + '@a.es' }, true),
    Array("persona", "email_persona", 86, 178, "SEARCH", { email_persona: 'a'.repeat(41) + '@a.es' }, "email_persona_max_size_ko"),
    // comprobar formato del criterio de búsqueda
    Array("persona", "email_persona", 87, 179, "SEARCH", { email_persona: "ana perez" }, "email_persona_format_ko"),
    Array("persona", "email_persona", 87, 180, "SEARCH", { email_persona: "ana\u0001perez" }, "email_persona_format_ko"),
    // criterio de búsqueda parcial o completo correcto
    Array("persona", "email_persona", 88, 181, "SEARCH", { email_persona: "@example.com" }, true),
    Array("persona", "email_persona", 88, 182, "SEARCH", { email_persona: "ana.perez+clase@example.com" }, true),
    // campo vacío: no filtrar por este campo
    Array("persona", "email_persona", 89, 183, "SEARCH", { email_persona: "" }, true),
    // ADD foto_persona, no se contempla en el formulario final
    // comprobar tamaño minimo del nombre
    Array("persona", "foto_persona", 90, 184, "ADD", { foto_persona: "" }, "foto_persona_min_size_ko"),
    Array("persona", "foto_persona", 90, 185, "ADD", { foto_persona: ".jpg" }, "foto_persona_min_size_ko"),
    Array("persona", "foto_persona", 90, 186, "ADD", { foto_persona: "a.jpg" }, true),
    // comprobar tamaño maximo del nombre
    Array("persona", "foto_persona", 91, 187, "ADD", { foto_persona: 'a'.repeat(10) + '.jpg' }, true),
    Array("persona", "foto_persona", 91, 188, "ADD", { foto_persona: 'a'.repeat(11) + '.jpg' }, true),
    Array("persona", "foto_persona", 91, 189, "ADD", { foto_persona: 'a'.repeat(12) + '.jpg' }, "foto_persona_max_size_ko"),
    // comprobar formato del nombre
    Array("persona", "foto_persona", 92, 190, "ADD", { foto_persona: "foto1.jpg" }, "foto_persona_format_ko"),
    Array("persona", "foto_persona", 92, 191, "ADD", { foto_persona: "mi foto.jpg" }, "foto_persona_format_ko"),
    Array("persona", "foto_persona", 92, 192, "ADD", { foto_persona: ".jpeg" }, "foto_persona_format_ko"),
    Array("persona", "foto_persona", 92, 193, "ADD", { foto_persona: "foto.png" }, "foto_persona_format_ko"),
    // correcto
    Array("persona", "foto_persona", 93, 194, "ADD", { foto_persona: "Foto.jpg" }, true),
    Array("persona", "foto_persona", 93, 195, "ADD", { foto_persona: "foto.jpeg" }, true),
    // EDIT foto_persona
    // comprobar tamaño minimo del nombre
    Array("persona", "foto_persona", 94, 196, "EDIT", { foto_persona: "" }, "foto_persona_min_size_ko"),
    Array("persona", "foto_persona", 94, 197, "EDIT", { foto_persona: ".jpg" }, "foto_persona_min_size_ko"),
    Array("persona", "foto_persona", 94, 198, "EDIT", { foto_persona: "a.jpg" }, true),
    // comprobar tamaño maximo del nombre
    Array("persona", "foto_persona", 95, 199, "EDIT", { foto_persona: 'a'.repeat(10) + '.jpg' }, true),
    Array("persona", "foto_persona", 95, 200, "EDIT", { foto_persona: 'a'.repeat(11) + '.jpg' }, true),
    Array("persona", "foto_persona", 95, 201, "EDIT", { foto_persona: 'a'.repeat(12) + '.jpg' }, "foto_persona_max_size_ko"),
    // comprobar formato del nombre
    Array("persona", "foto_persona", 96, 202, "EDIT", { foto_persona: "foto1.jpg" }, "foto_persona_format_ko"),
    Array("persona", "foto_persona", 96, 203, "EDIT", { foto_persona: "mi foto.jpg" }, "foto_persona_format_ko"),
    Array("persona", "foto_persona", 96, 204, "EDIT", { foto_persona: ".jpeg" }, "foto_persona_format_ko"),
    Array("persona", "foto_persona", 96, 205, "EDIT", { foto_persona: "foto.png" }, "foto_persona_format_ko"),
    // correcto
    Array("persona", "foto_persona", 97, 206, "EDIT", { foto_persona: "Foto.jpg" }, true),
    Array("persona", "foto_persona", 97, 207, "EDIT", { foto_persona: "foto.jpeg" }, true),
    // SEARCH foto_persona
    // comprobar tamaño maximo del criterio de búsqueda
    Array("persona", "foto_persona", 98, 208, "SEARCH", { foto_persona: 'a'.repeat(14) }, true),
    Array("persona", "foto_persona", 98, 209, "SEARCH", { foto_persona: 'a'.repeat(15) }, true),
    Array("persona", "foto_persona", 98, 210, "SEARCH", { foto_persona: 'a'.repeat(16) }, "foto_persona_max_size_ko"),
    // comprobar formato del criterio de búsqueda
    Array("persona", "foto_persona", 99, 211, "SEARCH", { foto_persona: "foto1" }, "foto_persona_format_ko"),
    Array("persona", "foto_persona", 99, 212, "SEARCH", { foto_persona: "mi foto" }, "foto_persona_format_ko"),
    // criterio de búsqueda parcial o completo correcto
    Array("persona", "foto_persona", 100, 213, "SEARCH", { foto_persona: ".jpg" }, true),
    Array("persona", "foto_persona", 100, 214, "SEARCH", { foto_persona: "Foto.jpeg" }, true),
    // campo vacío: no filtrar por este campo
    Array("persona", "foto_persona", 101, 215, "SEARCH", { foto_persona: "" }, true),
    // ADD nuevo_foto_persona
    // comprobar existencia de fichero
    Array("persona", "nuevo_foto_persona", 102, 216, "ADD", {}, "nuevo_foto_persona_exist_file_ko"),
    Array("persona", "nuevo_foto_persona", 102, 217, "ADD", { nuevo_foto_persona: { format_name_file: "foto.jpg", type_file: "image/jpeg", max_size_file: 1024 } }, true),
    // comprobar tamaño minimo del nombre
    Array("persona", "nuevo_foto_persona", 103, 218, "ADD", { nuevo_foto_persona: { format_name_file: "", type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_min_size_ko"),
    Array("persona", "nuevo_foto_persona", 103, 219, "ADD", { nuevo_foto_persona: { format_name_file: ".jpg", type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_min_size_ko"),
    Array("persona", "nuevo_foto_persona", 103, 220, "ADD", { nuevo_foto_persona: { format_name_file: "a.jpg", type_file: "image/jpeg", max_size_file: 1024 } }, true),
    // comprobar tamaño maximo del nombre
    Array("persona", "nuevo_foto_persona", 104, 221, "ADD", { nuevo_foto_persona: { format_name_file: 'a'.repeat(10) + '.jpg', type_file: "image/jpeg", max_size_file: 1024 } }, true),
    Array("persona", "nuevo_foto_persona", 104, 222, "ADD", { nuevo_foto_persona: { format_name_file: 'a'.repeat(11) + '.jpg', type_file: "image/jpeg", max_size_file: 1024 } }, true),
    Array("persona", "nuevo_foto_persona", 104, 223, "ADD", { nuevo_foto_persona: { format_name_file: 'a'.repeat(12) + '.jpg', type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_max_size_ko"),
    // comprobar formato del nombre
    Array("persona", "nuevo_foto_persona", 105, 224, "ADD", { nuevo_foto_persona: { format_name_file: "foto1.jpg", type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_format_name_file_ko"),
    Array("persona", "nuevo_foto_persona", 105, 225, "ADD", { nuevo_foto_persona: { format_name_file: "mi foto.jpg", type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_format_name_file_ko"),
    Array("persona", "nuevo_foto_persona", 105, 226, "ADD", { nuevo_foto_persona: { format_name_file: ".jpeg", type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_format_name_file_ko"),
    // comprobar tipo de fichero
    Array("persona", "nuevo_foto_persona", 106, 227, "ADD", { nuevo_foto_persona: { format_name_file: "foto.jpg", type_file: "image/png", max_size_file: 1024 } }, "nuevo_foto_persona_type_file_ko"),
    Array("persona", "nuevo_foto_persona", 106, 228, "ADD", { nuevo_foto_persona: { format_name_file: "foto.png", type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_type_file_ko"),
    Array("persona", "nuevo_foto_persona", 106, 229, "ADD", { nuevo_foto_persona: { format_name_file: "foto.jpeg", type_file: "image/jpeg", max_size_file: 1024 } }, true),
    // comprobar tamaño del fichero
    Array("persona", "nuevo_foto_persona", 107, 230, "ADD", { nuevo_foto_persona: { format_name_file: "foto.jpg", type_file: "image/jpeg", max_size_file: 2097151 } }, true),
    Array("persona", "nuevo_foto_persona", 107, 231, "ADD", { nuevo_foto_persona: { format_name_file: "foto.jpg", type_file: "image/jpeg", max_size_file: 2097152 } }, true),
    Array("persona", "nuevo_foto_persona", 107, 232, "ADD", { nuevo_foto_persona: { format_name_file: "foto.jpg", type_file: "image/jpeg", max_size_file: 2097153 } }, "nuevo_foto_persona_max_size_file_ko"),
    // correcto
    Array("persona", "nuevo_foto_persona", 108, 233, "ADD", { nuevo_foto_persona: { format_name_file: "Foto.jpg", type_file: "image/jpeg", max_size_file: 1024 } }, true),
    // EDIT nuevo_foto_persona
    // comprobar existencia de fichero; sin fichero conservar la foto actual
    Array("persona", "nuevo_foto_persona", 109, 234, "EDIT", {}, true),
    // comprobar tamaño minimo del nombre
    Array("persona", "nuevo_foto_persona", 110, 235, "EDIT", { nuevo_foto_persona: { format_name_file: "", type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_min_size_ko"),
    Array("persona", "nuevo_foto_persona", 110, 236, "EDIT", { nuevo_foto_persona: { format_name_file: ".jpg", type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_min_size_ko"),
    Array("persona", "nuevo_foto_persona", 110, 237, "EDIT", { nuevo_foto_persona: { format_name_file: "a.jpg", type_file: "image/jpeg", max_size_file: 1024 } }, true),
    // comprobar tamaño maximo del nombre
    Array("persona", "nuevo_foto_persona", 111, 238, "EDIT", { nuevo_foto_persona: { format_name_file: 'a'.repeat(10) + '.jpg', type_file: "image/jpeg", max_size_file: 1024 } }, true),
    Array("persona", "nuevo_foto_persona", 111, 239, "EDIT", { nuevo_foto_persona: { format_name_file: 'a'.repeat(11) + '.jpg', type_file: "image/jpeg", max_size_file: 1024 } }, true),
    Array("persona", "nuevo_foto_persona", 111, 240, "EDIT", { nuevo_foto_persona: { format_name_file: 'a'.repeat(12) + '.jpg', type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_max_size_ko"),
    // comprobar formato del nombre
    Array("persona", "nuevo_foto_persona", 112, 241, "EDIT", { nuevo_foto_persona: { format_name_file: "foto1.jpg", type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_format_name_file_ko"),
    Array("persona", "nuevo_foto_persona", 112, 242, "EDIT", { nuevo_foto_persona: { format_name_file: "mi foto.jpg", type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_format_name_file_ko"),
    Array("persona", "nuevo_foto_persona", 112, 243, "EDIT", { nuevo_foto_persona: { format_name_file: ".jpeg", type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_format_name_file_ko"),
    // comprobar tipo de fichero
    Array("persona", "nuevo_foto_persona", 113, 244, "EDIT", { nuevo_foto_persona: { format_name_file: "foto.jpg", type_file: "image/png", max_size_file: 1024 } }, "nuevo_foto_persona_type_file_ko"),
    Array("persona", "nuevo_foto_persona", 113, 245, "EDIT", { nuevo_foto_persona: { format_name_file: "foto.png", type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_type_file_ko"),
    Array("persona", "nuevo_foto_persona", 113, 246, "EDIT", { nuevo_foto_persona: { format_name_file: "foto.jpg", type_file: "image/jpeg", max_size_file: 1024 } }, true),
    Array("persona", "nuevo_foto_persona", 113, 247, "EDIT", { nuevo_foto_persona: { format_name_file: "foto.jpeg", type_file: "image/jpeg", max_size_file: 1024 } }, true),
    // comprobar tamaño del fichero
    Array("persona", "nuevo_foto_persona", 114, 248, "EDIT", { nuevo_foto_persona: { format_name_file: "foto.jpg", type_file: "image/jpeg", max_size_file: 2097151 } }, true),
    Array("persona", "nuevo_foto_persona", 114, 249, "EDIT", { nuevo_foto_persona: { format_name_file: "foto.jpg", type_file: "image/jpeg", max_size_file: 2097152 } }, true),
    Array("persona", "nuevo_foto_persona", 114, 250, "EDIT", { nuevo_foto_persona: { format_name_file: "foto.jpg", type_file: "image/jpeg", max_size_file: 2097153 } }, "nuevo_foto_persona_max_size_file_ko"),
    // correcto
    Array("persona", "nuevo_foto_persona", 115, 251, "EDIT", { nuevo_foto_persona: { format_name_file: "Foto.jpg", type_file: "image/jpeg", max_size_file: 1024 } }, true),
    // SEARCH nuevo_foto_persona, no se contempla en el formulario final
    // comprobar tamaño minimo del nombre
    Array("persona", "nuevo_foto_persona", 116, 252, "SEARCH", { nuevo_foto_persona: { format_name_file: ".jpg", type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_min_size_ko"),
    // comprobar tamaño maximo del nombre
    Array("persona", "nuevo_foto_persona", 117, 253, "SEARCH", { nuevo_foto_persona: { format_name_file: 'a'.repeat(12) + '.jpg', type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_max_size_ko"),
    // comprobar formato del nombre
    Array("persona", "nuevo_foto_persona", 118, 254, "SEARCH", { nuevo_foto_persona: { format_name_file: ".jpeg", type_file: "image/jpeg", max_size_file: 1024 } }, "nuevo_foto_persona_format_name_file_ko"),
    // comprobar tipo de fichero
    Array("persona", "nuevo_foto_persona", 119, 255, "SEARCH", { nuevo_foto_persona: { format_name_file: "foto.jpg", type_file: "image/png", max_size_file: 1024 } }, "nuevo_foto_persona_type_file_ko"),
    // comprobar tamaño del fichero
    Array("persona", "nuevo_foto_persona", 120, 256, "SEARCH", { nuevo_foto_persona: { format_name_file: "foto.jpg", type_file: "image/jpeg", max_size_file: 2097153 } }, "nuevo_foto_persona_max_size_file_ko"),
    // correcto
    Array("persona", "nuevo_foto_persona", 121, 257, "SEARCH", { nuevo_foto_persona: { format_name_file: "foto.jpeg", type_file: "image/jpeg", max_size_file: 1024 } }, true),
    // sin fichero: no filtrar por este campo
    Array("persona", "nuevo_foto_persona", 122, 258, "SEARCH", {}, true)
);
