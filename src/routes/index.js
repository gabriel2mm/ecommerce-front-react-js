import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ProductsPage from '../pages/products/index';
import FavoritesPage from '../pages/favorites/index';
import CartPage from '../pages/cart/index';
import SearchPage from '../pages/search';
import PaymentPage from '../pages/payment';

export const Routes = () => {
    return (
      <Switch>
        <Route exact path="/" component={ProductsPage}/>
        <Route path="/products" component={ProductsPage}/>
        <Route path="/favorites" component={FavoritesPage}/>
        <Route path="/cart" component={CartPage}/>
        <Route path="/search" component={SearchPage}/>
        <Route path="/payment" component={PaymentPage}/>
        <Route path="/**" render={() => <span>Nenhum componente disponível</span>} />
      </Switch>
    )
}