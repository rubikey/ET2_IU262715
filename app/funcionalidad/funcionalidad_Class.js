/**
 * gestiona el catálogo de funcionalidades y sus formularios y validaciones
 * @extends {AbstractEntidad}
 */
class funcionalidad extends AbstractEntidad {
    /**
     * configura la entidad funcionalidad y prepara su gestión fuera del modo test
     * @param {string|null} [esTest=null] - con 'test' prepara la entidad sin abrir la gestión ni consultar el back
     */
    constructor(esTest = null) {
        super();
        // Configuración propia de esta entidad. Core y Base no se modifican.
        this.config = {
            "keys": [
                "id_funcionalidad"
            ],
            "auto": [
                "id_funcionalidad"
            ],
            "columns": [
                "id_funcionalidad",
                "nombre_funcionalidad",
                "descrip_funcionalidad"
            ],
            "fields": [
                "id_funcionalidad",
                "nombre_funcionalidad",
                "descrip_funcionalidad"
            ],
            "components": {
                "id_funcionalidad": "input",
                "nombre_funcionalidad": "input",
                "descrip_funcionalidad": "textarea"
            }
        };
        entity_ui.initialize(this, 'funcionalidad', esTest);
    }
    // Devuelve el primer código de error o true si el campo es correcto.
    // ADD id_funcionalidad
    /**
     * valida id_funcionalidad para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_id_funcionalidad_validation() {
        if (!this.validations.min_size('id_funcionalidad', 1)) {
            this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_min_size_ko');
            return 'id_funcionalidad_min_size_ko';
        }
        if (!this.validations.max_size('id_funcionalidad', 11)) {
            this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_max_size_ko');
            return 'id_funcionalidad_max_size_ko';
        }
        if (!this.validations.format('id_funcionalidad', /^[0-9]+$/)) {
            this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_format_ko');
            return 'id_funcionalidad_format_ko';
        }
        this.dom.mostrar_exito_campo('id_funcionalidad');
        return true;
    }
    // ADD nombre_funcionalidad
    /**
     * valida nombre_funcionalidad para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_nombre_funcionalidad_validation() {
        if (!this.validations.min_size('nombre_funcionalidad', 5)) {
            this.dom.mostrar_error_campo('nombre_funcionalidad', 'nombre_funcionalidad_min_size_ko');
            return 'nombre_funcionalidad_min_size_ko';
        }
        if (!this.validations.max_size('nombre_funcionalidad', 48)) {
            this.dom.mostrar_error_campo('nombre_funcionalidad', 'nombre_funcionalidad_max_size_ko');
            return 'nombre_funcionalidad_max_size_ko';
        }
        if (!this.validations.format('nombre_funcionalidad', /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+$/)) {
            this.dom.mostrar_error_campo('nombre_funcionalidad', 'nombre_funcionalidad_format_ko');
            return 'nombre_funcionalidad_format_ko';
        }
        this.dom.mostrar_exito_campo('nombre_funcionalidad');
        return true;
    }
    // ADD descrip_funcionalidad
    /**
     * valida descrip_funcionalidad para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_descrip_funcionalidad_validation() {
        if (!this.validations.min_size('descrip_funcionalidad', 5)) {
            this.dom.mostrar_error_campo('descrip_funcionalidad', 'descrip_funcionalidad_min_size_ko');
            return 'descrip_funcionalidad_min_size_ko';
        }
        if (!this.validations.max_size('descrip_funcionalidad', 200)) {
            this.dom.mostrar_error_campo('descrip_funcionalidad', 'descrip_funcionalidad_max_size_ko');
            return 'descrip_funcionalidad_max_size_ko';
        }
        if (!this.validations.format('descrip_funcionalidad', /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\p{P} ]+$/u)) {
            this.dom.mostrar_error_campo('descrip_funcionalidad', 'descrip_funcionalidad_format_ko');
            return 'descrip_funcionalidad_format_ko';
        }
        this.dom.mostrar_exito_campo('descrip_funcionalidad');
        return true;
    }
    // EDIT comparte las restricciones de ADD, incluidos los identificadores.
    // EDIT id_funcionalidad
    /**
     * valida id_funcionalidad para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_id_funcionalidad_validation() {
        return this.ADD_id_funcionalidad_validation();
    }
    // EDIT nombre_funcionalidad
    /**
     * valida nombre_funcionalidad para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_nombre_funcionalidad_validation() {
        return this.ADD_nombre_funcionalidad_validation();
    }
    // EDIT descrip_funcionalidad
    /**
     * valida descrip_funcionalidad para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_descrip_funcionalidad_validation() {
        return this.ADD_descrip_funcionalidad_validation();
    }
    // SEARCH permite fragmentos y campos vacíos; no exige tamaño mínimo.
    // SEARCH id_funcionalidad
    /**
     * valida el criterio de búsqueda de id_funcionalidad
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_id_funcionalidad_validation() {
        if (!this.validations.max_size('id_funcionalidad', 11)) {
            this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_max_size_ko');
            return 'id_funcionalidad_max_size_ko';
        }
        if (!this.validations.format('id_funcionalidad', /^[0-9]*$/)) {
            this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_format_ko');
            return 'id_funcionalidad_format_ko';
        }
        this.dom.mostrar_exito_campo('id_funcionalidad');
        return true;
    }
    // SEARCH nombre_funcionalidad
    /**
     * valida el criterio de búsqueda de nombre_funcionalidad
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_nombre_funcionalidad_validation() {
        if (!this.validations.max_size('nombre_funcionalidad', 48)) {
            this.dom.mostrar_error_campo('nombre_funcionalidad', 'nombre_funcionalidad_max_size_ko');
            return 'nombre_funcionalidad_max_size_ko';
        }
        if (!this.validations.format('nombre_funcionalidad', /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]*$/)) {
            this.dom.mostrar_error_campo('nombre_funcionalidad', 'nombre_funcionalidad_format_ko');
            return 'nombre_funcionalidad_format_ko';
        }
        this.dom.mostrar_exito_campo('nombre_funcionalidad');
        return true;
    }
    // SEARCH descrip_funcionalidad
    /**
     * valida el criterio de búsqueda de descrip_funcionalidad
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_descrip_funcionalidad_validation() {
        if (!this.validations.max_size('descrip_funcionalidad', 200)) {
            this.dom.mostrar_error_campo('descrip_funcionalidad', 'descrip_funcionalidad_max_size_ko');
            return 'descrip_funcionalidad_max_size_ko';
        }
        if (!this.validations.format('descrip_funcionalidad', /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\p{P} ]*$/u)) {
            this.dom.mostrar_error_campo('descrip_funcionalidad', 'descrip_funcionalidad_format_ko');
            return 'descrip_funcionalidad_format_ko';
        }
        this.dom.mostrar_exito_campo('descrip_funcionalidad');
        return true;
    }
    // ADD formulario funcionalidad
    /**
     * comprueba todos los campos editables del formulario add
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    ADD_submit_funcionalidad() {
        const result = entity_ui.validateFields(this, 'ADD', ['nombre_funcionalidad', 'descrip_funcionalidad']);
        return result;
    }
    // EDIT formulario funcionalidad
    /**
     * comprueba todos los campos editables del formulario edit
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    EDIT_submit_funcionalidad() {
        const result = entity_ui.validateFields(this, 'EDIT', ['nombre_funcionalidad', 'descrip_funcionalidad']);
        return result;
    }
    // SEARCH formulario funcionalidad
    /**
     * comprueba todos los campos editables del formulario search
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    SEARCH_submit_funcionalidad() {
        const result = entity_ui.validateFields(this, 'SEARCH', ['id_funcionalidad', 'nombre_funcionalidad', 'descrip_funcionalidad']);
        return result;
    }

    // HTML del formulario de funcionalidad. Cada acción lo adapta en createForm_ACCION.
    /**
     * devuelve el html común que cada acción adapta antes de mostrar el formulario
     * @returns {string} plantilla html sin insertar todavía en el documento
     */
    manual_form_creation() {
        return `
            <form id="form_iu" method="POST" enctype="multipart/form-data" novalidate>
                <div class="et2-field">
                    <label id="label_id_funcionalidad" class="label_id_funcionalidad" for="id_funcionalidad"></label>
                    <input id="id_funcionalidad" name="id_funcionalidad" aria-describedby="span_error_id_funcionalidad" type="text">
                    <span id="span_error_id_funcionalidad" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_id_funcionalidad"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_nombre_funcionalidad" class="label_nombre_funcionalidad" for="nombre_funcionalidad"></label>
                    <input id="nombre_funcionalidad" name="nombre_funcionalidad" aria-describedby="span_error_nombre_funcionalidad" type="text">
                    <span id="span_error_nombre_funcionalidad" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_nombre_funcionalidad"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_descrip_funcionalidad" class="label_descrip_funcionalidad" for="descrip_funcionalidad"></label>
                    <textarea id="descrip_funcionalidad" name="descrip_funcionalidad" aria-describedby="span_error_descrip_funcionalidad" rows="4"></textarea>
                    <span id="span_error_descrip_funcionalidad" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_descrip_funcionalidad"></a></span>
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

    // ADD funcionalidad
    /**
     * prepara el formulario de alta con sus campos y referencias
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_ADD(fila = {}) {
        const context = entity_ui.openForm(this, 'ADD', this.valoresFormulario(fila), {
            hidden: ['id_funcionalidad'],
            readOnly: [],
            send: ['nombre_funcionalidad', 'descrip_funcionalidad'],
            submit: true
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    // EDIT funcionalidad
    /**
     * rellena el formulario de edición y bloquea las claves que no se modifican
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_EDIT(fila = {}) {
        const context = entity_ui.openForm(this, 'EDIT', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['id_funcionalidad'],
            send: ['id_funcionalidad', 'nombre_funcionalidad', 'descrip_funcionalidad'],
            submit: true
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    // SEARCH funcionalidad
    /**
     * prepara el formulario de búsqueda con criterios parciales o vacíos
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_SEARCH(fila = {}) {
        const context = entity_ui.openForm(this, 'SEARCH', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: [],
            send: ['id_funcionalidad', 'nombre_funcionalidad', 'descrip_funcionalidad'],
            submit: true
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    // DELETE funcionalidad
    /**
     * muestra los datos bloqueados y prepara la confirmación de borrado
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_DELETE(fila = {}) {
        const context = entity_ui.openForm(this, 'DELETE', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['id_funcionalidad', 'nombre_funcionalidad', 'descrip_funcionalidad'],
            send: ['id_funcionalidad'],
            submit: true,
            note: 'ui_delete_confirm'
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    // SHOWCURRENT funcionalidad
    /**
     * muestra los datos bloqueados sin ofrecer una operación de envío
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_SHOWCURRENT(fila = {}) {
        const context = entity_ui.openForm(this, 'SHOWCURRENT', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['id_funcionalidad', 'nombre_funcionalidad', 'descrip_funcionalidad'],
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
    DELETE_submit_funcionalidad() {
        return entity_ui.validateKeys(this);
    }

    /**
     * confirma la consulta de detalle sin validar ni enviar datos editables
     * @returns {boolean} true porque la acción solo presenta los datos
     */
    SHOWCURRENT_submit_funcionalidad() {
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
