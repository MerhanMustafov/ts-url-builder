# ts-url-builder
<br />

⚠️  ___This liblary is for Typescript projects___

<br />




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

### `baseUrl`
So lets start with the simple one, the base url. This is just a string passed as __second argument__ to `createUrlBuilderWith` and is __optional__. Given that the constraint is a string it can be anything so make sure that you are passing the right base url. __The only thing you should know is that a base url should NOT end with slash ("/")__.<br />
⚠️ https://localhost:3001/ __is wrong__ <br />
⚠️ https://localhost:3001 __is correct__

### `config` object
