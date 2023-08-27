import { AllPathsInitial } from "../buffer";
export namespace Query {
     export type GetQuery<
          AllPaths extends AllPathsInitial,
          BaseUrl,
          QueryNumber,
          P1,
          P2,
          P3,
          P4,
          P5,
          P6,
          P7
     > = QueryNumber extends 0
          ? GetBaseUrlQ<AllPaths, BaseUrl>
          : QueryNumber extends 1
          ? GetP1Q<AllPaths, P1>
          : QueryNumber extends 2
          ? GetP2Q<AllPaths, P1, P2>
          : QueryNumber extends 3
          ? GetP3Q<AllPaths, P1, P2, P3>
          : QueryNumber extends 4
          ? GetP4Q<AllPaths, P1, P2, P3, P4>
          : QueryNumber extends 5
          ? GetP5Q<AllPaths, P1, P2, P3, P4, P5>
          : QueryNumber extends 6
          ? GetP6Q<AllPaths, P1, P2, P3, P4, P5, P6>
          : QueryNumber extends 7
          ? GetP7Q<AllPaths, P1, P2, P3, P4, P5, P6, P7>
          : never;
     export type GetQueryValue<
          AllPaths extends AllPathsInitial,
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
     > = QueryNumber extends 0
          ? GetBaseUrlQV<AllPaths, BaseUrl, CurrentQuery>
          : QueryNumber extends 1
          ? GetP1QV<AllPaths, P1, CurrentQuery>
          : QueryNumber extends 2
          ? GetP2QV<AllPaths, P1, P2, CurrentQuery>
          : QueryNumber extends 3
          ? GetP3QV<AllPaths, P1, P2, P3, CurrentQuery>
          : QueryNumber extends 4
          ? GetP4QV<AllPaths, P1, P2, P3, P4, CurrentQuery>
          : QueryNumber extends 5
          ? GetP5QV<AllPaths, P1, P2, P3, P4, P5, CurrentQuery>
          : QueryNumber extends 6
          ? GetP6QV<AllPaths, P1, P2, P3, P4, P5, P6, CurrentQuery>
          : QueryNumber extends 7
          ? GetP7QV<AllPaths, P1, P2, P3, P4, P5, P6, P7, CurrentQuery>
          : never;
}

type GetBaseUrlQ<AllPaths extends AllPathsInitial, BaseUrl> = BaseUrl extends string ? keyof AllPaths[0] : never;
type GetP1Q<AllPaths extends AllPathsInitial, P1> = P1 extends keyof AllPaths[1] ? keyof AllPaths[1][P1] : never;

type GetP2Q<AllPaths extends AllPathsInitial, P1, P2> = P1 extends keyof AllPaths[2]
     ? P2 extends keyof AllPaths[2][P1]
          ? keyof AllPaths[2][P1][P2]
          : never
     : never;

type GetP3Q<AllPaths extends AllPathsInitial, P1, P2, P3> = P1 extends keyof AllPaths[3]
     ? P2 extends keyof AllPaths[3][P1]
          ? P3 extends keyof AllPaths[3][P1][P2]
               ? keyof AllPaths[3][P1][P2][P3]
               : never
          : never
     : never;
type GetP4Q<AllPaths extends AllPathsInitial, P1, P2, P3, P4> = P1 extends keyof AllPaths[4]
     ? P2 extends keyof AllPaths[4][P1]
          ? P3 extends keyof AllPaths[4][P1][P2]
               ? P4 extends keyof AllPaths[4][P1][P2][P3]
                    ? keyof AllPaths[4][P1][P2][P3][P4]
                    : never
               : never
          : never
     : never;
type GetP5Q<AllPaths extends AllPathsInitial, P1, P2, P3, P4, P5> = P1 extends keyof AllPaths[5]
     ? P2 extends keyof AllPaths[5][P1]
          ? P3 extends keyof AllPaths[5][P1][P2]
               ? P4 extends keyof AllPaths[5][P1][P2][P3]
                    ? P5 extends keyof AllPaths[5][P1][P2][P3][P4]
                         ? keyof AllPaths[5][P1][P2][P3][P4][P5]
                         : never
                    : never
               : never
          : never
     : never;
type GetP6Q<AllPaths extends AllPathsInitial, P1, P2, P3, P4, P5, P6> = P1 extends keyof AllPaths[6]
     ? P2 extends keyof AllPaths[6][P1]
          ? P3 extends keyof AllPaths[6][P1][P2]
               ? P4 extends keyof AllPaths[6][P1][P2][P3]
                    ? P5 extends keyof AllPaths[6][P1][P2][P3][P4]
                         ? P6 extends keyof AllPaths[6][P1][P2][P3][P4][P5]
                              ? keyof AllPaths[6][P1][P2][P3][P4][P5][P6]
                              : never
                         : never
                    : never
               : never
          : never
     : never;
type GetP7Q<AllPaths extends AllPathsInitial, P1, P2, P3, P4, P5, P6, P7> = P1 extends keyof AllPaths[7]
     ? P2 extends keyof AllPaths[7][P1]
          ? P3 extends keyof AllPaths[7][P1][P2]
               ? P4 extends keyof AllPaths[7][P1][P2][P3]
                    ? P5 extends keyof AllPaths[7][P1][P2][P3][P4]
                         ? P6 extends keyof AllPaths[7][P1][P2][P3][P4][P5]
                              ? P7 extends keyof AllPaths[7][P1][P2][P3][P4][P5][P6]
                                   ? keyof AllPaths[7][P1][P2][P3][P4][P5][P6][P7]
                                   : never
                              : never
                         : never
                    : never
               : never
          : never
     : never;

// **********************************************************************************************************
type GetBaseUrlQV<AllPaths extends AllPathsInitial, BaseUrl, CurrentQuery> = BaseUrl extends string
     ? CurrentQuery extends keyof AllPaths[0]
          ? AllPaths[0][CurrentQuery]
          : never
     : never;
type GetP1QV<AllPaths extends AllPathsInitial, P1, CurrentQuery> = P1 extends keyof AllPaths[1]
     ? CurrentQuery extends keyof AllPaths[1][P1]
          ? AllPaths[1][P1][CurrentQuery]
          : never
     : never;

type GetP2QV<AllPaths extends AllPathsInitial, P1, P2, CurrentQuery> = P1 extends keyof AllPaths[2]
     ? P2 extends keyof AllPaths[2][P1]
          ? CurrentQuery extends keyof AllPaths[2][P1][P2]
               ? AllPaths[2][P1][P2][CurrentQuery]
               : never
          : never
     : never;
type GetP3QV<AllPaths extends AllPathsInitial, P1, P2, P3, CurrentQuery> = P1 extends keyof AllPaths[3]
     ? P2 extends keyof AllPaths[3][P1]
          ? P3 extends keyof AllPaths[3][P1][P2]
               ? CurrentQuery extends keyof AllPaths[3][P1][P2][P3]
                    ? AllPaths[3][P1][P2][P3][CurrentQuery]
                    : never
               : never
          : never
     : never;
type GetP4QV<AllPaths extends AllPathsInitial, P1, P2, P3, P4, CurrentQuery> = P1 extends keyof AllPaths[4]
     ? P2 extends keyof AllPaths[4][P1]
          ? P3 extends keyof AllPaths[4][P1][P2]
               ? P4 extends keyof AllPaths[4][P1][P2][P3]
                    ? CurrentQuery extends keyof AllPaths[4][P1][P2][P3][P4]
                         ? AllPaths[4][P1][P2][P3][P4][CurrentQuery]
                         : never
                    : never
               : never
          : never
     : never;
type GetP5QV<AllPaths extends AllPathsInitial, P1, P2, P3, P4, P5, CurrentQuery> = P1 extends keyof AllPaths[5]
     ? P2 extends keyof AllPaths[5][P1]
          ? P3 extends keyof AllPaths[5][P1][P2]
               ? P4 extends keyof AllPaths[5][P1][P2][P3]
                    ? P5 extends keyof AllPaths[5][P1][P2][P3][P4]
                         ? CurrentQuery extends keyof AllPaths[5][P1][P2][P3][P4][P5]
                              ? AllPaths[5][P1][P2][P3][P4][P5][CurrentQuery]
                              : never
                         : never
                    : never
               : never
          : never
     : never;
type GetP6QV<AllPaths extends AllPathsInitial, P1, P2, P3, P4, P5, P6, CurrentQuery> = P1 extends keyof AllPaths[6]
     ? P2 extends keyof AllPaths[6][P1]
          ? P3 extends keyof AllPaths[6][P1][P2]
               ? P4 extends keyof AllPaths[6][P1][P2][P3]
                    ? P5 extends keyof AllPaths[6][P1][P2][P3][P4]
                         ? P6 extends keyof AllPaths[6][P1][P2][P3][P4][P5]
                              ? CurrentQuery extends keyof AllPaths[6][P1][P2][P3][P4][P5][P6]
                                   ? AllPaths[6][P1][P2][P3][P4][P5][P6][CurrentQuery]
                                   : never
                              : never
                         : never
                    : never
               : never
          : never
     : never;
type GetP7QV<AllPaths extends AllPathsInitial, P1, P2, P3, P4, P5, P6, P7, CurrentQuery> = P1 extends keyof AllPaths[7]
     ? P2 extends keyof AllPaths[7][P1]
          ? P3 extends keyof AllPaths[7][P1][P2]
               ? P4 extends keyof AllPaths[7][P1][P2][P3]
                    ? P5 extends keyof AllPaths[7][P1][P2][P3][P4]
                         ? P6 extends keyof AllPaths[7][P1][P2][P3][P4][P5]
                              ? P7 extends keyof AllPaths[7][P1][P2][P3][P4][P5][P6]
                                   ? CurrentQuery extends keyof AllPaths[7][P1][P2][P3][P4][P5][P6][P7]
                                        ? AllPaths[7][P1][P2][P3][P4][P5][P6][P7][CurrentQuery]
                                        : never
                                   : never
                              : never
                         : never
                    : never
               : never
          : never
     : never;
