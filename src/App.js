import logo from './logo.svg';
import './App.css';
import { GraphCanvas, darkTheme } from 'reagraph';
import Popup from './components/Popup';
import React, { useState, useEffect } from 'react';
import { createEmptyNode } from './utils/NodeUtils';

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

  const myTheme = {
    ...darkTheme,
    node: {
      label: {
        color: '#fff'
      },
      ...darkTheme.node,
      color: '#000'
    }
  };

  const nodes = [
    {
      id: '6.5840',
      label: '6.5840',
      name: 'Distributed Computer Systems Engineering',
      description: 'Abstractions and implementation techniques for engineering distributed systems: remote procedure call, threads and locking, client/server, peer-to-peer, consistency, fault tolerance, and security. Readings from current literature. Individual laboratory assignments culminate in the construction of a fault-tolerant and scalable network file system. Programming experience with C/C++ required.',
      semester: 'Spring 2023'
    },
    {
      id: '6.1220',
      label: '6.1220',
      name: 'Design and Analysis of Algorithms',
      description: 'Techniques for the design and analysis of efficient algorithms, emphasizing methods useful in practice. Topics include sorting; search trees, heaps, and hashing; divide-and-conquer; dynamic programming; greedy algorithms; amortized analysis; graph algorithms; and shortest paths. Advanced topics may include network flow; computational geometry; number-theoretic algorithms; polynomial and matrix calculations; caching; and parallel computing.',
      semester: 'Spring 2023'
    },
    {
      id: '6.1800',
      label: '6.1800',
      name: 'Computer Systems Engineering',
      description: 'Topics on the engineering of computer software and hardware systems: techniques for controlling complexity; strong modularity using client-server design, operating systems; performance, networks; naming; security and privacy; fault-tolerant systems, atomicity and coordination of concurrent activities, and recovery; impact of computer systems on society. Case studies of working systems and readings from the current literature provide comparisons and contrasts. Includes a single, semester-long design project. Students engage in extensive written communication exercises.',
      semester: 'Spring 2023'
    }
  ];
  
  const edges = [
    {
      source: '6.1800',
      target: '6.5840',
      id: '6.1800-6.5840',
      label: '6.1800-6.5840'
    },
  ];

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
      theme={myTheme}
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
