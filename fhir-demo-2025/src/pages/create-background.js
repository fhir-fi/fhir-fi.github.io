import * as React from 'react';
import { saveAs } from 'file-saver';

import Background from './background';
import { getHead } from '../components/Article';
import '@fontsource-variable/commissioner';
import '@fontsource-variable/tourney';
import '../styles/index.css';

const type = 'image/svg+xml;charset=utf-8'

export function Head() {
  const title = <title>Create dynamic FHIR Demo 2025 Backgrounds</title>;
  return getHead({ title });
};

export default function CreateBackground() {

  const [width, setWidth] = React.useState(1920);
  const [height, setHeight] = React.useState(1080);
  const [animated, setAnimated] = React.useState(true);
  const [dimmed, setDimmed] = React.useState(false);
  const [key, setKey] = React.useState(undefined);

  const svgRef = React.useRef(null);
  const filename = `fhir-demo-background-${Date.now()}.svg`;

  return (
    <article id="playground">
      <h1>Create FHIR Demo 2025 Backgrounds!</h1>
      <form>
        <label>
          Width: <input type="number" name="width" value={width} onChange={(e) => setWidth(e.target.value)} />
        </label>
        <label>
          Height: <input type="number" name="height" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <label>
          Animated: <input type="checkbox" name="animated" checked={animated} onChange={(e) => setAnimated(e.target.checked)} />
        </label>
        <label>
          Dimmed: <input type="checkbox" name="dimmed" checked={dimmed} onChange={(e) => setDimmed(e.target.checked)} />
        </label>
        <button type="button" onClick={() => { console.log(key); setKey(Date.now()); }}>Redraw!</button>
        <a
          href={svgRef.current
            ? `${type},${encodeURIComponent(svgRef.current.outerHTML)}`
            : undefined
          }
          download={filename}
          type={type}
          onClick={(event) => {
            event.preventDefault();
            const blob = new Blob([svgRef.current?.outerHTML], { type });
            saveAs(blob, filename);
          }}
        >
          <button>Save!</button>
        </a>
      </form>
      <Background
        key={`${key}-${width}x${height}`}
        ref={svgRef}
        width={width}
        height={height}
        animated={animated}
        dimmed={dimmed}
      />
    </article>
  )
};
