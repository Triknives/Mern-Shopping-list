import React, { Component } from 'react';
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addCompletedBooks } from '../actions/completedBooksActions';

class BooksModal extends Component {
  state = {
    modal: false,
    title: '',
    author: '',
    dateCompleted:'',
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  onChange = (e) => {
    this.setState({[e.target.title]: e.target.value});
    this.setState({[e.target.author]: e.target.value});
    this.setState({[e.target.dateCompleted]: e.target.value});
  }
  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      title: this.state.title,
      author:this.state.author,
      dateCompleted:this.state.dateCompleted,
    }
    // Add item via AddItem actions
    this.props.addCompletedBooks(newItem);

    //Close Modal
    this.toggle();
  }

  render() {
    return(
      <div>
      <Button
        color="dark"
        onClick={this.toggle}
      >Add Book</Button>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
      >
        <ModalHeader toggle={this.toggle}>Add Recently Read Book</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="completedBooks">Book</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Add The Book You Read!"
                  onChange={this.onChange}
                />
                <Label for="completedBooks">Author</Label>
                <Input
                  type="text"
                  name="author"
                  placeholder="Author"
                  onChange={this.onChange}
                />
                <Label for="completedBooks">Date Completed</Label>
                <Input
                  type="text"
                  name="completedBooks"
                  placeholder="Author"
                  onChange={this.onChange}
                />
                <Button color="dark" block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  completedBook: state.completedBook
});
export default connect(mapStateToProps, { addCompletedBooks })(BooksModal);
