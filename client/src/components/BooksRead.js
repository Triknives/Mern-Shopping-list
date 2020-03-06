import React, { Component } from 'react';
import { Container , ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getBooks, deleteBook } from '../actions/bookActions';
import BooksModal from './BooksModal';
import PropTypes from 'prop-types';

const listBody = {
  opacity: '1',
  color: 'white',
  fontWeight: '600',
  fontSize:'1rem',
}

const tGroup = {
  width: '32%',
  backgroundColor: 'black',
  opacity:'.75',
  margin: '1vh',
  padding:'1vh',
}

const groupWidth = {
    float:'left',
}

class BooksRead extends Component {
  componentDidMount(){
    this.props.getBooks();
  }
  onDeleteClick = (id) => {
    this.props.deleteBook(id);
  };
  render() {

  const { books } = this.props.book;
    return(

      <div style = {tGroup}>
          {books.map(({_id, title, writer}) => (
          <ul style = {listBody}>
              <li>
              <Button color= "danger" onClick={this.onDeleteClick.bind(this, _id)}>
                  &times;
                </Button>
              <strong>Title:</strong> {title}
              <em>Author:</em> {writer}
              </li>
          </ul>
          ))}
      <BooksModal/>
      </div>
      );
    }
  }
BooksRead.propTypes = {
  getBooks: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  book: state.book
});

export default connect(mapStateToProps, { getBooks, deleteBook })(BooksRead);
