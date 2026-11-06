/**
 * gestiona mediante una matriz los permisos de cada rol sobre funcionalidades y acciones
 * @extends {AbstractEntidad}
 */
class rolaccionfuncionalidad extends AbstractEntidad {
    /**
     * configura la entidad rolaccionfuncionalidad y prepara su gestión fuera del modo test
     * @param {string|null} [esTest=null] - con 'test' prepara la entidad sin abrir la gestión ni consultar el back
     */
    constructor(esTest = null) {
        super();
        // Configuración propia de esta entidad. Core y Base no se modifican.
        this.config = {
            "matrix": { "role": true },
            "referenceDisplay": [],
            "special": ["id_funcionalidad", "id_accion", "id_rol"],
            "columnLabels": {"id_funcionalidad": "ui_functionality", "id_accion": "ui_action", "id_rol": "ui_role"},
            "keys": [
                "id_funcionalidad",
                "id_accion",
                "id_rol"
            ],
            "columns": [
                "id_rol",
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
                ],
                "id_rol": [
                    "rol",
                    "id_rol",
                    "rol_name"
                ]
            },
            "fields": [
                "id_rol",
                "id_funcionalidad",
                "id_accion"
            ],
            "components": {
                "id_funcionalidad": "select",
                "id_accion": "select",
                "id_rol": "select"
            },
            "readOnlyActions": [
                "EDIT"
            ]
        };
        entity_ui.initialize(this, 'rolaccionfuncionalidad', esTest);
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
    // ADD id_accion
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
    // EDIT comparte las restricciones de ADD, incluidos los identificadores.
    // EDIT id_funcionalidad
    /**
     * valida id_funcionalidad para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_id_funcionalidad_validation() {
        return this.ADD_id_funcionalidad_validation();
    }
    // EDIT id_accion
    /**
     * valida id_accion para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_id_accion_validation() {
        return this.ADD_id_accion_validation();
    }
    // EDIT id_rol
    /**
     * valida id_rol para la acción edit
     * @returns {ResultadoCampo} true si el valor es correcto o el primer código de error
     */
    EDIT_id_rol_validation() {
        return this.ADD_id_rol_validation();
    }
    // SEARCH selecciona IDs completos; el vacío permite no filtrar por el campo.
    // SEARCH id_funcionalidad
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
    // SEARCH id_accion
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
    // SEARCH id_rol
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
        if (valor !== '' && !this.validations.format('id_rol', /^[0-9]+$/)) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_format_ko');
            return 'id_rol_format_ko';
        }
        this.dom.mostrar_exito_campo('id_rol');
        return true;
    }
    // compatibilidad: comprobación de campos de add
    /**
     * comprueba todos los campos editables del formulario add
     * @returns {ResultadoSubmit} true si todos los campos son correctos o un objeto con los errores
     */
    ADD_submit_rolaccionfuncionalidad() {
        const result = entity_ui.validateFields(this, 'ADD', ['id_funcionalidad', 'id_accion', 'id_rol']);
        if (result !== true) return result;
        return this.personalize_id_accion_combinacion();
    }
    // la relación no admite edición de claves
    /**
     * informa de que las claves de una asociación no se editan en la base de datos
     * @returns {boolean} false porque los cambios se realizan asignando o desasignando relaciones
     */
    EDIT_submit_rolaccionfuncionalidad() {
        this.dom.abrirModalError('ui_association_edit');
        return false;
    }
    // valida las referencias elegidas en el modal de búsqueda
    /**
     * comprueba las referencias elegidas en el modal de búsqueda de la matriz
     * @returns {ResultadoSubmit} true si los filtros son válidos o un objeto con los errores
     */
    SEARCH_submit_rolaccionfuncionalidad() {
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
                    <label id="label_id_rol" class="ui_role" for="id_rol"></label>
                    <select id="id_rol" name="id_rol" aria-describedby="span_error_id_rol"><option value="" class="ui_all"></option></select>
                    <span id="span_error_id_rol" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_id_rol"></a></span>
                </div>
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

    // ADD rolaccionfuncionalidad
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

    // SEARCH rolaccionfuncionalidad
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
     * comprueba que la acción y la funcionalidad formen una combinación disponible
     * @param {RegistroEntidad|null} [relation=null] - claves de la relación que se quiere asignar o desasignar
     * @returns {ResultadoSubmit} true si la combinación es válida o todavía incompleta; un objeto de error si no existe
     */
    personalize_id_accion_combinacion(relation = null) {
        const functional = relation ? relation.id_funcionalidad : this.dom.valorCampo('id_funcionalidad');
        const action = relation ? relation.id_accion : this.dom.valorCampo('id_accion');
        if (!functional || !action) return true;
        if (this.matrixContext?.pairs.has(JSON.stringify([functional, action]))) return true;
        if (!relation) this.dom.mostrar_error_campo('id_accion', 'ui_invalid_pair');
        return { id_accion: 'ui_invalid_pair' };
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
    DELETE_submit_rolaccionfuncionalidad() {
        return entity_ui.validateKeys(this);
    }

    /**
     * confirma la consulta de detalle sin validar ni enviar datos editables
     * @returns {boolean} true porque la acción solo presenta los datos
     */
    SHOWCURRENT_submit_rolaccionfuncionalidad() {
        return true;
    }

    // carga los catálogos que definen los ejes y las combinaciones permitidas de la matriz
    /**
     * carga los catálogos que definen los ejes y las combinaciones permitidas
     * @returns {Promise<CatalogosMatriz>} funcionalidades, acciones, roles y parejas de referencia
     */
    async cargarCatalogosMatriz() {
        const [functionalities, actions, roles, pairs] = await Promise.all(
            ['funcionalidad', 'accion', 'rol', 'funcionalidad_accion'].map(name => entity_access.records(this, name)));
        return { functionalities, actions, roles, pairs };
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
