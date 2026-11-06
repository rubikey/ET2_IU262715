/**
 * gestiona el catálogo de acciones y sus formularios y validaciones
 * @extends {AbstractEntidad}
 */
class accion extends AbstractEntidad {
    /**
     * configura la entidad accion y prepara su gestión fuera del modo test
     * @param {string|null} [esTest=null] - con 'test' prepara la entidad sin abrir la gestión ni consultar el back
     */
    constructor(esTest = null) {
        super();
        // constructor propio de esta entidad
        this.config = {
            "keys": [
                "id_accion"
            ],
            "auto": [
                "id_accion"
            ],
            "columns": [
                "id_accion",
                "nombre_accion",
                "descrip_accion"
            ],
            "fields": [
                "id_accion",
                "nombre_accion",
                "descrip_accion"
            ],
            "components": {
                "id_accion": "input",
                "nombre_accion": "input",
                "descrip_accion": "textarea"
            }
        };
        entity_ui.initialize(this, 'accion', esTest);
    }
    // devuelve el primer código de error o true si el campo es correcto
    // add id_accion
    /**
     * valida id_accion para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_id_accion_validation() {
        if (!this.validations.min_size('id_accion', 1)) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_min_size_ko');
            return 'id_accion_min_size_ko';
        }
        if (!this.validations.max_size('id_accion', 11)) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_max_size_ko');
            return 'id_accion_max_size_ko';
        }
        if (!this.validations.format('id_accion', /^[0-9]+$/)) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_format_ko');
            return 'id_accion_format_ko';
        }
        this.dom.mostrar_exito_campo('id_accion');
        return true;
    }
    // add nombre_accion
    /**
     * valida nombre_accion para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_nombre_accion_validation() {
        if (!this.validations.min_size('nombre_accion', 5)) {
            this.dom.mostrar_error_campo('nombre_accion', 'nombre_accion_min_size_ko');
            return 'nombre_accion_min_size_ko';
        }
        if (!this.validations.max_size('nombre_accion', 48)) {
            this.dom.mostrar_error_campo('nombre_accion', 'nombre_accion_max_size_ko');
            return 'nombre_accion_max_size_ko';
        }
        if (!this.validations.format('nombre_accion', /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+$/)) {
            this.dom.mostrar_error_campo('nombre_accion', 'nombre_accion_format_ko');
            return 'nombre_accion_format_ko';
        }
        this.dom.mostrar_exito_campo('nombre_accion');
        return true;
    }
    // add descrip_accion
    /**
     * valida descrip_accion para la acción add
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    ADD_descrip_accion_validation() {
        if (!this.validations.min_size('descrip_accion', 5)) {
            this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_min_size_ko');
            return 'descrip_accion_min_size_ko';
        }
        if (!this.validations.max_size('descrip_accion', 200)) {
            this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_max_size_ko');
            return 'descrip_accion_max_size_ko';
        }
        if (!this.validations.format('descrip_accion', /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\p{P} ]+$/u)) {
            this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_format_ko');
            return 'descrip_accion_format_ko';
        }
        this.dom.mostrar_exito_campo('descrip_accion');
        return true;
    }
    // edit comparte las restricciones de ADD, incluidos los identificadores
    // edit id_accion
    /**
     * valida id_accion para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_id_accion_validation() {
        return this.ADD_id_accion_validation();
    }
    // edit nombre_accion
    /**
     * valida nombre_accion para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_nombre_accion_validation() {
        return this.ADD_nombre_accion_validation();
    }
    // edit descrip_accion
    /**
     * valida descrip_accion para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_descrip_accion_validation() {
        return this.ADD_descrip_accion_validation();
    }
    // search permite fragmentos y campos vacíos; no exige tamaño mínimo
    // search id_accion
    /**
     * valida el criterio de búsqueda de id_accion
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_id_accion_validation() {
        if (!this.validations.max_size('id_accion', 11)) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_max_size_ko');
            return 'id_accion_max_size_ko';
        }
        if (!this.validations.format('id_accion', /^[0-9]*$/)) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_format_ko');
            return 'id_accion_format_ko';
        }
        this.dom.mostrar_exito_campo('id_accion');
        return true;
    }
    // search nombre_accion
    /**
     * valida el criterio de búsqueda de nombre_accion
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_nombre_accion_validation() {
        if (!this.validations.max_size('nombre_accion', 48)) {
            this.dom.mostrar_error_campo('nombre_accion', 'nombre_accion_max_size_ko');
            return 'nombre_accion_max_size_ko';
        }
        if (!this.validations.format('nombre_accion', /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]*$/)) {
            this.dom.mostrar_error_campo('nombre_accion', 'nombre_accion_format_ko');
            return 'nombre_accion_format_ko';
        }
        this.dom.mostrar_exito_campo('nombre_accion');
        return true;
    }
    // search descrip_accion
    /**
     * valida el criterio de búsqueda de descrip_accion
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_descrip_accion_validation() {
        if (!this.validations.max_size('descrip_accion', 200)) {
            this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_max_size_ko');
            return 'descrip_accion_max_size_ko';
        }
        if (!this.validations.format('descrip_accion', /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\p{P} ]*$/u)) {
            this.dom.mostrar_error_campo('descrip_accion', 'descrip_accion_format_ko');
            return 'descrip_accion_format_ko';
        }
        this.dom.mostrar_exito_campo('descrip_accion');
        return true;
    }
    // add formulario accion
    /**
     * comprueba todos los campos editables del formulario add
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    ADD_submit_accion() {
        const result = entity_ui.validateFields(this, 'ADD', ['nombre_accion', 'descrip_accion']);
        return result;
    }
    // edit formulario accion
    /**
     * comprueba todos los campos editables del formulario edit
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    EDIT_submit_accion() {
        const result = entity_ui.validateFields(this, 'EDIT', ['nombre_accion', 'descrip_accion']);
        return result;
    }
    // search formulario accion
    /**
     * comprueba todos los campos editables del formulario search
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    SEARCH_submit_accion() {
        const result = entity_ui.validateFields(this, 'SEARCH', ['id_accion', 'nombre_accion', 'descrip_accion']);
        return result;
    }

    // html del formulario de accion. Cada acción lo adapta en createForm_ACCION
    /**
     * devuelve el html común que cada acción adapta antes de mostrar el formulario
     * @returns {string} plantilla html sin insertar todavía en el documento
     */
    manual_form_creation() {
        return `
            <form id="form_iu" method="POST" enctype="multipart/form-data" novalidate>
                <div class="et2-field">
                    <label id="label_id_accion" class="label_id_accion" for="id_accion"></label>
                    <input id="id_accion" name="id_accion" aria-describedby="span_error_id_accion" type="text">
                    <span id="span_error_id_accion" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_id_accion"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_nombre_accion" class="label_nombre_accion" for="nombre_accion"></label>
                    <input id="nombre_accion" name="nombre_accion" aria-describedby="span_error_nombre_accion" type="text">
                    <span id="span_error_nombre_accion" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_nombre_accion"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_descrip_accion" class="label_descrip_accion" for="descrip_accion"></label>
                    <textarea id="descrip_accion" name="descrip_accion" aria-describedby="span_error_descrip_accion" rows="4"></textarea>
                    <span id="span_error_descrip_accion" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_descrip_accion"></a></span>
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

    // add accion
    /**
     * prepara el formulario de alta con sus campos y referencias
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_ADD(fila = {}) {
        const context = entity_ui.openForm(this, 'ADD', this.valoresFormulario(fila), {
            hidden: ['id_accion'],
            readOnly: [],
            send: ['nombre_accion', 'descrip_accion'],
            submit: true
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    // edit accion
    /**
     * rellena el formulario de edición y bloquea las claves que no se modifican
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_EDIT(fila = {}) {
        const context = entity_ui.openForm(this, 'EDIT', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['id_accion'],
            send: ['id_accion', 'nombre_accion', 'descrip_accion'],
            submit: true
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    // search accion
    /**
     * prepara el formulario de búsqueda con criterios parciales o vacíos
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_SEARCH(fila = {}) {
        const context = entity_ui.openForm(this, 'SEARCH', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: [],
            send: ['id_accion', 'nombre_accion', 'descrip_accion'],
            submit: true
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    // delete accion
    /**
     * muestra los datos bloqueados y prepara la confirmación de borrado
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_DELETE(fila = {}) {
        const context = entity_ui.openForm(this, 'DELETE', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['id_accion', 'nombre_accion', 'descrip_accion'],
            send: ['id_accion'],
            submit: true,
            note: 'ui_delete_confirm'
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    // showcurrent accion
    /**
     * muestra los datos bloqueados sin ofrecer una operación de envío
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} true si el formulario queda preparado o false si no se puede completar
     */
    async createForm_SHOWCURRENT(fila = {}) {
        const context = entity_ui.openForm(this, 'SHOWCURRENT', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['id_accion', 'nombre_accion', 'descrip_accion'],
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
    DELETE_submit_accion() {
        return entity_ui.validateKeys(this);
    }

    /**
     * confirma la consulta de detalle sin validar ni enviar datos editables
     * @returns {boolean} true porque la acción solo presenta los datos
     */
    SHOWCURRENT_submit_accion() {
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
