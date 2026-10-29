class rol extends AbstractEntidad {
    constructor(esTest = null) {
        super();
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
        return entity_ui.validateSubmit(this, 'ADD');
    }
    // EDIT formulario rol
    EDIT_submit_rol() {
        return entity_ui.validateSubmit(this, 'EDIT');
    }
    // SEARCH formulario rol
    SEARCH_submit_rol() {
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
    DELETE_submit_rol() { return entity_ui.validateSubmit(this, 'DELETE'); }
    SHOWCURRENT_submit_rol() { return entity_ui.validateSubmit(this, 'SHOWCURRENT'); }
    crearTablaDatos(datos) { return entity_ui.renderTable(this, datos); }
    modificarcolumnasamostrar(atributo) { return entity_ui.toggleColumn(this, atributo); }
    mostrarcambioatributo(atributo, valor) { return entity_ui.displayValue(this, atributo, valor); }
    cambiarmostrarespecial(atributo, valor) { return this.mostrarcambioatributo(atributo, valor); }
}
