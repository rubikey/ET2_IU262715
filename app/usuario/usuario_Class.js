class usuario extends AbstractEntidad {
    constructor(esTest = null) {
        super();
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
        const dni = document.getElementById(id).value;
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
        // Comprobar el tamaño aquí permite mantener Validations original.
        const valor = document.getElementById('contrasena').value;
        if (valor.length < 8) {
            this.dom.mostrar_error_campo('contrasena', 'contrasena_min_size_ko');
            return 'contrasena_min_size_ko';
        }
        if (valor.length > 45) {
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
        // Validations del profesor no comprueba los tamaños de un select.
        const valor = document.getElementById('id_rol').value;
        if (valor.length < 1) {
            this.dom.mostrar_error_campo('id_rol', 'id_rol_min_size_ko');
            return 'id_rol_min_size_ko';
        }
        if (valor.length > 11) {
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
        const valor = document.getElementById('contrasena').value;
        if (valor.length > 45) {
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
        const valor = document.getElementById('id_rol').value;
        if (valor.length > 11) {
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
        return entity_ui.validateSubmit(this, 'ADD');
    }
    // EDIT formulario usuario
    EDIT_submit_usuario() {
        return entity_ui.validateSubmit(this, 'EDIT');
    }
    // SEARCH formulario usuario
    SEARCH_submit_usuario() {
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
    DELETE_submit_usuario() { return entity_ui.validateSubmit(this, 'DELETE'); }
    SHOWCURRENT_submit_usuario() { return entity_ui.validateSubmit(this, 'SHOWCURRENT'); }
    crearTablaDatos(datos) { return entity_ui.renderTable(this, datos); }
    modificarcolumnasamostrar(atributo) { return entity_ui.toggleColumn(this, atributo); }
    mostrarcambioatributo(atributo, valor) { return entity_ui.displayValue(this, atributo, valor); }
    cambiarmostrarespecial(atributo, valor) { return this.mostrarcambioatributo(atributo, valor); }
}
