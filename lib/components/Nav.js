import React, {Component} from 'react';
import Foundation, {Row,Column} from 'react-foundation';

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.stuff = {
      title: "HelpxImgCompare"
    }
  }
  render(){
    return(
      <Row className="fluid">
        <Column large={12}>
          <div className="top-bar">
            <div>
              {this.stuff.title}
            </div>
          </div>
        </Column>
      </Row>
    )
  }

}
