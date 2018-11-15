import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";

export default ({ exercise }) => {
    return (
        <Fragment>
            {exercise !== null ? (
                <Fragment>
                    <Typography variant="h3">{exercise.title}</Typography>
                    <Typography variant="body2">
                        {exercise.description}
                    </Typography>
                </Fragment>
            ) : null}
        </Fragment>
    );
};
