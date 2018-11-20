import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default class extends Component {
  state = {
    value: 0,
    isMobile: false,
  };

  static propTypes = {
    muscles: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  componentDidMount = () => {
    window.addEventListener('resize', _.throttle(this.checkIsMobile, 300));
    this.setState({
      value: this.props.selectedCategory || 0,
      isMobile: this.isMobile(),
    });
  };

  /*
        @return {void}
    */
  checkIsMobile = () => {
    if (this.isMobile()) {
      console.log('mobile');
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  };

  /*
        @return {Boolean}
    */
  isMobile = () => {
    return window.innerWidth < 700;
  };

  handleChange = (e, value) => {
    this.setState({ value });
    this.props.onSelect(value);
  };

  render() {
    const { muscles } = this.props;

    return (
      <Paper className="footer--sticky">
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered={!this.state.isMobile}
          scrollable={this.state.isMobile}
          scrollButtons="on"
        >
          <Tab label="all" />
          {muscles.map(muscle => (
            <Tab label={muscle} key={muscle} value={muscle} />
          ))}
        </Tabs>
      </Paper>
    );
  }
}
