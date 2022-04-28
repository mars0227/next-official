import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import Search from '@material-ui/icons/Search';
import Link from 'next/link';

import { scrollTo } from '../../actions/uiActions';
import './Header.css';

const headerHeight = 78;

const pages = [
  {
    title: '關於我們',
    type: 'button',
    scrollTo: 'aboutUs'
  },
  {
    title: '服務項目',
    type: 'button',
    scrollTo: 'ourServices'
  },
  {
    title: '教育訓練',
    type: 'a',
    link: 'courses'
  },
  {
    title: '專案作品',
    type: 'a',
    link: ''
//    link: '/project'
  },
  {
    title: '部落格',
    type: 'a',
    link: '/blog'
  },
  {
    title: '聯絡我們',
    type: 'button',
    scrollTo: 'contactUs'
  },
];

const navBarClass = [
  'top',
  'section1',
  'section2',
  'section3'
];

function Tag(props) {
  const { title, section, scrollTo, onClick, onBugerClose, handleScrollTo, router } = props;

  function handleClick() {
    if (onClick) {
      onClick(scrollTo);
      onBugerClose();
    } else {
      handleScrollTo(scrollTo);
      router.push('/');
    }
  }

  return (
    <button
      className={`navbar-item ${navBarClass[section]} header-link`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

const defaultState = {
  burgerOpen: false,
  scrolled: false,
  section: 0,
  searchInput: '',
  searchInputOpen: false,
  windowHeight: 0
};

class Header extends React.Component {
  state = defaultState;

  componentDidMount() {
    const windowHeight = window.innerHeight;
    this.setState({ windowHeight });

    const { fixed } = this.props;

    if (fixed) {
      this.setState({ section: 3 });
    } else {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }
  };

  componentWillUnmount() {
    const { fixed } = this.props;

    if(!fixed) window.removeEventListener('scroll', this.handleScroll.bind(this));
  };

  handleScroll() {
    const { section, windowHeight } = this.state;

    let newSection = 0;
    const y = window.scrollY;
    const sectionY = [windowHeight - headerHeight, (windowHeight - headerHeight) * 2, (windowHeight - headerHeight) * 3];

    if (y < sectionY[0]) {
      newSection = 0;
    } else if (y < sectionY[1]) {
      newSection = 1;
    } else if (y < sectionY[2]) {
      newSection = 2;
    } else {
      newSection = 3;
    }

    if (newSection !== section) {
      this.setState({ section: newSection });
    }
  };

  setBugerOpen = () => {
    const { burgerOpen } = this.state;
    this.setState({ burgerOpen: !burgerOpen });
  }

  handleSearch = () => {
    const { searchInputOpen, searchInput } = this.state;
    if (searchInputOpen === false) this.setState({ searchInputOpen: true });
    else {
      if (searchInput.length === 0) {
        this.setState({ searchInputOpen: false });
      } else {
        // call search
        console.log('search');
      }
    }
  }

  handleSearchIconClick = () => {
    const { searchInputOpen } = this.state;
    if (searchInputOpen === false) this.setState({ searchInputOpen: true });
    else this.handleSearch();
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleEnter = e => {
    if (e.key === 'Enter') this.handleSearch();
  }

  render() {
    const { burgerOpen, section, scrolled, searchInputOpen } = this.state;
    const { onClick, handleScrollTo, router } = this.props;

    return (
      <nav
        className={`navbar is-fixed-top ${navBarClass[section]} ${scrolled ? '' : 'higher'}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={'/static/images/logo.png'} className={`logo ${navBarClass[section]}`} width="320" alt='logo' />
            <img src={'/static/images/logo-white.png'} className={`logo-white ${navBarClass[section]}`} width="320" alt='logo' />
          </a>
          <div
            role="button"
            className={`navbar-burger burger${burgerOpen ? ' is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => this.setBugerOpen()}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div id="navbarBasicExample" className={`navbar-menu${burgerOpen ? ' is-active' : ''} ${navBarClass[section]}`}>
          <div className={`${section === 0 ? 'navbar-end' : 'navbar-start'}`}>
            {pages.map(({ title, type, link, scrollTo }, index) => (type === 'button'
              ? <Tag
                key={`navbar-item-${index}`}
                title={title}
                section={section}
                scrollTo={scrollTo}
                onClick={onClick}
                handleScrollTo={handleScrollTo}
                onBugerClose={() => this.setBugerOpen()}
                router={router}
                />
              : link === ''
                ?
                  <div
                    className={`navbar-item ${navBarClass[section]}`}
                    key={`navbar-item-${index}`}
                    style={{ background: 'none' }}
                  >{title}</div>
                : <Link href={link} as={link} key={`navbar-item-${index}`}>
                    <a
                      className={`navbar-item ${navBarClass[section]} header-link`}
                      style={{ background: 'none' }}
                    >
                      {title}
                    </a>
                </Link>
              )
            )}
            <div className={`navbar-item ${navBarClass[section]}`}>
              <input
                name='searchInput'
                type="text"
                placeholder="Type to search"
                className={`search-txt${searchInputOpen ? ' search-box-open' : ''} input-text`}
                onChange={this.handleInputChange}
                onKeyDown={this.handleEnter}
              />
              <span className="search-btn">
                <Search onClick={this.handleSearchIconClick} />
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
 };

 const mapStateToProps = state => ({
  ui: state.ui,
});

const mapDispatchToProps = dispatch => ({
  handleScrollTo: payload => dispatch(scrollTo(payload))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header));