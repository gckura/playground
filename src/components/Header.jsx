import React from 'react';
import '../styles/index.css';
import {Link} from 'react-router-dom';

function Header(props) {
  return (
    <div className="a__header">
      <Link to="/">
        <span>KURAD</span>
      </Link>
    </div>
  );
}

export default Header;
