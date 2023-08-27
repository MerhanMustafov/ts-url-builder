# ts-url-builder
### Description
This is a liblary that provides typed URL Builder and with little to no configuration

you can have a url builder tool that boost your dev process

### Get started
- Installation
```
 npm install ts-url-builder
```
- Import
```typescript
import { createUrlBuilderWith } from "ts-url-builder";
```

### Usage
To start using the url builder you need to provide a config object as a first parameter to `createUrlBuilderWith` that contains your endpoints and the queries corresponding to them. This object should be structured in certain way.

---
#### Config object
At the top level your config object should look like this
```typescript
const configObj = {
     0: P0,
     1: P1,
     2: P2,
     3: P3,
}
```
Do not pay attention to the 0 key in the object for now i will explain that a little down the page.
