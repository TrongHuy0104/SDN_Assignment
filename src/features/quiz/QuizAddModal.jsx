import { Box, Modal, Typography } from "@mui/material";
import QuizAddForm from "./QuizAddForm";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
function QuizAddModal({ open, handleClose, quizzes }) {
    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <QuizAddForm
                    open={open}
                    quizzes={quizzes}
                    handleClose={handleClose}
                />
            </Box>
        </Modal>
    );
}

export default QuizAddModal;
