import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Detail from './Detail';
import {
  withStyles,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';

const styles = {
  Paper: { padding: 20, marginTop: '10px 0', height: 400 },
  GridLayout: {
    xs: 6,
    sm: 6,
    md: 6,
    lg: 6,
  },
};

const wStyles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: '100%',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

class I extends Component {
  state = {
    selectedExercise: null,
  };

  static propTypes = {
    exercises: PropTypes.array.isRequired,
  };

  handleItemClick = ex => {
    this.setState({ selectedExercise: ex });
  };

  render() {
    const { exercises, classes, selectedCategory } = this.props;
    const { selectedExercise } = this.state;

    let exs = exercises;
    // Only display list of exercises of the selected category
    if (selectedCategory !== 0) {
      exs = this.props.exercises.filter(
        exercise => exercise[0] === selectedCategory
      );
    }

    return (
      <Grid container spacing={16} wrap="wrap">
        <Grid item {...styles.GridLayout}>
          <Paper style={styles.Paper}>
            <List className={classes.root} subheader={<ListSubheader />}>
              {exs.map(([group, exercise]) => {
                return (
                  <li key={group} className={classes.listSection}>
                    <ul className={classes.ul}>
                      <ListSubheader disableGutters>
                        <Typography
                          variant="h6"
                          style={{
                            textTransform: 'capitalize',
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
                            onClick={() => this.handleItemClick(ex)}
                          >
                            <ListItemText>{ex.title}</ListItemText>
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
            {selectedExercise ? (
              <Detail exercise={selectedExercise} />
            ) : (
              <Fragment>
                <Typography variant="h4">{'Welcome!'}</Typography>
                {'Please select an exercise from the left to view details.'}
              </Fragment>
            )}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(wStyles)(I);
