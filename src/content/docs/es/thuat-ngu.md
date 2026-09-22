---
title: "Glosario"
description: "Los términos que aparecen en el curso y en el Manual de usuario (HDSD), explicados brevemente tal como los usa el sistema GenFarmer."
---

Si encuentras un término que no entiendes mientras lees, búscalo aquí y vuelve a la página en la que estabas. Está organizado según las cuatro capas del sistema — consulta [A1 · Las cuatro capas del sistema](/es/a1-bon-lop-he-thong).

<figure><img src="/images/16-thuat-ngu-dien-thoai.jpg" alt="Boxphone y sus partes" loading="lazy" /><figcaption>El boxphone y las partes mencionadas en el glosario.</figcaption></figure>

## Capa 1 · Equipo

| Término                  | Significado                                                                                                                                                                       | Aparece en |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Box / Boxphone**       | Caja de hardware que contiene varios teléfonos (normalmente 20), comprada a GenFarmer.                                                                                            | A1, A4     |
| **GenFarmer Software**   | Programa que se instala en el PC para controlar todos los teléfonos del box. Descárgalo en [genfarmer.com/download](https://genfarmer.com/download/).                             | A4         |
| **Control Center**       | Pantalla de control manual del software: pulsar, escribir y operar en un teléfono o en varios a la vez.                                                                           | A4         |
| **Modo USB**             | Forma de conexión cuando se usa 1 box con GenRouter H3000. Al conectarlo se reconoce solo.                                                                                        | A4         |
| **Modo OTG**             | Forma de conexión cuando se usa un mini PC. Hay que agregar dos rangos de direcciones, pulsar Active y luego Scan. En este modo los teléfonos ya tienen red a través del mini PC. | A4         |
| **Rango de direcciones** | Los dos rangos de direcciones de red `192.168.4.1–255` y `192.168.5.1–255` que hay que declarar en modo OTG para que el software encuentre los teléfonos.                         | A4         |
| **Active / Scan**        | Active: activa el rango de direcciones agregado. Scan: busca los teléfonos. Olvidar pulsar Active es la causa más común de que Scan no encuentre ningún teléfono.                 | A4         |
| **Device ID**            | Identificador de cada teléfono, visible en la pantalla principal; se usa para asignar un teléfono a una cuenta en Account Manager.                                                | A5         |
| **APK**                  | Archivo de instalación de una app Android (TikTok, Facebook…). Se instala en lote con el botón Install APK.                                                                       | A5         |
| **adb**                  | Herramienta de línea de comandos de Android para enviar órdenes directamente al teléfono. Opcional, solo para quien tiene base técnica.                                           | A4         |

## Capa 2 · Red

| Término               | Significado                                                                                                                                                              | Aparece en |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **GenRouter (H3000)** | Router de GenFarmer que da a cada teléfono una salida a internet propia. El H3000 sirve para 1 box. Panel de control en `192.168.5.1:9000`.                              | A1, A4, A5 |
| **Mini PC**           | Ordenador pequeño que sustituye al H3000 cuando hay 2 boxes o más; los teléfonos del box usan la red del mini PC (modo OTG). Necesita cable LAN Cat5/Cat6.               | A3, A4     |
| **Proxy**             | La "dirección de casa" de una cuenta en internet. Cada teléfono / cada cuenta necesita su propio proxy; compartirlo es la causa de que las cuentas se bloqueen en grupo. | A5         |
| **Isolate Mode**      | Modo de GenRouter: si el proxy de un teléfono se cae, corta de inmediato la red de ese teléfono para no exponer la dirección real.                                       | A5         |

## Capa 3 · Identidad

| Término                         | Significado                                                                                                                                                                                              | Aparece en |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Cuenta (account)**            | Cuenta en la plataforma (TikTok, Facebook…). En el sistema, la cuenta es una identidad; el proxy es la dirección de casa de esa identidad.                                                               | A5         |
| **UID \| Password \| 2FA**      | Formato por defecto al cargar cuentas en la tabla: identificador de la cuenta, contraseña y código de verificación en dos pasos, separados por barras verticales. Se puede cambiar en la sección Custom. | A5         |
| **Account Manager**             | Pantalla de gestión de cuentas: donde cargas la tabla de cuentas, asignas el Device ID y (desde el Día 3) eliges qué cuenta ejecuta qué script.                                                          | A5, A6     |
| **Verificación (verification)** | La plataforma exige demostrar la titularidad de la cuenta (código OTP, foto, video…). Que pidan verificación más de lo normal es una señal para detenerse.                                               | A5, A7     |
| **Calentar / reposar cuentas**  | Fase de 2–4 semanas para que la cuenta adquiera hábitos como una persona real antes de usarla para su fin principal. Que las cifras suban despacio en esta fase es normal.                               | A5, A6, A7 |

## Capa 4 · Automatización

| Término                                         | Significado                                                                                                                                                            | Aparece en |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Script**                                      | Secuencia de acciones grabada para que el teléfono la ejecute solo, en varios teléfonos a la vez. No hace falta programar.                                             | A6         |
| **Paquete de automatización (package) / Store** | Conjunto de scripts listos para cada plataforma, que se descarga en la sección Store del software.                                                                     | A1, A6     |
| **Auto Login**                                  | Herramienta para iniciar / cerrar sesión en lote.                                                                                                                      | A6         |
| **Trust**                                       | Herramienta para calentar cuentas: el teléfono ve, navega, da me gusta y sigue perfiles como una persona real con intereses definidos. Se ejecuta durante 2–4 semanas. | A6         |
| **Boost**                                       | Herramienta para impulsar interacciones en una publicación concreta. Solo se usa después de calentar lo suficiente.                                                    | A6         |
| **API key de vilao.ai**                         | Clave para los comentarios automáticos (la IA escribe los comentarios). Se prepara desde el Día 0.                                                                     | A3, A6     |
| **Nicho de contenido**                          | Tema con el que se calienta la cuenta. Si lo eliges mal, las publicaciones no llegan a las personas correctas.                                                         | A7         |

## General

| Término          | Significado                                                                                                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **HDSD**         | Manual de usuario completo de GenFarmer (141 páginas). Este curso te indica la página exacta que debes abrir. Mira también el [video tutorial](https://youtu.be/dWUFV9oCnL0). |
| **Parte A**      | Nombre de este curso (páginas A1–A7), con numeración propia para no desfasar la numeración del HDSD.                                                                          |
| **Listo cuando** | Criterio para dar por terminado cada día. Si no lo cumples, quédate en ese día.                                                                                               |
| **Próximamente** | La guía detallada de esa parte aún se está escribiendo. Si la necesitas ya, [contacta a soporte](/es/lien-he-ho-tro).                                                             |
