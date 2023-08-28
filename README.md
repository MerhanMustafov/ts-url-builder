# ts-url-builder
<br />

⚠️  ___This liblary is for Typescript projects___

<br />

## Constraints
⬇️ __The url builder supports up to 7 endpoints (including)__


## Description
Welcome to the `ts-url-bulder` documentation !
This is a library for url building that brings the best out of __typescript__ and combines that with __builder design pattern__ providing you with one of the best yet simple url builder tools out there. With little to no configuration you can start building strongly typed urls.

<br />

## Get started

- Installation
```
 npm install ts-url-builder
```
- Import
```typescript
import { createUrlBuilderWith } from "ts-url-builder";
```
## What is `createUrlBuilderWith`
This is a function that accepts 2 arguments <br />
1. `config` object which is ___required___
2. `baseUrl` a string which is ___optional___
<br />
And returns an instance of the url builder.

## `baseUrl`

So lets start with the simple one, the base url. This is just a string passed as __second argument__ to `createUrlBuilderWith` and is __optional__. Given that the constraint is a string it can be anything so make sure that you are passing the right base url. __The only thing you should know is that a base url should NOT end with slash ("/")__.<br />
⚠️ https://localhost:3001/ __is wrong__ <br />
⚠️ https://localhost:3001 __is correct__

## `config` object
`config` is just an object with a specific structure. <br />
#### About Paths:
Read carefully throgh the comments and you will understand the __path section__ of the library and how it works.
```typescript
export const config = {
     1: {
          // In here the keys are the first endpoints
          // for example
          // https://localhost:3001/timezone
          // https://localhost:3001/leagues
          // ...
          timezone: null,
          countries: null,
          leagues: null,
          teams: null,
          odds: null,
     },
     // IMPORTANT! only those paths that have second path should be moved in from 1:{...} to 2:{...}
     2: {
          leagues: {
               // The most inner key is the second endpoint
               seasons: null,
               // https://localhost:3001/leagues/seasons
          },
          teams: {
               // The most inner key is the second endpoint
               statistics: null,
               // https://localhost:3001/teams/statistics
               season: null,
               // https://localhost:3001/teams/season
          },
          odds: {
               // The most inner key is the second endpoint
               live: null,
               // https://localhost:3001/odds/live
               mapping: null,
               // https://localhost:3001/odds/mapping
               bookmakers: null,
               // https://localhost:3001/odds/bookmakers
               bets: null,
               // https://localhost:3001/odds/bets
          },
     },
    // IMPORTANT! only those paths that have third path should be moved in from 2:{...} to 3:{...}
     3: {
          odds: {
               live: {
                    // The most inner key is the second endpoint
                    bets: null,
                    // https://localhost:3001/odds/live/bets
               },
          },
     },
};
```
