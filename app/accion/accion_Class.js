class accion extends AbstractEntidad {
    constructor(esTest = null) {
        super();
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
        return entity_ui.validateSubmit(this, 'ADD');
    }
    // EDIT formulario accion
    EDIT_submit_accion() {
        return entity_ui.validateSubmit(this, 'EDIT');
    }
    // SEARCH formulario accion
    SEARCH_submit_accion() {
        return entity_ui.validateSubmit(this, 'SEARCH');
    }

    manual_form_creation() { return entity_ui.formMarkup(this); }
    createForm_ADD(fila = {}) { return entity_ui.prepare(this, 'ADD', fila); }
    createForm_EDIT(fila = {}) { return entity_ui.prepare(this, 'EDIT', fila); }
    createForm_SEARCH(fila = {}) { return entity_ui.prepare(this, 'SEARCH', fila); }
    createForm_DELETE(fila = {}) { return entity_ui.prepare(this, 'DELETE', fila); }
    createForm_SHOWCURRENT(fila = {}) { return entity_ui.prepare(this, 'SHOWCURRENT', fila); }
    ADD() { return entity_ui.run(this, 'ADD'); }
    EDIT() { return entity_ui.run(this, 'EDIT'); }
    SEARCH() { return entity_ui.run(this, 'SEARCH'); }
    DELETE() { return entity_ui.run(this, 'DELETE'); }
    DELETE_submit_accion() { return entity_ui.validateSubmit(this, 'DELETE'); }
    SHOWCURRENT_submit_accion() { return entity_ui.validateSubmit(this, 'SHOWCURRENT'); }
    crearTablaDatos(datos) { return entity_ui.renderTable(this, datos); }
    modificarcolumnasamostrar(atributo) { return entity_ui.toggleColumn(this, atributo); }
    mostrarcambioatributo(atributo, valor) { return entity_ui.displayValue(this, atributo, valor); }
    cambiarmostrarespecial(atributo, valor) { return this.mostrarcambioatributo(atributo, valor); }
}
