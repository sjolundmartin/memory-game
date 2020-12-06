import React from 'react';

const Tile = (props) => {
  return (
    <>
      <button
        className="tile"
        onClick={() => console.log(props.value)}
      ></button>
    </>
  );
};

export default Tile;
