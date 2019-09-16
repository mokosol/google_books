import React from 'react';

const BookCard = (props) => {

  return (
    <div>
        <img src={props.image} alt="" />
        <div className="desc">
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <p>Published Date: {props.published === '0000' ? 'Not avaiabble' : props.published.substring(0, 4)}</p>
            <p>Description: {props.description}</p>
            <button onClick={() => props.handleSaved(props.id)}>Save</button>
            <button>View</button>
        </div>
    </div>
  );
}

export default BookCard;
