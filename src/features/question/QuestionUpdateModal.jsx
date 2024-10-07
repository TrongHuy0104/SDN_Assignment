import { Box, Modal, Typography } from "@mui/material";
import QuestionUpdateForm from "./QuestionUpdateForm";
// import QuizUpdateForm from "./QuizUpdateForm";

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
function QuestionUpdateModal({
    open,
    handleClose,
    questions,
    quizzes,
    questionId,
}) {
    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <QuestionUpdateForm
                    open={open}
                    handleClose={handleClose}
                    questions={questions}
                    quizzes={quizzes}
                    questionId={questionId}
                />
            </Box>
        </Modal>
    );
}

export default QuestionUpdateModal;
