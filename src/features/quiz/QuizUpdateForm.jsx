import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useCreateQuiz from "./useCreateQuiz";
import useUpdateQuiz from "./useUpdateQuiz";

const styles = {
    input: {
        width: "100%",
        marginTop: "16px",
    },
    button: {
        marginTop: "16px",
        marginLeft: "auto",
    },
};

function QuizUpdateForm({ open, handleClose, quizzes, quizId }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [error, setError] = useState(false);

    const { updateQuizAPI, isUpdating } = useUpdateQuiz();

    useEffect(() => {
        if (open) {
            setTitle(quizzes.find((quiz) => quiz._id === quizId)?.title);
            setDesc(quizzes.find((quiz) => quiz._id === quizId)?.description);
            setError(false);
        }
    }, [open]);

    const isQuizExist = quizzes.find((item) => item.title === title);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === "" || isQuizExist) {
            setError(true);
        } else {
            setError(false);
            const updateQuiz = {
                title,
                description: desc,
            };
            updateQuizAPI({ id: quizId, data: updateQuiz });
            handleClose();
        }
    };

    return (
        <form method="post" onSubmit={handleSubmit}>
            <Typography variant="h3" style={{ fontSize: "28px" }}>
                Update Quiz Form
            </Typography>
            <TextField
                label="Enter quiz title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                error={error}
                helperText={
                    error
                        ? isQuizExist
                            ? "Quiz title is exist"
                            : "This field is required"
                        : ""
                }
                InputProps={{ style: { color: error ? "red" : "inherit" } }}
                sx={styles.input}
            />
            <TextField
                label="Enter description"
                variant="outlined"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                sx={styles.input}
            />
            <Button
                type="submit"
                variant="contained"
                sx={styles.button}
                disabled={isUpdating}
            >
                Submit
            </Button>
        </form>
    );
}

export default QuizUpdateForm;
