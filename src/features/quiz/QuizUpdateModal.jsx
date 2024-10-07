import { Box, Modal, Typography } from "@mui/material";
import QuizUpdateForm from "./QuizUpdateForm";

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
function QuizUpdateModal({ open, handleClose, quizzes, quizId }) {
    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <QuizUpdateForm
                    open={open}
                    quizzes={quizzes}
                    handleClose={handleClose}
                    quizId={quizId}
                />
            </Box>
        </Modal>
    );
}

export default QuizUpdateModal;
