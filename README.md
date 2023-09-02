# ts-url-builder
<br />

❗ __To get the best out of this library you need to have Typescript in your project else you will NOT have the benefit of typing__
<br />
📌 There is __Template code__ section in the documentation, you can use it as a starting point
<br />
<br />
<br />

# Constraints
⬇️ __The url builder supports up to 7 endpoints (including)__ <br />
⬇️ __Only supports ES6 modules (import/export)__
<br />
<br />
<br />

# Description
➡️ This is a library that brings the best out of __Typescript__ and combines that with __Builder Design Pattern__ providing you with one of the best yet simple __url builder tools__ out there.
<br />
<br />
<br />

# Welcome to `ts-url-bulder` documentation !
<br />

Here you will find everything you need to start building urls with ease and faster than ever. All you have to do is follow this guide that will walk you through the configuration which by the way is quite simple and easy. Once done with the configuration you are going to have an amazing tool that will surely speed up your dev process and reduce or even eliminate any typos you may accidentally make.
<br />

### What can you do with this tool🤔
Imagine if you can type your enpoint paths and the queries for each endpoint in such a way that __every next endpoint is typed depending on the previouse one and every endpoint has its own queries__ 🔝.Well, with this library you can do exactly that and on top of that you get __Intellisense__ which means you do not have to memorize or constantly check for the exact endpoint or query params. But that is not all, because the best about this library is that you are creating your urls by chaining methods which is very clean syntax. 
<br />
#### Example
```typescript
import { createUrlBuilderWith } from "ts-url-builder";

const config = {...}

// config is required and baseUrl is optional
const urlBuilder = createUrlBuilderWith(config, baseUrl);
urlBuilder.new().setPath("odds").setPath("live").setQuery("fixture", 123).build();
```
#### Cool, right. Ok then, enough talk, let's get started !
<br />
<br />
<br />

# Get started

- Installation
```
 npm install ts-url-builder
```
- Import
```typescript
import { createUrlBuilderWith } from "ts-url-builder";
```
<br />

## What is `createUrlBuilderWith`
This is a function that accepts 2 arguments <br />
1. `config` object which is __required__
2. `baseUrl` a string which is __optional__
<br />

And returns an instance of the url builder.
```typescript
const urlBuilder = createUrlBuilderWith(config, baseUrl)
```
<br />

<br />

### What is `baseUrl` 
---
`baseUrl` is just a string passed as __second argument__ to `createUrlBuilderWith` and is __optional__. Given that the 
constraint is just a string it can be anything so make sure that you are passing the right base url. __The only thing you should know is that a base url should NOT end with 
slash ("/")__.<br />
⚠️ https://localhost:3001/ __is wrong__ <br />
⚠️ https://localhost:3001 __is correct__

<br />

### What is `config`
---
`config` is just an object but with a specific structrue.
```typescript
const config = {
	0:{
		// query params of the base url
		// ...
	},
	1:{
		// first endpoints and the query params for the endpoints if any
		// if not just give the enpoint a null value
		// ...
	},
	2: {
		// second endpoints and the query params for the endpoints if any
		// if not just give the enpoint a null value
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
<br />
<br />
<br />

# Usage
When you create the config and pass it to `createUrlBuilderWith(config, baseUrl)` you will get urlBuilder instance. <br />
The `urlBuilder` instace have 4 methods 
1. `new` you __should always start with__ `new` method - it resets everything and gives you the opportunity to create one instance and use it wherever you want in your code.
2. `setPath` this sets the path and can be chained up to 7 times (including) if you chain this method more than 7 it will just won't have typing.
3. `setQuery` this sets the query for the current endpoint.
4. `build` this is called at the end and returns the url string if the base url is not provided in `createUrlBuilderWith` it will return only the endpoint part.

##### Example
```typescript
import { createUrlBuilderWith } from "ts-url-builder";

const config = {...}

// config is required and baseUrl is optional
const urlBuilder = createUrlBuilderWith(config, baseUrl);
urlBuilder.new().setPath("odds").setPath("live").setQuery("fixture", 123).build();
```
<br />
<br />
<br />

# Advanced usage (Conditionals)
You can conditionally pass endpoints as well as query params with ternary operators like this:
```typescript
const urlBuilder = createUrlBuilderWith(config);

// the condition is hardcoded with true but you can change it to whatever you want
urlBuilder.new()
  .setPath(true ? "odds" : "countries") // this is how you can pass conditional endpoints
  .setPath("live")
  .setQuery(true ? "fixture" : "bet", 123) // this is how you can pass conditional queries 
  .setQuery("league", 56).build()
```
<br />
<br />
<br />

# Template code

Yoy can use this code as tempate to get started. Assuming you have already installed the library you can copy this code and start playing with it.
There are comments to help you clarify any question that may arise.
```typescript
import { createUrlBuilderWith } from "ts-url-builder";

const config = {
     // In 0: {...} are the queries for the base url
     0: {
          // this is how you type the value of the query param key
          // if you want it to be a string
          name: "" as string,

          // if you want it to be a number
          age: 0 as number,

          // if you want it ot be a boolean
          code: true as boolean,

          // if you want it to be a string but specific once
          country: "" as "Bulgaria" | "Germany" | "Italy" | "United States",
     },

     // In 1: {...} are the first enpoints and the queries for them if any of course.
     1: {
          // This is the first endpoint
          countries: {
               // these are the queries for the /countries endpoint
               name: "" as string,
               code: "" as string,
               search: "" as string,
          },

          // This is the first endpoint
          odds: {
               // these are the queries for the /odds endpoint
               fixture: 1 as number,
               league: 1 as number,
          },

          // This is the first endpoint
          // if you do not have queries for an endpoint just give it a null value
          timezone: null,
     },
     // In 2: {...} are the second enpoints and the queries for them if any of course.
     // !!! IMPORTANT: On the first nesting level inside 2: {...}
     // are the enpoints from 1: {...}
     // So REMEMBER that only those enpoints that have second path should be here
     2: {
          // This is the first endpoint's key from 1: {...}
          countries: {
               // This is the second endpoint for /countries
               seasons: {
                    // these are the queries for the /countries/seasons endpoint
                    year: 0 as number,
               },
          },
          // This is the first endpoint's key from 1: {...}
          odds: {
               // This is the second endpoint for /odds
               live: {
                    // These are the queries for the second endpoint /odds/live
                    fixture: 1 as number,
                    league: 1 as number,
                    bet: 1 as number,
               },
               // This is the second endpoint for /odds
               mapping: {
                    // These are the queries for the second endpoint /odds/live
                    page: 1 as number,
               },
               // This is the second endpoint for /odds
               bookmakers: {
                    id: 1 as number,
                    search: "" as string,
               },
               // This is the second endpoint for /odds
               bets: {
                    id: 1 as number,
                    search: "" as string,
               },
          },
     },
     // In 3: {...} are the third enpoints and the queries for them if any of course.
     // !!! IMPORTANT: On the first nesting level inside 3: {...} are the keys from 1: {...} and on the second
     // nesting level are the keys from 2: {...}
     // So REMEMBER that only those enpoints that have third path should be here
     3: {
          // This is the first endpoint's key from 1: {...}
          odds: {
               // This is the second endpoint's key from 2: {...}
               live: {
                    // This is the third endpoint for /odds/live
                    bets: {
                         // These are the queries for the third endpoint /odds/live/bets
                         id: 1 as number,
                         search: "" as string,
                    },
               },
          },
     },
     // ...
     // 7:{...}

     // Summary:
     // Endpoints
     // in 0: {...} you keep the base url query params
     // in 1: {...} you keep the first endpoint and the queries for each endpoint if any
     // in 2: {...} you keep the second endpoints and the queries for each endpoint if any.
     // remember that the actual enpoint for second enpoint should come in the second nesting level inside 2: {...}
     // in 3: {...} you keep the third endpoints and the queries for each endpoint if any.
     // remember that the actual enpoint for third enpoint should come in the third nesting level inside 3: {...}

     //...
     // in 7: {...} you keep the seventh endpoints and the queries for each endpoint if any.
     // remember that the actual enpoint for seventh enpoint should come in the seventh nesting level inside 7: {...}
     // Queries
     // - if endpoint does not have queries give the endpoint null value like in the timezone
     // - How to type the value of a query key
     // -- if string - "" as string,
     // -- if number - 0 as number,
     // -- if boolean - "" as boolean,
     // -- if specific values - "" as "Bulgaria" | "Germany" | "Italy" | "United States",

     // Constraints
     // Maxsimum allowed endpoint are 7 (including)
};


// remember that the baseUrl should not end with slash ("/")
const urlBuilder = createUrlBuilderWith(config, "http://localhost:3001");

urlBuilder.new().setPath("odds").setPath("live").setPath("bets").setQuery("id", 123).build();
```



