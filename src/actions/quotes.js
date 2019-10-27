// TODO: Create action creators as defined in tests
function addQuote(quoteObj) {
  return { type: 'ADD_QUOTE', payload: quoteObj };
}

function removeQuote(quoteId) {
  return { type: 'REMOVE_QUOTE', payload: quoteId };
}

function upvoteQuote(quoteId) {
  return { type: 'UPVOTE_QUOTE', payload: quoteId };
}

function downvoteQuote(quoteId) {
  return { type: 'DOWNVOTE_QUOTE', payload: quoteId };
}

export { addQuote, removeQuote, upvoteQuote, downvoteQuote }
