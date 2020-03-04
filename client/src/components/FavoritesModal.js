import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

const favButton = {

}

class FavoritesModal extends Component {
  state = {
    modal: false,
    name: ''
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    }
    // Add item via AddItem actions
    this.props.addItem(newItem);

    //Close Modal
    this.toggle();
  }

  render() {
    return(
        <Container fluid={true}>
      <Button
        className = "favButton"
        color="dark"
        onClick={this.toggle}
      >Add Favorite</Button>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
      >
        <ModalHeader toggle={this.toggle}>Add Favorite Book!</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Add a favorite of yours!"
                  onChange={this.onChange}
                />
                <Button color="dark" block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </Container>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});
export default connect(mapStateToProps, { addItem })(FavoritesModal);
