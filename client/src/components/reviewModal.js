import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addReview } from '../actions/reviewActions';

const reviewButton = {
  textAlign:'center',
  width: '100%',
  float:'left',
  marginTop:'8vh',
}

class ReviewModal extends Component {
  state = {
    modal: false,
    post:''
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    console.log(e.target.name)
    console.log(e.target.value)
  }
  onSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      post: this.state.post
    }
    // add review via addReview from Actions
    this.props.addReview(newReview);

    //close Modal
    this.toggle();
}

render(){
  return(
    <div>
      <div style = {reviewButton}>
    <Button
      color="dark"
      onClick={this.toggle}
      >Add Review</Button>
      </div>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
      >
        <ModalHeader toggle={this.toggle}>Add To Review List</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="review">Review</Label>
                <Input
                  type="textarea"
                  name="post"
                  placeholder="Add New Review"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{marginTop:'2rem'}}
                block>
                Add Review
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
  review: state.review
});

export default connect(mapStateToProps, { addReview })(ReviewModal);
