import React, { Component } from 'react';
import TestList from './TestList';
import DataApi from '../DataApi';
import { data } from '../testData';
import Nav from './Nav';

const api = new DataApi(data);

export default class App extends Component {
  constructor(){
  	super();
  	this.state = {
      tests: api.getTests(),
      authors: api.getAuthors(),
    };
  console.log(this.state);
  }


  testActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  }

  render(){
    return(
      <div className="wrapper">
        <Nav/>
      <TestList
        tests={this.state.tests}
        testActions={this.testActions} />
      </div>
    );
  }
}
