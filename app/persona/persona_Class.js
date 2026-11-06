/**
 * gestiona datos personales, formularios, validaciones y presentación de fotos
 * @extends {AbstractEntidad}
 */
class persona extends AbstractEntidad {
    // prepara la entidad al instanciarla. Con esTest = 'test' se evita abrir la gestión
    // y consultar el BACK al arrancar; las reglas de validación son las mismas
    /**
     * configura la entidad persona y prepara su gestión fuera del modo test
     * @param {string|null} [esTest=null] - con 'test' prepara la entidad sin abrir la gestión ni consultar el back
     */
    constructor(esTest = null) {
        super(); // inicializa la parte heredada de AbstractEntidad
        // configuración propia de esta entidad. Core y Base no se modifican

        this.config = {
            // dirección base para construir los enlaces a las fotos almacenadas
            "fileBase": "http://193.147.87.202/ET2/filesuploaded/files_foto_persona/",
            // presentación adicional de referencias; persona no configura ninguna aquí
            "referenceDisplay": [],
            // clave primaria que identifica el registro al editarlo o eliminarlo
            "keys": [
                "dni"
            ],
            // columnas visibles inicialmente; al usuario s e le permite cambiar la selección
            "columns": [
                "dni",
                "nombre_persona",
                "apellidos_persona",
                "foto_persona"
            ],
            // campos cuya presentación se adapta en mostrarcambioatributo()
            "special": [
                "foto_persona",
                "fechaNacimiento_persona"
            ],
            // atributos gestionados, incluido el campo auxiliar para subir una nueva foto
            "fields": [
                "dni",
                "nombre_persona",
                "apellidos_persona",
                "fechaNacimiento_persona",
                "direccion_persona",
                "telefono_persona",
                "email_persona",
                "foto_persona",
                "nuevo_foto_persona"
            ],
            // tipo de componente de cada campo; las restricciones se comprueban en las validaciones
            "components": {
                "dni": "input",
                "nombre_persona": "input",
                "apellidos_persona": "input",
                "fechaNacimiento_persona": "input",
                "direccion_persona": "textarea",
                "telefono_persona": "input",
                "email_persona": "input",
                "foto_persona": "input",
                "nuevo_foto_persona": "file"
            },
            // el DNI referencia usuario: entidad consultada, campo con el valor y campo con la etiqueta
            "references": {
                "dni": [
                    "usuario",
                    "dni",
                    "usuario"
                ]
            }
        };
        // crea los colaboradores de DOM, validaciones y acceso; inicia la gestión si no es un test
        entity_ui.initialize(this, 'persona', esTest);
    }

    // métodos de validación de campos
    // cada método lee el campo, comprueba sus restricciones y muestra el resultado mediante this.dom
    // devuelve el primer código de error o true si el campo es correcto; no envía datos al BACK
    // add dni
    /**
     * valida dni para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_dni_validation() {
        if (!(this.validations.min_size('dni', 9))) {
            this.dom.mostrar_error_campo('dni', 'dni_min_size_ko');
            return 'dni_min_size_ko';
        }
        if (!(this.validations.max_size('dni', 9))) {
            this.dom.mostrar_error_campo('dni', 'dni_max_size_ko');
            return 'dni_max_size_ko';
        }
        if (!(this.validations.format('dni', '^[0-9]{8}[A-Z]$'))) {
            this.dom.mostrar_error_campo('dni', 'dni_format_ko');
            return 'dni_format_ko';
        }
        if (!(this.personalize_dni('dni'))) {
            this.dom.mostrar_error_campo('dni', 'dni_personalized_ko');
            return 'dni_personalized_ko';
        }
        this.dom.mostrar_exito_campo('dni');
        return true;
    }
    // add nombre_persona
    /**
     * valida nombre_persona para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_nombre_persona_validation() {
        if (!(this.validations.min_size('nombre_persona', 2))) {
            this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_min_size_ko');
            return 'nombre_persona_min_size_ko';
        }
        if (!(this.validations.max_size('nombre_persona', 45))) {
            this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_max_size_ko');
            return 'nombre_persona_max_size_ko';
        }
        if (!(this.validations.format('nombre_persona', '^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ. -]+$'))) {
            this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_format_ko');
            return 'nombre_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('nombre_persona');
        return true;
    }
    // add apellidos_persona
    /**
     * valida apellidos_persona para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_apellidos_persona_validation() {
        if (!(this.validations.min_size('apellidos_persona', 3))) {
            this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_min_size_ko');
            return 'apellidos_persona_min_size_ko';
        }
        if (!(this.validations.max_size('apellidos_persona', 100))) {
            this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_max_size_ko');
            return 'apellidos_persona_max_size_ko';
        }
        if (!(this.validations.format('apellidos_persona', '^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ. -]+$'))) {
            this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_format_ko');
            return 'apellidos_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('apellidos_persona');
        return true;
    }
    // add fechaNacimiento_persona
    /**
     * valida fechaNacimiento_persona para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_fechaNacimiento_persona_validation() {
        if (!(this.validations.format('fechaNacimiento_persona', '^[0-9]{2}/[0-9]{2}/[0-9]{4}$'))) {
            this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_format_ko');
            return 'fechaNacimiento_persona_format_ko';
        }
        if (!(this.personalize_fechaNacimiento_persona_existente())) {
            this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_personalized_inexistente_ko');
            return 'fechaNacimiento_persona_personalized_inexistente_ko';
        }
        if (!(this.personalize_fechaNacimiento_persona_no_futura())) {
            this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_personalized_futura_ko');
            return 'fechaNacimiento_persona_personalized_futura_ko';
        }
        this.dom.mostrar_exito_campo('fechaNacimiento_persona');
        return true;
    }
    // add direccion_persona
    /**
     * valida direccion_persona para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_direccion_persona_validation() {
        if (!this.validations.min_size('direccion_persona', 10)) {
            this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_min_size_ko');
            return 'direccion_persona_min_size_ko';
        }
        if (!this.validations.max_size('direccion_persona', 200)) {
            this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_max_size_ko');
            return 'direccion_persona_max_size_ko';
        }
        if (!(this.validations.format('direccion_persona', '^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9.; /-]+$'))) {
            this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_format_ko');
            return 'direccion_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('direccion_persona');
        return true;
    }
    // add telefono_persona
    /**
     * valida telefono_persona para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_telefono_persona_validation() {
        if (!(this.validations.min_size('telefono_persona', 9))) {
            this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_min_size_ko');
            return 'telefono_persona_min_size_ko';
        }
        if (!(this.validations.max_size('telefono_persona', 9))) {
            this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_max_size_ko');
            return 'telefono_persona_max_size_ko';
        }
        if (!(this.validations.format('telefono_persona', '^[0-9]{9}$'))) {
            this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_format_ko');
            return 'telefono_persona_format_ko';
        }
        if (!this.personalize_telefono_persona()) {
            this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_personalized_ko');
            return 'telefono_persona_personalized_ko';
        }
        this.dom.mostrar_exito_campo('telefono_persona');
        return true;
    }
    // add email_persona
    /**
     * valida email_persona para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_email_persona_validation() {
        if (!this.validations.min_size('email_persona', 1)) {
            this.dom.mostrar_error_campo('email_persona', 'email_persona_min_size_ko');
            return 'email_persona_min_size_ko';
        }
        if (!(this.validations.max_size('email_persona', 45))) {
            this.dom.mostrar_error_campo('email_persona', 'email_persona_max_size_ko');
            return 'email_persona_max_size_ko';
        }
        if (!(this.validations.format('email_persona', /^[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/.source))) {
            this.dom.mostrar_error_campo('email_persona', 'email_persona_format_ko');
            return 'email_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('email_persona');
        return true;
    }
    // add foto_persona
    /**
     * valida foto_persona para la acción add
     * se conserva para las pruebas; el formulario ADD utiliza nuevo_foto_persona
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_foto_persona_validation() {
        return this.personalize_foto_persona_nombre('foto_persona');
    }
    // add nuevo_foto_persona
    /**
     * valida nuevo_foto_persona para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_nuevo_foto_persona_validation() {
        return this.personalize_nuevo_foto_persona_fichero('nuevo_foto_persona', true);
    }



    // add y EDIT comparten restricciones en los siguientes campos: se reutiliza la validación,
    // no una operación de alta. El formulario EDIT bloquea el DNI y no lo incluye en su submit
    
    // EDIT dni
    /**
     * valida dni para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_dni_validation() {
        return this.ADD_dni_validation();
    }
    // edit nombre_persona
    /**
     * valida nombre_persona para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_nombre_persona_validation() {
        return this.ADD_nombre_persona_validation();
    }
    // edit apellidos_persona
    /**
     * valida apellidos_persona para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_apellidos_persona_validation() {
        return this.ADD_apellidos_persona_validation();
    }
    // edit fechaNacimiento_persona
    /**
     * valida fechaNacimiento_persona para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_fechaNacimiento_persona_validation() {
        return this.ADD_fechaNacimiento_persona_validation();
    }
    // edit direccion_persona
    /**
     * valida direccion_persona para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_direccion_persona_validation() {
        return this.ADD_direccion_persona_validation();
    }
    // edit telefono_persona
    /**
     * valida telefono_persona para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_telefono_persona_validation() {
        return this.ADD_telefono_persona_validation();
    }
    // edit email_persona
    /**
     * valida email_persona para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_email_persona_validation() {
        return this.ADD_email_persona_validation();
    }
    // edit foto_persona
    /**
     * valida foto_persona para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_foto_persona_validation() {
        return this.personalize_foto_persona_nombre('foto_persona');
    }
    // edit nuevo_foto_persona: sin fichero nuevo se conserva la foto actual
    /**
     * valida nuevo_foto_persona para la acción edit
     * permite no seleccionar un fichero para conservar la foto actual
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_nuevo_foto_persona_validation() {
        return this.personalize_nuevo_foto_persona_fichero('nuevo_foto_persona', false);
    }
    // search acepta el campo vacío y no impone tamaños mínimos
    // search dni
    /**
     * valida el criterio de búsqueda de dni
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_dni_validation() {
        if (!(this.validations.max_size('dni', 9))) {
            this.dom.mostrar_error_campo('dni', 'dni_max_size_ko');
            return 'dni_max_size_ko';
        }
        if (!(this.validations.format('dni', '^[0-9]*[A-Z]?$'))) {
            this.dom.mostrar_error_campo('dni', 'dni_format_ko');
            return 'dni_format_ko';
        }
        this.dom.mostrar_exito_campo('dni');
        return true;
    }
    // search nombre_persona
    /**
     * valida el criterio de búsqueda de nombre_persona
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_nombre_persona_validation() {
        if (!(this.validations.max_size('nombre_persona', 45))) {
            this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_max_size_ko');
            return 'nombre_persona_max_size_ko';
        }
        if (!(this.validations.format('nombre_persona', '^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ. -]*$'))) {
            this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_format_ko');
            return 'nombre_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('nombre_persona');
        return true;
    }
    // search apellidos_persona
    /**
     * valida el criterio de búsqueda de apellidos_persona
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_apellidos_persona_validation() {
        if (!(this.validations.max_size('apellidos_persona', 100))) {
            this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_max_size_ko');
            return 'apellidos_persona_max_size_ko';
        }
        if (!(this.validations.format('apellidos_persona', '^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ. -]*$'))) {
            this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_format_ko');
            return 'apellidos_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('apellidos_persona');
        return true;
    }
    // search fechaNacimiento_persona
    /**
     * valida el criterio de búsqueda de fechaNacimiento_persona
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_fechaNacimiento_persona_validation() {
        if (!(this.validations.max_size('fechaNacimiento_persona', 10))) {
            this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_max_size_ko');
            return 'fechaNacimiento_persona_max_size_ko';
        }
        if (!(this.validations.format('fechaNacimiento_persona', '^[0-9/]*$'))) {
            this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_format_ko');
            return 'fechaNacimiento_persona_format_ko';
        }
        if (!this.personalize_fechaNacimiento_persona_busqueda()) {
            this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_personalized_inexistente_ko');
            return 'fechaNacimiento_persona_personalized_inexistente_ko';
        }
        this.dom.mostrar_exito_campo('fechaNacimiento_persona');
        return true;
    }
    // search direccion_persona
    /**
     * valida el criterio de búsqueda de direccion_persona
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_direccion_persona_validation() {
        if (!this.validations.max_size('direccion_persona', 200)) {
            this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_max_size_ko');
            return 'direccion_persona_max_size_ko';
        }
        if (!(this.validations.format('direccion_persona', '^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9.; /-]*$'))) {
            this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_format_ko');
            return 'direccion_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('direccion_persona');
        return true;
    }
    // search telefono_persona
    /**
     * valida el criterio de búsqueda de telefono_persona
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_telefono_persona_validation() {
        if (!(this.validations.max_size('telefono_persona', 9))) {
            this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_max_size_ko');
            return 'telefono_persona_max_size_ko';
        }
        if (!(this.validations.format('telefono_persona', '^[0-9]*$'))) {
            this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_format_ko');
            return 'telefono_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('telefono_persona');
        return true;
    }
    // search email_persona
    /**
     * valida el criterio de búsqueda de email_persona
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_email_persona_validation() {
        if (!(this.validations.max_size('email_persona', 45))) {
            this.dom.mostrar_error_campo('email_persona', 'email_persona_max_size_ko');
            return 'email_persona_max_size_ko';
        }
        if (!(this.validations.format('email_persona', /^[^\s\x00-\x1f\x7f]*$/.source))) {
            this.dom.mostrar_error_campo('email_persona', 'email_persona_format_ko');
            return 'email_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('email_persona');
        return true;
    }
    // search foto_persona
    /**
     * valida el criterio de búsqueda de foto_persona
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_foto_persona_validation() {
        return this.personalize_foto_persona_busqueda('foto_persona');
    }
    // search nuevo_foto_persona
    /**
     * valida el criterio de búsqueda de nuevo_foto_persona
     * se conserva para las pruebas; el campo no aparece en el formulario SEARCH
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_nuevo_foto_persona_validation() {
        return this.personalize_nuevo_foto_persona_fichero('nuevo_foto_persona', false);
    }


    // foto_persona utiliza input, contiene el nombre de la foto almacenada
    // nuevo_foto_persona utiliza file en las tres acciones, en el formulario solo contemplamos
    // add/EDIT
    // valida el nombre guardado en un input: entre 5 y 15 caracteres, incluida la extensión jpg/jpeg
    /**
     * comprueba longitud y formato del nombre de foto almacenado
     * @param {string} id - id del campo o elemento sobre el que se actúa
     * @returns {ResultadoCampo} true si el nombre es correcto o el primer código de error
     */
    personalize_foto_persona_nombre(id) {

        // función local: construye, muestra y devuelve un error sin repetir esas instrucciones
        const error = regla => {
            const codigo = `${id}_${regla}_ko`;
            this.dom.mostrar_error_campo(id, codigo);
            return codigo;
        };
        if (!this.validations.min_size(id, 5)) return error('min_size');
        if (!this.validations.max_size(id, 15)) return error('max_size');
        if (!this.validations.format(id, /^[A-Za-z.]*[A-Za-z][A-Za-z.]*\.jpe?g$/i)) {
            return error('format');
        }
        this.dom.mostrar_exito_campo(id);
        return true;
    }


    // valida el fichero seleccionado: existencia si es obligatorio, nombre, tipo y tamaño
    // obligatorio = true en ADD; false en EDIT permite no sustituir la foto actual
    /**
     * comprueba existencia, nombre, tipo y tamaño del fichero seleccionado
     * @param {string} id - id del campo o elemento sobre el que se actúa
     * @param {boolean} obligatorio - indica si la ausencia de fichero debe producir un error
     * @returns {ResultadoCampo} true si el fichero es correcto o puede omitirse, o el primer código de error
     */
    personalize_nuevo_foto_persona_fichero(id, obligatorio) {
        const error = regla => {
            const codigo = `${id}_${regla}_ko`;
            this.dom.mostrar_error_campo(id, codigo);
            return codigo;
        };
        if (!this.validations.exist_file(id)) {
            if (obligatorio) return error('exist_file');
            this.dom.mostrar_exito_campo(id);
            return true;
        }
        const nombre = this.dom.nombreFichero(id);
        if (nombre.length < 5) return error('min_size');
        if (nombre.length > 15) return error('max_size');
        if (!this.validations.format_name_file(id, /^[A-Za-z.]*[A-Za-z][A-Za-z.]*\.[A-Za-z]+$/)) {
            return error('format_name_file');
        }
        // se exige tanto image/jpeg como la extensión jpg/jpeg
        if (!(this.validations.type_file(id, ['image/jpeg']) &&
            this.validations.format_name_file(id, /\.jpe?g$/i))) {
            return error('type_file');
        }
        // exige 2MiB
        if (!this.validations.max_size_file(id, 2097152)) {
            return error('max_size_file');
        }
        this.dom.mostrar_exito_campo(id);
        return true;
    }
    // search valida un fragmento del nombre: permite vacío y no exige extensión completa ni mínimo
    /**
     * valida un fragmento de nombre de foto permitiendo la búsqueda vacía
     * @param {string} id - id del campo o elemento sobre el que se actúa
     * @returns {ResultadoCampo} true si el criterio es correcto o el primer código de error
     */
    personalize_foto_persona_busqueda(id) {
        if (!this.validations.max_size(id, 15)) {
            const codigo = `${id}_max_size_ko`;
            this.dom.mostrar_error_campo(id, codigo);
            return codigo;
        }
        if (!this.validations.format(id, '^[A-Za-z.]*$')) {
            const codigo = `${id}_format_ko`;
            this.dom.mostrar_error_campo(id, codigo);
            return codigo;
        }
        this.dom.mostrar_exito_campo(id);
        return true;
    }
    // personalized: el formato comprueba los nueve dígitos; esta regla comprueba la numeración española
    /**
     * comprueba que el teléfono empieza por 6, 7, 8 o 9
     * @returns {boolean} true si cumple el criterio de numeración utilizado por la aplicación
     */
    personalize_telefono_persona() {
        return /^[6789]/.test(this.dom.valorCampo('telefono_persona'));
    }
    // search acepta fragmentos y vacío; una fecha completa debe existir en el calendario
    /**
     * permite fragmentos de fecha y comprueba existencia si la fecha está completa
     * @returns {boolean} true si es un fragmento o una fecha completa existente
     */
    personalize_fechaNacimiento_persona_busqueda() {
        const valor = this.dom.valorCampo('fechaNacimiento_persona');
        return !/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(valor)
            || this.personalize_fechaNacimiento_persona_existente();
    }
    // personalized: correspondencia entre los ocho números y la letra del DNI
    /**
     * comprueba la correspondencia entre los ocho números del dni y su letra de control
     * @param {string} id - id del campo o elemento sobre el que se actúa
     * @returns {boolean} true si el formato y la letra de control son correctos
     */
    personalize_dni(id) {
        const dni = this.dom.valorCampo(id);
        if (!/^[0-9]{8}[A-Z]$/.test(dni)) return false;
        // el resto de dividir el número entre 23 indica la posición de su letra de control
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const numero = Number(dni.slice(0, 8));
        return letras[numero % 23] === dni[8];
    }
    // personalized: fecha existente, incluyendo las reglas de años bisiestos
    /**
     * comprueba que día, mes y año formen una fecha real, incluyendo años bisiestos
     * @returns {boolean} true si la fecha existe en el calendario
     */
    personalize_fechaNacimiento_persona_existente() {
        const valor = this.dom.valorCampo('fechaNacimiento_persona');
        if (!/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(valor)) return false;
        const [dia, mes, anio] = valor.split('/').map(Number);
        if (anio < 1 || mes < 1 || mes > 12 || dia < 1) return false;
        const bisiesto = anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0);
        const diasDelMes = [31, bisiesto ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return dia <= diasDelMes[mes - 1];
    }
    // personalized: comparar con el día actual; sin depender de la hora
    /**
     * comprueba que una fecha válida no sea posterior al día actual
     * @returns {boolean} true si la fecha es anterior o igual a hoy
     */
    personalize_fechaNacimiento_persona_no_futura() {
        if (!this.personalize_fechaNacimiento_persona_existente()) return false;
        const valor = this.dom.valorCampo('fechaNacimiento_persona');
        const [dia, mes, anio] = valor.split('/').map(Number);
        const hoy = new Date();
        // compara números aaaammdd para ignorar horas y conservar el orden de las fechas
        const fecha = anio * 10000 + mes * 100 + dia;
        const fechaHoy = hoy.getFullYear() * 10000 + (hoy.getMonth() + 1) * 100 + hoy.getDate();
        return fecha <= fechaHoy;
    }


    // submits: comprueban el conjunto de campos de la acción antes de permitir el envío
    // validateFields llama a ACCION_campo_validation() para cada campo de la lista
    // devuelve true si todos son correctos; si hay fallos, devuelve un objeto con sus códigos
    // estas listas indican qué validar.
    // Los campos a enviar se declaran en send de cada createForm
    // el envío posterior lo coordina entity_ui.write(), que utiliza entity_access para la petición

    // add formulario persona
    /**
     * comprueba todos los campos editables del formulario add
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    ADD_submit_persona() {
        const result = entity_ui.validateFields(this, 'ADD', ['dni', 'nombre_persona', 'apellidos_persona', 'fechaNacimiento_persona', 'direccion_persona', 'telefono_persona', 'email_persona', 'nuevo_foto_persona']);
        return result;
    }
    // edit formulario persona: el DNI bloqueado se envía como identificador, pero no se revalida aquí
    /**
     * comprueba todos los campos editables del formulario edit
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    EDIT_submit_persona() {
        const result = entity_ui.validateFields(this, 'EDIT', ['nombre_persona', 'apellidos_persona', 'fechaNacimiento_persona', 'direccion_persona', 'telefono_persona', 'email_persona', 'nuevo_foto_persona']);
        return result;
    }
    // search formulario persona
    /**
     * comprueba todos los campos editables del formulario search
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    SEARCH_submit_persona() {
        const result = entity_ui.validateFields(this, 'SEARCH', ['dni', 'nombre_persona', 'apellidos_persona', 'fechaNacimiento_persona', 'direccion_persona', 'telefono_persona', 'email_persona', 'foto_persona']);
        return result;
    }

    // devuelve la estructura HTML común a ADD, EDIT, SEARCH, DELETE y SHOWCURRENT
    // no inserta el HTML; las clases DOM lo montan y cada createForm configura su acción
    // et2-field aplica el CSS añadido por aplicarEstilos() de entity_dom_fields
    // for vincula etiqueta y campo; class="label_..." permite traducir la etiqueta
    // aria-describedby relaciona el campo con su error y aria-live permite anunciar sus cambios
    // en add el dni usa un input con datalist; validateFields comprueba la pertenencia al catálogo
    /**
     * devuelve el html común que cada acción adapta antes de mostrar el formulario
     * @returns {string} plantilla html sin insertar todavía en el documento
     */
    manual_form_creation() {
        return `
            <form id="form_iu" method="POST" enctype="multipart/form-data" novalidate>
                <div class="et2-field">
                    <label id="label_dni" class="label_dni" for="dni"></label>
                    <input id="dni" name="dni" aria-describedby="span_error_dni" type="text" list="opciones_dni">
                    <datalist id="opciones_dni"></datalist>
                    <span id="span_error_dni" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_dni"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_nombre_persona" class="label_nombre_persona" for="nombre_persona"></label>
                    <input id="nombre_persona" name="nombre_persona" aria-describedby="span_error_nombre_persona" type="text">
                    <span id="span_error_nombre_persona" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_nombre_persona"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_apellidos_persona" class="label_apellidos_persona" for="apellidos_persona"></label>
                    <input id="apellidos_persona" name="apellidos_persona" aria-describedby="span_error_apellidos_persona" type="text">
                    <span id="span_error_apellidos_persona" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_apellidos_persona"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_fechaNacimiento_persona" class="label_fechaNacimiento_persona" for="fechaNacimiento_persona"></label>
                    <input id="fechaNacimiento_persona" name="fechaNacimiento_persona" aria-describedby="span_error_fechaNacimiento_persona" type="text">
                    <span id="span_error_fechaNacimiento_persona" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_fechaNacimiento_persona"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_direccion_persona" class="label_direccion_persona" for="direccion_persona"></label>
                    <textarea id="direccion_persona" name="direccion_persona" aria-describedby="span_error_direccion_persona" rows="4"></textarea>
                    <span id="span_error_direccion_persona" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_direccion_persona"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_telefono_persona" class="label_telefono_persona" for="telefono_persona"></label>
                    <input id="telefono_persona" name="telefono_persona" aria-describedby="span_error_telefono_persona" type="text" inputmode="tel">
                    <span id="span_error_telefono_persona" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_telefono_persona"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_email_persona" class="label_email_persona" for="email_persona"></label>
                    <input id="email_persona" name="email_persona" aria-describedby="span_error_email_persona" type="text">
                    <span id="span_error_email_persona" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_email_persona"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_foto_persona" class="label_foto_persona" for="foto_persona"></label>
                    <input id="foto_persona" name="foto_persona" aria-describedby="span_error_foto_persona" type="text">
                    <a id="link_foto_persona" target="_blank" rel="noopener" hidden><img src="./iconos/FILE.png" class="action_FILE" alt=""></a>
                    <span id="span_error_foto_persona" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_foto_persona"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_nuevo_foto_persona" class="label_nuevo_foto_persona" for="nuevo_foto_persona"></label>
                    <input id="nuevo_foto_persona" name="nuevo_foto_persona" aria-describedby="span_error_nuevo_foto_persona" type="file" accept=".jpg,.jpeg,image/jpeg">
                    <span id="span_error_nuevo_foto_persona" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_nuevo_foto_persona"></a></span>
                </div>
                <p id="et2_form_note" role="status" hidden></p>
                <div class="et2-form-actions"></div>
            </form>`;
    }

    // prepara datos para rellenar el formulario; no valida, no muestra ni envía nada
    // normaliza los valores del BACK y convierte la fecha de aaaa-mm-dd a dd/mm/aaaa
    // se reutiliza en los createForm para no repetir esa adaptación. Con fila = {} queda vacío
    /**
     * normaliza los valores de una fila para rellenar el formulario de la entidad
     * @param {RegistroEntidad} fila - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {RegistroEntidad} valores de los campos y sus etiquetas de referencia
     */
    valoresFormulario(fila) {
        const values = entity_access.normalizeRow(this.config, fila);
        values.fechaNacimiento_persona = entity_ui.dateForForm(values.fechaNacimiento_persona);
        return values;
    }

    // creación de lso FORMULARIOS: combinan el HTML común con los valores y la política de cada acción
    // hidden: campos ocultos; readOnly: campos bloqueados; send: datos que se enviarán al BACK
    // submit habilita la operación; note identifica un mensaje traducible de ayuda o confirmación
    // openForm devuelve el contexto del formulario; finishForm termina su preparación y activa la interfaz
    // add persona: normalmente vacío, sin nombre de foto anterior y con una nueva foto obligatoria
    /**
     * prepara el formulario de alta con sus campos y referencias
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_ADD(fila = {}) {
        const context = entity_ui.openForm(this, 'ADD', this.valoresFormulario(fila), {
            hidden: ['foto_persona'],
            readOnly: [],
            send: ['dni', 'nombre_persona', 'apellidos_persona', 'fechaNacimiento_persona', 'direccion_persona', 'telefono_persona', 'email_persona', 'nuevo_foto_persona'],
            submit: true,
            note: 'ui_persona_existing_user'
        });
        if (!context) return false; // no continúa si no se pudo abrir el formulario
        this.prepararFoto(context, 'ADD');
        // espera las sugerencias de usuarios antes de habilitar el formulario
        await this.dom.rellenarReferencias(this, context, ['dni']);
        return entity_ui.finishForm(this, context);
    }

    // edit persona: rellena la fila elegida, bloquea DNI y foto actual; permite subir otra foto
    /**
     * rellena el formulario de edición y bloquea las claves que no se modifican
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_EDIT(fila = {}) {
        const context = entity_ui.openForm(this, 'EDIT', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['dni', 'foto_persona'],
            send: ['dni', 'nombre_persona', 'apellidos_persona', 'fechaNacimiento_persona', 'direccion_persona', 'telefono_persona', 'email_persona', 'foto_persona', 'nuevo_foto_persona'],
            submit: true
        });
        if (!context) return false;
        this.prepararFoto(context, 'EDIT');
        return entity_ui.finishForm(this, context);
    }

    // search persona: permite introducir filtros; busca por el nombre de la foto, no por un fichero
    /**
     * prepara el formulario de búsqueda con criterios parciales o vacíos
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_SEARCH(fila = {}) {
        const context = entity_ui.openForm(this, 'SEARCH', this.valoresFormulario(fila), {
            hidden: ['nuevo_foto_persona'],
            readOnly: [],
            send: ['dni', 'nombre_persona', 'apellidos_persona', 'fechaNacimiento_persona', 'direccion_persona', 'telefono_persona', 'email_persona', 'foto_persona'],
            submit: true
        });
        if (!context) return false;
        this.prepararFoto(context, 'SEARCH');
        return entity_ui.finishForm(this, context);
    }

    // delete persona: muestra la fila bloqueada para confirmarla y envía únicamente su DNI
    /**
     * muestra los datos bloqueados y prepara la confirmación de borrado
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_DELETE(fila = {}) {
        const context = entity_ui.openForm(this, 'DELETE', this.valoresFormulario(fila), {
            hidden: ['nuevo_foto_persona'],
            readOnly: ['dni', 'nombre_persona', 'apellidos_persona', 'fechaNacimiento_persona', 'direccion_persona', 'telefono_persona', 'email_persona', 'foto_persona', 'nuevo_foto_persona'],
            send: ['dni'],
            submit: true,
            note: 'ui_delete_confirm'
        });
        if (!context) return false;
        this.prepararFoto(context, 'DELETE');
        return entity_ui.finishForm(this, context);
    }

    // showcurrent persona: muestra los datos bloqueados y no ofrece una operación de envío
    /**
     * muestra los datos bloqueados sin ofrecer una operación de envío
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_SHOWCURRENT(fila = {}) {
        const context = entity_ui.openForm(this, 'SHOWCURRENT', this.valoresFormulario(fila), {
            hidden: ['nuevo_foto_persona'],
            readOnly: ['dni', 'nombre_persona', 'apellidos_persona', 'fechaNacimiento_persona', 'direccion_persona', 'telefono_persona', 'email_persona', 'foto_persona', 'nuevo_foto_persona'],
            send: [],
            submit: false
        });
        if (!context) return false;
        this.prepararFoto(context, 'SHOWCURRENT');
        return entity_ui.finishForm(this, context);
    }

    // decide cuándo ofrecer el enlace a la foto guardada; this.dom construye y modifica el enlace 
    // El enlace será visible cuando se cumplan las dos condiciones:
        // 1 la acción sea EDIT, DELETE o SHOWCURRENT
        // 2 el registro tenga un nombre de foto guardado

    // delega en la clase DOM la preparación del enlace; utiliza la dirección base y el nombre del archivo para construir su URL, 
    // y lo muestra u oculta según visible
    /**
     * configura el enlace a la foto existente según la acción y el valor almacenado
     * @param {ContextoFormulario} context - estado del formulario al que pertenece la operación
     * @param {AccionFormulario} action - acción que se está preparando o ejecutando
     * @returns {void} no devuelve un valor
     */
    prepararFoto(context, action) {
        const visible = ['EDIT', 'DELETE', 'SHOWCURRENT'].includes(action) && !!context.values.foto_persona;
        this.dom.configurarEnlaceFichero(context, 'link_foto_persona', this.config.fileBase, context.values.foto_persona, visible);
    }

    // operaciones: delegan la validación previa, petición al BACK y tratamiento de la respuesta
    // search recupera y presenta datos; las operaciones de escritura refrescan la tabla si tienen éxito
    /**
     * solicita el alta mediante el coordinador compartido
     * @returns {Promise<boolean>} resultado de la operación solicitada
     */
    ADD() {
        return entity_ui.write(this, 'ADD');
    }

    /**
     * solicita la edición mediante el coordinador compartido
     * @returns {Promise<boolean>} resultado de la operación solicitada
     */
    EDIT() {
        return entity_ui.write(this, 'EDIT');
    }

    /**
     * solicita la búsqueda y presentación de datos de la entidad
     * @returns {Promise<boolean>} resultado de la operación solicitada
     */
    SEARCH() {
        return entity_ui.search(this);
    }

    /**
     * solicita el borrado mediante el coordinador compartido
     * @returns {Promise<boolean>} resultado de la operación solicitada
     */
    DELETE() {
        return entity_ui.write(this, 'DELETE');
    }

    // para borrar se comprueba la clave del registro original, sin revalidar los demás datos
    // comprueba que estamos en el formulario DELETE correspondiente y que el DNI no está vacío
    /**
     * comprueba las claves originales necesarias para confirmar el borrado
     * @returns {ResultadoSubmit} true si las claves están disponibles o un objeto con los errores
     */
    DELETE_submit_persona() {
        return entity_ui.validateKeys(this);
    }

    // consultar el detalle no modifica datos ni necesita validar campos editables
    /**
     * confirma la consulta de detalle sin validar ni enviar datos editables
     * @returns {boolean} true porque la acción solo presenta los datos
     */
    SHOWCURRENT_submit_persona() {
        return true;
    }

    // tabla: delega su construcción en el coordinador y la clase DOM
    /**
     * delega la presentación de las filas en el coordinador de tablas
     * @param {RegistroEntidad[]} datos - filas recibidas del back que se quieren presentar
     * @returns {void} no devuelve un valor
     */
    crearTablaDatos(datos) {
        return entity_ui.renderTable(this, datos);
    }
    // adapta los valores especiales de la tabla: fecha legible y enlace para abrir la foto
    /**
     * adapta la presentación de un atributo especial sin modificar su valor original
     * @param {string} atributo - nombre del atributo cuya presentación o visibilidad se adapta
     * @param {*} valor - valor del atributo recibido para su presentación
     * @returns {string|number|Node} texto, identificador o enlace preparado para mostrar
     */
    mostrarcambioatributo(atributo, valor) {
        if (atributo === 'fechaNacimiento_persona') return entity_ui.dateForForm(valor);
        if (atributo === 'foto_persona' && valor) {
            return this.dom.crearEnlaceFichero(this.config.fileBase, valor);
        }
        return valor ?? '';
    }
}
