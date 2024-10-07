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
import useUpdateQuestion from "./useUpdateQuestion";

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

function QuestionUpdateForm({
    open,
    handleClose,
    questions,
    quizzes,
    questionId,
}) {
    const [text, setText] = useState("");
    const [options, setOptions] = useState("");
    const [keywords, setKeywords] = useState("");
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

    const [error, setError] = useState({
        text: false,
        options: false,
        correctAnswerIndex: false,
    });

    const { updateQuestionAPI, isUpdating } = useUpdateQuestion();

    useEffect(() => {
        if (open) {
            setText(
                questions.find((question) => question._id === questionId)?.text
            );
            setOptions(
                questions
                    .find((question) => question._id === questionId)
                    ?.options.join(",")
            );
            setKeywords(
                questions
                    .find((question) => question._id === questionId)
                    ?.keywords.join(",")
            );
            setCorrectAnswerIndex(
                questions.find((question) => question._id === questionId)
                    ?.correctAnswerIndex
            );
            setError({
                text: false,
                options: false,
                correctAnswerIndex: false,
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

        setError(errorObj);

        if (text && options && correctAnswerIndex !== null) {
            const updateQuestion = {
                text,
                options: options.split(","),
                keywords: keywords.split(","),
                correctAnswerIndex,
            };
            updateQuestionAPI({ id: questionId, data: updateQuestion });
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

export default QuestionUpdateForm;
