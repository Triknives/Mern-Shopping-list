import React from 'react';
import FavoritesList from './FavoritesList';
import FavoritesModal from './FavoritesModal';
import BooksRead from './BooksRead';
import BooksModal from './BooksModal';
import ShoppingList from './ShoppingList';
import ItemModal from './ItemModal';

const listContainerAtt = {
  display:'flex',
  flexDirection:'column',

}

function ListContainer()  {

    return(
      <div style = {listContainerAtt}>
      <FavoritesList/>
      <FavoritesModal/>
      <BooksRead/>
      <BooksModal/>
      <ShoppingList/>
      <ItemModal/>
      </div>
    )
}

export default ListContainer;
