// state argument is not application state, only the state this reducer is responsible for. function will get called frequently
export default function(state = null, action){
  switch(action.type){
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}
