// solo se redefinen métodos ya existentes en Validations
/**
 * amplía las validaciones existentes para textarea, select, password y tel
 * @extends {Validations}
 */
class entity_validations extends Validations {
    /**
     * comprueba la longitud mínima incluyendo los componentes adicionales de la aplicación
     * @param {string} id - id del campo o elemento sobre el que se actúa
     * @param {number} minsize - longitud mínima permitida para el valor del componente
     * @returns {boolean|undefined} resultado de la comparación o undefined si el tipo heredado no está soportado
     */
    min_size(id, minsize) {
        const element = document.getElementById(id);
        if (['TEXTAREA', 'SELECT'].includes(element.tagName) || ['password', 'tel'].includes(element.type)) return element.value.length >= minsize;
        return super.min_size(id, minsize);
    }
    /**
     * comprueba la longitud máxima incluyendo los componentes adicionales de la aplicación
     * @param {string} id - id del campo o elemento sobre el que se actúa
     * @param {number} maxsize - longitud máxima permitida para el valor del componente
     * @returns {boolean|undefined} resultado de la comparación o undefined si el tipo heredado no está soportado
     */
    max_size(id, maxsize) {
        const element = document.getElementById(id);
        if (['TEXTAREA', 'SELECT'].includes(element.tagName) || ['password', 'tel'].includes(element.type)) return element.value.length <= maxsize;
        return super.max_size(id, maxsize);
    }
}
