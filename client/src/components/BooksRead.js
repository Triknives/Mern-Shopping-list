import React, { Component } from 'react';
import { Container , ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const favoritesList = {
  display:'inline-block',
  border:'2px grey solid',
  margin: '.25vh',
  width:'15vw',
  float:'left',
  marginLeft:'28vw',
}

const listBody = {
  backgroundColor: '#324087',
  color: 'white',
  fontWeight: '600',
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
      <div>
          <ListGroup style = {favoritesList}>
            <TransitionGroup className="shopping-list">
            {items.map(({_id, name}) => (
              <CSSTransition key= {_id} timeout={500} classNames="fade">
                <ListGroupItem style = {listBody}>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
            </TransitionGroup>
          </ListGroup>
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
