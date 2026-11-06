# Solucionario razonado — defensa ET2 IU262715

Revisión: 06/11/2026 · **320 respuestas**

Corresponde al [cuestionario](CUESTIONARIO_DEFENSA_ET2.md) y a la [guía de arquitectura](GUIA_ARQUITECTURA.md). Las respuestas explican la implementación actual; no son fórmulas oficiales del profesor. Para una defensa oral admite expresiones distintas si conservan la responsabilidad, el recorrido, el resultado y sus límites.

Lee primero tu respuesta. Si difiere, localiza el método y comprueba el dato. Una decisión pendiente no debe atribuirse como aprobada por el profesor. Los fallos del bloque F son escenarios de práctica. Los enlaces de las fichas llevan a archivos reales del proyecto; busca el nombre del método dentro del archivo.

La referencia de comportamiento es [GUIA_ARQUITECTURA.md](GUIA_ARQUITECTURA.md). Los ejercicios hipotéticos no describen necesariamente fallos presentes; consulta el estado actual en la guía.

Edición sincronizada con la entrega preparada el 06/11/2026: conserva los 320 identificadores e incorpora el cambio de idioma de matriz, el rechazo de respuestas SEARCH incompletas y la verificación del RAR. Consulta el [estado y alcance de la revisión](GUIA_ARQUITECTURA.md#114-qué-se-comprobó-y-cómo-explicarlo).

## Criterio de corrección

- **0:** respuesta incorrecta, fase confundida o comportamiento inventado
- **1:** idea principal correcta, pero sin poder seguir las llamadas o justificarla
- **2:** explica la idea, localiza la responsabilidad y da un ejemplo o consecuencia

En elección múltiple y verdadero/falso, la puntuación completa requiere justificar. En prácticas, comprueba el comportamiento descrito en un entorno apropiado; este documento no ejecuta altas ni bajas por ti. Las respuestas de campo hablan del código que se devuelve, no de lanzar una excepción JavaScript en todos los casos.

## A. Conceptos, archivos y arquitectura — 40 preguntas

### P001

¿Dónde se decide el mínimo de nombre_persona?

**D.** En la validación de campo de persona

La entidad pasa el límite concreto a la comprobación estándar.

### P002

¿Qué representa new persona()?

**D.** Una instancia con comportamiento y estado

El constructor prepara la gestión; guardar un registro requiere una operación posterior.

### P003

¿Qué guarda un registro de rol?

**C.** Los datos de un rol del BACK

Una fila no equivale a una instancia de la clase.

### P004

¿Qué hace extends?

**D.** Establece herencia entre clases

Los métodos se heredan y pueden sobrescribirse; no se ejecutan todos al declarar la clase.

### P005

¿Para qué sirve super() en un constructor?

**C.** Ejecutar el constructor del padre

Debe inicializarse la parte heredada antes de utilizar this en un constructor derivado.

### P006

¿Qué es this.dom?

**C.** Un colaborador que gestiona la interfaz

La entidad delega en él las operaciones DOM.

### P007

¿Qué es entity_ui?

**D.** Un objeto compartido de coordinación

Coordina contexto, validación, petición y respuesta.

### P008

¿Qué comunica con el BACK en nuestro recorrido?

**A.** entity_access

Su petición prepara y realiza el POST; el coordinador utiliza su resultado.

### P009

¿Qué contiene Entity_Dom_fields_Class.js además de la clase DOM?

**B.** entity_access y entity_ui

Quitar el archivo completo también elimina esos dos auxiliares.

### P010

¿Qué devuelve manual_form_creation?

**C.** Una cadena HTML

El DOM inserta después esa estructura en la página.

### P011

¿Qué hace createForm_ADD en persona?

**A.** Prepara la interfaz para añadir

La preparación es una fase anterior a validar y enviar.

### P012

¿Qué autoriza validarsubmit?

**B.** Únicamente un resultado estrictamente true

El método usa === true; un objeto con errores no debe permitir enviar.

### P013

¿Dónde se declaran los campos que se envían?

**A.** En send de la política

La lista del submit indica qué validar, no todo lo que necesariamente se envía.

### P014

¿Para qué sirve note?

**C.** Para mostrar ayuda o indicación en el formulario

Se presenta antes de la operación; el estado posterior es otro mensaje.

### P015

¿Qué objeto reúne la información del formulario abierto?

**A.** El contexto

Guarda form, action, values, policy y controles de estado.

### P016

¿Qué evita intentar guardar antes de cargar referencias?

**B.** El estado de carga y disponibilidad del submit

loading, ready y los errores de carga se comprueban antes de enviar.

### P017

¿Cómo se introduce el DNI en ADD de persona en la versión actual?

**B.** Se escribe en un input con sugerencias de un datalist de usuarios existentes

La plantilla mantiene un input de texto asociado a opciones_dni. rellenarReferencias consulta usuarios y rellenarOpciones prepara las sugerencias. Un datalist no impide escribir otros valores: los eventos y validateFields comprueban pertenencia al catálogo. SEARCH conserva escritura libre de fragmentos o vacío y no carga ese catálogo.

### P018

En un select con value="12" y texto "Gestores", ¿qué mide min_size?

**C.** La longitud de "12"

Se mide el valor seleccionado; la existencia exige otra comprobación.

### P019

¿Qué contiene foto_persona?

**B.** El nombre del fichero guardado

El fichero nuevo corresponde a nuevo_foto_persona.

### P020

¿Qué contiene un input file seleccionado?

**B.** Un File accesible mediante files

Las comprobaciones de nombre, MIME y bytes usan el archivo seleccionado.

### P021

¿Qué significa 2097152 en max_size_file?

**B.** El máximo de bytes del archivo

Equivale a 2 MiB; no mide la longitud del nombre.

### P022

¿Qué hace type="password"?

**B.** Enmascara visualmente el contenido

La máscara no es una protección criptográfica ni altera el valor enviado.

### P023

¿Dónde se muestra un error de formato de un campo?

**D.** Junto al campo mediante el DOM

La entidad decide el error y el DOM lo representa.

### P024

¿Qué suele mostrar abrirModalError?

**C.** Un problema general de operación o preparación

Puede proceder de red, BACK o preparación local; conserva un código identificable.

### P025

¿Cuál es la función de normalizeRow?

**D.** Adaptar la estructura de una fila recibida

Extrae valores escalares y etiquetas; no sustituye a las reglas de campo.

### P026

¿Por qué existe searchAll?

**A.** Para recuperar todas las páginas de SEARCH

Una primera página puede dejar fuera relaciones o catálogos existentes.

### P027

¿Qué relación guarda funcionalidad_accion?

**C.** Una funcionalidad con una acción

La pareja define qué combinación existe antes de concederla a un rol.

### P028

¿Qué añade rolaccionfuncionalidad?

**A.** El rol al que se asigna una pareja válida

La relación tiene tres identificadores.

### P029

¿Qué hace desmarcar una casilla asignada?

**D.** Solicitar DELETE de la relación

La baja afecta a la asociación indicada por sus claves.

### P030

¿Qué significa cambiar de rol en la matriz?

**D.** Cambiar los permisos que se muestran

Es una operación de vista, sin escritura por sí misma.

### P031

¿Qué comprueba el TEST de datos?

**A.** Resultados de validaciones frente a casos esperados

Ejecuta los casos declarados; su alcance depende de esa batería.

### P032

¿Qué demuestra un resultado CORRECTO en una fila de TEST?

**A.** Que la respuesta del validador coincide con el resultado esperado de ese caso

Data_Test ejecuta ACCION_atributo_validation y compara el resultado. El TEST de campos no ejecuta un alta real ni demuestra la corrección de todos los submits, la accesibilidad o el comportamiento completo del BACK.

### P033

¿Qué hace el modo test de entidad?

**A.** Evita la gestión y consulta iniciales

Las reglas de validación se mantienen iguales.

### P034

¿Por qué guardar nodos en DocumentFragment durante TEST?

**B.** Para restaurar valores, eventos y archivos seleccionados

Se conservan los nodos reales, no únicamente su HTML como texto.

### P035

¿Qué cambia setLang?

**C.** Textos de la interfaz según el diccionario

Los códigos permanecen y la presentación se traduce.

### P036

¿Qué hace Go Live?

**B.** Sirve los archivos de la interfaz en local

La interfaz local puede seguir escribiendo en un BACK remoto.

### P037

¿Por qué quitar nuestro archivo DOM entero impide arrancar?

**C.** También desaparece entity_ui, usado al inicializar entidades

Hay dependencias por nombres y métodos concretos, no por cantidad de código.

### P038

¿Qué significa que ADD y EDIT compartan validación?

**D.** Que reutilizan las mismas restricciones

La acción de persistencia se decide al ejecutar la operación, no por el nombre del validador reutilizado.

### P039

¿Qué representa _labels?

**D.** Etiquetas internas de presentación de referencias

El ID se conserva para peticiones y la etiqueta facilita reconocerlo.

### P040

¿Qué es lo más importante para justificar una decisión de interfaz?

**A.** Relacionarla con la tarea y los errores del administrador

Las matrices, referencias y mensajes deben facilitar acciones comprensibles y coherentes.

## B. Verdadero/falso con justificación — 40 preguntas

### P041

Si un campo tiene borde verde, el BACK está obligado a aceptar la operación.

**Falso.**

Puede rechazar duplicados, relaciones u otras reglas del servidor.

### P042

Un campo vacío puede existir en el DOM.

**Verdadero.**

existeCampo comprueba el elemento, no que tenga contenido.

### P043

El evento blur ocurre cuando se pierde el foco.

**Verdadero.**

colocarvalidaciones lo utiliza para revisar al salir del campo.

### P044

colocarvalidaciones añade las reglas particulares del DNI.

**Falso.**

Conecta eventos; las reglas están en la entidad y sus auxiliares.

### P045

hidden garantiza por sí solo que el campo no se envíe.

**Falso.**

Nuestro envío depende de policy.send, no solo de visibilidad.

### P046

readonly y disabled son equivalentes para todos los componentes.

**Falso.**

Select/file necesitan disabled; un FormData nativo también omite controles disabled.

### P047

Los inputs file pueden rellenarse con una ruta cualquiera del ordenador para una prueba.

**Falso.**

El motor crea un File y un DataTransfer; no carga una ruta local arbitraria.

### P048

SEARCH de texto puede permitir vacío y fragmentos.

**Verdadero.**

Es el criterio de búsqueda implementado, con límites y caracteres propios.

### P049

SEARCH de un selector obliga a escribir un fragmento numérico a mano.

**Falso.**

El selector ofrece un ID completo o sin filtro.

### P050

personalize_dni calcula una letra a partir del número.

**Verdadero.**

Utiliza el resto módulo 23 como índice de la cadena de letras.

### P051

El DNI 00000000X tiene letra correcta porque X es mayúscula.

**Falso.**

Cumple parte de la forma, pero al número cero le corresponde T.

### P052

Una fecha con estructura dd/mm/aaaa puede ser inexistente.

**Verdadero.**

30/02/2005 ilustra por qué el calendario es otra comprobación.

### P053

Fecha real y fecha no futura son la misma regla.

**Falso.**

Una fecha puede existir en el calendario y ser posterior a hoy.

### P054

SEARCH de fecha exige siempre los diez caracteres.

**Falso.**

Permite fragmentos; solo comprueba calendario cuando la estructura está completa.

### P055

La comprobación de teléfono demuestra que el número está asignado a una línea real.

**Falso.**

Comprueba forma nacional básica; no consulta asignación ni disponibilidad.

### P056

Un MIME image/jpeg y una extensión jpg prueban por sí solos que los bytes sean una foto válida.

**Falso.**

Son metadatos; no se inspecciona el contenido binario completo.

### P057

El mínimo 5 del nombre de foto incluye la extensión.

**Verdadero.**

a.jpg ya tiene cinco caracteres.

### P058

Usar 1024 bytes en un caso de prueba impone un mínimo de 1024.

**Falso.**

Es un valor de ejemplo; la regla implementada es un máximo.

### P059

La contraseña precargada utiliza asteriscos literales como valor enviado.

**Falso.**

El valor real se representa enmascarado por type=password.

### P060

La contraseña no está en las columnas ni en los filtros de usuario.

**Verdadero.**

sensitive y las políticas excluyen esa exposición; EDIT la carga por separado.

### P061

async permite esperar con await sin congelar toda la página.

**Verdadero.**

Se suspende la continuación de esa función, no la respuesta completa del navegador.

### P062

Una función async devuelve una promesa aunque retorne true.

**Verdadero.**

El valor se resuelve a través de la promesa.

### P063

Registrar un listener lo ejecuta en ese momento.

**Falso.**

La función se ejecuta cuando llega el evento correspondiente.

### P064

method.call(entity) fija el this de la validación.

**Verdadero.**

Permite utilizar los colaboradores de esa instancia.

### P065

context.values contiene los datos originales del formulario.

**Verdadero.**

Se utiliza, entre otras cosas, para enviar claves bloqueadas.

### P066

current evita que una respuesta de otro formulario se aplique al nuevo.

**Verdadero.**

Combina entidad activa, contexto e identidad del elemento.

### P067

Deshabilitar el botón es una transacción de base de datos.

**Falso.**

Reduce duplicados desde esa interfaz; la integridad del servidor es independiente.

### P068

Un refresco fallido demuestra que la escritura anterior falló.

**Falso.**

Puede haberse guardado correctamente y fallar solo el SEARCH posterior.

### P069

Desasignar un permiso elimina también el rol.

**Falso.**

DELETE lleva las claves de la asociación y elimina esa relación.

### P070

Las casillas de permisos sin rol seleccionado están desactivadas.

**Verdadero.**

Se exige elegir a qué rol pertenece la relación.

### P071

La matriz usa los nombres visibles como claves enviadas.

**Falso.**

Envía los IDs; los nombres son presentación.

### P072

Filtrar la matriz escribe cambios en el servidor.

**Falso.**

Los filtros locales solo cambian la vista.

### P073

El motor Data_Test ejecuta la validación completa del campo para cada caso.

**Verdadero.**

No llama necesariamente de forma aislada al método atómico que nombra la definición.

### P074

Todas las pruebas positivas deben duplicarse en cada definición atómica.

**Falso.**

La aclaración docente permite una definición de valor correcto con sus casos.

### P075

El índice puede contener spans vacíos que después muestran etiquetas.

**Verdadero.**

El sistema de idiomas rellena los textos al ejecutarse.

### P076

El CSS añadido desde JavaScript sigue siendo CSS.

**Verdadero.**

aplicarEstilos crea una etiqueta style mediante el DOM.

### P077

En JavaScript 11,5 dentro de un array representa el decimal 11.5.

**Falso.**

La coma separa dos elementos; el decimal utiliza punto.

### P078

Que una prueba pase demuestra que su batería cubre todos los casos posibles.

**Falso.**

Solo aporta evidencia sobre los casos definidos y su recorrido.

### P079

Una clase derivada debe redefinir absolutamente todos los métodos heredados.

**Falso.**

Puede reutilizar los que funcionen y adaptar únicamente los necesarios.

### P080

En nuestra arquitectura se puede borrar entity_Test_Data sin cambiar la invocación de TEST.

**Falso.**

El índice instancia esa clase y el enunciado pide la adaptación heredada de Data_Test.

## C. Lectura de JavaScript — 30 preguntas

### P081

¿Qué valor recibe el campo y por qué no queda vacío?

Recibe 0. El operador ?? solo sustituye null o undefined, no cero.

### P082

¿Qué diferencia habría al utilizar || en el ejemplo anterior?

Con ||, cero se considera falsy y se sustituye por vacío. No es equivalente a ??.

### P083

¿Qué produce la expresión y qué comprueba realmente?

false si no se encuentra el elemento; true si existe, aunque su value esté vacío. !! convierte a booleano.

### P084

¿Qué evita el operador ?. aquí?

Evita acceder a formContext si entity es null o undefined; no verifica por sí mismo que ese contexto sea el vigente.

### P085

¿Qué métodos de validación se conectan para acción ADD y campo nombre_persona?

Se obtiene ADD_nombre_persona_validation. La concatenación busca la función; .call(entity) la ejecuta con el this apropiado.

### P086

¿Cuándo se ejecuta validate: al registrar o al perder foco?

Al ocurrir blur, no al registrar el listener. Se pasa la función, sin paréntesis de llamada.

### P087

¿Qué problema tendría escribir validate() en ese registro?

Ejecutaría la función inmediatamente y pasaría su resultado como listener en vez de registrar la función que debe ejecutarse después.

### P088

¿Qué hace continue en este recorrido?

Salta el control no editable y sigue con el siguiente. No termina el método completo.

### P089

¿Qué eventos elige para un input text y para un file?

Para text, blur e input. Para file se usa la otra rama: blur, input y change.

### P090

Si id es dni y regla es format, ¿qué código se construye?

dni_format_ko. Es una plantilla de texto; construir el código no realiza la validación.

### P091

¿Qué pasa si falla min_size? ¿Se ejecuta el máximo?

Se devuelve el error mínimo y se termina esa ejecución; no se llega a comprobar máximo.

### P092

¿Acepta validarsubmit un objeto cuyos valores sean todos true?

No directamente. validarsubmit solo acepta el booleano true. validateFields es quien convierte todos los resultados correctos a true.

### P093

¿Qué devuelve este método de EDIT y qué no hace?

Devuelve el resultado de comprobar las reglas de ADD para ese campo. No ejecuta la operación de alta.

### P094

¿Qué letras finales acepta este fragmento de regex?

jpg o jpeg. La e es opcional; la bandera i admite también mayúsculas. El punto está escapado para ser literal.

### P095

¿Por qué este patrón puede aceptar una cadena vacía?

Porque * permite cero repeticiones del conjunto de letras y puntos. Es apropiado para ese filtro de búsqueda.

### P096

¿Puede esta forma de fecha garantizar calendario real?

No. Comprueba número de cifras y separadores; una fecha como 30/02/2005 puede pasar esa estructura.

### P097

¿Qué letra se obtiene para el número cero?

T: 0 % 23 vale 0 y la posición cero de la cadena es T.

### P098

¿Es 1900 bisiesto según esta regla? ¿Y 2000?

1900 no: es divisible por 100 y no por 400. 2000 sí: es divisible por 400.

### P099

¿Por qué se compara aaaammdd y no solo el día del mes?

Ese número conserva el orden de año, mes y día y evita depender de la hora. Comparar solo el día ignoraría mes y año.

### P100

¿Qué devuelve si no hay fichero seleccionado? ¿Supone que existe el control?

Devuelve vacío si falta el primer fichero. Sí supone que obtenerCampo(id) devolvió el control; ?. está aplicado al primer archivo.

### P101

¿Qué elemento hace visible u oculta esta asignación?

El enlace localizado previamente. visible=true implica hidden=false; no sube ni elimina el archivo.

### P102

¿Qué ocurre con un nombre de archivo que contiene espacios al construir la URL?

encodeURIComponent codifica el nombre para incluirlo como parte de la URL. No valida extensión ni existencia remota.

### P103

¿Qué datos se leen en esta transformación?

Solo los campos que la política incluyó en send. No se recorren automáticamente todos los controles del formulario.

### P104

¿Por qué un campo bloqueado toma values en lugar de control.value?

Para conservar el valor original identificado al abrir el formulario. No equivale a una barrera de seguridad del BACK.

### P105

¿Qué representa la promesa y qué parte espera?

La función espera a que ambas cargas terminen. La interfaz no queda congelada; su estado de preparación impide enviar antes de tiempo.

### P106

¿Por qué hay una comprobación de current después de await?

Porque durante la espera el usuario pudo cerrar el formulario o cambiar de entidad; no se debe rellenar otra pantalla con esa respuesta.

### P107

¿Qué diferencia hay entre estas dos consultas al Set?

Una consulta el ID string y otra el número; Set distingue sus tipos. La normalización mantiene IDs como cadenas.

### P108

¿Qué contiene key si el orden de keys es funcionalidad, acción y rol?

Una cadena JSON con ["3","2","1"]. El orden viene de config.keys, no del texto de las cabeceras.

### P109

¿Cuántos elementos contiene este array y cómo representarías once horas y media?

Contiene cuatro elementos. El decimal debe escribirse 11.5 para que el tercer elemento sea una sola cantidad.

### P110

¿Por qué finally es adecuado para restaurar el formulario tras pruebas?

Se ejecuta también si la ejecución de pruebas lanza una excepción. Permite reponer los nodos apartados.

## D. Sigue los recorridos — 30 preguntas

### P111

Entras en Personas sin pulsar Buscar: ¿por qué aparece una tabla?

El menú instancia persona; el constructor llama initialize, que prepara la gestión y solicita SEARCH inicial sin formulario de filtros.

### P112

Pulsas Añadir persona: explica desde el icono hasta que el formulario está listo.

createForm_ADD prepara valores/política; openForm delega en prepararFormulario; el DOM inserta estructura y eventos; se cargan referencias y finishForm habilita y enfoca.

### P113

Escribes un nombre inválido: explica qué se ejecuta antes de guardar.

input/blur activa el callback conectado por colocarvalidaciones; llama ADD_nombre_persona_validation; la entidad comprueba reglas y el DOM presenta el resultado.

### P114

Corriges ese nombre: ¿quién quita el mensaje anterior?

La validación llega al éxito y llama mostrar_exito_campo, que delega en actualizarEstadoCampo para limpiar clase/texto, ocultar y marcar verde.

### P115

Guardas sin tocar otro campo obligatorio: ¿por qué se detecta?

El submit llama validateFields para todos los campos de su lista, no solo los que generaron eventos.

### P116

Todos los campos pasan: sigue la cadena hasta HTTP.

El submit devuelve true, validarsubmit lo acepta y el listener llama ADD. write prepara payload, leerDatosEnvio obtiene send y peticionBackGeneral realiza POST.

### P117

¿Cómo evitan search y write validar dos veces el mismo submit normal?

El listener guarda entidad/contexto en validatedSubmits después de validar; search o write consumen ese marcador para reconocer ese envío.

### P118

El BACK acepta ADD: explica por qué desaparece el formulario y cambia la tabla.

write limpia caché y cierra; refreshAfterWrite libera la escritura y solicita SEARCH; se adaptan filas y renderiza la tabla; se muestra el resultado.

### P119

El BACK rechaza ADD por una relación: ¿qué pantalla queda?

El formulario conserva sus datos; se abre el modal con explicación/código. Cerrar el error permite seguir corrigiendo.

### P120

Abres EDIT de persona: ¿de dónde salen los valores y la fecha visible?

La fila del botón pasa a valoresFormulario; normalizeRow adapta estructura y dateForForm transforma el formato de fecha antes de rellenar.

### P121

Modificas el nombre de persona: explica cómo llega su DNI aunque no lo edites.

La política incluye DNI bloqueado en send; leerDatosEnvio toma su valor original de context.values para identificar la modificación.

### P122

Editas persona sin archivo nuevo: ¿qué pasa con el campo file al preparar el envío?

La validación opcional acepta la ausencia y payload omite el archivo no seleccionado; el criterio del formulario es conservar la foto actual.

### P123

Abres EDIT de usuario: explica cuándo se habilita y cómo aparece la contraseña.

Se esperan roles y cargarContrasenaEdicion. La consulta por DNI carga el valor en un input password; si falla la carga se bloquea. finishForm termina la preparación.

### P124

Editas solo el nombre de usuario: ¿cómo se conserva la contraseña?

El campo contiene el valor actual enmascarado y payload lo reenvía sin cambios. No se envían asteriscos ni se omite necesariamente.

### P125

Cambias la contraseña por una con números: ¿dónde se detiene?

Las validaciones ADD/EDIT de contraseña exigen letras sin ñ/tildes, 8–45. format devuelve fallo y no se autoriza el envío.

### P126

Pulsas la papelera en Personas: ¿se ejecuta DELETE inmediatamente?

No: createForm_DELETE abre datos bloqueados. El botón de eliminar de ese formulario confirma y llama al submit y a la operación.

### P127

Confirmas DELETE de persona: ¿qué se valida y qué se envía?

validateKeys comprueba contexto y DNI original; send incluye solo DNI, además del controlador y acción que añade el adaptador.

### P128

Aparece dni_EXISTE_EN_usuario_KO: explica el límite de nuestro diagnóstico.

Es un rechazo del BACK; el cliente pide borrar persona. No demuestra por sí solo el SQL interno ni autoriza borrar el usuario automáticamente.

### P129

Buscas un fragmento de apellido: ¿qué cambia respecto a ADD?

SEARCH no exige el mínimo de alta, permite vacío/fragmentos dentro de su formato y máximo, y envía criterios en lugar de un registro nuevo.

### P130

El resultado tiene más de 250 filas: ¿cómo llegan las restantes?

searchAll repite SEARCH con datosextra {empieza, filaspagina: 250}. Comprueba total/posición si existen; sin total sigue hasta una página corta o vacía. No confunde el parámetro filaspagina con filas de la respuesta.

### P131

Creas un registro que no cumple los filtros que tenías: ¿por qué puede no verse después?

El refresco conserva lastSearch; que el registro se haya guardado no implica que cumpla los filtros activos.

### P132

Entras en funcionalidad_accion: explica cómo se construyen los ejes y casillas.

SEARCH obtiene relaciones; cargarCatalogosMatriz obtiene funcionalidades y acciones; renderMatrix prepara Maps/Sets y mostrarMatriz crea la cuadrícula.

### P133

Entras en permisos sin elegir rol: ¿qué puedes hacer y qué queda desactivado?

Puedes seleccionar rol y filtrar la vista. Las casillas disponibles están desactivadas hasta identificar a qué rol pertenecen.

### P134

Eliges otro rol: ¿qué peticiones de escritura ocurren?

Ninguna por el cambio de selección. updateMatrixView cambia selectedRole y el DOM actualiza las casillas según las relaciones cargadas.

### P135

Marcas un permiso válido: describe los controles anteriores al POST.

runMatrix verifica matriz vigente, estado sin pendiente, claves/IDs conocidos, rol seleccionado y pareja válida mediante la regla de entidad; bloquea y construye FormData.

### P136

Desmarcas una casilla y el BACK rechaza: ¿cómo se recupera su estado?

El Map conserva si estaba asignada; restaurarCasillaMatriz repone esa marca y se muestra el código. No se da por eliminada la relación.

### P137

Se guarda un permiso pero falla el SEARCH posterior: ¿por qué no reintentar ADD?

La escritura está confirmada. Se conserva el cambio local, se informa de refresco fallido y se vuelve a consultar sin duplicar el alta.

### P138

Cambias a Roles mientras termina una escritura de permisos: ¿quién protege la nueva pantalla?

matrixCurrent, entidad activa y token de petición evitan aplicar respuesta sobre otro contexto. Se restaura además el uso del selector compartido al iniciar la nueva gestión.

### P139

Pulsas TEST con un archivo ya seleccionado en persona: explica cómo se conserva.

entity_Test_Data aparta nodos en un fragmento, ejecuta pruebas con componentes temporales y los restaura en finally; conserva el File y listeners de los nodos originales.

### P140

El test está asociado a max_size: ¿qué función ejecuta realmente Data_Test?

La validación completa ACCION_campo_validation. El dato de prueba debe superar controles anteriores para llegar al máximo que interesa comprobar.

## E. Cien fichas de métodos y recorridos

### P141

Explica `entity_dom_fields.crearElementoHtml(contenedor, tag, nombrecampo, valores = {}, extra = null)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe contenedor, tipo, nombrecampo, valores y extra opcional. Busca el contenedor, crea la etiqueta, asigna id y name y la incorpora al DOM. file y submit se crean como input con ese type. Para input permite extra.type o text; para textarea/input usa fillElementValue; para select crea una opción de prueba seleccionada; para file usa fillElementFile heredado. Devuelve el elemento. El motor de pruebas lo utiliza para crear solo el campo bajo prueba, junto con span, a y botón auxiliares; no construye el formulario completo de usuario final.

Ejemplo de llamada o lugar de uso: Data_Test.data_test_data. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P142

Explica `entity_dom_fields.fillElementValue(elemento, valor)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Asigna elemento.value = valor ?? cadena vacía. Si recibe null o undefined queda vacío; no confunde esos casos con cero o false. No crea el elemento ni decide ADD/EDIT. Actualmente lo llaman crearElementoHtml para inputs/textareas y prepararFormulario para cargar valores no file. Esta reutilización sustituyó las dos asignaciones directas que dejaban la redefinición sin uso. No asigna rutas a un input file.

Ejemplo de llamada o lugar de uso: entity_dom_fields.crearElementoHtml; entity_dom_fields.prepararFormulario; usuario.cargarContrasenaEdicion. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P143

Explica `entity_dom_fields.mostrar_error_campo(id, codigo)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Delega en actualizarEstadoCampo con estado inválido. El auxiliar marca aria-invalid=true, quita et2-valid, añade et2-invalid y coloca el mensaje traducido y la clase del código. No comprueba reglas: representa el fallo decidido por la entidad. El texto visible y el color rojo dependen del diccionario y CSS.

Ejemplo de llamada o lugar de uso: entity_ui.validateFields; persona.ADD_dni_validation; persona.ADD_nombre_persona_validation. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P144

Explica `entity_dom_fields.mostrar_exito_campo(id)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Delega en actualizarEstadoCampo con estado correcto para marcar aria-invalid=false, retirar et2-invalid, añadir et2-valid, ocultar el mensaje y limpiar su clase/texto. Presenta el resultado correcto; no realiza una validación ni una escritura en el BACK.

Ejemplo de llamada o lugar de uso: persona.ADD_dni_validation; persona.ADD_nombre_persona_validation; persona.ADD_apellidos_persona_validation. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P145

Explica `entity_dom_fields.actualizarEstadoCampo(id, invalid, codigo = '')`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Centraliza la representación de un campo: obtiene el control, el span y el mensaje, establece aria-invalid, alterna las clases et2-invalid/et2-valid y muestra u oculta el texto traducido. mostrar_error_campo lo llama con invalid=true y un código; mostrar_exito_campo con false. Así se evita repetir las mismas búsquedas y limpieza visual. No comprueba el contenido del campo.

Ejemplo de llamada o lugar de uso: entity_dom_fields.mostrar_error_campo; entity_dom_fields.mostrar_exito_campo. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

En formularios SEARCH lee la acción del formulario y utiliza la traducción SEARCH_codigo si existe. La clase del mensaje conserva esa clave para que setLang lo traduzca al cambiar de bandera. El resultado del validador sigue siendo el código original.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P146

Explica `entity_dom_fields.abrirModalError(codigo)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Abre el diálogo de error general. Usa la traducción del código o ui_error como explicación genérica y muestra también el código en et2_error_detail. Guarda el foco anterior, muestra modal y overlay, configura alertdialog/aria-modal/aria-describedby y enfoca su botón. Sirve para rechazos del BACK, red, preparación o carga; no es exclusivo del servidor. El código se conserva incluso cuando existe traducción.

Ejemplo de llamada o lugar de uso: entity_Test_Data.data_test_class; entity_dom_fields.rellenarReferencias; entity_dom_fields.prepararFormulario. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P147

Explica `entity_dom_fields.cerrarModalError()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Llama a super.cerrarModalError(), que oculta modal y overlay, y devuelve el foco al elemento guardado si existe. Usa el método docente para cerrar y añade la recuperación de foco.

Ejemplo de llamada o lugar de uso: entity_dom_fields.inicializarInterfaz. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P148

Explica `entity_dom_fields.hide_element_form(id)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe un ID, localiza el campo y label_ID y los oculta. También marca hidden en el bloque .et2-field más cercano para evitar huecos de etiqueta/error. prepararFormulario lo llama cuando el campo está en policy.hidden: persona declara foto_persona en hidden de ADD. No borra el campo ni determina el envío; eso depende de send.

Ejemplo de llamada o lugar de uso: entity_dom_fields.prepararFormulario. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P149

Explica `entity_dom_fields.colocartodosreadonly(idform)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recorre los controles de un formulario. Desactiva select y file con disabled y marca readOnly en los restantes que no sean submit. No desactiva los botones de envío. Está disponible como utilidad; la preparación actual aplica principalmente la lista readOnly específica de cada política.

Ejemplo de llamada o lugar de uso: Sobrescritura disponible del contrato docente; la preparación normal utiliza policy.readOnly en prepararFormulario, sin llamar a este auxiliar. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P150

Explica `entity_dom_fields.colocarvalidaciones(idform, accion)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Captura la entidad activa y el contexto actual. Recorre controles, salta los no editables y registra blur/input para input no file y también change para los demás editables. Su callback comprueba que el contexto siga vigente, busca ACCION_ID_validation y lo ejecuta con method.call(entity), de modo que this sea la entidad. No ejecuta ADD ni contiene sus reglas: conecta eventos con validaciones. El error puede aparecer mientras se escribe o al perder el foco, antes de Guardar.

Ejemplo de llamada o lugar de uso: entity_dom_fields.prepararFormulario. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P151

Explica `entity_dom_fields.validarsubmit(value)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Devuelve value === true. Solo un resultado estrictamente true autoriza el envío; un objeto de errores, false, un código o undefined no lo hacen. No repite las reglas ni prepara FormData.

Ejemplo de llamada o lugar de uso: entity_dom_fields.prepararFormulario. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P152

Explica `entity_dom_fields.rellenarOpciones(entity, context, field, options, selected = '')`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe entidad, contexto, atributo, opciones {value,label} y selección inicial. Solo actúa sobre el formulario actual y admite un SELECT o un INPUT asociado a un DATALIST. Guarda un Map de valores permitidos. En select prepara las opciones y selección; en input rellena las sugerencias sin borrar el texto escrito mientras se cargaban. Actualiza la disponibilidad del submit. El datalist sugiere valores, pero no impide escribir otros: la pertenencia al catálogo se comprueba al interactuar y en validateFields. No consulta el BACK: representa un catálogo ya recibido.

Ejemplo de llamada o lugar de uso: entity_dom_fields.rellenarReferencias. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P153

Explica `entity_dom_fields.rellenarReferencias(entity, context, fields)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Es async. Incrementa loading y bloquea el envío mientras espera. Para cada campo consulta config.references, obtiene registros con entity_access.records y los transforma en {value,label}, mostrando nombre e identificador en la etiqueta cuando son distintos; después llama a rellenarOpciones. Promise.all permite esperar varias referencias juntas. Si falla, marca referenceError en el formulario vigente y abre el error. finally resta el contador y actualiza el submit. Los datos son registros existentes, no instancias previamente creadas. Está separado del rellenado porque otros métodos pueden generar listas filtradas sin repetir la carga genérica.

Ejemplo de llamada o lugar de uso: persona.createForm_ADD; usuario.createForm_ADD; usuario.createForm_EDIT. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P154

Explica `entity_dom_fields.obtenerCampo(id, context = null)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Devuelve el elemento HTML por ID. Con contexto usa context.form.querySelector y limita la búsqueda a ese formulario; sin contexto usa document.getElementById. Puede devolver null si no existe. No lee el valor por sí mismo.

Ejemplo de llamada o lugar de uso: entity_dom_fields.actualizarEstadoCampo; entity_dom_fields.existeCampo; entity_dom_fields.valorCampo. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P155

Explica `entity_dom_fields.existeCampo(id, context = null)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Convierte el resultado de obtenerCampo en booleano con !!. Un campo presente pero vacío devuelve true. No comprueba formato, obligatoriedad ni que esté visible.

Ejemplo de llamada o lugar de uso: entity_ui.validateFields. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P156

Explica `entity_dom_fields.valorCampo(id, context = null)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Busca el elemento; si no existe lanza Error(ui_form_invalid), evitando tratar la ausencia del control como un dato vacío. Si existe devuelve field.value. Lo usan las entidades para leer sin manipular document directamente.

Ejemplo de llamada o lugar de uso: entity_ui.validateFields; persona.personalize_telefono_persona; persona.personalize_fechaNacimiento_persona_busqueda. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P157

Explica `entity_dom_fields.nombreFichero(id)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Lee files[0]?.name del control y devuelve cadena vacía si no se ha seleccionado archivo. Supone que el control existe. No devuelve los bytes de la imagen ni la ruta real del ordenador.

Ejemplo de llamada o lugar de uso: persona.personalize_nuevo_foto_persona_fichero. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P158

Explica `entity_dom_fields.esFormularioActual(context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Exige contexto y compara por identidad el elemento form_iu actual con context.form. Si un nuevo formulario sustituyó al anterior, devuelve false. entity_ui.current añade también comprobaciones de entidad y contexto activo.

Ejemplo de llamada o lugar de uso: entity_ui.current. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P159

Explica `entity_dom_fields.enfocarPrimerError(context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Busca el primer control con aria-invalid=true dentro del formulario y lo enfoca si existe. Es útil tras un submit con errores. El operador ?. evita llamar focus si no encuentra ninguno.

Ejemplo de llamada o lugar de uso: entity_ui.validateFields. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P160

Explica `entity_dom_fields.bloquearEnvio(context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Busca submit_button en el formulario del contexto y lo desactiva si existe. Controla el botón, no todos los campos ni una operación global del servidor. El coordinador utiliza además pending contra duplicados.

Ejemplo de llamada o lugar de uso: entity_ui.search y entity_ui.write. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P161

Explica `entity_dom_fields.configurarEnlaceFichero(context, id, base, filename, visible)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Busca un enlace ya existente, establece hidden según visible y construye href con base + encodeURIComponent(filename o vacío). Es el enlace de foto del formulario. La entidad decide visibilidad y base; el DOM cambia el elemento.

Ejemplo de llamada o lugar de uso: persona.prepararFoto. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P162

Explica `entity_dom_fields.crearEnlaceFichero(base, filename)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Crea un nuevo elemento a, configura URL con nombre codificado, texto del fichero, target=_blank y rel=noopener. Devuelve el nodo, sin insertarlo aquí. La tabla puede incorporarlo a su celda. No sube el archivo ni comprueba su existencia remota.

Ejemplo de llamada o lugar de uso: persona.mostrarcambioatributo. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P163

Explica `entity_dom_fields.datosFormularioPorId(id)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Devuelve new FormData(formulario encontrado). Es el camino compatible para peticionBackGeneral cuando recibe un ID de formulario en lugar de un FormData ya preparado. El constructor nativo sigue las reglas HTML de envío, por ejemplo omite controles disabled. Crear FormData no envía nada.

Ejemplo de llamada o lugar de uso: entity_access.peticionBackGeneral. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P164

Explica `entity_dom_fields.leerDatosEnvio(context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recorre únicamente policy.send. Para cada nombre exige que exista el control y devuelve {field,file,value}. Si es file obtiene files[0]; si está en readOnly toma context.values, el dato original; en otro caso toma control.value. No crea todavía la petición. Esta lectura explícita permite incluir claves bloqueadas aunque un FormData nativo omitiese un select desactivado.

Ejemplo de llamada o lugar de uso: entity_ui.payload. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P165

Explica `entity_dom_fields.iniciarGestion(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Muestra IU_manage_entity, establece el título traducido de la entidad e inserta su manual_form_creation en el contenedor. Prepara la pantalla general; no es por sí mismo un createForm_ADD ni una consulta al BACK.

Ejemplo de llamada o lugar de uso: entity_ui.initialize. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P166

Explica `entity_dom_fields.esEditable(field)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Reconoce INPUT/SELECT/TEXTAREA habilitados, no readOnly, sin tipo submit/hidden y fuera de bloques hidden o display:none directo. Es el filtro que utiliza la conexión de eventos y el foco inicial. No es una validación del contenido.

Ejemplo de llamada o lugar de uso: entity_dom_fields.colocarvalidaciones; entity_dom_fields.finalizarFormulario. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P167

Explica `entity_dom_fields.actualizarSubmit(context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Actualiza el mensaje de opciones no disponibles si la política no trae su propia note. Desactiva el botón si el contexto no está listo, sigue cargando, tiene error de referencias o un catálogo requerido no está disponible. Las reglas de contenido se comprueban después, no las calcula este método.

Ejemplo de llamada o lugar de uso: entity_dom_fields.prepararFormulario; entity_ui.updateSubmit. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P168

Explica `entity_dom_fields.prepararFormulario(entity, action, values, policy)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Inserta el HTML común de la entidad, captura form_iu y crea el contexto. Mantiene los componentes de la plantilla: el DNI de persona es un input con datalist y los otros catálogos se presentan como select. Rellena valores no file mediante fillElementValue; en select bloqueado puede preparar la opción del valor actual. Aplica hidden/readOnly, presenta note, crea submit si procede y Cancelar. Registra onsubmit con preventDefault, comprueba estado, llama a ACCION_submit_entidad, exige true y dispara entidad[accion](). Guarda el marcador validatedSubmits para no duplicar la validación del mismo envío. Conecta eventos de campo para ADD/EDIT/SEARCH normales; el modal SEARCH de matriz usa validateMatrixSearch y applyMatrixSearch. Abre el modal de formulario y devuelve context. No hace por sí mismo la petición fetch.

Ejemplo de llamada o lugar de uso: entity_ui.openForm. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P169

Explica `entity_dom_fields.finalizarFormulario(context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Actualiza traducciones y enfoca el primer control editable. Se ejecuta cuando las referencias y preparativos han terminado; el coordinador marca antes el contexto listo. DELETE/SHOWCURRENT pueden no tener campos editables.

Ejemplo de llamada o lugar de uso: entity_ui.finishForm. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P170

Explica `entity_dom_fields.cerrarFormulario(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Oculta Div_IU_form, repone el HTML común del contenedor y devuelve el foco al elemento anterior si existe. entity_ui.closeForm limpia además formContext y formAction. Es distinto de cerrar el modal de errores.

Ejemplo de llamada o lugar de uso: entity_ui.closeForm. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P171

Explica `entity_dom_fields.mostrarEstado(code)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Crea si hace falta et2_status en la cabecera y muestra el texto traducido correspondiente al código recibido. Con cadena vacía limpia el estado. Se usa para carga, operación completada y escritura completada cuyo refresco falló; no es note del formulario.

Ejemplo de llamada o lugar de uso: entity_ui.status. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P172

Explica `entity_dom_fields.crearIcono(action)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Crea una imagen de iconos/ACCION.png, con clase action_ACCION, tamaño y texto alternativo/título traducidos. Devuelve la imagen para insertarla en un botón.

Ejemplo de llamada o lugar de uso: entity_dom_fields.prepararFormulario; entity_dom_fields.mostrarTabla. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P173

Explica `entity_dom_fields.mostrarTabla(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Construye cabeceras y filas a partir de entity.atributos y entity.datos, controla columnas visibles y utiliza mostrarcambioatributo para campos especiales. Si recibe un Node, como el enlace de foto, lo incorpora; en otros casos escribe texto. Filtra EDIT/DELETE/SHOWCURRENT con config.readOnlyActions antes de crear los botones de fila. Esta tabla convencional se usa en las cinco entidades normales; las asociaciones delegan ahora en mostrarMatriz. Añade también el mensaje de tabla vacía y el selector de columnas. Los controles de fila abren formularios, no borran inmediatamente.

Ejemplo de llamada o lugar de uso: entity_ui.renderTable. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P174

Explica `entity_dom_fields.actualizarColumnas(columns)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recorre celdas de IU_manage_table con data-column y actualiza hidden según la lista recibida. Cambia presentación sin solicitar otra búsqueda ni modificar la base de datos.

Ejemplo de llamada o lugar de uso: entity_ui.setColumns. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P175

Explica `entity_dom_fields.mostrarMatrizCargando()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe sin argumentos. Reemplaza IU_manage_table por un mensaje de espera y vacía/desactiva el selector compartido de columnas. Efecto DOM; evita usar controles de una matriz anterior durante la carga. Lo utiliza: entity_ui.initialize al abrir una entidad con config.matrix.

Ejemplo de llamada o lugar de uso: entity_ui.initialize la llama al iniciar una entidad cuya config activa matrix. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P176

Explica `entity_dom_fields.mostrarMatrizError(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe entity. Vacía/desactiva columnas, muestra mensaje de carga fallida y botón de reintento conectado a refreshMatrix. Efecto DOM; no inventa relaciones vacías como si fueran una respuesta correcta. Lo utiliza: renderMatrix si falla la preparación de catálogos de una matriz vigente.

Ejemplo de llamada o lugar de uso: entity_ui.renderMatrix. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P177

Explica `entity_dom_fields.esMatrizActual(matrix)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe matrix. Comprueba que matrix.root sea exactamente el elemento et2_matrix que está ahora en el documento. Devuelve booleano, sin consultar al BACK. Lo utiliza: matrixCurrent combina este dato con entidad y contexto activos.

Ejemplo de llamada o lugar de uso: entity_ui.matrixCurrent. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P178

Explica `entity_dom_fields.mostrarMatriz(entity, matrix)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe entity, matrix ya preparada. Crea root, ayuda, barra, rol si procede, botón Actualizar, resumen y zona de tabla. Los selects de búsqueda se crean en el modal separado. Rellena selección de columnas de acciones y conecta eventos; guarda referencias de controles en matrix. Instala la vista, llama a actualizarMatriz, aplica bloqueo adecuado y recupera foco de casilla si sigue disponible. No carga por sí misma los catálogos. Lo utiliza: renderMatrix la llama tras construir el contexto.

Ejemplo de llamada o lugar de uso: entity_ui.renderMatrix. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P179

Explica `entity_dom_fields.actualizarMatriz(entity, matrix)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe entity, matrix. Descarta filtros cuyo ID ha dejado de aparecer en las relaciones y aplica los criterios confirmados por igualdad de identificadores y columnas seleccionadas; crea tabla con cabeceras, claves de relación y casillas. Sin filtro mantiene todos los ejes del catálogo para permitir nuevas asignaciones. En permisos comprueba pareja y rol. Las casillas llaman a ADD/DELETE de entidad. Reemplaza la cuadrícula, actualiza matrix.cells y resumen. Una pareja inexistente sin relación se muestra como guion; una asignación huérfana puede quitarse. No escribe solo por volver a pintar. Lo utiliza: mostrarMatriz, updateMatrixView y runMatrix al confirmar una escritura.

Ejemplo de llamada o lugar de uso: entity_dom_fields.mostrarMatriz; entity_ui.updateMatrixView; entity_ui.runMatrix. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P180

Explica `entity_dom_fields.bloquearMatriz(matrix, blocked)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe matrix, blocked. Recorre controles, selector compartido y casillas. Desactiva si hay bloqueo o si la celda sigue indisponible por falta de rol; actualiza aria-busy. Efecto DOM. Reactivar no habilita casillas que todavía carecen de rol; no es una transacción de BD. Lo utiliza: mostrarMatriz y el ciclo try/finally de runMatrix.

Ejemplo de llamada o lugar de uso: entity_dom_fields.mostrarMatriz; entity_ui.search y entity_ui.write; entity_ui.runMatrix. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P181

Explica `entity_dom_fields.restaurarCasillaMatriz(matrix, key, checked)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe matrix, key, checked previo. Busca el input en matrix.cells y repone su checked si todavía existe. Efecto visual; no dispara un onchange automáticamente ni envía una operación inversa al servidor. Lo utiliza: runMatrix lo usa al rechazar o no autorizar una escritura.

Ejemplo de llamada o lugar de uso: entity_ui.runMatrix. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P182

Explica `entity_dom_fields.enfocarMatriz(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe entity. Comprueba matriz vigente y sin petición pendiente. Lleva el foco al rol, a la primera casilla o al contenedor si no hay controles disponibles. Devuelve true si procede o false si no. SEARCH abre su modal mediante openMatrixSearch. Lo utiliza: focusMatrix desde los createForm compatibles.

Ejemplo de llamada o lugar de uso: entity_ui.focusMatrix. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P183

Explica `entity_dom_fields.prepararIdioma(lang)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe opcionalmente ES o EN; si no se indica, consulta la cookie. Ejecuta setLang para los textos traducibles y actualiza los títulos de la matriz a partir de data-title-code. Si una etiqueta aria-label utilizaba el título anterior, la actualiza también. Devuelve undefined y conserva los nodos, selecciones y bloqueos de la matriz.

Ejemplo de llamada o lugar de uso: banderas configuradas en inicializarInterfaz; entity_Test_Data.data_test_class; entity_dom_fields.finalizarFormulario. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P184

Explica `entity_dom_fields.abrirVentanaPruebas()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Abre una ventana vacía con window.open. Se invoca al principio del clic para que el navegador la considere asociada a la acción del usuario. Puede devolver null si se bloquean ventanas emergentes.

Ejemplo de llamada o lugar de uso: entity_Test_Data.data_test_class. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P185

Explica `entity_dom_fields.apartarFormularioPruebas()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Mueve los nodos actuales del contenedor a un DocumentFragment y devuelve {host,original}. No los convierte a texto ni los destruye: conserva listeners, valores y File seleccionados mientras el motor usa el contenedor para campos temporales.

Ejemplo de llamada o lugar de uso: entity_Test_Data.data_test_class. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P186

Explica `entity_dom_fields.restaurarFormularioPruebas(saved)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Sustituye los campos temporales por los nodos guardados con replaceChildren. Se llama desde finally para restaurar el formulario aunque una prueba lance un error.

Ejemplo de llamada o lugar de uso: entity_Test_Data.data_test_class. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P187

Explica `entity_dom_fields.mostrarResultadosPruebas(popup, results, tests, entityName)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Escribe la estructura de una ventana independiente, crea título, resumen y tabla de diez columnas: entidad, campo, definición, prueba, acción, valor, esperado, obtenido, traducción y estado. Utiliza los datos originales de pruebas para mostrar el valor como JSON con textContent. Colorea estado y traducciones ausentes y devuelve true. No decide si una prueba pasa: muestra la comparación del motor.

Ejemplo de llamada o lugar de uso: entity_Test_Data.data_test_class. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P188

Explica `entity_dom_fields.aplicarEstilos()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Añade un style con ID et2_styles si todavía no existe. Define distribución de campos, tabla, bordes rojo/verde, bloqueos, mensajes, tamaños y adaptación a pantalla pequeña. Es CSS insertado mediante JavaScript desde la clase DOM; no modifica Base/css/IU.css ni necesita un archivo CSS propio cargado en index.

Ejemplo de llamada o lugar de uso: entity_dom_fields.inicializarInterfaz. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P189

Explica `entity_dom_fields.inicializarInterfaz()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Aplica estilos, corrige en ejecución el ID del icono TEST, conecta BACK al cierre común, habilita iconos y menú mediante teclado, elimina la opción de entidad genérica sin clase real, prepara el cierre del error y gestiona Escape y recorrido Tab en diálogos. Finalmente aplica el idioma. Estos cambios se hacen mediante métodos DOM, no dentro de las entidades.

Ejemplo de llamada o lugar de uso: El callback registrado al final de Entity_Dom_fields_Class.js la invoca una vez que el DOM puede prepararse. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P190

Explica `entity_dom_fields.alCargar(callback)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Registra un callback para DOMContentLoaded. Al final del archivo se utiliza para ejecutar inicializarInterfaz cuando los elementos de la página ya existen. Registrar el callback no lo ejecuta en ese mismo instante.

Ejemplo de llamada o lugar de uso: La llamada al final del archivo entrega a alCargar un callback que invoca inicializarInterfaz. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P191

Explica `entity_access.peticionBackGeneral(formulario, controlador, action, datosextra = null)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Acepta FormData, un ID de formulario o vacío. Añade controlador y action y los extras, hace POST al endpoint y usa AbortController con 15 segundos. Exige respuesta HTTP correcta, JSON y campo code; diferencia ui_invalid_response de ui_network. Devuelve una promesa con la respuesta, no normaliza todas las filas ni muestra por sí mismo la interfaz.

Ejemplo de llamada o lugar de uso: entity_access.searchAll; entity_ui.search y entity_ui.write; entity_ui.runMatrix. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P192

Explica `entity_access.find(value, key, depth = 0)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Busca una clave dentro de un objeto y sus objetos anidados, con profundidad limitada. Si la clave no está directamente y aparecen varias coincidencias anidadas no decide arbitrariamente: solo devuelve la coincidencia si es única. Sirve para respuestas con referencias anidadas.

Ejemplo de llamada o lugar de uso: scalar, normalizeRow y search la usan para extraer datos de estructuras recibidas; no confundirla con Array.prototype.find. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P193

Explica `entity_access.scalar(value, field, depth = 0)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Convierte un valor de respuesta en texto simple. null/undefined pasan a vacío; strings y números se conservan como texto. Si recibe objeto intenta extraer el campo solicitado o claves value/valor/id, o un envoltorio de una sola propiedad. Rechaza arrays u objetos ambiguos con ui_invalid_response. Evita que String(objeto) produzca [object Object].

Ejemplo de llamada o lugar de uso: entity_access.normalizeRow; usuario.cargarContrasenaEdicion. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P194

Explica `entity_access.normalizeRow(config, row)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Exige un objeto de fila. Recorre fields configurados, omite file y sensitive y extrae valores escalares, incluidos los anidados. Construye _labels por separado para las referencias. No modifica el valor del usuario con trim ni valida reglas de negocio; adapta la estructura del BACK.

Ejemplo de llamada o lugar de uso: entity_access.normalizeRows; persona.valoresFormulario; usuario.valoresFormulario. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P195

Explica `entity_access.normalizeRows(config, rows)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Exige una lista, normaliza cada fila y comprueba que sus claves configuradas no estén vacías. Devuelve la lista uniforme. No deduplica asociaciones por clave: recoge las filas que el BACK devuelve.

Ejemplo de llamada o lugar de uso: entity_access.records; entity_ui.search y entity_ui.write; entity_ui.renderTable. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P196

Explica `entity_access.searchAll(entity, name, filters = new FormData())`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza? Explica también qué ocurre con RECORDSET_DATOS sin resource y con RECORDSET_VACIO sin resource.

Solicita SEARCH por páginas de 250. Copia los filtros sin parámetros de paginación anteriores y pasa datosextra con empieza y filaspagina a peticionBackGeneral. filaspagina es entrada; filas es un metadato de salida del BACK. Acumula resultados y comprueba total/posición cuando están presentes. Sin total continúa mientras reciba páginas de 250 y termina al recibir una corta o vacía; un múltiplo exacto requiere una consulta vacía adicional. Rechaza páginas repetidas, posiciones incoherentes, totales inválidos o falta de progreso con ui_incomplete_results, y limita el recorrido a 1000 páginas. No se considera completa automáticamente la primera página sin metadatos.

Ejemplo de llamada o lugar de uso: entity_access.records y entity_ui.search; las escrituras llegan indirectamente al refresco SEARCH. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

Una respuesta RECORDSET_DATOS sin resource, con null o con un valor no array se rechaza con ui_invalid_response. El valor vacío por defecto solo se aplica al código explícito RECORDSET_VACIO. El adaptador HTTP exige además code de tipo cadena no vacía; distinguir una respuesta inválida de una búsqueda válida sin coincidencias evita ocultar un fallo del servidor.

### P197

Explica `entity_access.records(entity, name)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Obtiene el catálogo completo de una entidad mediante searchAll y lo normaliza usando su configuración. Instancia su clase en modo test para conocer esa configuración, no para representar un registro ni abrir otra pantalla. Guarda una promesa compartida en cache para evitar duplicar la misma carga concurrente. Si falla retira de caché solo la promesa que sigue correspondiendo a esa entrada.

Ejemplo de llamada o lugar de uso: entity_dom_fields.rellenarReferencias; entity_ui.search y entity_ui.write; funcionalidad_accion.cargarCatalogosMatriz. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P198

Explica `entity_ui.dictionary()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Devuelve textos_EN o textos_ES según la cookie. No consulta el BACK ni traduce por sí mismo el DOM.

Ejemplo de llamada o lugar de uso: entity_dom_fields.abrirModalError; entity_ui.t. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P199

Explica `entity_ui.t(code)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Busca un código en el diccionario actual y devuelve su texto. Si no hay traducción devuelve el propio código, permitiendo reconocer la clave ausente.

Ejemplo de llamada o lugar de uso: entity_Test_Data.data_test_class; entity_dom_fields.actualizarEstadoCampo; entity_dom_fields.abrirModalError. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P200

Explica `entity_ui.initialize(entity, name, mode)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Completa nombre de entidad, columnas, campos especiales, atributos de tabla y colaboradores. Excluye file y sensitive de los atributos visibles. Crea lastSearch y reconoce el modo test. En modo normal vacía caché, activa la entidad, inicia gestión y arranca SEARCH. Primero representa una tabla vacía en entidades normales o un estado de carga en matrices. En modo test vuelve antes de esos efectos de gestión; las reglas de campo no cambian.

Ejemplo de llamada o lugar de uso: Los siete constructores de entidad la llaman con configuración, nombre y modo. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P201

Explica `entity_ui.current(entity, context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Exige contexto, que active sea la entidad, que formContext sea ese mismo objeto y que su elemento form siga siendo el de la página. Evita aplicar eventos o cargas sobre un formulario sustituido.

Ejemplo de llamada o lugar de uso: entity_dom_fields.colocarvalidaciones; entity_dom_fields.rellenarOpciones; entity_dom_fields.rellenarReferencias. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P202

Explica `entity_ui.updateSubmit(context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Delega en interfaceDom.actualizarSubmit. No ejecuta una validación completa ni envía nada.

Ejemplo de llamada o lugar de uso: entity_dom_fields.rellenarOpciones; entity_dom_fields.rellenarReferencias; entity_ui.finishForm. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P203

Explica `entity_ui.openForm(entity, action, values, policy)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Impide abrir si la entidad tiene una operación pendiente o ya no es la activa. Limpia la caché de referencias y pide al DOM preparar el formulario con acción, valores y política. Devuelve su contexto o null.

Ejemplo de llamada o lugar de uso: persona.createForm_ADD; persona.createForm_EDIT; persona.createForm_SEARCH. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P204

Explica `entity_ui.finishForm(entity, context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Comprueba que el contexto sigue vigente, marca ready=true, actualiza la disponibilidad del botón y pide al DOM finalizar idioma y foco. Devuelve true o false si el formulario dejó de ser actual.

Ejemplo de llamada o lugar de uso: persona.createForm_ADD; persona.createForm_EDIT; persona.createForm_SEARCH. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P205

Explica `entity_ui.closeForm(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Solo actúa sobre la entidad activa. Pide al DOM cerrar y después limpia formContext y formAction. No modifica registros ni equivale a DELETE.

Ejemplo de llamada o lugar de uso: entity_dom_fields.prepararFormulario; entity_dom_fields.inicializarInterfaz; entity_ui.search y entity_ui.write. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P206

Explica `entity_ui.dateForForm(value)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Transforma una cadena que comienza por aaaa-mm-dd a dd/mm/aaaa. Si no tiene esa estructura conserva el texto y si no hay valor devuelve vacío. Adapta presentación, no garantiza que la fecha exista.

Ejemplo de llamada o lugar de uso: persona.valoresFormulario; persona.mostrarcambioatributo. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P207

Explica `entity_ui.validateFields(entity, action, fields)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Comprueba contexto, acción y cargas. Para cada campo exige elemento y método ACCION_campo_validation, ejecuta el método con la entidad como this y guarda su resultado. Si hay referencias y el dato es no vacío, exige pertenencia al Map de opciones. Devuelve true solo si todo es estrictamente true; si no, enfoca el primer error y devuelve el objeto de resultados. La comprobación de pertenencia no está sustituida por min_size/max_size.

Ejemplo de llamada o lugar de uso: persona.ADD_submit_persona; persona.EDIT_submit_persona; persona.SEARCH_submit_persona. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P208

Explica `entity_ui.validateKeys(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Exige contexto DELETE actual y valores originales no vacíos para todas las claves configuradas. Devuelve true o un objeto con ui_form_invalid y muestra el modal si falta identificación. No comprueba por red la existencia ni vuelve a validar todos los datos antiguos.

Ejemplo de llamada o lugar de uso: persona.DELETE_submit_persona; usuario.DELETE_submit_usuario; rol.DELETE_submit_rol. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P209

Explica `entity_ui.payload(entity, context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Exige contexto actual, obtiene la lista de leerDatosEnvio y construye FormData. Omite archivos no seleccionados. No envía _labels ni todos los campos de config de forma indiscriminada.

Ejemplo de llamada o lugar de uso: entity_ui.search y entity_ui.write. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P210

Compara `entity_ui.search(entity)` y `entity_ui.write(entity, action)`: ¿qué responsabilidad tiene cada uno, qué controles comparten y qué devuelven?

Ejecuta exclusivamente la búsqueda. Comprueba entidad activa, petición pendiente y preparación del formulario SEARCH cuando se utiliza. Consume el marcador del submit para no validarlo dos veces, conserva los filtros, llama a searchAll y normaliza las filas. Completa las etiquetas de referencias si puede, cierra el formulario y presenta la tabla o matriz. Los errores conservan el formulario. Comprueba la identidad de la petición antes de aplicar respuestas y libera el bloqueo al terminar.

Ejecuta ADD, EDIT o DELETE. Comprueba que la entidad y el formulario sean los actuales, que la acción esté permitida y que el submit haya pasado. Construye el payload con los campos autorizados y llama a peticionBackGeneral. Si el BACK acepta, cierra el formulario y refresca SEARCH; si falla, conserva los valores y muestra el código de error. Mantiene el bloqueo contra envíos duplicados y descarta respuestas de una gestión anterior.

Ambos devuelven una promesa booleana y conservan el control de peticiones pendientes y respuestas tardías. La separación permite seguir la búsqueda sin recorrer condiciones de escritura.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P211

Explica `entity_ui.status(code)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Delega un código de estado en interfaceDom.mostrarEstado. La traducción y el elemento HTML se gestionan allí.

Ejemplo de llamada o lugar de uso: entity_ui.search y entity_ui.write; entity_ui.refreshAfterWrite; entity_ui.runMatrix. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P212

Explica `entity_ui.renderTable(entity, rows)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Normaliza las filas recibidas, guarda entity.datos y construye referenceLabels a partir de _labels. Después pide a entity.dom.mostrarTabla presentar los datos. Separa preparación del modelo visible y construcción de elementos.

Ejemplo de llamada o lugar de uso: entity_ui.initialize; persona.crearTablaDatos. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P213

Explica `entity_ui.refreshAfterWrite(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Libera el bloqueo de la escritura y solicita SEARCH para refrescar. Si la entidad sigue activa, muestra éxito o ui_operation_refresh_failed según el resultado. Se reutiliza desde write y runMatrix cuando el servidor ya aceptó la operación: la preparación previa específica de formulario o casilla permanece en su recorrido. Un fallo de refresco no convierte una escritura confirmada en una operación rechazada.

Ejemplo de llamada o lugar de uso: entity_ui.write y entity_ui.runMatrix. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P214

Explica `entity_ui.focusMatrix(entity, search = false)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Es async. Si la matriz no está disponible espera refreshMatrix y comprueba que siga vigente. Con search=false enfoca la gestión mediante dom.enfocarMatriz; con search=true abre el modal mediante openMatrixSearch. createForm_ADD y createForm_SEARCH de las asociaciones reutilizan este recorrido.

Ejemplo de llamada o lugar de uso: funcionalidad_accion.createForm_ADD; funcionalidad_accion.createForm_SEARCH; rolaccionfuncionalidad.createForm_ADD. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P215

Explica `entity_ui.matrixKey(entity, relation)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe entity, relation. Construye un array de valores de claves siguiendo el orden de config.keys, los convierte a texto y lo serializa con JSON.stringify. Devuelve una cadena estable que permite identificar la misma relación en matrix.relations y matrix.cells; no es una clave nueva de la BD. Lo utiliza: renderMatrix indexa relaciones; actualizarMatriz genera claves de casilla y runMatrix identifica la operación.

Ejemplo de llamada o lugar de uso: entity_dom_fields.actualizarMatriz; entity_ui.renderMatrix; entity_ui.runMatrix. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P216

Explica `entity_ui.matrixCurrent(entity, matrix)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe entity, matrix. Comprueba matriz no nula, entidad activa, identidad de entity.matrixContext y presencia del mismo root en la página. Devuelve booleano; evita que una respuesta o evento viejo modifique otra vista. Lo utiliza: updateMatrixView, runMatrix y enfocarMatriz lo consultan.

Ejemplo de llamada o lugar de uso: entity_dom_fields.enfocarMatriz; entity_ui.search y entity_ui.write; entity_ui.focusMatrix. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P217

Explica `entity_ui.renderMatrix(entity, rows)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe entity, rows recibidas por SEARCH. Crea un token de revisión, espera cargarCatalogosMatriz y descarta cargas antiguas. Construye Sets de IDs y parejas, Map de relaciones, filtros, selección y columnas; normaliza filas. Devuelve una promesa de true si presenta la matriz o false al fallar/quedar obsoleta. Conserva filtros y rol compatibles de la vista anterior. Con fallo vigente muestra estado de error y código. Lo utiliza: crearTablaDatos de las dos asociaciones delega aquí; luego mostrarMatriz construye el DOM.

Ejemplo de llamada o lugar de uso: funcionalidad_accion.crearTablaDatos; rolaccionfuncionalidad.crearTablaDatos. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P218

Explica `entity_ui.updateMatrixView(entity, matrix, field, value)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe entity, matrix, field, value. Rechaza contexto viejo u operación pendiente. Acepta selectedRole, columns, functionFilter o actionFilter; verifica roles/columnas conocidos y que los filtros elegidos correspondan a relaciones existentes, y cambia el estado de vista. Devuelve true al actualizar o false si rechaza el cambio. Llama a actualizarMatriz y no realiza escrituras HTTP. Lo utiliza: Eventos del selector de rol y de selección de columnas creados por mostrarMatriz; los filtros del modal utilizan applyMatrixSearch.

Ejemplo de llamada o lugar de uso: entity_dom_fields.mostrarMatriz. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P219

Explica `entity_ui.refreshMatrix(entity)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe entity. Comprueba entidad activa y ausencia de petición pendiente, vacía caché de catálogos y llama a SEARCH. Devuelve false si no procede o el resultado/promesa de la consulta. Recarga relaciones y catálogos; no asigna ni desasigna. Lo utiliza: Botón Actualizar y reintento de mostrarMatrizError.

Ejemplo de llamada o lugar de uso: entity_dom_fields.mostrarMatrizError; entity_dom_fields.mostrarMatriz; entity_ui.focusMatrix. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P220

Explica `entity_ui.runMatrix(entity, action, matrix, relation)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe entity, action, matrix, relation. Identifica estado previo y comprueba vigencia, pendientes, acción ADD/DELETE, IDs, rol y catálogos; para ADD de permiso exige pareja válida. Bloquea controles, envía solo claves, atiende rechazo/éxito y descarta respuestas viejas. Devuelve promesa del resultado. Si falla antes de confirmar escritura restaura la casilla; si se acepta cambia el Map y refresca. finally libera el bloqueo correspondiente. No convierte un fallo de recarga en un nuevo ADD/DELETE. Lo utiliza: ADD/DELETE de asociación lo invocan tras el cambio explícito de una casilla.

Ejemplo de llamada o lugar de uso: funcionalidad_accion.ADD; funcionalidad_accion.DELETE; rolaccionfuncionalidad.ADD. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P221

Explica `entity_ui.setColumns(entity, columns)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Sustituye la selección de columnas de la entidad y pide al DOM actualizar la visibilidad de sus celdas. No modifica datos del BACK.

Ejemplo de llamada o lugar de uso: entity_dom_fields.mostrarTabla. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P222

Explica el recorrido `openMatrixSearch` → `validateMatrixSearch` → `applyMatrixSearch`: ¿qué presenta cada uno, qué valida y qué cambia al confirmar?

openMatrixSearch prepara un modal separado de la matriz, con selects de IDs presentes en relaciones; en permisos conserva el rol seleccionado y lo bloquea. validateMatrixSearch comprueba que el formulario y la matriz siguen vigentes, que no hay operaciones pendientes y que cada valor no vacío pertenece a sus opciones. applyMatrixSearch guarda los filtros, cierra el modal y pide al DOM redibujar. No asigna relaciones ni repite el SEARCH HTTP: filtra los datos ya cargados. Actualizar sí vuelve a consultar.

Código: [Entity_Dom_fields_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Dom_fields_Class.js>)

### P223

Explica `entity_validations.min_size(id, minsize)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe el ID y el mínimo. Para TEXTAREA, SELECT e INPUT password/tel compara directamente value.length >= minsize; para el resto usa super.min_size. Devuelve booleano. La entidad determina el mínimo concreto y utiliza el resultado para presentar éxito o error.

Ejemplo de llamada o lugar de uso: persona.ADD_dni_validation; persona.ADD_nombre_persona_validation; persona.ADD_apellidos_persona_validation. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Validations_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Validations_Class.js>)

### P224

Explica `entity_validations.max_size(id, maxsize)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe el ID y el máximo. Para TEXTAREA, SELECT e INPUT password/tel compara value.length <= maxsize; para otros componentes delega en super.max_size. Devuelve booleano. No impone por sí mismo el máximo de cada atributo ni comprueba que un select pertenezca a un catálogo.

Ejemplo de llamada o lugar de uso: persona.ADD_dni_validation; persona.ADD_nombre_persona_validation; persona.ADD_apellidos_persona_validation. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Validations_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Validations_Class.js>)

### P225

Explica `entity_Test_Data.constructor(entidad)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe la declaración de la clase de entidad y llama a super(entidad). El constructor de Data_Test crea una instancia en modo test, obtiene sus arrays de definiciones y pruebas y llama a data_test_class; por despacho de métodos se ejecuta la redefinición de nuestra extensión.

Ejemplo de llamada o lugar de uso: El icono TEST del índice crea new entity_Test_Data(clase). Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Entity_Test_Data_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Test_Data_Class.js>)

### P226

Explica `entity_Test_Data.data_test_class()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Prepara idioma y abre la ventana de resultados vinculada al clic. Aparta los nodos del formulario, ejecuta super.data_test_data y añade un texto de resultado correcto cuando procede. En finally restaura los nodos originales. Si el navegador bloqueó la ventana muestra ui_test_popup; en otro caso delega la tabla de resultados al DOM. No ejecuta el comprobador de existencia de métodos del profesor.

Ejemplo de llamada o lugar de uso: Data_Test.constructor llama a this.data_test_class y ejecuta esta redefinición. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Para errores de SEARCH adapta traduccionError a su ayuda específica cuando existe en el diccionario; resultadoprueba y respuestaesperada permanecen intactos.

Código: [Entity_Test_Data_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/Entity_Test_Data_Class.js>)

### P227

Explica `persona.personalize_foto_persona_nombre(id)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe el ID del input que contiene el nombre. La función local error(regla) construye `${id}_${regla}_ko`, muestra ese error y lo devuelve. Comprueba mínimo 5, máximo 15 y un nombre con letras y puntos, al menos una letra antes de la extensión y terminación jpg o jpeg. La i del regex admite extensión y letras en mayúscula. Si pasa, marca el campo correcto y devuelve true. El nombre completo incluye la extensión: a.jpg ocupa 5.

Ejemplo de llamada o lugar de uso: persona.ADD_foto_persona_validation; persona.EDIT_foto_persona_validation. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [persona_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/persona/persona_Class.js>)

### P228

Explica `persona.personalize_nuevo_foto_persona_fichero(id, obligatorio)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe ID y obligatorio. Si no hay archivo, devuelve exist_file cuando es obligatorio o éxito cuando es opcional. Si existe, obtiene su nombre, comprueba sus 5–15 caracteres, formato de nombre, MIME image/jpeg y extensión jpg/jpeg, y el máximo 2097152 bytes (2 MiB). Se detiene en el primer fallo. El valor 1024 de algunos casos de prueba es un tamaño de ejemplo, no un mínimo de fichero.

Ejemplo de llamada o lugar de uso: persona.ADD_nuevo_foto_persona_validation; persona.EDIT_nuevo_foto_persona_validation; persona.SEARCH_nuevo_foto_persona_validation. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [persona_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/persona/persona_Class.js>)

### P229

Explica `persona.personalize_foto_persona_busqueda(id)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Comprueba solo máximo 15 y caracteres de letras/puntos. No exige mínimo ni extensión completa, de modo que acepta foto, .jpg y cadena vacía. Devuelve true o un código y actualiza la presentación.

Ejemplo de llamada o lugar de uso: persona.SEARCH_foto_persona_validation. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [persona_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/persona/persona_Class.js>)

### P230

Explica `persona.personalize_telefono_persona()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Lee el teléfono y comprueba el primer carácter con /^[6789]/. Devuelve booleano. El método de campo ya ha exigido antes nueve dígitos, por lo que esta función no necesita repetir esa parte.

Ejemplo de llamada o lugar de uso: persona.ADD_telefono_persona_validation. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [persona_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/persona/persona_Class.js>)

### P231

Explica `persona.personalize_fechaNacimiento_persona_busqueda()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Si el texto no tiene estructura exacta dd/mm/aaaa, lo acepta como fragmento; los controles anteriores ya han limitado tamaño y caracteres. Si está completo, reutiliza la comprobación de fecha real. No impone fecha no futura en SEARCH.

Ejemplo de llamada o lugar de uso: persona.SEARCH_fechaNacimiento_persona_validation. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [persona_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/persona/persona_Class.js>)

### P232

Explica `persona.personalize_dni(id)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Comprueba primero ocho dígitos y letra mayúscula. Extrae el número, calcula numero % 23 y usa el resultado como posición en TRWAGMYFPDXBNJZSQVHLCKE. Compara esa letra con la novena posición del DNI. Para 00000000 el resto es 0 y corresponde T. Devuelve booleano; el método de campo lo convierte en dni_personalized_ko si falla.

Ejemplo de llamada o lugar de uso: persona.ADD_dni_validation. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [persona_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/persona/persona_Class.js>)

### P233

Explica `persona.personalize_fechaNacimiento_persona_existente()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Separa día, mes y año, exige año desde 1, mes 1–12 y día desde 1. Calcula bisiesto: divisible entre 4 y, si es divisible entre 100, también entre 400. Usa una tabla de días por mes y comprueba que el día no la supere. Así rechaza 30/02/2005 aunque su estructura de caracteres parezca correcta.

Ejemplo de llamada o lugar de uso: persona.ADD_fechaNacimiento_persona_validation; persona.personalize_fechaNacimiento_persona_busqueda; persona.personalize_fechaNacimiento_persona_no_futura. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [persona_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/persona/persona_Class.js>)

### P234

Explica `persona.personalize_fechaNacimiento_persona_no_futura()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Exige primero una fecha real y compara aaaammdd numérico con el día local actual calculado mediante new Date(). Compara días completos, sin horas: hoy se acepta y una fecha posterior se rechaza. No depende de un año fijo como 2030; un caso de prueba con fecha literal futura sí puede caducar con el tiempo.

Ejemplo de llamada o lugar de uso: persona.ADD_fechaNacimiento_persona_validation. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [persona_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/persona/persona_Class.js>)

### P235

Explica `usuario.cargarContrasenaEdicion(context)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe el contexto de EDIT. Consulta SEARCH acotado al DNI original, selecciona exactamente la fila correspondiente y extrae la contraseña de la respuesta sin incorporarla a las filas normalizadas de tabla ni a la caché de catálogos. Comprueba vigencia tras esperar y carga el input password. Usa loading/referenceError para impedir guardar si falla la carga. createForm_EDIT espera esta tarea junto a las referencias de rol; la máscara es visual.

Ejemplo de llamada o lugar de uso: usuario.createForm_EDIT. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [usuario_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/usuario/usuario_Class.js>)

### P236

Explica `funcionalidad_accion.cargarCatalogosMatriz()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

No recibe parámetros. Devuelve una promesa del objeto con los catálogos de funcionalidades y acciones, consultados mediante entity_access.records. renderMatrix lo espera para construir ejes completos; no puede deducir los catálogos solo de las relaciones ya existentes.

Ejemplo de llamada o lugar de uso: entity_ui.renderMatrix. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [funcionalidad_accion_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/funcionalidad_accion/funcionalidad_accion_Class.js>)

### P237

Explica `rolaccionfuncionalidad.personalize_id_accion_combinacion(relation = null)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Con una relación explícita consulta en matrixContext.pairs si existe la pareja funcionalidad–acción. Sin argumento usa los valores de los campos del formulario compatible. Devuelve true o un objeto con campo y código de error; en la modalidad de formulario puede representarlo en el campo. runMatrix usa la comprobación antes de un ADD de permiso; un DELETE de permiso huérfano debe poder realizarse.

Ejemplo de llamada o lugar de uso: entity_ui.runMatrix; rolaccionfuncionalidad.ADD_submit_rolaccionfuncionalidad; rolaccionfuncionalidad.SEARCH_submit_rolaccionfuncionalidad. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [rolaccionfuncionalidad_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/rolaccionfuncionalidad/rolaccionfuncionalidad_Class.js>)

### P238

Explica `rolaccionfuncionalidad.cargarCatalogosMatriz()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Devuelve una promesa con funcionalidades, acciones, roles y parejas funcionalidad_accion. renderMatrix lo espera para construir los ejes y la selección de rol; las parejas indican dónde puede crearse un permiso.

Ejemplo de llamada o lugar de uso: entity_ui.renderMatrix. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [rolaccionfuncionalidad_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/app/rolaccionfuncionalidad/rolaccionfuncionalidad_Class.js>)

### P239

Explica `Data_Test.data_test_data()`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recorre array_pruebas, localiza la definición por número y crea el componente temporal correspondiente. Lo rellena con los datos del caso, llama al método completo ACCION_atributo_validation de la entidad y compara lo obtenido con el resultado esperado. Acumula filas de resultado y elimina los controles temporales. La etiqueta min_size o format de una definición no hace que ejecute únicamente ese método atómico.

Ejemplo de llamada o lugar de uso: entity_Test_Data.data_test_class llama a super.data_test_data. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Data_Test_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/Core/Data_Test_Class.js>)

### P240

Explica `Data_Test.devolver_def(num_def)`: ¿qué recibe, qué hace, qué devuelve o cambia y en qué recorrido se utiliza?

Recibe un número de definición y recorre array_def buscando una fila cuyo índice 3 coincida con él; devuelve esa definición o undefined si no existe. data_test_data lo usa para relacionar cada prueba con su definición. Por eso se comprueban numeración, referencias y coherencia de entidad/campo/acción.

Ejemplo de llamada o lugar de uso: Data_Test.data_test_data busca la definición de cada caso. Busca el método y sigue la llamada para explicar qué ocurre después. Un método disponible por contrato no tiene por qué participar en todas las pantallas.

Código: [Data_Test_Class.js](</home/rbp/Documentos/Ing. Informática/3ºCurso/IU/ET2_IU262715/Core/Data_Test_Class.js>)

## F. Treinta diagnósticos de fallos hipotéticos

### P241

Después de corregir un nombre vuelve a aparecer su error al cambiar de idioma. ¿Qué inspeccionas?

Las clases y el texto de error_dni/error_campo, mostrar_exito_campo y actualizarEstadoCampo. El éxito debe retirar el código anterior y ocultar el span; setLang reescribe los nodos según sus clases.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P242

Se abre el modal de error, pero no hay explicación ni código. ¿Dónde miras primero?

En abrirModalError y la estructura del modal. Debe asignar texto al mensaje y al detalle literal del código; classList.add = codigo no llama a classList.add(codigo).

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P243

El formulario contiene la palabra undefined. ¿Qué causas y qué remedio local considerarías?

Revisar normalización y rellenado de un atributo ausente. fillElementValue usa valor ?? cadena vacía. No se corrige escribiendo undefined como texto ni tocando Core por defecto.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P244

Un select de DELETE todavía deja escoger otra opción pese a readonly. ¿Por qué?

SELECT no aplica readonly como un input de texto. Se utiliza disabled en su representación; las claves a enviar se leen del registro original, no de un control modificado.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P245

Un textarea no produce ni true ni false en min_size docente. ¿Dónde se soluciona?

En entity_validations, redefiniendo min_size y max_size para comparar su value.length. La clase base se conserva; también se necesita creación y relleno del textarea en las pruebas.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P246

En una celda aparece [object Object]. ¿Qué error de responsabilidad sugiere?

Se está convirtiendo directamente un objeto de referencia a string. entity_access.scalar/normalizeRow debe separar ID escalar y etiqueta; la tabla representa luego el valor adecuado.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P247

Un icono tiene una imagen rota, pero el clic funciona. ¿Qué dos verificaciones separas?

La ruta y respuesta HTTP del PNG frente al listener del botón. Corregir la imagen no exige cambiar el método de negocio que ya se invoca.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P248

No aparecen opciones de un select y el submit queda desactivado. ¿Por dónde sigues?

Context.loading/referenceError/unavailable, registros devueltos por records/searchAll, referencias configuradas y rellenarOpciones. Distinguir un catálogo vacío de una petición que falló.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P249

En ADD de persona se escribe un DNI con formato y letra correctos que no está entre los usuarios del datalist. ¿Basta con que el input permita escribirlo?

No. El datalist solo sugiere; no limita la escritura. La validación del campo comprueba longitud, formato y letra; colocarvalidaciones y validateFields comprueban después si el valor pertenece a context.references.dni. Si no pertenece, muestran ui_reference_invalid y el submit no permite enviar. No se convierte el componente en un select.

Comprueba el valor del input, las sugerencias y el mapa del contexto en una simulación local; no crees registros en el BACK compartido para reproducirlo.

### P250

Al pulsar Guardar dos veces se duplican peticiones. ¿Qué protecciones buscas?

entity.pending, desactivación de submit y guardas del coordinador. En matriz además runMatrix bloquea controles y verifica estado. No equivale a una garantía de unicidad del servidor.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P251

Termina una carga de opciones después de cambiar de entidad y altera la pantalla nueva. ¿Qué falta?

Comprobar entidad activa y contexto original después del await, antes de modificar DOM. current/esFormularioActual y matrixCurrent cumplen esa función según la vista.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P252

Has ocultado un campo con CSS y aun así se envía. ¿Qué concepto confundiste?

Visibilidad y payload. hide_element_form oculta; policy.send decide qué campos se incluyen. Hay que revisar la lista send y leerDatosEnvio.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P253

Has desactivado la clave de EDIT y desaparece de un FormData automático. ¿Qué permite mantenerla?

La construcción explícita de payload lee el valor original de los campos readOnly y añade los campos de send. Los disabled se omiten en un FormData nativo de formulario, de ahí la necesidad de distinguir ambos caminos.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P254

El caso de max_size espera true, pero el campo completo devuelve format_ko. ¿Es necesariamente un bug del máximo?

No: Data_Test ejecuta la validación completa. El dato puede satisfacer el tamaño e incumplir otra regla. El caso debe elegirse conforme a las reglas previas y al resultado esperado global.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P255

Solo se han cargado las primeras 250 filas, pero hay más. ¿Qué función investigas?

searchAll y los indicadores empieza/filas/total de la respuesta. Debe acumular páginas y comprobar progreso, sin devolver silenciosamente un catálogo parcial.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P256

searchAll recibe siempre la misma página. ¿Qué riesgo hay si se quitan sus guardas?

Bucle de peticiones y duplicación de filas. Se mantienen controles de posición/progreso y límite de iteraciones, y el fallo se informa en vez de aparentar un resultado completo.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P257

Un permiso sin pareja funcionalidad–acción aparece asignado. ¿Cómo debe comportarse su celda?

No se permite crear una nueva asignación inválida, pero una relación ya existente debe poder desasignarse. La representación distingue disponible/asignada y runMatrix aplica la regla de pareja al ADD.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P258

Al cambiar de rol se envía un DELETE para el rol anterior. ¿Por qué es un diseño incorrecto?

Elegir rol es navegación de la vista. updateMatrixView debe recalcular las casillas sin escribir; solo el cambio explícito de una casilla solicita asignar/desasignar.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P259

El BACK rechazó DELETE de una casilla, pero permanece desmarcada. ¿Qué falta?

Guardar el estado confirmado y llamar a restaurarCasillaMatriz en el rechazo. No actualizar el Map como si la baja hubiera sido aceptada.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P260

ADD fue aceptado y falla el refresco; se vuelve a enviar ADD automáticamente. ¿Qué riesgo hay?

Duplicar una escritura o producir un error de relación existente. refreshAfterWrite distingue guardado de refresco: conserva lo aceptado e invita a consultar de nuevo.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P261

La nueva tabla aparece vacía después de un alta correcta. ¿Qué revisarías antes de afirmar que no se guardó?

Los filtros lastSearch, la respuesta de escritura y la búsqueda posterior. El registro puede quedar fuera del criterio activo o la recarga puede haber fallado.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P262

Después de TEST se pierde la foto que habías seleccionado. ¿Qué estrategia evita reconstruirla?

Apartar y restaurar los mismos nodos con un DocumentFragment y finally. Un File seleccionado no se puede reponer asignando una ruta a value.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P263

La ventana de pruebas está bloqueada por el navegador. ¿Por qué se intenta abrir al principio?

Para mantener la apertura vinculada al clic directo. Si window.open no devuelve ventana se informa ui_test_popup y el formulario se restaura igualmente.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P264

La contraseña de EDIT muestra ocho asteriscos como value y luego el login cambia. ¿Qué confundiste?

Máscara visual con valor real. El control type=password debe contener la contraseña recuperada bajo el contrato verificado; no se sustituye por una cadena de asteriscos.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P265

En EDIT usuario se permite guardar antes de cargar la contraseña. ¿Qué estado revisarías?

context.loading, ready y referenceError, la espera de Promise.all en createForm_EDIT y actualizarSubmit. La carga fallida no debe permitir reenviar vacío ni inventar una contraseña.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P266

Un SELECT de ID acepta abc porque su tamaño está entre 1 y 11. ¿Qué falta?

La regla de formato de dígitos y la pertenencia al catálogo. min_size/max_size solo comparan longitud; no identifican un rol existente.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P267

Una fecha como 31/02/2000 pasa el regex y se considera válida. ¿Qué regla falta?

La personalizada de existencia de fecha, independiente del formato. Después, ADD/EDIT necesitan la de no futura. Las reglas deben producir códigos distintos.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P268

Un formulario de SEARCH no deja buscar 2000 en fecha. ¿Qué restricción revisarías?

Una validación de fecha completa aplicada incondicionalmente. SEARCH admite substring y vacío; la regla de existencia actual solo se activa si el texto tiene la forma de fecha completa.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P269

Las horas figuran como 11,5 en un array de entrega. ¿Qué debe revisarse?

En JavaScript la coma separa elementos: quedan 11 y 5. Para once horas y media el número es 11.5. Se revisan además formato requerido e integrantes; este cuestionario no modifica el archivo de entrega.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

### P270

Después de entrar en una matriz, Personas conserva el selector de columnas bloqueado. ¿Qué parte inspeccionas?

iniciarGestion debe restablecer los controles compartidos al cambiar a una entidad normal, y las respuestas antiguas no pueden volver a bloquearlos. Revisar también contexto/pending de la pantalla anterior.

Explica cómo comprobarías tu hipótesis en el código o en Red/Consola antes de cambiar nada. Estos escenarios sirven para practicar; no afirman que los treinta fallos existan en la versión actual.

## G. Treinta preguntas de defensa y criterio de interfaz

### P271

Presenta el problema que resuelve el proyecto en 90 segundos.

Gestión administrativa de personas, usuarios y catálogos, más relaciones de acciones y permisos por rol. Explica formularios convencionales y matrices, validación previa, envío al BACK y tratamiento de resultado. Relaciona cada bloque con una responsabilidad y evita enumerar todos los archivos sin propósito.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P272

Justifica las tres piezas del archivo Entity_Dom_fields_Class.js y reconoce su coste.

entity_dom_fields representa, entity_ui coordina y entity_access comunica/adapta. Comparten un archivo ya cargado por la arquitectura para no añadir cargas estáticas al índice. El coste es un archivo largo; distinguir bloques y quitar duplicación ayuda. Separarlos exigiría planificar la carga dinámica y revisar dependencias.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P273

¿Por qué usas herencia para DOM/validación y composición para colaboradores?

La herencia mantiene el contrato docente y permite redefinir operaciones de sus clases. Las entidades usan colaboradores DOM/acceso/validación sin mezclar sus responsabilidades. No se debe presentar como única arquitectura posible, sino como una decisión compatible con las restricciones de entrega.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P274

¿Qué puedes afirmar y qué no si te preguntan si modificaste al profesor?

Las extensiones funcionales se implementan en app y heredan la infraestructura. Para afirmar identidad de cada archivo externo se necesita una comparación real; las notas de revisión registran diferencias de index/icono ajenas a estas extensiones. No atribuyas cambios propios al código docente.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P275

¿Por qué una dirección o descripción se representa con textarea?

Da espacio visible al administrador para textos largos. Se necesita adaptar tamaños y creación de campos de prueba. La elección del componente no implica permitir cualquier carácter ni saltos de línea si la regla actual los excluye.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P276

Defiende una matriz para las asociaciones frente a editar claves de una fila.

Permite ver el conjunto de relaciones y asignar/desasignar directamente. La asociación se identifica por una clave compuesta; el profesor aclaró ADD/DELETE en BD. La matriz conserva esas operaciones y evita presentar EDIT como cambio ordinario de atributos.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P277

¿Por qué no colocas una papelera y un ojo en cada celda de la matriz?

La casilla ya expresa pertenencia y su desmarcado solicita la baja. La vista completa permite consultar; añadir controles por celda duplica la interacción. Se conserva información de errores y bloqueo durante cada petición.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P278

¿Es seguro desmarcar un permiso por accidente? Expón el criterio y un límite.

Es una baja explícita y directa, con bloqueo y restauración si el servidor rechaza. La implementación no añade una confirmación por casilla ni un historial de deshacer. Debes reconocer ese coste y poder proponer confirmación o revisión de cambios si se exigiera, sin decir que ya existe.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P279

¿Por qué no pides ID al crear un rol?

Es autoincremental y lo asigna el BACK. Se oculta y no se envía en ADD; sigue siendo clave de registros existentes. La validación exhaustiva de ET1 puede conservar métodos que no se usan en el formulario ET2.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P280

¿Por qué un administrador selecciona un rol en lugar de escribir su ID?

Evita memorizar identificadores y permite elegir por etiqueta entre registros existentes. El valor enviado continúa siendo el ID y se verifica pertenencia. La etiqueta facilita la selección sin sustituir la clave.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P281

¿Qué diferencia hay entre filtrar una matriz y asignar un permiso?

Los selects de filtro y la selección de rol cambian qué se ve localmente. Una casilla dispara ADD/DELETE remoto para claves concretas. Navegar nunca debe escribir por sí mismo.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P282

¿Cómo explicas que teléfono tenga format y personalized?

format comprueba los dígitos y las reglas de tamaño fijan nueve. La personalizada verifica prefijo 6/7/8/9 según el criterio implementado. No demuestra que un número concreto esté asignado o activo.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P283

¿Qué defenderías sobre el mínimo de email de esta implementación?

La versión actual fija mínimo 1 y máximo 45 y comprueba formato completo en ADD/EDIT. Es la corrección concreta indicada por el usuario/profesor para este proyecto; no se cambia a 6 porque otra conversación considerase adecuado ese criterio. Un carácter pasa el tamaño mínimo, pero no todo el validador de email.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P284

¿Por qué no aplicas automáticamente todas las reglas de ADD en SEARCH?

SEARCH recibe criterios, no necesariamente valores completos. Admite vacío y substring con máximo/formato apropiados. Una letra de DNI o una fecha incompleta no requiere las comprobaciones semánticas del alta completa.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P285

¿Qué significa que una fecha tiene dos personalizadas?

Existencia calendario y no posterior al día actual son condiciones distintas. Se pueden fallar de modo independiente y usar códigos diferentes; el formato es un tercer control. SEARCH conserva el criterio parcial.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P286

¿Por qué no subes el nombre guardado foto_persona como si fuera un archivo?

El atributo persistido es un nombre; nuevo_foto_persona contiene el File seleccionado para subir. Mezclarlos rompe los tipos, los datos de envío y los comportamientos de ADD/EDIT/SEARCH.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P287

¿Por qué una nueva foto es opcional en EDIT y qué se envía cuando no eliges otro fichero?

Permite cambiar otros datos conservando la foto actual. EDIT_nuevo_foto_persona_validation llama al validador de fichero con obligatorio=false. Si no hay selección, devuelve true; payload no añade un File inexistente. La política de EDIT conserva foto_persona y los otros campos pertinentes. El criterio coincide con la aclaración docente de que ET2 depende de la interfaz; no se mantiene una pregunta pendiente ficticia ni se requiere foto nueva para cada edición.

Distingue el nombre guardado, el fichero nuevo y las reglas exhaustivas de las pruebas conservadas.

### P288

¿Cómo justificas nombre de fichero mínimo 5 si se habló de mínimo 3?

Se cuenta el nombre completo con extensión; X.jpg tiene cinco caracteres. Un mínimo menor no permitiría un fichero válido con esas extensiones. El máximo 15 incluye también la terminación.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P289

¿Por qué se muestra un mensaje de error y además un código?

El texto ayuda a comprenderlo y el código conserva la identidad literal del fallo, útil en una evaluación sin lista completa del BACK. Un código desconocido no desaparece por carecer de traducción.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P290

¿Qué diferencia de experiencia hay entre rojo/verde de campo y modal de error?

El estado de campo acompaña la entrada sin interrumpirla. El modal exige reconocer un fallo general y luego devuelve al formulario conservado. Ambos presentan resultados; no deciden la regla de negocio.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P291

¿Qué medidas de accesibilidad puedes señalar y cuáles no garantizarías sin evaluar?

Labels asociados, aria-describedby, aria-live de errores, aria-invalid, enfoque del primer error y recuperación de foco, nombre de iconos y estructura de tabla. No equivale a una auditoría completa de accesibilidad ni garantiza por sí solo todos los recorridos de teclado o lector.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P292

¿Por qué no basta con ver todos los tests en verde?

La batería verifica sus casos de campo, no persistencia real, restricciones del servidor, archivos reales ni todos los estados de interfaz. Se añaden verificaciones de recorridos y se distinguen las simuladas de las realizadas contra el BACK.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P293

¿Qué cambia entre ET1 y ET2 respecto a los tests?

ET1 solicitaba definición y casos exhaustivos por atributos/acciones. ET2 acompaña una interfaz concreta: solo se validan entradas pertinentes, y el comportamiento del formulario puede hacer innecesarias ciertas comprobaciones. Los tests existentes se conservan por instrucción; no se afirma que cada uno se use al navegar.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P294

¿Cómo explicarías min_size, error_code y resultado esperado sin confundirlos?

min_size es la regla atómica. El código identifica una infracción concreta del atributo. El esperado del caso es lo que devuelve el método completo de campo: true o un código, con referencia a una definición numerada.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P295

¿Qué contestas si una pregunta del profesor excede lo que has comprobado?

Describe el comportamiento observado, el código que lo respalda y el límite de evidencia. Por ejemplo, un rechazo de borrado acredita la respuesta del BACK, pero no revela por sí solo su SQL ni permite alterar sus restricciones.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P296

¿Por qué no borras usuario automáticamente al fallar DELETE persona?

Es otra entidad y otra acción con consecuencias propias. El código recibido no autoriza una baja en cascada desde el cliente. Se informa y se mantiene la pregunta sobre el orden correcto; las operaciones siguen explícitas.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P297

¿Qué tiene de particular la contraseña que vuelve en SEARCH para EDIT?

La implementación precarga el valor recibido y lo reenvía si no cambia, como pidió el profesor. Esta revisión lo ha comprobado con respuestas simuladas, sin volver a certificar el servidor docente. El input password solo oculta visualmente; ni la máscara ni excluirla de la tabla convierten el transporte/servidor en un diseño seguro general. No se registran ni consultan contraseñas ajenas para demostrarlo.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P298

¿Cómo podrías simplificar más sin romper el contrato del proyecto?

Primero seguir llamadas y localizar duplicación real; centralizar presentación/guardas compartidas sin borrar métodos exigidos ni mezclar responsabilidades. Extraer archivos requiere carga dinámica en app. Una línea menos no justifica una abstracción difícil de explicar.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P299

¿Qué enseñarías si te piden demostrar autoría y comprensión de una decisión?

Usa un ejemplo concreto: ocultar foto anterior en ADD y separarla de send, o la regla de pareja en permisos. Localiza configuración, consumidor y resultado visible; explica el criterio, reconoce herramientas usadas y realiza una modificación local pequeña razonada si procede.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

### P300

¿Qué revisarías justo antes de generar el paquete final?

Datos de entrega, número decimal con punto y ASCII si es requisito; carpeta app actual con clases, textos y tests; formato/nombre/estructura exigidos en PDF; ventana TEST, recorridos de interfaz e instrucciones. No reutilizar sin verificar un RAR antiguo. Esta documentación se guarda fuera de app y no sustituye el paquete de entrega.

Valora la respuesta por claridad, localización del código, justificación y reconocimiento de límites. No hay una frase única que debas memorizar.

## H. Veinte ejercicios prácticos para demostrar comprensión

### P301

Con el editor, localiza dónde se decide el mínimo de nombre_persona y sigue hasta el color verde o rojo, sin cambiar el código.

Ruta esperada: ADD_nombre_persona_validation → this.validations.min_size con el umbral → devolución booleana → mostrar_error_campo o mostrar_exito_campo → actualizarEstadoCampo. Distingue decisión de entidad, comparación genérica y representación.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P302

Abre ADD de persona y demuestra que foto_persona está oculta, pero nuevo_foto_persona visible. Localiza quién decide y quién aplica.

Mostrar policy.hidden y send de createForm_ADD; seguir openForm/prepararFormulario/hide_element_form. Identificar los dos controles, labels y tipos. Basta inspección de DOM y política; no hace falta subir un archivo real.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P303

Con datos ficticios locales, demuestra error y corrección de nombre sin pulsar Guardar.

Escribir un caso inválido y otro conforme al formato/tamaño. Observar input/blur, código, aria-invalid y clases, y limpieza del mensaje al corregir. El verde no debe implicar ninguna escritura remota.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P304

Sigue un submit con el depurador e identifica el punto en que se autoriza el envío.

Poner punto de interrupción en onsubmit/validarsubmit: preventDefault, contexto y guardas, ACCION_submit, resultado estrictamente true, validatedSubmits y llamada a la acción. Cancelar o usar transporte simulado para no crear registros por la demostración.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P305

Demuestra en un entorno simulado que modificar el valor DOM de una clave readOnly no cambia la clave enviada.

Preparar contexto de EDIT con clave original, alterar solo el control y observar leerDatosEnvio/payload. Debe usar context.values para el campo readOnly. No utilizar esto para alterar registros existentes del servidor.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P306

Con persona EDIT y sin elegir foto nueva, explica el payload que se construiría.

Mantiene los datos de send de EDIT y omite el campo File sin selección; la foto guardada sigue disponible como nombre/enlace. Explicar que conservar el fichero depende también del contrato del BACK, no solo del aspecto del formulario.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P307

Muestra las dos reglas de fecha con 30/02/2005 y una fecha futura de ejemplo.

Explicar formato frente a existencia: 30/02/2005 falla calendario. Una fecha real posterior al día de ejecución falla no_futura en ADD/EDIT. Elegir una fecha que siga siendo futura al practicar; no afirmar que 2030 lo será siempre.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P308

Demuestra por inspección o simulación que SEARCH admite un fragmento de fecha y vacío.

Seguir SEARCH_fechaNacimiento_persona_validation y la personalizada condicional. Un fragmento de dígitos/barra dentro del máximo no tiene que ser una fecha completa. Identificar dónde solo las fechas completas se comprueban por existencia.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P309

Explica una opción de rol: etiqueta, value, catálogo y envío.

Encontrar config.references, records, rellenarReferencias/rellenarOpciones. Mostrar etiqueta legible e ID; validateFields comprueba pertenencia y payload envía el ID, no la etiqueta.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P310

Prueba una carga fallida de catálogo con un stub local y describe la recuperación.

Simular rechazo de records, observar modal/estado de carga y submit bloqueado. Al volver a abrir con respuesta válida se rellenan opciones y se habilita cuando termina la preparación. No modificar el BACK para provocar el fallo.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P311

En una matriz simulada, asigna y desasigna una pareja y comprueba los campos de cada petición.

Marcar: ADD con claves de funcionalidad/acción; desmarcar: DELETE con las mismas claves. En permisos también id_rol. Inspeccionar FormData, Map y bloqueo; no debe aparecer un EDIT.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P312

Simula un rechazo de DELETE de casilla y demuestra la restauración.

Partir de relación existente, desmarcar, devolver código de rechazo en el stub. Debe volver a marcada, mantenerse el Map confirmado y verse el código. Restaurar el transporte original al finalizar.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P313

En permisos simulados, cambia de rol y comprueba que no se escribe.

Registrar peticiones ADD/DELETE del stub, seleccionar distintos roles y filtrar. Debe cambiar la vista sin aumentar escrituras. Después una casilla sí debe generar la operación para el rol actual.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P314

Simula escritura aceptada y refresco fallido. Explica el resultado al administrador.

El stub acepta ADD/DELETE y falla SEARCH. El estado confirmado no se revierte ni se reenvía automáticamente; se muestra aviso de recarga y se permite consultar de nuevo. Distinguir ambos momentos en el depurador.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P315

Simula una respuesta antigua después de navegar a otra entidad.

Diferir promesa, cambiar de vista y resolverla. Comprobar current/matrixCurrent y que no se altere la pantalla activa. Restaurar stubs y no confundir descartar la presentación con cancelar una escritura ya aceptada.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P316

Ejecuta TEST y lee una fila de resultado, explicando sus columnas.

Identificar entidad, atributo, número de definición, caso, acción, entrada, esperado, obtenido y comparación. Buscar la definición y el método completo ejecutado. La ejecución de campos no debe crear registros en el BACK.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P317

Con una foto seleccionada en un formulario local, ejecuta TEST y vuelve a él.

Verificar que el mismo input file conserva el File seleccionado y su contexto. Seguir apartarFormularioPruebas/restaurarFormularioPruebas en finally. No reconstruir la selección mediante una ruta.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P318

Cambia de idioma tras corregir un error y después en una matriz. ¿Se traducen los textos y ayudas sin perder selecciones o bloqueos?

Inspeccionar limpieza de clase y texto del error anterior: no debe reaparecer al traducir. Después usar las banderas en una matriz y comprobar resumen, filtros y ayudas de casillas. Seguir prepararIdioma(lang), setLang y data-title-code; los nombres procedentes de la BD permanecen como datos. Comparar antes y después las selecciones, columnas y controles desactivados: traducir no debe recrearlos ni desbloquear una petición en curso.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P319

Extrae el RAR de entrega en una carpeta temporal y comprueba su estructura y coincidencia con app. ¿Qué revisas además en TEST y en los datos de entrega?

Extraer ET2_IU262715.rar en una carpeta temporal, comprobar que solo contiene ET2_IU262715/app y comparar sus 20 archivos por contenido con app del proyecto completo. Revisar los datos reales del grupo, ASCII y números decimales con punto; comprobar definiciones, IDs, referencias y acciones pertinentes. Ejecutar TEST en la aplicación con la arquitectura docente y explicar el alcance de sus 477 casos. La extracción se ha comprobado en la revisión documentada; si se modifica app hay que regenerar y verificar el paquete. Los MD no forman parte de la entrega y preparar el archivo no equivale a subirlo.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

### P320

Haz una defensa de cinco minutos con una operación convencional, una matriz y un límite conocido.

Orden sugerido: 40 s problema/arquitectura; 100 s ADD/EDIT/errores y payload; 90 s matriz con claves/guardas; 40 s tests y alcance; 30 s límite y decisión pendiente. Localizar al menos un método de cada responsabilidad sin recitar el documento entero.

No hace falta ejecutarlo todo contra el BACK compartido. Usa inspección, depurador y transporte simulado; si se requieren escrituras reales, emplea exclusivamente registros temporales propios y limpia lo creado. La evaluación es tu explicación y la observación del comportamiento esperado.

## Cómo repasar las dudas que permanezcan

Vuelve al método y a su llamada: no te quedes solo con su nombre. Si una respuesta depende de contrato del BACK o de criterio pendiente, contrástala con las aclaraciones docentes aportadas, el enunciado y la comprobación final descrita en la guía. Si el proyecto cambia más adelante, actualiza también la guía y las respuestas afectadas; la fecha de esta edición identifica la versión estudiada.
