/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDemo = /* GraphQL */ `
  query GetDemo($id: ID!) {
    getDemo(id: $id) {
      id
      text
      author
      createdAt
      updatedAt
    }
  }
`;
export const listDemos = /* GraphQL */ `
  query ListDemos(
    $filter: ModelDemoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDemos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        author
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
