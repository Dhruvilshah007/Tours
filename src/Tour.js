import React, { useState } from "react";

// This is basically to display single tour component

const Tour = ({ id, image, info, price, name, removeTour }) => {
  // we use variable normally for logics but here in react we use useState for logic
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">

      {/* here we are displaying all the data in form of HTML */}

      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>

        {/* here we are making logic for readmore and readless */}

        <p>
          {/* if readmore is true than display all info else display only 200 length */}
          {/* bydefault readmore useState is false */}
          {readMore ? info : `${info.substring(0, 200)}...`}



            {/* on button click setting readmore true  */}
            {/* and then checking if its true showless will be there or else Readmore will be there */}

          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show less" : "Read More"}
          </button>
        </p>

        {/* here we have logic for the not interested feature */}
        {/* we are sending id of particular tour to remove function  */}
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
