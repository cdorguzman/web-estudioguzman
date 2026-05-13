/**
 * ============================================================
 *  ESTUDIO GUZMÁN & ASOCIADOS — Base de artículos del blog
 * ============================================================
 *  Para agregar un artículo nuevo, copiá el bloque de un
 *  artículo existente, pegalo al INICIO del array (así queda
 *  primero) y completá los campos.
 *
 *  Campos obligatorios:
 *    id       → identificador único sin espacios (ej: "ganancias-2026")
 *    cat      → categoría: "sociedades" | "impuestos" | "contabilidad"
 *                           "certificaciones" | "novedades" | "mercado-capitales"
 *    catLabel → nombre visible de la categoría
 *    title    → título del artículo
 *    excerpt  → resumen corto para la tarjeta (2-3 oraciones)
 *    date     → fecha visible (ej: "Junio 2025")
 *    body     → contenido completo en HTML (usá <p>, <h3>, <ul><li>)
 * ============================================================
 */

const ARTICLES = [

  {
    id: "monotributo-recategorizacion",
    cat: "novedades",
    catLabel: "Novedades Impositivas",
    title: "Recategorización de Monotributo: fechas y cómo hacerlo",
    excerpt: "Dos veces al año el fisco te obliga a revisar tu categoría. Si facturaste más (o menos) de lo esperado, puede que estés mal categorizado. Te explicamos cómo verificarlo y actualizarlo.",
    date: "Febrero 2026",
    body: `
      <p>La recategorización semestral del Monotributo es una obligación que muchos pequeños contribuyentes pasan por alto, con consecuencias que van desde el pago de diferencias con intereses hasta la exclusión del régimen. Entender cómo funciona este proceso es fundamental para mantener tu situación fiscal en orden.</p>

      <h3>¿Qué es la recategorización?</h3>
      <p>El Monotributo divide a los contribuyentes en categorías (de A a K) según sus ingresos brutos anuales, la superficie afectada a la actividad, el consumo de energía eléctrica y el precio unitario de venta. <strong>Dos veces al año, en enero y en julio</strong>, debés evaluar si tu categoría actual sigue reflejando correctamente tu actividad de los últimos 12 meses.</p>

      <h3>¿Cuándo hay que recategorizarse?</h3>
      <ul>
        <li><strong>Enero:</strong> se evalúa el período julio–diciembre del año anterior</li>
        <li><strong>Julio:</strong> se evalúa el período enero–junio del año en curso</li>
        <li>El plazo habitual vence el último día hábil de cada mes de recategorización</li>
      </ul>

      <h3>¿Qué pasa si no me recategorizo?</h3>
      <p>Si superaste los parámetros de tu categoría y no te recategorizaste, AFIP puede detectarlo automáticamente a través de los controles cruzados con los datos de facturación electrónica. Las consecuencias incluyen:</p>
      <ul>
        <li>Recategorización de oficio por parte de AFIP</li>
        <li>Pago retroactivo de la diferencia con intereses resarcitorios</li>
        <li>Multas por incumplimiento de deberes formales</li>
        <li>En casos extremos, exclusión del Monotributo y alta automática en el Régimen General</li>
      </ul>

      <h3>¿Cómo se hace el trámite?</h3>
      <p>El proceso se realiza desde el portal web de AFIP con clave fiscal. Debés ingresar a "Monotributo", seleccionar "Recategorización" y completar los datos del período. El sistema calcula automáticamente la categoría que corresponde según los parámetros informados.</p>
      <p>Si tenés dudas sobre qué categoría te corresponde, en Guzmán & Asociados realizamos el análisis previo y gestionamos el trámite por vos.</p>
    `
  },

  {
    id: "sas-ventajas",
    cat: "sociedades",
    catLabel: "Sociedades",
    title: "SAS: la sociedad más ágil para emprendedores en Argentina",
    excerpt: "La Sociedad por Acciones Simplificada se constituyó en la opción preferida por startups y emprendedores. Menos burocracia, trámite digital y capital mínimo reducido. ¿Es para vos?",
    date: "Marzo 2026",
    body: `
      <p>Desde su creación por la Ley de Emprendedores 27.349 en 2017, la Sociedad por Acciones Simplificada (SAS) se convirtió rápidamente en la opción preferida por una nueva generación de emprendedores, freelancers y startups que necesitaban una estructura societaria ágil, económica y adaptada a la era digital.</p>

      <h3>¿Qué la hace diferente?</h3>
      <ul>
        <li><strong>Unipersonal:</strong> puede constituirse con un único socio, sin socios "de papel"</li>
        <li><strong>Trámite digital:</strong> constitución íntegramente online ante la IGJ</li>
        <li><strong>Capital mínimo reducido:</strong> equivalente a dos salarios mínimos vitales y móviles</li>
        <li><strong>Plazo de inscripción:</strong> entre 24 y 72 horas hábiles en condiciones normales</li>
        <li><strong>Estatuto modelo:</strong> la IGJ provee un estatuto estándar que simplifica el proceso</li>
      </ul>

      <h3>¿Para quién es ideal?</h3>
      <p>La SAS es particularmente adecuada para desarrolladores de software, consultores, agencias digitales, e-commerce, startups en etapa temprana y profesionales independientes que quieren facturar como empresa y acceder a beneficios impositivos sin la carga administrativa de una SA o SRL.</p>

      <h3>¿Cuáles son sus limitaciones?</h3>
      <ul>
        <li>No puede ser unipersonal cuando el socio único es otra SAS</li>
        <li>Limitada para ciertos sectores regulados (financiero, seguros)</li>
        <li>Menor tradición jurídica en contratos con grandes empresas o concursos públicos</li>
      </ul>

      <h3>Constitución en CABA</h3>
      <p>En Guzmán & Asociados gestionamos el proceso completo ante la IGJ: estatuto, apertura de cuenta bancaria, inscripción en AFIP y todo lo necesario para que tu SAS esté operativa en el menor tiempo posible.</p>
    `
  },

  {
    id: "bienes-personales-2025",
    cat: "impuestos",
    catLabel: "Impuestos",
    title: "Bienes Personales 2025: claves para la declaración anual",
    excerpt: "Cambios en mínimos no imponibles, alícuotas y bienes alcanzados. Todo lo que tenés que saber antes del vencimiento para evitar sorpresas y optimizar tu carga tributaria.",
    date: "Marzo 2026",
    body: `
      <p>El Impuesto sobre los Bienes Personales es uno de los tributos que más consultas genera entre los contribuyentes argentinos, especialmente en el período de declaración anual. Los cambios normativos de los últimos años hacen imprescindible un análisis cuidadoso antes del vencimiento.</p>

      <h3>¿Quiénes están obligados a presentar?</h3>
      <p>Están alcanzadas las personas físicas y sucesiones indivisas domiciliadas en Argentina que al 31 de diciembre posean bienes cuyo valor total supere el <strong>mínimo no imponible vigente</strong>. También deben presentar quienes posean bienes en el exterior, independientemente del monto.</p>

      <h3>¿Qué bienes se declaran?</h3>
      <ul>
        <li>Inmuebles (valor según tabla AFIP o escritura, el mayor)</li>
        <li>Automotores (tabla AFIP actualizada)</li>
        <li>Cuentas bancarias (saldo al 31/12)</li>
        <li>Inversiones: plazos fijos, FCI, acciones, ONs, criptomonedas</li>
        <li>Créditos y derechos</li>
        <li>Bienes del hogar (5% del total de los demás bienes)</li>
        <li>Bienes en el exterior (con alícuota diferencial)</li>
      </ul>

      <h3>¿Qué errores comunes evitar?</h3>
      <ul>
        <li>No declarar criptomonedas o inversiones en plataformas digitales</li>
        <li>Valuar inmuebles por debajo del valor de plaza cuando corresponde</li>
        <li>Omitir cuentas en el exterior o participaciones en sociedades offshore</li>
        <li>No computar correctamente las deudas deducibles</li>
      </ul>
      <p>En Guzmán & Asociados preparamos tu declaración de Bienes Personales con un análisis previo de tu patrimonio para optimizar legalmente la carga fiscal.</p>
    `
  },

  {
    id: "certificacion-ingresos",
    cat: "certificaciones",
    catLabel: "Certificaciones",
    title: "¿Para qué sirve una certificación de ingresos?",
    excerpt: "Bancos, inmobiliarias y organismos públicos la exigen cada vez más. Te contamos qué es, cuándo la necesitás y cómo un contador matriculado puede emitirla correctamente.",
    date: "Abril 2026",
    body: `
      <p>La certificación de ingresos es uno de los documentos más solicitados en la Argentina contemporánea, y sin embargo muchas personas no saben exactamente qué es ni cómo obtenerla correctamente. Un certificado mal emitido puede invalidar una solicitud de crédito, frustrar un alquiler o demorar trámites importantes.</p>

      <h3>¿Qué es una certificación de ingresos?</h3>
      <p>Es un <strong>informe emitido y firmado por un Contador Público matriculado</strong> en el que se certifica, con respaldo documental, el nivel de ingresos de una persona física o jurídica durante un período determinado. Este documento tiene validez técnica y legal porque está respaldado por la firma y sello del profesional y, en muchos casos, por la legalización del CPCECABA.</p>

      <h3>¿Cuándo la necesitás?</h3>
      <ul>
        <li><strong>Alquiler de inmuebles:</strong> inmobiliarias y propietarios la exigen como garantía de solvencia</li>
        <li><strong>Créditos bancarios e hipotecas:</strong> los bancos la requieren para evaluar capacidad de repago</li>
        <li><strong>Trámites migratorios:</strong> consulados y organismos de inmigración la solicitan frecuentemente</li>
        <li><strong>Licitaciones y concursos:</strong> para acreditar capacidad económica como proveedor</li>
        <li><strong>Juicios de alimentos o divorcios:</strong> como prueba de ingresos ante la justicia</li>
      </ul>

      <h3>¿Cuánto tarda?</h3>
      <p>Con la documentación completa, una certificación estándar puede emitirse en 24 a 48 horas hábiles. En Guzmán & Asociados procesamos certificaciones de ingresos con agilidad y las legalizamos ante el CPCECABA cuando el trámite lo requiere.</p>
    `
  },

  {
    id: "contabilidad-40",
    cat: "contabilidad",
    catLabel: "Contabilidad 4.0",
    title: "¿Qué es la Contabilidad 4.0 y por qué tu empresa la necesita?",
    excerpt: "La contabilidad ya no es solo cumplimiento. Con Python y Power BI, tus balances se convierten en tableros de decisión en tiempo real. Descubrí cómo la tecnología transforma la gestión financiera.",
    date: "Abril 2026",
    body: `
      <p>Durante décadas, la contabilidad fue percibida como una obligación: registros que había que mantener para cumplir con AFIP y presentar ante los bancos. Ese paradigma está cambiando radicalmente. La Contabilidad 4.0 convierte la información financiera en una herramienta estratégica de decisión.</p>

      <h3>¿Qué cambia con la tecnología?</h3>
      <p>La irrupción del <strong>Big Data, la automatización y la visualización de datos</strong> permite que los estados contables dejen de ser documentos históricos para convertirse en tableros en tiempo real. Ya no alcanza con saber cuánto ganaste el mes pasado: hoy podés anticipar tendencias, detectar desvíos y tomar decisiones basadas en datos actualizados.</p>

      <h3>Python aplicado a la contabilidad</h3>
      <p>Con Python es posible automatizar tareas repetitivas de alto volumen: conciliaciones bancarias, importación de datos de AFIP, cruce de facturas, cálculo de retenciones y generación de reportes periódicos. Lo que antes llevaba horas de trabajo manual, hoy se ejecuta en segundos.</p>
      <ul>
        <li>Automatización de liquidaciones y cierres mensuales</li>
        <li>Detección automática de anomalías en los registros</li>
        <li>Integración con facturación electrónica AFIP</li>
        <li>Análisis predictivo de flujo de caja</li>
      </ul>

      <h3>Power BI: del balance al tablero ejecutivo</h3>
      <p>Power BI permite transformar los datos contables en <strong>dashboards interactivos</strong> que cualquier directivo puede leer en segundos: evolución de ingresos, composición del gasto, cuentas a cobrar y pagar, e indicadores de rentabilidad en una sola pantalla actualizada automáticamente.</p>

      <p>En Guzmán & Asociados implementamos estas herramientas a medida de cada cliente, combinando el rigor técnico contable con la Maestría en Big Data & Business Intelligence por la ENEB Barcelona.</p>
    `
  },

  {
    id: "sa-srl-sas-sau",
    cat: "sociedades",
    catLabel: "Sociedades",
    title: "SA, SRL, SAS y SAU: ¿cuál es la diferencia y cuál te conviene?",
    excerpt: "Cada tipo societario tiene características distintas en cuanto a capital, responsabilidad, administración y costos. Te explicamos las diferencias clave para que elijas la estructura ideal para tu proyecto.",
    date: "Mayo 2026",
    body: `
      <p>Cuando decidís formalizar tu actividad comercial en Argentina, la elección del tipo societario es una de las decisiones más importantes que vas a tomar. No existe una opción universalmente mejor: cada estructura tiene ventajas y limitaciones según el tamaño del emprendimiento, la cantidad de socios y los objetivos de largo plazo.</p>

      <h3>Sociedad Anónima (SA)</h3>
      <p>La SA es la estructura más tradicional y formal. <strong>Requiere un mínimo de dos accionistas</strong> y un capital social inicial que se integra parcialmente al momento de la constitución. Su principal ventaja es la <strong>responsabilidad limitada</strong>: los accionistas solo responden hasta el monto de su aporte.</p>
      <ul>
        <li>Ideal para empresas con proyección de crecimiento o apertura de capital</li>
        <li>Permite emitir acciones y distribuirlas libremente</li>
        <li>Administración por directorio (más compleja y costosa)</li>
        <li>Trámite ante IGJ más extenso</li>
      </ul>

      <h3>Sociedad de Responsabilidad Limitada (SRL)</h3>
      <p>La SRL es la opción preferida por PyMEs y negocios familiares. <strong>Admite entre 2 y 50 socios</strong> (cuotapartistas). La responsabilidad también es limitada al capital aportado.</p>
      <ul>
        <li>Estructura más simple que la SA</li>
        <li>Administración a cargo de gerentes (pueden ser los mismos socios)</li>
        <li>Las cuotas partes no se transfieren libremente</li>
        <li>Muy utilizada en comercios, estudios profesionales y servicios</li>
      </ul>

      <h3>Sociedad por Acciones Simplificada (SAS)</h3>
      <p>Creada por la Ley 27.349, la SAS es la estructura más moderna y ágil. <strong>Puede constituirse con un solo socio</strong> y el trámite es 100% digital ante la IGJ.</p>
      <ul>
        <li>Constitución en 24 a 72 horas hábiles</li>
        <li>Capital mínimo equivalente a 2 salarios mínimos</li>
        <li>Ideal para startups, freelancers y emprendedores digitales</li>
      </ul>

      <h3>Sociedad Anónima Unipersonal (SAU)</h3>
      <p>La SAU es una Sociedad Anónima con un único accionista. <strong>Pensada para quien quiere la solidez jurídica de una SA sin la obligación de sumar socios.</strong></p>
      <ul>
        <li>Un solo socio, responsabilidad limitada</li>
        <li>Mismos requisitos formales que la SA</li>
        <li>Mayor costo de mantenimiento que la SAS</li>
      </ul>

      <h3>¿Cuál elegir?</h3>
      <p>La decisión depende de múltiples factores: cantidad de socios, sector, proyección de facturación y complejidad administrativa tolerable. En Guzmán & Asociados analizamos cada caso y te asesoramos en la estructura más conveniente, gestionando el trámite completo ante la IGJ.</p>
    `
  }

];

// ── Auto-sort: newest first ──
const MONTH_ORDER = {
  'Enero':1,'Febrero':2,'Marzo':3,'Abril':4,'Mayo':5,'Junio':6,
  'Julio':7,'Agosto':8,'Septiembre':9,'Octubre':10,'Noviembre':11,'Diciembre':12
};
ARTICLES.sort((a, b) => {
  const [am, ay] = a.date.split(' ');
  const [bm, by] = b.date.split(' ');
  if (ay !== by) return parseInt(by) - parseInt(ay);
  return MONTH_ORDER[bm] - MONTH_ORDER[am];
});
