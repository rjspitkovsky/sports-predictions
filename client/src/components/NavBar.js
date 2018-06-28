import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '200px',
  padding: '16px',
  margin: '0 6px 6px',
  background: 'black',
  textDecoration: 'none',
  color: 'white',
}

export const NavBar = props => {
  return (
    <div>
    <NavLink
    to="/"
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}
  >Home</NavLink>
  <NavLink
    to="/predictions"
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}
  >Predictions</NavLink>
  <NavLink
    to="/correct"
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}
  >Spot On Takes</NavLink>
  <NavLink
    to="/wrong"
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}
  >Hilariously Wrong Thoughts</NavLink>
</div>
  )
}
