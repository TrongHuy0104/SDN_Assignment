import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import useCreateQuestion from "./useCreateQuestion";

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

function QuestionAddForm({ open, handleClose, quizzes }) {
    const [text, setText] = useState("");
    const [options, setOptions] = useState("");
    const [keywords, setKeywords] = useState("");
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
    const [quiz, setQuiz] = useState(null);

    const [error, setError] = useState({
        text: false,
        options: false,
        correctAnswerIndex: false,
        quiz: false,
    });

    const { createQuestionAPI, isCreating } = useCreateQuestion();

    useEffect(() => {
        if (open) {
            setText("");
            setOptions("");
            setKeywords("");
            setCorrectAnswerIndex(null);
            setQuiz(null);
            setError({
                text: false,
                options: false,
                correctAnswerIndex: false,
                quiz: false,
            });
        }
    }, [open]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let errorObj = {
            text: false,
            options: false,
            correctAnswerIndex: false,
            quiz: false,
        };

        if (text === "") {
            errorObj.text = true;
        } else {
            errorObj.text = false;
        }

        if (options === "") {
            errorObj.options = true;
        } else {
            errorObj.options = false;
        }

        if (correctAnswerIndex === null) {
            errorObj.correctAnswerIndex = true;
        } else {
            errorObj.correctAnswerIndex = false;
        }

        if (quiz === null) {
            errorObj.quiz = true;
        } else {
            errorObj.quiz = false;
        }

        setError(errorObj);

        if (text && options && correctAnswerIndex !== null && quiz) {
            const newQuestion = {
                text,
                options: options.split(", "),
                keywords: keywords.split(","),
                correctAnswerIndex,
            };
            createQuestionAPI({ id: quiz, data: newQuestion });
            handleClose();
        }
    };

    return (
        <form method="post" onSubmit={handleSubmit}>
            <Typography variant="h3" style={{ fontSize: "28px" }}>
                Add Question Form
            </Typography>
            <TextField
                label="Enter question text"
                variant="outlined"
                value={text}
                onChange={(e) => setText(e.target.value)}
                error={error?.text}
                helperText={error?.text ? "This field is required" : ""}
                InputProps={{
                    style: { color: error?.text ? "red" : "inherit" },
                }}
                sx={styles.input}
            />
            <TextField
                label="Enter options (Comma separated)"
                variant="outlined"
                value={options}
                onChange={(e) => {
                    setOptions(e.target.value);
                }}
                error={error?.options}
                helperText={error?.options ? "This field is required" : ""}
                InputProps={{
                    style: { color: error?.options ? "red" : "inherit" },
                }}
                sx={styles.input}
            />
            <TextField
                label="Enter keywords (Comma separated)"
                variant="outlined"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                sx={styles.input}
            />
            {options ? (
                <FormControl sx={styles.input}>
                    <InputLabel
                        id="demo-select-small-label"
                        style={{
                            color: error?.correctAnswerIndex
                                ? "red"
                                : "inherit",
                        }}
                    >
                        Choose correct answer
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={correctAnswerIndex}
                        label="Choose correct answer"
                        error={error?.correctAnswerIndex}
                        helperText={
                            error?.correctAnswerIndex
                                ? "This field is required"
                                : ""
                        }
                        InputProps={{
                            style: {
                                color: error?.correctAnswerIndex
                                    ? "red"
                                    : "inherit",
                            },
                        }}
                        onChange={(e) => {
                            setCorrectAnswerIndex(e.target.value);
                        }}
                    >
                        {options.split(",").map((item, index) => (
                            <MenuItem key={index + item} value={index}>
                                {item.trim()}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            ) : null}
            <FormControl sx={styles.input}>
                <InputLabel
                    id="demo-select-small-label"
                    style={{
                        color: error?.quiz ? "red" : "inherit",
                    }}
                >
                    Choose quiz
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={quiz}
                    label="Choose quiz"
                    error={error?.quiz}
                    helperText={error?.quiz ? "This field is required" : ""}
                    InputProps={{
                        style: {
                            color: error?.quiz ? "red" : "inherit",
                        },
                    }}
                    onChange={(e) => {
                        setQuiz(e.target.value);
                    }}
                >
                    {quizzes.map((item, index) => (
                        <MenuItem key={item._id} value={item._id}>
                            {item.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
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

export default QuestionAddForm;
