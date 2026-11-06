/**
 * @typedef {'ADD'|'EDIT'|'SEARCH'|'DELETE'|'SHOWCURRENT'} AccionFormulario
 */
/**
 * @typedef {true|string} ResultadoCampo
 */
/**
 * @typedef {boolean|Object<string, true|string>} ResultadoSubmit
 */
/**
 * @typedef {Object<string, *>} RegistroEntidad
 */
/**
 * @typedef {Object<string, *>} ResultadoPrueba
 */
/**
 * @typedef {persona|usuario|rol|accion|funcionalidad|funcionalidad_accion|rolaccionfuncionalidad} EntidadProyecto
 */
/**
 * @typedef {Object} OpcionReferencia
 * @property {string} value - identificador enviado al back
 * @property {string} label - texto que se presenta al usuario
 */
/**
 * @typedef {Object} ConfiguracionEntidad
 * @property {string[]} keys - atributos que identifican cada registro
 * @property {string[]} columns - columnas visibles inicialmente
 * @property {string[]} fields - atributos y campos auxiliares gestionados
 * @property {Object<string, string>} components - tipo de componente de cada campo
 * @property {string[]} [auto] - atributos autoincrementales que se omiten en ADD
 * @property {string[]} [special] - atributos cuya presentación debe adaptarse
 * @property {string[]} [sensitive] - atributos excluidos de las tablas y catálogos
 * @property {Object<string, string[]>} [references] - entidad, clave y etiqueta de cada referencia
 * @property {string[]} [referenceDisplay] - referencias cuyo nombre se recupera para la tabla
 * @property {Object<string, string>} [columnLabels] - claves de traducción de las cabeceras
 * @property {string} [fileBase] - dirección base de los ficheros almacenados
 * @property {Object} [matrix] - opciones específicas de la matriz de asociaciones
 * @property {string[]} [readOnlyActions] - acciones de escritura no permitidas por la entidad
 */
/**
 * @typedef {Object} PoliticaFormulario
 * @property {string[]} hidden - campos que no se muestran en la acción
 * @property {string[]} readOnly - campos que se presentan bloqueados
 * @property {string[]} send - campos que se incluyen en la petición al back
 * @property {boolean} submit - indica si se ofrece una operación de envío
 * @property {string} [note] - clave traducible del mensaje de ayuda o confirmación
 * @property {ContextoMatriz} [matrixSearch] - matriz cuyos filtros controla el formulario
 */
/**
 * @typedef {Object} ContextoFormulario
 * @property {HTMLFormElement} form - nodo del formulario al que pertenece el contexto
 * @property {AccionFormulario} action - acción para la que se preparó
 * @property {RegistroEntidad} values - valores originales y etiquetas del registro
 * @property {PoliticaFormulario} policy - política de visibilidad, bloqueo y envío
 * @property {Object<string, Map<string, string>>} references - valores y etiquetas admitidos por cada referencia
 * @property {number} loading - número de cargas de datos todavía pendientes
 * @property {Set<string>} unavailable - referencias que no ofrecen opciones utilizables
 * @property {boolean} referenceError - indica si ha fallado la preparación de referencias
 * @property {boolean} ready - indica si el formulario ha terminado de prepararse
 */
/**
 * @typedef {Object} ContextoMatriz
 * @property {HTMLElement} root - nodo principal que contiene la gestión de la matriz
 * @property {RegistroEntidad[]} functionalities - funcionalidades disponibles en los ejes
 * @property {RegistroEntidad[]} actions - acciones disponibles en los ejes
 * @property {RegistroEntidad[]} roles - roles disponibles para gestionar permisos
 * @property {Set<string>} functionIds - identificadores de funcionalidades disponibles
 * @property {Set<string>} actionIds - identificadores de acciones disponibles
 * @property {Set<string>} roleIds - identificadores de roles disponibles
 * @property {Set<string>} pairs - combinaciones funcionalidad y acción permitidas
 * @property {Map<string, RegistroEntidad>} relations - relaciones confirmadas por el back
 * @property {Map<string, HTMLInputElement>} cells - casillas de la vista actual
 * @property {boolean} pending - indica si se está guardando un cambio
 * @property {string} selectedRole - rol cuyos permisos se están mostrando
 * @property {string} functionFilter - funcionalidad elegida como filtro
 * @property {string} actionFilter - acción elegida como filtro
 * @property {Set<string>} columns - identificadores de las acciones visibles
 * @property {string|null} focusKey - relación cuyo foco se intenta conservar
 */
/**
 * @typedef {Object} CatalogosMatriz
 * @property {RegistroEntidad[]} functionalities - catálogo de funcionalidades
 * @property {RegistroEntidad[]} actions - catálogo de acciones
 * @property {RegistroEntidad[]} roles - catálogo de roles cuando corresponde
 * @property {RegistroEntidad[]} pairs - relaciones funcionalidad y acción disponibles
 */
/**
 * @typedef {Object} RespuestaBack
 * @property {string} code - código de resultado o error devuelto por el back
 * @property {boolean} [ok] - indica si la operación fue aceptada
 * @property {RegistroEntidad[]} [resource] - filas devueltas en una búsqueda
 * @property {number|string} [total] - total de filas de la búsqueda
 * @property {number|string} [empieza] - posición de comienzo de la página recibida
 * @property {number|string} [filas] - cantidad de filas de la página recibida
 */
/**
 * @typedef {Object} CampoEnvio
 * @property {string} field - nombre del atributo que se envía
 * @property {boolean} file - indica si el valor procede de un input file
 * @property {string|File|undefined} value - dato del campo o fichero seleccionado
 */
/**
 * @typedef {Object} FormularioApartado
 * @property {HTMLElement} host - contenedor donde se restaurará el formulario
 * @property {DocumentFragment} original - nodos originales apartados durante las pruebas
 */

// contiene tres bloques: entity_dom_fields (interfaz), entity_access (datos) y entity_ui (coordinación)
// dom de la aplicación: crear, consultar y modificar la interfaz sin alterar Core ni Base
/**
 * adapta los componentes y la presentación de la interfaz sin modificar las clases de core
 * @extends {dom_fields}
 */
class entity_dom_fields extends dom_fields {
    /**
     * crea y rellena un componente de formulario para una prueba sin modificar las clases de core
     * @param {string} contenedor - id del elemento donde se insertará el componente
     * @param {string} tag - componente a crear, por ejemplo input, textarea, select o file
     * @param {string} nombrecampo - id y name que identifican el atributo del componente
     * @param {RegistroEntidad} [valores={}] - valores del campo o metadatos del fichero de prueba
     * @param {Object|null} [extra=null] - opciones adicionales del componente, como el tipo de input
     * @returns {HTMLElement} elemento creado e insertado en el contenedor
     */
    crearElementoHtml(contenedor, tag, nombrecampo, valores = {}, extra = null) {
        const parent = document.getElementById(contenedor);
        const element = document.createElement(['file', 'submit'].includes(tag) ? 'input' : tag);
        element.id = element.name = nombrecampo;
        if (tag === 'input') element.type = extra?.type || 'text';
        if (tag === 'file') {
            element.type = 'file';
            this.fillElementFile(element, valores[nombrecampo] ? { [nombrecampo]: valores[nombrecampo] } : {});
        } else if (tag === 'submit') element.type = 'submit';
        else if (tag === 'select') {
            const value = String(valores[nombrecampo] ?? '');
            element.add(new Option(value, value, true, true));
        } else if (['input', 'textarea'].includes(tag)) this.fillElementValue(element, valores[nombrecampo]);
        parent.append(element);
        return element;
    }
    // rellena un campo existente; si no recibe valor, lo deja vacío
    /**
     * rellena un control existente y utiliza una cadena vacía cuando no hay valor
     * @param {HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement} elemento - control existente que se va a rellenar
     * @param {*} valor - valor del atributo recibido para su presentación
     * @returns {void} no devuelve un valor
     */
    fillElementValue(elemento, valor) { elemento.value = valor ?? ''; }
    /**
     * muestra el error actual del campo y lo marca visualmente como incorrecto
     * @param {string} id - id del campo o elemento sobre el que se actúa
     * @param {string} codigo - código del mensaje que debe mostrarse
     * @returns {void} no devuelve un valor
     */
    mostrar_error_campo(id, codigo) {
        this.actualizarEstadoCampo(id, true, codigo);
    }
    /**
     * marca el campo como correcto y elimina el mensaje de error anterior
     * @param {string} id - id del campo o elemento sobre el que se actúa
     * @returns {void} no devuelve un valor
     */
    mostrar_exito_campo(id) {
        this.actualizarEstadoCampo(id, false);
    }
    // aplica en un único lugar los colores, la accesibilidad y el mensaje de un campo
    /**
     * centraliza el mensaje, las clases visuales y aria-invalid de un campo
     * usa la traducción de SEARCH si existe, sin cambiar el código devuelto por el validador
     * @param {string} id - id del campo o elemento sobre el que se actúa
     * @param {boolean} invalid - indica si el campo debe marcarse como incorrecto
     * @param {string} [codigo=''] - código del mensaje que debe mostrarse
     * @returns {void} no devuelve un valor
     */
    actualizarEstadoCampo(id, invalid, codigo = '') {
        const field = this.obtenerCampo(id), span = this.obtenerCampo('span_error_' + id), message = this.obtenerCampo('error_' + id);
        if (field) {
            field.setAttribute('aria-invalid', String(invalid));
            field.classList.toggle('et2-invalid', invalid); field.classList.toggle('et2-valid', !invalid);
        }
        if (span) span.style.display = invalid ? 'block' : 'none';
        // adapta solo el texto a SEARCH; el validador conserva su código de error
        const searchCode = 'SEARCH_' + codigo;
        const displayCode = field?.form?.dataset.action === 'SEARCH' && Object.hasOwn(entity_ui.dictionary(), searchCode) ? searchCode : codigo;
        if (message) { message.className = invalid ? displayCode : ''; message.textContent = invalid ? entity_ui.t(displayCode) : ''; }
    }
    /**
     * abre el modal de error y conserva tanto la explicación como el código literal recibido
     * @param {string} codigo - código del mensaje que debe mostrarse
     * @returns {void} no devuelve un valor
     */
    abrirModalError(codigo) {
        const modal = document.getElementById('error_action_modal'), message = document.getElementById('error_action_msg');
        const known = entity_ui.dictionary()[codigo];
        message.className = known ? codigo : 'ui_error'; message.textContent = known || entity_ui.t('ui_error');
        let detail = document.getElementById('et2_error_detail');
        if (!detail) { detail = document.createElement('p'); detail.id = 'et2_error_detail'; modal.append(detail); }
        detail.textContent = String(codigo ?? '');
        modal.setAttribute('role', 'alertdialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-describedby', 'error_action_msg');
        this.returnFocus = document.activeElement;
        modal.style.display = 'block'; document.getElementById('modal_action_overlay').style.display = 'block'; modal.querySelector('button').focus();
    }
    /**
     * cierra el error y devuelve el foco al elemento que estaba activo
     * @returns {void} no devuelve un valor
     */
    cerrarModalError() { super.cerrarModalError(); this.returnFocus?.focus(); }
    /**
     * oculta el campo y su etiqueta junto con el bloque de presentación que los contiene
     * @param {string} id - id del campo o elemento sobre el que se actúa
     * @returns {void} no devuelve un valor
     */
    hide_element_form(id) {
        const field = document.getElementById(id), label = document.getElementById('label_' + id);
        if (field) { field.style.display = 'none'; field.closest('.et2-field')?.setAttribute('hidden', ''); }
        if (label) label.style.display = 'none';
    }
    /**
     * bloquea los controles de un formulario utilizando disabled en select y file
     * @param {string} idform - id del formulario cuyos componentes se van a tratar
     * @returns {void} no devuelve un valor
     */
    colocartodosreadonly(idform) {
        for (const field of document.getElementById(idform).elements) {
            if (field.tagName === 'SELECT' || field.type === 'file') field.disabled = true;
            else if (field.type !== 'submit') field.readOnly = true;
        }
    }
    /**
     * conecta los eventos de los campos editables con sus validadores de la acción actual
     * ignora eventos de formularios que ya no corresponden a la entidad activa
     * @param {string} idform - id del formulario cuyos componentes se van a tratar
     * @param {AccionFormulario} accion - acción que determina los métodos de validación a conectar
     * @returns {void} no devuelve un valor
     */
    colocarvalidaciones(idform, accion) {
        const entity = entity_ui.active;
        const context = entity?.formContext;
        for (const field of document.getElementById(idform).elements) {
            if (!this.esEditable(field)) continue;
            const events = field.tagName === 'INPUT' && field.type !== 'file' ? ['blur', 'input'] : ['blur', 'input', 'change'];
            const validate = () => {
                if (!entity_ui.current(entity, context)) return;
                const method = entity[accion + '_' + field.id + '_validation'];
                if (!method) return;
                const result = method.call(entity);
                const options = context.references[field.id];
                if (result === true && field.value && options && !options.has(field.value)) {
                    this.mostrar_error_campo(field.id, 'ui_reference_invalid');
                }
            };
            for (const event of events) field.addEventListener(event, validate);
        }
    }
    /**
     * acepta el submit únicamente cuando su resultado es el booleano true
     * @param {ResultadoSubmit} value - resultado conjunto de los validadores del formulario
     * @returns {boolean} true si el resultado es exactamente true
     */
    validarsubmit(value) { return value === true; }
    /**
     * rellena un select o las sugerencias de un input con datalist y registra las referencias admitidas
     * @param {EntidadProyecto} entity - instancia que prepara las referencias
     * @param {ContextoFormulario} context - formulario al que pertenece el componente
     * @param {string} field - atributo cuyo catálogo se presenta
     * @param {OpcionReferencia[]} options - identificadores y etiquetas de los registros existentes
     * @param {string} [selected=''] - valor inicial del select; el input conserva el texto del formulario
     * @returns {void} no devuelve un valor
     * @throws {Error} ui_form_invalid si falta el componente o el datalist del input
     */
    rellenarOpciones(entity, context, field, options, selected = '') {
        if (!entity_ui.current(entity, context)) return;
        const control = context.form.querySelector('#' + field);
        if (!control) throw new Error('ui_form_invalid');
        const search = context.action === 'SEARCH';
        context.references[field] = new Map(options.map(option => [option.value, option.label]));
        if (control.tagName === 'SELECT') {
            const available = options.some(option => option.value === selected);
            control.replaceChildren(new Option(entity_ui.t(search ? 'ui_all' : 'ui_select'), ''));
            control.options[0].className = search ? 'ui_all' : 'ui_select';
            for (const option of options) control.add(new Option(option.label, option.value));
            if (control.disabled && selected && !available) control.add(new Option(selected, selected));
            control.value = available || control.disabled ? selected : '';
        } else {
            const listId = control.getAttribute('list');
            const list = listId && context.form.querySelector('#' + listId);
            if (control.tagName !== 'INPUT' || !list || list.tagName !== 'DATALIST') throw new Error('ui_form_invalid');
            list.replaceChildren(...options.map(option => new Option(option.label, option.value)));
            // conserva lo que el usuario haya escrito mientras se cargaban las sugerencias
        }
        if (!options.length && !search) context.unavailable.add(field);
        else context.unavailable.delete(field);
        control.title = options.length ? '' : entity_ui.t('ui_no_options');
        entity_ui.updateSubmit(context);
    }
    /**
     * carga los catálogos requeridos y actualiza el estado de disponibilidad del formulario
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {ContextoFormulario} context - estado del formulario al que pertenece la operación
     * @param {string[]} fields - atributos que deben tratarse en esta operación
     * @returns {Promise<void>} finalización de la carga; los errores se muestran y bloquean el envío
     */
    async rellenarReferencias(entity, context, fields) {
        context.loading++;
        entity_ui.updateSubmit(context);
        try {
            await Promise.all(fields.map(async field => {
                const reference = entity.config.references[field];
                const rows = await entity_access.records(entity, reference[0]);
                const options = rows.map(row => {
                    const value = row[reference[1]], label = row[reference[2]] || value;
                    return { value, label: label === value ? value : `${label} (${value})` };
                });
                this.rellenarOpciones(entity, context, field, options, context.values[field] || '');
            }));
        } catch (error) {
            if (entity_ui.current(entity, context)) { context.referenceError = true; this.abrirModalError(error.message); }
        } finally {
            context.loading--;
            if (entity_ui.current(entity, context)) entity_ui.updateSubmit(context);
        }
    }

    // consultas y operaciones de campos utilizadas por las entidades
    /**
     * localiza un elemento dentro del formulario indicado o en el documento actual
     * @param {string} id - id del campo o elemento sobre el que se actúa
     * @param {ContextoFormulario|null} [context=null] - estado del formulario al que pertenece la operación
     * @returns {HTMLElement|null} elemento encontrado o null si no existe
     */
    obtenerCampo(id, context = null) {
        return context ? context.form.querySelector('#' + id) : document.getElementById(id);
    }
    /**
     * comprueba si existe el campo en el contexto de formulario indicado
     * @param {string} id - id del campo o elemento sobre el que se actúa
     * @param {ContextoFormulario|null} [context=null] - estado del formulario al que pertenece la operación
     * @returns {boolean} true si el elemento existe
     */
    existeCampo(id, context = null) {
        return !!this.obtenerCampo(id, context);
    }
    /**
     * lee el valor actual de un componente de formulario
     * @param {string} id - id del campo o elemento sobre el que se actúa
     * @param {ContextoFormulario|null} [context=null] - estado del formulario al que pertenece la operación
     * @returns {string} valor del control
     * @throws {Error} ui_form_invalid si el campo solicitado no existe
     */
    valorCampo(id, context = null) {
        const field = this.obtenerCampo(id, context);
        if (!field) throw new Error('ui_form_invalid');
        return field.value;
    }
    /**
     * obtiene el nombre del primer fichero seleccionado en un control file
     * @param {string} id - id del campo o elemento sobre el que se actúa
     * @returns {string} nombre seleccionado o cadena vacía si no hay fichero
     */
    nombreFichero(id) {
        return this.obtenerCampo(id).files[0]?.name || '';
    }
    /**
     * comprueba que el contexto conserva el mismo nodo form_iu que está en la página
     * @param {ContextoFormulario} context - estado del formulario al que pertenece la operación
     * @returns {boolean} true si el formulario del contexto sigue siendo el actual
     */
    esFormularioActual(context) {
        return !!context && document.getElementById('form_iu') === context.form;
    }
    /**
     * coloca el foco en el primer campo marcado con aria-invalid
     * @param {ContextoFormulario} context - estado del formulario al que pertenece la operación
     * @returns {void} no devuelve un valor
     */
    enfocarPrimerError(context) {
        context.form.querySelector('[aria-invalid="true"]')?.focus();
    }
    /**
     * deshabilita el botón de envío si el contexto dispone de formulario
     * @param {ContextoFormulario} context - estado del formulario al que pertenece la operación
     * @returns {void} no devuelve un valor
     */
    bloquearEnvio(context) {
        const button = context?.form.querySelector('#submit_button');
        if (button) button.disabled = true;
    }
    /**
     * configura la dirección y visibilidad del enlace a una foto almacenada
     * @param {ContextoFormulario} context - estado del formulario al que pertenece la operación
     * @param {string} id - id del campo o elemento sobre el que se actúa
     * @param {string} base - dirección base del directorio de ficheros en el servidor
     * @param {string} filename - nombre del fichero almacenado, sin la dirección base
     * @param {boolean} visible - indica si el enlace al fichero debe mostrarse
     * @returns {void} no devuelve un valor
     */
    configurarEnlaceFichero(context, id, base, filename, visible) {
        const link = this.obtenerCampo(id, context);
        link.hidden = !visible;
        link.href = base + encodeURIComponent(filename || '');
    }
    /**
     * crea un enlace seguro de presentación al nombre de fichero codificado
     * @param {string} base - dirección base del directorio de ficheros en el servidor
     * @param {string} filename - nombre del fichero almacenado, sin la dirección base
     * @returns {HTMLAnchorElement} enlace preparado para abrir el fichero en otra pestaña
     */
    crearEnlaceFichero(base, filename) {
        const link = document.createElement('a');
        link.href = base + encodeURIComponent(filename);
        link.target = '_blank';
        link.rel = 'noopener';
        link.textContent = filename;
        return link;
    }
    /**
     * recoge los controles enviables de un formulario existente
     * @param {string} id - id del campo o elemento sobre el que se actúa
     * @returns {FormData} datos del formulario identificado
     */
    datosFormularioPorId(id) {
        return new FormData(document.getElementById(id));
    }
    /**
     * lee únicamente los campos permitidos por la política de envío del formulario
     * @param {ContextoFormulario} context - estado del formulario al que pertenece la operación
     * @returns {CampoEnvio[]} valores a enviar, utilizando las claves originales para los campos bloqueados
     * @throws {Error} ui_form_invalid si falta un control requerido
     */
    leerDatosEnvio(context) {
        return context.policy.send.map(field => {
            const control = this.obtenerCampo(field, context);
            if (!control) throw new Error('ui_form_invalid');
            const file = control.type === 'file';
            const value = file ? control.files[0] : context.policy.readOnly.includes(field) ? context.values[field] || '' : control.value;
            return { field, file, value };
        });
    }
    /**
     * muestra la gestión, prepara su título e inserta la plantilla de la entidad
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @returns {void} no devuelve un valor
     */
    iniciarGestion(entity) {
        document.getElementById('IU_manage_entity').style.display = 'block';
        document.getElementById('botonADD').hidden = !!entity.config.matrix;
        document.getElementById('seleccioncolumnas').disabled = false;
        const title = document.getElementById('text_title_page');
        title.className = 'text_titulo_page_' + entity.nombreentidad;
        title.textContent = entity_ui.t(title.className);
        document.getElementById('contenedor_IU_form').innerHTML = entity.manual_form_creation();
    }
    /**
     * determina si un control está visible y permite introducir datos
     * @param {HTMLElement} field - elemento que se quiere clasificar
     * @returns {boolean} true si el componente puede recibir cambios del usuario
     */
    esEditable(field) { return ['INPUT', 'SELECT', 'TEXTAREA'].includes(field.tagName) && !field.disabled && !field.readOnly && !['submit', 'hidden'].includes(field.type) && !field.closest('[hidden]') && field.style.display !== 'none'; }
    /**
     * habilita el envío solo cuando el formulario y sus referencias están preparados
     * @param {ContextoFormulario} context - estado del formulario al que pertenece la operación
     * @returns {void} no devuelve un valor
     */
    actualizarSubmit(context) {
        const button = context.form.querySelector('#submit_button');
        const note = context.form.querySelector('#et2_form_note');
        if (note && !context.policy.note) {
            note.hidden = context.unavailable.size === 0;
            note.className = context.unavailable.size ? 'ui_no_options' : '';
            note.textContent = context.unavailable.size ? entity_ui.t(note.className) : '';
        }
        if (button) button.disabled = !context.ready || context.loading > 0 || context.referenceError || context.unavailable.size > 0;
    }
    /**
     * inserta el formulario, aplica su política y conecta los eventos de acción y cancelación
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {AccionFormulario} action - acción que se está preparando o ejecutando
     * @param {RegistroEntidad} values - valores normalizados con los que se rellenará el formulario
     * @param {PoliticaFormulario} policy - campos visibles, bloqueados y enviados para la acción
     * @returns {ContextoFormulario|null} contexto creado o null si falta un componente requerido
     */
    prepararFormulario(entity, action, values, policy) {
        document.getElementById('contenedor_IU_form').innerHTML = entity.manual_form_creation();
        const form = document.getElementById('form_iu');
        form.dataset.action = action;
        const context = { form, action, values, policy, references: {}, loading: 0, unavailable: new Set(), referenceError: false, ready: false };
        entity.formContext = context;
        entity.formAction = action;
        const title = document.getElementById('class_contenido_titulo_form');
        title.className = `text_contenido_titulo_form_${entity.nombreentidad}_${action}`; title.textContent = entity_ui.t(title.className);
        for (const field of entity.config.fields) {
            let control = form.querySelector('#' + field);
            if (!control) { entity.dom.abrirModalError('ui_form_invalid'); return null; }
            if (control.type !== 'file') {
                const value = values[field] || '';
                if (control.tagName === 'SELECT' && value) control.add(new Option(values._labels?.[field] || value, value, true, true));
                this.fillElementValue(control, value);
            }
            if (policy.hidden.includes(field)) entity.dom.hide_element_form(field);
            if (policy.readOnly.includes(field)) {
                if (control.tagName === 'SELECT' || control.type === 'file') control.disabled = true;
                else control.readOnly = true;
            }
        }
        const note = form.querySelector('#et2_form_note');
        if (policy.note) { note.hidden = false; note.className = policy.note; note.textContent = entity_ui.t(policy.note); }
        const actions = form.querySelector('.et2-form-actions');
        if (policy.submit) {
            const submit = document.createElement('button'); submit.id = 'submit_button'; submit.type = 'submit'; submit.append(this.crearIcono(action)); if (policy.matrixSearch) submit.append(entity_ui.t('action_SEARCH')); actions.append(submit);
        }
        const cancel = document.createElement('button'); cancel.type = 'button'; cancel.className = 'ui_cancel'; cancel.textContent = entity_ui.t('ui_cancel'); cancel.onclick = () => entity_ui.closeForm(entity); actions.append(cancel);
        form.onsubmit = event => {
            event.preventDefault();
            if (!entity_ui.current(entity, context) || !policy.submit || entity.pending || !context.ready || context.loading || context.referenceError || context.unavailable.size) return;
            const result = entity[action + '_submit_' + entity.nombreentidad]();
            if (!entity.dom.validarsubmit(result)) return;
            if (policy.matrixSearch) { entity_ui.applyMatrixSearch(entity, context); return; }
            entity_ui.validatedSubmits.set(entity, context);
            try { entity[action](); }
            finally { entity_ui.validatedSubmits.delete(entity); }
        };
        if (['ADD', 'EDIT', 'SEARCH'].includes(action) && policy.submit && !policy.matrixSearch) entity.dom.colocarvalidaciones('form_iu', action);
        const modal = document.getElementById('Div_IU_form'); modal.style.display = 'block'; modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-labelledby', title.id);
        entity.previousFocus = document.activeElement;
        this.actualizarSubmit(context);
        return context;
    }
    /**
     * actualiza el idioma y enfoca el primer campo editable del formulario
     * @param {ContextoFormulario} context - estado del formulario al que pertenece la operación
     * @returns {void} no devuelve un valor
     */
    finalizarFormulario(context) {
        this.prepararIdioma();
        Array.from(context.form.elements).find(field => this.esEditable(field))?.focus();
    }
    /**
     * oculta el formulario, repone su plantilla y devuelve el foco anterior
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @returns {void} no devuelve un valor
     */
    cerrarFormulario(entity) {
        document.getElementById('Div_IU_form').style.display = 'none';
        document.getElementById('contenedor_IU_form').innerHTML = entity.manual_form_creation();
        entity.previousFocus?.focus();
    }
    /**
     * presenta el mensaje de carga, éxito o error en la cabecera de la gestión
     * @param {string} code - clave de traducción o código de estado que se quiere presentar
     * @returns {void} no devuelve un valor
     */
    mostrarEstado(code) {
        let status = document.getElementById('et2_status');
        if (!status) { status = document.createElement('p'); status.id = 'et2_status'; status.setAttribute('role', 'status'); document.getElementById('IU_manage_head').append(status); }
        status.className = code; status.textContent = code ? entity_ui.t(code) : '';
    }
    /**
     * crea la imagen accesible de una acción usando los iconos del proyecto
     * @param {string} action - nombre del icono, por ejemplo ADD, DELETE o FILE
     * @returns {HTMLImageElement} imagen con texto alternativo y título traducidos
     */
    crearIcono(action) {
        const img = document.createElement('img'); img.src = './iconos/' + action + '.png'; img.className = 'action_' + action; img.alt = img.title = entity_ui.t(img.className); img.width = img.height = 28; return img;
    }
    /**
     * construye la tabla de tuplas, sus acciones de fila y el selector de columnas
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @returns {void} no devuelve un valor
     */
    mostrarTabla(entity) {
        const host = document.getElementById('IU_manage_table'); host.replaceChildren();
        const table = document.createElement('table'); table.className = 'et2-table'; const header = table.createTHead().insertRow();
        for (const field of entity.atributos) { const cell = document.createElement('th'); cell.scope = 'col'; cell.className = entity.config.columnLabels?.[field] || field; cell.textContent = entity_ui.t(cell.className); cell.dataset.column = field; cell.hidden = !entity.columnasamostrar.includes(field); header.append(cell); }
        const actions = document.createElement('th'); actions.className = 'ui_actions'; actions.textContent = entity_ui.t('ui_actions'); header.append(actions);
        const body = table.createTBody();
        // muestra únicamente las acciones de fila que la entidad permite ejecutar
        const rowActions = ['EDIT', 'DELETE', 'SHOWCURRENT'].filter(action => !(entity.config.readOnlyActions || []).includes(action));
        for (const row of entity.datos) {
            const tr = body.insertRow();
            for (const field of entity.atributos) {
                const cell = tr.insertCell(); cell.dataset.column = field; cell.hidden = !entity.columnasamostrar.includes(field);
                const value = entity.mostrarespecial.includes(field) ? entity.mostrarcambioatributo(field, row[field]) : row[field] || '';
                if (value instanceof Node) cell.append(value); else cell.textContent = value;
            }
            const operations = tr.insertCell();
            for (const action of rowActions) {
                const button = document.createElement('button'); button.type = 'button'; button.append(this.crearIcono(action));
                button.onclick = () => entity['createForm_' + action]({ ...row, _labels: { ...row._labels } }); operations.append(button);
            }
        }
        host.append(table);
        if (!entity.datos.length) { const empty = document.createElement('p'); empty.className = 'ui_empty'; empty.textContent = entity_ui.t('ui_empty'); host.append(empty); }
        const select = document.getElementById('seleccioncolumnas'); select.replaceChildren();
        for (const field of entity.atributos) { const option = new Option(entity_ui.t(entity.config.columnLabels?.[field] || field), field, false, entity.columnasamostrar.includes(field)); option.className = entity.config.columnLabels?.[field] || field; select.add(option); }
        select.onchange = () => entity_ui.setColumns(entity, Array.from(select.selectedOptions, option => option.value));
        setLang(getCookie('lang') === 'EN' ? 'EN' : 'ES');
    }
    /**
     * aplica la selección de columnas sin repetir la consulta al back
     * @param {string[]} columns - atributos que deben permanecer visibles en la tabla
     * @returns {void} no devuelve un valor
     */
    actualizarColumnas(columns) {
        for (const cell of document.querySelectorAll('#IU_manage_table [data-column]')) cell.hidden = !columns.includes(cell.dataset.column);
    }

    // muestra una espera sin presentar relaciones vacías como si fueran datos confirmados
    /**
     * presenta la espera de la matriz y bloquea el selector de columnas
     * @returns {void} no devuelve un valor
     */
    mostrarMatrizCargando() {
        const host = document.getElementById('IU_manage_table');
        const message = document.createElement('p');
        message.className = 'ui_loading'; message.textContent = entity_ui.t('ui_loading');
        host.replaceChildren(message);
        const columns = document.getElementById('seleccioncolumnas');
        columns.replaceChildren(); columns.disabled = true;
    }
    /**
     * muestra el fallo de carga de la matriz y ofrece volver a intentarlo
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @returns {void} no devuelve un valor
     */
    mostrarMatrizError(entity) {
        const columns = document.getElementById('seleccioncolumnas'); columns.replaceChildren(); columns.disabled = true;
        const host = document.getElementById('IU_manage_table');
        const message = document.createElement('p');
        message.className = 'ui_matrix_load_error'; message.textContent = entity_ui.t(message.className);
        const retry = document.createElement('button');
        retry.type = 'button'; retry.className = 'ui_matrix_reload'; retry.textContent = entity_ui.t(retry.className);
        retry.onclick = () => entity_ui.refreshMatrix(entity);
        host.replaceChildren(message, retry);
    }
    /**
     * comprueba que el nodo de una matriz sigue siendo el que aparece en la gestión
     * @param {ContextoMatriz} matrix - estado de la matriz que se está gestionando
     * @returns {boolean} true si el nodo de la matriz continúa montado
     */
    esMatrizActual(matrix) {
        return !!matrix && document.getElementById('et2_matrix') === matrix.root;
    }
    // mantiene la matriz en la página principal; SEARCH utiliza el modal común
    /**
     * crea la matriz en la página principal con sus controles de rol y columnas
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {ContextoMatriz} matrix - estado de la matriz que se está gestionando
     * @returns {void} no devuelve un valor
     */
    mostrarMatriz(entity, matrix) {
        const host = document.getElementById('IU_manage_table');
        const root = document.createElement('div'); root.id = 'et2_matrix'; matrix.root = root;
        const help = document.createElement('p');
        help.className = 'ui_matrix_help'; help.textContent = entity_ui.t(help.className); root.append(help);
        const toolbar = document.createElement('div'); toolbar.className = 'et2-matrix-toolbar'; root.append(toolbar);
        matrix.controls = [];
        if (entity.config.matrix.role) {
            const label = document.createElement('label'); label.htmlFor = 'et2_matrix_role';
            const text = document.createElement('span'); text.className = 'ui_role'; text.textContent = entity_ui.t(text.className);
            const select = document.createElement('select'); select.id = 'et2_matrix_role';
            select.add(new Option(entity_ui.t('ui_matrix_choose_role'), '')); select.options[0].className = 'ui_matrix_choose_role';
            for (const row of matrix.roles) select.add(new Option(row.rol_name || row.id_rol, row.id_rol));
            select.value = matrix.selectedRole;
            select.onchange = () => entity_ui.updateMatrixView(entity, matrix, 'selectedRole', select.value);
            label.append(text, select); toolbar.append(label); matrix.controls.push(select); matrix.roleControl = select;
        }
        const reload = document.createElement('button'); reload.type = 'button';
        reload.className = 'ui_matrix_reload'; reload.textContent = entity_ui.t(reload.className);
        reload.onclick = () => entity_ui.refreshMatrix(entity); toolbar.append(reload); matrix.controls.push(reload);
        matrix.summary = document.createElement('p'); matrix.summary.setAttribute('role', 'status'); root.append(matrix.summary);
        matrix.view = document.createElement('div'); matrix.view.className = 'et2-matrix-scroll'; root.append(matrix.view);
        const columns = document.getElementById('seleccioncolumnas'); columns.replaceChildren();
        for (const action of matrix.actions) columns.add(new Option(action.nombre_accion || action.id_accion, action.id_accion, false, matrix.columns.has(action.id_accion)));
        columns.onchange = () => entity_ui.updateMatrixView(entity, matrix, 'columns', Array.from(columns.selectedOptions, option => option.value));
        matrix.columnControl = columns;
        host.replaceChildren(root);
        this.actualizarMatriz(entity, matrix);
        this.bloquearMatriz(matrix, false);
        if (matrix.focusKey) matrix.cells.get(matrix.focusKey)?.focus();
    }
    // busca por IDs presentes en las relaciones; sin filtro se mantienen todos los ejes para asignar
    /**
     * redibuja las casillas, filtros y resumen a partir de las relaciones confirmadas
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {ContextoMatriz} matrix - estado de la matriz que se está gestionando
     * @returns {void} no devuelve un valor
     */
    actualizarMatriz(entity, matrix) {
        const relations = [...matrix.relations.values()].filter(row => !entity.config.matrix.role || !matrix.selectedRole || row.id_rol === matrix.selectedRole);
        for (const [field, key, label, catalog] of [
            ['functionFilter', 'id_funcionalidad', 'nombre_funcionalidad', matrix.functionalities],
            ['actionFilter', 'id_accion', 'nombre_accion', matrix.actions]
        ]) {
            const referenced = new Set(relations.map(row => row[key]));
            const options = catalog.filter(row => referenced.has(row[key]));
            if (!options.some(row => row[key] === matrix[field])) matrix[field] = '';
        }
        const functions = matrix.functionalities.filter(row => !matrix.functionFilter || row.id_funcionalidad === matrix.functionFilter);
        const actions = matrix.actions.filter(row => matrix.columns.has(row.id_accion) && (!matrix.actionFilter || row.id_accion === matrix.actionFilter));
        const table = document.createElement('table'); table.className = 'et2-table et2-matrix-table';
        const caption = table.createCaption(); caption.className = 'ui_matrix_caption'; caption.textContent = entity_ui.t(caption.className);
        const header = table.createTHead().insertRow();
        const corner = document.createElement('th'); corner.scope = 'col'; corner.className = 'ui_functionality'; corner.textContent = entity_ui.t(corner.className); header.append(corner);
        for (const action of actions) { const th = document.createElement('th'); th.scope = 'col'; th.textContent = action.nombre_accion || action.id_accion; header.append(th); }
        const body = table.createTBody(); matrix.cells = new Map(); let assigned = 0;
        for (const functional of functions) {
            const row = body.insertRow(); const title = document.createElement('th'); title.scope = 'row';
            title.textContent = functional.nombre_funcionalidad || functional.id_funcionalidad; row.append(title);
            for (const action of actions) {
                const cell = row.insertCell();
                const relation = { id_funcionalidad: functional.id_funcionalidad, id_accion: action.id_accion };
                if (entity.config.matrix.role) relation.id_rol = matrix.selectedRole;
                const key = entity_ui.matrixKey(entity, relation);
                const checked = matrix.relations.has(key);
                const allowed = !entity.config.matrix.role || matrix.pairs.has(JSON.stringify([relation.id_funcionalidad, relation.id_accion]));
                if (!allowed && !checked) {
                    const unavailable = document.createElement('span'); unavailable.textContent = '—'; unavailable.title = entity_ui.t('ui_matrix_unavailable');
                    unavailable.setAttribute('aria-label', unavailable.title); cell.append(unavailable); continue;
                }
                const input = document.createElement('input'); input.type = 'checkbox'; input.checked = checked;
                input.dataset.matrixKey = key;
                input.dataset.matrixUnavailable = String(!!entity.config.matrix.role && !matrix.selectedRole);
                input.disabled = matrix.pending || input.dataset.matrixUnavailable === 'true';
                const role = matrix.roles.find(row => row.id_rol === matrix.selectedRole);
                input.setAttribute('aria-label', [role?.rol_name, title.textContent, action.nombre_accion || action.id_accion].filter(Boolean).join(' · '));
                input.title = entity_ui.t(!allowed ? 'ui_matrix_remove_only' : input.dataset.matrixUnavailable === 'true' ? 'ui_matrix_choose_role' : checked ? 'ui_matrix_unassign' : 'ui_matrix_assign');
                input.onchange = () => entity[input.checked ? 'ADD' : 'DELETE'](matrix, relation);
                matrix.cells.set(key, input); cell.append(input); if (checked) assigned++;
            }
        }
        matrix.view.replaceChildren(table);
        if (!functions.length || !actions.length) { const empty = document.createElement('p'); empty.className = 'ui_empty'; empty.textContent = entity_ui.t(empty.className); matrix.view.append(empty); }
        const roleMissing = entity.config.matrix.role && !matrix.selectedRole;
        // el selector ya indica que hay que elegir rol, sin repetir ese aviso debajo
        matrix.summary.hidden = roleMissing && matrix.roles.length > 0;
        matrix.summary.textContent = roleMissing
            ? (matrix.roles.length ? '' : entity_ui.t('ui_matrix_no_roles'))
            : entity_ui.t('ui_matrix_assigned') + ': ' + assigned;
        for (const [filter, key, name, catalog, code] of [
            ['functionFilter', 'id_funcionalidad', 'nombre_funcionalidad', matrix.functionalities, 'ui_functionality'],
            ['actionFilter', 'id_accion', 'nombre_accion', matrix.actions, 'ui_action']
        ]) {
            const row = catalog.find(row => row[key] === matrix[filter]);
            if (row) matrix.summary.textContent += ` · ${entity_ui.t(code)}: ${row[name] || row[key]}`;
        }
    }
    /**
     * bloquea o libera controles de la matriz durante una petición pendiente
     * @param {ContextoMatriz} matrix - estado de la matriz que se está gestionando
     * @param {boolean} blocked - indica si se deben impedir interacciones mientras se procesa una petición
     * @returns {void} no devuelve un valor
     */
    bloquearMatriz(matrix, blocked) {
        for (const control of [...matrix.controls, matrix.columnControl, ...matrix.cells.values()]) {
            control.disabled = blocked || control.dataset?.matrixUnavailable === 'true';
        }
        matrix.root.setAttribute('aria-busy', String(blocked));
    }
    /**
     * devuelve una casilla a su estado confirmado cuando falla una operación
     * @param {ContextoMatriz} matrix - estado de la matriz que se está gestionando
     * @param {string} key - clave que identifica el dato o la relación buscada
     * @param {boolean} checked - estado confirmado al que debe volver la casilla
     * @returns {void} no devuelve un valor
     */
    restaurarCasillaMatriz(matrix, key, checked) {
        const input = matrix.cells.get(key);
        if (input) input.checked = checked;
    }
    /**
     * dirige el foco al selector de rol o a la primera casilla de la matriz activa
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @returns {boolean} true si se ha podido enfocar la matriz
     */
    enfocarMatriz(entity) {
        const matrix = entity.matrixContext;
        if (!entity_ui.matrixCurrent(entity, matrix) || entity.pending) return false;
        const target = matrix.roleControl || matrix.cells.values().next().value || matrix.root;
        matrix.root.tabIndex = -1;
        target.focus(); return true;
    }

    // presentación de pruebas. La ejecución continúa en entity_Test_Data y Data_Test
    /**
     * aplica el idioma seleccionado a los elementos traducibles del documento
     * @returns {void} no devuelve un valor
     */
    prepararIdioma() {
        setLang(getCookie('lang') === 'EN' ? 'EN' : 'ES');
    }
    /**
     * abre una ventana nueva para presentar la batería de pruebas
     * @returns {Window|null} ventana abierta o null si el navegador bloquea su apertura
     */
    abrirVentanaPruebas() {
        return window.open('', '_blank');
    }
    /**
     * guarda los nodos del formulario para que las pruebas no alteren los datos introducidos
     * @returns {FormularioApartado} contenedor y fragmento con los nodos originales
     */
    apartarFormularioPruebas() {
        const host = document.getElementById('contenedor_IU_form');
        const original = document.createDocumentFragment();
        while (host.firstChild) original.append(host.firstChild);
        return { host, original };
    }
    /**
     * restituye los mismos nodos de formulario guardados antes de ejecutar las pruebas
     * @param {FormularioApartado} saved - nodos originales guardados antes de ejecutar las pruebas
     * @returns {void} no devuelve un valor
     */
    restaurarFormularioPruebas(saved) {
        saved.host.replaceChildren(saved.original);
    }
    /**
     * presenta los resultados y sus valores de prueba en la ventana nueva
     * @param {Window} popup - ventana nueva donde se presentarán los resultados
     * @param {ResultadoPrueba[]} results - resultados de la batería de pruebas ejecutada
     * @param {Array<Array<*>>} tests - pruebas originales con sus valores y resultados esperados
     * @param {string} entityName - nombre de la entidad cuyas pruebas se presentan
     * @returns {boolean} true cuando se ha construido la presentación de resultados
     */
    mostrarResultadosPruebas(popup, results, tests, entityName) {
        popup.document.open();
        popup.document.write('<!doctype html><html><head><meta charset="utf-8"><title>ET2</title><style>body{font:15px system-ui;margin:24px}table{border-collapse:collapse;width:100%}td,th{border:1px solid #aaa;padding:8px;text-align:left;vertical-align:top}.ok{background:#d7efdc}.ko{background:#ffd8dc}pre{white-space:pre-wrap;overflow-wrap:anywhere;margin:0}</style></head><body></body></html>');
        popup.document.close();
        const doc = popup.document; doc.documentElement.lang = getCookie('lang') === 'EN' ? 'en' : 'es';
        const title = doc.createElement('h1'); title.textContent = entity_ui.t('ui_tests') + ' · ' + entity_ui.t('text_menu_' + entityName); doc.body.append(title);
        const correct = results.filter(r => r.pruebastatus === 'CORRECTO').length;
        const summary = doc.createElement('p'); summary.setAttribute('role', 'status'); summary.textContent = `${entity_ui.t('ui_summary')}: ${correct}/${results.length}`; doc.body.append(summary);
        const table = doc.createElement('table'), fields = { entidad: 'ui_test_entity', campo: 'ui_test_field', NumDef: 'ui_test_definition', NumPrueba: 'ui_test_number', accion: 'ui_test_action', valorprueba: 'ui_test_value', respuestaesperada: 'ui_test_expected', resultadoprueba: 'ui_test_actual', traduccionError: 'ui_test_translation', pruebastatus: 'ui_test_status' };
        const header = table.createTHead().insertRow();
        for (const code of Object.values(fields)) { const th = doc.createElement('th'); th.scope = 'col'; th.textContent = entity_ui.t(code); header.append(th); }
        const body = table.createTBody();
        results.forEach((result, index) => {
            const row = body.insertRow();
            for (const key of Object.keys(fields)) {
                const cell = row.insertCell();
                if (key === 'valorprueba') { const pre = doc.createElement('pre'); pre.textContent = JSON.stringify(tests[index][5], null, 2); cell.append(pre); }
                else if (key === 'traduccionError') {
                    const missing = !result[key] || result[key] === 'sintraduccion';
                    if (missing) cell.className = 'ko';
                    cell.textContent = missing ? entity_ui.t('ui_test_missing_translation') : result[key];
                }
                else if (key === 'pruebastatus') { cell.className = result[key] === 'CORRECTO' ? 'ok' : 'ko'; cell.textContent = entity_ui.t(result[key] === 'CORRECTO' ? 'ui_correct' : 'ui_incorrect'); }
                else cell.textContent = String(result[key]);
            }
        });
        doc.body.append(table); return true;
    }

    // arranque de la interfaz y estilos, siempre dentro de la clase DOM
    /**
     * añade una única hoja de estilos de la aplicación sin modificar el css del profesor
     * @returns {void} no devuelve un valor
     */
    aplicarEstilos() {
        if (document.getElementById('et2_styles')) return;
        const style = document.createElement('style');
        style.id = 'et2_styles';
        style.textContent = `[hidden]{display:none!important}body{font:16px system-ui,sans-serif;color:#202b36}#add_search_columns{display:flex;align-items:center;gap:12px;flex-wrap:wrap}#label_seleccioncolumnas{margin-left:auto}#seleccioncolumnas{min-width:190px}.et2-table{border-collapse:collapse;width:100%}.et2-table th,.et2-table td{padding:10px;border-bottom:1px solid #ccd4dd;text-align:left}.et2-table button,.et2-form-actions button{cursor:pointer;padding:7px;margin:3px}#IU_manage_table{overflow-x:auto}.contenidoForm{max-height:85vh;overflow:auto;padding:20px}.et2-field{display:grid;grid-template-columns:minmax(130px,1fr) minmax(150px,2fr) auto;gap:6px;margin:12px 0}.et2-field input,.et2-field textarea,.et2-field select{font:inherit;min-width:0;padding:6px;border:2px solid #8795a5;border-radius:3px}.ui_operation_success{background:#d7efdc;color:#1e5630;padding:10px}.ui_operation_refresh_failed{background:#fff1cd;color:#6b4d00;padding:10px}.et2-field-error{grid-column:2/-1;color:#9c1824;font-size:.9em}.et2-invalid{border-color:#b51d2b!important}.et2-valid{border-color:#277340!important}.et2-field [readonly],.et2-field :disabled{background:#edf0f3}.et2-form-actions{display:flex;gap:10px;justify-content:flex-end}#error_action_modal{z-index:1002;padding:24px;max-width:85vw}#modal_action_overlay{z-index:1001}@media(max-width:600px){.et2-field{grid-template-columns:1fr}.et2-field-error{grid-column:auto}}`;
        style.textContent += `.et2-matrix-toolbar{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-end;margin:18px 0}.et2-matrix-toolbar label{display:flex;flex-direction:column;gap:6px;font-weight:600}.et2-matrix-toolbar input,.et2-matrix-toolbar select{font:inherit;padding:8px;min-width:160px;max-width:100%;border:1px solid #8795a5;border-radius:4px}.et2-matrix-toolbar button{font:inherit;padding:9px 14px;cursor:pointer}.et2-matrix-scroll{overflow:auto;max-height:65vh;border:1px solid #ccd4dd;border-radius:5px}.et2-matrix-table{width:max-content;min-width:100%;border-collapse:separate;border-spacing:0}.et2-matrix-table caption{text-align:left;padding:10px;font-weight:600}.et2-matrix-table th,.et2-matrix-table td{min-width:100px;padding:12px;text-align:center}.et2-matrix-table thead th{position:sticky;top:0;background:#edf1f5;z-index:2}.et2-matrix-table th:first-child{position:sticky;left:0;text-align:left;min-width:180px;background:#f7f9fb;z-index:1}.et2-matrix-table thead th:first-child{z-index:3}.et2-matrix-table input[type=checkbox]{width:22px;height:22px;cursor:pointer;accent-color:#24624b}.et2-matrix-table input:disabled{cursor:wait;opacity:.5}.et2-matrix-table input:focus-visible{outline:3px solid #2563a6;outline-offset:3px}.et2-matrix-table tbody tr:hover td{background:#f2f7fb}@media(max-width:600px){.et2-matrix-toolbar label{width:100%}.et2-matrix-table th:first-child{min-width:135px}}`;
        document.head.append(style);
    }
    /**
     * prepara estilos, controles de teclado, idioma y comportamiento de los modales
     * @returns {void} no devuelve un valor
     */
    inicializarInterfaz() {
        this.aplicarEstilos();
        const testIcon = document.querySelector('img[src$="/TEST.png"]'); if (testIcon) testIcon.id = 'botonTEST';
        for (const image of document.querySelectorAll('img[src$="/BACK.png"]')) image.onclick = () => { if (entity_ui.active) entity_ui.closeForm(entity_ui.active); };
        for (const action of ['ADD', 'SEARCH', 'TEST', 'BACK']) for (const img of document.querySelectorAll(`img[src$="/${action}.png"]`)) { img.classList.add('action_' + action); img.tabIndex = 0; img.setAttribute('role', 'button'); img.onkeydown = event => { if (['Enter', ' '].includes(event.key)) { event.preventDefault(); img.click(); } }; }
        document.querySelector('span[onclick="entidad = new entidad();"]')?.closest('li')?.remove();
        for (const item of document.querySelectorAll('#div-menu span[onclick], nav span[onclick]')) {
            item.tabIndex = 0; item.setAttribute('role', 'button');
            item.onkeydown = event => { if (['Enter', ' '].includes(event.key)) { event.preventDefault(); item.click(); } };
        }
        document.getElementById('error_action_modal').querySelector('button').className = 'ui_close';
        document.addEventListener('keydown', event => {
            const modal = document.getElementById('error_action_modal');
            if (event.key === 'Escape') { if (modal.style.display === 'block') window.entidad?.dom.cerrarModalError(); else if (document.getElementById('Div_IU_form').style.display === 'block' && window.entidad) entity_ui.closeForm(window.entidad); }
            if (event.key === 'Tab') {
                const active = modal.style.display === 'block' ? modal : document.getElementById('Div_IU_form').style.display === 'block' ? document.getElementById('Div_IU_form') : null;
                if (!active) return;
                const fields = Array.from(active.querySelectorAll('button,input,textarea,select,a[href],[tabindex="0"]')).filter(e => !e.disabled && e.getClientRects().length), first = fields[0], last = fields.at(-1);
                if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
                else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
            }
        });
        setLang(getCookie('lang') === 'EN' ? 'EN' : 'ES');
    }
    /**
     * registra la inicialización que debe ejecutarse en DOMContentLoaded
     * @param {function(): void} callback - función que se ejecutará al cargarse el documento
     * @returns {void} no devuelve un valor
     */
    alCargar(callback) {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

// adaptación de respuestas y peticiones. No se convierten objetos en identificadores mediante String()
/**
 * adapta las respuestas del back y centraliza peticiones, catálogos y paginación
 * @extends {ExternalAccess}
 */
class entity_access extends ExternalAccess {
    static cache = new Map();
    /**
     * busca una propiedad en una respuesta anidada sin elegir entre coincidencias ambiguas
     * @param {*} value - estructura en la que se busca la propiedad
     * @param {string} key - clave que identifica el dato o la relación buscada
     * @param {number} [depth=0] - profundidad actual para limitar la exploración de referencias anidadas
     * @returns {*} valor encontrado o undefined si no hay una coincidencia única
     */
    static find(value, key, depth = 0) {
        if (!value || typeof value !== 'object' || depth > 8) return undefined;
        if (Object.hasOwn(value, key)) return value[key];
        const matches = Object.values(value).map(item => this.find(item, key, depth + 1)).filter(item => item !== undefined);
        return matches.length === 1 ? matches[0] : undefined;
    }
    /**
     * extrae un identificador o texto escalar de una referencia anidada
     * @param {*} value - valor recibido por la operación
     * @param {string} field - nombre del atributo o control de formulario
     * @param {number} [depth=0] - profundidad actual para limitar la exploración de referencias anidadas
     * @returns {string} valor escalar normalizado o cadena vacía para un valor nulo
     * @throws {Error} ui_invalid_response si la estructura no permite obtener un valor escalar
     */
    static scalar(value, field, depth = 0) {
        if (value == null) return '';
        if (typeof value === 'string' || typeof value === 'number') return String(value);
        if (typeof value !== 'object' || Array.isArray(value) || depth > 8) throw new Error('ui_invalid_response');
        for (const key of [field, 'value', 'valor', 'id']) {
            const found = this.find(value, key);
            if (found !== undefined && found !== value) return this.scalar(found, field, depth + 1);
        }
        if (Object.keys(value).length === 1) return this.scalar(Object.values(value)[0], field, depth + 1);
        throw new Error('ui_invalid_response');
    }
    /**
     * normaliza una fila y separa las etiquetas de referencia de sus identificadores
     * @param {ConfiguracionEntidad} config - atributos, claves y componentes declarados por la entidad
     * @param {RegistroEntidad} row - fila que puede contener referencias anidadas del back
     * @returns {RegistroEntidad} fila normalizada sin ficheros auxiliares ni campos sensibles
     * @throws {Error} ui_invalid_response si la fila o una referencia no tiene el formato esperado
     */
    static normalizeRow(config, row) {
        if (!row || typeof row !== 'object' || Array.isArray(row)) throw new Error('ui_invalid_response');
        const result = { _labels: {} };
        for (const [field, value] of Object.entries(row._labels || {})) {
            if (config.references?.[field]) result._labels[field] = this.scalar(value, config.references[field][2]);
        }
        for (const field of config.fields) {
            if (config.components[field] === 'file' || (config.sensitive || []).includes(field)) continue;
            const raw = Object.hasOwn(row, field) ? row[field] : this.find(row, field);
            result[field] = this.scalar(raw, field);
            const reference = config.references?.[field];
            if (reference) {
                const label = this.find(raw, reference[2]);
                if (label !== undefined) result._labels[field] = this.scalar(label, reference[2]);
            }
        }
        return result;
    }
    /**
     * normaliza un conjunto de filas y verifica que todas contengan sus claves
     * @param {ConfiguracionEntidad} config - atributos, claves y componentes declarados por la entidad
     * @param {RegistroEntidad[]} rows - filas que se quieren normalizar o representar
     * @returns {RegistroEntidad[]} filas listas para utilizarlas en tablas y formularios
     * @throws {Error} ui_invalid_response si no hay un array válido o falta alguna clave
     */
    static normalizeRows(config, rows) {
        if (!Array.isArray(rows)) throw new Error('ui_invalid_response');
        return rows.map(row => {
            const normalized = this.normalizeRow(config, row);
            if (config.keys.some(key => !normalized[key])) throw new Error('ui_invalid_response');
            return normalized;
        });
    }
    /**
     * recupera las páginas de una búsqueda usando empieza y filaspagina
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {string} name - nombre de la entidad o catálogo que se consulta
     * @param {FormData} [filters=new FormData()] - criterios de búsqueda que se conservan entre páginas
     * @returns {Promise<RespuestaBack>} respuesta con las páginas reunidas o el error comunicado por el back
     * @throws {Error} si falla la petición, se repiten páginas o la paginación queda incompleta
     */
    static async searchAll(entity, name, filters = new FormData()) {
        const result = [], seen = new Set(), pageSize = 250;
        let start = 0;
        for (let pageNumber = 0; pageNumber < 1000; pageNumber++) {
            const page = new FormData();
            for (const [key, value] of filters) {
                if (!['empieza', 'filaspagina', 'filas'].includes(key)) page.append(key, value);
            }
            // filaspagina es el parámetro de entrada; el BACK devuelve el tamaño como filas
            const answer = await entity.access_functions.peticionBackGeneral(page, name, 'SEARCH', { empieza: start, filaspagina: pageSize });
            if (answer.ok !== true && !['RECORDSET_DATOS', 'RECORDSET_VACIO'].includes(answer.code)) return answer;
            const rows = answer.resource || [];
            if (!Array.isArray(rows)) throw new Error('ui_invalid_response');
            const hasTotal = answer.total !== undefined;
            const total = hasTotal ? Number(answer.total) : null;
            if (hasTotal && (answer.total === null || answer.total === '' || !Number.isSafeInteger(total) || total < 0)) throw new Error('ui_incomplete_results');
            if (answer.empieza !== undefined && (answer.empieza === null || answer.empieza === '' || Number(answer.empieza) !== start)) throw new Error('ui_incomplete_results');
            if (rows.length > pageSize) throw new Error('ui_incomplete_results');
            const fingerprint = JSON.stringify(rows);
            if (rows.length && seen.has(fingerprint)) throw new Error('ui_incomplete_results');
            seen.add(fingerprint);
            result.push(...rows); start += rows.length;
            if (hasTotal && start > total) throw new Error('ui_incomplete_results');
            if ((hasTotal && start === total) || (!hasTotal && rows.length < pageSize)) {
                return { ...answer, resource: result, total: result.length, empieza: 0, filas: result.length, code: result.length ? 'RECORDSET_DATOS' : 'RECORDSET_VACIO' };
            }
            if (!rows.length) throw new Error('ui_incomplete_results');
        }
        throw new Error('ui_incomplete_results');
    }
    /**
     * obtiene y comparte temporalmente el catálogo normalizado de una entidad
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {string} name - nombre de la entidad o catálogo que se consulta
     * @returns {Promise<RegistroEntidad[]>} registros del catálogo solicitado
     * @throws {Error} si el catálogo no puede recuperarse o contiene datos inválidos
     */
    static async records(entity, name) {
        if (!this.cache.has(name)) {
            const promise = this.searchAll(entity, name).then(response => {
                if (!response.ok && !['RECORDSET_DATOS', 'RECORDSET_VACIO'].includes(response.code)) throw new Error(response.code || 'ui_error');
                const types = { persona, usuario, rol, accion, funcionalidad, funcionalidad_accion, rolaccionfuncionalidad };
                return this.normalizeRows(new types[name]('test').config, response.resource || []);
            }).catch(error => {
                if (this.cache.get(name) === promise) this.cache.delete(name);
                throw error;
            });
            this.cache.set(name, promise);
        }
        return this.cache.get(name);
    }
    /**
     * envía un POST al back con controlador, acción y datos preparados
     * limita la espera a 15 segundos y libera siempre el temporizador
     * @param {string|FormData} formulario - id de formulario, FormData preparado o cadena vacía para no leer un formulario
     * @param {string} controlador - entidad del back a la que se dirige la petición
     * @param {AccionFormulario} action - acción que se está preparando o ejecutando
     * @param {Object<string, string|number>|null} [datosextra=null] - parámetros adicionales, por ejemplo empieza y filaspagina
     * @returns {Promise<RespuestaBack>} respuesta json del back
     * @throws {Error} ui_network o ui_invalid_response si falla la comunicación o la respuesta
     */
    async peticionBackGeneral(formulario, controlador, action, datosextra = null) {
        const data = formulario instanceof FormData ? formulario : formulario ? entity_ui.interfaceDom.datosFormularioPorId(formulario) : new FormData();
        data.set('controlador', controlador); data.set('action', action);
        for (const [key, value] of Object.entries(datosextra || {})) data.set(key, value);
        const controller = new AbortController(), timer = setTimeout(() => controller.abort(), 15000);
        try {
            const response = await fetch('http://193.147.87.202/ET2/index.php', { method: 'POST', body: data, signal: controller.signal });
            if (!response.ok) throw new Error('ui_network');
            let answer;
            try { answer = await response.json(); }
            catch { throw new Error('ui_invalid_response'); }
            if (!answer || typeof answer !== 'object' || !('code' in answer)) throw new Error('ui_invalid_response');
            return answer;
        } catch (error) { throw new Error(error.message === 'ui_invalid_response' ? error.message : 'ui_network'); }
        finally { clearTimeout(timer); }
    }
}

// operaciones compartidas. Las políticas, HTML y campos a validar se declaran en cada entidad
// coordinación compartida: no crea elementos ni modifica HTML/CSS
// se declara en este archivo ya cargado por el index del profesor, junto con el adaptador de acceso
/**
 * coordina las operaciones compartidas de las entidades y delega la interfaz en el dom
 */
const entity_ui = {
    active: null,
    interfaceDom: new entity_dom_fields(),
    validatedSubmits: new WeakMap(),
    /**
     * selecciona el diccionario de textos del idioma actual
     * @returns {Object<string, string>} traducciones en español o inglés
     */
    dictionary() { return getCookie('lang') === 'EN' ? textos_EN : textos_ES; },
    /**
     * obtiene una traducción y conserva el código cuando no hay texto definido
     * @param {string} code - clave de traducción o código de estado que se quiere presentar
     * @returns {string} mensaje traducido o el propio código
     */
    t(code) { return this.dictionary()[code] || code; },
    /**
     * configura los colaboradores de la entidad e inicia la gestión fuera del modo test
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {string} name - nombre de la entidad o catálogo que se consulta
     * @param {string|null} mode - modo de inicialización; 'test' evita las consultas y la apertura de la gestión
     * @returns {void} no devuelve un valor
     */
    initialize(entity, name, mode) {
        entity.nombreentidad = name;
        entity.columnasamostrar = [...entity.config.columns]; entity.mostrarespecial = [...(entity.config.special || [])];
        entity.dom = new entity_dom_fields(); entity.validations = new entity_validations(); entity.access_functions = new entity_access();
        entity.datos = []; entity.atributos = entity.config.fields.filter(field => entity.config.components[field] !== 'file' && !(entity.config.sensitive || []).includes(field));
        entity.esTest = mode === 'test'; entity.lastSearch = new FormData();
        if (entity.esTest) return;
        entity_access.cache.clear();
        this.active = entity;
        entity.dom.iniciarGestion(entity);
        if (entity.config.matrix) entity.dom.mostrarMatrizCargando();
        else this.renderTable(entity, []);
        entity.ready = entity.SEARCH();
    },
    /**
     * verifica que una operación pertenece a la entidad y al formulario activos
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {ContextoFormulario} context - estado del formulario al que pertenece la operación
     * @returns {boolean} true si el contexto sigue siendo válido
     */
    current(entity, context) {
        return !!context && this.active === entity && entity.formContext === context && entity.dom.esFormularioActual(context);
    },
    /**
     * delega en el dom la actualización de disponibilidad del botón de envío
     * @param {ContextoFormulario} context - estado del formulario al que pertenece la operación
     * @returns {void} no devuelve un valor
     */
    updateSubmit(context) {
        this.interfaceDom.actualizarSubmit(context);
    },
    /**
     * abre un formulario solo si la entidad está activa y no tiene operaciones pendientes
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {AccionFormulario} action - acción que se está preparando o ejecutando
     * @param {RegistroEntidad} values - valores normalizados con los que se rellenará el formulario
     * @param {PoliticaFormulario} policy - campos visibles, bloqueados y enviados para la acción
     * @returns {ContextoFormulario|null} contexto creado o null si no se puede abrir
     */
    openForm(entity, action, values, policy) {
        if (entity.pending || this.active !== entity) return null;
        entity_access.cache.clear();
        return entity.dom.prepararFormulario(entity, action, values, policy);
    },
    /**
     * marca el formulario como preparado y finaliza su presentación
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {ContextoFormulario} context - estado del formulario al que pertenece la operación
     * @returns {boolean} true si el contexto sigue activo y se ha terminado de preparar
     */
    finishForm(entity, context) {
        if (!this.current(entity, context)) return false;
        context.ready = true;
        this.updateSubmit(context);
        entity.dom.finalizarFormulario(context);
        return true;
    },
    /**
     * cierra el formulario activo e invalida su contexto para futuras respuestas
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @returns {void} no devuelve un valor
     */
    closeForm(entity) {
        if (this.active !== entity) return;
        entity.dom.cerrarFormulario(entity);
        entity.formContext = null;
        entity.formAction = null;
    },
    /**
     * convierte una fecha de almacenamiento a dd/mm/aaaa para su presentación
     * @param {string|null|undefined} value - fecha recibida del back
     * @returns {string} fecha adaptada o valor original cuando no coincide el formato
     */
    dateForForm(value) { const match = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})/); return match ? `${match[3]}/${match[2]}/${match[1]}` : String(value || ''); },
    /**
     * ejecuta todos los validadores y comprueba la pertenencia de las referencias seleccionadas
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {AccionFormulario} action - acción que se está preparando o ejecutando
     * @param {string[]} fields - atributos que deben tratarse en esta operación
     * @returns {ResultadoSubmit} true si todos los campos pasan o un objeto con los errores encontrados
     */
    validateFields(entity, action, fields) {
        const context = entity.formContext;
        if (!this.current(entity, context) || context.action !== action || context.loading || context.referenceError) return { form: 'ui_form_invalid' };
        const results = {};
        for (const field of fields) {
            const method = entity[action + '_' + field + '_validation'];
            if (!entity.dom.existeCampo(field, context) || typeof method !== 'function') {
                results[field] = 'ui_form_invalid'; entity.dom.abrirModalError('ui_form_invalid'); continue;
            }
            results[field] = method.call(entity);
            const options = context.references[field];
            const value = entity.dom.valorCampo(field, context);
            if (results[field] === true && value && options && !options.has(value)) {
                results[field] = 'ui_reference_invalid'; entity.dom.mostrar_error_campo(field, results[field]);
            }
        }
        if (Object.values(results).every(value => value === true)) return true;
        entity.dom.enfocarPrimerError(context);
        return results;
    },
    /**
     * comprueba que DELETE dispone de las claves originales del registro seleccionado
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @returns {ResultadoSubmit} true si las claves están disponibles o un objeto con los errores
     */
    validateKeys(entity) {
        const context = entity.formContext;
        if (!this.current(entity, context) || context.action !== 'DELETE') return { form: 'ui_form_invalid' };
        const results = {};
        for (const key of entity.config.keys) results[key] = context.values[key] ? true : 'ui_form_invalid';
        if (Object.values(results).every(value => value === true)) return true;
        entity.dom.abrirModalError('ui_form_invalid');
        return results;
    },
    /**
     * construye FormData con los campos expresamente permitidos para la acción
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {ContextoFormulario} context - estado del formulario al que pertenece la operación
     * @returns {FormData} datos listos para la petición, incluidos los ficheros seleccionados
     * @throws {Error} ui_form_invalid si el contexto ya no corresponde al formulario activo
     */
    payload(entity, context) {
        if (!this.current(entity, context)) throw new Error('ui_form_invalid');
        const data = new FormData();
        for (const { field, file, value } of entity.dom.leerDatosEnvio(context)) {
            if (file) { if (value) data.append(field, value); }
            else data.append(field, value);
        }
        return data;
    },
    /**
     * consulta los datos con los filtros actuales y presenta el resultado
     * conserva la paginación y descarta respuestas de una gestión anterior
     * @param {EntidadProyecto} entity - instancia cuya búsqueda se quiere ejecutar
     * @returns {Promise<boolean>} true si se han presentado los datos o false si falla la búsqueda
     */
    async search(entity) {
        if (entity.pending || this.active !== entity) return false;
        const context = entity.formContext;
        const fromForm = context?.action === 'SEARCH';
        const accepted = this.validatedSubmits.get(entity);
        this.validatedSubmits.delete(entity);
        if (fromForm && (!context.ready || context.loading || context.referenceError || context.unavailable.size)) return false;
        if (fromForm && accepted !== context && entity['SEARCH_submit_' + entity.nombreentidad]() !== true) return false;

        entity.pending = true;
        const request = entity.request = Symbol('SEARCH');
        const current = () => this.active === entity && entity.request === request && (!fromForm || entity.formContext === context);
        this.status('ui_loading');
        entity.dom.bloquearEnvio(context);
        if (entity.config.matrix && this.matrixCurrent(entity, entity.matrixContext)) entity.dom.bloquearMatriz(entity.matrixContext, true);
        try {
            const filters = fromForm ? this.payload(entity, context) : new FormData();
            if (fromForm) {
                entity.lastSearch = new FormData();
                for (const [key, value] of filters) entity.lastSearch.append(key, value);
            } else {
                for (const [key, value] of entity.lastSearch) filters.append(key, value);
            }
            const response = await entity_access.searchAll(entity, entity.nombreentidad, filters);
            if (!current()) return false;
            if (response.ok !== true && !['RECORDSET_DATOS', 'RECORDSET_VACIO'].includes(response.code)) {
                entity.dom.abrirModalError(response.code || 'ui_error');
                return false;
            }

            const rows = entity_access.normalizeRows(entity.config, response.resource || []);
            const references = Object.keys(entity.config.references || {}).filter(field =>
                (entity.config.referenceDisplay || Object.keys(entity.config.references || {})).includes(field));
            for (const field of references) {
                const reference = entity.config.references[field];
                try {
                    const records = await entity_access.records(entity, reference[0]);
                    if (!current()) return false;
                    for (const row of rows) {
                        const record = records.find(record => record[reference[1]] === row[field]);
                        if (record) row._labels[field] = record[reference[2]] || row[field];
                    }
                } catch {
                    // si falla la etiqueta se conservan el id y los datos ya recibidos
                }
            }
            if (!current()) return false;
            this.closeForm(entity);
            const rendered = await entity.crearTablaDatos(rows);
            return rendered !== false;
        } catch (error) {
            if (current()) entity.dom.abrirModalError(error.message || 'ui_network');
            return false;
        } finally {
            if (entity.request === request) entity.pending = false;
            if (this.active === entity && entity.request === request) {
                this.status('');
                if (context && this.current(entity, context)) this.updateSubmit(context);
                if (entity.config.matrix && this.matrixCurrent(entity, entity.matrixContext)) entity.dom.bloquearMatriz(entity.matrixContext, false);
            }
        }
    },
    /**
     * valida y envía un alta, edición o borrado desde su formulario
     * mantiene los datos si falla y refresca la búsqueda tras una escritura aceptada
     * @param {EntidadProyecto} entity - instancia que solicita la escritura
     * @param {'ADD'|'EDIT'|'DELETE'} action - operación de escritura solicitada
     * @returns {Promise<boolean>} true si se acepta la escritura o false si no puede completarse
     */
    async write(entity, action) {
        if (entity.pending || this.active !== entity) return false;
        if ((entity.config.readOnlyActions || []).includes(action)) {
            entity.dom.abrirModalError('ui_association_edit');
            return false;
        }
        const context = entity.formContext;
        const accepted = this.validatedSubmits.get(entity);
        this.validatedSubmits.delete(entity);
        if (context?.action !== action) {
            entity.dom.abrirModalError('ui_form_invalid');
            return false;
        }
        if (!context.ready || context.loading || context.referenceError || context.unavailable.size) return false;
        if (accepted !== context && entity[action + '_submit_' + entity.nombreentidad]() !== true) return false;

        entity.pending = true;
        const request = entity.request = Symbol(action);
        const current = () => this.active === entity && entity.request === request && entity.formContext === context;
        this.status('ui_loading');
        entity.dom.bloquearEnvio(context);
        if (entity.config.matrix && this.matrixCurrent(entity, entity.matrixContext)) entity.dom.bloquearMatriz(entity.matrixContext, true);
        try {
            const data = this.payload(entity, context);
            const response = await entity.access_functions.peticionBackGeneral(data, entity.nombreentidad, action);
            if (!current()) return false;
            if (response.ok !== true) {
                entity.dom.abrirModalError(response.code || 'ui_error');
                return false;
            }
            entity_access.cache.clear();
            this.closeForm(entity);
            return await this.refreshAfterWrite(entity);
        } catch (error) {
            if (current()) entity.dom.abrirModalError(error.message || 'ui_network');
            return false;
        } finally {
            if (entity.request === request) entity.pending = false;
            if (this.active === entity && entity.request === request) {
                this.status('');
                if (this.current(entity, context)) this.updateSubmit(context);
                if (entity.config.matrix && this.matrixCurrent(entity, entity.matrixContext)) entity.dom.bloquearMatriz(entity.matrixContext, false);
            }
        }
    },
    /**
     * delega en el dom el mensaje de estado de la operación actual
     * @param {string} code - clave de traducción o código de estado que se quiere presentar
     * @returns {void} no devuelve un valor
     */
    status(code) {
        this.interfaceDom.mostrarEstado(code);
    },
    /**
     * guarda las filas normalizadas y delega la construcción de la tabla en el dom
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {RegistroEntidad[]} rows - filas que se quieren normalizar o representar
     * @returns {void} no devuelve un valor
     */
    renderTable(entity, rows) {
        entity.datos = entity_access.normalizeRows(entity.config, rows);
        entity.referenceLabels = {};
        for (const row of entity.datos) for (const [field, label] of Object.entries(row._labels)) {
            entity.referenceLabels[field] ||= new Map();
            entity.referenceLabels[field].set(row[field], label);
        }
        entity.dom.mostrarTabla(entity);
    },
    // comparte el refresco y su resultado entre los formularios y las casillas
    /**
     * vuelve a consultar tras una escritura aceptada y comunica si falla el refresco
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @returns {Promise<boolean>} true porque la escritura ya fue aceptada, aunque falle la actualización visual
     */
    async refreshAfterWrite(entity) {
        entity.pending = false;
        const refreshed = await entity.SEARCH();
        if (this.active === entity) this.status(refreshed ? 'ui_operation_success' : 'ui_operation_refresh_failed');
        return true;
    },
    /**
     * espera la matriz y dirige el foco a su gestión o abre el modal SEARCH
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {boolean} [search=false] - indica si se debe abrir el modal de búsqueda en lugar de enfocar la matriz
     * @returns {Promise<boolean>} resultado de la preparación o apertura solicitada
     */
    async focusMatrix(entity, search = false) {
        if (!this.matrixCurrent(entity, entity.matrixContext)) {
            if (!await this.refreshMatrix(entity)) return false;
        }
        if (!this.matrixCurrent(entity, entity.matrixContext) || entity.pending) return false;
        return search ? this.openMatrixSearch(entity) : entity.dom.enfocarMatriz(entity);
    },
    // prepara criterios en un modal; la matriz no cambia hasta confirmar Buscar
    /**
     * prepara el modal SEARCH con referencias presentes en las relaciones de la matriz
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @returns {boolean} true si el formulario de filtros queda preparado
     */
    openMatrixSearch(entity) {
        const matrix = entity.matrixContext;
        if (!this.matrixCurrent(entity, matrix) || entity.pending || matrix.pending) return false;
        const role = matrix.roles.find(row => row.id_rol === matrix.selectedRole);
        const values = { id_funcionalidad: matrix.functionFilter, id_accion: matrix.actionFilter, id_rol: matrix.selectedRole, _labels: { id_rol: role?.rol_name || matrix.selectedRole } };
        const context = this.openForm(entity, 'SEARCH', values, {
            hidden: [], readOnly: entity.config.matrix.role ? ['id_rol'] : [], send: [],
            submit: true, note: 'ui_matrix_search_note', matrixSearch: matrix
        });
        if (!context) return false;
        const relations = [...matrix.relations.values()].filter(row => !entity.config.matrix.role || !matrix.selectedRole || row.id_rol === matrix.selectedRole);
        for (const field of ['id_funcionalidad', 'id_accion']) {
            const reference = entity.config.references[field];
            const catalog = field === 'id_funcionalidad' ? matrix.functionalities : matrix.actions;
            const referenced = new Set(relations.map(row => row[field]));
            const options = catalog.filter(row => referenced.has(row[field])).map(row => ({ value: row[field], label: `${row[reference[2]] || row[field]} (${row[field]})` }));
            entity.dom.rellenarOpciones(entity, context, field, options, values[field]);
        }
        return this.finishForm(entity, context);
    },
    // los selects admiten vacío o una referencia ofrecida; no se comprueba una pareja como en ADD
    /**
     * comprueba que los filtros pertenecen al contexto y a las opciones ofrecidas
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {ContextoFormulario} [context=entity.formContext] - estado del formulario al que pertenece la operación
     * @returns {ResultadoSubmit} true si los filtros son válidos o un objeto con los errores
     */
    validateMatrixSearch(entity, context = entity.formContext) {
        const matrix = context?.policy.matrixSearch;
        if (!this.current(entity, context) || context.action !== 'SEARCH' || !this.matrixCurrent(entity, matrix) || entity.pending || matrix.pending || matrix.selectedRole !== context.values.id_rol) return { form: 'ui_form_invalid' };
        const errors = {};
        for (const field of ['id_funcionalidad', 'id_accion']) {
            const value = entity.dom.valorCampo(field, context);
            if (value && !context.references[field]?.has(value)) {
                errors[field] = 'ui_reference_invalid';
                entity.dom.mostrar_error_campo(field, errors[field]);
            }
        }
        if (!Object.keys(errors).length) return true;
        entity.dom.enfocarPrimerError(context); return errors;
    },
    /**
     * aplica los filtros confirmados y cierra el modal sin modificar relaciones
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {ContextoFormulario} context - estado del formulario al que pertenece la operación
     * @returns {boolean} true si los filtros se han aplicado
     */
    applyMatrixSearch(entity, context) {
        if (this.validateMatrixSearch(entity, context) !== true) return false;
        const matrix = context.policy.matrixSearch;
        matrix.functionFilter = entity.dom.valorCampo('id_funcionalidad', context);
        matrix.actionFilter = entity.dom.valorCampo('id_accion', context);
        matrix.focusKey = null;
        this.closeForm(entity);
        entity.dom.actualizarMatriz(entity, matrix);
        return true;
    },
    /**
     * compone una clave estable con los identificadores que forman la relación
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {RegistroEntidad} relation - claves de la relación que se quiere asignar o desasignar
     * @returns {string} representación json de las claves en el orden de la entidad
     */
    matrixKey(entity, relation) {
        return JSON.stringify(entity.config.keys.map(field => String(relation[field] || '')));
    },
    /**
     * comprueba que la matriz pertenece a la entidad activa y sigue montada
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {ContextoMatriz} matrix - estado de la matriz que se está gestionando
     * @returns {boolean} true si se puede actualizar esa matriz
     */
    matrixCurrent(entity, matrix) {
        return !!matrix && this.active === entity && entity.matrixContext === matrix && entity.dom.esMatrizActual(matrix);
    },
    // las entidades deciden sus catálogos; el coordinador prepara el estado de la matriz
    /**
     * carga los catálogos y prepara el estado confirmado de la matriz de relaciones
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {RegistroEntidad[]} rows - filas que se quieren normalizar o representar
     * @returns {Promise<boolean>} true si la matriz queda presentada o false si falla su carga
     */
    async renderMatrix(entity, rows) {
        const revision = entity.matrixRevision = Symbol('matrix');
        const previous = entity.matrixContext;
        try {
            const catalogs = await entity.cargarCatalogosMatriz();
            if (this.active !== entity || entity.matrixRevision !== revision) return false;
            const actions = catalogs.actions, roles = catalogs.roles || [];
            const actionIds = new Set(actions.map(row => row.id_accion));
            const matrix = {
                ...catalogs, roles, relations: new Map(), pending: false,
                functionIds: new Set(catalogs.functionalities.map(row => row.id_funcionalidad)),
                actionIds, roleIds: new Set(roles.map(row => row.id_rol)),
                pairs: new Set((catalogs.pairs || []).map(row => JSON.stringify([row.id_funcionalidad, row.id_accion]))),
                selectedRole: roles.some(row => row.id_rol === previous?.selectedRole) ? previous.selectedRole : '',
                functionFilter: previous?.functionFilter || '', actionFilter: previous?.actionFilter || '',
                columns: previous && previous.columns.size !== previous.actions.length ? new Set([...previous.columns].filter(id => actionIds.has(id))) : new Set(actionIds),
                focusKey: previous?.focusKey || null
            };
            entity.datos = entity_access.normalizeRows(entity.config, rows);
            for (const row of entity.datos) matrix.relations.set(this.matrixKey(entity, row), row);
            entity.matrixContext = matrix;
            entity.dom.mostrarMatriz(entity, matrix);
            return true;
        } catch (error) {
            if (this.active === entity && entity.matrixRevision === revision) {
                entity.matrixContext = null;
                entity.dom.mostrarMatrizError(entity);
                entity.dom.abrirModalError(error.message || 'ui_error');
            }
            return false;
        }
    },
    /**
     * actualiza rol, columnas o filtros de la matriz sin escribir relaciones
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {ContextoMatriz} matrix - estado de la matriz que se está gestionando
     * @param {string} field - propiedad de vista que cambia: selectedRole, columns o un filtro
     * @param {string|string[]} value - selección que se aplicará a la vista
     * @returns {boolean} true si se aplica el cambio de vista o false si no está permitido
     */
    updateMatrixView(entity, matrix, field, value) {
        if (!this.matrixCurrent(entity, matrix) || entity.pending || matrix.pending) return false;
        if (field === 'selectedRole') {
            if (value && !matrix.roleIds.has(value)) return false;
            matrix.selectedRole = value;
        } else if (field === 'columns') matrix.columns = new Set(value.filter(id => matrix.actionIds.has(id)));
        else if (['functionFilter', 'actionFilter'].includes(field)) {
            const key = field === 'functionFilter' ? 'id_funcionalidad' : 'id_accion';
            const available = [...matrix.relations.values()].some(row => row[key] === value && (!entity.config.matrix.role || !matrix.selectedRole || row.id_rol === matrix.selectedRole));
            if (value && !available) return false;
            matrix[field] = value;
        } else return false;
        matrix.focusKey = null;
        entity.dom.actualizarMatriz(entity, matrix); return true;
    },
    /**
     * invalida los catálogos y vuelve a cargar la matriz si no hay una operación pendiente
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @returns {Promise<boolean>|false} promesa de búsqueda o false si ya se está procesando otra operación
     */
    refreshMatrix(entity) {
        if (this.active !== entity || entity.pending) return false;
        entity_access.cache.clear(); return entity.SEARCH();
    },
    // una casilla envía exclusivamente las claves de su relación, sin formularios DELETE o EDIT
    /**
     * asigna o desasigna una relación y restaura la casilla si el back rechaza el cambio
     * envía únicamente las claves de la relación y conserva el estado confirmado
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {'ADD'|'DELETE'} action - operación de asignación o desasignación de la relación
     * @param {ContextoMatriz} matrix - estado de la matriz que se está gestionando
     * @param {RegistroEntidad} relation - claves de la relación que se quiere asignar o desasignar
     * @returns {Promise<boolean>} true si la escritura fue aceptada; false si se rechazó o no pudo ejecutarse
     */
    async runMatrix(entity, action, matrix, relation) {
        if (!this.matrixCurrent(entity, matrix)) return false;
        const key = this.matrixKey(entity, relation), wasAssigned = matrix.relations.has(key);
        const restore = () => entity.dom.restaurarCasillaMatriz(matrix, key, wasAssigned);
        if (entity.pending || matrix.pending) { restore(); return false; }
        const adding = action === 'ADD';
        if (!['ADD', 'DELETE'].includes(action)) { restore(); return false; }
        if (adding === wasAssigned) { restore(); return true; }
        const validIds = entity.config.keys.every(field => /^[0-9]{1,11}$/.test(String(relation[field] || '')));
        const validRole = !entity.config.matrix.role || (matrix.roleIds.has(relation.id_rol) && relation.id_rol === matrix.selectedRole);
        const known = matrix.functionIds.has(relation.id_funcionalidad) && matrix.actionIds.has(relation.id_accion);
        const validPair = !entity.config.matrix.role || entity.personalize_id_accion_combinacion(relation) === true;
        if (!validIds || !validRole || !known || (adding && !validPair)) {
            restore(); entity.dom.abrirModalError('ui_invalid_pair'); return false;
        }
        const request = entity.request = Symbol(action);
        entity.pending = matrix.pending = true; matrix.focusKey = key;
        entity.dom.bloquearMatriz(matrix, true); this.status('ui_loading');
        let saved = false;
        try {
            const data = new FormData();
            for (const field of entity.config.keys) data.set(field, relation[field]);
            const response = await entity.access_functions.peticionBackGeneral(data, entity.nombreentidad, action);
            saved = response.ok === true;
            if (saved) entity_access.cache.clear();
            if (!this.matrixCurrent(entity, matrix) || entity.request !== request) return saved;
            if (!saved) { restore(); entity.dom.abrirModalError(response.code || 'ui_error'); return false; }
            if (adding) matrix.relations.set(key, { ...relation, _labels: {} });
            else matrix.relations.delete(key);
            entity.datos = [...matrix.relations.values()];
            entity.dom.actualizarMatriz(entity, matrix);
            entity.dom.bloquearMatriz(matrix, true);
            return await this.refreshAfterWrite(entity);
        } catch (error) {
            if (this.matrixCurrent(entity, matrix)) {
                if (!saved) restore();
                entity.dom.abrirModalError(error.message || 'ui_network');
            }
            return saved;
        } finally {
            matrix.pending = false;
            if (entity.request === request) entity.pending = false;
            if (this.matrixCurrent(entity, matrix)) entity.dom.bloquearMatriz(matrix, false);
            if (!saved && this.active === entity && entity.request === request) this.status('');
        }
    },
    /**
     * actualiza las columnas visibles y aplica el cambio a la tabla existente
     * @param {EntidadProyecto} entity - instancia de la entidad que solicita la operación
     * @param {string[]} columns - atributos que deben permanecer visibles en la tabla
     * @returns {void} no devuelve un valor
     */
    setColumns(entity, columns) {
        entity.columnasamostrar = columns;
        entity.dom.actualizarColumnas(columns);
    },
};

entity_ui.interfaceDom.alCargar(() => entity_ui.interfaceDom.inicializarInterfaz());