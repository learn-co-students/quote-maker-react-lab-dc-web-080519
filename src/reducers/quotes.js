// import uuid from 'uuid'

// const id = uuid()

// console.log(uuid())
// console.log(uuid());

export default (state = [], action) => {

// let quote

console.log('action = ' , action)
  switch (action.type) {

    case 'ADD_QUOTE':
    console.log('add quote state = ' , state);
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
    console.log('remove quote state = ' , state);
      return [...state].filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
    return state.map(quote => {
      return quote.id === action.quoteId ? {...quote, votes: quote.votes + 1} : quote
    })

    case 'DOWNVOTE_QUOTE':
    console.log('downvoting  ', state)
    return state.map(quote => {
      return quote.id === action.quoteId ? {...quote, votes: quote.votes > 0 ? quote.votes - 1 : 0 } : quote
    })

    default:
    console.log('default state = ', state);
      return state

  }
}

// export default manageQuotes
