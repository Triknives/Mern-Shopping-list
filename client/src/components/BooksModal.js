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
    writer:''
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  onChange = (e) => {
    this.setState({[e.target.title]: e.target.value})
    this.setState({[e.target.writer]: e.target.value});
    console.log(e.target.value)
  }
  onSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title: this.props.title,
      writer: this.props.writer
    }
    console.log(this.state.title)
    // Add item via AddItem actions
    this.props.addBook(newBook);
    console.log(newBook)
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
              <Label for="Author">Writer</Label>
                <Input
                  type="text"
                  name="writer"
                  placeholder="Who Wrote it!"
                  onChange={this.onChange}
                />
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  placeholder="Add The Book You Read"
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
