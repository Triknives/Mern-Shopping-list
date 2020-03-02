import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ReviewList from './components/ReviewList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import ReviewModal from './components/reviewModal';
import { Container } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar/>
          <Container>
          <ItemModal/>
          <ShoppingList/>
          <ReviewModal/>
          <ReviewList/>
          </Container>
          </div>
      </Provider>
    );
  }
}
export default App;
