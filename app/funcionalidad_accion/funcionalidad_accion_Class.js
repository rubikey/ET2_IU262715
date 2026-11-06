/**
 * gestiona mediante una matriz las relaciones entre funcionalidades y acciones
 * @extends {AbstractEntidad}
 */
class funcionalidad_accion extends AbstractEntidad {
    /**
     * configura la entidad funcionalidad_accion y prepara su gestión fuera del modo test
     * @param {string|null} [esTest=null] - con 'test' prepara la entidad sin abrir la gestión ni consultar el back
     */
    constructor(esTest = null) {
        super();
        // configuración propia de esta entidad. Core y Base no se modifican
        this.config = {
            "matrix": { "role": false },
            "referenceDisplay": [],
            "special": ["id_funcionalidad", "id_accion"],
            "columnLabels": {"id_funcionalidad": "ui_functionality", "id_accion": "ui_action", "id_rol": "ui_role"},
            "keys": [
                "id_funcionalidad",
                "id_accion"
            ],
            "columns": [
                "id_funcionalidad",
                "id_accion"
            ],
            "references": {
                "id_funcionalidad": [
                    "funcionalidad",
                    "id_funcionalidad",
                    "nombre_funcionalidad"
                ],
                "id_accion": [
                    "accion",
                    "id_accion",
                    "nombre_accion"
                ]
            },
            "fields": [
                "id_funcionalidad",
                "id_accion"
            ],
            "components": {
                "id_funcionalidad": "select",
                "id_accion": "select"
            },
            "readOnlyActions": [
                "EDIT"
            ]
        };
        entity_ui.initialize(this, 'funcionalidad_accion', esTest);
    }
    // devuelve el primer código de error o true si el campo es correcto
    // add id_funcionalidad
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
    // los validadores EDIT se conservan para las pruebas; la interfaz no edita asociaciones
    // edit id_funcionalidad
    /**
     * valida id_funcionalidad para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_id_funcionalidad_validation() {
        return this.ADD_id_funcionalidad_validation();
    }
    // edit id_accion
    /**
     * valida id_accion para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_id_accion_validation() {
        return this.ADD_id_accion_validation();
    }
    // search selecciona IDs completos; el vacío permite no filtrar por el campo
    // search id_funcionalidad
    /**
     * valida el criterio de búsqueda de id_funcionalidad
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_id_funcionalidad_validation() {
        const valor = this.dom.valorCampo('id_funcionalidad');
        if (!this.validations.max_size('id_funcionalidad', 11)) {
            this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_max_size_ko');
            return 'id_funcionalidad_max_size_ko';
        }
        if (valor !== '' && !this.validations.format('id_funcionalidad', /^[0-9]+$/)) {
            this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_format_ko');
            return 'id_funcionalidad_format_ko';
        }
        this.dom.mostrar_exito_campo('id_funcionalidad');
        return true;
    }
    // search id_accion
    /**
     * valida el criterio de búsqueda de id_accion
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    SEARCH_id_accion_validation() {
        const valor = this.dom.valorCampo('id_accion');
        if (!this.validations.max_size('id_accion', 11)) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_max_size_ko');
            return 'id_accion_max_size_ko';
        }
        if (valor !== '' && !this.validations.format('id_accion', /^[0-9]+$/)) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_format_ko');
            return 'id_accion_format_ko';
        }
        this.dom.mostrar_exito_campo('id_accion');
        return true;
    }
    // compatibilidad: comprobación de campos de add
    /**
     * conserva la comprobación de campos de add para llamadas de compatibilidad
     * la interfaz actual asigna relaciones desde las casillas de la matriz
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    ADD_submit_funcionalidad_accion() {
        const result = entity_ui.validateFields(this, 'ADD', ['id_funcionalidad', 'id_accion']);
        return result;
    }
    // la relación no admite edición de claves
    /**
     * informa de que las claves de una asociación no se editan en la base de datos
     * @returns {boolean} false porque los cambios se realizan asignando o desasignando relaciones
     */
    EDIT_submit_funcionalidad_accion() {
        this.dom.abrirModalError('ui_association_edit');
        return false;
    }
    // valida las referencias elegidas en el modal de búsqueda
    /**
     * comprueba las referencias elegidas en el modal de búsqueda de la matriz
     * @returns {ResultadoSubmit} true si los filtros son válidos o un objeto con los errores
     */
    SEARCH_submit_funcionalidad_accion() {
        return entity_ui.validateMatrixSearch(this);
    }

    // estructura del modal SEARCH; la gestión de casillas permanece en la página principal
    /**
     * devuelve el html del modal SEARCH; las relaciones se gestionan en la matriz
     * @returns {string} plantilla html sin insertar todavía en el documento
     */
    manual_form_creation() {
        return `
            <form id="form_iu" method="POST" novalidate>
                <div class="et2-field">
                    <label id="label_id_funcionalidad" class="ui_functionality" for="id_funcionalidad"></label>
                    <select id="id_funcionalidad" name="id_funcionalidad" aria-describedby="span_error_id_funcionalidad"><option value="" class="ui_all"></option></select>
                    <span id="span_error_id_funcionalidad" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_id_funcionalidad"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_id_accion" class="ui_action" for="id_accion"></label>
                    <select id="id_accion" name="id_accion" aria-describedby="span_error_id_accion"><option value="" class="ui_all"></option></select>
                    <span id="span_error_id_accion" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_id_accion"></a></span>
                </div>
                <p id="et2_form_note" role="status" hidden></p>
                <div class="et2-form-actions"></div>
            </form>`;
    }

    // add funcionalidad_accion
    /**
     * mantiene el punto de entrada y dirige al usuario a la matriz de relaciones
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} resultado de la apertura o enfoque de la matriz
     */
    async createForm_ADD(fila = {}) {
        return entity_ui.focusMatrix(this, false);
    }

    // compatibilidad de edit: vuelve a la matriz
    /**
     * mantiene el punto de entrada y dirige al usuario a la matriz de relaciones
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} resultado de la apertura o enfoque de la matriz
     */
    async createForm_EDIT(fila = {}) {
        // conserva el método esperado; la relación se consulta y cambia desde la matriz
        return this.createForm_ADD(fila);
    }

    // search funcionalidad_accion
    /**
     * abre el modal de filtros de la matriz activa
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} resultado de la apertura o enfoque de la matriz
     */
    async createForm_SEARCH(fila = {}) {
        return entity_ui.focusMatrix(this, true);
    }

    // compatibilidad de delete: vuelve a la matriz
    /**
     * mantiene el punto de entrada y dirige al usuario a la matriz de relaciones
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} resultado de la apertura o enfoque de la matriz
     */
    async createForm_DELETE(fila = {}) {
        // conserva el método esperado; la relación se consulta y cambia desde la matriz
        return this.createForm_ADD(fila);
    }

    // compatibilidad de showcurrent: vuelve a la matriz
    /**
     * mantiene el punto de entrada y dirige al usuario a la matriz de relaciones
     * @param {RegistroEntidad} [fila={}] - valores originales de la fila seleccionada; vacío para una nueva entrada
     * @returns {Promise<boolean>} resultado de la apertura o enfoque de la matriz
     */
    async createForm_SHOWCURRENT(fila = {}) {
        // conserva el método esperado; la relación se consulta y cambia desde la matriz
        return this.createForm_ADD(fila);
    }

    /**
     * solicita asignar una relación desde una casilla de la matriz
     * @param {ContextoMatriz|null} [matrix=null] - estado de la matriz que se está gestionando
     * @param {RegistroEntidad|null} [relation=null] - claves de la relación que se quiere asignar o desasignar
     * @returns {Promise<boolean>} resultado de la operación solicitada
     */
    ADD(matrix = null, relation = null) {
        if (matrix) return entity_ui.runMatrix(this, 'ADD', matrix, relation);
        return entity_ui.write(this, 'ADD');
    }

    /**
     * rechaza la edición de claves de una asociación
     * @returns {Promise<boolean>} resultado de la operación solicitada
     */
    EDIT() {
        return entity_ui.write(this, 'EDIT');
    }

    /**
     * recupera las relaciones y prepara su presentación como matriz
     * @returns {Promise<boolean>} resultado de la operación solicitada
     */
    SEARCH() {
        return entity_ui.search(this);
    }

    /**
     * solicita desasignar una relación desde una casilla de la matriz
     * @param {ContextoMatriz|null} [matrix=null] - estado de la matriz que se está gestionando
     * @param {RegistroEntidad|null} [relation=null] - claves de la relación que se quiere asignar o desasignar
     * @returns {Promise<boolean>} resultado de la operación solicitada
     */
    DELETE(matrix = null, relation = null) {
        if (matrix) return entity_ui.runMatrix(this, 'DELETE', matrix, relation);
        return entity_ui.write(this, 'DELETE');
    }

    /**
     * comprueba las claves originales necesarias para confirmar el borrado
     * @returns {ResultadoSubmit} true si las claves están disponibles o un objeto con los errores
     */
    DELETE_submit_funcionalidad_accion() {
        return entity_ui.validateKeys(this);
    }

    /**
     * confirma la consulta de detalle sin validar ni enviar datos editables
     * @returns {boolean} true porque la acción solo presenta los datos
     */
    SHOWCURRENT_submit_funcionalidad_accion() {
        return true;
    }

    // carga los catálogos que definen los ejes y las combinaciones permitidas de la matriz
    /**
     * carga los catálogos que definen los ejes y las combinaciones permitidas
     * @returns {Promise<CatalogosMatriz>} funcionalidades, acciones, roles y parejas de referencia
     */
    async cargarCatalogosMatriz() {
        const [functionalities, actions] = await Promise.all(
            ['funcionalidad', 'accion'].map(name => entity_access.records(this, name)));
        return { functionalities, actions, roles: [], pairs: [] };
    }

    /**
     * delega la presentación de las relaciones en la matriz
     * @param {RegistroEntidad[]} datos - filas recibidas del back que se quieren presentar
     * @returns {Promise<boolean>} resultado de la carga y representación de la matriz
     */
    crearTablaDatos(datos) {
        return entity_ui.renderMatrix(this, datos);
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
