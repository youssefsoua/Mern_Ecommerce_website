import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import CartScreen from './screens/CartScreen'
import ErrorScreen from './screens/ErrorScreen'
import WishlistScreen from './screens/WishlistScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path='/'>
            <HomeScreen />
          </Route>
          <Route exact path='/login'>
            <LoginScreen />
          </Route>
          <Route exact path='/register'>
            <RegisterScreen />
          </Route>
          <Route path='/products/:id'>
            <ProductDetailsScreen />
          </Route>
          <Route path='/cart/:id?'>
            <CartScreen />
          </Route>
          <Route path='/my_wishlist'>
            <WishlistScreen />
          </Route>
          <Route>
            <ErrorScreen />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App
