export class QueryBuilder {
     private queryStart: string = "?";
     private query: string = "";

     new() {
          this.query = "";
     }

     setQuery<Q, V>(q: Q, v: V) {
          if (this.query.length === 0) {
               this.query = this.queryStart + q + "=" + v;
               return;
          }
          this.query = this.query + "&" + q + "=" + v;
     }

     getQuery() {
          return this.query;
     }
}
