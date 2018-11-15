import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";

import { muscles, exercises } from "../store";

export default class extends Component {
    state = {
        exercises,
        selectedCategory: 0
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

    render() {
        const exercises = this.getExercisesByCategory();
        const { selectedCategory } = this.state;

        return (
            <Fragment>
                <Header />

                <Footer
                    muscles={muscles}
                    onSelect={this.onSelect}
                    selectedCategory={selectedCategory}
                />

                <Exercises
                    exercises={exercises}
                    selectedCategory={selectedCategory}
                />
            </Fragment>
        );
    }
}
