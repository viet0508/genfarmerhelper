---
title: "A3 · Día 0 — Preparación"
description: "Hazlo antes de que llegue el pedido. Aún no hace falta enchufar nada — solo tener todo lo de abajo antes de empezar el Día 1."
---

Hazlo antes de que llegue el pedido. Los tres primeros días son los más emocionantes; no dejes que se pierdan esperando a comprar proxies.

> **Pregunta del día:** ¿Qué necesito tener preparado?
>
> Aún no hace falta enchufar nada. Solo necesitas tener listos los puntos de abajo antes de empezar el Día 1.

<figure><img src="/images/09-a3-tu-boxphone.jpg" alt="Gabinete boxphone GenFarmer" loading="lazy" /><figcaption>Un gabinete boxphone real. Ponlo en un lugar ventilado, a unos 10 cm de la pared, en un enchufe propio.</figcaption></figure>

**Lugar para el box + corriente independiente → Red por cable + PC de control → Comprar cuentas + proxies de prueba → Grabar el video de desembalaje**

## Preparación

* [ ] **Lugar para el box** — una habitación ventilada o con aire acondicionado, a unos 10 cm de la pared para que respire por los cuatro lados. No lo pongas en el suelo, ni dentro de un armario cerrado, ni junto a una ventana con sol directo.
* [ ] **Fuente de corriente independiente** — no lo conectes al mismo enchufe que el aire acondicionado, el horno o la lavadora. Conviene tener un UPS de 1.000 VA o más para que el sistema no se apague de golpe si se va la luz. Ten preparado un **enchufe de 3 clavijas** si aún no lo tienes.
* [ ] **Conexión de red por cable** — un puerto libre en el módem para el GenRouter.
* [ ] **Cable LAN** (si usas mini PC) — Cat5 o **Cat6 (preferible)**.
* [ ] **PC de control** — **no es obligatorio que tenga wifi**; conectado por LAN funciona igual. Los detalles de conexión están en la tabla de abajo.
* [ ] **5 cuentas y 5 proxies para probar** — cómpralos con antelación, no esperes a necesitarlos. Todavía no hace falta comprar 20 cuentas.
* [ ] **API key de vilao.ai** — se usa para los comentarios automáticos. Por defecto se usa el modelo ya configurado en el script; puedes cambiar a otro modelo de IA dentro de vilao si lo necesitas. La comisión es de aproximadamente **2% ≈ 50.000 VND**, suficiente para usarlo sin preocuparte. Regístrate y obtén la key en [vilao.ai/console](https://vilao.ai/console) — [guía paso a paso](https://drive.google.com/file/d/1f6s_gKAHptXNBoKldlCpfNDh0cWhd4l2/view?usp=drive_link).
* [ ] **Video de desembalaje** — graba el momento en que abres el paquete, con los sellos intactos. Es tu prueba de garantía si hay un defecto de fábrica.

### Cómo conectar el PC de control

| Usas                | Cómo conectarlo                                                                                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **GenRouter H3000** | Si el PC tiene wifi, conéctate por wifi. Si no, usa LAN: **puerto LAN del H3000 → Ethernet del PC**, o **LAN del boxphone → Ethernet del PC** (en este caso conecta el puerto LAN del H3000 → LAN1 o LAN2 del boxphone, y del LAN restante al PC — aplica al box **P30**). |
| **Mini PC**         | Conexión por LAN. El wifi **no aplica** para mini PC. Si tu laptop no tiene puerto Ethernet, prepara un adaptador **USB a LAN** o **Type-C a LAN**.                                                                                                                        |

:::caution
En el Manual de usuario (HDSD), _pág. 30–39_, la sección de la API key todavía dice **"Apple Key"** / Gemini — es la versión antigua. Actualmente el sistema usa la **API de vilao.ai**; sigue las instrucciones de esta página.
:::

<figure><img src="/images/10-a3-mini-pc.jpg" alt="Mini PC GenRouter" loading="lazy" /><figcaption>El mini PC GenRouter. Con mini PC debes conectar el PC por cable LAN.</figcaption></figure>

## Listo cuando

:::tip
Tienes todos los puntos anteriores. No pasa nada si aún no has enchufado nada.
:::

## Tres errores frecuentes

| ✕ | Error                                                                                                | Consecuencia                                                       |
| - | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 1 | Poner el box en un armario cerrado o debajo de la mesa para que ocupe menos                          | El calor no se disipa y los teléfonos reducen su rendimiento solos |
| 2 | Compartir el enchufe con aparatos de alta potencia                                                   | El sistema se cae en plena ejecución                               |
| 3 | Comprar un mini PC sin preparar el cable LAN, o tener una laptop sin puerto Ethernet y sin adaptador | Llega el pedido y sigues sin poder conectar el PC al sistema       |

Siguiente: [A4 · Día 1 — Domina el hardware](/es/a2-lo-trinh-mot-tuan/a4-ngay-1-phan-cung)
