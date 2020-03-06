import React, { Component } from 'react';
import { Container , Button} from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import ItemModal from './ItemModal';
import PropTypes from 'prop-types';

const tGroup = {
  width: '34%',
  backgroundColor: 'black',
  opacity:'.75',
  margin: '1vh',
  padding:'1vh',
  }

const listBody = {
  color: 'white',
  fontWeight: '600',
  fontSize:'1rem',
}

const listHeader = {
  opacity:'1',
  color:'yellow',
}

class ShoppingList extends Component {
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
          <h5 style = {listHeader}>Book Queue</h5>
          {items.map(({_id, name, author}) => (
        <ul style = {listBody}>
              <li>
              <Button color= "danger" onClick={this.onDeleteClick.bind(this, _id)}>
                  &times;
                </Button>
              {name} {author}
              </li>
          </ul>
          ))}
        <ItemModal/>
      </div>
    );
  }
}
ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
