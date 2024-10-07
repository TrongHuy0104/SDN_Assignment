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
import DeleteConfirmModal from "../../components/DeleteModal";
import useDeleteQuiz from "./useDeleteQuiz";
import QuizUpdateModal from "./QuizUpdateModal";
import { Link } from "react-router-dom";

export default function QuizTable({ quizzes }) {
    const [currentQuizId, setCurrentQuizId] = React.useState(null);
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
    const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
    const { deleteQuizAPI, isDeleting } = useDeleteQuiz();
    const handleOpenDeleteModal = (id) => {
        setCurrentQuizId(id);
        setOpenDeleteModal(true);
    };
    const handleCloseDeleteModal = () => {
        setOpenDeleteModal(false);
    };
    const handleOpenUpdateModal = (id) => {
        setCurrentQuizId(id);
        setOpenUpdateModal(true);
    };
    const handleCloseUpdateModal = () => {
        setOpenUpdateModal(false);
    };
    const handleDelete = () => {
        deleteQuizAPI(currentQuizId);
        handleCloseDeleteModal();
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {quizzes.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <Link to={`quiz/${row._id}`}>
                                        {row.title}
                                    </Link>
                                </TableCell>
                                <TableCell align="left">
                                    {row.description}
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
            <QuizUpdateModal
                open={openUpdateModal}
                handleClose={handleCloseUpdateModal}
                quizzes={quizzes}
                quizId={currentQuizId}
            />
        </>
    );
}
