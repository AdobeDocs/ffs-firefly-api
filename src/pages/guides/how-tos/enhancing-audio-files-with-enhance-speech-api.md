---
title: Enhancing Audio Files with the Enhance Speech API
description: This how-to guides you through the process of integrating the Firefly Services APIs in PowerAutomate.
---

# Enhancing Audio Files with the Enhance Speech API

The Enhance Speech API, part of Adobe Audio Services, enables rich workflow automation around audio post-production.
This guide will demonstrate how to create enhanced (noise and echo-free) versions of your spoken-audio assets.
To accomplish this, we'll walk you through how to create and upload data for an audio `Asset`, create a `SpeechEnhancement`, and download its data when ready.

## Prerequisites

To complete this tutorial, you will need:

* Firefly API credentials. If you don't have them yet, first visit the Firefly Services [Getting Started](../../../guides/get-started.md) guide to obtain a `client_id` and `client_secret`.
* An HTTP client, like [Postman](https://www.postman.com/).

Before getting started, we strongly encourage you to explore [Enhance Speech within Adobe Podcast][esqa-link]. The audio enhancement technology that backs this API is the same as the one available on the web, so exploring there will allow you to develop an intuition for how speech enhancement impacts audio, without writing any code!

## Concepts

Before we dive into the API, it will be helpful to level-set on the following concepts:

1. `Asset`: An `Asset` represents a file that contains audio that is compatible with speech enhancement. Currently, the Enhance Speech API only support audio-only files, like .mp3 files. However, we might support other files that contain audio (like video files), in the future.
2. `SpeechEnhancement`: A `SpeechEnhancement` represents an `Asset` that has been enhanced at a particular strength. As you can enhance an `Asset` at multiple strengths, it possible to have many `SpeechEnhancement`s for a given `Asset`.

[esqa-link]:https://podcast.adobe.com/enhance

## Enhance Speech API Walkthrough

### Step 0: Obtain a valid access token

Ensure you have reference to a valid access token. See the [Authentication Guide](../concepts/authentication/index.md) for details on how to obtain
such a token.

### Step 1: Create an asset

Before we can run speech enhancement on an `Asset`, we need to register a new `Asset` with the Enhance Speech API.
To accomplish this, we use the `POST /audio_services/v1/assets` endpoint.

This endpoint requires, as a JSON request body, the following information:

* `filename`:
    * Description: A filename (with extension) of the asset. We use this filename when naming the downloaded file for a downstream `SpeechEnhancement`.
    * Example: "earhart-aviation.mp3"
* `byte_size`:
    * Description: The number of bytes of the asset.
    * Example: 59400
* `checksum`
    * Description: The base64-encoded MD5 checksum of the asset.
    * Example: "AWzJTRSXGy5JsL+Phh/cFA=="
* `content_type`
    * Description: The content type of the asset.
    * Example: "audio/mpeg"

We use the `byte_size`, `checksum` and `content_type` to enable secure and verifiable direct uploads of your asset to our object store.

Putting this all together. Using the curl HTTP client, we can create an asset:

```sh
curl 'https://firefly-api-enterprise-stage.adobe.io/audio_services/v1/assets' \
--header 'x-api-key: {CLIENT_ID}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {ACCESS_TOKEN}' \
--data '{
    "filename": "earhart-aviation.mp3",
    "byte_size": 59400,
    "checksum": "AWzJTRSXGy5JsL+Phh/cFA==",
    "content_type": "audio/mpeg"

}'
```

If all goes well, we'll get a `201 Created` response, with a payload like the following:

```json
{
    "id": "3445d7a0-2513-4606-b37b-bff0034c0214",
    "filename": "earhart-aviation.mp3",
    "upload_url": "https://phonos-recordings-staging.s3-accelerate.amazonaws.com/Assets/3445d7a0-2513-4606-b37b-bff0034c0214?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAS2MU72M7ACPXX764%2F20240409%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240409T213836Z&X-Amz-Expires=43200&X-Amz-Security-Token=FwoGZXIvYXdzEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDMyjVxJyIRosE7smGSLJAWqfi8jqgkF0iiCYFU1nq3xAzNalFsrmbNnJRpWZvOSjGREvQftcLr%2FVgG9rjuz1cskXD3H8umxVLOS6oVmjHdt0wmaRtx5C6ZvGp8tW7BL%2F0hsuuU%2FmmG0n8QmmuQjA%2BfeaRkwR6Fgw85SryaPZUxzXhX9Y2BypyeBDX1H5JTPUYpZA0fAu1g9nYncsIjbNgnBJvr5e42gBnJZQSyAeeE3dA%2BK9btul5QapF5of4JTHXngkhLSBm819JD9iXRjRiUAUfoofGYfDhiiw5NawBjItFfJCqsABzKqETJ6q87zlAHajnVODPJgGowODSXrrqNd%2BTnV%2B73UXZTYKNukt&X-Amz-SignedHeaders=content-length%3Bcontent-md5%3Bcontent-type%3Bhost&X-Amz-Signature=45bad70aa97e89bf6120a7a0ec22b0dfc4771060922c50e1ec5c876f13252c49",
    "status": "waiting_for_upload",
    "created_at": "2024-04-09T21:38:36.872Z",
    "updated_at": "2024-04-09T21:38:36.872Z",
    "byte_size": 59400,
    "content_type": "audio/mpeg",
    "checksum": "AWzJTRSXGy5JsL+Phh/cFA=="
}
```

As we can see in the API response, the `status` of this `Asset` is `waiting_for_upload`, which indicates we can't use it to create `SpeechEnhancement`s until we upload data for the `Asset`.

In the event that request parameters are structurally or semantically invalid, we'll get a `422` response. See the API specification for details.

#### Checksum Computation

An MD5 checksum is standard way to construct the equivalent of a human fingerprint for a file.
If two files have the same MD5 checksum, then they almost certainly are the same file.
Critically, a MD5 checksum is *not* a credential and does not need to be treated as such, it only serves as a way to easily check identity.

For the sake of example, we'll use the CLI tools `openssl` and `base64` to demonstrate how to compute the base64-encoded MD5 checksum for a file:

```sh
$ openssl dgst -md5 -binary /path/to/earhart-aviation.mp3 | base64
```

There are language-specific libraries for computing a base64-encoded MD5 checksum. For instance, in Python, you can compose `hashlib` and `base64` to compute the checksum.

```python
import hashlib
import base64

file_path = 'path/to/your/asset`

with open(file_path, 'rb') as file:
    file_contents = file.read()

# Calculate the MD5 hash of the file
md5_hash = hashlib.md5(file_contents).digest()

# Encode the MD5 hash in base64
base64_encoded_hash = base64.b64encode(md5_hash)

# Convert bytes to string for display or use
base64_encoded_hash_str = base64_encoded_hash.decode('utf-8')
```

### Step 2: Upload data for the asset

In order to create `SpeechEnhancement`s for the `Asset`, the `Asset`'s `status` must be `ready_for_processing`.
To do this, we need to upload valid data to the object store using the `upload_url` included in the response to `POST /audio_services/v1/assets`.

We accomplish this by making a `PUT` request to the `upload_url` with the `Asset`'s content,
using the checksum computed earlier as the value for the `Content-MD5` header and setting the `Content-Type` header to match the `content_type` provided when creating the `Asset`:

```sh
curl --request PUT 'https://phonos-recordings-staging.s3-accelerate.amazonaws.com/Assets/3445d7a0-2513-4606-b37b-bff0034c0214?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAS2MU72M7ACPXX764%2F20240409%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240409T213836Z&X-Amz-Expires=43200&X-Amz-Security-Token=FwoGZXIvYXdzEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDMyjVxJyIRosE7smGSLJAWqfi8jqgkF0iiCYFU1nq3xAzNalFsrmbNnJRpWZvOSjGREvQftcLr%2FVgG9rjuz1cskXD3H8umxVLOS6oVmjHdt0wmaRtx5C6ZvGp8tW7BL%2F0hsuuU%2FmmG0n8QmmuQjA%2BfeaRkwR6Fgw85SryaPZUxzXhX9Y2BypyeBDX1H5JTPUYpZA0fAu1g9nYncsIjbNgnBJvr5e42gBnJZQSyAeeE3dA%2BK9btul5QapF5of4JTHXngkhLSBm819JD9iXRjRiUAUfoofGYfDhiiw5NawBjItFfJCqsABzKqETJ6q87zlAHajnVODPJgGowODSXrrqNd%2BTnV%2B73UXZTYKNukt&X-Amz-SignedHeaders=content-length%3Bcontent-md5%3Bcontent-type%3Bhost&X-Amz-Signature=45bad70aa97e89bf6120a7a0ec22b0dfc4771060922c50e1ec5c876f13252c49' \
--header 'Content-MD5: AWzJTRSXGy5JsL+Phh/cFA==' \
--header 'Content-Type: audio/mpeg' \
--data '@/path/to/earhart-aviation.mp3'
```

If the upload request succeeds, you'll receive `200` response with an empty body.
If you receive a `400`-level response, double check that you are providing the exact same `Content-Type` and `Content-MD5` as supplied when creating the `Asset` via  `POST /audio_services/v1/assets`.

For more details on our object store's (AWS S3) `PUT` API, including links to language-specific S3 clients, please consult the [PutObject documentation][putobject-docs].

#### `upload_url` expiration window

The pre-signed `upload_url` is only valid for a few minutes. Be certain to `PUT` to `upload_url` *as soon as it is returned in the API* (without any systematic delays).

To receive a new `upload_url` for an `Asset`, call `GET /audio_services/v1/assets/:id` and use the new `upload_url` in the response:

```sh
curl --request GET 'https://firefly-api-enterprise-stage.adobe.io/audio_services/v1/assets/3445d7a0-2513-4606-b37b-bff0034c0214' \
--header 'x-api-key: {CLIENT_ID}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {ACCESS_TOKEN}'
```

```json
{
    "id": "3445d7a0-2513-4606-b37b-bff0034c0214",
    "filename": "earhart-aviation.mp3",
    "upload_url": "https://phonos-recordings-staging.s3-accelerate.amazonaws.com/Assets/e971f261-b878-4f4e-b0b2-3f485847ff18?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAS2MU72M7KMGERYWU%2F20240409%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240409T223834Z&X-Amz-Expires=43200&X-Amz-Security-Token=FwoGZXIvYXdzEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDK9qYgyGpviWih6o0yLJAT9R%2Bh6EgpSttgs8uEC26fP3gwZvVKnblpk%2BlwPCqlQhR7YbTwZ0eGLVgWVxbKXTwk20TNrkmnL7DVxdm1%2BOQWhnqamyLSsxoSTAMlc7iLIbQua0mMDeVpty%2FOJQAZH7qxp6%2BD7DqO7M5o7DBQp9ZpQYIGqhntA5ykNUyRBJW3XABstDjVGoTm6epgYxJUKPxzjX2Swm%2BRyLBUykHH39VWWn1NEjdS6Cbbmd5txAbVYUpY9B1fM4THmOiMxYTf0X9LuqI3wQ7H%2FPjyjqhNewBjItrW7JkVjKx5%2Bsy%2BUtTajoNuVwnozge6PpPnCeQwvxaAJTzbwdISKaxCEuedm7&X-Amz-SignedHeaders=content-length%3Bcontent-md5%3Bcontent-type%3Bhost&X-Amz-Signature=554df03c538e36864db91d4b01db45ce8aba6dcf8ea31890cadf67df81dd9a90",
    "status": "waiting_for_upload",
    "created_at": "2024-04-09T22:37:12.541Z",
    "updated_at": "2024-04-09T22:37:12.541Z",
    "byte_size": 59400,
    "content_type": "audio/mpeg",
    "checksum": "AWzJTRSXGy5JsL+Phh/cFA=="
}
```

#### Checking upload validity

As an API client, the best way to ensure that not only did the `PUT` request above go through successfully, but was successfully registered by the Enhance Speech API, is to `GET /audio_services/v1/assets/:id` and ensure that `status` shows `ready_for_processing`. Once the `Asset` is `ready_for_processing`, an `upload_url` will no longer be displayed:

```json
{
    "id": "3445d7a0-2513-4606-b37b-bff0034c0214",
    "filename": "earhart-aviation.mp3",
    "upload_url": null,
    "status": "ready_for_processing",
    "created_at": "2024-04-09T21:38:36.872Z",
    "updated_at": "2024-04-09T22:37:03.129Z",
    "byte_size": 59400,
    "content_type": "audio/mpeg",
    "checksum": "AWzJTRSXGy5JsL+Phh/cFA=="
}
```

### Step 3: Create a speech enhancement

Now that we have an `Asset` that is `ready_for_processing`, we can create a `SpeechEnhancement` for it, at a given strength, using the `POST audio_services/v1/assets/:id/speech_enhancements` endpoint:

```sh
curl --location 'https://firefly-api-enterprise-stage.adobe.io/audio_services/v1/assets/3445d7a0-2513-4606-b37b-bff0034c0214/speech_enhancements' \
--header 'x-api-key: {CLIENT_ID}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {ACCESS_TOKEN}' \
--data '{
    "strength": 93
}'
```

Assuming that the `Asset` is `ready_for_processing` and the request of the request is structurally valid, we'll receive a [`202 Accepted`][202-mdm-docs] response like the following:

```json
{
    "strength": 93,
    "id": "b877bc56-9c17-4efb-8eec-b5839cd7f555",
    "download_url": null,
    "asset_id": "3445d7a0-2513-4606-b37b-bff0034c0214",
    "requested_processing_at": "2024-04-09T22:56:50.174Z",
    "finished_processing_at": null,
    "status": "queued",
    "model_id": "v1"
}
```

### Step 4: Poll to learn when the speech enhancement is complete

As indicated by the `202 Accepted` response code, a `SpeechEnhancement` is not immediately acted upon by the API.

Currently, a single `SpeechEnhancement` will be proceeded per API client - there is no parallel processing of speech enhancements.

For example, if you create 5 assets via `POST /audio_services/v1/assets`, upload data for all of them, and then create 5 speech enhancements via `POST audio_services/v1/assets/:id/speech_enhancements`,
only 1 of those speech enhancements will be processed at any given time (the order of processing will be from oldest to newest).

To see the latest status of the newly created `SpeechEnhancement`, you can poll `GET audio_services/v1/assets/:asset-id/speech_enhancements/:speech-enhancement-id`:

```sh
curl 'https://firefly-api-enterprise-stage.adobe.io/audio_services/v1/assets/3445d7a0-2513-4606-b37b-bff0034c0214/speech_enhancements/b877bc56-9c17-4efb-8eec-b5839cd7f555' \
--header 'x-api-key: {CLIENT_ID}' \
--header 'Authorization: Bearer {ACCESS_TOKEN}'
```

```json
{
    "strength": 93,
    "id": "b877bc56-9c17-4efb-8eec-b5839cd7f555",
    "download_url": "https://firefly-api-enterprise-stage.adobe.io/audio_services/api/assets/3445d7a0-2513-4606-b37b-bff0034c0214/speech_enhancements/b877bc56-9c17-4efb-8eec-b5839cd7f555/download",
    "asset_id": "3445d7a0-2513-4606-b37b-bff0034c0214",
    "requested_processing_at": "2024-04-09T22:56:50.174Z",
    "finished_processing_at": "2024-04-09T22:56:51.675Z",
    "status": "succeeded",
    "model_id": "v1"
}
```

The `status` of a `SpeechEnhancement` progresses from `queued` -> `processing` -> (`succeeded` OR `failed`).

We don't often expect a `SpeechEnhancement` to fail (have a `status` of `failed`) – this would likely indicate a server-side bug. However, in the rare event that it does happen, the API is transparent about this state.

Once the `status` is `succeeded`, a non-null `download_url` is included in the response that enables the downloading of the speech enhancement to the API client.

### Step 5: Download the speech enhancement

To download the `SpeechEnhancement`, make a `GET` request to `download_url` displayed above. This will redirect to a (short-lived) pre-signed URL that will enable the downloading of the enhanced audio from AWS S3.

```sh
curl 'https://firefly-api-enterprise-stage.adobe.io/audio_services/v1/assets/3445d7a0-2513-4606-b37b-bff0034c0214/speech_enhancements/b877bc56-9c17-4efb-8eec-b5839cd7f555/download' \
--location \
--remote-name --remote-header-name \
--header 'x-api-key: {CLIENT_ID}' \
--header 'Authorization: Bearer {ACCESS_TOKEN}'
```

(`--location` tells curl to follow redirects, `--remote-name --remote-header-name` tells curl to use the `Content-Disposition` response header when naming the output file.)

This will result in a file named "earhart-aviation-enhanced-93p.mp3" saved at the your current working directory!

[202-mdm-docs]:https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202
[putobject-docs]:https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html
