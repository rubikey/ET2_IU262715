class rolaccionfuncionalidad extends AbstractEntidad {
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
    EDIT_id_funcionalidad_validation() {
        return this.ADD_id_funcionalidad_validation();
    }
    // EDIT id_accion
    EDIT_id_accion_validation() {
        return this.ADD_id_accion_validation();
    }
    // EDIT id_rol
    EDIT_id_rol_validation() {
        return this.ADD_id_rol_validation();
    }
    // SEARCH selecciona IDs completos; el vacío permite no filtrar por el campo.
    // SEARCH id_funcionalidad
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
    ADD_submit_rolaccionfuncionalidad() {
        const result = entity_ui.validateFields(this, 'ADD', ['id_funcionalidad', 'id_accion', 'id_rol']);
        if (result !== true) return result;
        return this.personalize_id_accion_combinacion();
    }
    // la relación no admite edición de claves
    EDIT_submit_rolaccionfuncionalidad() {
        this.dom.abrirModalError('ui_association_edit');
        return false;
    }
    // compatibilidad: comprobación de campos de search
    SEARCH_submit_rolaccionfuncionalidad() {
        const result = entity_ui.validateFields(this, 'SEARCH', ['id_funcionalidad', 'id_accion', 'id_rol']);
        if (result !== true) return result;
        return this.personalize_id_accion_combinacion();
    }

    // la arquitectura conserva un formulario base, aunque esta entidad utiliza una matriz
    manual_form_creation() {
        // contenedor del contrato docente; la gestión visible se construye en la matriz
        return '<form id="form_iu" novalidate></form>';
    }


    // ADD rolaccionfuncionalidad
    async createForm_ADD(fila = {}) {
        return entity_ui.focusMatrix(this, false);
    }

    // compatibilidad de edit: vuelve a la matriz
    async createForm_EDIT(fila = {}) {
        // conserva el método esperado; la relación se consulta y cambia desde la matriz
        return this.createForm_ADD(fila);
    }

    // SEARCH rolaccionfuncionalidad
    async createForm_SEARCH(fila = {}) {
        return entity_ui.focusMatrix(this, true);
    }

    // compatibilidad de delete: vuelve a la matriz
    async createForm_DELETE(fila = {}) {
        // conserva el método esperado; la relación se consulta y cambia desde la matriz
        return this.createForm_ADD(fila);
    }

    // compatibilidad de showcurrent: vuelve a la matriz
    async createForm_SHOWCURRENT(fila = {}) {
        // conserva el método esperado; la relación se consulta y cambia desde la matriz
        return this.createForm_ADD(fila);
    }

    personalize_id_accion_combinacion(relation = null) {
        const functional = relation ? relation.id_funcionalidad : this.dom.valorCampo('id_funcionalidad');
        const action = relation ? relation.id_accion : this.dom.valorCampo('id_accion');
        if (!functional || !action) return true;
        if (this.matrixContext?.pairs.has(JSON.stringify([functional, action]))) return true;
        if (!relation) this.dom.mostrar_error_campo('id_accion', 'ui_invalid_pair');
        return { id_accion: 'ui_invalid_pair' };
    }

    ADD(matrix = null, relation = null) {
        if (matrix) return entity_ui.runMatrix(this, 'ADD', matrix, relation);
        return entity_ui.run(this, 'ADD');
    }

    EDIT() {
        return entity_ui.run(this, 'EDIT');
    }

    SEARCH() {
        return entity_ui.run(this, 'SEARCH');
    }

    DELETE(matrix = null, relation = null) {
        if (matrix) return entity_ui.runMatrix(this, 'DELETE', matrix, relation);
        return entity_ui.run(this, 'DELETE');
    }

    DELETE_submit_rolaccionfuncionalidad() {
        return entity_ui.validateKeys(this);
    }

    SHOWCURRENT_submit_rolaccionfuncionalidad() {
        return true;
    }

    // carga los catálogos que definen los ejes y las combinaciones permitidas de la matriz
    async cargarCatalogosMatriz() {
        const [functionalities, actions, roles, pairs] = await Promise.all(
            ['funcionalidad', 'accion', 'rol', 'funcionalidad_accion'].map(name => entity_access.records(this, name)));
        return { functionalities, actions, roles, pairs };
    }

    crearTablaDatos(datos) {
        return entity_ui.renderMatrix(this, datos);
    }
    modificarcolumnasamostrar(atributo) {
        return entity_ui.toggleColumn(this, atributo);
    }
    mostrarcambioatributo(atributo, valor) {
        return this.referenceLabels?.[atributo]?.get(String(valor)) || valor || '';
    }
    cambiarmostrarespecial(atributo, valor) {
        return this.mostrarcambioatributo(atributo, valor);
    }
}
