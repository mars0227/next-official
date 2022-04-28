import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Element, scroller } from 'react-scroll';
import { connect } from 'react-redux';
import Check from '@material-ui/icons/Check';
import Link from 'next/link';
import Head from 'next/head';

import { scrollTo, clearScrollTo } from '../actions/uiActions';

import TimelineD3 from './TimeLineD3';
import Header from '../components/Header';
import Footer from '../components/Footer';

const mockData = {
  news: [],
};

const aboutUs = [
  '在台灣服務超過68年的歷史，擁有3,100名員工，是台灣最大最多元化的驗證與訓練及測試機構。',
  '具備多年設計和施工經驗，並多次在亞太地區榮獲BIM建築資訊模型研發和技術應用獎項。',
  '運用BIM技術協助客戶優化設計、增進專案管理效能及顧問服務與Revit課程教學認證。',
  '核心團隊由BIM博士研究學者、大學講師、建築師、工程師、專案經理、程式開發與學術界及行業顧問組成。',
  '多位專家擁有超過10年以上的BIM技術開發經驗，且有超過50位建築結構設計、機電設計、專案管理等各專業領域的專家。'
];

const defaultImageDescription = {
  title: 'WE HELP YOU BUILD THE FUTURE',
  text: 'Your Reliable Informatization and Intelligentization Partner 您可靠的資訊化與智慧化夥伴'
};

const meta = {
  title: "SGS Vircon BIM 建築資訊管理顧問",
  description: "利用電腦數位技術，邁向建築工程資訊化管理。透過預先模擬建築工程設計、施工與竣工維運程序，達成建物生命週期節能、減廢且營造健康、舒適環境之目標，降低工程風險並減少成本浪費。",
  image: "https://www.sgs-vircon.com/static/images/vircon-logo.jpg"
};

const galleryImageDescription = ( title = defaultImageDescription.title, text = defaultImageDescription.text) => (
  <div className='image-description-block'>
    <div className='image-description-title'>
      {title}
    </div>
    <div className='image-description-text'>
      {text}
    </div>
    <a className='image-description-link' href='/'>
      Know More
    </a>
    <style jsx>{`
      .image-description-block {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }

      .image-description-title {
        font-size: 1.5rem;
        font-weight: 600;
        padding-bottom: 1rem;
        line-height: 2.rem;
        color: white;
        text-align: left;
      }

      .image-description-text {
        display: none;
        font-size: 19px;
        text-align: left;
        line-height: 2rem;
        margin-bottom: 40px;
      }

      .image-description-link {
        font-size: 8px;
        border-radius: 10px;
        background-color: #637386;
        color: white;
        padding: 6px 15px;
      }

      @media only screen and (min-width: 768px) {
      .image-description-block {
          width: 470px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .image-description-title {
          font-size: 2rem;
          font-weight: 600;
          padding-bottom: 1rem;
          color: white;
          text-align: right;
        }

        .image-description-text {
          display: block;
          font-size: 19px;
          text-align: right;
          line-height: 2rem;
          margin-bottom: 40px;
        }

        .image-description-link {
          font-size: 8px;
          border-radius: 10px;
          background-color: #637386;
          color: white;
          padding: 6px 15px;
        }
      }
    `}</style>
  </div>
);

const slideImages = [
  {
    original: `/static/images/01.jpg`,
    originalClass: 'slider-image',
    description: galleryImageDescription()
  },
  {
    original: `/static/images/2.jpg`,
    originalClass: 'slider-image',
    description: galleryImageDescription()
  },
  {
    original: `/static/images/4.jpg`,
    originalClass: 'slider-image',
    description: galleryImageDescription()
  },
  {
    original: `/static/images/04.jpg`,
    originalClass: 'slider-image',
    description: galleryImageDescription()
  },
  {
    original: `/static/images/05.jpg`,
    originalClass: 'slider-image',
    description: galleryImageDescription()
  },
];

const services = [
  {
    icon: `/static/images/iconWhite/bim.png`,
    width: 60
  },
  {
    icon: `/static/images/iconWhite/analysis.png`,
    width: 80
  },
  {
    icon: `/static/images/iconWhite/learning.png`,
    width: 60
  },
  {
    icon: `/static/images/iconWhite/certification.png`,
    width: 30
  },
  {
    icon: `/static/images/iconWhite/scanToBIM.png`,
    width: 60
  },
  {
    icon: `/static/images/iconWhite/design.png`,
    width: 60
  }
];

const blueServices = [
  {
    icon: `/static/images/iconBlue/bim.png`,
    width: 70,
    height: 10,
    title: 'BIM專案執行 / 諮詢服務',
    text: '以整合性的服務方案，協助客戶在設計、施工到維運階段，整合協調建築與機電模型，達到資訊一致並能視覺化的溝通，提升專案有效運作及管理。',
    link: '/services/project'
  },
  {
    icon: `/static/images/iconBlue/analysis.png`,
    width: 90,
    height: 30,
    title: '專案分析服務',
    text: '協助建案規劃完整的綠建築方案至取得專業認證，針對能耗進行模擬並提出建議，幫您打造更舒適、健康並具更佳能源效能之高品質綠建築。',
    link: '/services/analysis'
  },
  {
    icon: `/static/images/iconBlue/learning.png`,
    width: 65,
    height: 10,
    title: 'BIM教育訓練課程',
    text: '開設BIM專業課程，首創專案式訓練，讓企業能順暢的將BIM技術融入組織並提升工作效率。',
    link: '/services/education'
  },
  {
    icon: `/static/images/iconBlue/certification.png`,
    width: 30,
    height: 20,
    title: '驗證服務',
    text: '提供完整的ISO19650稽核服務，並協助企業快速導入現有專案，精準掌握BIM技術，取得國際認證。',
    link: '/services/certificate'
  },
  {
    icon: `/static/images/iconBlue/scanToBIM.png`,
    width: 70,
    height: 0,
    title: 'Scan to BIM 服務',
    text: '運用三維鐳射掃描技術，在短時間內得到高精度的模型資訊，且可與BIM結合做規劃設計、舊建物改建、施工查核與竣工模型整合等工作項目。',
    link: '/services/scan-to-bin'
  },
  {
    icon: `/static/images/iconBlue/design.png`,
    width: 70,
    height: 10,
    title: '整合設計服務',
    text: 'SGS Vircon的整合設計團隊，協助客戶在規劃設計階段就導入BIM技術，整合建築、結構、機電等各專業模型，提前檢討介面問題及達成設計最佳化。',
    link: '/services/integration'
  }
];

const communication = [
  {
    icon: `/static/images/icon/location.png`,
    width: 10,
    text: {
      tw: '248新北市新北產業園區五權路38號',
      hk: '香港九龍觀塘開源道33號建生廣場7樓701室'
    }
  },
  {
    icon: `/static/images/icon/email.png`,
    width: 16,
    text: {
      tw: 'Aries.Lee@sgs.com',
      hk: 'info@vircon.com.hk'
    }
  },
  {
    icon: `/static/images/icon/phone.png`,
    width: 16,
    text: {
      tw: '+886 2 2299 3279 分機：1849',
      hk: '+852 2617 2660'
    }
  },
  {
    icon: `/static/images/icon/fax.png`,
    width: 16,
    text: {
      tw: '+886 2 2299 7395',
      hk: '+852 2617 2990'
    }
  }
];

const bottomBar = [
  {
    title: '最新消息',
    className: 'news',
    text:
      <table width='100%' className='news-body'>
        <tbody>
          {mockData.news.map((data, index) => (
            <tr key={`news-${index}`}>
              <td style={{ padding: 5 }}>
                {data}
              </td>
            </tr>
          ))}
        </tbody>
        <style jsx>{`
          .news-body {
            margin-top: 30px;
          }
          @media only screen and (min-width: 768px) {
            .news-body {
              margin-top: 0px;
            }
          }
        `}</style>
        </table>
  },
  {
    title: 'Contact Us',
    className: 'contact-us',
    text:
      <table width='100%'>
          <tbody className='show-when-mobile'>
            <tr>
              <td colSpan="2" className='contact-us-title'>
                Taiwan Office
              </td>
            </tr>
            <tr style={{ fontWeight: 'bold' }}>
              <td colSpan="2">
                台灣檢驗科技股份有限公司
            </td>
            </tr>
            <tr>
              <td colSpan="2" className='contact-us-subtitle'>SGS TAIWAN Ltd.<br />建築資訊管理部</td>
            </tr>
            {communication.map(({ icon, text, width }, index) => (
              <tr key={`contect-${index}`}>
                <td style={{ paddingRight: 10 }}>
                  <img src={icon} alt={`contect-${index}`} width={width} />
                </td>
                <td style={{ fontSize: 14, marginLeft: 16 }}>
                  {text.tw}
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="2" className='contact-us-title'>
                Hong Kong Office
          </td>
            </tr>
            <tr style={{ fontWeight: 'bold' }}>
              <td colSpan="2">
                香港雲建有限公司
          </td>
            </tr>
            <tr>
              <td colSpan="2" className='contact-us-subtitle'>VIRCON</td>
            </tr>
            {communication.map(({ icon, text, width }, index) => (
              <tr key={`contect-${index}`}>
                <td style={{ paddingRight: 10 }}>
                  <img src={icon} alt={`contect2-${index}`} width={width} />
                </td>
                <td style={{ fontSize: 14, marginLeft: 16 }}>
                  {text.hk}
                </td>
              </tr>
            ))}
          </tbody>
          <tbody className='disable-when-mobile'>
            <tr>
              <td colSpan="2" className='contact-us-title'>
                Taiwan Office
              </td>
              <td style={{ width: 20 }}></td>
              <td colSpan="2" className='contact-us-title'>
                Hong Kong Office
              </td>
            </tr>
            <tr style={{ fontWeight: 'bold' }}>
              <td colSpan="2">
                台灣檢驗科技股份有限公司
              </td>
              <td></td>
              <td colSpan="2">
                香港雲建有限公司
              </td>
            </tr>
            <tr>
              <td colSpan="2" className='contact-us-subtitle'>SGS TAIWAN Ltd.<br />建築資訊管理部</td>
              <td></td>
              <td colSpan="2" className='contact-us-subtitle'>VIRCON</td>
            </tr>
            {communication.map(({ icon, text, width }, index) => (
              <tr key={`contect-${index}`}>
                <td style={{ paddingRight: 10 }}>
                  <img src={icon} alt={`contect-${index}`} width={width} />
                </td>
                <td style={{ fontSize: 14, marginLeft: 16 }}>
                  {text.tw}
                </td>
                <td></td>
                <td style={{ paddingRight: 10 }}>
                  <img src={icon} alt={`contect2-${index}`} width={width} />
                </td>
                <td style={{ fontSize: 14, marginLeft: 16 }}>
                  {text.hk}
                </td>
              </tr>
            ))}
          </tbody>
        <style jsx>{`
          .contact-us-title {
            font-size: 20px;
            padding: 40px 0px 15px;
          }
          .contact-us-subtitle {
            font-size: 14px;
            padding: 0px 0px 20px;
          }
          @media only screen and (min-width: 768px) {
            .contact-us-title {
              font-size: 20px;
              padding: 0px 0px 20px;
            }
          }
        `}</style>
      </table>
  },
];

const Service = ({ icon, title, text, width, height, link }) => (
  <div className='service-item'>
    <div className='service-item-header'>
      <img
        src={icon}
        alt={title}
        width={width}
        style={{
          position: 'absolute',
          top: `calc(0% - 20px - ${height}px)`,
          right: `calc(50% - ${width / 2}px)`,
          background: 'white',
        }}
      />
      <div className='service-item-header-title'>{title}</div>
    </div>
    <div
      className="flex-column not-close service-item-body"
    >
      <p style={{ padding: '10px 25px 0px' }}>{text}</p>
      <div className="floated-right" >
        <Link href={link === "/services/education" ? "/services/education" : "/services/[serviceName]"} as={link}>
          <a className="read-more-button" href={link}>
            Read More
          </a>
        </Link>
      </div>
    </div>
    <style jsx>{`
    .flex-column {
          display: flex;
          flex-direction: column;
        }
    .not-close {
          justify-content: space-between;
        }
    .read-more-button {
      font-size: 8px;
      background: #c2c0c0;
      color: white;
      border-radius: 10px;
      padding: 4px 15px;
      margin-right: 20;
    }
    .floated-right {
      display: flex;
      justify-content: flex-end;
    }
    .service-item {
      border: 2px solid #ded9d9;
      margin: 100px 42px 16px;
      width: 100%;
      min-height: 310px;
      background: #e3e1e1;
      position: relative;
    }
    .service-item-header {
      height: 40%;
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .service-item-header-title {
      font-weight: bold;
      padding: 80px 40px 10px;
    }
    .service-item-body {
      font-size: small;
      height: 60%;
      padding: 10px;
    }
    @media only screen and (min-width: 768px) {
      .service-item {
        width: 264px;
      }
    }
    `}</style>
  </div>
);

const scrollSetting = {
  duration: 1500,
  delay: 100,
  smooth: true,
  offset: -65, // Scrolls to element + 50 pixels down the page
};

class Main extends React.Component {
  componentDidMount() {
    const { ui, handleClearScrollTo } = this.props;

    if (ui.scrollTo !== 'none') {
      this.handleScroll(ui.scrollTo);
      handleClearScrollTo();
    }
  }

  handleScroll = element => scroller.scrollTo(element, scrollSetting);

  render() {
    return (
      <div>
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta itemProp="name" content={meta.title}/>
          <meta itemProp="description" content={meta.description}/>
          <meta itemProp="image" content={meta.image}/>
          <meta property="og:title" content={meta.title} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://www.sgs-vircon.com/" />
          <meta property="og:image" content={meta.image} />
          <meta property="og:description" content={meta.description} />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-162695239-6"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-162695239-6');
            `}}>
          </script>
        </Head>
        <Header onClick={this.handleScroll}/>
        <ImageGallery
          items={slideImages}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={true}
          autoPlay={false}
          slideInterval={6000}
          slideDuration={1000}
          showNav={true}
        />
          <div className="section-1-footer disable-when-mobile">
            <div>
              <h1 style={{ fontSize: 16, marginBottom: 6 }}>
                服務項目
              </h1>
              <div style={{ fontSize: 'xx-small' }}>
                OUR SERVICE
              </div>
            </div>
            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
              {services.map(({ icon, width }, index) => (
                <img
                  src={icon}
                  alt={`services-${index}`}
                  width={width}
                  style={{ margin: '34px 34px 0px', cursor: 'pointer' }}
                  key={`services-${index}`}
                  onClick={() => this.handleScroll('ourServices')}
                />
              ))}
            </div>
          </div>
        <Element name='ourServices'>
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container">
              <div className="our-service">
                  <p
                    className='service-title'
                >服務項目&nbsp;&nbsp;<span style={{ fontSize: 18 }}>OUR SERVICE</span></p>
              </div>
              <div className='service-block'>
                {blueServices.map((service, index) => (
                  <Service key={`services-${index}`} {...service} onClick={this.handleScroll}/>
                ))}
              </div>
            </div>
          </div>
        </section>
        </Element>
        <Element name='aboutUs'>
        <section className="hero is-fullheight-with-navbar section-3">
            <div className="hero-body">
              <div className='container'>
                <div className="tile is-vertical">
                <div className="tile">
                  <TimelineD3 />
                </div>
                <div className="tile">
                  <div className="tile is-vertical is-8">
                      <p
                        className='about-us'
                      >ABOUT US</p>
                    <div style={{ marginTop: 50 }}>
                      <img src={`/static/images/map.png`} alt='world map' width='100%'/>
                    </div>
                  </div>
                    <div className="tile">
                      <table width='100%' height='100%'>
                        <tbody>
                          {aboutUs.map((text, index) =>
                            <tr style={{ padding: 15 }} key={`about-${index}`}>
                                <td
                                  style={{ color: 'white', verticalAlign: 'middle', paddingRight: 15 }}
                                >
                                <Check style={{ fontWeight: 'bold' }}/>
                                </td>
                                <td style={{ color: '#fefefe', padding: 15, verticalAlign: 'middle', fontSize: 16 }}>
                                  {text}
                                </td>

                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>
        <Element name='contactUs'>
          <section
            className="hero is-fullheight-with-navbar section4-backgroung-img"
            style={{
              backgroundImage: `url("/static/images/bridgeBackground.png")`
            }}
          >
            <div className="hero-body" style={{ padding: '0px', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div className='disable-when-mobile' style={{ color: '#6e6c6d', fontSize: 60, lineHeight: 5 }}>
                When you need to be sure.
              </div>
              <div className='bottom-bar'>
                {bottomBar.map(({ title, text, className }, index) =>
                  <div key={`bottomBar-${index}`} className={className}>
                    <div className='contact'>{title}</div>
                    {text}
                  </div>
                )}
              </div>
              <Footer/>
            </div>
          </section>
        </Element>
        <style jsx>{`
        .section-1 {
          background: #1f344f;
        }
        .section-1-footer {
          flex-direction: column;
          width: 100%;
          background: linear-gradient(to top, rgba(31, 52, 79, 0.9), 70%, rgba(0, 0, 0, 0));
          position: absolute;
          bottom: 0;
          padding-bottom: 50px;
          color: white;
          text-align: center;
          align-items: center;
        }
        .section-3 {
          background: #1f344f;
        }
        .floated-right {
          display: flex;
          justify-content: flex-end;
        }
        .service-title {
          font-size: 26px;
          box-shadow: 0 1px #000;
          width: 240px;
          text-align: center;
        }
        .service-block {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .our-service {
          display: flex;
          justify-content: flex-start;
        }
        .about-us {
          color: white;
          box-shadow: 0 1px #fff;
          width: 9.5rem;
          font-size: 26px;
          text-align: center;
        }
        .bottom-bar {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          background: rgba(194, 192, 192, 0.4);
          flex-wrap: wrap;
          width: 100vw;
          height: auto;
        }
        .contact-us {
          flex: 1 0 80vw;
          margin: 40px 40px 30px;
        }
        .contact {
          font-size: 24px;
        }
        .section4-backgroung-img{
          background-size: cover;
        }
        .news {
          flex: 2 0 80vw;
          margin: 40px 40px 30px;
        }
        @media only screen and (min-width: 768px) {
          .our-service {
            justify-content: flex-end;
          }
          .about-us {
            box-shadow: 0 1px #fff;
            width: 10.1rem;
            font-size: 28px;
            text-align: center;
          }
          .bottom-bar {
            height: 400px;
            width: 80vw;
          }
          .contact {
            font-size: 20px;
            margin-bottom: 30px;
          }
          .contact-us {
            flex: 2;
          }
          .news {
            flex: 3;
          }
        }
        `}</style>
        <style global jsx>{`
        .image-gallery {
          margin-top: 52px;
        }
        .image-gallery-content .image-gallery-slide .image-gallery-image {
          max-height: none;
        }
        .image-gallery-slide .image-gallery-description {
          background: rgba(0, 0, 0, 0.3);
          padding: 20px;
        }
        .image-gallery-right-nav {
          display: none;
        }
        .image-gallery-left-nav {
          display: none;
        }
        .disable-when-mobile {
            display: none;
        }
        .show-when-mobile {
          display: block;
        }
        @media only screen and (min-width: 768px) {
          .image-gallery {
            margin-top: 0px;
          }
          .image-gallery-right-nav {
            display: block;
          }
          .image-gallery-left-nav {
            display: block;
          }
          .image-gallery-bullets {
            display: none;
          }
          .image-gallery-slide .image-gallery-description {
            left: 60%;
            bottom: calc(50vh - 136px);
            background: rgba(0, 0, 0, 0.3);
            width: auto;
          }
          .image-gallery-content .image-gallery-slide .image-gallery-image {
            max-height: none;
          }
          .slider-image {
            height: 100vh;
          }
          .disable-when-mobile {
            display: block;
          }
          .show-when-mobile {
            display: none;
          }
        }
          `}</style>
      </div>
    )
  };
};

const  mapStateToProps = state => ({
  ui: state.ui,
});

const mapDispatchToProps = dispatch => ({
  handleScrollTo: payload => dispatch(scrollTo(payload)),
  handleClearScrollTo: () => dispatch(clearScrollTo()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);