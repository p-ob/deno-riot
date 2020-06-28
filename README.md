Uses [deno](https://deno.land/)
Add a .env file at the root, and provide the following information:
- API_KEY
- API_BASE_URL (e.g. https://na1.api.riotgames.com/)

```shell
> deno run --allow-read --allow-net index.ts
```

Debugging: --inspect-brk
