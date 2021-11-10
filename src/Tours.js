import React from 'react';
import Tour from './Tour';
 

// Here Tours Component has 2 props one for tours which has all the data of API
// And other is function for removing tours which are not interested

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {

          // We have called here 'tour component' to display each data one by one with css   

          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
