import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useDeleteQuestion from "./useDeleteQuestion";
import DeleteConfirmModal from "../../components/DeleteModal";
import QuestionUpdateModal from "./QuestionUpdateModal";

export default function QuestionTable({ questions, quizzes }) {
    const [currentQuestionId, setCurrentQuestionId] = React.useState(null);
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
    const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
    const { deleteQuestionAPI, isDeleting } = useDeleteQuestion();
    const handleOpenDeleteModal = (id) => {
        setCurrentQuestionId(id);
        setOpenDeleteModal(true);
    };
    const handleCloseDeleteModal = () => {
        setOpenDeleteModal(false);
    };
    const handleOpenUpdateModal = (id) => {
        setCurrentQuestionId(id);
        setOpenUpdateModal(true);
    };
    const handleCloseUpdateModal = () => {
        setOpenUpdateModal(false);
    };
    const handleDelete = () => {
        deleteQuestionAPI(currentQuestionId);
        handleCloseDeleteModal();
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Question</TableCell>
                            <TableCell align="left">Options</TableCell>
                            <TableCell align="left">Keywords</TableCell>
                            <TableCell align="left">Correct Answer</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {questions.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.text}
                                </TableCell>
                                <TableCell align="left">
                                    {row.options.join(", ")}
                                </TableCell>
                                <TableCell align="left">
                                    {row.keywords.join(", ")}
                                </TableCell>
                                <TableCell align="left">
                                    {row.options[row.correctAnswerIndex]}
                                </TableCell>
                                <TableCell align="left">
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent={"right"}
                                    >
                                        <IconButton
                                            aria-label="update"
                                            onClick={() =>
                                                handleOpenUpdateModal(row._id)
                                            }
                                        >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            aria-label="delete"
                                            onClick={() =>
                                                handleOpenDeleteModal(row._id)
                                            }
                                            disabled={isDeleting}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <DeleteConfirmModal
                open={openDeleteModal}
                handleClose={handleCloseDeleteModal}
                handleDelete={handleDelete}
            />
            <QuestionUpdateModal
                open={openUpdateModal}
                handleClose={handleCloseUpdateModal}
                questions={questions}
                quizzes={quizzes}
                questionId={currentQuestionId}
            />
        </>
    );
}
