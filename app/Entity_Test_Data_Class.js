// ejecuta las pruebas con Data_Test y delega toda su presentación a entity_dom_fields
/**
 * ejecuta la batería de una entidad y presenta sus resultados en una ventana nueva
 * @extends {Data_Test}
 */
class entity_Test_Data extends Data_Test {
    /**
     * inicia el ejecutor heredado con la clase de entidad que debe comprobarse
     * @param {Function} entidad - clase de entidad que el ejecutor instanciará en modo test
     */
    constructor(entidad) { super(entidad); }
    /**
     * ejecuta las pruebas, restaura el formulario y presenta los resultados en otra ventana
     * @returns {boolean} true si los resultados se muestran o false si se bloquea la ventana
     */
    data_test_class() {
        this.dom = new entity_dom_fields();
        this.dom.prepararIdioma();
        // abrir primero mantiene la ventana asociada al clic del usuario
        const popup = this.dom.abrirVentanaPruebas();
        const saved = this.dom.apartarFormularioPruebas();
        try {
            this.resultados = super.data_test_data();
            for (const result of this.resultados) {
                if (result.resultadoprueba === true) result.traduccionError = entity_ui.t('ui_test_valid_value');
                else if (result.accion === 'SEARCH') {
                    const searchCode = 'SEARCH_' + result.resultadoprueba;
                    if (Object.hasOwn(entity_ui.dictionary(), searchCode)) result.traduccionError = entity_ui.t(searchCode);
                }
            }
        } finally {
            this.dom.restaurarFormularioPruebas(saved);
        }
        if (!popup) { this.dom.abrirModalError('ui_test_popup'); return false; }
        return this.dom.mostrarResultadosPruebas(popup, this.resultados, this.array_pruebas, this.entidad.nombreentidad);
    }
}
