import { AllPathsInitial } from "./buffer";
import { UrlBuilder } from "./UrlBuilder";

export function createUrlBuilderWith<Paths extends AllPathsInitial, BaseUrl extends string>(
     config: Paths,
     baseUrl?: BaseUrl
) {
     return new UrlBuilder<
          Paths, // endpoints and queries (All Paths - (AllPathsInitial))
          BaseUrl, // baseUrl
          null, // QueryNumber
          null, // PathNumber
          null, // PathCurrent
          null, // 1
          null, // 2
          null, // 3
          null, // 4
          null, // 5
          null, // 6
          null // 7
     >(baseUrl);
}
