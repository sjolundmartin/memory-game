import React from 'react';

const colors = {
  hidden: 'lightgray',
  matched: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

const Tile = (props) => {
  return (
    <>
      <button
        className="tile"
        style={{ backgroundColor: colors[props.status] }}
        onClick={() => console.log(props.value)}
      ></button>
    </>
  );
};

export default Tile;
