import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    //set up a controlled form with internal state
    content: '',
    author: ''
  }

  handleOnChange = event => {
    // Handle Updating Component State
    if (event.target.classList.contains('quote')) {
      this.setState({ content: event.target.value })
    } else {
      this.setState({ author: event.target.value })
    }
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    event.preventDefault()
    // Create quote object from state
    const quoteObj = {
      id: uuid(),
      content: this.state.content,
      author: this.state.author,
      votes: 0
    }
    if (this.state.content && this.state.author) {
      // Pass quote object to action creator
      this.props.addQuote(quoteObj)
      // Update component state to return to default state
      this.setState({
        content: '',
        author: ''
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control quote"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control author"
                        type="text"
                        value={this.state.author}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    addQuote: (quote) => { dispatch(addQuote(quote)) }
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);
