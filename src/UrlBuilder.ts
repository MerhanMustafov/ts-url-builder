import { PathBuilder6 } from "./PathBuilder";
import { QueryBuilder } from "./QueryBuilder";
import { AllPathsInitial, Number, Path, Query } from "./buffer";

export class UrlBuilder<
     AllPaths extends AllPathsInitial,
     BaseUrl extends string,
     QueryNumber,
     PathNumber,
     PathCurrent,
     P1,
     P2,
     P3,
     P4,
     P5,
     P6,
     P7
> {
     private baseUrl?: BaseUrl;
     private path: PathBuilder6<PathCurrent>;
     private query: QueryBuilder;

     constructor(baseUrl?: BaseUrl) {
          this.baseUrl = baseUrl;
          this.path = new PathBuilder6();
          this.query = new QueryBuilder();
     }

     new() {
          this.path.new();
          this.query.new();
          return this as UrlBuilder<
               AllPaths,
               BaseUrl,
               0, // QueryNumber
               1, // PathNumber
               keyof AllPaths[1], // PathCurrent
               null, // 1
               null, // 2
               null, // 3
               null, // 4
               null, // 5
               null, // 6
               null // 7
          >;
     }

     setPath<CurrentPath extends PathCurrent>(p: CurrentPath) {
          this.path.setPath(p);

          return this as UrlBuilder<
               AllPaths,
               BaseUrl,
               Number.GetNextQueryNumber<QueryNumber>,
               Number.GetNextPathNumber<PathNumber>,
               Path.NextPaths<AllPaths, PathNumber, CurrentPath, P1, P2, P3, P4, P5>,
               Path.Exact.P1<PathNumber, P1, CurrentPath>,
               Path.Exact.P2<PathNumber, P2, CurrentPath>,
               Path.Exact.P3<PathNumber, P3, CurrentPath>,
               Path.Exact.P4<PathNumber, P4, CurrentPath>,
               Path.Exact.P5<PathNumber, P5, CurrentPath>,
               Path.Exact.P6<PathNumber, P6, CurrentPath>,
               Path.Exact.P7<PathNumber, P7, CurrentPath>
          >;
     }

     setQuery<
          CurrentQuery extends Query.GetQuery<AllPaths, BaseUrl, QueryNumber, P1, P2, P3, P4, P5, P6, P7>,
          CurrentValue extends Query.GetQueryValue<
               AllPaths,
               BaseUrl,
               CurrentQuery,
               QueryNumber,
               P1,
               P2,
               P3,
               P4,
               P5,
               P6,
               P7
          >
     >(key: CurrentQuery, value: CurrentValue) {
          this.query.setQuery(key, value);
          return this;
     }

     private clean(url: string) {
          return url.replace(/[\/?&]{2,}/g, (match) => {
               return match.charAt(0);
          });
     }

     build() {
          const path = this.path.getPath();
          const query = this.query.getQuery();
          if (this.baseUrl) {
               return this.baseUrl + this.clean(path + query);
          }
          return this.clean(path + query);
     }
}
