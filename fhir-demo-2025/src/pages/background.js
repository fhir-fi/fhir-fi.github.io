import * as React from 'react';

const Background = React.forwardRef((props, ref) => {
  const {
    animated: animatedParam = true,
    children,
    dimmed,
    height: heightParam = 15000,
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

  const lineLength = 300;
  const strokeWidth = 14;
  const lineCount = width * height / 1000 / lineLength;
  
  function getRandomCoord({ x, y, direction }) {
    let distance;
    let newDirection;
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
      distance = (Math.floor(Math.random() * lineLength)) + 20;
      distance -= distance % strokeWidth;
      newDirection =  direction + Math.floor(Math.random() * 4) + 6;
      newDirection %= 8;
      switch (newDirection) {
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
    return { x: x1, y: y1, direction: newDirection };
  }
  
  const pattern = [];
  for (let i=0; i < lineCount; i += 1) {
    const coords = [];
    let x0 = Math.random() * width;
    x0 -= x0 % strokeWidth;
    let y0 = Math.random() * height;
    y0 -= y0 % strokeWidth;
    let direction0 = Math.floor(Math.random() * 8);
    for (let i=0; i < 8; i += 1) {
      const { x, y, direction } = getRandomCoord({ x: x0, y: y0, direction: direction0 });
      coords.push(`${x},${y}`);
      x0 = x;
      y0 = y;
      direction0 = direction;
    }
    const path = `M${coords.join('L')}`;
    pattern.push(path);
  }
  const d = pattern.join(' ');

  const rulerLines = [];
  const adjust = strokeWidth / 2;
  for (let i=0; i < width; i += strokeWidth) {
    rulerLines.push(<line key={`v${i}`} x1={i + adjust} x2={i + adjust} y2={height + adjust} />);
  }
  for (let i=0; i < height; i += strokeWidth) {
    rulerLines.push(<line key={`h${i}`} x2={width} y1={i + adjust} y2={i + adjust} />);
  }

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
        {rulerLines}
        <path
          stroke="#010259"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="square"
          d={d}
        />
        <path
          stroke="white"
          strokeWidth="1px"
          vectorEffect="non-scaling-stroke"
          shapeRendering="auto"
          d={d}
        />
        { animated
        ? (
          <circle fill="white" r="2">
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
