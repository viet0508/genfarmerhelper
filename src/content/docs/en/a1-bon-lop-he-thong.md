---
title: "A1 · The four layers of the system"
description: "Read this page first. When something goes wrong, the first job is not to fix it, but to work out which layer is broken."
---

Read this page first. When something goes wrong, the first thing to do is not to fix it, but to **work out which layer is broken**. Once you know the layer, the problem is already half solved.

#### LAYER 1 · Boxphone

![LAYER 1 · Boxphone](/images/layer1-boxphone.jpg)

This is the hardware you bought from GenFarmer.

#### LAYER 2 · Router

![LAYER 2 · Router](/images/layer2-genrouter.jpg)

GenRouter gives each phone its own internet route, nothing shared. GenRouter H3000 serves 1 box; for 2 or more boxes, use a mini PC.

#### LAYER 3 · Account + Proxy

![LAYER 3 · Account + Proxy](/images/layer3-account-proxy.jpg)

This is what you need to prepare before launching your phone farm.

#### LAYER 4 · Automation

![LAYER 4 · Automation](/images/layer4-automation.jpg)

Ready-made scripts for logging in, warming up accounts and boosting engagement, bundled by GenFarmer into packages. If you have not bought one yet, contact GenFarmer sales on WhatsApp [+84 97 123 46 01](https://wa.me/84971234601) or in the [customer community](https://chat.whatsapp.com/J8bchy0IIwREeAI1z7Jmvo?mode=gi_t). If you do not want automation, you can do everything by hand.

```mermaid
graph LR
    L1["LAYER 1<br/>Boxphone<br/><i>hardware</i>"] --> L2["LAYER 2<br/>Router<br/><i>one network route per phone</i>"]
    L2 --> L3["LAYER 3<br/>Account + Proxy<br/><i>identity</i>"]
    L3 --> L4["LAYER 4<br/>Automation<br/><i>scripts</i>"]
```

:::caution
The five days of the roadmap follow these four layers in order: **devices first, then network and identity, scripts last.** Do not skip ahead, because each layer is built on the one before it.
:::

## Which layer — which day

| Layer | Name            | Learned on                                                                                             | Typical problems                                                      |
| ----- | --------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 1     | Boxphone        | [Day 1](/en/a2-lo-trinh-mot-tuan/a4-ngay-1-phan-cung)                                                      | Scan finds no phones, black screen                                    |
| 2     | Router          | [Day 2](/en/a2-lo-trinh-mot-tuan/a5-ngay-2-danh-tinh)                                                      | Phones show up but cannot get online, accounts get banned in clusters |
| 3     | Account + Proxy | [Day 2](/en/a2-lo-trinh-mot-tuan/a5-ngay-2-danh-tinh)                                                      | Asked for verification, nobody sees your posts                        |
| 4     | Automation      | [Day 3](/en/a2-lo-trinh-mot-tuan/a6-ngay-3-tu-dong) · [Day 4–5](/en/a2-lo-trinh-mot-tuan/a7-ngay-4-5-nen-tang) | Scripts run but the numbers do not move, wrong app installed          |

When you need a quick lookup based on what you are seeing on screen, use [Troubleshoot by symptom](/en/tra-cuu-theo-trieu-chung).
