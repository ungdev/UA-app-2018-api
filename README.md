# intranet-ua-api

## Installation

```
yarn

yarn start
```

Running on http://localhost:3000/

## Endpoints

`/discord` : return all messages in a channel\
`/discord/:tag` : return messages with tag (lol,csgo,hs,...)\
Serveur discord test : https://discord.gg/xg2v4Pb (Discord API)

`/players` : return all players\
`/players/:id` : return specific player\
`/players/:id/matches` : return all player matchs (with toornament API)

`/teams` : return all teams\
`/teams/:id` : return specific team\
`/teams/:id/matches` : return all team matchs (with toornament API)

`/tournaments` : return all teams\
`/tournaments/:id` : return specific team\
`/tournaments/:id/discipline` : Return a discipline with the detail of his features.  (with toornament API)

Other:\
`/groups`\
`/matches`
