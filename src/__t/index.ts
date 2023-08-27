import { createUrlBuilderWith } from "../index";
import endpoints from "./data/api-football";

const urlBuilder = createUrlBuilderWith(endpoints);

// execute: ts-node filename.ts to execute without compile
// const result = urlBuilder.new().setPath("odds").setPath("live").setQuery("league", 56).build();
// console.log(result);
