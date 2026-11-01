class persona extends AbstractEntidad {
    // prepara la entidad al instanciarla. Con esTest = 'test' se evita abrir la gestión
    // y consultar el BACK al arrancar; las reglas de validación son las mismas
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
            // columnas visibles inicialmente; el usuario puede cambiar la selección
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
    ADD_foto_persona_validation() {
        return this.personalize_foto_persona_nombre('foto_persona');
    }
    // add nuevo_foto_persona
    ADD_nuevo_foto_persona_validation() {
        return this.personalize_nuevo_foto_persona_fichero('nuevo_foto_persona', true);
    }



    // add y EDIT comparten restricciones en los siguientes campos: se reutiliza la validación,
    // no una operación de alta. El formulario EDIT bloquea el DNI y no lo incluye en su submit
    // edit dni
    EDIT_dni_validation() {
        return this.ADD_dni_validation();
    }
    // edit nombre_persona
    EDIT_nombre_persona_validation() {
        return this.ADD_nombre_persona_validation();
    }
    // edit apellidos_persona
    EDIT_apellidos_persona_validation() {
        return this.ADD_apellidos_persona_validation();
    }
    // edit fechaNacimiento_persona
    EDIT_fechaNacimiento_persona_validation() {
        return this.ADD_fechaNacimiento_persona_validation();
    }
    // edit direccion_persona
    EDIT_direccion_persona_validation() {
        return this.ADD_direccion_persona_validation();
    }
    // edit telefono_persona
    EDIT_telefono_persona_validation() {
        return this.ADD_telefono_persona_validation();
    }
    // edit email_persona
    EDIT_email_persona_validation() {
        return this.ADD_email_persona_validation();
    }
    // edit foto_persona
    EDIT_foto_persona_validation() {
        return this.personalize_foto_persona_nombre('foto_persona');
    }
    // edit nuevo_foto_persona: sin fichero nuevo se conserva la foto actual
    EDIT_nuevo_foto_persona_validation() {
        return this.personalize_nuevo_foto_persona_fichero('nuevo_foto_persona', false);
    }
    // search acepta el campo vacío y no impone tamaños mínimos
    // search dni
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
    SEARCH_foto_persona_validation() {
        return this.personalize_foto_persona_busqueda('foto_persona');
    }
    // search nuevo_foto_persona
    SEARCH_nuevo_foto_persona_validation() {
        return this.personalize_nuevo_foto_persona_fichero('nuevo_foto_persona', false);
    }


    // foto_persona utiliza input, contiene el nombre de la foto almacenada
    // nuevo_foto_persona utiliza file en las tres acciones, en el formulario solo contemplamos
    // add/EDIT
    // valida el nombre guardado en un input: entre 5 y 15 caracteres, incluida la extensión jpg/jpeg
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
    personalize_telefono_persona() {
        return /^[6789]/.test(this.dom.valorCampo('telefono_persona'));
    }
    // search acepta fragmentos y vacío; una fecha completa debe existir en el calendario
    personalize_fechaNacimiento_persona_busqueda() {
        const valor = this.dom.valorCampo('fechaNacimiento_persona');
        return !/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(valor)
            || this.personalize_fechaNacimiento_persona_existente();
    }
    // personalized: correspondencia entre los ocho números y la letra del DNI
    personalize_dni(id) {
        const dni = this.dom.valorCampo(id);
        if (!/^[0-9]{8}[A-Z]$/.test(dni)) return false;
        // el resto de dividir el número entre 23 indica la posición de su letra de control
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const numero = Number(dni.slice(0, 8));
        return letras[numero % 23] === dni[8];
    }
    // personalized: fecha existente, incluyendo las reglas de años bisiestos
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
    // el envío posterior lo coordina entity_ui.run(), que utiliza entity_access para la petición

    // add formulario persona
    ADD_submit_persona() {
        const result = entity_ui.validateFields(this, 'ADD', ['dni', 'nombre_persona', 'apellidos_persona', 'fechaNacimiento_persona', 'direccion_persona', 'telefono_persona', 'email_persona', 'nuevo_foto_persona']);
        return result;
    }
    // edit formulario persona: el DNI bloqueado se envía como identificador, pero no se revalida aquí
    EDIT_submit_persona() {
        const result = entity_ui.validateFields(this, 'EDIT', ['nombre_persona', 'apellidos_persona', 'fechaNacimiento_persona', 'direccion_persona', 'telefono_persona', 'email_persona', 'nuevo_foto_persona']);
        return result;
    }
    // search formulario persona
    SEARCH_submit_persona() {
        const result = entity_ui.validateFields(this, 'SEARCH', ['dni', 'nombre_persona', 'apellidos_persona', 'fechaNacimiento_persona', 'direccion_persona', 'telefono_persona', 'email_persona', 'foto_persona']);
        return result;
    }

    // devuelve la estructura HTML común a ADD, EDIT, SEARCH, DELETE y SHOWCURRENT
    // no inserta el HTML; las clases DOM lo montan y cada createForm configura su acción
    // et2-field aplica el CSS añadido por aplicarEstilos() de entity_dom_fields
    // for vincula etiqueta y campo; class="label_..." permite traducir la etiqueta
    // aria-describedby relaciona el campo con su error y aria-live permite anunciar sus cambios
    // el datalist sugiere DNI de usuarios existentes; la pertenencia se comprueba en validateFields
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
        // espera a cargar las sugerencias de usuarios antes de dejar listo el formulario
        await this.dom.rellenarReferencias(this, context, ['dni']);
        return entity_ui.finishForm(this, context);
    }

    // edit persona: rellena la fila elegida, bloquea DNI y foto actual; permite subir otra foto
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
    prepararFoto(context, action) {
        const visible = ['EDIT', 'DELETE', 'SHOWCURRENT'].includes(action) && !!context.values.foto_persona;
        this.dom.configurarEnlaceFichero(context, 'link_foto_persona', this.config.fileBase, context.values.foto_persona, visible);
    }

    // operaciones: delegan la validación previa, petición al BACK y tratamiento de la respuesta
    // search recupera y presenta datos; las operaciones de escritura refrescan la tabla si tienen éxito
    ADD() {
        return entity_ui.run(this, 'ADD');
    }

    EDIT() {
        return entity_ui.run(this, 'EDIT');
    }

    SEARCH() {
        return entity_ui.run(this, 'SEARCH');
    }

    DELETE() {
        return entity_ui.run(this, 'DELETE');
    }

    // para borrar se comprueba la clave del registro original, sin revalidar los demás datos
    // comprueba que estamos en el formulario DELETE correspondiente y que el DNI no está vacío
    DELETE_submit_persona() {
        return entity_ui.validateKeys(this);
    }

    // consultar el detalle no modifica datos ni necesita validar campos editables
    SHOWCURRENT_submit_persona() {
        return true;
    }

    // tabla: delega su construcción en el coordinador y la clase DOM
    crearTablaDatos(datos) {
        return entity_ui.renderTable(this, datos);
    }
    // alterna la visibilidad de una columna elegida por el usuario
    modificarcolumnasamostrar(atributo) {
        return entity_ui.toggleColumn(this, atributo);
    }
    // adapta los valores especiales de la tabla: fecha legible y enlace para abrir la foto
    mostrarcambioatributo(atributo, valor) {
        if (atributo === 'fechaNacimiento_persona') return entity_ui.dateForForm(valor);
        if (atributo === 'foto_persona' && valor) {
            return this.dom.crearEnlaceFichero(this.config.fileBase, valor);
        }
        return valor ?? '';
    }
    // mantiene el punto de entrada de presentación especial reutilizando la misma adaptación
    cambiarmostrarespecial(atributo, valor) {
        return this.mostrarcambioatributo(atributo, valor);
    }
}
