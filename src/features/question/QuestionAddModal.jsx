import { Box, Modal, Typography } from "@mui/material";
import QuestionAddForm from "./QuestionAddForm";

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
function QuestionAddModal({ open, handleClose, questions, quizzes }) {
    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <QuestionAddForm
                    open={open}
                    handleClose={handleClose}
                    quizzes={quizzes}
                />
            </Box>
        </Modal>
    );
}

export default QuestionAddModal;
