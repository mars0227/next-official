import React from 'react';

export default (props) => {
  const { title, icon, image, context } = props;

  return (
    <>
      <div className="service-container">
        <div className="columns">
          <div className="column service-page-image-block">
           <img src={image} className="service-page-image"/>
          </div>
          <div className="column" style={{ padding: 0 }}>
            <div className="service-title-block">
              <img src={icon} className='service-icon'/>
              <div className='service-title' >{title}</div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column service-page-image-below-block"/>
          <div className="column service-page-text-container">
            <ol className="service-page-text" >
              {Array.isArray(context)
                ? context.map((text, index) => <li key={`service-li-${index}`}>{text}</li>)
                : context
              }
            </ol>
          </div>
        </div>
      </div>
      <style jsx>{`
        .service-container {
          margin: 0px;
        }
        .service-page-image-block {
          width: 100vw;
          padding: 0;
        }
        .service-page-image {
          width: 100vw;
          height: auto;
        }
        .service-page-image-below-block {
            padding: 0px;
          }
        .service-page-text-container {
            width: 100vw;
            min-height: 48vh;
          }
        .service-page-text {
          font-size: 1rem;
          line-height: 2rem;
          padding-left: 40px;
          width: 90vw;
        }
        .service-page-text li {
          padding-bottom: 10px;
        }
        @media only screen and (min-width: 768px) {
          .service-container {
            margin-top: calc(100vw / 20 - 80px)
          }
          .service-page-text-container {
            width: 45vw;
            min-height: 45vh;
            background: #E5E5E5;
          }
          .service-page-text {
            font-size: 1.2rem;
            line-height: 2rem;
            padding-left: 100px;
            width: 40vw;
          }
          .service-page-image-block {
            position: relative;
            width: 45vw;
            height: auto;
          }
          .service-page-image-below-block {
            width: 45vw;
            background: #E5E5E5;
          }
          .service-page-image {
            position: absolute;
            width: 40vw;
            height: 25vw;
            object-fit: cover;
            top: 100px;
            right: 20px;
            z-index: 2;
          }
        }
      `}</style>
    </>
  )
}

