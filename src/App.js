// import logo from './logo.svg';
import './App.css';
import 'material-components-web/dist/material-components-web.min.css';

import React, {Component} from 'react';

import {
  Route,
  Link,
  Switch as RouterSwitch,
  BrowserRouter as Router,
} from 'react-router-dom';

import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarActionItem,
  TopAppBarTitle,
} from 'rmwc/TopAppBar';

import {Drawer, DrawerHeader, DrawerContent} from 'rmwc/Drawer';

import {List, ListItem, ListItemText} from 'rmwc/List';

import {menuContent} from './menuContent.js';

import {questions} from './questions.js';

import _ from 'lodash';

const MenuItem = ({url, label}) => {
  return (
    <ListItem
      onClick={() => window.scrollTo(0, 0)}
      activated={
        window.location.pathname.split('/').pop() === url.split('/').pop()
      }
    >
      <Link to={url}>
        <ListItemText>{label}</ListItemText>
      </Link>
    </ListItem>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopAppBar>
            <TopAppBarRow>
              <TopAppBarSection>
                {/* <TopAppBarNavigationIcon use="menu" /> */}
              </TopAppBarSection>
            </TopAppBarRow>
          </TopAppBar>

          <Drawer permanent className="drawer">
            <DrawerContent>
              {menuContent.map(m => {
                return <MenuItem label={m.label} url={m.url} key={m.label} />;
              })}
            </DrawerContent>
          </Drawer>

          <main className="app__content">
            <RouterSwitch>
              {menuContent.map(m => {
                return (
                  <Route
                    key={m.label}
                    path={m.url}
                    exact
                    render={() => {
                      document.title = `${m.label}`;
                      return <div>{m.label}</div>;
                    }}
                  />
                );
              })}
            </RouterSwitch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
