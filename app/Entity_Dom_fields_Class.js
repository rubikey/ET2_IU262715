// contiene tres bloques: entity_dom_fields (interfaz), entity_access (datos) y entity_ui (coordinación)
// DOM de la aplicación: crear, consultar y modificar la interfaz sin alterar Core ni Base
class entity_dom_fields extends dom_fields {
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
    fillElementValue(elemento, valor) { elemento.value = valor ?? ''; }
    mostrar_error_campo(id, codigo) {
        const field = document.getElementById(id), span = document.getElementById('span_error_' + id), message = document.getElementById('error_' + id);
        if (field) { field.setAttribute('aria-invalid', 'true'); field.classList.remove('et2-valid'); field.classList.add('et2-invalid'); }
        if (span) span.style.display = 'block';
        if (message) { message.className = codigo; message.textContent = entity_ui.t(codigo); }
    }
    mostrar_exito_campo(id) {
        const field = document.getElementById(id), span = document.getElementById('span_error_' + id), message = document.getElementById('error_' + id);
        if (field) { field.setAttribute('aria-invalid', 'false'); field.classList.remove('et2-invalid'); field.classList.add('et2-valid'); }
        if (span) span.style.display = 'none';
        if (message) { message.className = ''; message.textContent = ''; }
    }
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
    cerrarModalError() { super.cerrarModalError(); this.returnFocus?.focus(); }
    hide_element_form(id) {
        const field = document.getElementById(id), label = document.getElementById('label_' + id);
        if (field) { field.style.display = 'none'; field.closest('.et2-field')?.setAttribute('hidden', ''); }
        if (label) label.style.display = 'none';
    }
    colocartodosreadonly(idform) {
        for (const field of document.getElementById(idform).elements) {
            if (field.tagName === 'SELECT' || field.type === 'file') field.disabled = true;
            else if (field.type !== 'submit') field.readOnly = true;
        }
    }
    colocarvalidaciones(idform, accion) {
        const entity = entity_ui.active;
        const context = entity?.formContext;
        for (const field of document.getElementById(idform).elements) {
            if (!entity_ui.editable(field)) continue;
            const events = field.tagName === 'INPUT' && field.type !== 'file' ? ['blur', 'input'] : ['blur', 'input', 'change'];
            const validate = () => {
                if (!entity_ui.current(entity, context)) return;
                const method = entity[accion + '_' + field.id + '_validation'];
                if (method) method.call(entity);
            };
            for (const event of events) field.addEventListener(event, validate);
        }
    }
    validarsubmit(value) { return value === true; }
    rellenarOpciones(entity, context, field, options, selected = '') {
        if (!entity_ui.current(entity, context)) return;
        const control = context.form.querySelector('#' + field);
        const search = context.action === 'SEARCH';
        context.references[field] = new Map(options.map(option => [option.value, option.label]));
        if (control.tagName === 'SELECT') {
            control.replaceChildren(new Option(entity_ui.t(search ? 'ui_all' : 'ui_select'), ''));
            control.options[0].className = search ? 'ui_all' : 'ui_select';
            for (const option of options) control.add(new Option(option.label, option.value));
            if (control.disabled && selected && !options.some(option => option.value === selected)) control.add(new Option(selected, selected));
            control.value = options.some(option => option.value === selected) || control.disabled ? selected : '';
        } else {
            const list = context.form.querySelector('#' + control.getAttribute('list'));
            if (!list) throw new Error('ui_form_invalid');
            list.replaceChildren();
            for (const option of options) { const node = new Option(option.label, option.value); list.append(node); }
            control.value = selected;
        }
        if (!options.length && !search) context.unavailable.add(field);
        else context.unavailable.delete(field);
        control.title = options.length ? '' : entity_ui.t('ui_no_options');
        entity_ui.updateSubmit(context);
    }
    async rellenarReferencias(entity, context, fields) {
        context.loading++;
        entity_ui.updateSubmit(context);
        try {
            await Promise.all(fields.map(async field => {
                const reference = entity.config.references[field];
                const rows = await entity_access.records(entity, reference[0]);
                const options = rows.map(row => ({ value: row[reference[1]], label: row[reference[2]] || row[reference[1]] }));
                this.rellenarOpciones(entity, context, field, options, context.values[field] || '');
            }));
        } catch (error) {
            if (entity_ui.current(entity, context)) { context.referenceError = true; this.abrirModalError(error.message); }
        } finally {
            context.loading--;
            if (entity_ui.current(entity, context)) entity_ui.updateSubmit(context);
        }
    }

    // Consultas y operaciones de campos utilizadas por las entidades.
    obtenerCampo(id, context = null) {
        return context ? context.form.querySelector('#' + id) : document.getElementById(id);
    }
    existeCampo(id, context = null) {
        return !!this.obtenerCampo(id, context);
    }
    valorCampo(id, context = null) {
        const field = this.obtenerCampo(id, context);
        if (!field) throw new Error('ui_form_invalid');
        return field.value;
    }
    nombreFichero(id) {
        return this.obtenerCampo(id).files[0]?.name || '';
    }
    esFormularioActual(context) {
        return !!context && document.getElementById('form_iu') === context.form;
    }
    enfocarPrimerError(context) {
        context.form.querySelector('[aria-invalid="true"]')?.focus();
    }
    bloquearEnvio(context) {
        const button = context?.form.querySelector('#submit_button');
        if (button) button.disabled = true;
    }
    bloquearCampo(context, id, blocked = true) {
        const field = this.obtenerCampo(id, context);
        if (field.tagName === 'SELECT' || field.type === 'file') field.disabled = blocked;
        else field.readOnly = blocked;
    }
    observarCampo(context, id, event, callback) {
        this.obtenerCampo(id, context).addEventListener(event, callback);
    }
    esperarSeleccion(context, id, code) {
        const field = this.obtenerCampo(id, context);
        field.disabled = true;
        field.options[0].className = code;
        field.options[0].textContent = entity_ui.t(code);
        field.title = entity_ui.t(code);
        context.unavailable.delete(id);
    }
    crearBotonAccion(context, textCode, callback, first = false) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = textCode;
        button.textContent = entity_ui.t(textCode);
        button.onclick = callback;
        const actions = context.form.querySelector('.et2-form-actions');
        if (first) actions.prepend(button);
        else actions.append(button);
        return button;
    }
    configurarEnlaceFichero(context, id, base, filename, visible) {
        const link = this.obtenerCampo(id, context);
        link.hidden = !visible;
        link.href = base + encodeURIComponent(filename || '');
    }
    crearEnlaceFichero(base, filename) {
        const link = document.createElement('a');
        link.href = base + encodeURIComponent(filename);
        link.target = '_blank';
        link.rel = 'noopener';
        link.textContent = filename;
        return link;
    }
    datosFormularioPorId(id) {
        return new FormData(document.getElementById(id));
    }
    leerDatosEnvio(context) {
        return context.policy.send.map(field => {
            const control = this.obtenerCampo(field, context);
            if (!control) throw new Error('ui_form_invalid');
            const file = control.type === 'file';
            const value = file ? control.files[0] : context.policy.readOnly.includes(field) ? context.values[field] || '' : control.value;
            return { field, file, value };
        });
    }
    iniciarGestion(entity) {
        document.getElementById('IU_manage_entity').style.display = 'block';
        const title = document.getElementById('text_title_page');
        title.className = 'text_titulo_page_' + entity.nombreentidad;
        title.textContent = entity_ui.t(title.className);
        document.getElementById('contenedor_IU_form').innerHTML = entity.manual_form_creation();
    }
    esEditable(field) { return ['INPUT', 'SELECT', 'TEXTAREA'].includes(field.tagName) && !field.disabled && !field.readOnly && !['submit', 'hidden'].includes(field.type) && !field.closest('[hidden]') && field.style.display !== 'none'; }
    actualizarSubmit(context) {
        const button = context.form.querySelector('#submit_button');
        const note = context.form.querySelector('#et2_form_note');
        if (note && !context.policy.note) {
            note.hidden = context.unavailable.size === 0;
            note.className = context.unavailable.size ? context.emptyNote || 'ui_no_options' : '';
            note.textContent = context.unavailable.size ? entity_ui.t(note.className) : '';
        }
        if (button) button.disabled = !context.ready || context.loading > 0 || context.referenceError || context.unavailable.size > 0;
    }
    prepararFormulario(entity, action, values, policy) {
        document.getElementById('contenedor_IU_form').innerHTML = entity.manual_form_creation();
        const form = document.getElementById('form_iu');
        const context = { form, action, values, policy, references: {}, loading: 0, unavailable: new Set(), referenceError: false, ready: false };
        entity.formContext = context;
        entity.formAction = action;
        const title = document.getElementById('class_contenido_titulo_form');
        title.className = `text_contenido_titulo_form_${entity.nombreentidad}_${action}`; title.textContent = entity_ui.t(title.className);
        for (const field of entity.config.fields) {
            const control = form.querySelector('#' + field);
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
            const submit = document.createElement('button'); submit.id = 'submit_button'; submit.type = 'submit'; submit.append(this.crearIcono(action)); actions.append(submit);
        }
        const cancel = document.createElement('button'); cancel.type = 'button'; cancel.className = 'ui_cancel'; cancel.textContent = entity_ui.t('ui_cancel'); cancel.onclick = () => entity_ui.closeForm(entity); actions.append(cancel);
        form.onsubmit = event => {
            event.preventDefault();
            if (!entity_ui.current(entity, context) || !policy.submit || entity.pending || !context.ready || context.loading || context.referenceError || context.unavailable.size) return;
            const result = entity[action + '_submit_' + entity.nombreentidad]();
            if (!entity.dom.validarsubmit(result)) return;
            entity_ui.validatedSubmits.set(entity, context);
            try { entity[action](); }
            finally { entity_ui.validatedSubmits.delete(entity); }
        };
        if (['ADD', 'EDIT', 'SEARCH'].includes(action) && policy.submit) entity.dom.colocarvalidaciones('form_iu', action);
        const modal = document.getElementById('Div_IU_form'); modal.style.display = 'block'; modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-labelledby', title.id);
        entity.previousFocus = document.activeElement;
        this.actualizarSubmit(context);
        return context;
    }
    finalizarFormulario(context) {
        this.prepararIdioma();
        Array.from(context.form.elements).find(field => this.esEditable(field))?.focus();
    }
    cerrarFormulario(entity) {
        document.getElementById('Div_IU_form').style.display = 'none';
        document.getElementById('contenedor_IU_form').innerHTML = entity.manual_form_creation();
        entity.previousFocus?.focus();
    }
    mostrarEstado(code) {
        let status = document.getElementById('et2_status');
        if (!status) { status = document.createElement('p'); status.id = 'et2_status'; status.setAttribute('role', 'status'); document.getElementById('IU_manage_head').append(status); }
        status.className = code; status.textContent = code ? entity_ui.t(code) : '';
    }
    crearIcono(action) {
        const img = document.createElement('img'); img.src = './iconos/' + action + '.png'; img.className = 'action_' + action; img.alt = img.title = entity_ui.t(img.className); img.width = img.height = 28; return img;
    }
    mostrarTabla(entity) {
        const host = document.getElementById('IU_manage_table'); host.replaceChildren();
        const table = document.createElement('table'); table.className = 'et2-table'; const header = table.createTHead().insertRow();
        for (const field of entity.atributos) { const cell = document.createElement('th'); cell.scope = 'col'; cell.className = entity.config.columnLabels?.[field] || field; cell.textContent = entity_ui.t(cell.className); cell.dataset.column = field; cell.hidden = !entity.columnasamostrar.includes(field); header.append(cell); }
        const actions = document.createElement('th'); actions.className = 'ui_actions'; actions.textContent = entity_ui.t('ui_actions'); header.append(actions);
        const body = table.createTBody();
        for (const row of entity.datos) {
            const tr = body.insertRow();
            for (const field of entity.atributos) {
                const cell = tr.insertCell(); cell.dataset.column = field; cell.hidden = !entity.columnasamostrar.includes(field);
                const value = entity.mostrarespecial.includes(field) ? entity.mostrarcambioatributo(field, row[field]) : row[field] || '';
                if (value instanceof Node) cell.append(value); else cell.textContent = value;
            }
            const operations = tr.insertCell();
            for (const action of ['EDIT', 'DELETE', 'SHOWCURRENT']) {
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
    actualizarColumnas(columns) {
        for (const cell of document.querySelectorAll('#IU_manage_table [data-column]')) cell.hidden = !columns.includes(cell.dataset.column);
    }

    // Presentación de pruebas. La ejecución continúa en entity_Test_Data y Data_Test.
    prepararIdioma() {
        setLang(getCookie('lang') === 'EN' ? 'EN' : 'ES');
    }
    abrirVentanaPruebas() {
        return window.open('', '_blank');
    }
    apartarFormularioPruebas() {
        const host = document.getElementById('contenedor_IU_form');
        const original = document.createDocumentFragment();
        while (host.firstChild) original.append(host.firstChild);
        return { host, original };
    }
    restaurarFormularioPruebas(saved) {
        saved.host.replaceChildren(saved.original);
    }
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

    // Arranque de la interfaz y estilos, siempre dentro de la clase DOM.
    aplicarEstilos() {
        if (document.getElementById('et2_styles')) return;
        const style = document.createElement('style');
        style.id = 'et2_styles';
        style.textContent = `[hidden]{display:none!important}body{font:16px system-ui,sans-serif;color:#202b36}#add_search_columns{display:flex;align-items:center;gap:12px;flex-wrap:wrap}#label_seleccioncolumnas{margin-left:auto}#seleccioncolumnas{min-width:190px}.et2-table{border-collapse:collapse;width:100%}.et2-table th,.et2-table td{padding:10px;border-bottom:1px solid #ccd4dd;text-align:left}.et2-table button,.et2-form-actions button{cursor:pointer;padding:7px;margin:3px}#IU_manage_table{overflow-x:auto}.contenidoForm{max-height:85vh;overflow:auto;padding:20px}.et2-field{display:grid;grid-template-columns:minmax(130px,1fr) minmax(150px,2fr) auto;gap:6px;margin:12px 0}.et2-field input,.et2-field textarea,.et2-field select{font:inherit;min-width:0;padding:6px;border:2px solid #8795a5;border-radius:3px}.ui_operation_success{background:#d7efdc;color:#1e5630;padding:10px}.ui_operation_refresh_failed{background:#fff1cd;color:#6b4d00;padding:10px}.et2-field-error{grid-column:2/-1;color:#9c1824;font-size:.9em}.et2-invalid{border-color:#b51d2b!important}.et2-valid{border-color:#277340!important}.et2-field [readonly],.et2-field :disabled{background:#edf0f3}.et2-form-actions{display:flex;gap:10px;justify-content:flex-end}#error_action_modal{z-index:1002;padding:24px;max-width:85vw}#modal_action_overlay{z-index:1001}@media(max-width:600px){.et2-field{grid-template-columns:1fr}.et2-field-error{grid-column:auto}}`;
        document.head.append(style);
    }
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
    alCargar(callback) {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

// Adaptación de respuestas y peticiones. No se convierten objetos en identificadores mediante String().
class entity_access extends ExternalAccess {
    static cache = new Map();
    static find(value, key, depth = 0) {
        if (!value || typeof value !== 'object' || depth > 8) return undefined;
        if (Object.hasOwn(value, key)) return value[key];
        const matches = Object.values(value).map(item => this.find(item, key, depth + 1)).filter(item => item !== undefined);
        return matches.length === 1 ? matches[0] : undefined;
    }
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
    static normalizeRows(config, rows) {
        if (!Array.isArray(rows)) throw new Error('ui_invalid_response');
        return rows.map(row => {
            const normalized = this.normalizeRow(config, row);
            if (config.keys.some(key => !normalized[key])) throw new Error('ui_invalid_response');
            return normalized;
        });
    }
    static async searchAll(entity, name, filters = new FormData()) {
        const result = [];
        let start = 0;
        for (let pageNumber = 0; pageNumber < 1000; pageNumber++) {
            const page = new FormData();
            for (const [key, value] of filters) {
                if (!['empieza', 'filas'].includes(key)) page.append(key, value);
            }
            page.set('empieza', String(start));
            page.set('filas', '250');
            const answer = await entity.access_functions.peticionBackGeneral(page, name, 'SEARCH');
            if (answer.ok !== true && !['RECORDSET_DATOS', 'RECORDSET_VACIO'].includes(answer.code)) return answer;
            const rows = answer.resource || [];
            if (!Array.isArray(rows)) throw new Error('ui_invalid_response');
            // También se admiten respuestas completas sin metadatos de paginación.
            if (answer.total === undefined && start === 0) return answer;
            const total = Number(answer.total), position = Number(answer.empieza);
            if (!Number.isSafeInteger(total) || total < 0 || !Number.isSafeInteger(position) || position !== start) throw new Error('ui_incomplete_results');
            result.push(...rows);
            start += rows.length;
            if (start >= total) return { ...answer, resource: result, empieza: 0, filas: result.length };
            if (!rows.length) throw new Error('ui_incomplete_results');
        }
        throw new Error('ui_incomplete_results');
    }
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

// Operaciones compartidas. Las políticas, HTML y campos a validar se declaran en cada entidad.
// Coordinación compartida: no crea elementos ni modifica HTML/CSS.
// Se declara en este archivo ya cargado por el index del profesor, junto con el adaptador de acceso.
const entity_ui = {
    active: null,
    interfaceDom: new entity_dom_fields(),
    validatedSubmits: new WeakMap(),
    dictionary() { return getCookie('lang') === 'EN' ? textos_EN : textos_ES; },
    t(code) { return this.dictionary()[code] || code; },
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
        this.renderTable(entity, []); entity.ready = entity.SEARCH();
    },
    editable(field) {
        return this.interfaceDom.esEditable(field);
    },
    current(entity, context) {
        return !!context && this.active === entity && entity.formContext === context && entity.dom.esFormularioActual(context);
    },
    updateSubmit(context) {
        this.interfaceDom.actualizarSubmit(context);
    },
    openForm(entity, action, values, policy) {
        if (entity.pending || this.active !== entity) return null;
        entity_access.cache.clear();
        return entity.dom.prepararFormulario(entity, action, values, policy);
    },
    finishForm(entity, context) {
        if (!this.current(entity, context)) return false;
        context.ready = true;
        this.updateSubmit(context);
        entity.dom.finalizarFormulario(context);
        return true;
    },
    closeForm(entity) {
        if (this.active !== entity) return;
        entity.dom.cerrarFormulario(entity);
        entity.formContext = null;
        entity.formAction = null;
    },
    dateForForm(value) { const match = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})/); return match ? `${match[3]}/${match[2]}/${match[1]}` : String(value || ''); },
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
    validateKeys(entity) {
        const context = entity.formContext;
        if (!this.current(entity, context) || context.action !== 'DELETE') return { form: 'ui_form_invalid' };
        const results = {};
        for (const key of entity.config.keys) results[key] = context.values[key] ? true : 'ui_form_invalid';
        if (Object.values(results).every(value => value === true)) return true;
        entity.dom.abrirModalError('ui_form_invalid');
        return results;
    },
    payload(entity, context) {
        if (!this.current(entity, context)) throw new Error('ui_form_invalid');
        const data = new FormData();
        for (const { field, file, value } of entity.dom.leerDatosEnvio(context)) {
            if (file) { if (value) data.append(field, value); }
            else {
                if (context.action === 'EDIT' && (entity.config.optionalOnEdit || []).includes(field) && value === '') continue;
                data.append(field, value);
            }
        }
        return data;
    },
    async run(entity, action) {
        if (entity.pending || this.active !== entity) return false;
        if ((entity.config.readOnlyActions || []).includes(action)) { entity.dom.abrirModalError('ui_association_edit'); return false; }
        const context = entity.formContext;
        const fromForm = context?.action === action;
        const accepted = this.validatedSubmits.get(entity);
        this.validatedSubmits.delete(entity);
        if (action !== 'SEARCH' && !fromForm) { entity.dom.abrirModalError('ui_form_invalid'); return false; }
        if (fromForm && (!context.ready || context.loading || context.referenceError || context.unavailable.size)) return false;
        if (fromForm && accepted !== context && entity[action + '_submit_' + entity.nombreentidad]() !== true) return false;
        entity.pending = true;
        const request = entity.request = Symbol(action);
        const current = () => this.active === entity && entity.request === request && (!fromForm || entity.formContext === context);
        this.status('ui_loading');
        entity.dom.bloquearEnvio(context);
        try {
            const data = fromForm ? this.payload(entity, context) : new FormData();
            if (action === 'SEARCH') {
                if (fromForm) entity.lastSearch = new FormData();
                if (fromForm) for (const [key, value] of data) entity.lastSearch.append(key, value);
                else for (const [key, value] of entity.lastSearch) data.append(key, value);
            }
            const response = action === 'SEARCH'
                ? await entity_access.searchAll(entity, entity.nombreentidad, data)
                : await entity.access_functions.peticionBackGeneral(data, entity.nombreentidad, action);
            if (!current()) return false;
            if (action === 'SEARCH' && (response.ok === true || ['RECORDSET_DATOS', 'RECORDSET_VACIO'].includes(response.code))) {
                const rows = entity_access.normalizeRows(entity.config, response.resource || []);
                const references = Object.keys(entity.config.references || {}).filter(field => (entity.config.referenceDisplay || Object.keys(entity.config.references || {})).includes(field));
                for (const field of references) {
                    const reference = entity.config.references[field];
                    try {
                        const records = await entity_access.records(entity, reference[0]);
                        if (!current()) return false;
                        for (const row of rows) {
                            const record = records.find(record => record[reference[1]] === row[field]);
                            if (record) row._labels[field] = record[reference[2]] || row[field];
                        }
                    } catch { /* Si falla el catálogo se conservan los IDs correctos y las etiquetas recibidas. */ }
                }
                if (!current()) return false;
                this.closeForm(entity); entity.crearTablaDatos(rows);
                return true;
            }
            if (action !== 'SEARCH' && response.ok === true) {
                entity_access.cache.clear();
                this.closeForm(entity); entity.pending = false;
                const refreshed = await entity.SEARCH();
                if (this.active === entity) this.status(refreshed ? 'ui_operation_success' : 'ui_operation_refresh_failed');
                return true;
            }
            entity.dom.abrirModalError(response.code || 'ui_error');
            return false;
        } catch (error) {
            if (current()) entity.dom.abrirModalError(error.message || 'ui_network');
            return false;
        } finally {
            if (entity.request === request) entity.pending = false;
            if (this.active === entity && entity.request === request) {
                this.status('');
                if (context && this.current(entity, context)) this.updateSubmit(context);
            }
        }
    },
    status(code) {
        this.interfaceDom.mostrarEstado(code);
    },
    icon(action) {
        return this.interfaceDom.crearIcono(action);
    },
    renderTable(entity, rows) {
        entity.datos = entity_access.normalizeRows(entity.config, rows);
        entity.referenceLabels = {};
        for (const row of entity.datos) for (const [field, label] of Object.entries(row._labels)) {
            entity.referenceLabels[field] ||= new Map();
            entity.referenceLabels[field].set(row[field], label);
        }
        entity.dom.mostrarTabla(entity);
    },
    setColumns(entity, columns) {
        entity.columnasamostrar = columns;
        entity.dom.actualizarColumnas(columns);
    },
    toggleColumn(entity, field) { entity.columnasamostrar = entity.columnasamostrar.includes(field) ? entity.columnasamostrar.filter(column => column !== field) : [...entity.columnasamostrar, field]; this.renderTable(entity, entity.datos); }
};

entity_ui.interfaceDom.alCargar(() => entity_ui.interfaceDom.inicializarInterfaz());