import React, { Component } from 'react';
import { Container } from 'reactstrap';
import AppNavbar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import ItemModal from "./components/itemModal";
import { Provider } from 'react-redux';
import store from './store';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal/>
            <ShoppingList/>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
