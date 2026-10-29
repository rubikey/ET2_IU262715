class funcionalidad_accion extends AbstractEntidad {
    constructor(esTest = null) {
        super();
        entity_ui.initialize(this, 'funcionalidad_accion', esTest);
    }
    // Devuelve el primer código de error o true si el campo es correcto.
    // ADD id_funcionalidad
    ADD_id_funcionalidad_validation() {
        // Validations del profesor no comprueba los tamaños de un select.
        const valor = document.getElementById('id_funcionalidad').value;
        if (valor.length < 1) {
            this.dom.mostrar_error_campo('id_funcionalidad', 'id_funcionalidad_min_size_ko');
            return 'id_funcionalidad_min_size_ko';
        }
        if (valor.length > 11) {
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
        // Validations del profesor no comprueba los tamaños de un select.
        const valor = document.getElementById('id_accion').value;
        if (valor.length < 1) {
            this.dom.mostrar_error_campo('id_accion', 'id_accion_min_size_ko');
            return 'id_accion_min_size_ko';
        }
        if (valor.length > 11) {
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
        const valor = document.getElementById('id_funcionalidad').value;
        if (valor.length > 11) {
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
        const valor = document.getElementById('id_accion').value;
        if (valor.length > 11) {
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
        return entity_ui.validateSubmit(this, 'ADD');
    }
    // EDIT formulario funcionalidad_accion
    EDIT_submit_funcionalidad_accion() {
        return entity_ui.validateSubmit(this, 'EDIT');
    }
    // SEARCH formulario funcionalidad_accion
    SEARCH_submit_funcionalidad_accion() {
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
    DELETE_submit_funcionalidad_accion() { return entity_ui.validateSubmit(this, 'DELETE'); }
    SHOWCURRENT_submit_funcionalidad_accion() { return entity_ui.validateSubmit(this, 'SHOWCURRENT'); }
    crearTablaDatos(datos) { return entity_ui.renderTable(this, datos); }
    modificarcolumnasamostrar(atributo) { return entity_ui.toggleColumn(this, atributo); }
    mostrarcambioatributo(atributo, valor) { return entity_ui.displayValue(this, atributo, valor); }
    cambiarmostrarespecial(atributo, valor) { return this.mostrarcambioatributo(atributo, valor); }
}
