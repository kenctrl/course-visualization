import './App.css';
import { GraphCanvas } from 'reagraph';
import Popup from './components/Popup';
import React, { useState, useEffect } from 'react';
import { createEmptyNode } from './utils/NodeUtils';
import { courseNodes } from './data/nodes';
import { courseEdges } from './data/edges';
import { courseTheme } from './data/theme';

function App() {
  const [popupActive, setPopupActive] = useState(false);
  const [popupNode, setPopupNode] = useState();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [layout, setLayout] = useState('forceDirected2d');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const theme = courseTheme;
  const nodes = courseNodes;
  const edges = courseEdges;

  return (
  <>
    <button style={{
      position: 'absolute',
      top: 40,
      right: 15,
      zIndex: 999,
      width: 120
    }} onClick={() => setLayout(layout === 'forceDirected2d' ? 'forceDirected3d' : 'forceDirected2d')}>
        Reset Layout
    </button>
    {popupActive ? <Popup node={popupNode} position={position}/> : null}
    <GraphCanvas
      nodes={nodes}
      edges={edges}
      theme={theme}
      layoutType={layout}
      onNodePointerOver={(node) => {
        setPopupActive(true); 
        setPopupNode(node);
      }}
      onNodePointerOut={(node) => {
        setPopupActive(false); 
        setPopupNode(createEmptyNode());
      }}
    />
  </>
  );
};

export default App;
