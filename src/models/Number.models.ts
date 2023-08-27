export namespace Number {
     export type GetNextPathNumber<Number> = Number extends 1
          ? 2
          : Number extends 2
          ? 3
          : Number extends 3
          ? 4
          : Number extends 4
          ? 5
          : Number extends 5
          ? 6
          : Number extends 6
          ? 7
          : never;

     export type GetNextQueryNumber<Number> = Number extends 0
          ? 1
          : Number extends 1
          ? 2
          : Number extends 2
          ? 3
          : Number extends 3
          ? 4
          : Number extends 4
          ? 5
          : Number extends 5
          ? 6
          : Number extends 6
          ? 7
          : never;
}
