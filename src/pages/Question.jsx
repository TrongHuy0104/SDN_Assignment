import { Container } from "@mui/material";
import useQuestions from "../features/question/useQuestions";
import Heading from "../components/Heading";
import QuestionTable from "../features/question/QuuestionTable";
import { useState } from "react";
import QuestionAddModal from "../features/question/QuestionAddModal";
import useQuizzes from "../features/quiz/useQuizzes";

function Question() {
    const { isLoadingQuestions, questions } = useQuestions();
    const { isLoadingQuizzes, quizzes } = useQuizzes();
    const [openAddModal, setOpenAddModal] = useState(false);
    const handleOpenAddModal = () => setOpenAddModal(true);
    const handleCloseAddModal = () => setOpenAddModal(false);
    if (isLoadingQuestions || isLoadingQuizzes) return <p>Loading...</p>;
    return (
        <Container
            maxWidth="xl"
            sx={{
                paddingY: "20px",
            }}
        >
            <Heading title="Question" handleOpen={handleOpenAddModal} />
            <QuestionTable questions={questions} quizzes={quizzes} />
            <QuestionAddModal
                open={openAddModal}
                handleClose={handleCloseAddModal}
                questions={questions}
                quizzes={quizzes}
            />
        </Container>
    );
}

export default Question;
