# Cuestionario de estudio y defensa — ET2 IU262715

Revisión: 06/11/2026 · **320 preguntas** basadas en el código actual

Revisado con la guía actual: DNI con datalist, búsqueda y escritura separadas, matriz principal y filtros en modal. Los diagnósticos hipotéticos sirven para estudiar; no afirman que todos esos fallos existan. La comprobación final y sus límites se describen en la guía de arquitectura.

Este banco sirve para aprender y ensayar. No es un examen oficial ni una lista de fallos actuales. Las preguntas de diagnóstico describen situaciones hipotéticas; las de métodos se refieren a los nombres reales de la implementación. No cambia clases, definiciones ni pruebas de la entrega.

Usa la [guía de arquitectura](GUIA_ARQUITECTURA.md) como referencia y consulta el [solucionario separado](SOLUCIONES_DEFENSA_ET2.md) después de responder. Sus identificadores P001–P320 coinciden. Puedes responder oralmente, en un cuaderno o en una copia de este documento.

Edición sincronizada con la entrega preparada el 06/11/2026: conserva los 320 identificadores e incorpora el cambio de idioma de matriz, el rechazo de respuestas SEARCH incompletas y la verificación del RAR. Consulta el [estado y alcance de la revisión](GUIA_ARQUITECTURA.md#114-qué-se-comprobó-y-cómo-explicarlo).

## Cómo utilizarlo

- **Primera vuelta:** haz el circuito esencial de abajo, sin consultar soluciones; marca lo que no sabes localizar
- **Aprendizaje:** trabaja bloques de 15–25 preguntas y repasa en el código los errores; no hace falta resolver las 320 de una vez
- **Métodos:** para cada ficha explica entrada, responsabilidad, resultado/efecto y llamada o situación de uso
- **Defensa:** contesta con ejemplos de administrador y justifica el criterio; reconoce lo que depende del BACK o sigue pendiente
- **Práctica:** utiliza inspección o peticiones simuladas; las escrituras reales, si se necesitan, deben limitarse a registros temporales propios

No memorices la letra de elección múltiple. Una elección sin explicación no demuestra comprensión. En verdadero/falso, justifica y corrige las falsas. En código, predice qué ocurre antes de leer la respuesta.

## Circuito esencial de 20 preguntas

P001, P009, P010, P011, P012, P013, P015, P019, P022, P029, P031, P037, P038, P111, P116, P127, P131, P134, P140 y P301

Estas veinte recorren reglas, responsabilidades, envío, relaciones, pruebas y una demostración. Después pasa al bloque D completo y a las fichas de los métodos que aún no puedas explicar.

## Autoevaluación orientativa

Puntúa cada respuesta con **0** si es incorrecta o mezcla responsabilidades, **1** si reconoce la idea pero requiere ayuda y **2** si la explica y localiza con un ejemplo. El máximo de las 320 es **640**, pero la suma no es una nota oficial: atiende antes a los ceros de envío, errores, claves y matrices que a un total alto obtenido memorizando auxiliares.

Anota por sesión: fecha, IDs hechos, conceptos a revisar y dónde los has encontrado en el código. Repite las preguntas con 0 o 1 al día siguiente y vuelve a hacer un recorrido completo sin leer.

## Bloques

| Bloque | Tema | Preguntas | IDs |
| --- | --- | ---: | --- |
| A | Conceptos, archivos y arquitectura | 40 | P001–P040 |
| B | Verdadero/falso con justificación | 40 | P041–P080 |
| C | Lectura de JavaScript | 30 | P081–P110 |
| D | Sigue los recorridos | 30 | P111–P140 |
| E | Cien métodos: entrada, responsabilidad y resultado | 100 | P141–P240 |
| F | Treinta diagnósticos de fallos hipotéticos | 30 | P241–P270 |
| G | Treinta preguntas de defensa y criterio de interfaz | 30 | P271–P300 |
| H | Veinte ejercicios prácticos para demostrar comprensión | 20 | P301–P320 |

## A. Conceptos, archivos y arquitectura — 40 preguntas

### P001

**Elección múltiple** · ¿Dónde se decide el mínimo de nombre_persona?

- **A.** En index.html
- **B.** En el CSS
- **C.** En el diccionario de idiomas
- **D.** En la validación de campo de persona

### P002

**Elección múltiple** · ¿Qué representa new persona()?

- **A.** Una petición DELETE
- **B.** Una imagen del formulario
- **C.** Una fila creada automáticamente en la BD
- **D.** Una instancia con comportamiento y estado

### P003

**Elección múltiple** · ¿Qué guarda un registro de rol?

- **A.** La estructura de Core
- **B.** Los eventos del menú
- **C.** Los datos de un rol del BACK
- **D.** Todos los métodos JavaScript de rol

### P004

**Elección múltiple** · ¿Qué hace extends?

- **A.** Ejecuta automáticamente todos los métodos del padre
- **B.** Copia datos al servidor
- **C.** Cambia el idioma
- **D.** Establece herencia entre clases

### P005

**Elección múltiple** · ¿Para qué sirve super() en un constructor?

- **A.** Validar todas las entidades
- **B.** Enviar el formulario
- **C.** Ejecutar el constructor del padre
- **D.** Crear un registro nuevo

### P006

**Elección múltiple** · ¿Qué es this.dom?

- **A.** Un array de pruebas
- **B.** La contraseña almacenada
- **C.** Un colaborador que gestiona la interfaz
- **D.** El BACK

### P007

**Elección múltiple** · ¿Qué es entity_ui?

- **A.** El servidor de base de datos
- **B.** Una clase que representa cada fila
- **C.** El fichero de estilos original
- **D.** Un objeto compartido de coordinación

### P008

**Elección múltiple** · ¿Qué comunica con el BACK en nuestro recorrido?

- **A.** entity_access
- **B.** Textos_ES
- **C.** La clase CSS et2-field
- **D.** El icono PNG

### P009

**Elección múltiple** · ¿Qué contiene Entity_Dom_fields_Class.js además de la clase DOM?

- **A.** Un servidor Python
- **B.** entity_access y entity_ui
- **C.** Solo los tests de persona
- **D.** La base de datos completa

### P010

**Elección múltiple** · ¿Qué devuelve manual_form_creation?

- **A.** Un registro ya guardado
- **B.** El resultado de un DELETE
- **C.** Una cadena HTML
- **D.** Una lista de usuarios del servidor

### P011

**Elección múltiple** · ¿Qué hace createForm_ADD en persona?

- **A.** Prepara la interfaz para añadir
- **B.** Elimina la persona seleccionada
- **C.** Ejecuta únicamente los tests
- **D.** Guarda sin esperar al usuario

### P012

**Elección múltiple** · ¿Qué autoriza validarsubmit?

- **A.** Todo objeto de resultados
- **B.** Únicamente un resultado estrictamente true
- **C.** Cualquier valor distinto de null
- **D.** Cualquier cadena no vacía

### P013

**Elección múltiple** · ¿Dónde se declaran los campos que se envían?

- **A.** En send de la política
- **B.** En aria-live
- **C.** En el color del borde
- **D.** En el texto de la etiqueta

### P014

**Elección múltiple** · ¿Para qué sirve note?

- **A.** Para sustituir a la clave primaria
- **B.** Para confirmar que la BD guardó
- **C.** Para mostrar ayuda o indicación en el formulario
- **D.** Para calcular horas

### P015

**Elección múltiple** · ¿Qué objeto reúne la información del formulario abierto?

- **A.** El contexto
- **B.** El diccionario de nombres
- **C.** El array de letras del DNI
- **D.** El icono

### P016

**Elección múltiple** · ¿Qué evita intentar guardar antes de cargar referencias?

- **A.** El color de la bandera
- **B.** El estado de carga y disponibilidad del submit
- **C.** La extensión .js
- **D.** El nombre de la carpeta

### P017

**Elección múltiple** · ¿Cómo se introduce el DNI en ADD de persona en la versión actual?

- **A.** El sistema inventa el siguiente DNI
- **B.** Se escribe en un input con sugerencias de un datalist de usuarios existentes
- **C.** Se selecciona obligatoriamente en un select que impide escribir
- **D.** Se introduce un nombre de usuario en lugar del DNI

### P018

**Elección múltiple** · En un select con value="12" y texto "Gestores", ¿qué mide min_size?

- **A.** La cantidad de roles en la BD
- **B.** El número total de opciones
- **C.** La longitud de "12"
- **D.** Los caracteres de Gestores

### P019

**Elección múltiple** · ¿Qué contiene foto_persona?

- **A.** Un checkbox
- **B.** El nombre del fichero guardado
- **C.** El contenido binario completo de la imagen
- **D.** Siempre un File del navegador

### P020

**Elección múltiple** · ¿Qué contiene un input file seleccionado?

- **A.** La clave de traducción
- **B.** Un File accesible mediante files
- **C.** Un método de entidad
- **D.** Una contraseña

### P021

**Elección múltiple** · ¿Qué significa 2097152 en max_size_file?

- **A.** El máximo de píxeles
- **B.** El máximo de bytes del archivo
- **C.** Un mínimo del nombre
- **D.** El código de grupo

### P022

**Elección múltiple** · ¿Qué hace type="password"?

- **A.** Garantiza que nadie pueda inspeccionarlo
- **B.** Enmascara visualmente el contenido
- **C.** Hashea automáticamente el dato
- **D.** Permite omitirlo siempre en EDIT

### P023

**Elección múltiple** · ¿Dónde se muestra un error de formato de un campo?

- **A.** En el nombre del archivo
- **B.** Solo en GitHub
- **C.** Siempre en una ventana de pruebas
- **D.** Junto al campo mediante el DOM

### P024

**Elección múltiple** · ¿Qué suele mostrar abrirModalError?

- **A.** Una prueba de que se guardó
- **B.** Las horas de cada participante
- **C.** Un problema general de operación o preparación
- **D.** El número de líneas del proyecto

### P025

**Elección múltiple** · ¿Cuál es la función de normalizeRow?

- **A.** Insertar un registro
- **B.** Comprobar todos los formatos del formulario
- **C.** Traducir el nombre de usuario
- **D.** Adaptar la estructura de una fila recibida

### P026

**Elección múltiple** · ¿Por qué existe searchAll?

- **A.** Para recuperar todas las páginas de SEARCH
- **B.** Para crear campos file
- **C.** Para ejecutar todos los ADD
- **D.** Para validar todas las contraseñas

### P027

**Elección múltiple** · ¿Qué relación guarda funcionalidad_accion?

- **A.** Una persona con su fotografía
- **B.** Un rol con todos los usuarios automáticamente
- **C.** Una funcionalidad con una acción
- **D.** Una contraseña con su email

### P028

**Elección múltiple** · ¿Qué añade rolaccionfuncionalidad?

- **A.** El rol al que se asigna una pareja válida
- **B.** El nombre de cada método DOM
- **C.** Un nuevo tipo de imagen
- **D.** La contraseña del administrador

### P029

**Elección múltiple** · ¿Qué hace desmarcar una casilla asignada?

- **A.** Eliminar toda la tabla
- **B.** Cambiar el nombre de la acción
- **C.** Borrar el rol y la funcionalidad
- **D.** Solicitar DELETE de la relación

### P030

**Elección múltiple** · ¿Qué significa cambiar de rol en la matriz?

- **A.** Eliminar los permisos del rol anterior
- **B.** Enviar EDIT de todas las asociaciones
- **C.** Crear un permiso automáticamente
- **D.** Cambiar los permisos que se muestran

### P031

**Elección múltiple** · ¿Qué comprueba el TEST de datos?

- **A.** Resultados de validaciones frente a casos esperados
- **B.** Que el profesor haya aprobado la entrega
- **C.** Solo la existencia del nombre del método
- **D.** Que todos los registros sean correctos en la BD

### P032

**Elección múltiple** · ¿Qué demuestra un resultado CORRECTO en una fila de TEST?

- **A.** Que la respuesta del validador coincide con el resultado esperado de ese caso
- **B.** Que se ha creado una fila en la BD
- **C.** Que se ha verificado la accesibilidad completa
- **D.** Que se han probado todos los estados de todos los formularios

### P033

**Elección múltiple** · ¿Qué hace el modo test de entidad?

- **A.** Evita la gestión y consulta iniciales
- **B.** Acepta formatos distintos para aprobar
- **C.** Modifica el BACK con datos de ejemplo
- **D.** Oculta los errores reales del método

### P034

**Elección múltiple** · ¿Por qué guardar nodos en DocumentFragment durante TEST?

- **A.** Para subirlos al BACK
- **B.** Para restaurar valores, eventos y archivos seleccionados
- **C.** Para convertirlos en PDF
- **D.** Para borrar todos los listeners

### P035

**Elección múltiple** · ¿Qué cambia setLang?

- **A.** Los límites numéricos de validación
- **B.** El resultado correcto de cada prueba
- **C.** Textos de la interfaz según el diccionario
- **D.** Las claves primarias

### P036

**Elección múltiple** · ¿Qué hace Go Live?

- **A.** Sustituye el BACK del profesor
- **B.** Sirve los archivos de la interfaz en local
- **C.** Valida la letra del DNI
- **D.** Guarda relaciones en una BD propia

### P037

**Elección múltiple** · ¿Por qué quitar nuestro archivo DOM entero impide arrancar?

- **A.** Porque borra físicamente las tablas
- **B.** Porque todos los proyectos necesitan el mismo número de líneas
- **C.** También desaparece entity_ui, usado al inicializar entidades
- **D.** Porque todos los PNG dejan de existir

### P038

**Elección múltiple** · ¿Qué significa que ADD y EDIT compartan validación?

- **A.** Que EDIT no valida
- **B.** Que EDIT crea otro registro siempre
- **C.** Que el BACK recibe la acción ADD en ambos
- **D.** Que reutilizan las mismas restricciones

### P039

**Elección múltiple** · ¿Qué representa _labels?

- **A.** Contraseñas enmascaradas
- **B.** Un conjunto de nuevos IDs
- **C.** Todos los campos obligatorios del envío
- **D.** Etiquetas internas de presentación de referencias

### P040

**Elección múltiple** · ¿Qué es lo más importante para justificar una decisión de interfaz?

- **A.** Relacionarla con la tarea y los errores del administrador
- **B.** Que copie todos los ejemplos aunque contradigan el enunciado
- **C.** Que use el máximo de clases posible
- **D.** Que reduzca siempre el número de líneas

## B. Verdadero/falso con justificación — 40 preguntas

### P041

**Verdadero/falso razonado** · Si un campo tiene borde verde, el BACK está obligado a aceptar la operación.

Respuesta: ________________________________________________

### P042

**Verdadero/falso razonado** · Un campo vacío puede existir en el DOM.

Respuesta: ________________________________________________

### P043

**Verdadero/falso razonado** · El evento blur ocurre cuando se pierde el foco.

Respuesta: ________________________________________________

### P044

**Verdadero/falso razonado** · colocarvalidaciones añade las reglas particulares del DNI.

Respuesta: ________________________________________________

### P045

**Verdadero/falso razonado** · hidden garantiza por sí solo que el campo no se envíe.

Respuesta: ________________________________________________

### P046

**Verdadero/falso razonado** · readonly y disabled son equivalentes para todos los componentes.

Respuesta: ________________________________________________

### P047

**Verdadero/falso razonado** · Los inputs file pueden rellenarse con una ruta cualquiera del ordenador para una prueba.

Respuesta: ________________________________________________

### P048

**Verdadero/falso razonado** · SEARCH de texto puede permitir vacío y fragmentos.

Respuesta: ________________________________________________

### P049

**Verdadero/falso razonado** · SEARCH de un selector obliga a escribir un fragmento numérico a mano.

Respuesta: ________________________________________________

### P050

**Verdadero/falso razonado** · personalize_dni calcula una letra a partir del número.

Respuesta: ________________________________________________

### P051

**Verdadero/falso razonado** · El DNI 00000000X tiene letra correcta porque X es mayúscula.

Respuesta: ________________________________________________

### P052

**Verdadero/falso razonado** · Una fecha con estructura dd/mm/aaaa puede ser inexistente.

Respuesta: ________________________________________________

### P053

**Verdadero/falso razonado** · Fecha real y fecha no futura son la misma regla.

Respuesta: ________________________________________________

### P054

**Verdadero/falso razonado** · SEARCH de fecha exige siempre los diez caracteres.

Respuesta: ________________________________________________

### P055

**Verdadero/falso razonado** · La comprobación de teléfono demuestra que el número está asignado a una línea real.

Respuesta: ________________________________________________

### P056

**Verdadero/falso razonado** · Un MIME image/jpeg y una extensión jpg prueban por sí solos que los bytes sean una foto válida.

Respuesta: ________________________________________________

### P057

**Verdadero/falso razonado** · El mínimo 5 del nombre de foto incluye la extensión.

Respuesta: ________________________________________________

### P058

**Verdadero/falso razonado** · Usar 1024 bytes en un caso de prueba impone un mínimo de 1024.

Respuesta: ________________________________________________

### P059

**Verdadero/falso razonado** · La contraseña precargada utiliza asteriscos literales como valor enviado.

Respuesta: ________________________________________________

### P060

**Verdadero/falso razonado** · La contraseña no está en las columnas ni en los filtros de usuario.

Respuesta: ________________________________________________

### P061

**Verdadero/falso razonado** · async permite esperar con await sin congelar toda la página.

Respuesta: ________________________________________________

### P062

**Verdadero/falso razonado** · Una función async devuelve una promesa aunque retorne true.

Respuesta: ________________________________________________

### P063

**Verdadero/falso razonado** · Registrar un listener lo ejecuta en ese momento.

Respuesta: ________________________________________________

### P064

**Verdadero/falso razonado** · method.call(entity) fija el this de la validación.

Respuesta: ________________________________________________

### P065

**Verdadero/falso razonado** · context.values contiene los datos originales del formulario.

Respuesta: ________________________________________________

### P066

**Verdadero/falso razonado** · current evita que una respuesta de otro formulario se aplique al nuevo.

Respuesta: ________________________________________________

### P067

**Verdadero/falso razonado** · Deshabilitar el botón es una transacción de base de datos.

Respuesta: ________________________________________________

### P068

**Verdadero/falso razonado** · Un refresco fallido demuestra que la escritura anterior falló.

Respuesta: ________________________________________________

### P069

**Verdadero/falso razonado** · Desasignar un permiso elimina también el rol.

Respuesta: ________________________________________________

### P070

**Verdadero/falso razonado** · Las casillas de permisos sin rol seleccionado están desactivadas.

Respuesta: ________________________________________________

### P071

**Verdadero/falso razonado** · La matriz usa los nombres visibles como claves enviadas.

Respuesta: ________________________________________________

### P072

**Verdadero/falso razonado** · Filtrar la matriz escribe cambios en el servidor.

Respuesta: ________________________________________________

### P073

**Verdadero/falso razonado** · El motor Data_Test ejecuta la validación completa del campo para cada caso.

Respuesta: ________________________________________________

### P074

**Verdadero/falso razonado** · Todas las pruebas positivas deben duplicarse en cada definición atómica.

Respuesta: ________________________________________________

### P075

**Verdadero/falso razonado** · El índice puede contener spans vacíos que después muestran etiquetas.

Respuesta: ________________________________________________

### P076

**Verdadero/falso razonado** · El CSS añadido desde JavaScript sigue siendo CSS.

Respuesta: ________________________________________________

### P077

**Verdadero/falso razonado** · En JavaScript 11,5 dentro de un array representa el decimal 11.5.

Respuesta: ________________________________________________

### P078

**Verdadero/falso razonado** · Que una prueba pase demuestra que su batería cubre todos los casos posibles.

Respuesta: ________________________________________________

### P079

**Verdadero/falso razonado** · Una clase derivada debe redefinir absolutamente todos los métodos heredados.

Respuesta: ________________________________________________

### P080

**Verdadero/falso razonado** · En nuestra arquitectura se puede borrar entity_Test_Data sin cambiar la invocación de TEST.

Respuesta: ________________________________________________

## C. Lectura de JavaScript — 30 preguntas

### P081

**Respuesta razonada** · ¿Qué valor recibe el campo y por qué no queda vacío?

```javascript
const valor = 0;
elemento.value = valor ?? '';
```

Respuesta: ________________________________________________

### P082

**Respuesta razonada** · ¿Qué diferencia habría al utilizar || en el ejemplo anterior?

```javascript
elemento.value = valor || '';
```

Respuesta: ________________________________________________

### P083

**Respuesta razonada** · ¿Qué produce la expresión y qué comprueba realmente?

```javascript
return !!this.obtenerCampo(id, context);
```

Respuesta: ________________________________________________

### P084

**Respuesta razonada** · ¿Qué evita el operador ?. aquí?

```javascript
const context = entity?.formContext;
```

Respuesta: ________________________________________________

### P085

**Respuesta razonada** · ¿Qué métodos de validación se conectan para acción ADD y campo nombre_persona?

```javascript
const method = entity[accion + '_' + field.id + '_validation'];
if (method) method.call(entity);
```

Respuesta: ________________________________________________

### P086

**Respuesta razonada** · ¿Cuándo se ejecuta validate: al registrar o al perder foco?

```javascript
field.addEventListener('blur', validate);
```

Respuesta: ________________________________________________

### P087

**Respuesta razonada** · ¿Qué problema tendría escribir validate() en ese registro?

```javascript
field.addEventListener('blur', validate());
```

Respuesta: ________________________________________________

### P088

**Respuesta razonada** · ¿Qué hace continue en este recorrido?

```javascript
if (!this.esEditable(field)) continue;
```

Respuesta: ________________________________________________

### P089

**Respuesta razonada** · ¿Qué eventos elige para un input text y para un file?

```javascript
const events = field.tagName === 'INPUT' && field.type !== 'file'
    ? ['blur', 'input'] : ['blur', 'input', 'change'];
```

Respuesta: ________________________________________________

### P090

**Respuesta razonada** · Si id es dni y regla es format, ¿qué código se construye?

```javascript
const codigo = `${id}_${regla}_ko`;
```

Respuesta: ________________________________________________

### P091

**Respuesta razonada** · ¿Qué pasa si falla min_size? ¿Se ejecuta el máximo?

```javascript
if (!this.validations.min_size(id, 5)) return error('min_size');
if (!this.validations.max_size(id, 15)) return error('max_size');
```

Respuesta: ________________________________________________

### P092

**Respuesta razonada** · ¿Acepta validarsubmit un objeto cuyos valores sean todos true?

```javascript
return value === true;
```

Respuesta: ________________________________________________

### P093

**Respuesta razonada** · ¿Qué devuelve este método de EDIT y qué no hace?

```javascript
EDIT_nombre_persona_validation() {
    return this.ADD_nombre_persona_validation();
}
```

Respuesta: ________________________________________________

### P094

**Respuesta razonada** · ¿Qué letras finales acepta este fragmento de regex?

```javascript
/\.jpe?g$/i
```

Respuesta: ________________________________________________

### P095

**Respuesta razonada** · ¿Por qué este patrón puede aceptar una cadena vacía?

```javascript
/^[A-Za-z.]*$/
```

Respuesta: ________________________________________________

### P096

**Respuesta razonada** · ¿Puede esta forma de fecha garantizar calendario real?

```javascript
/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/
```

Respuesta: ________________________________________________

### P097

**Respuesta razonada** · ¿Qué letra se obtiene para el número cero?

```javascript
const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
return letras[numero % 23];
```

Respuesta: ________________________________________________

### P098

**Respuesta razonada** · ¿Es 1900 bisiesto según esta regla? ¿Y 2000?

```javascript
anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0)
```

Respuesta: ________________________________________________

### P099

**Respuesta razonada** · ¿Por qué se compara aaaammdd y no solo el día del mes?

```javascript
const fecha = anio * 10000 + mes * 100 + dia;
```

Respuesta: ________________________________________________

### P100

**Respuesta razonada** · ¿Qué devuelve si no hay fichero seleccionado? ¿Supone que existe el control?

```javascript
return this.obtenerCampo(id).files[0]?.name || '';
```

Respuesta: ________________________________________________

### P101

**Respuesta razonada** · ¿Qué elemento hace visible u oculta esta asignación?

```javascript
link.hidden = !visible;
```

Respuesta: ________________________________________________

### P102

**Respuesta razonada** · ¿Qué ocurre con un nombre de archivo que contiene espacios al construir la URL?

```javascript
link.href = base + encodeURIComponent(filename || '');
```

Respuesta: ________________________________________________

### P103

**Respuesta razonada** · ¿Qué datos se leen en esta transformación?

```javascript
return context.policy.send.map(field => { /* leer su valor */ });
```

Respuesta: ________________________________________________

### P104

**Respuesta razonada** · ¿Por qué un campo bloqueado toma values en lugar de control.value?

```javascript
const value = context.policy.readOnly.includes(field)
    ? context.values[field] || '' : control.value;
```

Respuesta: ________________________________________________

### P105

**Respuesta razonada** · ¿Qué representa la promesa y qué parte espera?

```javascript
await Promise.all([
    this.dom.rellenarReferencias(this, context, ['id_rol']),
    this.cargarContrasenaEdicion(context)
]);
```

Respuesta: ________________________________________________

### P106

**Respuesta razonada** · ¿Por qué hay una comprobación de current después de await?

```javascript
const respuesta = await peticion();
if (!entity_ui.current(this, context)) return false;
```

Respuesta: ________________________________________________

### P107

**Respuesta razonada** · ¿Qué diferencia hay entre estas dos consultas al Set?

```javascript
const ids = new Set(['1', '2']);
ids.has('1');
ids.has(1);
```

Respuesta: ________________________________________________

### P108

**Respuesta razonada** · ¿Qué contiene key si el orden de keys es funcionalidad, acción y rol?

```javascript
JSON.stringify(entity.config.keys.map(field => String(relation[field] || '')))
```

Respuesta: ________________________________________________

### P109

**Respuesta razonada** · ¿Cuántos elementos contiene este array y cómo representarías once horas y media?

```javascript
['Alumno', 'ET2', 11,5]
```

Respuesta: ________________________________________________

### P110

**Respuesta razonada** · ¿Por qué finally es adecuado para restaurar el formulario tras pruebas?

```javascript
try {
    resultados = super.data_test_data();
} finally {
    this.dom.restaurarFormularioPruebas(saved);
}
```

Respuesta: ________________________________________________

## D. Sigue los recorridos — 30 preguntas

### P111

**Respuesta razonada** · Entras en Personas sin pulsar Buscar: ¿por qué aparece una tabla?

Respuesta: ________________________________________________

### P112

**Respuesta razonada** · Pulsas Añadir persona: explica desde el icono hasta que el formulario está listo.

Respuesta: ________________________________________________

### P113

**Respuesta razonada** · Escribes un nombre inválido: explica qué se ejecuta antes de guardar.

Respuesta: ________________________________________________

### P114

**Respuesta razonada** · Corriges ese nombre: ¿quién quita el mensaje anterior?

Respuesta: ________________________________________________

### P115

**Respuesta razonada** · Guardas sin tocar otro campo obligatorio: ¿por qué se detecta?

Respuesta: ________________________________________________

### P116

**Respuesta razonada** · Todos los campos pasan: sigue la cadena hasta HTTP.

Respuesta: ________________________________________________

### P117

**Respuesta razonada** · ¿Cómo evitan search y write validar dos veces el mismo submit normal?

Respuesta: ________________________________________________

### P118

**Respuesta razonada** · El BACK acepta ADD: explica por qué desaparece el formulario y cambia la tabla.

Respuesta: ________________________________________________

### P119

**Respuesta razonada** · El BACK rechaza ADD por una relación: ¿qué pantalla queda?

Respuesta: ________________________________________________

### P120

**Respuesta razonada** · Abres EDIT de persona: ¿de dónde salen los valores y la fecha visible?

Respuesta: ________________________________________________

### P121

**Respuesta razonada** · Modificas el nombre de persona: explica cómo llega su DNI aunque no lo edites.

Respuesta: ________________________________________________

### P122

**Respuesta razonada** · Editas persona sin archivo nuevo: ¿qué pasa con el campo file al preparar el envío?

Respuesta: ________________________________________________

### P123

**Respuesta razonada** · Abres EDIT de usuario: explica cuándo se habilita y cómo aparece la contraseña.

Respuesta: ________________________________________________

### P124

**Respuesta razonada** · Editas solo el nombre de usuario: ¿cómo se conserva la contraseña?

Respuesta: ________________________________________________

### P125

**Respuesta razonada** · Cambias la contraseña por una con números: ¿dónde se detiene?

Respuesta: ________________________________________________

### P126

**Respuesta razonada** · Pulsas la papelera en Personas: ¿se ejecuta DELETE inmediatamente?

Respuesta: ________________________________________________

### P127

**Respuesta razonada** · Confirmas DELETE de persona: ¿qué se valida y qué se envía?

Respuesta: ________________________________________________

### P128

**Respuesta razonada** · Aparece dni_EXISTE_EN_usuario_KO: explica el límite de nuestro diagnóstico.

Respuesta: ________________________________________________

### P129

**Respuesta razonada** · Buscas un fragmento de apellido: ¿qué cambia respecto a ADD?

Respuesta: ________________________________________________

### P130

**Respuesta razonada** · El resultado tiene más de 250 filas: ¿cómo llegan las restantes?

Respuesta: ________________________________________________

### P131

**Respuesta razonada** · Creas un registro que no cumple los filtros que tenías: ¿por qué puede no verse después?

Respuesta: ________________________________________________

### P132

**Respuesta razonada** · Entras en funcionalidad_accion: explica cómo se construyen los ejes y casillas.

Respuesta: ________________________________________________

### P133

**Respuesta razonada** · Entras en permisos sin elegir rol: ¿qué puedes hacer y qué queda desactivado?

Respuesta: ________________________________________________

### P134

**Respuesta razonada** · Eliges otro rol: ¿qué peticiones de escritura ocurren?

Respuesta: ________________________________________________

### P135

**Respuesta razonada** · Marcas un permiso válido: describe los controles anteriores al POST.

Respuesta: ________________________________________________

### P136

**Respuesta razonada** · Desmarcas una casilla y el BACK rechaza: ¿cómo se recupera su estado?

Respuesta: ________________________________________________

### P137

**Respuesta razonada** · Se guarda un permiso pero falla el SEARCH posterior: ¿por qué no reintentar ADD?

Respuesta: ________________________________________________

### P138

**Respuesta razonada** · Cambias a Roles mientras termina una escritura de permisos: ¿quién protege la nueva pantalla?

Respuesta: ________________________________________________

### P139

**Respuesta razonada** · Pulsas TEST con un archivo ya seleccionado en persona: explica cómo se conserva.

Respuesta: ________________________________________________

### P140

**Respuesta razonada** · El test está asociado a max_size: ¿qué función ejecuta realmente Data_Test?

Respuesta: ________________________________________________

## E. Cien fichas de métodos y recorridos

### P141

**Ficha de método** · Explica `entity_dom_fields.crearElementoHtml(contenedor, tag, nombrecampo, valores = {}, extra = null)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P142

**Ficha de método** · Explica `entity_dom_fields.fillElementValue(elemento, valor)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P143

**Ficha de método** · Explica `entity_dom_fields.mostrar_error_campo(id, codigo)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P144

**Ficha de método** · Explica `entity_dom_fields.mostrar_exito_campo(id)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P145

**Ficha de método** · Explica `entity_dom_fields.actualizarEstadoCampo(id, invalid, codigo = '')`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P146

**Ficha de método** · Explica `entity_dom_fields.abrirModalError(codigo)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P147

**Ficha de método** · Explica `entity_dom_fields.cerrarModalError()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P148

**Ficha de método** · Explica `entity_dom_fields.hide_element_form(id)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P149

**Ficha de método** · Explica `entity_dom_fields.colocartodosreadonly(idform)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P150

**Ficha de método** · Explica `entity_dom_fields.colocarvalidaciones(idform, accion)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P151

**Ficha de método** · Explica `entity_dom_fields.validarsubmit(value)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P152

**Ficha de método** · Explica `entity_dom_fields.rellenarOpciones(entity, context, field, options, selected = '')`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P153

**Ficha de método** · Explica `entity_dom_fields.rellenarReferencias(entity, context, fields)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P154

**Ficha de método** · Explica `entity_dom_fields.obtenerCampo(id, context = null)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P155

**Ficha de método** · Explica `entity_dom_fields.existeCampo(id, context = null)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P156

**Ficha de método** · Explica `entity_dom_fields.valorCampo(id, context = null)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P157

**Ficha de método** · Explica `entity_dom_fields.nombreFichero(id)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P158

**Ficha de método** · Explica `entity_dom_fields.esFormularioActual(context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P159

**Ficha de método** · Explica `entity_dom_fields.enfocarPrimerError(context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P160

**Ficha de método** · Explica `entity_dom_fields.bloquearEnvio(context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P161

**Ficha de método** · Explica `entity_dom_fields.configurarEnlaceFichero(context, id, base, filename, visible)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P162

**Ficha de método** · Explica `entity_dom_fields.crearEnlaceFichero(base, filename)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P163

**Ficha de método** · Explica `entity_dom_fields.datosFormularioPorId(id)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P164

**Ficha de método** · Explica `entity_dom_fields.leerDatosEnvio(context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P165

**Ficha de método** · Explica `entity_dom_fields.iniciarGestion(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P166

**Ficha de método** · Explica `entity_dom_fields.esEditable(field)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P167

**Ficha de método** · Explica `entity_dom_fields.actualizarSubmit(context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P168

**Ficha de método** · Explica `entity_dom_fields.prepararFormulario(entity, action, values, policy)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P169

**Ficha de método** · Explica `entity_dom_fields.finalizarFormulario(context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P170

**Ficha de método** · Explica `entity_dom_fields.cerrarFormulario(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P171

**Ficha de método** · Explica `entity_dom_fields.mostrarEstado(code)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P172

**Ficha de método** · Explica `entity_dom_fields.crearIcono(action)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P173

**Ficha de método** · Explica `entity_dom_fields.mostrarTabla(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P174

**Ficha de método** · Explica `entity_dom_fields.actualizarColumnas(columns)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P175

**Ficha de método** · Explica `entity_dom_fields.mostrarMatrizCargando()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P176

**Ficha de método** · Explica `entity_dom_fields.mostrarMatrizError(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P177

**Ficha de método** · Explica `entity_dom_fields.esMatrizActual(matrix)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P178

**Ficha de método** · Explica `entity_dom_fields.mostrarMatriz(entity, matrix)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P179

**Ficha de método** · Explica `entity_dom_fields.actualizarMatriz(entity, matrix)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P180

**Ficha de método** · Explica `entity_dom_fields.bloquearMatriz(matrix, blocked)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P181

**Ficha de método** · Explica `entity_dom_fields.restaurarCasillaMatriz(matrix, key, checked)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P182

**Ficha de método** · Explica `entity_dom_fields.enfocarMatriz(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P183

**Ficha de método** · Explica `entity_dom_fields.prepararIdioma(lang)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P184

**Ficha de método** · Explica `entity_dom_fields.abrirVentanaPruebas()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P185

**Ficha de método** · Explica `entity_dom_fields.apartarFormularioPruebas()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P186

**Ficha de método** · Explica `entity_dom_fields.restaurarFormularioPruebas(saved)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P187

**Ficha de método** · Explica `entity_dom_fields.mostrarResultadosPruebas(popup, results, tests, entityName)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P188

**Ficha de método** · Explica `entity_dom_fields.aplicarEstilos()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P189

**Ficha de método** · Explica `entity_dom_fields.inicializarInterfaz()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P190

**Ficha de método** · Explica `entity_dom_fields.alCargar(callback)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P191

**Ficha de método** · Explica `entity_access.peticionBackGeneral(formulario, controlador, action, datosextra = null)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P192

**Ficha de método** · Explica `entity_access.find(value, key, depth = 0)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P193

**Ficha de método** · Explica `entity_access.scalar(value, field, depth = 0)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P194

**Ficha de método** · Explica `entity_access.normalizeRow(config, row)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P195

**Ficha de método** · Explica `entity_access.normalizeRows(config, rows)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P196

**Ficha de método** · Explica `entity_access.searchAll(entity, name, filters = new FormData())`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza? Explica también qué ocurre con RECORDSET_DATOS sin resource y con RECORDSET_VACIO sin resource.

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P197

**Ficha de método** · Explica `entity_access.records(entity, name)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P198

**Ficha de método** · Explica `entity_ui.dictionary()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P199

**Ficha de método** · Explica `entity_ui.t(code)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P200

**Ficha de método** · Explica `entity_ui.initialize(entity, name, mode)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P201

**Ficha de método** · Explica `entity_ui.current(entity, context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P202

**Ficha de método** · Explica `entity_ui.updateSubmit(context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P203

**Ficha de método** · Explica `entity_ui.openForm(entity, action, values, policy)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P204

**Ficha de método** · Explica `entity_ui.finishForm(entity, context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P205

**Ficha de método** · Explica `entity_ui.closeForm(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P206

**Ficha de método** · Explica `entity_ui.dateForForm(value)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P207

**Ficha de método** · Explica `entity_ui.validateFields(entity, action, fields)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P208

**Ficha de método** · Explica `entity_ui.validateKeys(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P209

**Ficha de método** · Explica `entity_ui.payload(entity, context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P210

**Ficha de método** · Compara `entity_ui.search(entity)` y `entity_ui.write(entity, action)`: ¿qué responsabilidad tiene cada uno, qué controles comparten y qué devuelven?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P211

**Ficha de método** · Explica `entity_ui.status(code)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P212

**Ficha de método** · Explica `entity_ui.renderTable(entity, rows)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P213

**Ficha de método** · Explica `entity_ui.refreshAfterWrite(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P214

**Ficha de método** · Explica `entity_ui.focusMatrix(entity, search = false)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P215

**Ficha de método** · Explica `entity_ui.matrixKey(entity, relation)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P216

**Ficha de método** · Explica `entity_ui.matrixCurrent(entity, matrix)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P217

**Ficha de método** · Explica `entity_ui.renderMatrix(entity, rows)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P218

**Ficha de método** · Explica `entity_ui.updateMatrixView(entity, matrix, field, value)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P219

**Ficha de método** · Explica `entity_ui.refreshMatrix(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P220

**Ficha de método** · Explica `entity_ui.runMatrix(entity, action, matrix, relation)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P221

**Ficha de método** · Explica `entity_ui.setColumns(entity, columns)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P222

**Ficha de método** · Explica el recorrido `openMatrixSearch` → `validateMatrixSearch` → `applyMatrixSearch`: ¿qué presenta cada uno, qué valida y qué cambia al confirmar?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P223

**Ficha de método** · Explica `entity_validations.min_size(id, minsize)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Validations_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Validations_Class.js>)

### P224

**Ficha de método** · Explica `entity_validations.max_size(id, maxsize)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Validations_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Validations_Class.js>)

### P225

**Ficha de método** · Explica `entity_Test_Data.constructor(entidad)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Test_Data_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Test_Data_Class.js>)

### P226

**Ficha de método** · Explica `entity_Test_Data.data_test_class()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Entity_Test_Data_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Test_Data_Class.js>)

### P227

**Ficha de método** · Explica `persona.personalize_foto_persona_nombre(id)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [persona_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/persona/persona_Class.js>)

### P228

**Ficha de método** · Explica `persona.personalize_nuevo_foto_persona_fichero(id, obligatorio)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [persona_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/persona/persona_Class.js>)

### P229

**Ficha de método** · Explica `persona.personalize_foto_persona_busqueda(id)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [persona_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/persona/persona_Class.js>)

### P230

**Ficha de método** · Explica `persona.personalize_telefono_persona()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [persona_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/persona/persona_Class.js>)

### P231

**Ficha de método** · Explica `persona.personalize_fechaNacimiento_persona_busqueda()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [persona_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/persona/persona_Class.js>)

### P232

**Ficha de método** · Explica `persona.personalize_dni(id)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [persona_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/persona/persona_Class.js>)

### P233

**Ficha de método** · Explica `persona.personalize_fechaNacimiento_persona_existente()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [persona_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/persona/persona_Class.js>)

### P234

**Ficha de método** · Explica `persona.personalize_fechaNacimiento_persona_no_futura()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [persona_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/persona/persona_Class.js>)

### P235

**Ficha de método** · Explica `usuario.cargarContrasenaEdicion(context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [usuario_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/usuario/usuario_Class.js>)

### P236

**Ficha de método** · Explica `funcionalidad_accion.cargarCatalogosMatriz()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [funcionalidad_accion_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/funcionalidad_accion/funcionalidad_accion_Class.js>)

### P237

**Ficha de método** · Explica `rolaccionfuncionalidad.personalize_id_accion_combinacion(relation = null)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [rolaccionfuncionalidad_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/rolaccionfuncionalidad/rolaccionfuncionalidad_Class.js>)

### P238

**Ficha de método** · Explica `rolaccionfuncionalidad.cargarCatalogosMatriz()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [rolaccionfuncionalidad_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/rolaccionfuncionalidad/rolaccionfuncionalidad_Class.js>)

### P239

**Ficha de método** · Explica `Data_Test.data_test_data()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Data_Test_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/Core/Data_Test_Class.js>)

### P240

**Ficha de método** · Explica `Data_Test.devolver_def(num_def)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Respuesta: ________________________________________________

Código para localizarlo: [Data_Test_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/Core/Data_Test_Class.js>)

## F. Treinta diagnósticos de fallos hipotéticos

### P241

**Diagnóstico hipotético** · Después de corregir un nombre vuelve a aparecer su error al cambiar de idioma. ¿Qué inspeccionas?

Respuesta: ________________________________________________

### P242

**Diagnóstico hipotético** · Se abre el modal de error, pero no hay explicación ni código. ¿Dónde miras primero?

Respuesta: ________________________________________________

### P243

**Diagnóstico hipotético** · El formulario contiene la palabra undefined. ¿Qué causas y qué remedio local considerarías?

Respuesta: ________________________________________________

### P244

**Diagnóstico hipotético** · Un select de DELETE todavía deja escoger otra opción pese a readonly. ¿Por qué?

Respuesta: ________________________________________________

### P245

**Diagnóstico hipotético** · Un textarea no produce ni true ni false en min_size docente. ¿Dónde se soluciona?

Respuesta: ________________________________________________

### P246

**Diagnóstico hipotético** · En una celda aparece [object Object]. ¿Qué error de responsabilidad sugiere?

Respuesta: ________________________________________________

### P247

**Diagnóstico hipotético** · Un icono tiene una imagen rota, pero el clic funciona. ¿Qué dos verificaciones separas?

Respuesta: ________________________________________________

### P248

**Diagnóstico hipotético** · No aparecen opciones de un select y el submit queda desactivado. ¿Por dónde sigues?

Respuesta: ________________________________________________

### P249

**Diagnóstico hipotético** · En ADD de persona se escribe un DNI con formato y letra correctos que no está entre los usuarios del datalist. ¿Basta con que el input permita escribirlo?

Respuesta: ________________________________________________

### P250

**Diagnóstico hipotético** · Al pulsar Guardar dos veces se duplican peticiones. ¿Qué protecciones buscas?

Respuesta: ________________________________________________

### P251

**Diagnóstico hipotético** · Termina una carga de opciones después de cambiar de entidad y altera la pantalla nueva. ¿Qué falta?

Respuesta: ________________________________________________

### P252

**Diagnóstico hipotético** · Has ocultado un campo con CSS y aun así se envía. ¿Qué concepto confundiste?

Respuesta: ________________________________________________

### P253

**Diagnóstico hipotético** · Has desactivado la clave de EDIT y desaparece de un FormData automático. ¿Qué permite mantenerla?

Respuesta: ________________________________________________

### P254

**Diagnóstico hipotético** · El caso de max_size espera true, pero el campo completo devuelve format_ko. ¿Es necesariamente un bug del máximo?

Respuesta: ________________________________________________

### P255

**Diagnóstico hipotético** · Solo se han cargado las primeras 250 filas, pero hay más. ¿Qué función investigas?

Respuesta: ________________________________________________

### P256

**Diagnóstico hipotético** · searchAll recibe siempre la misma página. ¿Qué riesgo hay si se quitan sus guardas?

Respuesta: ________________________________________________

### P257

**Diagnóstico hipotético** · Un permiso sin pareja funcionalidad–acción aparece asignado. ¿Cómo debe comportarse su celda?

Respuesta: ________________________________________________

### P258

**Diagnóstico hipotético** · Al cambiar de rol se envía un DELETE para el rol anterior. ¿Por qué es un diseño incorrecto?

Respuesta: ________________________________________________

### P259

**Diagnóstico hipotético** · El BACK rechazó DELETE de una casilla, pero permanece desmarcada. ¿Qué falta?

Respuesta: ________________________________________________

### P260

**Diagnóstico hipotético** · ADD fue aceptado y falla el refresco; se vuelve a enviar ADD automáticamente. ¿Qué riesgo hay?

Respuesta: ________________________________________________

### P261

**Diagnóstico hipotético** · La nueva tabla aparece vacía después de un alta correcta. ¿Qué revisarías antes de afirmar que no se guardó?

Respuesta: ________________________________________________

### P262

**Diagnóstico hipotético** · Después de TEST se pierde la foto que habías seleccionado. ¿Qué estrategia evita reconstruirla?

Respuesta: ________________________________________________

### P263

**Diagnóstico hipotético** · La ventana de pruebas está bloqueada por el navegador. ¿Por qué se intenta abrir al principio?

Respuesta: ________________________________________________

### P264

**Diagnóstico hipotético** · La contraseña de EDIT muestra ocho asteriscos como value y luego el login cambia. ¿Qué confundiste?

Respuesta: ________________________________________________

### P265

**Diagnóstico hipotético** · En EDIT usuario se permite guardar antes de cargar la contraseña. ¿Qué estado revisarías?

Respuesta: ________________________________________________

### P266

**Diagnóstico hipotético** · Un SELECT de ID acepta abc porque su tamaño está entre 1 y 11. ¿Qué falta?

Respuesta: ________________________________________________

### P267

**Diagnóstico hipotético** · Una fecha como 31/02/2000 pasa el regex y se considera válida. ¿Qué regla falta?

Respuesta: ________________________________________________

### P268

**Diagnóstico hipotético** · Un formulario de SEARCH no deja buscar 2000 en fecha. ¿Qué restricción revisarías?

Respuesta: ________________________________________________

### P269

**Diagnóstico hipotético** · Las horas figuran como 11,5 en un array de entrega. ¿Qué debe revisarse?

Respuesta: ________________________________________________

### P270

**Diagnóstico hipotético** · Después de entrar en una matriz, Personas conserva el selector de columnas bloqueado. ¿Qué parte inspeccionas?

Respuesta: ________________________________________________

## G. Treinta preguntas de defensa y criterio de interfaz

### P271

**Defensa oral** · Presenta el problema que resuelve el proyecto en 90 segundos.

Respuesta: ________________________________________________

### P272

**Defensa oral** · Justifica las tres piezas del archivo Entity_Dom_fields_Class.js y reconoce su coste.

Respuesta: ________________________________________________

### P273

**Defensa oral** · ¿Por qué usas herencia para DOM/validación y composición para colaboradores?

Respuesta: ________________________________________________

### P274

**Defensa oral** · ¿Qué puedes afirmar y qué no si te preguntan si modificaste al profesor?

Respuesta: ________________________________________________

### P275

**Defensa oral** · ¿Por qué una dirección o descripción se representa con textarea?

Respuesta: ________________________________________________

### P276

**Defensa oral** · Defiende una matriz para las asociaciones frente a editar claves de una fila.

Respuesta: ________________________________________________

### P277

**Defensa oral** · ¿Por qué no colocas una papelera y un ojo en cada celda de la matriz?

Respuesta: ________________________________________________

### P278

**Defensa oral** · ¿Es seguro desmarcar un permiso por accidente? Expón el criterio y un límite.

Respuesta: ________________________________________________

### P279

**Defensa oral** · ¿Por qué no pides ID al crear un rol?

Respuesta: ________________________________________________

### P280

**Defensa oral** · ¿Por qué un administrador selecciona un rol en lugar de escribir su ID?

Respuesta: ________________________________________________

### P281

**Defensa oral** · ¿Qué diferencia hay entre filtrar una matriz y asignar un permiso?

Respuesta: ________________________________________________

### P282

**Defensa oral** · ¿Cómo explicas que teléfono tenga format y personalized?

Respuesta: ________________________________________________

### P283

**Defensa oral** · ¿Qué defenderías sobre el mínimo de email de esta implementación?

Respuesta: ________________________________________________

### P284

**Defensa oral** · ¿Por qué no aplicas automáticamente todas las reglas de ADD en SEARCH?

Respuesta: ________________________________________________

### P285

**Defensa oral** · ¿Qué significa que una fecha tiene dos personalizadas?

Respuesta: ________________________________________________

### P286

**Defensa oral** · ¿Por qué no subes el nombre guardado foto_persona como si fuera un archivo?

Respuesta: ________________________________________________

### P287

**Defensa oral** · ¿Por qué una nueva foto es opcional en EDIT y qué se envía cuando no eliges otro fichero?

Respuesta: ________________________________________________

### P288

**Defensa oral** · ¿Cómo justificas nombre de fichero mínimo 5 si se habló de mínimo 3?

Respuesta: ________________________________________________

### P289

**Defensa oral** · ¿Por qué se muestra un mensaje de error y además un código?

Respuesta: ________________________________________________

### P290

**Defensa oral** · ¿Qué diferencia de experiencia hay entre rojo/verde de campo y modal de error?

Respuesta: ________________________________________________

### P291

**Defensa oral** · ¿Qué medidas de accesibilidad puedes señalar y cuáles no garantizarías sin evaluar?

Respuesta: ________________________________________________

### P292

**Defensa oral** · ¿Por qué no basta con ver todos los tests en verde?

Respuesta: ________________________________________________

### P293

**Defensa oral** · ¿Qué cambia entre ET1 y ET2 respecto a los tests?

Respuesta: ________________________________________________

### P294

**Defensa oral** · ¿Cómo explicarías min_size, error_code y resultado esperado sin confundirlos?

Respuesta: ________________________________________________

### P295

**Defensa oral** · ¿Qué contestas si una pregunta del profesor excede lo que has comprobado?

Respuesta: ________________________________________________

### P296

**Defensa oral** · ¿Por qué no borras usuario automáticamente al fallar DELETE persona?

Respuesta: ________________________________________________

### P297

**Defensa oral** · ¿Qué tiene de particular la contraseña que vuelve en SEARCH para EDIT?

Respuesta: ________________________________________________

### P298

**Defensa oral** · ¿Cómo podrías simplificar más sin romper el contrato del proyecto?

Respuesta: ________________________________________________

### P299

**Defensa oral** · ¿Qué enseñarías si te piden demostrar autoría y comprensión de una decisión?

Respuesta: ________________________________________________

### P300

**Defensa oral** · ¿Qué revisarías justo antes de generar el paquete final?

Respuesta: ________________________________________________

## H. Veinte ejercicios prácticos para demostrar comprensión

### P301

**Ejercicio práctico** · Con el editor, localiza dónde se decide el mínimo de nombre_persona y sigue hasta el color verde o rojo, sin cambiar el código.

Respuesta: ________________________________________________

### P302

**Ejercicio práctico** · Abre ADD de persona y demuestra que foto_persona está oculta, pero nuevo_foto_persona visible. Localiza quién decide y quién aplica.

Respuesta: ________________________________________________

### P303

**Ejercicio práctico** · Con datos ficticios locales, demuestra error y corrección de nombre sin pulsar Guardar.

Respuesta: ________________________________________________

### P304

**Ejercicio práctico** · Sigue un submit con el depurador e identifica el punto en que se autoriza el envío.

Respuesta: ________________________________________________

### P305

**Ejercicio práctico** · Demuestra en un entorno simulado que modificar el valor DOM de una clave readOnly no cambia la clave enviada.

Respuesta: ________________________________________________

### P306

**Ejercicio práctico** · Con persona EDIT y sin elegir foto nueva, explica el payload que se construiría.

Respuesta: ________________________________________________

### P307

**Ejercicio práctico** · Muestra las dos reglas de fecha con 30/02/2005 y una fecha futura de ejemplo.

Respuesta: ________________________________________________

### P308

**Ejercicio práctico** · Demuestra por inspección o simulación que SEARCH admite un fragmento de fecha y vacío.

Respuesta: ________________________________________________

### P309

**Ejercicio práctico** · Explica una opción de rol: etiqueta, value, catálogo y envío.

Respuesta: ________________________________________________

### P310

**Ejercicio práctico** · Prueba una carga fallida de catálogo con un stub local y describe la recuperación.

Respuesta: ________________________________________________

### P311

**Ejercicio práctico** · En una matriz simulada, asigna y desasigna una pareja y comprueba los campos de cada petición.

Respuesta: ________________________________________________

### P312

**Ejercicio práctico** · Simula un rechazo de DELETE de casilla y demuestra la restauración.

Respuesta: ________________________________________________

### P313

**Ejercicio práctico** · En permisos simulados, cambia de rol y comprueba que no se escribe.

Respuesta: ________________________________________________

### P314

**Ejercicio práctico** · Simula escritura aceptada y refresco fallido. Explica el resultado al administrador.

Respuesta: ________________________________________________

### P315

**Ejercicio práctico** · Simula una respuesta antigua después de navegar a otra entidad.

Respuesta: ________________________________________________

### P316

**Ejercicio práctico** · Ejecuta TEST y lee una fila de resultado, explicando sus columnas.

Respuesta: ________________________________________________

### P317

**Ejercicio práctico** · Con una foto seleccionada en un formulario local, ejecuta TEST y vuelve a él.

Respuesta: ________________________________________________

### P318

**Ejercicio práctico** · Cambia de idioma tras corregir un error y después en una matriz. ¿Se traducen los textos y ayudas sin perder selecciones o bloqueos?

Respuesta: ________________________________________________

### P319

**Ejercicio práctico** · Extrae el RAR de entrega en una carpeta temporal y comprueba su estructura y coincidencia con app. ¿Qué revisas además en TEST y en los datos de entrega?

Respuesta: ________________________________________________

### P320

**Ejercicio práctico** · Haz una defensa de cinco minutos con una operación convencional, una matriz y un límite conocido.

Respuesta: ________________________________________________

## Al terminar una sesión

Elige tres dudas y vuelve a la guía o al código. Resume cada una sin copiar: «este método recibe…, hace…, devuelve/cambia…, lo llama…». Repite una pregunta de flujo y una de criterio de interfaz. Consulta después el [solucionario](SOLUCIONES_DEFENSA_ET2.md).
