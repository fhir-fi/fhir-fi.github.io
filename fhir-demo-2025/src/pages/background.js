import * as React from 'react';

const plantCount = 17;
const animationDuration = 10;
const fadeDuration = animationDuration * 2;

const Leaf = ({ fading = false, rotate, scale, x, y }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <path
        className={`${fading ? 'fading ' : ''}leaf`}
        transform={`scale(${scale}) rotate(${rotate})`}
        d="M20,0 a10 10 0 0 1 0 20 a10 10 0 0 1 -20 0 v-20 Z"
      />
    </g>
  );
};

const Flower = ({fading = false, rotate, scale, x, y }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <path
        className={`${fading ? 'fading ' : ''}flower`}
        transform={`scale(${scale}) rotate(${rotate})`}        
        d="M0,0 a10 10 0 0 1 0 20 a10 10 0 0 1 -20 0 a10 10 0 0 1 0 -20 a10 10 0 0 1 20 0 Z"
      />
    </g>
  );
};

const Plant = ({ animated, height, width }) => {
  const lineLength = height / 5;
  const strokeWidth = 3;

  const [flowerScale, setFlowerScale] = React.useState(1);
  const [leafScale, setLeafScale] = React.useState(0.4);

  const [rootStalkPath, setRootStalkPath] = React.useState(<path />);
  const [flower, setFlower] = React.useState(undefined);
  const [clonedFlower, setClonedFlower] = React.useState([]);
  const [branches, setBranches] = React.useState([]);
  const [leaves, setLeaves] = React.useState([]);
  const [clonedLeaves, setClonedLeaves] = React.useState([]);
  const [dotPaths, setDotPaths] = React.useState([]);

  React.useEffect(() => {
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
  }, []);

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


  function grow(node) {
    node?.addEventListener(
      'repeatEvent',
      (e) => {
        if (flower) {
          if (flowerScale < 6) {
            setFlowerScale(flowerScale * 1.1);
//            flower.rotate = Math.min(Math.max(flower.rotate + (Math.random() * 30) - 15, -90), 90);
          } else {
            // Let's just override the potential previous one
            setClonedFlower({
              ...flower,
              scale: flowerScale,
            });
            setFlowerScale(1);
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
          setLeafScale(0.4);
        }
      }
    );
  }

  return (
    <g className="plant">
      <path
        className="root stalk"
        d={rootStalkPath}
        strokeWidth="2.5"
      />
      {branches}
      {animated && dotPaths.map((p, i) => (
        <circle key={`pulse-${i}`} fill="red" r="1" >
          <animateMotion
            dur={`${animationDuration}s`}
            repeatCount="indefinite"
            data-leaf={p.leaf}
            path={p.path}
            ref={grow}
          />
        </circle>
     ))}
      {leaves.map((l, i) => <Leaf key={`leaf-${i}`} {...l} scale={leafScale} />)}
      {clonedLeaves.map((l, i) => (<Leaf key={`leaf-${i}-clone`} {...l} fading={true} />))}
      {flower && <Flower {...flower} scale={flowerScale} />}
      {clonedFlower && <Flower {...clonedFlower} fading={true} className="fade" />
      }
    </g>
  );
};

const Background = React.forwardRef((props, ref) => {
  const {
    animated: animatedParam = true,
    children,
    dimmed,
    height: heightParam = 1200,
    location = {},
    pageContext,
    pageResources,
    params,
    path,
    serverData,
    uri,
    width: widthParam,
    ...rest // This is what we really want...
  } = props;
  const { search } = location;

  const [width, setWidth] = React.useState(widthParam);
  const [height, setHeight] = React.useState(heightParam);
  const [animated, setAnimated] = React.useState(animatedParam);

  React.useEffect(() => {
    if (width) {
      // already set through a parameter
      return;
    }
    const searchParams = new URLSearchParams(search);
    if (searchParams.has('width')) {
      setWidth(+searchParams.get('width'));
      if (searchParams.has('height')) {
        setHeight(+searchParams.get('height'));
      }
    } else {
      setWidth(typeof window !== `undefined` ? window.innerWidth : 2500);
    }
    if (searchParams.has('animated')) {
      const animatedParam = searchParams.get('animated').toLowerCase();
      setAnimated(!['false', 'no', 'not'].some(v => v === animatedParam));
    }
  }, [search, width]);

  if (width === undefined) {
    return null;
  }

  const plants = [];
  for (let i=0; i < plantCount; i += 1) {
    plants.push(
      <Plant
        key={`plant-${i}`}
        animated={animated}
        height={height}
        width={width}
      />
    )
  }

  const style = `
    #plantBackground * {
      transition: all 0.4s ease, transition: fill ${fadeDuration}s ease, transition: fill-opacity ${fadeDuration}s ease;
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
    #plantBackground .leaf, #plantBackground .flower {
      fill: green;
      fill-opacity: 1;
    }
    #plantBackground .fading {
      transition: fill-opacity ${fadeDuration}s ease;
      fill: yellow;
      fill-opacity: 0.2;
    }

    ${ dimmed
      ? `
      #plantBackground g {
        opacity: 0.65;
      }
      `
      : ''
    }
    @media screen and (prefers-reduced-motion: reduce) {
      #plantBackground circle {
        animation: none !important;
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
      { plants }
    </svg>
  )
});

export default Background;

/*

  function handleMotionRef(node) {
    // node?.onend = () => {} or
    node?.addEventListener(
      'beginEvent',
      (e) => {
        console.log('Starting...', e);
      },
      false,
    );
    node?.addEventListener(
      'endEvent',
      (e) => {
        console.log('Finished!', e);
      },
      false,
    );
    node?.addEventListener(
      'repeatEvent',
      (e) => {
        const leafId = e.target.dataset.leaf;
        // const transforms = document.getElementById(leaf).getAttribute('transform');
        const leaf = document.getElementById(leafId);
        const transforms = leaf.transform.baseVal;
        for (let ti = 0; ti < transforms.numberOfItems; ti += 1) {
          const transform = transforms.getItem(ti);
          switch (transform.type) {
            case SVGTransform.SVG_TRANSFORM_SCALE:
              const matrix = transform.matrix;
              let newScale = (matrix?.a || 1) * 1.1;
              // console.log('Scale!', transform, newScale, { leaf });
              if (newScale > 5) {
                // fade this one out, create a new one
                const g = leaf.parentElement;
                const fadingElement = document.getElementById('fade');
                const clone = fadingElement.cloneNode(true);

                console.log('cloning...', { leaf }, document.getElementById(leaf.href.baseVal.substring(1)));

                clone.setAttribute('d', document.getElementById(leaf.href.baseVal.substring(1)).getAttribute('d'));
                clone.setAttribute('transform', leaf.getAttribute('transform'));
                clone.id = `${leafId}-clone`;

                // clone.id += 'clone';
                // clone.classList.add('fading');
                /*
                const animation = document.createElement('animation');
                animation.setAttribute('attributeName', 'fill');
                animation.setAttribute('values', 'yellow');
                animation.setAttribute('dur', '3s');
                clone.appendChild(animation);
                *
                g.appendChild(clone);
                // clone.setAttribute('fill-opacity', '0.25');
                newScale = 0.4;
              }
              transforms.getItem(ti).setScale(newScale, newScale);
              break;
            case SVGTransform.SVG_TRANSFORM_ROTATE:
              const angle = transform.angle || 0;
              const newAngle = Math.min(Math.max(angle + (Math.random() * 30) - 15, 0), 360);
              transforms.getItem(ti).setRotate(newAngle, 0, 0);
              break;
            default:
          }
        }
      },
      false,
    );
  }


*/ 