import * as React from 'react';

const Leaf = ({ fading = false, generation, rotate, scale, x, y }) => {
  const [isFading, setFading] = React.useState(false);

  React.useLayoutEffect(() => {
    if (fading) {
      setFading(false);
      setTimeout(() => {
        setFading(true);
      }, 500);
    }
  }, [generation, fading]);

  return (
    <g key={`generation${generation}`} transform={`translate(${x},${y})`}>
      <path
        className={`${(fading && !isFading) ? 'about-to-fade ' : (isFading ? 'fading ' : '')}leaf`}
        transform={`scale(${scale}) rotate(${rotate})`}
        d="M20,0 a10 10 0 0 1 0 20 a10 10 0 0 1 -20 0 v-20 Z"
      />
    </g>
  );
};

const Flower = ({fading = false, generation, remove = f => f, rotate, scale, x, y }) => {
  const [isFading, setFading] = React.useState(false);

  React.useEffect(() => {
    if (fading) {
      setTimeout(() => {
        setFading(true);
      }, 500);
    }
  });

  return (
    <g key={`generation${generation}`} transform={`translate(${x},${y})`}>
      <path
        className={`${isFading ? 'fading ' : ''}flower`}
        transform={`scale(${scale}) rotate(${rotate})`}        
        d="M0,0 a10 10 0 0 1 0 20 a10 10 0 0 1 -20 0 a10 10 0 0 1 0 -20 a10 10 0 0 1 20 0 Z"
        onTransitionEnd={isFading ? (e) => {
          if (e.propertyName === 'fill-opacity') {
            remove();
          }
         } : f => f}
      />
    </g>
  );
};

const Plant = ({ animated, animationDuration, height, width }) => {
  const lineLength = height / 5;
  const strokeWidth = 3;

  const flowerGeneration = React.useRef(0);
  const leafGeneration = React.useRef(0);
  const animationListener = React.useRef(null);

  const [flowerScale, setFlowerScale] = React.useState(1);
  const [leafScale, setLeafScale] = React.useState(0.4);

  const [rootStalkPath, setRootStalkPath] = React.useState('M0,0');
  const [flower, setFlower] = React.useState(undefined);
  const [clonedFlower, setClonedFlower] = React.useState(undefined);
  const [branches, setBranches] = React.useState([]);
  const [leaves, setLeaves] = React.useState([]);
  const [clonedLeaves, setClonedLeaves] = React.useState([]);
  const [dotPaths, setDotPaths] = React.useState([]);

  React.useEffect(() => {
    function getRandomCoord({ x, y, direction, short }) {
      let distance = lineLength * (short ? 0.5 : 1) * ((Math.random() * 0.5) + 0.4);
      let x1 = -1;
      let y1 = -1;
      let counter = 0;
      while (x1 <= strokeWidth
        || x1 >= (width - strokeWidth)
        || y1 <= strokeWidth
        || y1 >= (height - strokeWidth)) {
        if (counter++ > 10) {
          // Too difficult, we're in a tough corner...
          return { x, y, direction};
        }
        // distance = distance / counter;
        switch (direction) {
          case 0:
            x1 = x;
            y1 = y - distance;
            break;
          case 1:
            x1 = x + distance;
            y1 = y - distance;
            break;
          case 2:
            x1 = x + distance;
            y1 = y;
            break;
          case 3:
            x1 = x + distance;
            y1 = y + distance;
            break;
          case 4:
            x1 = x;
            y1 = y + distance;
            break;
          case 5:
            x1 = x - distance;
            y1 = y + distance;
            break;
          case 6:
            x1 = x - distance;
            y1 = y;
            break;
          case 7:
            x1 = x - distance;
            y1 = y - distance;
            break;
          default:
        }
      }
      return { x: x1, y: y1 };
    }

    let x0 = Math.random() * width;
    let y0 = (Math.random() * (height * 0.3)) + (height * 0.7);
    let { x: x1, y: y1 } = { x: x0, y: y0 };
    let { x: x2, y: y2 } = getRandomCoord({ x: x1, y: y1, direction: 0 });
    let { x: x3, y: y3 } = getRandomCoord({ x: x2, y: y2, direction: Math.random() >= 0.5 ? 1 : 7 });
    let direction = getRandomDirection()
    let { x: x4, y: y4 } = getRandomCoord({ x: x3, y: y3, direction });
    direction = getRandomDirection(direction)
    let { x: x5, y: y5 } = getRandomCoord({ x: x4, y: y4, direction });
    direction = getRandomDirection(direction)
    let { x: x6, y: y6 } = getRandomCoord({ x: x5, y: y5, direction });
    let longerStalk = Math.random() > 0.35;
    let branchCount = Math.ceil(Math.random() * 3) + 1;
    let plantBranches = [];
    let dots = [];
    let plantLeaves = [];
    const rootStalk = `M ${x1} ${y1} C ${x2} ${y2}, ${x3} ${y3}, ${x4} ${y4}${
      longerStalk ? ` S ${x5} ${y5} ${x6} ${y6}` : ''
    }`;
    setRootStalkPath(rootStalk);
    let i = 0; // TODO: a static counter...
    if (longerStalk) {
      setFlower({
        flowerGeneration: flowerGeneration.current,
        rotate: Math.random() * 90,
        scale: 1,
        x: x6,
        y: y6,
      });
      dots.push({
        leaf: `flower${i}`,
        path: rootStalk,
      });
    }
  
   for (let j=0; j < branchCount; j += 1) {
      direction = getRandomDirection(direction, Math.random() > 0.5)
      let { x: x7, y: y7, } = getRandomCoord({ x: x4, y: y4, direction, short: true });
      direction = getRandomDirection(direction, Math.random() > 0.5)
      let { x: x8, y: y8, } = getRandomCoord({ x: x7, y: y7, direction, short: true });
      direction = getRandomDirection(direction, Math.random() > 0.5)
      let { x: x9, y: y9, } = getRandomCoord({ x: x8, y: y8, direction, short: true });
      direction = getRandomDirection(direction, Math.random() > 0.5)
      let { x: x10, y: y10, } = getRandomCoord({ x: x9, y: y9, direction, short: true });
      direction = getRandomDirection(direction, Math.random() > 0.5)
      let { x: x11, y: y11, } = getRandomCoord({ x: x10, y: y10, direction, short: true });
  
      plantBranches.push(
        <path
          key={`branch${j}`}
          className="branch stalk"
          d={`M ${x4} ${y4} C ${x7} ${y7}, ${x8} ${y8}, ${x9} ${y9} S ${x10} ${y10} ${x11} ${y11}`}
          strokeWidth={(Math.random()) + 0.5}
        />
      );
      setBranches(plantBranches);
      plantLeaves.push({
        generation: leafGeneration.current,
        rotate: Math.random() * 360,
        scale: 0.4,
        x: x11,
        y: y11,
      });
      setLeaves(plantLeaves);
  
      dots.push({
        leaf: `plant${i}leaf${j}`,
        path: `M ${x1} ${y1} C ${x2} ${y2}, ${x3} ${y3}, ${x4} ${y4} C ${x7} ${y7}, ${x8} ${y8}, ${
          x9} ${y9} S ${x10} ${y10} ${x11} ${y11}`,
      });
      setDotPaths(dots);
    }
  }, [height, lineLength, width]);

  function getRandomDirection(oldDirection = 0, wild = false) {
    function getOppositeDirection(d) {
      if (d >= 4) {
        return d - 4;
      }
      return d + 4;
    }
    let direction = oldDirection;
    while (direction === oldDirection || direction === getOppositeDirection(oldDirection)) {
      direction = (Math.floor(Math.random() * (wild ? 8 : 4) + (wild ? 0 : 6))) % 8;
    }
    return direction;
  }

  const growListener = React.useCallback((e) => {
    if (flower) {
      if (flowerScale < 6) {
        setFlowerScale(flowerScale * 1.1);
//            flower.rotate = Math.min(Math.max(flower.rotate + (Math.random() * 30) - 15, -90), 90);
      } else {
        // Let's just override the potential previous one
        const currentScale = flowerScale;
        setFlowerScale(1);
        setClonedFlower({
          ...flower,
          remove: () => {setClonedFlower(undefined)},
          scale: currentScale,
        });
        flowerGeneration.current += 1;
        setFlower({
          ...flower,
          generation: flowerGeneration.current,
        });
      }
    }
    if (leafScale < 5) {
      setLeafScale(leafScale * 1.1);
      setLeaves([...leaves.map(l => ({
        ...l,
        rotate: Math.min(Math.max(l.rotate + (Math.random() * 30) - 15, -360), 360),
      }))]);
    } else {
      setClonedLeaves([...leaves.map(l => ({
        ...l,
        scale: leafScale,
      }))]);
      leafGeneration.current += 1;
      setLeaves([...leaves.map(l => ({
        ...l,
        generation: leafGeneration.current,
        rotate: Math.min(Math.max(l.rotate + (Math.random() * 30) - 15, -360), 360),
      }))]);
      setLeafScale(0.4);
    }
  }, [flower, flowerGeneration, flowerScale, leafGeneration, leafScale, leaves]);

  React.useLayoutEffect(() => {
    const node = animationListener.current;
    if (node) {
      node.addEventListener('repeatEvent', growListener);
      return (() => {
        node.removeEventListener('repeatEvent', growListener);
      })
    }
  }, [animationListener, growListener]);

  return (
    <g className="plant">
      <path
        className="root stalk"
        d={rootStalkPath}
        strokeWidth="2.5"
      />
      {branches}
      {animated && dotPaths.map((p, i) => (
        <circle key={`pulse-${i}`} fill="red" r="2" >
          <animateMotion
            dur={`${animationDuration}s`}
            repeatCount="indefinite"
            data-leaf={p.leaf}
            path={p.path}
            ref={i === 0 ? animationListener : undefined}
          />
        </circle>
     ))}
      {leaves.map((l, i) => <Leaf key={`leaf-${i}`} {...l} scale={leafScale} />)}
      {clonedLeaves.map((l, i) => (<Leaf key={`leaf-${i}-clone`} {...l} fading={true} />))}
      {flower && <Flower {...flower} scale={flowerScale} />}
      {clonedFlower && <Flower {...clonedFlower} fading={true} className="fade" />}
    </g>
  );
};

const Background = React.forwardRef((props, ref) => {
  const {
    animated: animatedParam = true,
    children,
    dimmed,
    height: heightParam,
    location = {},
    pageContext,
    pageResources,
    params,
    path,
    plantCount: plantCountParam = 17,
    serverData,
    speed: speedParam = 1,
    uri,
    width: widthParam,
    ...rest // This is what we really want...
  } = props;
  const { search } = location;

  const [width, setWidth] = React.useState(widthParam);
  const [height, setHeight] = React.useState(heightParam);
  const [plantCount, setplantCount] = React.useState(plantCountParam);
  const [animated, setAnimated] = React.useState(animatedParam);
  const [speed, setSpeed] = React.useState(speedParam);

  const animationDuration = 10 / speed;
  const fadeDuration = animationDuration * 2;

  React.useEffect(() => {
    const searchParams = new URLSearchParams(search);
    if (!width) {
      if (searchParams.has('width')) {
        setWidth(+searchParams.get('width'));
      } else {
        setWidth(typeof window !== `undefined` ? window.innerWidth : 2560);
      }
    }
    if (!height) {
      if (searchParams.has('height')) {
        setHeight(+searchParams.get('height'));
      } else {
        setHeight(typeof window !== `undefined` ? window.innerHeight : 1440);
      }
    }
    if (searchParams.has('plants')) {
      setplantCount(+searchParams.get('plants'));
    }
    if (searchParams.has('animated')) {
      const animatedParam = searchParams.get('animated').toLowerCase();
      setAnimated(!['false', 'no', 'not'].some(v => v === animatedParam));
    }
    if (searchParams.has('speed')) {
      setSpeed(+searchParams.get('speed'));
    }
  }, [height, search, setAnimated, setHeight, setplantCount, setSpeed, setWidth, width]);

  if (width === undefined) {
    return null;
  }

  const style = `
    #plantBackground * {
      transition: transform 0.6s ease-in-out, fill ${fadeDuration}s ease-in-out, fill-opacity ${fadeDuration * 3}s ease-in-out;
    }
    #plantBackground line {
      stroke-width: 0.5px;
      stroke: #010259;
      stroke-opacity: 0.4;
    }
    #plantBackground .stalk {
      fill: none;
      stroke: green;
    }
    #plantBackground .leaf, #plantBackground .flower, #plantBackground .about-to-fade {
      fill: green;
      fill-opacity: 1;
    }
    #plantBackground .fading {
      fill: yellow;
      fill-opacity: 0;
    }${ dimmed
      ? `
    #plantBackground g {
      opacity: 0.65;
    }
    `
      : ''
    }
    #plantBackground .about-to-fade {
      transition: transform 0s ease-in-out, fill 0s ease-in-out, fill-opacity 0s ease-in-out
    }

    @media screen and (prefers-reduced-motion: reduce) {
      #plantBackground * {
        animation: none !important;
      }
      #plantBackground circle {
        display: none;
      }
    }
    @media print {
      #plantBackground circle {
        display: none;
      }
    }
  `;

  return (
    <svg
      id="plantBackground"
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}px`}
      height={`${height}px`}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      {...rest}
    >
      <defs>
        <style>{style}</style>
        <path id="leaf" className="leaf" d="M20,0 a10 10 0 0 1 0 20 a10 10 0 0 1 -20 0 v-20 Z" />
        <path id="flower" className="leaf" d="M0,0 a10 10 0 0 1 0 20 a10 10 0 0 1 -20 0 a10 10 0 0 1 0 -20 a10 10 0 0 1 20 0 Z" />
      </defs>
      {Array.from(Array(plantCount)).map((d, i) => (
        <Plant
          key={`plant-${i}`}
          animated={animated}
          animationDuration={animationDuration}
          height={height}
          width={width}
        />
      ))}
    </svg>
  )
});

export default Background;
