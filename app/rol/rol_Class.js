/**
 * gestiona el catálogo de roles y sus formularios y validaciones
 * @extends {AbstractEntidad}
 */
class rol extends AbstractEntidad {
    /**
     * configura la entidad rol y prepara su gestión fuera del modo test
     * @param {string|null} [esTest=null] - con 'test' prepara la entidad sin abrir la gestión ni consultar el back
     */
    constructor(esTest = null) {
        super();
        // Configuración propia de esta entidad. Core y Base no se modifican.
        this.config = {
            "keys": [
                "id_rol"
            ],
            "auto": [
                "id_rol"
            ],
            "columns": [
                "id_rol",
                "rol_name",
                "rol_description"
            ],
            "fields": [
                "id_rol",
                "rol_name",
                "rol_description"
            ],
            "components": {
                "id_rol": "input",
                "rol_name": "input",
                "rol_description": "textarea"
            }
        };
        entity_ui.initialize(this, 'rol', esTest);
    }
    // Devuelve el primer código de error o true si el campo es correcto.
    // ADD id_rol
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
    // ADD rol_name
    /**
     * valida rol_name para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_rol_name_validation() {
        if (!this.validations.min_size('rol_name', 5)) {
            this.dom.mostrar_error_campo('rol_name', 'rol_name_min_size_ko');
            return 'rol_name_min_size_ko';
        }
        if (!this.validations.max_size('rol_name', 48)) {
            this.dom.mostrar_error_campo('rol_name', 'rol_name_max_size_ko');
            return 'rol_name_max_size_ko';
        }
        if (!this.validations.format('rol_name', /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+$/)) {
            this.dom.mostrar_error_campo('rol_name', 'rol_name_format_ko');
            return 'rol_name_format_ko';
        }
        this.dom.mostrar_exito_campo('rol_name');
        return true;
    }
    // ADD rol_description
    /**
     * valida rol_description para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_rol_description_validation() {
        if (!this.validations.min_size('rol_description', 5)) {
            this.dom.mostrar_error_campo('rol_description', 'rol_description_min_size_ko');
            return 'rol_description_min_size_ko';
        }
        if (!this.validations.max_size('rol_description', 200)) {
            this.dom.mostrar_error_campo('rol_description', 'rol_description_max_size_ko');
            return 'rol_description_max_size_ko';
        }
        if (!this.validations.format('rol_description', /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\p{P} ]+$/u)) {
            this.dom.mostrar_error_campo('rol_description', 'rol_description_format_ko');
            return 'rol_description_format_ko';
        }
        this.dom.mostrar_exito_campo('rol_description');
        return true;
    }
    // EDIT comparte las restricciones de ADD, incluidos los identificadores.
    // EDIT id_rol
    /**
     * valida id_rol para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_id_rol_validation() {
        return this.ADD_id_rol_validation();
    }
    // EDIT rol_name
    /**
     * valida rol_name para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_rol_name_validation() {
        return this.ADD_rol_name_validation();
    }
    // EDIT rol_description
    /**
     * valida rol_description para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_rol_description_validation() {
        return this.ADD_rol_description_validation();
    }
    // SEARCH permite fragmentos y campos vacíos; no exige tamaño mínimo.
    // SEARCH id_rol
    /**
     * valida el criterio de búsqueda de id_rol
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_id_rol_validation() {
        if (!this.validations.max_size('id_rol', 11)) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_max_size_ko');
            return 'id_rol_max_size_ko';
        }
        if (!this.validations.format('id_rol', /^[0-9]*$/)) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_format_ko');
            return 'id_rol_format_ko';
        }
        this.dom.mostrar_exito_campo('id_rol');
        return true;
    }
    // SEARCH rol_name
    /**
     * valida el criterio de búsqueda de rol_name
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_rol_name_validation() {
        if (!this.validations.max_size('rol_name', 48)) {
            this.dom.mostrar_error_campo('rol_name', 'rol_name_max_size_ko');
            return 'rol_name_max_size_ko';
        }
        if (!this.validations.format('rol_name', /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]*$/)) {
            this.dom.mostrar_error_campo('rol_name', 'rol_name_format_ko');
            return 'rol_name_format_ko';
        }
        this.dom.mostrar_exito_campo('rol_name');
        return true;
    }
    // SEARCH rol_description
    /**
     * valida el criterio de búsqueda de rol_description
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_rol_description_validation() {
        if (!this.validations.max_size('rol_description', 200)) {
            this.dom.mostrar_error_campo('rol_description', 'rol_description_max_size_ko');
            return 'rol_description_max_size_ko';
        }
        if (!this.validations.format('rol_description', /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\p{P} ]*$/u)) {
            this.dom.mostrar_error_campo('rol_description', 'rol_description_format_ko');
            return 'rol_description_format_ko';
        }
        this.dom.mostrar_exito_campo('rol_description');
        return true;
    }
    // ADD formulario rol
    /**
     * comprueba todos los campos editables del formulario add
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    ADD_submit_rol() {
        const result = entity_ui.validateFields(this, 'ADD', ['rol_name', 'rol_description']);
        return result;
    }
    // EDIT formulario rol
    /**
     * comprueba todos los campos editables del formulario edit
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    EDIT_submit_rol() {
        const result = entity_ui.validateFields(this, 'EDIT', ['rol_name', 'rol_description']);
        return result;
    }
    // SEARCH formulario rol
    /**
     * comprueba todos los campos editables del formulario search
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    SEARCH_submit_rol() {
        const result = entity_ui.validateFields(this, 'SEARCH', ['id_rol', 'rol_name', 'rol_description']);
        return result;
    }

    // HTML del formulario de rol. Cada acción lo adapta en createForm_ACCION.
    /**
     * devuelve el html común que cada acción adapta antes de mostrar el formulario
     * @returns {string} plantilla html sin insertar todavía en el documento
     */
    manual_form_creation() {
        return `
            <form id="form_iu" method="POST" enctype="multipart/form-data" novalidate>
                <div class="et2-field">
                    <label id="label_id_rol" class="label_id_rol" for="id_rol"></label>
                    <input id="id_rol" name="id_rol" aria-describedby="span_error_id_rol" type="text">
                    <span id="span_error_id_rol" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_id_rol"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_rol_name" class="label_rol_name" for="rol_name"></label>
                    <input id="rol_name" name="rol_name" aria-describedby="span_error_rol_name" type="text">
                    <span id="span_error_rol_name" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_rol_name"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_rol_description" class="label_rol_description" for="rol_description"></label>
                    <textarea id="rol_description" name="rol_description" aria-describedby="span_error_rol_description" rows="4"></textarea>
                    <span id="span_error_rol_description" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_rol_description"></a></span>
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

    // ADD rol
    /**
     * prepara el formulario de alta con sus campos y referencias
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_ADD(fila = {}) {
        const context = entity_ui.openForm(this, 'ADD', this.valoresFormulario(fila), {
            hidden: ['id_rol'],
            readOnly: [],
            send: ['rol_name', 'rol_description'],
            submit: true
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    // EDIT rol
    /**
     * rellena el formulario de edición y bloquea las claves que no se modifican
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_EDIT(fila = {}) {
        const context = entity_ui.openForm(this, 'EDIT', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['id_rol'],
            send: ['id_rol', 'rol_name', 'rol_description'],
            submit: true
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    // SEARCH rol
    /**
     * prepara el formulario de búsqueda con criterios parciales o vacíos
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_SEARCH(fila = {}) {
        const context = entity_ui.openForm(this, 'SEARCH', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: [],
            send: ['id_rol', 'rol_name', 'rol_description'],
            submit: true
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    // DELETE rol
    /**
     * muestra los datos bloqueados y prepara la confirmación de borrado
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_DELETE(fila = {}) {
        const context = entity_ui.openForm(this, 'DELETE', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['id_rol', 'rol_name', 'rol_description'],
            send: ['id_rol'],
            submit: true,
            note: 'ui_delete_confirm'
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    // SHOWCURRENT rol
    /**
     * muestra los datos bloqueados sin ofrecer una operación de envío
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_SHOWCURRENT(fila = {}) {
        const context = entity_ui.openForm(this, 'SHOWCURRENT', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['id_rol', 'rol_name', 'rol_description'],
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
    DELETE_submit_rol() {
        return entity_ui.validateKeys(this);
    }

    /**
     * confirma la consulta de detalle sin validar ni enviar datos editables
     * @returns {boolean} true porque la acción solo presenta los datos
     */
    SHOWCURRENT_submit_rol() {
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
        return valor ?? '';
    }
}
