class funcionalidad extends AbstractEntidad {
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
    EDIT_id_funcionalidad_validation() {
        return this.ADD_id_funcionalidad_validation();
    }
    // EDIT nombre_funcionalidad
    EDIT_nombre_funcionalidad_validation() {
        return this.ADD_nombre_funcionalidad_validation();
    }
    // EDIT descrip_funcionalidad
    EDIT_descrip_funcionalidad_validation() {
        return this.ADD_descrip_funcionalidad_validation();
    }
    // SEARCH permite fragmentos y campos vacíos; no exige tamaño mínimo.
    // SEARCH id_funcionalidad
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
    ADD_submit_funcionalidad() {
        const result = entity_ui.validateFields(this, 'ADD', ['nombre_funcionalidad', 'descrip_funcionalidad']);
        return result;
    }
    // EDIT formulario funcionalidad
    EDIT_submit_funcionalidad() {
        const result = entity_ui.validateFields(this, 'EDIT', ['nombre_funcionalidad', 'descrip_funcionalidad']);
        return result;
    }
    // SEARCH formulario funcionalidad
    SEARCH_submit_funcionalidad() {
        const result = entity_ui.validateFields(this, 'SEARCH', ['id_funcionalidad', 'nombre_funcionalidad', 'descrip_funcionalidad']);
        return result;
    }

    // HTML del formulario de funcionalidad. Cada acción lo adapta en createForm_ACCION.
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

    valoresFormulario(fila) {
        const values = entity_access.normalizeRow(this.config, fila);
        return values;
    }

    // ADD funcionalidad
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

    DELETE_submit_funcionalidad() {
        return entity_ui.validateKeys(this);
    }

    SHOWCURRENT_submit_funcionalidad() {
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
