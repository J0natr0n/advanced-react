import DataApi from '../DataApi';
import {data} from '../testData';
import {assignedLabels, mode, nodeDescription, nodeName, numExecutors, description, jobs} from '../jenkinsData.json';

const api = new DataApi(data);

describe('DataApi', () => {

  it('exposes all tests as an object', () => {
    const tests = api.getTests();
    const testId = data.tests[0].id;
    const testStatus = data.tests[0].status;

    expect(tests).toHaveProperty(testId);
    expect(tests[testId].status).toBe(testStatus);
  });

  it('exposes all authors as an object', () => {
    const authors = api.getAuthors();
    const authorId = data.authors[0].id;
    const authorName = data.authors[0].name;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].name).toBe(authorName);
  });

});
