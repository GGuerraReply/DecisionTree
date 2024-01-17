import React, { useState }from 'react';

const textLayout = {
  vertical: {
    title: {
      textAnchor: 'start',
      x: 40,
    },
    attributes: {},
    attribute: {
      x: 40,
      dy: '1.2em',
    },
  },
  horizontal: {
    title: {
      textAnchor: 'start',
      y: 40,
    },
    attributes: {
      x: 0,
      y: 40,
    },
    attribute: {
      x: 0,
      dy: '1.2em',
    },
  },
};

const PureSvgNodeElement = ({ nodeDatum, orientation, toggleNode, onNodeClick }) => {
  const [wasClicked, setWasClicked] = useState(false);

  const handleTextClick = () => {
    onNodeClick();
  };

  const handleCircleClick = () => {
    console.log(nodeDatum);
    setWasClicked(!wasClicked);
    toggleNode();
  };

  return (
    <>
      {
        nodeDatum.__rd3t.depth == 0 ? 
        <>
          <rect 
            height={220} 
            width={30} 
            x={-15} 
            y={-110} 
            onClick={handleCircleClick} 
            className={"root"}
            fill="lightgray"
            stroke="black"
            strokeWidth={0.5}>
          </rect> 
        
          <text x={0} y={5} height={20} width={100} 
              className="rd3t-label__title"
              textAnchor="middle" onClick={handleCircleClick} 
              transform="rotate(-90)"
              fontSize={10}>
            {nodeDatum.name}
          </text>
        </>
        :
        <>
          <rect 
            height={40} 
            width={180} 
            x={-90} 
            y={-20} 
            onClick={handleCircleClick} 
            className={!nodeDatum.__rd3t.collapsed ? 'clicked' : 'not-clicked'}
            stroke="black"
            strokeWidth={!nodeDatum.__rd3t.collapsed ? 2 : 0.5}>
          </rect>
        
          <text x={0} y={5} height={20} width={100} 
              className="rd3t-label__title"
              textAnchor="middle" onClick={handleCircleClick}
              fontSize={10} >
            {nodeDatum.name}
          </text>
        </>
      }
      {/*<g className="rd3t-label">
        <rect y={20} x={-5} width={150} height={100} fill="white" />
        <text y={-200} className="rd3t-label__attributes" {...textLayout[orientation].attributes}>
          {nodeDatum.attributes &&
            Object.entries(nodeDatum.attributes).map(([labelKey, labelValue], i) => (
              <tspan key={`${labelKey}-${i}`} {...textLayout[orientation].attribute}>
                {labelKey}: {labelValue}
              </tspan>
            ))}
        </text>
      </g>*/}
    </>
  );
};

export default PureSvgNodeElement;
