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
      className="stylingnav"
      style={{ background: 'blue' }}
      onSelect={(selected) => {}}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon style={{ color: 'white' }}>
            <i
              className="fa fa-fw fa-home"
              style={{ fontSize: '1.75em', color: 'white' }}
            />
          </NavIcon>
          <NavText style={{ color: 'white' }}>Home</NavText>
        </NavItem>
        <NavItem eventKey="charts">
          <NavIcon>
            <i
              className="fa fa-fw fa-line-chart"
              style={{ fontSize: '1.75em' }}
              style={{ color: 'white' }}
            />
          </NavIcon>
          <NavText style={{ color: 'white' }}>About</NavText>
          <NavItem eventKey="charts/linechart">
            <NavText>Line Chart</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText>Bar Chart</NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default SideNavbar;

// sample
// export const SideNavbarData = {
//   title: 'Home',
//   path: '/',
//   className: 'nav-item'
// },
// {
//   title: 'Categories',
//   path: '/',
//   className: 'nav-item'
// },
// {
// title: 'Featured',
// path: '/',
// className: 'nav-item'
// },
// {
// title: 'Vegan/Vegetarian',
// path: '/',
// className: 'nav-item'
// },
