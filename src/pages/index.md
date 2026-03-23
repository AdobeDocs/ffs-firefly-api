---
title: Overview - Adobe Firefly API
description: An overview of the Adobe Firefly API
keywords:
  - Adobe Firefly Services
  - Firefly API
  - Firefly Developer documentation
  - Firefly API documentation
  - Creative workflows
  - Generative AI
  - Adobe workflows
  - Firefly automation
  - Firefly code example
  - Application development with Firefly
  - Adobe Firefly
  - Firefly software development kit (SDK)
  - JavaScript framework
  - Adobe Experience Platform
  - Firefly API endpoints
  - Firefly authentication and authorization
  - Custom Models
  - Custom Models API
  - brand-aligned image generation
contributors:
  - https://github.com/amandahuarng
  - https://github.com/nimithajalal
  - https://github.com/hollyschinsky
hideBreadcrumbNav: true
---

<Superhero slots="image, heading, text" background="rgb(80, 190, 233)"/>

![Firefly API banner image](/firefly-image-hero.jpg)

# Adobe Firefly API - Firefly Services

The Adobe Firefly API makes it easy for you to integrate generative AI into your creative workflows.

This is the user documentation for Adobe Firefly API. Firefly is the natural extension of the technology Adobe has produced over the past 40 years, driven by the belief that people should be empowered to bring their ideas into the world precisely as they imagine them. Describe your creative vision in your own words and we will bring it to life, saving you time and effort.

With Firefly, you can ideate, create, and communicate while significantly improving creative workflows using generative AI. You might have already tried out the Firefly web app, along with features powered by Firefly in Adobe’s flagship apps and Adobe Stock. And now it is available to you as an API. Integrate them with your workflow as it suits your needs.

<DiscoverBlock slots="link, text"/>

[Custom Models](#custom-models-api)

Generate brand-aligned image variations at scale

<DiscoverBlock slots="link, text"/>

[Object Composite](#object-composite-api)

Blend product shots and objects into generated scenes with complementing tones, colors, lighting, shadows, and textures.

## Custom Models API

Generate brand-aligned image variations at scale with Firefly's Custom Models API. Train models on your brand's aesthetics, characters, or products and use them in your API requests to keep visuals consistent across campaigns and channels.

### What is the Custom Models API?

The Custom Models API lets you:

- **Train subject or style models** — Capture specific characters, products, or objects (subject models) or aesthetic qualities like color palettes, patterns, and illustrative style (style models) so generated images match your brand.
- **Generate images with a custom model** — Call the Generate Image API with a custom model asset ID so outputs reflect your model's learned characteristics.
- **Use style presets and controls** — Combine custom models with style presets and image size parameters for fine-tuned, on-brand results.
- **Manage and share models** — Each custom model has a unique asset ID for versioning and reuse; you can grant applications access so they can list and use your models via the API.

### Why choose Custom Models?

- **Scale brand-consistent visuals** — Replicate distinctive brand look and feel across many images without manual art direction.
- **Consistent characters and products** — Keep mascots, products, or key objects recognizable in any scenario you prompt.
- **Secure hosting and reuse** — Models are hosted by Adobe with clear versioning; reference them by asset ID in your workflows and share them with your technical accounts as needed.

To get started, see the [Custom Models overview](guides/concepts/custom-models/index.md), the [Custom Models Generate Image API tutorial](guides/how-tos/cm-generate-image/index.md), and [Grant apps access to a Custom Model](guides/how-tos/cm-share-model/index.md).

## Composite Operations APIs

Blend product shots and objects into generated scenes with complementing tones, colors, lighting, shadows, and textures.

This service offers the Object Composite API, **Adaptive Composite**, and **Precise Composite**.

Composites with Adobe Firefly allows you to upload an image, such as a product photo, and use a text prompt to generate a composited scene for the product.

The Composite Operations APIs can be used to:

- Create captivating product shots with different setups, backgrounds, and visual design variations.
- Generate engaging social media creatives with custom images and product photos.
- Help customers visualize scenarios by showcasing the product in different settings and environments.

### What are the Composite Operations APIs?

The Precise Composite API is improved over previous versions of the service in the following ways:

- **Higher Fidelity and Realism** - The new ME model significantly outperforms the previous MD model in object-edge accuracy, lighting realism, and contextual scene generation.
  
- **Enhanced Masking** - Enhanced masking (leveraging the latest Photoshop mask models) eliminates the "halo" effect common in v3 outputs.

- **True Visual Integration via Harmonization** - Generative Harmonization reintroduces and enhances lighting and shadow correction for composite realism. Developers can control harmonization strength (0–100%) or toggle the feature off entirely to fine-tune visual output.

Use Adaptive Composite to:

- **Bring-Your-Own-Background to Adaptive Composite** - Using Adaptive Composite, customers can now composite products into existing or custom-generated backgrounds—such as brand-specific environments produced with Firefly Custom Models. This allows greater creative control, brand consistency, and multi-scene reuse across campaigns.

- **Intelligent Object Rotation** - The Adaptive Composite model analyzes the target background and automatically adjusts the object's rotation to match environmental cues (for example, perspective or lighting direction).

To get started, see the [Object Composite API Feature Guide](guides/how-tos/object-composite/index.md).

## Discover

<DiscoverBlock slots="link, text"/>

[Quickstart Guide](guides/index.md)

A quickstart guide to making your first successful Firefly API call.

<DiscoverBlock slots="link, text"/>

[Try the API](api/index.md)

Try the Adobe Firefly API. Explore, make calls, with full endpoint descriptions.
