import React, {useState, useEffect} from "react";

const NameSearch = () => {

return (
    <div>
      <label for="namesearch">Enter Account Name:</label><br></br><br></br>
      <input type="text" id="namesearch" name="namesearch"></input><br></br><br></br>

      <div>
        <button>Search</button>
      </div>
    </div>
  );
};

export default NameSearch;