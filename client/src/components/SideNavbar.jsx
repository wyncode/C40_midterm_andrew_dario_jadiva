import React from 'react';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const SideNavbar = () => {
  return (
    <SideNav
      style={{ backgroundColor: '#9c9c9c', color: 'black' }}
      onSelect={(selected) => {}}
    >
      <SideNav.Toggle />
      <SideNav.Nav></SideNav.Nav>
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon style={{ color: 'white' }}>
            <a href="/">
              <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', color: 'white' }} />
            </a>

          </NavIcon>
          <NavText style={{ color: 'black' }}>Home</NavText>
        </NavItem>
        <NavItem eventKey="charts">
          <NavIcon>
            <i
              className="fas fa-list-alt"
              style={{ fontSize: '2 em', color: 'black' }}
            />
          </NavIcon>
          <NavText style={{ color: 'black' }}>Categories</NavText>
          <NavItem eventKey="charts/linechart">
            <NavText style={{ color: 'black' }}>Starters 🥟</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText style={{ color: 'black' }}>Pasta 🍝</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText style={{ color: 'black' }}>Sides 🍟</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText style={{ color: 'black' }}>Vegan/Vegetarian 🥬</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText style={{ color: 'black' }}>Meat Dishes 🍗</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText style={{ color: 'black' }}>Dessert 🍰</NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default SideNavbar;
