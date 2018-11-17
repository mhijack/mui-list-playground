import React, { Fragment, Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import AddIcon from "@material-ui/icons/Add";

class Create extends Component {
    state = {
        open: false,
        // TextField Input value as a unified form object
        form: {
            title: "",
            description: "",
            muscles: ""
        }
    };

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    };

    handleClickClose = () => {
        this.setState({
            open: false
        });
    };

    handleInputChange = name => event => {
        this.setState({
            form: {
                ...this.state.form,
                [name]: event.target.value
            }
        });
    };

    render() {
        const {
            open,
            form: { title, description, muscles }
        } = this.state;

        return (
            <Fragment>
                <Button onClick={this.handleClickOpen} variant="fab" mini>
                    <AddIcon />
                </Button>
                <Dialog
                    open={open}
                    onClose={this.handleClickClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth
                >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Create a new exercise.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="title"
                            type="text"
                            fullWidth
                            value={title}
                            label="Title"
                            onChange={this.handleInputChange("title")}
                        />

                        <br />

                        <FormControl fullWidth>
                            <InputLabel htmlFor="muscles">Muscles</InputLabel>
                            <Select
                                value={muscles}
                                onChange={this.handleInputChange("muscles")}
                                autoWidth
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <br />

                        <TextField
                            margin="dense"
                            id="description"
                            type="tet"
                            fullWidth
                            multiline
                            rowsMax={4}
                            value={description}
                            label="Description"
                            onChange={this.handleInputChange("description")}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClickClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClickClose} color="primary">
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

export default Create;
