class rolaccionfuncionalidad extends AbstractEntidad {
    constructor(esTest = null) {
        super();
        // Configuración propia de esta entidad. Core y Base no se modifican.
        this.config = {
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
    // ADD formulario rolaccionfuncionalidad
    ADD_submit_rolaccionfuncionalidad() {
        const result = entity_ui.validateFields(this, 'ADD', ['id_funcionalidad', 'id_accion', 'id_rol']);
        if (result !== true) return result;
        return this.personalize_id_accion_combinacion();
    }
    // EDIT formulario rolaccionfuncionalidad
    EDIT_submit_rolaccionfuncionalidad() {
        this.dom.abrirModalError('ui_association_edit');
        return false;
    }
    // SEARCH formulario rolaccionfuncionalidad
    SEARCH_submit_rolaccionfuncionalidad() {
        const result = entity_ui.validateFields(this, 'SEARCH', ['id_funcionalidad', 'id_accion', 'id_rol']);
        if (result !== true) return result;
        return this.personalize_id_accion_combinacion();
    }

    // HTML del formulario de rolaccionfuncionalidad. Cada acción lo adapta en createForm_ACCION.
    manual_form_creation() {
        return `
            <form id="form_iu" method="POST" enctype="multipart/form-data" novalidate>
                <div class="et2-field">
                    <label id="label_id_rol" class="ui_role" for="id_rol"></label>
                    <select id="id_rol" name="id_rol" aria-describedby="span_error_id_rol"><option value="" class="ui_select"></option></select>
                    <span id="span_error_id_rol" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_id_rol"></a></span>
                </div>
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

    // ADD rolaccionfuncionalidad
    async createForm_ADD(fila = {}) {
        const context = entity_ui.openForm(this, 'ADD', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: [],
            send: ['id_funcionalidad', 'id_accion', 'id_rol'],
            submit: true
        });
        if (!context) return false;
        await this.dom.rellenarReferencias(this, context, ['id_rol', 'id_funcionalidad']);
        await this.prepararAccionesDisponibles(context);
        return entity_ui.finishForm(this, context);
    }

    // EDIT rolaccionfuncionalidad
    async createForm_EDIT(fila = {}) {
        const context = entity_ui.openForm(this, 'EDIT', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['id_funcionalidad', 'id_accion', 'id_rol'],
            send: [],
            submit: false,
            note: 'ui_association_edit'
        });
        if (!context) return false;
        this.dom.crearBotonAccion(context, 'ui_new_association', () => this.createForm_ADD(), true);
        return entity_ui.finishForm(this, context);
    }

    // SEARCH rolaccionfuncionalidad
    async createForm_SEARCH(fila = {}) {
        const context = entity_ui.openForm(this, 'SEARCH', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: [],
            send: ['id_funcionalidad', 'id_accion', 'id_rol'],
            submit: true
        });
        if (!context) return false;
        await this.dom.rellenarReferencias(this, context, ['id_rol', 'id_funcionalidad']);
        await this.prepararAccionesDisponibles(context);
        return entity_ui.finishForm(this, context);
    }

    // DELETE rolaccionfuncionalidad
    async createForm_DELETE(fila = {}) {
        const context = entity_ui.openForm(this, 'DELETE', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['id_funcionalidad', 'id_accion', 'id_rol'],
            send: ['id_funcionalidad', 'id_accion', 'id_rol'],
            submit: true,
            note: 'ui_delete_confirm'
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    // SHOWCURRENT rolaccionfuncionalidad
    async createForm_SHOWCURRENT(fila = {}) {
        const context = entity_ui.openForm(this, 'SHOWCURRENT', this.valoresFormulario(fila), {
            hidden: [],
            readOnly: ['id_funcionalidad', 'id_accion', 'id_rol'],
            send: [],
            submit: false
        });
        if (!context) return false;
        return entity_ui.finishForm(this, context);
    }

    async prepararAccionesDisponibles(context) {
        const update = async () => {
            const revision = context.actionRevision = (context.actionRevision || 0) + 1;
            const previous = this.dom.valorCampo('id_accion', context);
            const selected = this.dom.valorCampo('id_funcionalidad', context);
            context.loading++;
            entity_ui.updateSubmit(context);
            try {
                const [pairs, actions] = await Promise.all([
                    entity_access.records(this, 'funcionalidad_accion'),
                    entity_access.records(this, 'accion')
                ]);
                if (!entity_ui.current(this, context) || revision !== context.actionRevision) return;
                this.availablePairs = pairs;
                const allowed = new Set(pairs.filter(row => selected ? row.id_funcionalidad === selected : context.action === 'SEARCH').map(row => row.id_accion));
                const options = actions.filter(row => allowed.has(row.id_accion)).map(row => ({ value: row.id_accion, label: row.nombre_accion || row.id_accion }));
                context.emptyNote = selected && !options.length ? 'ui_no_functionality_actions' : null;
                this.dom.bloquearCampo(context, 'id_accion', false);
                this.dom.rellenarOpciones(this, context, 'id_accion', options, previous);
                if (context.action === 'ADD' && !selected) {
                    this.dom.esperarSeleccion(context, 'id_accion', 'ui_choose_functionality');
                }
            } catch (error) {
                if (entity_ui.current(this, context) && revision === context.actionRevision) {
                    context.referenceError = true;
                    this.dom.abrirModalError(error.message);
                }
            } finally {
                context.loading--;
                if (entity_ui.current(this, context)) entity_ui.updateSubmit(context);
            }
        };
        this.dom.observarCampo(context, 'id_funcionalidad', 'change', update);
        await update();
    }
    personalize_id_accion_combinacion() {
        const functional = this.dom.valorCampo('id_funcionalidad');
        const action = this.dom.valorCampo('id_accion');
        // En SEARCH se permite filtrar solo por uno de los dos campos.
        if (!functional || !action) return true;
        if (this.availablePairs?.some(row => row.id_funcionalidad === functional && row.id_accion === action)) return true;
        this.dom.mostrar_error_campo('id_accion', 'ui_invalid_pair');
        return { id_accion: 'ui_invalid_pair' };
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

    DELETE_submit_rolaccionfuncionalidad() {
        return entity_ui.validateKeys(this);
    }

    SHOWCURRENT_submit_rolaccionfuncionalidad() {
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
