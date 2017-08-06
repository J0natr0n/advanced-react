import React from 'react';
import Foundation, {Column} from 'react-foundation';

const dateDisplay = (dateString) =>
new Date(dateString).toDateString();

const Test = (props) => {
  const {test, actions} = props;
  const author = actions.lookupAuthor(test.authorId);
  return(
    <Column small={12} large={4}>
      <p>{test.id}</p>
      <img src={test.a} />
      <img src={test.b} />
      <p>{dateDisplay(test.date)}</p>
      <img src={test.diff} />
      <p>{test.pixels}</p>
      <p>{test.status}</p>
      <a href={test.url}>{test.url}</a>
      <p>{author.name}</p>
    </Column>
  )
}

export default Test;
