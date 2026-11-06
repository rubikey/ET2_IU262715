/**
 * gestiona usuarios y roles con tratamiento separado de la contraseña
 * @extends {AbstractEntidad}
 */
class usuario extends AbstractEntidad {
    /**
     * configura la entidad usuario y prepara su gestión fuera del modo test
     * @param {string|null} [esTest=null] - con 'test' prepara la entidad sin abrir la gestión ni consultar el back
     */
    constructor(esTest = null) {
        super();
        // configuración propia de esta entidad. Core y Base no se modifican
        this.config = {
            "special": ["id_rol"],
            "columnLabels": {"id_rol": "ui_role"},
            "sensitive": ["contrasena"],
            "keys": [
                "dni"
            ],
            "columns": [
                "dni",
                "usuario",
                "id_rol"
            ],
            "references": {
                "id_rol": [
                    "rol",
                    "id_rol",
                    "rol_name"
                ]
            },
            "fields": [
                "dni",
                "usuario",
                "contrasena",
                "id_rol"
            ],
            "components": {
                "dni": "input",
                "usuario": "input",
                "contrasena": "input",
                "id_rol": "select"
            }
        };
        entity_ui.initialize(this, 'usuario', esTest);
    }
    // devuelve el primer código de error o true si el campo es correcto
    // add dni
    /**
     * valida dni para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_dni_validation() {
        if (!this.validations.min_size('dni', 9)) {
            this.dom.mostrar_error_campo('dni', 'dni_min_size_ko');
            return 'dni_min_size_ko';
        }
        if (!this.validations.max_size('dni', 9)) {
            this.dom.mostrar_error_campo('dni', 'dni_max_size_ko');
            return 'dni_max_size_ko';
        }
        if (!this.validations.format('dni', /^[0-9]{8}[A-Z]$/)) {
            this.dom.mostrar_error_campo('dni', 'dni_format_ko');
            return 'dni_format_ko';
        }
        if (!this.personalize_dni('dni')) {
            this.dom.mostrar_error_campo('dni', 'dni_personalized_ko');
            return 'dni_personalized_ko';
        }
        this.dom.mostrar_exito_campo('dni');
        return true;
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
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const numero = Number(dni.slice(0, 8));
        return letras[numero % 23] === dni[8];
    }
    // add usuario
    /**
     * valida usuario para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_usuario_validation() {
        if (!this.validations.min_size('usuario', 5)) {
            this.dom.mostrar_error_campo('usuario', 'usuario_min_size_ko');
            return 'usuario_min_size_ko';
        }
        if (!this.validations.max_size('usuario', 45)) {
            this.dom.mostrar_error_campo('usuario', 'usuario_max_size_ko');
            return 'usuario_max_size_ko';
        }
        if (!this.validations.format('usuario', /^[A-Za-z]+$/)) {
            this.dom.mostrar_error_campo('usuario', 'usuario_format_ko');
            return 'usuario_format_ko';
        }
        this.dom.mostrar_exito_campo('usuario');
        return true;
    }
    // add contrasena
    /**
     * valida contrasena para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_contrasena_validation() {
        if (!this.validations.min_size('contrasena', 8)) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_min_size_ko');
            return 'contrasena_min_size_ko';
        }
        if (!this.validations.max_size('contrasena', 45)) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_max_size_ko');
            return 'contrasena_max_size_ko';
        }
        if (!this.validations.format('contrasena', /^[A-Za-z]+$/)) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_format_ko');
            return 'contrasena_format_ko';
        }
        this.dom.mostrar_exito_campo('contrasena');
        return true;
    }
    // add id_rol
    /**
     * valida id_rol para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_id_rol_validation() {
        if (!this.validations.min_size('id_rol', 1)) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_min_size_ko');
            return 'id_rol_min_size_ko';
        }
        if (!this.validations.max_size('id_rol', 11)) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_max_size_ko');
            return 'id_rol_max_size_ko';
        }
        if (!this.validations.format('id_rol', /^[0-9]+$/)) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_format_ko');
            return 'id_rol_format_ko';
        }
        this.dom.mostrar_exito_campo('id_rol');
        return true;
    }
    // edit comparte las restricciones de ADD, incluidos los identificadores
    // edit dni
    /**
     * valida dni para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_dni_validation() {
        return this.ADD_dni_validation();
    }
    // edit usuario
    /**
     * valida usuario para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_usuario_validation() {
        return this.ADD_usuario_validation();
    }
    // edit contrasena
    /**
     * valida contrasena para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_contrasena_validation() {
        // valida la contraseña precargada o la nueva introducida al editar
        return this.ADD_contrasena_validation();
    }
    // edit id_rol
    /**
     * valida id_rol para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_id_rol_validation() {
        return this.ADD_id_rol_validation();
    }
    // search permite fragmentos y campos vacíos; no exige tamaño mínimo
    // search dni
    /**
     * valida el criterio de búsqueda de dni
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_dni_validation() {
        if (!this.validations.max_size('dni', 9)) {
            this.dom.mostrar_error_campo('dni', 'dni_max_size_ko');
            return 'dni_max_size_ko';
        }
        if (!this.validations.format('dni', /^[0-9]*[A-Z]?$/)) {
            this.dom.mostrar_error_campo('dni', 'dni_format_ko');
            return 'dni_format_ko';
        }
        this.dom.mostrar_exito_campo('dni');
        return true;
    }
    // search usuario
    /**
     * valida el criterio de búsqueda de usuario
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_usuario_validation() {
        if (!this.validations.max_size('usuario', 45)) {
            this.dom.mostrar_error_campo('usuario', 'usuario_max_size_ko');
            return 'usuario_max_size_ko';
        }
        if (!this.validations.format('usuario', /^[A-Za-z]*$/)) {
            this.dom.mostrar_error_campo('usuario', 'usuario_format_ko');
            return 'usuario_format_ko';
        }
        this.dom.mostrar_exito_campo('usuario');
        return true;
    }
    // search contrasena
    /**
     * valida el criterio de búsqueda de contrasena
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_contrasena_validation() {
        if (!this.validations.max_size('contrasena', 45)) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_max_size_ko');
            return 'contrasena_max_size_ko';
        }
        if (!this.validations.format('contrasena', /^[A-Za-z]*$/)) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_format_ko');
            return 'contrasena_format_ko';
        }
        this.dom.mostrar_exito_campo('contrasena');
        return true;
    }
    // search id_rol
    /**
     * valida el criterio de búsqueda de id_rol
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_id_rol_validation() {
        const valor = this.dom.valorCampo('id_rol');
        if (!this.validations.max_size('id_rol', 11)) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_max_size_ko');
            return 'id_rol_max_size_ko';
        }
        // el vacío permite todos los roles; los demás valores son IDs completos
        if (valor !== '' && !this.validations.format('id_rol', /^[0-9]+$/)) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_format_ko');
            return 'id_rol_format_ko';
        }
        this.dom.mostrar_exito_campo('id_rol');
        return true;
    }
    // add formulario usuario
    /**
     * comprueba todos los campos editables del formulario add
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    ADD_submit_usuario() {
        const result = entity_ui.validateFields(this, 'ADD', ['dni', 'usuario', 'contrasena', 'id_rol']);
        return result;
    }
    // edit formulario usuario
    /**
     * comprueba todos los campos editables del formulario edit
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    EDIT_submit_usuario() {
        const result = entity_ui.validateFields(this, 'EDIT', ['usuario', 'contrasena', 'id_rol']);
        return result;
    }
    // search formulario usuario
    /**
     * comprueba todos los campos editables del formulario search
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    SEARCH_submit_usuario() {
        const result = entity_ui.validateFields(this, 'SEARCH', ['dni', 'usuario', 'id_rol']);
        return result;
    }

    // html del formulario de usuario. Cada acción lo adapta en createForm_ACCION
    /**
     * devuelve el html común que cada acción adapta antes de mostrar el formulario
     * @returns {string} plantilla html sin insertar todavía en el documento
     */
    manual_form_creation() {
        return `
            <form id="form_iu" method="POST" enctype="multipart/form-data" novalidate>
                <div class="et2-field">
                    <label id="label_dni" class="label_dni" for="dni"></label>
                    <input id="dni" name="dni" aria-describedby="span_error_dni" type="text">
                    <span id="span_error_dni" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_dni"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_usuario" class="label_usuario" for="usuario"></label>
                    <input id="usuario" name="usuario" aria-describedby="span_error_usuario" type="text">
                    <span id="span_error_usuario" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_usuario"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_contrasena" class="label_contrasena" for="contrasena"></label>
                    <input id="contrasena" name="contrasena" aria-describedby="span_error_contrasena" type="password" autocomplete="new-password">
                    <span id="span_error_contrasena" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_contrasena"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_id_rol" class="ui_role" for="id_rol"></label>
                    <select id="id_rol" name="id_rol" aria-describedby="span_error_id_rol"><option value="" class="ui_select"></option></select>
                    <span id="span_error_id_rol" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_id_rol"></a></span>
                </div>
                <p id="et2_form_note" role="status" hidden></p>
                <div class="et2-form-actions"></div>
            </form>`;
    }

    /**
     * normaliza los valores de una fila para rellenar el formulario de la entidad
     * @param {RegistroEntidad} fila - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {RegistroEntidad} valores de los campos y sus etiquetas de referencia
     */
    valoresFormulario(fila) {
        const values = entity_access.normalizeRow(this.config, fila);
        return values;
    }

    // add usuario
    /**
     * prepara el formulario de alta con sus campos y referencias
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_ADD(fila = {}) {
        const context = entity_ui.openForm(this, 'ADD', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: [],
            send: ['dni', 'usuario', 'contrasena', 'id_rol'],
            submit: true
        });
        if (!context) return false;
        await this.dom.rellenarReferencias(this, context, ['id_rol']);
        return entity_ui.finishForm(this, context);
    }

    // edit usuario
    /**
     * rellena el formulario de edición y bloquea las claves que no se modifican
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_EDIT(fila = {}) {
        const context = entity_ui.openForm(this, 'EDIT', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['dni'],
            send: ['dni', 'usuario', 'contrasena', 'id_rol'],
            submit: true,
            note: 'ui_password_edit'
        });
        if (!context) return false;
        // carga la contraseña solo para esta edición; el input password la muestra enmascarada
        await Promise.all([
            this.dom.rellenarReferencias(this, context, ['id_rol']),
            this.cargarContrasenaEdicion(context)
        ]);
        if (context.referenceError) return false;
        return entity_ui.finishForm(this, context);
    }

    // recupera la clave del registro elegido sin incorporarla a la tabla ni a la caché de referencias
    /**
     * recupera la contraseña del usuario elegido y la coloca en el input enmascarado
     * no incorpora la contraseña a la tabla ni a la caché de referencias
     * @param {ContextoFormulario} context - estado del formulario al que pertenece la operación
     * @returns {Promise<boolean>} true si se carga; false si falla y debe bloquearse la edición
     */
    async cargarContrasenaEdicion(context) {
        context.loading++;
        entity_ui.updateSubmit(context);
        try {
            if (!entity_ui.current(this, context)) return false;
            if (!context.values.dni) throw new Error('ui_form_invalid');
            const filtros = new FormData();
            filtros.set('dni', context.values.dni);
            const respuesta = await this.access_functions.peticionBackGeneral(filtros, 'usuario', 'SEARCH');
            if (!entity_ui.current(this, context)) return false;
            if (respuesta.ok !== true && !['RECORDSET_DATOS', 'RECORDSET_VACIO'].includes(respuesta.code)) {
                throw new Error(respuesta.code || 'ui_error');
            }
            if (!Array.isArray(respuesta.resource)) throw new Error('ui_invalid_response');
            const fila = respuesta.resource.find(registro =>
                entity_access.scalar(entity_access.find(registro, 'dni'), 'dni') === context.values.dni);
            const valor = fila && entity_access.find(fila, 'contrasena');
            if (valor == null) throw new Error('ui_password_unavailable');
            const contrasena = entity_access.scalar(valor, 'contrasena');
            if (!contrasena) throw new Error('ui_password_unavailable');
            this.dom.fillElementValue(this.dom.obtenerCampo('contrasena', context), contrasena);
            return true;
        } catch (error) {
            if (entity_ui.current(this, context)) {
                context.referenceError = true;
                this.dom.abrirModalError(error.message);
            }
            return false;
        } finally {
            context.loading--;
            if (entity_ui.current(this, context)) entity_ui.updateSubmit(context);
        }
    }

    // search usuario
    /**
     * prepara el formulario de búsqueda con criterios parciales o vacíos
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_SEARCH(fila = {}) {
        const context = entity_ui.openForm(this, 'SEARCH', this.valoresFormulario(fila), {
            hidden: ['contrasena'],
            readOnly: [],
            send: ['dni', 'usuario', 'id_rol'],
            submit: true
        });
        if (!context) return false;
        await this.dom.rellenarReferencias(this, context, ['id_rol']);
        return entity_ui.finishForm(this, context);
    }

    // delete usuario
    /**
     * muestra los datos bloqueados y prepara la confirmación de borrado
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_DELETE(fila = {}) {
        const context = entity_ui.openForm(this, 'DELETE', this.valoresFormulario(fila), {
            hidden: ['contrasena'],
            readOnly: ['dni', 'usuario', 'contrasena', 'id_rol'],
            send: ['dni'],
            submit: true,
            note: 'ui_delete_confirm'
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    // showcurrent usuario
    /**
     * muestra los datos bloqueados sin ofrecer una operación de envío
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_SHOWCURRENT(fila = {}) {
        const context = entity_ui.openForm(this, 'SHOWCURRENT', this.valoresFormulario(fila), {
            hidden: ['contrasena'],
            readOnly: ['dni', 'usuario', 'contrasena', 'id_rol'],
            send: [],
            submit: false
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

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

    /**
     * comprueba las claves originales necesarias para confirmar el borrado
     * @returns {ResultadoSubmit} true si las claves están disponibles o un objeto con los errores
     */
    DELETE_submit_usuario() {
        return entity_ui.validateKeys(this);
    }

    /**
     * confirma la consulta de detalle sin validar ni enviar datos editables
     * @returns {boolean} true porque la acción solo presenta los datos
     */
    SHOWCURRENT_submit_usuario() {
        return true;
    }

    /**
     * delega la presentación de las filas en el coordinador de tablas
     * @param {RegistroEntidad[]} datos - filas recibidas del back que se quieren presentar
     * @returns {void} no devuelve un valor
     */
    crearTablaDatos(datos) {
        return entity_ui.renderTable(this, datos);
    }
    /**
     * adapta la presentación de un atributo especial sin modificar su valor original
     * @param {string} atributo - nombre del atributo cuya presentación o visibilidad se adapta
     * @param {*} valor - valor del atributo recibido para su presentación
     * @returns {string|number|Node} texto, identificador o enlace preparado para mostrar
     */
    mostrarcambioatributo(atributo, valor) {
        return this.referenceLabels?.[atributo]?.get(String(valor)) || valor || '';
    }
}
