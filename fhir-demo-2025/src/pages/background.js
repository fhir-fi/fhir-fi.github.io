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

  const lineLength = height / 10;
  const strokeWidth = 3;
  // const lineCount = width * height / 1000 / lineLength;
  const lineCount = width * height / 10000 / lineLength;

  function getRandomDirection(oldDirection = 0) {
    function getOppositeDirection(d) {
      if (d >= 4) {
        return d - 4;
      }
      return d + 4;
    }
    let direction = oldDirection;
    while (direction === oldDirection || direction === getOppositeDirection(oldDirection)) {
      direction = (Math.floor(Math.random() * 4) + 6) % 8;

    }
    return direction;
  }
  
  function getRandomCoord({ x, y, direction }) {
    let distance;
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
      distance = Math.floor(Math.random() * lineLength / counter) + 5;
      distance -= distance % strokeWidth;
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
  
  const pattern = [];
  // for (let i=0; i < lineCount; i += 1) {
  for (let i=0; i < 4; i += 1) {
      const stalks = [];
    let x0 = Math.random() * width;
    // x0 -= x0 % strokeWidth;
    // let y0 = Math.min((Math.random() * (height / 10)) - (height * 0.3), height);
    let y0 = Math.min((Math.random() * (height / 10)) + (height * 0.7), height);

    
    Math.min((Math.random() * (height / 10)) - (height * 0.3), height);
    // y0 -= y0 % strokeWidth;
    for (let i=0; i < 4; i += 1) {
      // let { x: x1, y: y1, } = getRandomCoord({ x: x0, y: y0  });
      let { x: x1, y: y1, } = { x: x0, y: y0 };
      let { x: x2, y: y2, } = getRandomCoord({ x: x1, y: y1, direction: 0 });
      let { x: x3, y: y3, } = getRandomCoord({ x: x2, y: y2, direction: Math.random() >= 0.5 ? 1 : 7 });
      let direction = getRandomDirection()
      let { x: x4, y: y4, } = getRandomCoord({ x: x3, y: y3, direction });
      direction = getRandomDirection(direction)
      let { x: x5, y: y5, } = getRandomCoord({ x: x4, y: y4, direction });
      direction = getRandomDirection(direction)
      let { x: x6, y: y6, } = getRandomCoord({ x: x5, y: y5, direction });
//      stalks.push(`C ${x1} ${y1}, ${x2} ${y2}, ${x3} ${y3} S ${x4} ${y4}, ${x5} ${y5}`);
      stalks.push(`M ${x1} ${y1} C ${x2} ${y2}, ${x3} ${y3}, ${x4} ${y4} S ${x5} ${y5} ${x6} ${y6}`);
      const ran = Math.random();
      x0 = ran < 0.35 ? x0 : x6;
      y0 = ran < 0.35 ? y0 : (ran > 0.98 ? ((Math.random() * height * 0.2) + (height * 0.5)) : y6); // Either re-use y0 or a completely random one?
    }
    const path = stalks.join(' ');
    pattern.push(path);
  }
  const d = pattern.join(' ');

  const style = `
    line {
      stroke-width: 0.5px;
      stroke: #010259;
      stroke-opacity: 0.4;
    }
    path {
      fill: none;
    }
    ${ dimmed
      ? `
      g {
        opacity: 0.15;
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
      </defs>
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
    </svg>
  )
});

export default Background;
