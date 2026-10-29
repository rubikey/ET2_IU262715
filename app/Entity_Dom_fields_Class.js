const ET2_ENTITIES = {
    "persona": {
        "keys": [
            "dni"
        ],
        "columns": [
            "dni",
            "nombre_persona",
            "apellidos_persona",
            "foto_persona"
        ],
        "special": [
            "foto_persona",
            "fechaNacimiento_persona"
        ],
        "fields": [
            "dni",
            "nombre_persona",
            "apellidos_persona",
            "fechaNacimiento_persona",
            "direccion_persona",
            "telefono_persona",
            "email_persona",
            "foto_persona",
            "nuevo_foto_persona"
        ],
        "components": {
            "dni": "input",
            "nombre_persona": "input",
            "apellidos_persona": "input",
            "fechaNacimiento_persona": "input",
            "direccion_persona": "textarea",
            "telefono_persona": "input",
            "email_persona": "input",
            "foto_persona": "input",
            "nuevo_foto_persona": "file"
        }
    },
    "usuario": {
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
    },
    "rol": {
        "keys": [
            "id_rol"
        ],
        "auto": [
            "id_rol"
        ],
        "columns": [
            "id_rol",
            "rol_name",
            "rol_description"
        ],
        "fields": [
            "id_rol",
            "rol_name",
            "rol_description"
        ],
        "components": {
            "id_rol": "input",
            "rol_name": "input",
            "rol_description": "textarea"
        }
    },
    "accion": {
        "keys": [
            "id_accion"
        ],
        "auto": [
            "id_accion"
        ],
        "columns": [
            "id_accion",
            "nombre_accion",
            "descrip_accion"
        ],
        "fields": [
            "id_accion",
            "nombre_accion",
            "descrip_accion"
        ],
        "components": {
            "id_accion": "input",
            "nombre_accion": "input",
            "descrip_accion": "textarea"
        }
    },
    "funcionalidad": {
        "keys": [
            "id_funcionalidad"
        ],
        "auto": [
            "id_funcionalidad"
        ],
        "columns": [
            "id_funcionalidad",
            "nombre_funcionalidad",
            "descrip_funcionalidad"
        ],
        "fields": [
            "id_funcionalidad",
            "nombre_funcionalidad",
            "descrip_funcionalidad"
        ],
        "components": {
            "id_funcionalidad": "input",
            "nombre_funcionalidad": "input",
            "descrip_funcionalidad": "textarea"
        }
    },
    "funcionalidad_accion": {
        "keys": [
            "id_funcionalidad",
            "id_accion"
        ],
        "columns": [
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
            ]
        },
        "fields": [
            "id_funcionalidad",
            "id_accion"
        ],
        "components": {
            "id_funcionalidad": "select",
            "id_accion": "select"
        }
    },
    "rolaccionfuncionalidad": {
        "keys": [
            "id_funcionalidad",
            "id_accion",
            "id_rol"
        ],
        "columns": [
            "id_funcionalidad",
            "id_accion",
            "id_rol"
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
            "id_funcionalidad",
            "id_accion",
            "id_rol"
        ],
        "components": {
            "id_funcionalidad": "select",
            "id_accion": "select",
            "id_rol": "select"
        }
    }
};

// Extensiones de la entrega. Los ficheros de Core y Base permanecen intactos.
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
        } else if (['input', 'textarea'].includes(tag)) element.value = valores[nombrecampo] ?? '';
        parent.append(element);
        return element;
    }
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
        detail.textContent = known ? '' : String(codigo);
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
        for (const field of document.getElementById(idform).elements) {
            if (!entity_ui.editable(field)) continue;
            const events = field.tagName === 'TEXTAREA'
                ? ['blur', 'input', 'change']
                : [field.tagName === 'INPUT' && field.type !== 'file' ? 'blur' : 'change'];
            const validate = () => {
                const current = window.entidad, method = current?.[accion + '_' + field.id + '_validation'];
                if (method) method.call(current);
            };
            for (const event of events) field.addEventListener(event, validate);
        }
    }
    validarsubmit(value) { return value === true; }
}

// Adaptador local: los errores de conexión se comunican con el mismo modal del formulario.
class entity_access extends ExternalAccess {
    async peticionBackGeneral(formulario, controlador, action, datosextra = null) {
        const data = formulario instanceof FormData ? formulario : formulario ? new FormData(document.getElementById(formulario)) : new FormData();
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

const entity_ui = {
    references: new Map(),
    validatedSubmits: new WeakMap(),
    dictionary() { return getCookie('lang') === 'EN' ? textos_EN : textos_ES; },
    t(code) { return this.dictionary()[code] || code; },
    initialize(entity, name, mode) {
        entity.nombreentidad = name; entity.config = ET2_ENTITIES[name];
        entity.columnasamostrar = [...entity.config.columns]; entity.mostrarespecial = [...(entity.config.special || [])];
        entity.dom = new entity_dom_fields(); entity.validations = new entity_validations(); entity.access_functions = new entity_access();
        entity.datos = []; entity.atributos = entity.config.fields.filter(f => !f.startsWith('nuevo_')); entity.esTest = mode === 'test';
        if (entity.esTest) return;
        document.getElementById('IU_manage_entity').style.display = 'block';
        const title = document.getElementById('text_title_page'); title.className = 'text_titulo_page_' + name; title.textContent = this.t(title.className);
        document.getElementById('contenedor_IU_form').innerHTML = entity.manual_form_creation();
        this.renderTable(entity, []); entity.ready = entity.SEARCH();
    },
    editable(field) { return ['INPUT', 'SELECT', 'TEXTAREA'].includes(field.tagName) && !field.disabled && !field.readOnly && !['submit', 'hidden'].includes(field.type) && !field.closest('[hidden]') && field.style.display !== 'none'; },
    formMarkup(entity) {
        const fields = entity.config.fields.map(field => {
            const component = entity.config.components[field], common = `id="${field}" name="${field}" aria-describedby="span_error_${field}"`;
            let control;
            if (component === 'textarea') control = `<textarea ${common} rows="4"></textarea>`;
            else if (component === 'select') control = `<select ${common}><option value="" class="ui_select">${this.t('ui_select')}</option></select>`;
            else control = `<input ${common} type="${component === 'file' ? 'file' : field === 'contrasena' ? 'password' : 'text'}"${component === 'file' ? ' accept=".jpg,.jpeg,image/jpeg"' : ''}${field === 'telefono_persona' ? ' inputmode="tel"' : ''}>`;
            const link = field === 'foto_persona' ? '<a id="link_foto_persona" target="_blank" rel="noopener"><img src="./iconos/FILE.png" class="action_FILE" alt=""></a>' : '';
            return `<div class="et2-field"><label id="label_${field}" class="label_${field}" for="${field}">${this.t('label_' + field)}</label>${control}${link}<span id="span_error_${field}" class="et2-field-error" aria-live="polite" style="display:none"><a id="error_${field}"></a></span></div>`;
        }).join('');
        return `<form id="form_iu" method="POST" enctype="multipart/form-data" novalidate>${fields}<div class="et2-form-actions"></div></form>`;
    },
    async prepare(entity, action, row = {}) {
        if (entity.pending) return;
        entity.formAction = action; entity.originalRow = { ...row };
        document.getElementById('contenedor_IU_form').innerHTML = entity.manual_form_creation();
        const form = document.getElementById('form_iu'), title = document.getElementById('class_contenido_titulo_form');
        title.className = `text_contenido_titulo_form_${entity.nombreentidad}_${action}`; title.textContent = this.t(title.className);
        const readonly = ['DELETE', 'SHOWCURRENT'].includes(action);
        for (const field of entity.config.fields) {
            const control = document.getElementById(field);
            if (control.type !== 'file') {
                let value = row[field] ?? '';
                if (field === 'fechaNacimiento_persona') value = this.dateForForm(value);
                if (control.tagName === 'SELECT' && value !== '') control.add(new Option(String(value), String(value), true, true));
                control.value = value;
            }
            const hide = action === 'ADD' && ((entity.config.auto || []).includes(field) || field === 'foto_persona') || field === 'nuevo_foto_persona' && !['ADD', 'EDIT'].includes(action);
            if (hide) entity.dom.hide_element_form(field);
            if (readonly || action === 'EDIT' && (entity.config.keys.includes(field) || field === 'foto_persona')) {
                if (control.tagName === 'SELECT' || control.type === 'file') control.disabled = true;
                else control.readOnly = true;
            }
        }
        const link = document.getElementById('link_foto_persona');
        if (link) {
            link.hidden = !['EDIT', 'DELETE', 'SHOWCURRENT'].includes(action) || !row.foto_persona;
            link.href = 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/' + encodeURIComponent(row.foto_persona || '');
        }
        const actions = form.querySelector('.et2-form-actions');
        if (action !== 'SHOWCURRENT') { const submit = document.createElement('button'); submit.id = 'submit_button'; submit.type = 'submit'; submit.append(this.icon(action)); actions.append(submit); }
        const cancel = document.createElement('button'); cancel.type = 'button'; cancel.className = 'ui_cancel'; cancel.textContent = this.t('ui_cancel'); cancel.onclick = () => this.closeForm(entity); actions.append(cancel);
        form.onsubmit = event => {
            event.preventDefault();
            if (action === 'SHOWCURRENT' || entity.pending) return;
            const result = entity[action + '_submit_' + entity.nombreentidad]();
            if (!entity.dom.validarsubmit(result)) return;
            // run consume esta comprobación para no validar dos veces el mismo envío.
            this.validatedSubmits.set(entity, { action, form });
            try { entity[action](); }
            finally { this.validatedSubmits.delete(entity); }
        };
        if (['ADD', 'EDIT', 'SEARCH'].includes(action)) entity.dom.colocarvalidaciones('form_iu', action);
        const modal = document.getElementById('Div_IU_form'); modal.style.display = 'block'; modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-labelledby', title.id);
        entity.previousFocus = document.activeElement;
        form.querySelector('input:not([readonly]), textarea:not([readonly]), select:not([disabled]), button')?.focus();
        setLang(getCookie('lang') === 'EN' ? 'EN' : 'ES');
        await Promise.all(Object.entries(entity.config.references || {}).map(async ([field, reference]) => {
            const control = document.getElementById(field), selected = String(row[field] ?? '');
            try {
                const options = await this.referenceOptions(entity, reference);
                if (document.getElementById(field) !== control) return;
                control.replaceChildren(new Option(this.t(action === 'SEARCH' ? 'ui_all' : 'ui_select'), ''));
                control.options[0].className = action === 'SEARCH' ? 'ui_all' : 'ui_select';
                for (const item of options) control.add(new Option(item.label, item.value));
                if (selected && !options.some(item => item.value === selected)) control.add(new Option(selected, selected));
                control.value = selected;
                if (!options.length) control.title = this.t('ui_no_options');
            } catch (error) { if (document.getElementById(field) === control) entity.dom.abrirModalError(error.message); }
        }));
    },
    closeForm(entity) {
        document.getElementById('Div_IU_form').style.display = 'none'; document.getElementById('contenedor_IU_form').innerHTML = entity.manual_form_creation(); entity.formAction = null; entity.previousFocus?.focus();
    },
    dateForForm(value) { const m = String(value).match(/^(\d{4})-(\d{2})-(\d{2})/); return m ? `${m[3]}/${m[2]}/${m[1]}` : String(value); },
    validateSubmit(entity, action) {
        if (action === 'SHOWCURRENT') return true;
        const results = {};
        for (const field of entity.config.fields) {
            const control = document.getElementById(field);
            if (!control) continue;
            if (action === 'DELETE') { if (entity.config.keys.includes(field)) results[field] = control.value !== '' ? true : field + '_min_size_ko'; continue; }
            if (action === 'ADD' && ((entity.config.auto || []).includes(field) || field === 'foto_persona')) continue;
            if (action === 'SEARCH' && field === 'nuevo_foto_persona') continue;
            if (!this.editable(control)) continue;
            results[field] = entity[action + '_' + field + '_validation']();
        }
        if (Object.values(results).every(v => v === true)) return true;
        document.querySelector('#form_iu [aria-invalid="true"]')?.focus(); return results;
    },
    payload(entity, action) {
        const data = new FormData();
        for (const field of entity.config.fields) {
            if (action === 'DELETE' && !entity.config.keys.includes(field)) continue;
            if (action === 'ADD' && ((entity.config.auto || []).includes(field) || field === 'foto_persona')) continue;
            if (action === 'SEARCH' && field === 'nuevo_foto_persona') continue;
            const control = document.getElementById(field); if (!control) continue;
            if (control.type === 'file') { if (control.files[0]) data.append(field, control.files[0]); }
            else data.append(field, control.value);
        }
        return data;
    },
    async run(entity, action) {
        const accepted = this.validatedSubmits.get(entity);
        this.validatedSubmits.delete(entity);
        if (entity.pending) return false;
        const alreadyValidated = accepted?.action === action && accepted.form === document.getElementById('form_iu');
        if (entity.formAction === action && !alreadyValidated
            && entity[action + '_submit_' + entity.nombreentidad]() !== true) return false;
        entity.pending = true;
        this.status('ui_loading');
        const submit = document.getElementById('submit_button'); if (submit) submit.disabled = true;
        const data = this.payload(entity, action);
        try {
            const response = await entity.access_functions.peticionBackGeneral(data, entity.nombreentidad, action);
            if (window.entidad && window.entidad !== entity) return false;
            if (action === 'SEARCH' && (response.ok || ['RECORDSET_DATOS', 'RECORDSET_VACIO'].includes(response.code))) {
                const rows = response.resource || []; if (!Array.isArray(rows)) throw new Error('ui_invalid_response');
                entity.dom.hide_element('Div_IU_form'); document.getElementById('contenedor_IU_form').innerHTML = entity.manual_form_creation(); entity.formAction = null; entity.crearTablaDatos(rows);
            } else if (response.ok) {
                this.references.delete(entity.nombreentidad); this.closeForm(entity); entity.pending = false; return await entity.SEARCH();
            } else entity.dom.abrirModalError(response.code || 'ui_error');
            return response.ok === true;
        } catch (error) {
            if (!window.entidad || window.entidad === entity) entity.dom.abrirModalError(error.message || 'ui_network');
            return false;
        } finally {
            entity.pending = false;
            if (!window.entidad || window.entidad === entity) this.status('');
            if (submit?.isConnected) submit.disabled = false;
        }
    },
    status(code) {
        let status = document.getElementById('et2_status');
        if (!status) { status = document.createElement('p'); status.id = 'et2_status'; status.setAttribute('role', 'status'); document.getElementById('IU_manage_head').append(status); }
        status.className = code; status.textContent = code ? this.t(code) : '';
    },
    async referenceOptions(entity, [name, key, label]) {
        if (!this.references.has(name)) {
            const promise = entity.access_functions.peticionBackGeneral('', name, 'SEARCH').then(response => {
                if (!response.ok && !['RECORDSET_DATOS', 'RECORDSET_VACIO'].includes(response.code)) throw new Error(response.code || 'ui_error');
                const rows = response.resource || [];
                if (!Array.isArray(rows)) throw new Error('ui_invalid_response');
                return rows.map(row => ({ value: String(row[key]), label: String(row[label] ?? row[key]) }));
            }).catch(error => { this.references.delete(name); throw error; });
            this.references.set(name, promise);
        }
        return this.references.get(name);
    },
    icon(action) {
        const img = document.createElement('img'); img.src = './iconos/' + action + '.png'; img.className = 'action_' + action; img.alt = img.title = this.t(img.className); img.width = img.height = 28; return img;
    },
    displayValue(entity, field, value) {
        if (field === 'contrasena') return '••••••••';
        if (field === 'fechaNacimiento_persona') return this.dateForForm(value);
        if (field === 'foto_persona' && value) { const link = document.createElement('a'); link.href = 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/' + encodeURIComponent(value); link.target = '_blank'; link.rel = 'noopener'; link.textContent = value; return link; }
        return value ?? '';
    },
    renderTable(entity, rows) {
        entity.datos = rows.map(row => ({ ...row }));
        const host = document.getElementById('IU_manage_table'); host.replaceChildren();
        const table = document.createElement('table'); table.className = 'et2-table'; const header = table.createTHead().insertRow();
        for (const field of entity.atributos) { const cell = document.createElement('th'); cell.scope = 'col'; cell.className = field; cell.textContent = this.t(field); cell.dataset.column = field; cell.hidden = !entity.columnasamostrar.includes(field); header.append(cell); }
        const actions = document.createElement('th'); actions.className = 'ui_actions'; actions.textContent = this.t('ui_actions'); header.append(actions);
        const body = table.createTBody();
        for (const row of entity.datos) {
            const tr = body.insertRow();
            for (const field of entity.atributos) {
                const cell = tr.insertCell();
                cell.dataset.column = field;
                cell.hidden = !entity.columnasamostrar.includes(field);
                // La contraseña se oculta siempre, aunque no se configure un formato especial.
                const value = field === 'contrasena' ? '••••••••'
                    : entity.mostrarespecial.includes(field)
                        ? entity.mostrarcambioatributo(field, row[field])
                        : row[field] ?? '';
                if (value instanceof Node) cell.append(value);
                else cell.textContent = value;
            }
            const operations = tr.insertCell();
            for (const action of ['EDIT', 'DELETE', 'SHOWCURRENT']) { const button = document.createElement('button'); button.type = 'button'; button.append(this.icon(action)); button.onclick = () => entity['createForm_' + action]({ ...row }); operations.append(button); }
        }
        host.append(table);
        if (!rows.length) { const empty = document.createElement('p'); empty.className = 'ui_empty'; empty.textContent = this.t('ui_empty'); host.append(empty); }
        const select = document.getElementById('seleccioncolumnas'); select.replaceChildren();
        for (const field of entity.atributos) { const option = new Option(this.t(field), field, false, entity.columnasamostrar.includes(field)); option.className = field; select.add(option); }
        select.onchange = () => { entity.columnasamostrar = Array.from(select.selectedOptions, o => o.value); for (const cell of host.querySelectorAll('[data-column]')) cell.hidden = !entity.columnasamostrar.includes(cell.dataset.column); };
        setLang(getCookie('lang') === 'EN' ? 'EN' : 'ES');
    },
    toggleColumn(entity, field) { entity.columnasamostrar = entity.columnasamostrar.includes(field) ? entity.columnasamostrar.filter(f => f !== field) : [...entity.columnasamostrar, field]; this.renderTable(entity, entity.datos); }
};

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `[hidden]{display:none!important}body{font:16px system-ui,sans-serif;color:#202b36}#add_search_columns{display:flex;align-items:center;gap:12px;flex-wrap:wrap}#label_seleccioncolumnas{margin-left:auto}#seleccioncolumnas{min-width:190px}.et2-table{border-collapse:collapse;width:100%}.et2-table th,.et2-table td{padding:10px;border-bottom:1px solid #ccd4dd;text-align:left}.et2-table button,.et2-form-actions button{cursor:pointer;padding:7px;margin:3px}#IU_manage_table{overflow-x:auto}.contenidoForm{max-height:85vh;overflow:auto;padding:20px}.et2-field{display:grid;grid-template-columns:minmax(130px,1fr) minmax(150px,2fr) auto;gap:6px;margin:12px 0}.et2-field input,.et2-field textarea,.et2-field select{font:inherit;min-width:0;padding:6px;border:2px solid #8795a5;border-radius:3px}.et2-field-error{grid-column:2/-1;color:#9c1824;font-size:.9em}.et2-invalid{border-color:#b51d2b!important}.et2-valid{border-color:#277340!important}.et2-field [readonly],.et2-field :disabled{background:#edf0f3}.et2-form-actions{display:flex;gap:10px;justify-content:flex-end}#error_action_modal{z-index:1002;padding:24px;max-width:85vw}#modal_action_overlay{z-index:1001}@media(max-width:600px){.et2-field{grid-template-columns:1fr}.et2-field-error{grid-column:auto}}`;
    document.head.append(style);
    const testIcon = document.querySelector('img[src$="/TEST.png"]'); if (testIcon) testIcon.id = 'botonTEST';
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
});
