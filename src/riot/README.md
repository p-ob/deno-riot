# riot

![Riot CI](https://github.com/p-ob/deno-riot/workflows/Riot%20CI/badge.svg?branch=main)

Small library to consume the [Riot APIs](https://developer.riotgames.com/) with [deno](https://deno.land/)

## Supported APIs
- [Match v4](https://developer.riotgames.com/apis#match-v4):
  - [Get match](https://developer.riotgames.com/apis#match-v4/GET_getMatch)
  - [Get matchlist by account id](https://developer.riotgames.com/apis#match-v4/GET_getMatchlist)
- [Summoner v4](https://developer.riotgames.com/apis#summoner-v4)
  - [Get summoner by name](https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName)

## Supported static APIs
### [Game Constants](https://developer.riotgames.com/docs/lol#general_game-constants)
- Seasons
- Queues
- Maps
- Game Modes
- Game Types

### Data Dragon
Coming soon<sup>TM</sup>
- [Champions](https://developer.riotgames.com/docs/lol#data-dragon_champions)

## Environment variables

**Note**: For running this project locally, this project supports a .env file at the root as well. It it not checked in as it contains secrets.

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

## Lab

At the root, there's a small lab for consuming this package.

```shell
> deno run --allow-read --allow-net --unstable --allow-write --lock=lock.json --lock-write --allow-env labs/index.ts
```

Debugging: --inspect
