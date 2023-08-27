import { AllPathsInitial } from "../buffer";

export namespace Path {
     export type NextPaths<
          AllPaths extends AllPathsInitial,
          PathNumber,
          CurrentPath,
          P1,
          P2,
          P3,
          P4,
          P5
     > = PathNumber extends 1
          ? GetP2<AllPaths, CurrentPath>
          : PathNumber extends 2
          ? GetP3<AllPaths, P1, CurrentPath>
          : PathNumber extends 3
          ? GetP4<AllPaths, P1, P2, CurrentPath>
          : PathNumber extends 4
          ? GetP5<AllPaths, P1, P2, P3, CurrentPath>
          : PathNumber extends 5
          ? GetP6<AllPaths, P1, P2, P3, P4, CurrentPath>
          : PathNumber extends 6
          ? GetP7<AllPaths, P1, P2, P3, P4, P5, CurrentPath>
          : never;

     export namespace Exact {
          export type P1<PathNumber, P1, CurrentPath> = PathNumber extends 1 ? CurrentPath : P1;
          export type P2<PathNumber, P2, CurrentPath> = PathNumber extends 2 ? CurrentPath : P2;
          export type P3<PathNumber, P3, CurrentPath> = PathNumber extends 3 ? CurrentPath : P3;
          export type P4<PathNumber, P4, CurrentPath> = PathNumber extends 4 ? CurrentPath : P4;
          export type P5<PathNumber, P5, CurrentPath> = PathNumber extends 5 ? CurrentPath : P5;
          export type P6<PathNumber, P6, CurrentPath> = PathNumber extends 6 ? CurrentPath : P6;
          export type P7<PathNumber, P7, CurrentPath> = PathNumber extends 7 ? CurrentPath : P7;
     }
}

type GetP2<AllPaths extends AllPathsInitial, CurrentPath> = CurrentPath extends keyof AllPaths[2]
     ? keyof AllPaths[2][CurrentPath]
     : never;
type GetP3<AllPaths extends AllPathsInitial, P1, CurrentPath> = P1 extends keyof AllPaths[3]
     ? CurrentPath extends keyof AllPaths[3][P1]
          ? keyof AllPaths[3][P1][CurrentPath]
          : never
     : never;
type GetP4<AllPaths extends AllPathsInitial, P1, P2, CurrentPath> = P1 extends keyof AllPaths[4]
     ? P2 extends keyof AllPaths[4][P1]
          ? CurrentPath extends keyof AllPaths[4][P1][P2]
               ? keyof AllPaths[4][P1][P2][CurrentPath]
               : never
          : never
     : never;
type GetP5<AllPaths extends AllPathsInitial, P1, P2, P3, CurrentPath> = P1 extends keyof AllPaths[5]
     ? P2 extends keyof AllPaths[5][P1]
          ? P3 extends keyof AllPaths[5][P1][P2]
               ? CurrentPath extends keyof AllPaths[5][P1][P2][P3]
                    ? keyof AllPaths[5][P1][P2][P3][CurrentPath]
                    : never
               : never
          : never
     : never;
type GetP6<AllPaths extends AllPathsInitial, P1, P2, P3, P4, CurrentPath> = P1 extends keyof AllPaths[6]
     ? P2 extends keyof AllPaths[6][P1]
          ? P3 extends keyof AllPaths[6][P1][P2]
               ? P4 extends keyof AllPaths[6][P1][P2][P3]
                    ? CurrentPath extends keyof AllPaths[6][P1][P2][P3][P4]
                         ? keyof AllPaths[6][P1][P2][P3][P4][CurrentPath]
                         : never
                    : never
               : never
          : never
     : never;
type GetP7<AllPaths extends AllPathsInitial, P1, P2, P3, P4, P5, CurrentPath> = P1 extends keyof AllPaths[7]
     ? P2 extends keyof AllPaths[7][P1]
          ? P3 extends keyof AllPaths[7][P1][P2]
               ? P4 extends keyof AllPaths[7][P1][P2][P3]
                    ? P5 extends keyof AllPaths[7][P1][P2][P3][P4]
                         ? CurrentPath extends keyof AllPaths[7][P1][P2][P3][P4][P5]
                              ? keyof AllPaths[7][P1][P2][P3][P4][P5][CurrentPath]
                              : never
                         : never
                    : never
               : never
          : never
     : never;
