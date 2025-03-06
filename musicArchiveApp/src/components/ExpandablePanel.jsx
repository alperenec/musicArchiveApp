import React from 'react';
import { useState } from 'react';
import { GoChevronLeft, GoChevronDown } from 'react-icons/go';

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="panelDiv" style={{ backgroundColor: '#87CEEB' }}>
      <div className="topArrangement">
        <div>{header}</div>
        <div onClick={handleClick}>
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div style={{ padding: '15px' }}>{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
