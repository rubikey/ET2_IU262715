class rol extends AbstractEntidad {
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
    EDIT_id_rol_validation() {
        return this.ADD_id_rol_validation();
    }
    // EDIT rol_name
    EDIT_rol_name_validation() {
        return this.ADD_rol_name_validation();
    }
    // EDIT rol_description
    EDIT_rol_description_validation() {
        return this.ADD_rol_description_validation();
    }
    // SEARCH permite fragmentos y campos vacíos; no exige tamaño mínimo.
    // SEARCH id_rol
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
    ADD_submit_rol() {
        const result = entity_ui.validateFields(this, 'ADD', ['rol_name', 'rol_description']);
        return result;
    }
    // EDIT formulario rol
    EDIT_submit_rol() {
        const result = entity_ui.validateFields(this, 'EDIT', ['rol_name', 'rol_description']);
        return result;
    }
    // SEARCH formulario rol
    SEARCH_submit_rol() {
        const result = entity_ui.validateFields(this, 'SEARCH', ['id_rol', 'rol_name', 'rol_description']);
        return result;
    }

    // HTML del formulario de rol. Cada acción lo adapta en createForm_ACCION.
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

    valoresFormulario(fila) {
        const values = entity_access.normalizeRow(this.config, fila);
        return values;
    }

    // ADD rol
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

    DELETE_submit_rol() {
        return entity_ui.validateKeys(this);
    }

    SHOWCURRENT_submit_rol() {
        return true;
    }

    crearTablaDatos(datos) {
        return entity_ui.renderTable(this, datos);
    }
    modificarcolumnasamostrar(atributo) {
        return entity_ui.toggleColumn(this, atributo);
    }
    mostrarcambioatributo(atributo, valor) {
        return valor ?? '';
    }
    cambiarmostrarespecial(atributo, valor) {
        return this.mostrarcambioatributo(atributo, valor);
    }
}
