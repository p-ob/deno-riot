# deno-riot

Small library to consume the Riot APIs with [deno](https://deno.land/)

![.github/workflows/deno.yml](https://github.com/p-ob/deno-riot/workflows/.github/workflows/deno.yml/badge.svg)

Add a .env file at the root, and provide the following information:
- API_KEY
- API_BASE_URL (e.g. https://na1.api.riotgames.com/)

```shell
> deno run --allow-read --allow-net --unstable --allow-write --lock=lock.json --lock-write --allow-env labs/index.ts
```

Debugging: --inspect
