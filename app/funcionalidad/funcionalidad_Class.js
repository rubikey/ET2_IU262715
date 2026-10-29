class funcionalidad extends AbstractEntidad {
    constructor(esTest = null) {
        super();
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
        return entity_ui.validateSubmit(this, 'ADD');
    }
    // EDIT formulario funcionalidad
    EDIT_submit_funcionalidad() {
        return entity_ui.validateSubmit(this, 'EDIT');
    }
    // SEARCH formulario funcionalidad
    SEARCH_submit_funcionalidad() {
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
    DELETE_submit_funcionalidad() { return entity_ui.validateSubmit(this, 'DELETE'); }
    SHOWCURRENT_submit_funcionalidad() { return entity_ui.validateSubmit(this, 'SHOWCURRENT'); }
    crearTablaDatos(datos) { return entity_ui.renderTable(this, datos); }
    modificarcolumnasamostrar(atributo) { return entity_ui.toggleColumn(this, atributo); }
    mostrarcambioatributo(atributo, valor) { return entity_ui.displayValue(this, atributo, valor); }
    cambiarmostrarespecial(atributo, valor) { return this.mostrarcambioatributo(atributo, valor); }
}
