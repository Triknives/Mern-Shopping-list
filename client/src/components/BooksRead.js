import React, { Component } from 'react';
import { Container , ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import BooksModal from './BooksModal';
import PropTypes from 'prop-types';

const listBody = {
  backgroundColor: '#324087',
  color: 'white',
}

const tGroup = {
  width: '30%',
  border:'solid grey 2px'
}

const groupWidth = {
    float:'left',
}

class BooksRead extends Component {
  componentDidMount(){
    this.props.getItems();
  }
  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };
  render() {

    const { items } = this.props.item;
    return(
      <div style = {tGroup}>
          {items.map(({_id, name}) => (
          <ul>
              <li>
              <button onClick={this.onDeleteClick.bind(this, _id)}>
                  &times;
                </button>
              {name}
              </li>
          </ul>
          ))}
      <BooksModal/>
      </div>
      );
    }
  }
BooksRead.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(BooksRead);
