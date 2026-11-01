class funcionalidad_accion extends AbstractEntidad {
    constructor(esTest = null) {
        super();
        // Configuración propia de esta entidad. Core y Base no se modifican.
        this.config = {
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
    // EDIT comparte las restricciones de ADD, incluidos los identificadores.
    // EDIT id_funcionalidad
    EDIT_id_funcionalidad_validation() {
        return this.ADD_id_funcionalidad_validation();
    }
    // EDIT id_accion
    EDIT_id_accion_validation() {
        return this.ADD_id_accion_validation();
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
    // ADD formulario funcionalidad_accion
    ADD_submit_funcionalidad_accion() {
        const result = entity_ui.validateFields(this, 'ADD', ['id_funcionalidad', 'id_accion']);
        return result;
    }
    // EDIT formulario funcionalidad_accion
    EDIT_submit_funcionalidad_accion() {
        this.dom.abrirModalError('ui_association_edit');
        return false;
    }
    // SEARCH formulario funcionalidad_accion
    SEARCH_submit_funcionalidad_accion() {
        const result = entity_ui.validateFields(this, 'SEARCH', ['id_funcionalidad', 'id_accion']);
        return result;
    }

    // HTML del formulario de funcionalidad_accion. Cada acción lo adapta en createForm_ACCION.
    manual_form_creation() {
        return `
            <form id="form_iu" method="POST" enctype="multipart/form-data" novalidate>
                <div class="et2-field">
                    <label id="label_id_funcionalidad" class="ui_functionality" for="id_funcionalidad"></label>
                    <select id="id_funcionalidad" name="id_funcionalidad" aria-describedby="span_error_id_funcionalidad"><option value="" class="ui_select"></option></select>
                    <span id="span_error_id_funcionalidad" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_id_funcionalidad"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_id_accion" class="ui_action" for="id_accion"></label>
                    <select id="id_accion" name="id_accion" aria-describedby="span_error_id_accion"><option value="" class="ui_select"></option></select>
                    <span id="span_error_id_accion" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_id_accion"></a></span>
                </div>
                <p id="et2_form_note" role="status" hidden></p>
                <div class="et2-form-actions"></div>
            </form>`;
    }

    valoresFormulario(fila) {
        const values = entity_access.normalizeRow(this.config, fila);
        return values;
    }

    // ADD funcionalidad_accion
    async createForm_ADD(fila = {}) {
        const context = entity_ui.openForm(this, 'ADD', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: [],
            send: ['id_funcionalidad', 'id_accion'],
            submit: true
        });
        if (!context) return false;
        await this.dom.rellenarReferencias(this, context, ['id_funcionalidad', 'id_accion']);
        return entity_ui.finishForm(this, context);
    }

    // EDIT funcionalidad_accion
    async createForm_EDIT(fila = {}) {
        const context = entity_ui.openForm(this, 'EDIT', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['id_funcionalidad', 'id_accion'],
            send: [],
            submit: false,
            note: 'ui_association_edit'
        });
        if (!context) return false;
        this.dom.crearBotonAccion(context, 'ui_new_association', () => this.createForm_ADD(), true);
        return entity_ui.finishForm(this, context);
    }

    // SEARCH funcionalidad_accion
    async createForm_SEARCH(fila = {}) {
        const context = entity_ui.openForm(this, 'SEARCH', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: [],
            send: ['id_funcionalidad', 'id_accion'],
            submit: true
        });
        if (!context) return false;
        await this.dom.rellenarReferencias(this, context, ['id_funcionalidad', 'id_accion']);
        return entity_ui.finishForm(this, context);
    }

    // DELETE funcionalidad_accion
    async createForm_DELETE(fila = {}) {
        const context = entity_ui.openForm(this, 'DELETE', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['id_funcionalidad', 'id_accion'],
            send: ['id_funcionalidad', 'id_accion'],
            submit: true,
            note: 'ui_delete_confirm'
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    // SHOWCURRENT funcionalidad_accion
    async createForm_SHOWCURRENT(fila = {}) {
        const context = entity_ui.openForm(this, 'SHOWCURRENT', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['id_funcionalidad', 'id_accion'],
            send: [],
            submit: false
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

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

    DELETE_submit_funcionalidad_accion() {
        return entity_ui.validateKeys(this);
    }

    SHOWCURRENT_submit_funcionalidad_accion() {
        return true;
    }

    crearTablaDatos(datos) {
        return entity_ui.renderTable(this, datos);
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
