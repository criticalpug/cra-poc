import React from "react";
import {Link} from 'react-router-dom'

const Header = () => (
    <ul>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/admin">
          Admin
        </Link>
      </li>
      <li>
        <Link to="/partners">
          Partners
        </Link>
      </li>
      <li>
        <Link to="/questions">
          Questions
        </Link>
      </li>
    </ul>
);

export default Header
