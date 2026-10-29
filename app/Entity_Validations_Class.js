// Solo se redefinen métodos ya existentes en Validations.
class entity_validations extends Validations {
    min_size(id, minsize) {
        const element = document.getElementById(id);
        if (['TEXTAREA', 'SELECT'].includes(element.tagName) || ['password', 'tel'].includes(element.type)) return element.value.length >= minsize;
        return super.min_size(id, minsize);
    }
    max_size(id, maxsize) {
        const element = document.getElementById(id);
        if (['TEXTAREA', 'SELECT'].includes(element.tagName) || ['password', 'tel'].includes(element.type)) return element.value.length <= maxsize;
        return super.max_size(id, maxsize);
    }
}
