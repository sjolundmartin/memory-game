import React from 'react';

const colors = {
  hidden: 'lightgray',
  matched: 'lightgreen',
  wrong: 'lightcoral',
  turned: 'deepskyblue',
};

const Tile = (props) => {
  return (
    <>
      <button
        className="tile"
        style={{ backgroundColor: colors['hidden'] }}
        onClick={() => console.log(props.value)}
      ></button>
    </>
  );
};

export default Tile;
