import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

function DeleteConfirmModal({ open, handleClose, handleDelete }) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{"Confirm Delete"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this item? This action
                    cannot be undone.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleDelete} color="error" autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteConfirmModal;
