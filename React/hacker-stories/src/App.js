import React from "react";

class Developer{
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName(){
    return this.firstName+' '+this.lastName;
  }
}

  

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor='search'>Search:</label>
      <input id = 'search' type = 'text'/>
      {/*creating an instance of List component*/}
      <List/>
      {/*creating another instance of list component*/}
      <List/>
  </div>
  );
}

function List(){
  const ajay = new Developer('ajay','nag');
  const amrutha = new Developer('amrutha','varshini');

  return (<div>
    {ajay.getName()};
    {amrutha.getName()};

</div>
  )
  }
export default App;
