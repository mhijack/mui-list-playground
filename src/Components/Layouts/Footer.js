import React, { Component } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default class extends Component {
    state = {
        value: 0
    };

    componentDidMount = () => {
        this.setState({ value: this.props.selectedCategory || 0 });
    };

    handleChange = (e, value) => {
        this.setState({ value });
        this.props.onSelect(value);
    };

    render() {
        const { muscles, onSelect, selectedCategory } = this.props;

        return (
            <Paper className="footer--sticky">
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
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
