import { Container, Typography } from "@mui/material";
import QuizDetailTable from "../features/quiz-detail/QuizDetailTable";
import useQuiz from "../features/quiz-detail/useQuiz";

function QuizDetail() {
    const { isLoadingQuiz, quiz } = useQuiz();
    if (isLoadingQuiz) return <p>Loading...</p>;
    return (
        <Container
            maxWidth="xl"
            sx={{
                paddingY: "20px",
            }}
        >
            <Typography
                variant="h1"
                sx={{ fontSize: "30px", fontWeight: 600 }}
                gutterBottom
            >
                Quiz Detail
            </Typography>
            <QuizDetailTable quiz={quiz} />
        </Container>
    );
}

export default QuizDetail;
