export class PathBuilder6<T> {
     private path: string = "";

     new() {
          this.path = "";
     }

     setPath<C extends T>(p: C) {
          this.path = this.path + "/" + p;
     }

     getPath() {
          return this.path;
     }
}
