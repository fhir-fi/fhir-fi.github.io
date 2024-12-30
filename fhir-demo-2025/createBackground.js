

const width = 1920;
const height = 1080;

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
      return { x, y, direction };
    }
    distance = (Math.floor(Math.random() * lineLength)) + 20;
    distance -= distance % strokeWidth;
    newDirection = direction + Math.floor(Math.random() * 4) + 6;
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
for (let i = 0; i < lineCount; i += 1) {
  const coords = [];
  let x0 = Math.random() * width;
  x0 -= x0 % strokeWidth;
  let y0 = Math.random() * height;
  y0 -= y0 % strokeWidth;
  let direction0 = Math.floor(Math.random() * 8);
  for (let i = 0; i < 8; i += 1) {
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
for (let i = 0; i <= width - strokeWidth; i += strokeWidth) {
  rulerLines.push(`<line x1="${i + adjust}" x2="${i + adjust}" y2="${height}" />`);
}
for (let i = 0; i < height - strokeWidth; i += strokeWidth) {
  rulerLines.push(`<line x2="${width}" y1="${i + adjust}" y2="${i + adjust}" />`);
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
  @media screen and (prefers-reduced-motion: reduce) {
    circle {
      animation: none !important;
      display: none;
    }
  }
`;

const svg = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 ${width} ${height}"
    width="${width}"
    height="${height}"
    preserveAspectRatio="xMidYMid slice"
  >
    <style>${style}</style>
    <g transform="translate(0.5, 0.5)">
      ${rulerLines.join('\n')}
      <path
        stroke="#010259"
        stroke-width="${strokeWidth}"
        vector-effect="non-scaling-stroke"
        stroke-linecap="square"
        d="${d}"
      />
      <path
        stroke="white"
        stroke-width="1px"
        vector-effect="non-scaling-stroke"
        shape-rendering="auto"
        d="${d}"
      />
      <circle fill="white" r="2">
        <animateMotion dur="${width * height / 50000}s" repeatCount="indefinite" path="${d}" />
      </circle>
    </g>
  </svg>
`;

console.log(svg);