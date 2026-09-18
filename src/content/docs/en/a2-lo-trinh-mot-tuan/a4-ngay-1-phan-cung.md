---
title: "A4 · Day 1 — Mastering the hardware"
description: "Layer 1. Use the GenFarmer software at a basic level to get a feel for how it works. Done when 20/20 phones show up and the phone responds when you toggle the flashlight."
---

**Layer 1 · Boxphone**

> **Question of the day:** Do the phones obey me?
>
> Day 1: use the GenFarmer software at a basic level to get a feel for how it works.

**Download the software → Set up the box + router → Use the software manually at a basic level**

## Steps

### Download the software

Download the GenFarmer software from [genfarmer.com/download](https://genfarmer.com/download/) and install it. _User Manual (HDSD) p. 1_

### Log in

Click the avatar icon and choose **Login**. If you do not have an account yet, register first. _HDSD p. 2–3_

### Choose the connection mode that matches your equipment

This is where most people get stuck, so read carefully.

| You have                               | Mode         | Why                                                                |
| -------------------------------------- | ------------ | ------------------------------------------------------------------ |
| **1 box + GenRouter H3000**            | **USB**      | The H3000 can only drive **1 box**; in practice it cannot handle 2 |
| **Mini PC** (even with just 1–2 boxes) | **OTG**      | The phones use the mini PC's network, so OTG is the default        |
| **No mini PC, no H3000**               | OTG or Wi-Fi | Flexible, depending on your needs                                  |

**USB mode — H3000**

Plug it in and it is detected automatically. _HDSD p. 8_

**OTG mode — mini PC**

1. Add the two address ranges `192.168.4.1–255` and `192.168.5.1–255`.
2. Click **Active**.
3. Click **Scan**. _HDSD p. 4–7_

:::note
In OTG mode, **the phones already have internet access** through the mini PC.
:::

**OTG is plugged in but the phone still has no internet — check in this order:**

1. **Proxy** — is the proxy working?
2. If the proxy is fine, check the **time on the phone** — if it is wrong, correct it; you can match it to the time on your PC.

:::note
The HDSD shows three wiring diagrams side by side. Pick the one that matches the table above; you do not need to do all three.
:::

### Use the GenFarmer software manually at a basic level

The **Control Center** section. _HDSD p. 4–7_

### Turn on Wi-Fi automatically on all 20 phones

:::note
See the procedure in the [GenFarmer video tutorial playlist](https://www.youtube.com/watch?v=dWUFV9oCnL0\&list=PLDKj59ZxjjPzvYAxEBUXjYxkUAG624lBu\&index=10). A dedicated guide for this step will be added; if you need it right now, [contact support](/en/lien-he-ho-tro).
:::

### Change the system time on the phones

Match it to the time zone you are using — you can match it to the time on your PC.

:::note
See the procedure in the [GenFarmer video tutorial playlist](https://www.youtube.com/watch?v=dWUFV9oCnL0\&list=PLDKj59ZxjjPzvYAxEBUXjYxkUAG624lBu\&index=10). A dedicated guide for this step will be added; if you need it right now, [contact support](/en/lien-he-ho-tro).
:::

### Toggle the flashlight on any one phone

This is the smallest yet clearest test: if the phone responds within a few seconds, the control path is working.

:::note
See the procedure in the [GenFarmer video tutorial playlist](https://www.youtube.com/watch?v=dWUFV9oCnL0\&list=PLDKj59ZxjjPzvYAxEBUXjYxkUAG624lBu\&index=10). A dedicated guide for this step will be added; if you need it right now, [contact support](/en/lien-he-ho-tro).
:::

### Try synchronized actions

Tap on one phone and watch all 20 phones follow.

:::note
See the procedure in the [GenFarmer video tutorial playlist](https://www.youtube.com/watch?v=dWUFV9oCnL0\&list=PLDKj59ZxjjPzvYAxEBUXjYxkUAG624lBu\&index=10). A dedicated guide for this step will be added; if you need it right now, [contact support](/en/lien-he-ho-tro).
:::

### Spend 15 minutes tapping around on a few phones by hand

This step looks like a waste of time, but it is not — [Day 3](/en/a2-lo-trinh-mot-tuan/a6-ngay-3-tu-dong) relies entirely on this feel.

### Optional: try a few adb commands

If you have a technical background. Skipping this changes nothing.

## Done when

:::tip
**20 out of 20 phones** appear on screen, all of them are connected to Wi-Fi, and the phone responds when you toggle the flashlight.
:::

:::danger
If you are not there yet, stop here and **do not move on to Day 2**. [Contact support](/en/lien-he-ho-tro) with this information: how many boxes you use, USB or OTG mode, and how many phones Scan finds.
:::

## Three common mistakes

| ✕ | Mistake                                         | Cause / fix                                                                                                   |
| - | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 1 | Scan finds no phones                            | Almost always because both address ranges were not added, or they were added but **Active** was never clicked |
| 2 | OTG is plugged in but the phone has no internet | Check the proxy first; if the proxy is fine, check the time on the phone                                      |
| 3 | Using an H3000 for 2 boxes                      | The H3000 can only drive 1 box. From 2 boxes up you need a mini PC and OTG mode                               |

:::note
The control computer **does not need Wi-Fi** — you can turn Wi-Fi off and connect over LAN; it works just the same (for both the H3000 and the mini PC). Wi-Fi does not apply to the mini PC.
:::

Next: [A5 · Day 2 — Mastering identity](/en/a2-lo-trinh-mot-tuan/a5-ngay-2-danh-tinh)
