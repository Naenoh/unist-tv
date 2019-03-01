# Unist TV

Near-automated Under Night In-Birth exe late\[ST\] match databse

## Disclaimer

This repository only contains frontend code for the website as well as configuration and initialization files for the PostgreSQL + PostgREST backend.

## Running locally

**Requirements :**

- [PostgreSQL](https://postgresql.org/)
- [PostgREST](http://postgrest.org/)
- [Node and npm](https://www.npmjs.com/)
- [Preact-cli](https://github.com/developit/preact-cli)
- *Optional* [yarn](https://yarnpkg.com/)

**Steps :**

- Create and run `dbinit.sql` (see `dbinit.sql.sample` and modify password and such)
- Create `unisttv.conf` (see `unisttv.conf.sample` and modify password and others credentials)
- Load data
- Run the backend with `npm run postgrest`
- install dependencies `npm install` (or `yarn install`)
- Run the frontend with `preact watch`