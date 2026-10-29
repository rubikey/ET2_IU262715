class persona extends AbstractEntidad {
    constructor(esTest = null) {
        super();
        entity_ui.initialize(this, 'persona', esTest);
    }
    // Cada método devuelve el primer código de error o true si el campo es correcto.
    // ADD dni
    ADD_dni_validation() {
        if (!(this.validations.min_size('dni', 9))) {
            this.dom.mostrar_error_campo('dni', 'dni_min_size_ko');
            return 'dni_min_size_ko';
        }
        if (!(this.validations.max_size('dni', 9))) {
            this.dom.mostrar_error_campo('dni', 'dni_max_size_ko');
            return 'dni_max_size_ko';
        }
        if (!(this.validations.format('dni', '^[0-9]{8}[A-Z]$'))) {
            this.dom.mostrar_error_campo('dni', 'dni_format_ko');
            return 'dni_format_ko';
        }
        if (!(this.personalize_dni('dni'))) {
            this.dom.mostrar_error_campo('dni', 'dni_personalized_ko');
            return 'dni_personalized_ko';
        }
        this.dom.mostrar_exito_campo('dni');
        return true;
    }
    // ADD nombre_persona
    ADD_nombre_persona_validation() {
        if (!(this.validations.min_size('nombre_persona', 2))) {
            this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_min_size_ko');
            return 'nombre_persona_min_size_ko';
        }
        if (!(this.validations.max_size('nombre_persona', 45))) {
            this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_max_size_ko');
            return 'nombre_persona_max_size_ko';
        }
        if (!(this.validations.format('nombre_persona', '^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ. -]+$'))) {
            this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_format_ko');
            return 'nombre_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('nombre_persona');
        return true;
    }
    // ADD apellidos_persona
    ADD_apellidos_persona_validation() {
        if (!(this.validations.min_size('apellidos_persona', 3))) {
            this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_min_size_ko');
            return 'apellidos_persona_min_size_ko';
        }
        if (!(this.validations.max_size('apellidos_persona', 100))) {
            this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_max_size_ko');
            return 'apellidos_persona_max_size_ko';
        }
        if (!(this.validations.format('apellidos_persona', '^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ. -]+$'))) {
            this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_format_ko');
            return 'apellidos_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('apellidos_persona');
        return true;
    }
    // ADD fechaNacimiento_persona
    ADD_fechaNacimiento_persona_validation() {
        if (!(this.validations.format('fechaNacimiento_persona', '^[0-9]{2}/[0-9]{2}/[0-9]{4}$'))) {
            this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_format_ko');
            return 'fechaNacimiento_persona_format_ko';
        }
        if (!(this.personalize_fechaNacimiento_persona_existente())) {
            this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_personalized_inexistente_ko');
            return 'fechaNacimiento_persona_personalized_inexistente_ko';
        }
        if (!(this.personalize_fechaNacimiento_persona_no_futura())) {
            this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_personalized_futura_ko');
            return 'fechaNacimiento_persona_personalized_futura_ko';
        }
        this.dom.mostrar_exito_campo('fechaNacimiento_persona');
        return true;
    }
    // ADD direccion_persona
    ADD_direccion_persona_validation() {
        if (!this.validations.min_size('direccion_persona', 10)) {
            this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_min_size_ko');
            return 'direccion_persona_min_size_ko';
        }
        if (!this.validations.max_size('direccion_persona', 200)) {
            this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_max_size_ko');
            return 'direccion_persona_max_size_ko';
        }
        if (!(this.validations.format('direccion_persona', '^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9.; /-]+$'))) {
            this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_format_ko');
            return 'direccion_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('direccion_persona');
        return true;
    }
    // ADD telefono_persona
    ADD_telefono_persona_validation() {
        if (!(this.validations.min_size('telefono_persona', 9))) {
            this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_min_size_ko');
            return 'telefono_persona_min_size_ko';
        }
        if (!(this.validations.max_size('telefono_persona', 9))) {
            this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_max_size_ko');
            return 'telefono_persona_max_size_ko';
        }
        if (!(this.validations.format('telefono_persona', '^[0-9]{9}$'))) {
            this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_format_ko');
            return 'telefono_persona_format_ko';
        }
        if (!this.personalize_telefono_persona()) {
            this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_personalized_ko');
            return 'telefono_persona_personalized_ko';
        }
        this.dom.mostrar_exito_campo('telefono_persona');
        return true;
    }
    // ADD email_persona
    ADD_email_persona_validation() {
        if (!this.validations.min_size('email_persona', 1)) {
            this.dom.mostrar_error_campo('email_persona', 'email_persona_min_size_ko');
            return 'email_persona_min_size_ko';
        }
        if (!(this.validations.max_size('email_persona', 45))) {
            this.dom.mostrar_error_campo('email_persona', 'email_persona_max_size_ko');
            return 'email_persona_max_size_ko';
        }
        if (!(this.validations.format('email_persona', /^[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/.source))) {
            this.dom.mostrar_error_campo('email_persona', 'email_persona_format_ko');
            return 'email_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('email_persona');
        return true;
    }
    // ADD foto_persona
    ADD_foto_persona_validation() {
        return this.personalize_foto_persona_nombre('foto_persona');
    }
    // ADD nuevo_foto_persona
    ADD_nuevo_foto_persona_validation() {
        return this.personalize_nuevo_foto_persona_fichero('nuevo_foto_persona', true);
    }



    // ADD y EDIT comparten las mismas restricciones en estos campos
    // EDIT dni
    EDIT_dni_validation() {
        return this.ADD_dni_validation();
    }
    // EDIT nombre_persona
    EDIT_nombre_persona_validation() {
        return this.ADD_nombre_persona_validation();
    }
    // EDIT apellidos_persona
    EDIT_apellidos_persona_validation() {
        return this.ADD_apellidos_persona_validation();
    }
    // EDIT fechaNacimiento_persona
    EDIT_fechaNacimiento_persona_validation() {
        return this.ADD_fechaNacimiento_persona_validation();
    }
    // EDIT direccion_persona
    EDIT_direccion_persona_validation() {
        return this.ADD_direccion_persona_validation();
    }
    // EDIT telefono_persona
    EDIT_telefono_persona_validation() {
        return this.ADD_telefono_persona_validation();
    }
    // EDIT email_persona
    EDIT_email_persona_validation() {
        return this.ADD_email_persona_validation();
    }
    // EDIT foto_persona
    EDIT_foto_persona_validation() {
        return this.personalize_foto_persona_nombre('foto_persona');
    }
    // EDIT nuevo_foto_persona
    EDIT_nuevo_foto_persona_validation() {
        return this.personalize_nuevo_foto_persona_fichero('nuevo_foto_persona', false);
    }
    // SEARCH acepta el campo vacío y no impone tamaños mínimos.
    // SEARCH dni
    SEARCH_dni_validation() {
        if (!(this.validations.max_size('dni', 9))) {
            this.dom.mostrar_error_campo('dni', 'dni_max_size_ko');
            return 'dni_max_size_ko';
        }
        if (!(this.validations.format('dni', '^[0-9]*[A-Z]?$'))) {
            this.dom.mostrar_error_campo('dni', 'dni_format_ko');
            return 'dni_format_ko';
        }
        this.dom.mostrar_exito_campo('dni');
        return true;
    }
    // SEARCH nombre_persona
    SEARCH_nombre_persona_validation() {
        if (!(this.validations.max_size('nombre_persona', 45))) {
            this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_max_size_ko');
            return 'nombre_persona_max_size_ko';
        }
        if (!(this.validations.format('nombre_persona', '^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ. -]*$'))) {
            this.dom.mostrar_error_campo('nombre_persona', 'nombre_persona_format_ko');
            return 'nombre_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('nombre_persona');
        return true;
    }
    // SEARCH apellidos_persona
    SEARCH_apellidos_persona_validation() {
        if (!(this.validations.max_size('apellidos_persona', 100))) {
            this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_max_size_ko');
            return 'apellidos_persona_max_size_ko';
        }
        if (!(this.validations.format('apellidos_persona', '^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ. -]*$'))) {
            this.dom.mostrar_error_campo('apellidos_persona', 'apellidos_persona_format_ko');
            return 'apellidos_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('apellidos_persona');
        return true;
    }
    // SEARCH fechaNacimiento_persona
    SEARCH_fechaNacimiento_persona_validation() {
        if (!(this.validations.max_size('fechaNacimiento_persona', 10))) {
            this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_max_size_ko');
            return 'fechaNacimiento_persona_max_size_ko';
        }
        if (!(this.validations.format('fechaNacimiento_persona', '^[0-9/]*$'))) {
            this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_format_ko');
            return 'fechaNacimiento_persona_format_ko';
        }
        if (!this.personalize_fechaNacimiento_persona_busqueda()) {
            this.dom.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_personalized_inexistente_ko');
            return 'fechaNacimiento_persona_personalized_inexistente_ko';
        }
        this.dom.mostrar_exito_campo('fechaNacimiento_persona');
        return true;
    }
    // SEARCH direccion_persona
    SEARCH_direccion_persona_validation() {
        if (!this.validations.max_size('direccion_persona', 200)) {
            this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_max_size_ko');
            return 'direccion_persona_max_size_ko';
        }
        if (!(this.validations.format('direccion_persona', '^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9.; /-]*$'))) {
            this.dom.mostrar_error_campo('direccion_persona', 'direccion_persona_format_ko');
            return 'direccion_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('direccion_persona');
        return true;
    }
    // SEARCH telefono_persona
    SEARCH_telefono_persona_validation() {
        if (!(this.validations.max_size('telefono_persona', 9))) {
            this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_max_size_ko');
            return 'telefono_persona_max_size_ko';
        }
        if (!(this.validations.format('telefono_persona', '^[0-9]*$'))) {
            this.dom.mostrar_error_campo('telefono_persona', 'telefono_persona_format_ko');
            return 'telefono_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('telefono_persona');
        return true;
    }
    // SEARCH email_persona
    SEARCH_email_persona_validation() {
        if (!(this.validations.max_size('email_persona', 45))) {
            this.dom.mostrar_error_campo('email_persona', 'email_persona_max_size_ko');
            return 'email_persona_max_size_ko';
        }
        if (!(this.validations.format('email_persona', /^[^\s\x00-\x1f\x7f]*$/.source))) {
            this.dom.mostrar_error_campo('email_persona', 'email_persona_format_ko');
            return 'email_persona_format_ko';
        }
        this.dom.mostrar_exito_campo('email_persona');
        return true;
    }
    // SEARCH foto_persona
    SEARCH_foto_persona_validation() {
        return this.personalize_foto_persona_busqueda('foto_persona');
    }
    // SEARCH nuevo_foto_persona
    SEARCH_nuevo_foto_persona_validation() {
        return this.personalize_nuevo_foto_persona_fichero('nuevo_foto_persona', false);
    }
    // foto_persona utiliza input: contiene el nombre de la foto almacenada.
    // nuevo_foto_persona utiliza file en las tres acciones; en el formulario solo aparece en ADD/EDIT.
    personalize_foto_persona_nombre(id) {
        const error = regla => {
            const codigo = `${id}_${regla}_ko`;
            this.dom.mostrar_error_campo(id, codigo);
            return codigo;
        };
        if (!this.validations.min_size(id, 5)) return error('min_size');
        if (!this.validations.max_size(id, 15)) return error('max_size');
        if (!this.validations.format(id, /^[A-Za-z.]*[A-Za-z][A-Za-z.]*\.jpe?g$/i)) {
            return error('format');
        }
        this.dom.mostrar_exito_campo(id);
        return true;
    }
    personalize_nuevo_foto_persona_fichero(id, obligatorio) {
        const error = regla => {
            const codigo = `${id}_${regla}_ko`;
            this.dom.mostrar_error_campo(id, codigo);
            return codigo;
        };
        if (!this.validations.exist_file(id)) {
            if (obligatorio) return error('exist_file');
            this.dom.mostrar_exito_campo(id);
            return true;
        }
        const nombre = document.getElementById(id).files[0].name;
        if (nombre.length < 5) return error('min_size');
        if (nombre.length > 15) return error('max_size');
        if (!this.validations.format_name_file(id, /^[A-Za-z.]*[A-Za-z][A-Za-z.]*\.[A-Za-z]+$/)) {
            return error('format_name_file');
        }
        if (!(this.validations.type_file(id, ['image/jpeg']) &&
            this.validations.format_name_file(id, /\.jpe?g$/i))) {
            return error('type_file');
        }
        if (!this.validations.max_size_file(id, 2097152)) {
            return error('max_size_file');
        }
        this.dom.mostrar_exito_campo(id);
        return true;
    }
    personalize_foto_persona_busqueda(id) {
        if (!this.validations.max_size(id, 15)) {
            const codigo = `${id}_max_size_ko`;
            this.dom.mostrar_error_campo(id, codigo);
            return codigo;
        }
        if (!this.validations.format(id, '^[A-Za-z.]*$')) {
            const codigo = `${id}_format_ko`;
            this.dom.mostrar_error_campo(id, codigo);
            return codigo;
        }
        this.dom.mostrar_exito_campo(id);
        return true;
    }
    // personalized: el formato comprueba los nueve dígitos; esta regla comprueba la numeración española.
    personalize_telefono_persona() {
        return /^[6789]/.test(document.getElementById('telefono_persona').value);
    }
    // SEARCH acepta fragmentos y vacío; una fecha completa debe existir en el calendario.
    personalize_fechaNacimiento_persona_busqueda() {
        const valor = document.getElementById('fechaNacimiento_persona').value;
        return !/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(valor)
            || this.personalize_fechaNacimiento_persona_existente();
    }
    // personalized: correspondencia entre los ocho números y la letra del DNI.
    personalize_dni(id) {
        const dni = document.getElementById(id).value;
        if (!/^[0-9]{8}[A-Z]$/.test(dni)) return false;
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const numero = Number(dni.slice(0, 8));
        return letras[numero % 23] === dni[8];
    }
    // personalized: fecha existente, incluyendo las reglas de años bisiestos.
    personalize_fechaNacimiento_persona_existente() {
        const valor = document.getElementById('fechaNacimiento_persona').value;
        if (!/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(valor)) return false;
        const [dia, mes, anio] = valor.split('/').map(Number);
        if (anio < 1 || mes < 1 || mes > 12 || dia < 1) return false;
        const bisiesto = anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0);
        const diasDelMes = [31, bisiesto ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return dia <= diasDelMes[mes - 1];
    }
    // personalized: comparar con el día actual, sin depender de la hora.
    personalize_fechaNacimiento_persona_no_futura() {
        if (!this.personalize_fechaNacimiento_persona_existente()) return false;
        const valor = document.getElementById('fechaNacimiento_persona').value;
        const [dia, mes, anio] = valor.split('/').map(Number);
        const hoy = new Date();
        const fecha = anio * 10000 + mes * 100 + dia;
        const fechaHoy = hoy.getFullYear() * 10000 + (hoy.getMonth() + 1) * 100 + hoy.getDate();
        return fecha <= fechaHoy;
    }
    // ADD formulario persona
    ADD_submit_persona() {
        return entity_ui.validateSubmit(this, 'ADD');
    }
    // EDIT formulario persona
    EDIT_submit_persona() {
        return entity_ui.validateSubmit(this, 'EDIT');
    }
    // SEARCH formulario persona
    SEARCH_submit_persona() {
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
    DELETE_submit_persona() { return entity_ui.validateSubmit(this, 'DELETE'); }
    SHOWCURRENT_submit_persona() { return entity_ui.validateSubmit(this, 'SHOWCURRENT'); }
    crearTablaDatos(datos) { return entity_ui.renderTable(this, datos); }
    modificarcolumnasamostrar(atributo) { return entity_ui.toggleColumn(this, atributo); }
    mostrarcambioatributo(atributo, valor) { return entity_ui.displayValue(this, atributo, valor); }
    cambiarmostrarespecial(atributo, valor) { return this.mostrarcambioatributo(atributo, valor); }
}
