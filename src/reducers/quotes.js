import uuid from 'uuid';

export default (state = [], action) => {
  let newState = [...state]
  let quoteObj = {}

  switch (action.type) {
  case 'ADD_QUOTE':
    return [...state, action.payload];
  case 'REMOVE_QUOTE':
    console.log(action);
    newState = newState.filter(quote => quote.id !== action.payload)
    return newState;
  case 'UPVOTE_QUOTE':
    quoteObj = newState.find(quote => quote.id === action.payload)
    quoteObj.votes++
    return newState;
  case 'DOWNVOTE_QUOTE':
    quoteObj = newState.find(quote => quote.id === action.payload)
    quoteObj.votes--
    return newState;
  default:
    return state;
  }
}
