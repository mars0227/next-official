import React from 'react';

export default (props) => {
  const { title, icon, context } = props;
  return (
    <div>
      <div className='service-title-block' >
        <img src={icon} className='service-icon'/>
        <div className='service-title' >{title}</div>
      </div>
      <div className='service-container' >
        <p className='service-page-text' >
          {context}
        </p>
        <div className='divider-vertical' />
        <div className='service-page-text'>
          <div className='row-center'>
            <img src={`/static/images/text-icon-case.svg`} width='100' />
            ............
            <div className='text-box'>客戶在規劃設計階段發案。</div>
          </div>
          <div className='downwards-arrow'>&darr;</div>
          <div className='row-center'>
            <img src={`/static/images/text-icon-integration.svg`} width='100' />
            ............
            <div className='text-box'>SGS Vircon的整合設計團隊，在規劃設計階段就 使用BIM技術整合建築、結構、機電等各專業模 型，可以提前檢討介面問題及達成最佳化設計。</div>
          </div>
          <div className='downwards-arrow'>&darr;</div>
          <div className='row'>
            <img src={`/static/images/text-icon-bim-model.svg`} width='100'/>
          </div>
        </div>
      </div>
      <style jsx>{`
        .service-container {
          display: flex;
          flex-wrap: wrap;
          margin-top: 0px;
          justify-content: center;
        }
        .row {
          display: flex;
          align-items: center;
        }
        .row-center {
          display: flex;
          align-items: center;
        }
        .text-box {
          border: 1px solid black;
          padding: 0px 0px 0px 5px;
          margin-left: 10px;
        }
        .service-page-text {
          line-height: 2rem;
          padding: 20px;
          width: 80vw;
        }
        .downwards-arrow {
          font-size: 40px;
          padding: 10px 35px;
        }
        @media only screen and (min-width: 768px) {
          .service-container {
            justify-content: space-between;
            background: rgba(214, 214, 214, 0.6);
            width: 90vw;
            margin-top: 30px;
          }
          .row {
            align-items: flex-end;
          }
          .service-page-text {
            flex: 1;
            line-height: 2rem;
            padding: 50px;
            width: 30vw;
            min-height: 46vh;
          }
          .divider-vertical {
            border-right: 1px solid white;
            margin: 20px;
          }
        }
      `}</style>
    </div>
  )
}

