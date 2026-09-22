---
title: "A4 · Día 1 — Domina el hardware"
description: "Capa 1. Uso básico de GenFarmer Software para entender cómo funciona el programa. Listo cuando aparecen 20/20 teléfonos y responden al pulsar la linterna."
---

**Capa 1 · Boxphone**

> **Pregunta del día:** ¿El equipo me obedece?
>
> Día 1: uso básico de la app GenFarmer Software para entender cómo funciona el programa.

<figure><img src="/images/11-a4-dan-boxphone.jpg" alt="Batería de boxphones GenFarmer" loading="lazy" /><figcaption>Una batería de boxphones real. Al final del Día 1 la controlas toda desde un PC.</figcaption></figure>

**Descargar el software → Configurar box + router → Uso manual básico del software**

## Pasos

### Descarga el software

Descarga el software GenFarmer en [genfarmer.com/download](https://genfarmer.com/download/) e instálalo. _Manual de usuario (HDSD), pág. 1_

### Inicia sesión

Pulsa el icono del avatar y elige **Login**. Si aún no tienes cuenta, regístrate primero. _HDSD pág. 2–3_

### Elige el modo de conexión según el equipo que tienes

Aquí es donde más gente se atasca, así que léelo con atención.

| Tienes                                     | Modo       | Motivo                                                                  |
| ------------------------------------------ | ---------- | ----------------------------------------------------------------------- |
| **1 box + GenRouter H3000**                | **USB**    | El H3000 solo soporta **1 box**; en la práctica no aguanta 2            |
| **Mini PC** (aunque solo tengas 1–2 boxes) | **OTG**    | Los teléfonos usan la red del mini PC, así que por defecto debe ser OTG |
| **Sin mini PC ni H3000**                   | OTG o wifi | Flexible según tus necesidades                                          |

**Modo USB — H3000**

Al conectarlo se reconoce solo. _HDSD pág. 8_

**Modo OTG — mini PC**

1. Agrega los dos rangos de direcciones `192.168.4.1–255` y `192.168.5.1–255`.
2. Pulsa **Active**.
3. Pulsa **Scan**. _HDSD pág. 4–7_

:::note
En modo OTG, **los teléfonos ya tienen red** a través del mini PC.
:::

**Si conectas por OTG y el teléfono sigue sin red, revisa en este orden:**

1. **Proxy** — comprueba que el proxy funcione.
2. Si el proxy está bien, revisa la **hora del teléfono** — si está mal, corrígela; puedes ajustarla a la misma hora de tu PC.

:::note
El HDSD tiene tres diagramas de conexión seguidos. Elige el diagrama según la tabla de arriba; no hace falta hacer los tres.
:::

### Uso manual básico de GenFarmer Software

<figure><img src="/images/12-a4-control-center.jpg" alt="Pantalla Control Center" loading="lazy" /><figcaption>El Control Center: aquí aparecen los 20 teléfonos. Pulsa Scan para buscarlos y Active para activarlos.</figcaption></figure>

Sección **Control Center**. _HDSD pág. 4–7_

### Activa el wifi automáticamente en los 20 teléfonos

:::note
Mira el procedimiento en la [lista de reproducción de videos tutoriales de GenFarmer](https://www.youtube.com/watch?v=dWUFV9oCnL0\&list=PLDKj59ZxjjPzvYAxEBUXjYxkUAG624lBu\&index=10). La guía específica de este paso se añadirá más adelante; si la necesitas ya, [contacta a soporte](/es/lien-he-ho-tro).
:::

### Cambia la hora del sistema en los teléfonos

Para que coincida con la zona horaria que usas — puedes ajustarla a la misma hora de tu PC.

:::note
Mira el procedimiento en la [lista de reproducción de videos tutoriales de GenFarmer](https://www.youtube.com/watch?v=dWUFV9oCnL0\&list=PLDKj59ZxjjPzvYAxEBUXjYxkUAG624lBu\&index=10). La guía específica de este paso se añadirá más adelante; si la necesitas ya, [contacta a soporte](/es/lien-he-ho-tro).
:::

### Enciende y apaga la linterna en cualquier teléfono

Es la prueba más pequeña y más clara: si el teléfono responde en pocos segundos, el canal de control está funcionando.

:::note
Mira el procedimiento en la [lista de reproducción de videos tutoriales de GenFarmer](https://www.youtube.com/watch?v=dWUFV9oCnL0\&list=PLDKj59ZxjjPzvYAxEBUXjYxkUAG624lBu\&index=10). La guía específica de este paso se añadirá más adelante; si la necesitas ya, [contacta a soporte](/es/lien-he-ho-tro).
:::

### Prueba la sincronización de acciones

Pulsa en un teléfono y observa cómo los 20 hacen lo mismo.

:::note
Mira el procedimiento en la [lista de reproducción de videos tutoriales de GenFarmer](https://www.youtube.com/watch?v=dWUFV9oCnL0\&list=PLDKj59ZxjjPzvYAxEBUXjYxkUAG624lBu\&index=10). La guía específica de este paso se añadirá más adelante; si la necesitas ya, [contacta a soporte](/es/lien-he-ho-tro).
:::

### Dedica 15 minutos a manejar algunos teléfonos a mano para soltarte

Este paso parece una pérdida de tiempo, pero no lo es — el [Día 3](/es/a2-lo-trinh-mot-tuan/a6-ngay-3-tu-dong) se apoya por completo en esta experiencia.

### Opcional: prueba algunos comandos adb

Si tienes base técnica. Si no lo pruebas, no pasa nada.

## Listo cuando

:::tip
**20 de 20 teléfonos** aparecen en pantalla, todos se conectan al wifi y responden al pulsar la linterna.
:::

:::danger
Si no lo cumples, detente aquí y **no pases al Día 2**. [Contacta a soporte](/es/lien-he-ho-tro) con esta información: cuántos boxes usas, si estás en modo USB u OTG, y cuántos teléfonos aparecen al pulsar Scan.
:::

## Tres errores frecuentes

| ✕ | Error                                       | Causa / solución                                                                                                    |
| - | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 1 | Al pulsar Scan no aparece ningún teléfono   | Casi siempre es porque no agregaste los dos rangos de direcciones, o los agregaste pero olvidaste pulsar **Active** |
| 2 | Conectas por OTG y el teléfono no tiene red | Revisa primero el proxy; si el proxy está bien, revisa la hora del teléfono                                         |
| 3 | Usar el H3000 con 2 boxes                   | El H3000 solo soporta 1 box. A partir de 2 boxes necesitas un mini PC y conexión OTG                                |

:::note
El PC de control **no necesita tener wifi** — puedes apagar el wifi y usar LAN sin problema (tanto con H3000 como con mini PC). El wifi no aplica para mini PC.
:::

Siguiente: [A5 · Día 2 — Domina la identidad](/es/a2-lo-trinh-mot-tuan/a5-ngay-2-danh-tinh)
