import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  // 2 component one for loading and other for  tours display
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);


// remove logic  function having prop 'id' 
  const removeTour=(id)=>{

      // storing all data except that id which is clicked in 'newTours' and then 
      // re-rendering and re-fetching all data and assing that varibale in setTours function

      //here we are checking all tour id with id and re-rendering whole page 

    const newTours=tours.filter((tour)=>tour.id!==id);
    setTours(newTours)
  }


  // fetching all data and using function for it,so we can call it whenever  length is 0
  const fetchTours = async () => {
    setLoading(true);
    try {
      // fetching from url
      const response = await fetch(url);

      // converting into json
      const tours = await response.json();

      // loading will go away now,its true unless data is being fetched
      setLoading(false);

      // sending json response of tours into its state
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    // calling fetchtours function here and will return data in it.
    fetchTours();
  }, []);

  // if loading is true do it
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // for when we remove all tours calling fetchTours again to re-render and re-fetch all data
  if(tours.length===0){
    return <main>
      <div className="title">
        <h2>No Tour Left</h2>
        {/* here we are recalling that fetchTours function again when its 0 */}
        <button onClick={fetchTours} className="btn">refresh</button>
      </div>
    </main>
  }

  return (

    // here we are also returning the Tours Component with PROP tours which has all the data
    // we are also sending removeTour function 
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
 