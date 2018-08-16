import React from 'react';
import City from './components/city/city';
import History from './components/history/history';
import Navbar from './components/navbar/navbar';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron text-center'>
          <h1>A Weather Application</h1>
          <h5>Because you can always talk about the weather</h5>
        </div>
        <Navbar />
        <br />
        <br />
        <div className='container'>
          <div className='row'>
            <City />
            <History />
          </div>
        </div>

      </div>




    );
  }
}
