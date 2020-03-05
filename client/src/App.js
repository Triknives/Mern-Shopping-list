import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ReviewList from './components/ReviewList';
import FavoritesList from './components/FavoritesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import FavoritesModal from './components/FavoritesModal';
import ReviewModal from './components/reviewModal';
import BooksRead from './components/BooksRead';
import BooksModal from './components/BooksModal';
import ListContainer from './components/listContainer';
import { Container } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <Container>
          <AppNavbar/>
          <ListContainer/>
          <ReviewList/>
          <ReviewModal/>
          </Container>
          </div>
      </Provider>
    );
  }
}
export default App;
