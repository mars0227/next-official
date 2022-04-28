import React from 'react';
import Layout from '../../components/Layout';

import './services.css';

const education = [
  {
    name: '模型技術課程',
    classes: [
      'BIM 建築/結構專案實用課程',
      'BIM 機電專案實用課程',
    ]
  },
  {
    name: '模型整合應用課程',
    classes: [
      'BIM 建築/結構整合應用課程',
      'BIM 機電整合應用課程',
    ]
  },
  {
    name: '設計類課程',
    classes: [
      'BIM建築設計課程',
      'BIM室內裝修課程'
    ]
  },
  {
    name: '專案管理類課程',
    classes: [
      'BIM 整合實務課程',
      'BIM 專案經理人培訓'
    ]
  },
  {
    name: '新技術課程',
    classes: [
      'Dynamo 基礎課程',
      'Forge 基礎課程',
      'Scan to BIM 課程',
      'Green BIM 基礎分析課程',
      'IES - VE 進階建物環境及能耗模擬課程'
    ]
  }
];

const Education = ({ data }) => (
  <>
    <div className='education-title' >{data.name}</div>
    {data.classes.map((courseName, index) => (
      typeof courseName === 'string'
        ? <p key={`courseName-${index}`} className='education-subtitle'>【{courseName}】</p>
        : <>
          <div key={`courseName-${index}`} className='education-subtitle'>【{courseName.name}】</div>
          {courseName.classes.map((subCourseName, subIndex) => (
            <div key={`subCourseName-${subIndex}`} className='education-content'>【選配】{subCourseName}</div>
          ))}
          </>
    ))}
    <style jsx>{`
      .education-title {
        border: 1px solid black;
        display: table-cell;
        padding: 0px 5px;
        font-size: 1.2rem;
      }
      .education-subtitle {
        font-size: 1rem;
        margin: 10px;
      }
      .education-content {
        font-size: 1rem;
        margin-left: 30px;
      }
      @media only screen and (min-width: 768px) {
        .education-title {
          padding: 0px 5px;
          font-size: 1.4rem;
        }
        .education-subtitle {
          font-size: 1.2rem;
          margin: 10px;
        }
        .education-content {
          font-size: 1rem;
          margin-left: 30px;
        }
      }
      `}</style>
  </>
);

export default (props) => {
  const icon = `/static/images/icon-education.png`;
  const title = 'BIM教育訓練課程';

  return (
    <Layout>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body div-background-image" style={{ justifyContent: 'center' }}>
          <div>
            <div className='service-title-block' >
              <img src={icon} className='service-icon'/>
              <div className='service-title' >{title}</div>
            </div>
            <div>
              <div className='service-container' >
                <div className='service-page-text' >
                  <Education data={education[0]} />
                  <Education data={education[1]} />
                </div>
                <div className='divider-vertical' />
                <div className='service-page-text' >
                  <Education data={education[2]} />
                  <Education data={education[3]} />
                </div>
                <div className='divider-vertical' />
                <div className='service-page-text' >
                  <Education data={education[4]} />
                </div>
              </div>
              <div className='note-box'>
                <div>
                  <div className='note'>
                    ★ 歡迎洽詢課程規劃及企業包班
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
      .note-box {
        display: flex;
        justify-content: center;
        margin-top: 10px;
      }
      .note {
        color: #f15b20;
        line-height: 2rem;
        font-weight: bold;
      }
      .service-container {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        justify-content: center;
      }
      .text-box {
        border: 1px solid black;
        padding: 0px 0px 0px 5px;
        margin-left: 10px;
      }
      .service-page-text {
        font-size: 1rem;
        line-height: 2rem;
        padding-left: 20px;
        width: 90vw;
      }
      .downwards-arrow {
        font-size: 40px;
        padding: 10px 35px;
      }
      .div-background-image {
        position: relative;
      }
      .div-background-image:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-position: center;
        background-repeat: repeat-y;
        z-index: -1;
        opacity: 0.1;
        background-image: url('/static/images/education-background.jpg');
      }
      .disable-when-mobile {
          display: none;
      }
      @media only screen and (min-width: 768px) {
        .service-container {
          justify-content: space-between;
          background: rgba(214, 214, 214, 0.6);
          width: 80vw;
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
        .disable-when-mobile {
          display: block;
        }
        .note-box {
          justify-content: flex-end;
        }
      }
      `}</style>
    </Layout>
  )
}

