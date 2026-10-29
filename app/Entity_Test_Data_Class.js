// Extensión ET2. Core/Data_Test_Class.js y los siete *_tests.js no se modifican.
class entity_Test_Data extends Data_Test {
    constructor(entidad) { super(entidad); }
    data_test_class() {
        // El núcleo actual consulta window.traduccion durante la ejecución de cada prueba.
        setLang(getCookie('lang') === 'EN' ? 'EN' : 'ES');
        const popup = window.open('', '_blank'), host = document.getElementById('contenedor_IU_form'), original = document.createDocumentFragment();
        while (host.firstChild) original.append(host.firstChild);
        this.dom = new entity_dom_fields();
        try {
            this.resultados = super.data_test_data();
            for (const result of this.resultados) {
                if (result.resultadoprueba === true) result.traduccionError = entity_ui.t('ui_test_valid_value');
            }
        }
        finally { host.replaceChildren(original); }
        if (!popup) { window.entidad?.dom.abrirModalError('ui_test_popup'); return false; }
        popup.document.open();
        popup.document.write('<!doctype html><html><head><meta charset="utf-8"><title>ET2</title><style>body{font:15px system-ui;margin:24px}table{border-collapse:collapse;width:100%}td,th{border:1px solid #aaa;padding:8px;text-align:left;vertical-align:top}.ok{background:#d7efdc}.ko{background:#ffd8dc}pre{white-space:pre-wrap;overflow-wrap:anywhere;margin:0}</style></head><body></body></html>');
        popup.document.close();
        const doc = popup.document; doc.documentElement.lang = getCookie('lang') === 'EN' ? 'en' : 'es';
        const title = doc.createElement('h1'); title.textContent = entity_ui.t('ui_tests') + ' · ' + entity_ui.t('text_menu_' + this.entidad.nombreentidad); doc.body.append(title);
        const correct = this.resultados.filter(r => r.pruebastatus === 'CORRECTO').length;
        const summary = doc.createElement('p'); summary.setAttribute('role', 'status'); summary.textContent = `${entity_ui.t('ui_summary')}: ${correct}/${this.resultados.length}`; doc.body.append(summary);
        const table = doc.createElement('table'), fields = { entidad: 'ui_test_entity', campo: 'ui_test_field', NumDef: 'ui_test_definition', NumPrueba: 'ui_test_number', accion: 'ui_test_action', valorprueba: 'ui_test_value', respuestaesperada: 'ui_test_expected', resultadoprueba: 'ui_test_actual', traduccionError: 'ui_test_translation', pruebastatus: 'ui_test_status' };
        const header = table.createTHead().insertRow();
        for (const code of Object.values(fields)) { const th = doc.createElement('th'); th.scope = 'col'; th.textContent = entity_ui.t(code); header.append(th); }
        const body = table.createTBody();
        this.resultados.forEach((result, index) => {
            const row = body.insertRow();
            for (const key of Object.keys(fields)) {
                const cell = row.insertCell();
                if (key === 'valorprueba') { const pre = doc.createElement('pre'); pre.textContent = JSON.stringify(this.array_pruebas[index][5], null, 2); cell.append(pre); }
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
}
