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
        onClick={() => props.onClick(props.index, props.value)}
      ></button>
    </>
  );
};

export default Tile;
