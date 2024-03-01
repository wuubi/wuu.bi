---
id: operating-system-index
title: Operating System
tags:
  - OS
  - noter
---

## gCloud enterprise commnds
```
gcloud dns managed-zones create "orphic-enterprises" \
    --dns-name "orphic.enterprises." \
    --description "Automatically managed zone by orphic.enterprises" \
    --project orphic-ent-dev

gcloud dns record-sets list --zone "orphic-enterprises" --name "orphic.enterprises." --type NS --project orphic-ent-dev
```

## mpv User Scripts
https://github.com/mpv-player/mpv/wiki/User-Scripts
