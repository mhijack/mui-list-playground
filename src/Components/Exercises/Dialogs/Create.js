import React, { Fragment, Component } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText,
    Button,
    TextField
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

class Create extends Component {
    state = {
        open: false
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

    render() {
        const { open } = this.state;

        return (
            <Fragment>
                <Button onClick={this.handleClickOpen} variant="fab" mini>
                    <AddIcon />
                </Button>
                <Dialog
                    open={open}
                    onClose={this.handleClickClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Create a new exercise.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
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
