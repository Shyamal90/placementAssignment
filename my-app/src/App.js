import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Shopping Mall</h1>

      {/* Option for select location */}
      <div className="locationSection">
        <select name="" id="">
          <option value="--">Selet Location</option>
          <option value="bangalore">Bangalore</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="rajesthan">Rajesthan</option>
          <option value="pune">Pune</option>
          <option value="chennia">Chennia</option>
        </select>
      </div>


      <div className="container">
        <div className="filterSection">
           <h4>Filter By</h4>
           <div className="filterContainer">
             <p>Rating</p>
             <p></p>
             <p></p>
             <p></p>
           </div>
        </div>
        <div className="productSection"></div>
      </div>
    </div>
  );
}

export default App;



/*
   1. Make 10 different data lists.
   2. Data has some properties like
      1. id
      2. From which shop
      3. Offers
      4. Rating of the product
      5. Payment Option []
      6. Name

    3. 
*/