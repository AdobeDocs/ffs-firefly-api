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
  - upscale
  - Upscale API
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

[Composite Operations APIs](#composite-operations-apis)

Blend product shots and objects into generated scenes with complementing tones, colors, lighting, shadows, and textures.

<DiscoverBlock slots="link, text"/>

[Upscale API (beta)](#upscale-api-beta)

Enhance image resolution and quality at scale with the Upscale API (beta).

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

### What's new with Image Model 5?

The Image5 model is Firefly's latest model and is a leap forward in realism, lighting, and composition with native 4 MP resolution for sharper, more expressive results across photography, text, and illustration.​

It also supports the new Instruct Edit capability, which enables users to generate and refine in one seamless workflow using natural language to make precise and intuitive edits.​

If you've already implemented image generation with the Firefly API, you can migrate to the Image5 model by following the [Migrating to Image5](/guides/how-tos/cm-generate-image/breaking-changes.md) guide.

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

## Upscale API (beta)

Enhance image resolution and quality quickly and effortlessly, without pixelation or retakes.

Demand for high-resolution images is growing across digital platforms, but traditional upscaling often causes pixelation and quality loss. The Upscale API delivers automated image enhancement that saves time and resources. Integrate it into Adobe products or use it in your own workflows to improve image quality where it matters, while keeping details crisp and accurate.

### What can the Upscale API do?

Upsampling use-cases include:

**User Assets Upsampler**: Increase the resolution of your own photos and artwork while preserving detail and avoiding artificial or hallucinated content. Use this use-case to:

- **Preserve the original**: Follow the source image closely and avoid introducing new or artificial elements.
- **Transform low-resolution sources**: Turn small or low-quality images into high-resolution versions suitable for print, display, or downstream workflows.
- **Support multiple scale factors**: Upsample to 2×, 4×, or 6× depending on your needs.

**Generated Image Upsampler**: Maintain crispness and correct fine details in images created by generative AI (e.g., textures, patterns) when zooming in.This capability focuses on two dimensions of quality:

- **Crispness**: The upscaled image retains the sharpness of the original generation.
- **Correctness**: Fine details (e.g., textures like flowers, grass, or fabric) stay coherent when you zoom in, instead of breaking down into a messy or blurry appearance.

**MD Upsampler (Fill & Expand)**: Upscale only the generated parts of an image (from fill or expand) so they match the sharpness and quality of the rest of the image.This capability lets you:

- **Match the original resolution**: Upscale the generated section so it matches the crispness of the surrounding image.
- **Improve correctness**: Refine details in the generated area (e.g., textures, edges) so they look correct when zooming in, not like a disorderly or blurry mass.
- **Create a seamless result**: Make it much less obvious which part of the image was created with Firefly—so the full image feels cohesive.

To get started, see [Getting Started](getting-started/index.md) for authentication and setup, and the [API Reference](api/index.md) for Upscale endpoints and schemas.

## Discover

<DiscoverBlock slots="link, text"/>

[Quickstart Guide](guides/index.md)

A quickstart guide to making your first successful Firefly API call.

<DiscoverBlock slots="link, text"/>

[Try the API](api/index.md)

Try the Adobe Firefly API. Explore, make calls, with full endpoint descriptions.
