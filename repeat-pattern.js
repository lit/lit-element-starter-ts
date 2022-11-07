import {LitElement, html, svg, css} from 'lit';

const themeCSS = css`
  .background {
    fill: var(--background-color, #000000);
  }

  text {
    fill: var(--font-color, #ffffff);
    font-size: var(--font-size, 26px);
    stroke-width: var(--stroke-width, 1.2px);
    stroke: var(--stroke-color, #eeeeee);
  }
`;

const svgCSS = css`
  :host {
    display: block;
  }

  svg {
    height: 100%;
    width: 100%;
  }

  text {
    fill: #ffffff;
    dominant-baseline: hanging;
    font-family: monospace;
    font-size: 24px;
  }
`;

const createElement = (chars) => svg`
  <text id="chars">${chars}</text>
`;

const createMotif = (numPrints, offset = 0) => {
  const rotation = 360 / numPrints;

  const prints = [];
  let currRotation = offset;
  for (let index = 0; index < numPrints; index++) {
    currRotation += rotation;
    prints.push(svg`
      <use
        href="#chars"
        transform="rotate(${currRotation}, 0, 0)">
      </use>
    `);
  }

  return svg`
    <g
      id="motif"
      transform="translate(50, 50)">
        ${prints}
    </g>
  `;
};

const createTileBoundary = () => svg`
  <clipPath id="rect-clip">
    <rect width="200" height="200"></rect>
  </clipPath>
`;

const createTile = () => svg`
  <g clip-path="url(#rect-clip)">
    <use transform="translate(0, 0)" href="#motif"></use>
    <use transform="translate(0, 100)" href="#motif"></use>
    <use transform="translate(100, -50)" href="#motif"></use>
    <use transform="translate(100, 50)" href="#motif"></use>
    <use transform="translate(100, 150)" href="#motif"></use>
  </g>
`;

const createRepeatPattern = () => svg`
  <pattern
    id="repeat-pattern"
    x="-10"
    y="-10"
    width="200"
    height="200"
    patternUnits="userSpaceOnUse">
    ${createTile()}
  </pattern>
`;

export class RepeatPattern extends LitElement {
  static properties = {
    chars: {type: String},
    numPrints: {type: Number, attribute: 'num-prints'},
    rotationOffset: {
      type: Number,
      attribute: 'rotation-offset',
    },
  };
  static styles = [svgCSS, themeCSS];

  constructor() {
    super();
    this.chars = 'lit';
    this.numPrints = 7;
    this.rotationOffset = 0;
    this.fontSize = '24px';
  }

  render() {
    return html`
      <svg>
        <defs>
          ${createTileBoundary()}
          ${createElement(this.chars)}
          ${createMotif(this.numPrints, this.rotationOffset, this.fontSize)}
          ${createRepeatPattern()}
        </defs>

        <rect class="background" height="100%" width="100%"></rect>
        <rect fill="url(#repeat-pattern)" height="100%" width="100%"></rect>
      </svg>
    `;
  }
}
customElements.define('repeat-pattern', RepeatPattern);
