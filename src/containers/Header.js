import React from 'react'
import logo from '../logo.png'
import { Title }  from '../components'

const Header = () => (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Title />
    </div>
  );


export default Header;