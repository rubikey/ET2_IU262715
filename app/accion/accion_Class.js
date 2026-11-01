class accion extends AbstractEntidad {
    constructor(esTest = null) {
        super();
        // Configuración propia de esta entidad. Core y Base no se modifican.
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
    // Devuelve el primer código de error o true si el campo es correcto.
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
    // ADD nombre_accion
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
    // ADD descrip_accion
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
    // EDIT comparte las restricciones de ADD, incluidos los identificadores.
    // EDIT id_accion
    EDIT_id_accion_validation() {
        return this.ADD_id_accion_validation();
    }
    // EDIT nombre_accion
    EDIT_nombre_accion_validation() {
        return this.ADD_nombre_accion_validation();
    }
    // EDIT descrip_accion
    EDIT_descrip_accion_validation() {
        return this.ADD_descrip_accion_validation();
    }
    // SEARCH permite fragmentos y campos vacíos; no exige tamaño mínimo.
    // SEARCH id_accion
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
    // SEARCH nombre_accion
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
    // SEARCH descrip_accion
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
    // ADD formulario accion
    ADD_submit_accion() {
        const result = entity_ui.validateFields(this, 'ADD', ['nombre_accion', 'descrip_accion']);
        return result;
    }
    // EDIT formulario accion
    EDIT_submit_accion() {
        const result = entity_ui.validateFields(this, 'EDIT', ['nombre_accion', 'descrip_accion']);
        return result;
    }
    // SEARCH formulario accion
    SEARCH_submit_accion() {
        const result = entity_ui.validateFields(this, 'SEARCH', ['id_accion', 'nombre_accion', 'descrip_accion']);
        return result;
    }

    // HTML del formulario de accion. Cada acción lo adapta en createForm_ACCION.
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

    valoresFormulario(fila) {
        const values = entity_access.normalizeRow(this.config, fila);
        return values;
    }

    // ADD accion
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

    // EDIT accion
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

    // SEARCH accion
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

    // DELETE accion
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

    // SHOWCURRENT accion
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

    DELETE_submit_accion() {
        return entity_ui.validateKeys(this);
    }

    SHOWCURRENT_submit_accion() {
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
