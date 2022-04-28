import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTube from '@material-ui/icons/YouTube';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Facebook from '@material-ui/icons/Facebook';

const icons = [
  {
    icon: <Facebook />,
    link: 'https://www.facebook.com/SGSVIRCON'
  },
  {
    icon: <YouTube />,
    link: 'https://www.facebook.com/SGSVIRCON'
  }
];

export default props => (
  <footer
    className='footer has-text-centered'
    style={{ background: '#1f344fd0', color: 'white', width: '100vw' }}
  >
    <div style={{ marginBottom: 20 }}>
      © 2020 BY SGS-VIRCON LIMITED, TAIWAN.
    </div>
    <div>
      {icons.map(({icon, link}, index) =>
        <span className="icon" style={{ margin: 10 }} key={`social-icon-${index}`}>
          {link === ''
            ? icon
            :
            <a href={link} style={{ color: 'white' }}>
              {icon}
            </a>
          }
        </span>
      )}
    </div>
  </footer>
);