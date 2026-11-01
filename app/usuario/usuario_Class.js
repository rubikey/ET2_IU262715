class usuario extends AbstractEntidad {
    constructor(esTest = null) {
        super();
        // Configuración propia de esta entidad. Core y Base no se modifican.
        this.config = {
            "special": ["id_rol"],
            "columnLabels": {"id_rol": "ui_role"},
            "sensitive": ["contrasena"],
            "keys": [
                "dni"
            ],
            "columns": [
                "dni",
                "usuario",
                "id_rol"
            ],
            "references": {
                "id_rol": [
                    "rol",
                    "id_rol",
                    "rol_name"
                ]
            },
            "fields": [
                "dni",
                "usuario",
                "contrasena",
                "id_rol"
            ],
            "components": {
                "dni": "input",
                "usuario": "input",
                "contrasena": "input",
                "id_rol": "select"
            }
        };
        entity_ui.initialize(this, 'usuario', esTest);
    }
    // Devuelve el primer código de error o true si el campo es correcto.
    // ADD dni
    ADD_dni_validation() {
        if (!this.validations.min_size('dni', 9)) {
            this.dom.mostrar_error_campo('dni', 'dni_min_size_ko');
            return 'dni_min_size_ko';
        }
        if (!this.validations.max_size('dni', 9)) {
            this.dom.mostrar_error_campo('dni', 'dni_max_size_ko');
            return 'dni_max_size_ko';
        }
        if (!this.validations.format('dni', /^[0-9]{8}[A-Z]$/)) {
            this.dom.mostrar_error_campo('dni', 'dni_format_ko');
            return 'dni_format_ko';
        }
        if (!this.personalize_dni('dni')) {
            this.dom.mostrar_error_campo('dni', 'dni_personalized_ko');
            return 'dni_personalized_ko';
        }
        this.dom.mostrar_exito_campo('dni');
        return true;
    }
    // personalized: correspondencia entre los ocho números y la letra del DNI.
    personalize_dni(id) {
        const dni = this.dom.valorCampo(id);
        if (!/^[0-9]{8}[A-Z]$/.test(dni)) return false;
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const numero = Number(dni.slice(0, 8));
        return letras[numero % 23] === dni[8];
    }
    // ADD usuario
    ADD_usuario_validation() {
        if (!this.validations.min_size('usuario', 5)) {
            this.dom.mostrar_error_campo('usuario', 'usuario_min_size_ko');
            return 'usuario_min_size_ko';
        }
        if (!this.validations.max_size('usuario', 45)) {
            this.dom.mostrar_error_campo('usuario', 'usuario_max_size_ko');
            return 'usuario_max_size_ko';
        }
        if (!this.validations.format('usuario', /^[A-Za-z]+$/)) {
            this.dom.mostrar_error_campo('usuario', 'usuario_format_ko');
            return 'usuario_format_ko';
        }
        this.dom.mostrar_exito_campo('usuario');
        return true;
    }
    // ADD contrasena
    ADD_contrasena_validation() {
        if (!this.validations.min_size('contrasena', 8)) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_min_size_ko');
            return 'contrasena_min_size_ko';
        }
        if (!this.validations.max_size('contrasena', 45)) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_max_size_ko');
            return 'contrasena_max_size_ko';
        }
        if (!this.validations.format('contrasena', /^[A-Za-z]+$/)) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_format_ko');
            return 'contrasena_format_ko';
        }
        this.dom.mostrar_exito_campo('contrasena');
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
    // EDIT dni
    EDIT_dni_validation() {
        return this.ADD_dni_validation();
    }
    // EDIT usuario
    EDIT_usuario_validation() {
        return this.ADD_usuario_validation();
    }
    // EDIT contrasena
    EDIT_contrasena_validation() {
        // El BACK exige contraseña también en EDIT. Misma regla dentro y fuera de las pruebas.
        return this.ADD_contrasena_validation();
    }
    // EDIT id_rol
    EDIT_id_rol_validation() {
        return this.ADD_id_rol_validation();
    }
    // SEARCH permite fragmentos y campos vacíos; no exige tamaño mínimo.
    // SEARCH dni
    SEARCH_dni_validation() {
        if (!this.validations.max_size('dni', 9)) {
            this.dom.mostrar_error_campo('dni', 'dni_max_size_ko');
            return 'dni_max_size_ko';
        }
        if (!this.validations.format('dni', /^[0-9]*[A-Z]?$/)) {
            this.dom.mostrar_error_campo('dni', 'dni_format_ko');
            return 'dni_format_ko';
        }
        this.dom.mostrar_exito_campo('dni');
        return true;
    }
    // SEARCH usuario
    SEARCH_usuario_validation() {
        if (!this.validations.max_size('usuario', 45)) {
            this.dom.mostrar_error_campo('usuario', 'usuario_max_size_ko');
            return 'usuario_max_size_ko';
        }
        if (!this.validations.format('usuario', /^[A-Za-z]*$/)) {
            this.dom.mostrar_error_campo('usuario', 'usuario_format_ko');
            return 'usuario_format_ko';
        }
        this.dom.mostrar_exito_campo('usuario');
        return true;
    }
    // SEARCH contrasena
    SEARCH_contrasena_validation() {
        if (!this.validations.max_size('contrasena', 45)) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_max_size_ko');
            return 'contrasena_max_size_ko';
        }
        if (!this.validations.format('contrasena', /^[A-Za-z]*$/)) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_format_ko');
            return 'contrasena_format_ko';
        }
        this.dom.mostrar_exito_campo('contrasena');
        return true;
    }
    // SEARCH id_rol
    SEARCH_id_rol_validation() {
        const valor = this.dom.valorCampo('id_rol');
        if (!this.validations.max_size('id_rol', 11)) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_max_size_ko');
            return 'id_rol_max_size_ko';
        }
        // El vacío permite todos los roles; los demás valores son IDs completos.
        if (valor !== '' && !this.validations.format('id_rol', /^[0-9]+$/)) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_format_ko');
            return 'id_rol_format_ko';
        }
        this.dom.mostrar_exito_campo('id_rol');
        return true;
    }
    // ADD formulario usuario
    ADD_submit_usuario() {
        const result = entity_ui.validateFields(this, 'ADD', ['dni', 'usuario', 'contrasena', 'id_rol']);
        return result;
    }
    // EDIT formulario usuario
    EDIT_submit_usuario() {
        const result = entity_ui.validateFields(this, 'EDIT', ['usuario', 'contrasena', 'id_rol']);
        return result;
    }
    // SEARCH formulario usuario
    SEARCH_submit_usuario() {
        const result = entity_ui.validateFields(this, 'SEARCH', ['dni', 'usuario', 'id_rol']);
        return result;
    }

    // HTML del formulario de usuario. Cada acción lo adapta en createForm_ACCION.
    manual_form_creation() {
        return `
            <form id="form_iu" method="POST" enctype="multipart/form-data" novalidate>
                <div class="et2-field">
                    <label id="label_dni" class="label_dni" for="dni"></label>
                    <input id="dni" name="dni" aria-describedby="span_error_dni" type="text">
                    <span id="span_error_dni" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_dni"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_usuario" class="label_usuario" for="usuario"></label>
                    <input id="usuario" name="usuario" aria-describedby="span_error_usuario" type="text">
                    <span id="span_error_usuario" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_usuario"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_contrasena" class="label_contrasena" for="contrasena"></label>
                    <input id="contrasena" name="contrasena" aria-describedby="span_error_contrasena" type="password" autocomplete="new-password">
                    <span id="span_error_contrasena" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_contrasena"></a></span>
                </div>
                <div class="et2-field">
                    <label id="label_id_rol" class="ui_role" for="id_rol"></label>
                    <select id="id_rol" name="id_rol" aria-describedby="span_error_id_rol"><option value="" class="ui_select"></option></select>
                    <span id="span_error_id_rol" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_id_rol"></a></span>
                </div>
                <p id="et2_form_note" role="status" hidden></p>
                <div class="et2-form-actions"></div>
            </form>`;
    }

    valoresFormulario(fila) {
        const values = entity_access.normalizeRow(this.config, fila);
        return values;
    }

    // ADD usuario
    async createForm_ADD(fila = {}) {
        const context = entity_ui.openForm(this, 'ADD', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: [],
            send: ['dni', 'usuario', 'contrasena', 'id_rol'],
            submit: true
        });
        if (!context) return false;
        await this.dom.rellenarReferencias(this, context, ['id_rol']);
        return entity_ui.finishForm(this, context);
    }

    // EDIT usuario
    async createForm_EDIT(fila = {}) {
        const context = entity_ui.openForm(this, 'EDIT', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['dni'],
            send: ['dni', 'usuario', 'contrasena', 'id_rol'],
            submit: true,
            note: 'ui_password_edit'
        });
        if (!context) return false;
        await this.dom.rellenarReferencias(this, context, ['id_rol']);
        return entity_ui.finishForm(this, context);
    }

    // SEARCH usuario
    async createForm_SEARCH(fila = {}) {
        const context = entity_ui.openForm(this, 'SEARCH', this.valoresFormulario(fila), {
            hidden: ['contrasena'],
            readOnly: [],
            send: ['dni', 'usuario', 'id_rol'],
            submit: true
        });
        if (!context) return false;
        await this.dom.rellenarReferencias(this, context, ['id_rol']);
        return entity_ui.finishForm(this, context);
    }

    // DELETE usuario
    async createForm_DELETE(fila = {}) {
        const context = entity_ui.openForm(this, 'DELETE', this.valoresFormulario(fila), {
            hidden: ['contrasena'],
            readOnly: ['dni', 'usuario', 'contrasena', 'id_rol'],
            send: ['dni'],
            submit: true,
            note: 'ui_delete_confirm'
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    // SHOWCURRENT usuario
    async createForm_SHOWCURRENT(fila = {}) {
        const context = entity_ui.openForm(this, 'SHOWCURRENT', this.valoresFormulario(fila), {
            hidden: ['contrasena'],
            readOnly: ['dni', 'usuario', 'contrasena', 'id_rol'],
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

    DELETE_submit_usuario() {
        return entity_ui.validateKeys(this);
    }

    SHOWCURRENT_submit_usuario() {
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
