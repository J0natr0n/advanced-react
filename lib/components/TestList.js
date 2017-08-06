import React from 'react';
import Test from './Test.js'
import Foundation, {Row} from 'react-foundation';

const TestList = (props) => {
  return(
    <Row className="display">
      {Object.values(props.tests).map(test =>
        <Test
          key={test.id}
          test={test}
          actions={props.testActions}
        />
      )}
    </Row>
  );
}

export default TestList;
