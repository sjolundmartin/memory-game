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
        onClick={() => props.onClick(props.index, props.value, props.status)}
      >
        {props.status != 'hidden' ? props.value : null}
      </button>
    </>
  );
};

export default Tile;
