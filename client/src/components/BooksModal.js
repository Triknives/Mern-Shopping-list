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
    goal: '',
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  onChange = (e) => {
    this.setState({[e.target.goal]: e.target.goal})
    console.log(e.target.value)
  }
  onSubmit = (e) => {
    e.preventDefault();

    const newGoal = {
      goal: this.props.goal,
    }
    console.log(this.state.title)
    // Add item via AddItem actions
    this.props.addGoal(newGoal);
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
              <Label for="Goal">New Goal</Label>
                <Input
                  type="text"
                  name="goal"
                  placeholder="Who Wrote it!"
                  onChange={this.onChange}
                />
                <Button color="dark" block>
                Add Goal
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
