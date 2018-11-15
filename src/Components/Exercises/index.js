import React, { Fragment } from "react";
import {
    withStyles,
    Grid,
    Typography,
    Paper,
    List,
    ListItem,
    ListItemText,
    ListSubheader
} from "@material-ui/core";

const styles = {
    Paper: { padding: 20, marginTop: "10px 0", height: 400 },
    GridLayout: {
        xs: 6,
        sm: 6,
        md: 6,
        lg: 6
    }
};

const wStyles = theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: "relative",
        overflow: "hidden",
        maxHeight: "auto"
    },
    listSection: {
        backgroundColor: "inherit"
    },
    ul: {
        backgroundColor: "inherit",
        padding: 0
    }
});

export default withStyles(wStyles)(
    ({ exercises, classes, selectedCategory }) => {
        // Only display list of exercises of the selected category
        if (selectedCategory !== 0) {
            exercises = exercises.filter(
                exercise => exercise[0] === selectedCategory
            );
        }

        return (
            <Grid container spacing={16}>
                <Grid item {...styles.GridLayout}>
                    <Paper style={styles.Paper}>
                        <List
                            className={classes.root}
                            subheader={<ListSubheader />}
                        >
                            {exercises.map(([group, exercise]) => {
                                return (
                                    <li
                                        key={group}
                                        className={classes.listSection}
                                    >
                                        <ul className={classes.ul}>
                                            <ListSubheader disableGutters>
                                                <Typography
                                                    variant="h6"
                                                    style={{
                                                        textTransform:
                                                            "capitalize"
                                                    }}
                                                >
                                                    {group}
                                                </Typography>
                                            </ListSubheader>

                                            {exercise.map(ex => {
                                                return (
                                                    <ListItem
                                                        key={ex.title}
                                                        button
                                                    >
                                                        <ListItemText>
                                                            {ex.title}
                                                        </ListItemText>
                                                    </ListItem>
                                                );
                                            })}
                                        </ul>
                                    </li>
                                );
                            })}
                        </List>
                    </Paper>
                </Grid>

                <Grid item {...styles.GridLayout}>
                    <Paper style={styles.Paper}>
                        <Typography variant="h4">Welcome!</Typography>
                        Please select an exercise from the left to view details.
                    </Paper>
                </Grid>
            </Grid>
        );
    }
);
