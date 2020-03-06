import React, { Component } from 'react';
import { Container , ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getReadBooks, deleteReadBook } from '../actions/readBookActions';
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
    this.props.getReadBooks();
  }
  onDeleteClick = (id) => {
    this.props.deleteReadBook(id);
  };
  render() {
    
  const { readBooks } = this.props.readBook;
    return(

      <div style = {tGroup}>
          {readBooks.map(({_id, title, author}) => (
          <ul style = {listBody}>
              <li>
              <Button color= "danger" onClick={this.onDeleteClick.bind(this, _id)}>
                  &times;
                </Button>
              <strong>Title:</strong> {title}
              <em>Author:</em> {author}
              </li>
          </ul>
          ))}
      <BooksModal/>
      </div>
      );
    }
  }
BooksRead.propTypes = {
  getReadBooks: PropTypes.func.isRequired,
  readBook: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  readBook: state.readBook
});

export default connect(mapStateToProps, { getReadBooks, deleteReadBook })(BooksRead);
