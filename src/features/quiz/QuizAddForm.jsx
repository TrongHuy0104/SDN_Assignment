import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useCreateQuiz from "./useCreateQuiz";

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

function QuizAddForm({ open, quizzes, handleClose }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [error, setError] = useState(false);

    const { createQuizAPI, isCreating } = useCreateQuiz();

    useEffect(() => {
        if (open) {
            setTitle("");
            setDesc("");
            setError(false);
        }
    }, [open]);

    const isQuizExist = quizzes.find((quiz) => quiz.title === title);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === "" || isQuizExist) {
            setError(true);
        } else {
            setError(false);
            const newQuiz = {
                title,
                description: desc,
            };
            createQuizAPI(newQuiz);
            handleClose();
        }
    };

    return (
        <form method="post" onSubmit={handleSubmit}>
            <Typography variant="h3" style={{ fontSize: "28px" }}>
                Add Quiz Form
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
                disabled={isCreating}
            >
                Submit
            </Button>
        </form>
    );
}

export default QuizAddForm;
