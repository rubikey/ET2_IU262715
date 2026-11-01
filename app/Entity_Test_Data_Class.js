// Ejecuta las pruebas con Data_Test y delega toda su presentación a entity_dom_fields.
class entity_Test_Data extends Data_Test {
    constructor(entidad) { super(entidad); }
    data_test_class() {
        this.dom = new entity_dom_fields();
        this.dom.prepararIdioma();
        // Abrir primero mantiene la ventana asociada al clic del usuario.
        const popup = this.dom.abrirVentanaPruebas();
        const saved = this.dom.apartarFormularioPruebas();
        try {
            this.resultados = super.data_test_data();
            for (const result of this.resultados) {
                if (result.resultadoprueba === true) result.traduccionError = entity_ui.t('ui_test_valid_value');
            }
        } finally {
            this.dom.restaurarFormularioPruebas(saved);
        }
        if (!popup) { this.dom.abrirModalError('ui_test_popup'); return false; }
        return this.dom.mostrarResultadosPruebas(popup, this.resultados, this.array_pruebas, this.entidad.nombreentidad);
    }
}
