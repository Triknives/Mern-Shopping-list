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
import { addBook } from '../actions/bookActions';

class BooksModal extends Component {
  state = {
    modal: false,
    title: '',
    author: '',
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  onChange = (e) => {
    this.setState({[e.target.title]: e.target.value});
    this.setState({[e.target.author]: e.target.value});
  }
  onSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title: this.state.title,
      author: this.state.author
    }
    // Add item via Add Completed Book actions
    this.props.addBook(newBook);

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
              <Label for="title">Book</Label>
                <Input
                  type="text"
                  name="title"
                  placeholder="Add The Book You Read!"
                  onChange={this.onChange}
                />
                <Label for="author">Author</Label>
                <Input
                  type="text"
                  name="author"
                  placeholder="Author"
                  onChange={this.onChange}
                />
                <Button color="dark" block>
                Add Book
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
  book: state.book
});
export default connect(mapStateToProps, { addBook })(BooksModal);
