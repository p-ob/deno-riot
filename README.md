# deno-riot

Small library to consume the Riot APIs with [deno](https://deno.land/)

![Deno CI](https://github.com/p-ob/deno-riot/workflows/Deno%20CI/badge.svg?branch=main)

## Environment variables

**Note**: For running this project locally, this projects supports a .env file at the root as well. It it not checked in as it contains secrets.

- API_KEY
- API_BASE_URL (e.g. https://na1.api.riotgames.com/)
- STATIC_BASE_URL (e.g. http://static.developer.riotgames.com/docs/lol/)
- CACHE_DIR (e.g. ./.cache)

## Required permissions

- --allow-read
  - Needed for caching static assets
- -- allow-write
  - Needed for caching static assets
- --allow-net
  - Needed for communicating with Riot's APIs
- -- unstable
  - Needed for using latest and greatest Deno
- -- allow-env
  - Needed for loading configuration variables, like API_KEY


```shell
> deno run --allow-read --allow-net --unstable --allow-write --lock=lock.json --lock-write --allow-env labs/index.ts
```

Debugging: --inspect
