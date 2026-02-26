---
title: Style Presets - Adobe Firefly APIs
description: A guide to using style presets with the Firefly Image Model APIs.
keywords:
  - Styles
  - Adobe Firefly Services
  - Firefly API
  - Developer documentation
  - generateImages
  - Style concepts
  - UI styling
  - CSS
  - Design system
  - Styling guidelines
  - Theme customization
  - User interface design
  - Responsive design
  - Custom styles
  - Style overrides
  - Design tokens
  - CSS variables
contributors:
  - 'https://github.com/bishoysefin'
  - 'https://github.com/amandahuarng'
  - 'https://github.com/nimithajalal'
  - 'https://github.com/hollyschinsky'
hideBreadcrumbNav: true
og:
  title: Style Presets - Adobe Firefly APIs
  description: A guide to using style presets with the Firefly Image Model APIs.
twitter:
  card: summary
  title: Style Presets - Adobe Firefly APIs
  description: A guide to using style presets with the Firefly Image Model APIs.
---

# Style Presets

Use style presets to customize the look and feel of your generated images.

## Understanding style presets

Firefly offers a collection of style presets to use with the [Generate Images API][1] that can give generated images a specific visual style or mood. By indicating these presets in the API request, you have more control, beyond the prompt, to create image variations.

Style presets are defined in the `presets` array in the Generate Images API request. All presets in the array apply to the generated image. To influence the impact of the presets, add or adjust the `strength` value.

<CodeBlock slots="heading, code" languages="JSON" />

Request parameter for presets

```json
// ... API request cURL ...
--data '{
    "prompt": "a puppy dressed as a renaissance artist",
    "numVariations": 4,
    "style": {
        // array of style presets for image variations
        "presets": [   
            "bw", "fantasy", "dramatic_light"
        ],
        "strength": 100
    }
}'
```

## Style Presets examples

Here are the style presets available and examples of the images they generate. Use these presets, in snake_case, in the API request.

||
| --- | --- | --- |
| ![Graphic](../../images/styles/2x/Graphic.png) graphic | ![Wireframe](../../images/styles/2x/Wireframe.png) wireframe | ![Vector look](../../images/styles/2x/Vector_look.png) vector_look
| ![Black and white](../../images/styles/2x/Black_and_white.png) bw | ![Cool tone](../../images/styles/2x/Cool_tone.png) cool_colors | ![Golden](../../images/styles/2x/Golden.png) golden
| ![Monochromatic](../../images/styles/2x/Monochromatic.png) monochromatic | ![Muted color](../../images/styles/2x/Muted_color.png) muted_color | ![Pastel color](../../images/styles/2x/Pastel_color.png) pastel_color
| ![Toned image](../../images/styles/2x/Toned_image.png) toned_image | ![Vibrant colors](../../images/styles/2x/Vibrant_colors.png) vibrant_colors | ![Warm tone](../../images/styles/2x/Warm_tone.png) warm_tone
| ![Closeup](../../images/styles/2x/Closeup.png) closeup | ![Knolling](../../images/styles/2x/Knolling.png) knolling | ![Landscape photography](../../images/styles/2x/Landscape_photography.png) landscape_photography
| ![Macrophotography](../../images/styles/2x/Macrophotography.png) macrophotography | ![Photographed through window](../../images/styles/2x/Photographed_through_window.png) photographed_through_window | ![Shallow depth of field](../../images/styles/2x/Shallow_depth_of_field.png) shallow_depth_of_field
| ![Shot from above](../../images/styles/2x/Shot_from_above.png) shot_from_above | ![Shot from below](../../images/styles/2x/Shot_from_below.png) shot_from_below | ![Surface detail](../../images/styles/2x/Surface_detail.png) surface_detail
| ![Wide angle](../../images/styles/2x/Wide_angle.png) wide_angle | ![Beautiful](../../images/styles/2x/Beautiful.png) beautiful | ![Bohemian](../../images/styles/2x/Bohemian.png) bohemian
| ![Chaotic](../../images/styles/2x/Chaotic.png) chaotic | ![Dais](../../images/styles/2x/Dais.png) dais | ![Divine](../../images/styles/2x/Divine.png) divine
| ![Eclectic](../../images/styles/2x/Eclectic.png) eclectic | ![Futuristic](../../images/styles/2x/Futuristic.png) futuristic | ![Kitschy](../../images/styles/2x/Kitschy.png) kitschy
| ![Nostalgic](../../images/styles/2x/Nostalgic.png) nostalgic | ![Simple](../../images/styles/2x/Simple.png) simple | ![Antique photo](../../images/styles/2x/Antique_photo.png) antique_photo
| ![Bioluminescent](../../images/styles/2x/Bioluminescent.png) bioluminescent | ![Bokeh effect](../../images/styles/2x/Bokeh_effect.png) bokeh | ![Color explosion](../../images/styles/2x/Color_explosion.png) color_explosion
| ![Dark](../../images/styles/2x/Dark.png) dark | ![Faded image](../../images/styles/2x/Faded_image.png) faded_image | ![Fisheye](../../images/styles/2x/Fisheye.png) fisheye
| ![Gomori photography](../../images/styles/2x/Gomori_photography.png) gomori_photography | ![Grainy film](../../images/styles/2x/Grainy_film.png) grainy_film | ![Iridescent](../../images/styles/2x/Iridescent.png) iridescent
| ![Isometric](../../images/styles/2x/Isometric.png) isometric | ![Misty](../../images/styles/2x/Misty.png) misty | ![Neon](../../images/styles/2x/Neon.png) neon
| ![Otherworldly depiction](../../images/styles/2x/Otherworldly_depiction.png) otherworldly_depiction | ![Ultraviolet](../../images/styles/2x/Ultraviolet.png) ultraviolet | ![Underwater](../../images/styles/2x/Underwater.png) underwater
| ![Backlighting](../../images/styles/2x/Backlighting.png) backlighting | ![Dramatic light](../../images/styles/2x/Dramatic_lighting.png) dramatic_light | ![Golden hour](../../images/styles/2x/Golden_hour.png) golden_hour
| ![Harsh light](../../images/styles/2x/Harsh_light.png) harsh_light | ![Long-time exposure](../../images/styles/2x/Long_time_exposure.png) long | ![Low lighting](../../images/styles/2x/Low_lighting.png) low_lighting
| ![Multiexposure](../../images/styles/2x/Multiexposure.png) multiexposure | ![Studio light](../../images/styles/2x/Studio_light.png) studio_light | ![Surreal lighting](../../images/styles/2x/Surreal_lighting.png) surreal_lighting
| ![3d patterns](../../images/styles/2x/3d_patterns.png) 3d_patterns | ![Charcoal](../../images/styles/2x/Charcoal.png) charcoal | ![Claymation](../../images/styles/2x/Claymation.png) claymation
| ![Fabric](../../images/styles/2x/Fabric.png) fabric | ![Fur](../../images/styles/2x/Fur.png) fur | ![Guilloche patterns](../../images/styles/2x/Guilloche_patterns.png) guilloche_patterns
| ![Layered paper](../../images/styles/2x/Layered_paper.png) layered_paper | ![Marble](../../images/styles/2x/Marble.png) marble_sculpture | ![Metal](../../images/styles/2x/Metal.png) made_of_metal
| ![Origami](../../images/styles/2x/Origami.png) origami | ![Paper mache](../../images/styles/2x/Paper_mache.png) paper_mache | ![Polka-dot pattern](../../images/styles/2x/Polka_dot_pattern.png) polka
| ![Strange patterns](../../images/styles/2x/Strange_patterns.png) strange_patterns | ![Wood carving](../../images/styles/2x/Wood_carving.png) wood_carving | ![Yarn](../../images/styles/2x/Yarn.png) yarn
| ![Art deco](../../images/styles/2x/Art_deco.png) art_deco | ![Art nouveau](../../images/styles/2x/Art_nouveau.png) art_nouveau | ![Baroque](../../images/styles/2x/Baroque.png) baroque
| ![Bauhaus](../../images/styles/2x/Bauhaus.png) bauhaus | ![Constructivism](../../images/styles/2x/Constructivism.png) constructivism | ![Cubism](../../images/styles/2x/Cubism.png) cubism
| ![Cyberpunk](../../images/styles/2x/Cyberpunk.png) cyberpunk | ![Fantasy](../../images/styles/2x/Fantasy.png) fantasy | ![Fauvism](../../images/styles/2x/Fauvism.png) fauvism
| ![Film noir](../../images/styles/2x/Film_noir.png) film_noir | ![Glitch art](../../images/styles/2x/Glitch_art.png) glitch_art | ![Impressionism](../../images/styles/2x/Impressionism.png) impressionism
| ![Industrial](../../images/styles/2x/Industrial.png) industrialism | ![Maximalism](../../images/styles/2x/Maximalism.png) maximalism | ![Minimalism](../../images/styles/2x/Minimalism.png) minimalism
| ![Modern art](../../images/styles/2x/Modern_art.png) modern_art | ![Modernism](../../images/styles/2x/Modernism.png) modernism | ![Neo-expressionism](../../images/styles/2x/Neoexpressionism.png) neo
| ![Pointillism](../../images/styles/2x/Pointillism.png) pointillism | ![Psychedelic](../../images/styles/2x/Psychedelic.png) psychedelic | ![Science fiction](../../images/styles/2x/Science_fiction.png) science_fiction
| ![Steampunk](../../images/styles/2x/Steampunk.png) steampunk | ![Surrealism](../../images/styles/2x/Surrealism.png) surrealism | ![Synthetism](../../images/styles/2x/Synthetism.png) synthetism
| ![Synthwave](../../images/styles/2x/Synthwave.png) synthwave | ![Vaporwave](../../images/styles/2x/Vaporwave.png) vaporwave | ![Acrylic paint](../../images/styles/2x/Acrylic_paint.png) acrylic_paint
| ![Bold lines](../../images/styles/2x/Bold_lines.png) bold_lines | ![Chiaroscuro](../../images/styles/2x/Chiaroscuro.png) chiaroscuro | ![Color shift art](../../images/styles/2x/Color_shift_art.png) color_shift_art
| ![Daguerreotype](../../images/styles/2x/Daguerreotype.png) daguerreotype | ![Digital fractal](../../images/styles/2x/Digital_fractal.png) digital_fractal | ![Doodle drawing](../../images/styles/2x/Doodle_drawing.png) doodle_drawing
| ![Double exposure](../../images/styles/2x/Double_exposure.png) double_exposure_portrait | ![Fresco](../../images/styles/2x/Fresco.png) fresco | ![Geometric pen](../../images/styles/2x/Geometric_pen.png) geometric_pen
| ![Halftone](../../images/styles/2x/Halftone.png) halftone | ![Ink](../../images/styles/2x/Ink.png) ink | ![Light painting](../../images/styles/2x/Light_painting.png) light_painting
| ![Line drawing](../../images/styles/2x/Line_drawing.png) line_drawing | ![Linocut](../../images/styles/2x/Linocut.png) linocut | ![Oil paint](../../images/styles/2x/Oil_paint.png) oil_paint
| ![Paint Spattering](../../images/styles/2x/Paint_spattering.png) paint_spattering | ![Painting](../../images/styles/2x/Painting.png) painting | ![Palette knife](../../images/styles/2x/Palette_knife.png) palette_knife
| ![Photo manipulation](../../images/styles/2x/Photo_manipulation.png) photo_manipulation | ![Scribble texture](../../images/styles/2x/Scribble_texture.png) scribble_texture |![Sketch](../../images/styles/2x/Sketch.png) sketch
| ![Splattering](../../images/styles/2x/Splattering.png) splattering | ![Stippling](../../images/styles/2x/Stippling.png) stippling_drawing | ![Watercolor](../../images/styles/2x/Watercolor.png) watercolor
| ![3d](../../images/styles/2x/3d.png) 3d | ![Anime](../../images/styles/2x/Anime.png) anime | ![Cartoon](../../images/styles/2x/Cartoon.png) cartoon
| ![Cinematic](../../images/styles/2x/Cinematic.png) cinematic | ![Comic book](../../images/styles/2x/Comic_book.png) comic_book | ![Concept art](../../images/styles/2x/Concept_art.png) concept_art
| ![Cyber matrix](../../images/styles/2x/Cyber_matrix.png) cyber_matrix | ![Digital art](../../images/styles/2x/Digital_art.png) digital_art | ![Flat design](../../images/styles/2x/Flat_design.png) flat_design
| ![Geometric](../../images/styles/2x/Geometric.png) geometric | ![Glassmorphism](../../images/styles/2x/Glassmorphism.png) glassmorphism | ![Glitch graphic](../../images/styles/2x/Glitch_graphic.png) glitch_graphic
| ![Graffiti](../../images/styles/2x/Graffiti.png) graffiti | ![Hyper realistic](../../images/styles/2x/Hyper_realistic.png) hyper_realistic | ![Interior design](../../images/styles/2x/Interior_design.png) interior_design
| ![Line gradient](../../images/styles/2x/Line_gradient.png) line_gradient | ![Low poly](../../images/styles/2x/Low_poly.png) low_poly | ![Newspaper collage](../../images/styles/2x/Newspaper_collage.png) newspaper_collage
| ![Optical illusion](../../images/styles/2x/Optical_illusion.png) optical_illusion | ![Pattern pixel](../../images/styles/2x/Pattern_pixel.png) pattern_pixel | ![Pixel art](../../images/styles/2x/Pixel_art.png) pixel_art
| ![Pop art](../../images/styles/2x/Pop_art.png) pop_art | ![Product photo](../../images/styles/2x/Product_photo.png) product_photo | ![Psychedelic background](../../images/styles/2x/Psychedelic_background.png) psychedelic_background
| ![Psychedelic wonderland](../../images/styles/2x/Psychedelic_wonderland.png) psychedelic_wonderland | ![Scandinavian](../../images/styles/2x/Scandinavian.png) scandinavian | ![Splash images](../../images/styles/2x/Splash_images.png) splash_images
| ![Stamp](../../images/styles/2x/Stamp.png) stamp | ![Trompe l'oeil](../../images/styles/2x/Trompe_loeil.png) trompe_loeil

## Concepts in action

Let's use style presets to generate a few image variations.

<InlineAlert variant="warning" slots="header, text" />

Before you start

You'll need a Firefly **Client ID** and **Access Token** for this exercise. Learn how to retrieve them in the [Authentication Guide][2]. **Securely store these credentials and never expose them in client-side or public code.**

1. First, open a secure terminal and `export` your **Client ID** and **Access Token** as environment variables:

```bash
export FIREFLY_SERVICES_CLIENT_ID=<your_Client_ID>
export FIREFLY_SERVICES_ACCESS_TOKEN=<your_Access_Token>
```

2. Next, make the request to the Generate Images API. We'll use a prompt for a Shakespearean puppy, and enter a few presets so that they apply together:

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/generate-async' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header "x-api-key: $FIREFLY_SERVICES_CLIENT_ID" \
--header "Authorization: Bearer $FIREFLY_SERVICES_ACCESS_TOKEN" \
--data '{
    "prompt": "a puppy dressed as a renaissance artist",
    "numVariations": 4,
    "style": {
        "presets": [
            "bw", "fantasy", "dramatic_light"
        ]
    }
}'
```

The request returns a rapid response for the asynchronous job:

```json
{   
    "jobId":"<YOUR_JOB_ID>",
    "statusUrl":"https://firefly-epo854211.adobe.io/v3/status/urn:ff:jobs:...",
    "cancelUrl":"https://firefly-epo854211.adobe.io/v3/cancel/urn:ff:jobs:..."
}
```

3. Use the `jobId` to see the result:

<InlineAlert variant="info" slots="header, text" />

NOTE

The `numVariations` value creates four generated images that will be easy to compare. Four URLs are returned in the response.

```bash
curl -X GET "https://firefly-api.adobe.io/v3/status/<YOUR_JOB_ID>" \
    -H "x-api-key: $FIREFLY_SERVICES_CLIENT_ID" \
    -H "Authorization: Bearer $FIREFLY_SERVICES_ACCESS_TOKEN" \
    -H "Content-Type: application/json"
```

You'll see results similar to our example below. Notice that all the defined presets were applied to the prompt for a renaissance puppy!

**Sample Result**

![A renaissance artist puppy generated with presets][3]

[//]: # (links)
[1]: ../../api/
[2]: ../../../getting-started/index.md
[3]: ../../images/puppy-renaissance-artist.jpeg
