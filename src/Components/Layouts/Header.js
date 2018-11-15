import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography component="h2" variant="h4" color="inherit">
                    Exercise Database
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
