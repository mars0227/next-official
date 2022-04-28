import React from 'react';

export default () => ( 
  <svg width="1380" height="340" className='disable-when-mobile' style={{  marginBottom: 40 }}>
    <g transform="translate(110,20)">
      <path
        className="link"
        d="M360,243.33333333333337C270,243.33333333333337 270,243.33333333333337 180,243.33333333333337"
      />
      <path
        className="link"
        d="M360,36.66666666666667C180,36.66666666666667 180,36.66666666666667 0,36.66666666666667"
      />
      <path
        className="link"
        d="M720,140C540,140 540,36.66666666666667 360,36.66666666666667"
      />
      <path
        className="link"
        d="M720,140C540,140 540,243.33333333333337 360,243.33333333333337"
      />
      <path
        className="link"
        d="M1000,140C810,140 810,140 720,140"
      />
      <g className="node" transform="translate(180,243.3333435058594)">
        <text className='title' x="13" dy="-2em" textAnchor="end">建築虛擬模型實驗室 2004</text>
        <circle r="10" style={{ fill: "rgb(255, 255, 255)" }}></circle>
        <text x="-150" dy="3em" textAnchor="start">
          <tspan>香港最早的BIM&amp;VDC的研究和</tspan>
          <tspan x="-150" dy="1.5em">諮詢應用團隊。</tspan>
        </text>
      </g>
      <g className="node" transform="translate(360,243.3333435058594)">
        <text className='title' x="-110" dy="-2em" textAnchor="start">VIRCON香港雲建有限公司 2012</text>
        <circle r="10" style={{ fill: "rgb(255, 255, 255)" }}></circle>
        <text x="-50" dy="3em" textAnchor="start">
          <tspan>是香港本地人數最多，最大的BIM</tspan>
          <tspan x="-50" dy="1.5em">諮詢研發機構。</tspan>
        </text>
      </g>
      <g className="node" transform="translate(0,36.66666412353516)">
        <text className='title' x="100" dy="-2em" textAnchor="end">SGS集團於日內瓦成立 1878</text>
        <circle r="10" style={{ fill: "rgb(255, 255, 255)" }}/>
        <text x="-50" dy="3em" textAnchor="start">
          <tspan>擁有95,000名員工，遍佈全球</tspan>
          <tspan x="-50" dy="1.5em">超過2,600個辦公室及實驗室。</tspan>
        </text>
      </g>
      <g className="node" transform="translate(360,76.66666412353516)"></g>
      <g className="node" transform="translate(720,140)">
        <text className='title' x="-83" dy="-2em" textAnchor="start">SGS-VIRCON成立 2018</text>
        <circle r="10" style={{ fill: "rgb(255, 255, 255)" }}/>
        <text x="-100" dy="3em" textAnchor="start">
          <tspan>SGS與VIRCON成立合資公司</tspan>
          <tspan x="-100" dy="1.5em">SGS-VIRCON。</tspan>
        </text>
      </g>
      <g className="node" transform="translate(1000,140)">
        <text className='title' x="-13" dy="-2em" textAnchor="start">NOW</text>
        <circle r="10" style={{ fill: "rgb(255, 255, 255)" }}/>
        <text x="-70" dy="3em" textAnchor="start">
          <tspan>團隊至今已達130多位專業工程師</tspan>
          <tspan x="-70" dy="1.5em">，成功地為超過160個大型公共和</tspan>
          <tspan x="-70" dy="1.5em">私人項目實施BIM全生命週期應用</tspan>
        </text>
      </g>
    </g>
    <style jsx>{`
    .node circle {
      fill: #fff;
      stroke: steelblue;
      stroke-width: 3px;
    }
    .node text {
      font: 0.9em sans-serif;
      fill: #fff;
    }
    .node .title {
      font: 1em sans-serif;
    }
    .link {
      fill: none;
      stroke: #ccc;
      stroke-width: 2px;
    }
      `}</style>
  </svg>
);
