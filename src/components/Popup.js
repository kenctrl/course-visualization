import React from 'react';

const Popup = ({node, position}) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: position.y - 10,
        left: position.x + 20,
        background: '#fff',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        zIndex: 9999, // Ensure the popup is on top of other elements
      }}
    >
      <b>{node.name}</b><br /><br />
      {node.description}<br /><br />
      Took {node.semester}
    </div>
  );
};

export default Popup;
