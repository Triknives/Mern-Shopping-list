import React from 'react';
import FavoritesList from './FavoritesList';
import FavoritesModal from './FavoritesModal';
import GoalsList from './GoalsList';
import GoalsModal from './GoalsModal';
import ShoppingList from './ShoppingList';
import ItemModal from './ItemModal';

const listContainerAtt = {
  display:'flex',
  flexDirection:'row',
  width:'100%',

}

function ListContainer()  {

  return(
    <div style = {listContainerAtt}>
      <FavoritesList/>
      <ShoppingList/>
      <GoalsList/>
    </div>
  )
}

export default ListContainer;
