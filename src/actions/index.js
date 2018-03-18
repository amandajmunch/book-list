export function selectBook(book){
  // selectBook is an ActionCreator, it needs to return an action, an objecgt with a type property
  // type can be a string or a constant
  // type (uppercase), sometimes payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
