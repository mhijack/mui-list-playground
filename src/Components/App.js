import React, { Component, Fragment, lazy, Suspense } from 'react';
import { Header, Footer } from './Layouts';
// TODO: publish Reveal on npm
import Reveal from './Reveal';

import { muscles, exercises } from '../store';
// import { ClickAwayListener } from '@material-ui/core';

const LazyCustomDrawer = lazy(() => import('./Layouts/CustomDrawer'));
const LazyExercises = lazy(() => import('./Exercises'));

export default class extends Component {
  state = {
    exercises,
    selectedCategory: 0,
    drawerOpen: false,
  };

  onSelect = category => {
    this.setState({ selectedCategory: category });
  };

  getExercisesByCategory = () => {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  };

  handleClickDrawerOpen = () => {
    this.setState({ drawerOpen: true });
  };

  handleClickDrawerClose = () => {
    console.log('closed');
    this.setState({ drawerOpen: false });
  };

  render() {
    const exercises = this.getExercisesByCategory();
    const { selectedCategory, drawerOpen } = this.state;

    return (
      <Fragment>
        {
          // TODO: try ClickAwayListener elsewhere
        }
        {/* <ClickAwayListener onClickAway={this.handleClickDrawerClose}> */}
        <Suspense fallback={<div>loading...</div>}>
          <LazyCustomDrawer
            drawerOpen={drawerOpen}
            handleClickDrawerClose={this.handleClickDrawerClose}
          />
        </Suspense>
        {/* </ClickAwayListener> */}

        <Header
          drawerOpen={drawerOpen}
          handleClickDrawerOpen={this.handleClickDrawerOpen}
        />

        <Footer
          muscles={muscles}
          onSelect={this.onSelect}
          selectedCategory={selectedCategory}
        />

        <Suspense fallback={<div>loading...</div>}>
          <LazyExercises
            exercises={exercises}
            selectedCategory={selectedCategory}
          />
        </Suspense>

        <div style={{ height: '2000px' }} />

        <Reveal render={reveal => <div>Reveal</div>} />
      </Fragment>
    );
  }
}
