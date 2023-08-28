# ts-url-builder
<br />

⚠️  ___This liblary is for Typescript projects___

<br />

## Constraints
⬇️ __The url builder supports up to 7 endpoints (including)__ <br />
⬇️ __Only supports ES6 import/export module__

<br />


## Description
Welcome to the `ts-url-bulder` documentation !
This is a library for url building that brings the best out of __typescript__ and combines that with __builder design pattern__ providing you with one of the best yet simple url builder tools out there. With little to no configuration you can start building strongly typed urls.

<br />

## Start immediately playing with the library
You can skip ahead and jump right to the playing part. Go to the __Template to get you started__ section which is at the end of the documentation and have template code.

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
### `config` object Structure
```typescript
const config = {
	0:{
		//params of the base url
		// ...
	},
	1:{
		//first endpoints
		// ...
	},
	2: {
		// second endpoints
		// ...
	},
	3:{
		// third endpoints
		// ...
	},
	// ... 
	7:{
		// IMPORTANT! 7 (including) is the maximum endpoints allowed
	}
};
```
### EXAMPLES:
<br />

#### Path section
Read carefully throgh the comments and you will understand the __path section__ of the library and how it works.
```typescript
const config = {
     1: {
          // In here the keys are the first endpoints
          // for example
          // http://localhost:3001/timezone
          // http://localhost:3001/leagues
          // ...
          timezone: null,
          countries: null,
          leagues: null,
          odds: null,
     },
     // IMPORTANT! only those paths that have second path should be moved in from 1:{...} to 2:{...}
     2: {
          leagues: {
               // The most inner key is the second endpoint
               // http://localhost:3001/leagues/seasons
               seasons: null,
          },
         
          odds: {
               // The most inner key is the second endpoint
               // http://localhost:3001/odds/live
               live: null,
               mapping: null,
               bookmakers: null,
               bets: null,
          },
     },
    // IMPORTANT! only those paths that have third path should be moved in from 2:{...} to 3:{...}
     3: {
          odds: {
               live: {
                    // The most inner key is the second endpoint
                    // http://localhost:3001/odds/live/bets
                    bets: null,
               },
          },
     },
};
```
<br />

#### Query section:
Read carefully through the comments and you will understand the __query section__ of the library and how it works.

```typescript
const config = {
     1: {
          timezone: null,
          countries: {
               // These are the queries for the first endpoint /countries
               // if you do not have query just give null as value to the countries
               //http://localhost:3001/countries?name="Joe"
               name: "" as string,
               code: "" as string, 
               // ...
               search: "" as string, 
               // ...
          },
          odds: {
               fixture: 1 as number, 
               league: 1 as number, 
          },
     },
     2: {
          odds: {
               // This is the second endpoint
               live: {
                    // These are the queries for the second endpoint /odds/live?fixture=123
                    fixture: 1 as number,
                    // ...
                    league: 1 as number,
                    // ...
                    bet: 1 as number,
               },
               mapping: {
                    page: 1 as number,
               },
               bookmakers: {
                    id: 1 as number,
                    search: "" as string,
               },
               bets: {
                    id: 1 as number,
                    search: "" as string,
               },
          },
     },
     3: {
          odds: {
               live: {
                    // This is the third endpoint
                    bets: {
                         // These are the queries for the third endpoint /odds/live/bets?id=123&search="Param"
                         id: 1 as number,
                         search: "" as string,
                    },
               },
          },
     },
};
```
<br />

#### What about if i have query in my base url
You need to add 0: {...} inside your config object where you will keep your param keys for the base URL

```typescript
const config = {
	0:{
		// These are the queries for the base url if there are any
		// If your base URL have a query you need to create 0 key and pass the queries as
		// key value pairs as shown below
		// http://localhost:3001?name="Joe"
		name: "" as string,
		age: 1 as number
	},
     // IMPORTANT! Remember that the createUrlBuilderWith will not work if you do NOT have 1: {...} in the config object
};
```
<br />

## Usage
When you create the config and pass it to `createUrlBuilderWith(config, baseUrl)` you will get urlBuilder instance. <br />
The `urlBuilder` instace have 4 methods 
1. `new` you __should always start with__ `new` method - it resets everything and gives you the opportunity to create one instance and use it wherever you want in your code
2. `setPath` this sets the path and can be chained up to 7 times (including) if you chain this method more than 7 it will just not work and you will not have a typing
3. `setQuery` this sets the query for the current path
4. `build` this is called at the end and returns the url string if the base url is not provided in `createUrlBuilderWith` then tis will return only the endpoint part else it will return the whole URL

##### Example
```typescript
import { createUrlBuilderWith } from "ts-url-builder";

const urlBuilder = createUrlBuilderWith(config);
urlBuilder.new().setPath("odds").setPath("live").setQuery("fixture", 123).build();
```

<br />

## Template to get you started
After you have installed the library you can take that code below and start playing with it

```typescript
import { createUrlBuilderWith } from "ts-url-builder";

const config = {
     0: {
          // These are the queries for the base url
          name: "" as string, // this is how you type the value of the query param key
          age: 1 as number, // if number
          code: true as boolean, // if boolean
     },
     1: {
          timezone: null,
          countries: {
               name: "" as string,
               code: "" as string,
               // ...
               search: "" as string,
               // ...
          },
          odds: {
               fixture: 1 as number,
               league: 1 as number,
          },
     },
     2: {
          odds: {
               // This is the second endpoint
               live: {
                    // These are the queries for the second endpoint /odds/live?fixture=123
                    fixture: 1 as number,
                    // ...
                    league: 1 as number,
                    // ...
                    bet: 1 as number,
               },
               mapping: {
                    page: 1 as number,
               },
               bookmakers: {
                    id: 1 as number,
                    search: "" as string,
               },
               bets: {
                    id: 1 as number,
                    search: "" as string,
               },
          },
     },
     3: {
          odds: {
               live: {
                    // This is the third endpoint
                    bets: {
                         // These are the queries for the third endpoint /odds/live/bets?id=123&search="Param"
                         id: 1 as number,
                         search: "" as string,
                    },
               },
          },
     },
};

// remember that the baseUrl should not end with slash ("/")
const urlBuilder = createUrlBuilderWith(config, "http://localhost:3001");

urlBuilder.new().setPath("odds").setPath("live").setQuery("fixture", 123);
```
