import { useState } from "react";
import { Container } from "@mui/material";
import Heading from "../components/Heading";
import useQuizzes from "../features/quiz/useQuizzes";
import QuizTable from "../features/quiz/QuizTable";
import QuizAddModal from "../features/quiz/QuizAddModal";

function Quiz() {
    const { isLoadingQuizzes, quizzes } = useQuizzes();
    const [openAddModal, setOpenAddModal] = useState(false);
    const handleOpenAddModal = () => setOpenAddModal(true);
    const handleCloseAddModal = () => setOpenAddModal(false);
    if (isLoadingQuizzes) return <p>loading...</p>;
    return (
        <Container
            maxWidth="xl"
            sx={{
                paddingY: "20px",
            }}
        >
            <Heading title="Quiz" handleOpen={handleOpenAddModal} />
            <QuizTable quizzes={quizzes} />
            <QuizAddModal
                open={openAddModal}
                handleClose={handleCloseAddModal}
                quizzes={quizzes}
            />
        </Container>
    );
}

export default Quiz;
