import * as React from 'react';

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

  // const lineLength = height / 10;
  const lineLength = height / 5;
  const strokeWidth = 3;
  // const lineCount = width * height / 1000 / lineLength;
  const lineCount = 17;

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

  function removeOnEnd(node) {
    node?.addEventListener(
      'endEvent',
      (e) => {
        console.log('Finished fade!', e);
        e.target.remove();
      },
      false,
    );
  }

  
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
                */
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

  const plants = [];
  for (let i=0; i < lineCount; i += 1) {
    let x0 = Math.random() * width;
    // let y0 = Math.min((Math.random() * (height / 10)) - (height * 0.3), height);
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
    let branches = [];
    let dotPaths = [];
    let leaves = [];
    const rootStalkPath = `M ${x1} ${y1} C ${x2} ${y2}, ${x3} ${y3}, ${x4} ${y4}${
      longerStalk ? ` S ${x5} ${y5} ${x6} ${y6}` : ''
    }`;
    const flower = longerStalk
    ? <g transform={`translate(${x6},${y6})`}>
        <use id={`flower${i}`} href="#flower" transform={`scale(1) rotate(${Math.random() * 90})`} />
      </g>
    : undefined;
    if (longerStalk) {
      dotPaths.push({
        leaf: `flower${i}`,
        path: rootStalkPath,
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
  
      branches.push(
        <path
          key={`branch${j}`}
          className="branch stalk"
          d={`M ${x4} ${y4} C ${x7} ${y7}, ${x8} ${y8}, ${x9} ${y9} S ${x10} ${y10} ${x11} ${y11}`}
          strokeWidth={(Math.random()) + 0.5}
        />
      );
      leaves.push(
        <g key={`plant${i}leaf${j}`} transform={`translate(${x11},${y11})`}>
          <use
            id={`plant${i}leaf${j}`}
            href="#leaf"
            transform={`scale(0.4) rotate(${Math.random() * 360})`}
          />
        </g>
      );
      dotPaths.push({
        leaf: `plant${i}leaf${j}`,
        path: `M ${x1} ${y1} C ${x2} ${y2}, ${x3} ${y3}, ${x4} ${y4} C ${x7} ${y7}, ${x8} ${y8}, ${
          x9} ${y9} S ${x10} ${y10} ${x11} ${y11}`,
      }
      );

    }

    // To animate each plant sequentially,
    // - keep the time as a const
    // - use delay (and offset?) together with the index of the plant to start the animation at the right time...
    const g = <g key={`plant-${i}`}>
      <path
        className="root stalk"
        d={rootStalkPath}
        strokeWidth={(Math.random() * 2) + 1.5}
      />
      {branches}
      {animated && dotPaths.map((p, i) => (
        <circle key={`pulse-${i}`} fill="red" r="1" onAnimationIteration={(e) => {console.log('Iterating', e)}} onAnimationEnd={(e) => {console.log('end', e)}}>
          <animateMotion
            dur={`${width * height / 350000}s`}
            repeatCount="indefinite"
            data-leaf={p.leaf}
            path={p.path}
            ref={handleMotionRef}
          />
        </circle>
     ))}
      {leaves}
      {flower}
    </g>;
    plants.push(g);
  }

  const style = `
    * {
      transition: all 0.4s ease;
    }
    line {
      stroke-width: 0.5px;
      stroke: #010259;
      stroke-opacity: 0.4;
    }
    .stalk {
      fill: none;
      stroke: green;
    }
    .leaf {
      fill: green;
    }

    ${ dimmed
      ? `
      g {
        opacity: 0.65;
      }
      `
      : ''
    }
    @media screen and (prefers-reduced-motion: reduce) {
      circle {
        animation: none !important;
        display: none;
      }
    }
    @media print {
      circle {
        display: none;
      }
    }
  `;

  return (
    <svg
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
        <path id="fade" className="leaf">
          <animate attributeName="fill" values="green;yellow" dur="60s" />
          <animate attributeName="fill-opacity" values="1;0" dur="60s" />
        </path>
      </defs>
      { plants }
    </svg>
  )
});

/*

      <g transform={`translate(${width / 2},${height/2})`}>
        <use href="#leaf" x="-50" y="0" transform="scale(0.4)" />
        <use href="#leaf" x="50" y="50" transform="rotate(110)" />
        <use href="#leaf" x="50" y="-50" transform="rotate(210)" />
      </g>

      <g transform="translate(0.5, 0.5)">
        {pattern.map((p, i) => (
          <path
            key={`path${i}`}
            stroke="black"
            strokeWidth={(Math.random() * 2) + 0.4}
            vectorEffect="non-scaling-stroke"
            d={p}
          />

        ))}
        { animated
        ? (
          <circle fill="red" r="3">
            <animateMotion dur={`${width * height / 50000}s`} repeatCount="indefinite" path={d} />
          </circle>
        )
        : null
        }
      </g>
*/

export default Background;
