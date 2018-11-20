import React, { Component, Fragment } from 'react';
import { Header, Footer, CustomDrawer } from './Layouts';
import Exercises from './Exercises';
// TODO: publish Reveal as npm package
import Reveal from './Reveal';

import { muscles, exercises } from '../store';
import { ClickAwayListener } from '@material-ui/core';

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
        {/* <ClickAwayListener onClickAway={this.handleClickDrawerClose}> */}
        <CustomDrawer
          drawerOpen={drawerOpen}
          handleClickDrawerClose={this.handleClickDrawerClose}
        />
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

        <Exercises exercises={exercises} selectedCategory={selectedCategory} />

        <div style={{ height: '2000px' }} />

        <Reveal render={reveal => <div>Reveal</div>} />
      </Fragment>
    );
  }
}
