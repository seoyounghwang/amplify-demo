/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDemo = /* GraphQL */ `
  mutation CreateDemo(
    $input: CreateDemoInput!
    $condition: ModelDemoConditionInput
  ) {
    createDemo(input: $input, condition: $condition) {
      id
      text
      author
      createdAt
      updatedAt
    }
  }
`;
export const updateDemo = /* GraphQL */ `
  mutation UpdateDemo(
    $input: UpdateDemoInput!
    $condition: ModelDemoConditionInput
  ) {
    updateDemo(input: $input, condition: $condition) {
      id
      text
      author
      createdAt
      updatedAt
    }
  }
`;
export const deleteDemo = /* GraphQL */ `
  mutation DeleteDemo(
    $input: DeleteDemoInput!
    $condition: ModelDemoConditionInput
  ) {
    deleteDemo(input: $input, condition: $condition) {
      id
      text
      author
      createdAt
      updatedAt
    }
  }
`;
