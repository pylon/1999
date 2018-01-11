## 1999
[We could all die any day 1999 /
I don&#39;t wanna die /
I&#39;d rather dance my life away 1999 /
Listen to what I&#39;m tryin&#39; to say...](https://genius.com/3870836/Prince-1999/We-could-all-die-any-day-1999-i-dont-wanna-die-id-rather-dance-my-life-away-1999-listen-to-what-im-tryin-to-say)

### Run

```
npm install
npm start
```

### Motivation

The experiment had a two-fold purpose:
1. Proof of concept for in-browser companion voice support using react.
2. Explore built-in browser support for Web Speech API vis-á-vis a single controlled implementation.

### Web API Support

Browser | OS  | ASR | TTS | Status
--- | --- | --- | ------ | -------
Safari | macOS | ❌ | ✅ | [Partial Supported](https://developer.apple.com/safari/features/#morefeatures)
Safari | iOS | ❌ | ✅ | Partial Supported
Chrome | macOS | ✅ | ✅ | Fully Supported
Chrome | iOS | ❌ | ✅ | Partial Supported
Firefox | macOS | ❌ | ✅ | [Partial Supported](https://bugzilla.mozilla.org/show_bug.cgi?id=1244460)

#### Notes
https://caniuse.com/#feat=speech-recognition is the most accurate browser support matrix, but it's incomplete for mobile browsers.

Safari docs say that Web Speech API is fully supported, but that is a lie.

Most places say Firefox supports Web Speech API, but that is a lie too.

Chrome [probably uses a Google ASR service](https://www.chromium.org/developers/how-tos/api-keys).

### Backend

[Web Speech API](https://w3c.github.io/speech-api/speechapi.html), cf https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

#### NLU

Unimplemented

#### ASR

Browser-specific, but only Chrome supports ASR, and it's ASR service is obfuscated but [probably uses Google Speech API](https://groups.google.com/a/chromium.org/d/msg/chromium-dev/KMY5Z9qSyOA/Ali77Ebd64MJ)

#### TTS

Browser-specific, but all that I checked use the platform OS TTS service.

### Frontend

React, using [React Voice Components](https://github.com/grvcoelho/react-voice-components/)

#### Alternatives

- [Annyang](https://github.com/TalAter/annyang) is a HTML5 wrapper around Web Speech API.

- [Artyom](https://github.com/sdkcarlos/artyom.js) is a HTML5 wrapper around Web Speech API.

- [Google Cloud Speech API](https://cloud.google.com/speech/) offers the ability to do ASR directly, using a custom React component. Requires API key, $ per-request. There is a [reference implementation in Node](https://github.com/googleapis/nodejs-speech/tree/master/samples#speech-recognition).
