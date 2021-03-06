import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import TopbarNav from './TopbarNav';
import { Route, Switch } from 'react-router-dom';
import Profile from './profile/Profile';
import Users from './user/Users';
import MyProfile from './profile/MyProfile';
import ThingtypeContainer from './thing_types/ThingtypeContainer';
import { HomeContextProvider } from '../context/HomeContext';
import { AuthContext } from '../context/AuthContext';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {

  const {userInfo} = useContext(AuthContext).authState
   
  const {score} = JSON.parse(userInfo)
  const [totalScore, setTotalScore] = useState(score)

  return (
    <React.Fragment>
       <HomeContextProvider
        value={{
          totalScore,
          setTotalScore: (t) => setTotalScore(t)
        }}
       >
      <CssBaseline />
      <ElevationScroll {...props}>
       

        
      <AppBar sx={{backgroundColor: "white"}}>
          <Toolbar>
              <TopbarNav />
            
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container sx={{pr: 0, pl: 0}}>
        <Switch >
            <Route path="/users/:id" render={() => <Profile />} />
            <Route  path="/users" render={() => <Users />} />
            <Route  path="/favourite_thing_types/:id" render={() => <ThingtypeContainer />} /> 

            <Route path='/' render={() => <MyProfile /> } />

        </Switch>
      </Container>
      </HomeContextProvider>
    </React.Fragment>
  );
}
