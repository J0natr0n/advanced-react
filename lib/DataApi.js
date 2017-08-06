export default class DataApi {
  constructor(rawData){
  	this.rawData = rawData;
  }
  mapIntoObject(arr){
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {}); //see how we returned that blank object --note that thank you to pluralsight.com
  }
  getTests(){
    return this.mapIntoObject(this.rawData.tests);
  }
  getAuthors(){
    return this.mapIntoObject(this.rawData.authors);
  }
}
