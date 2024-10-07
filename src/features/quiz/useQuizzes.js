import { useQuery } from "@tanstack/react-query";
import { getQuizzes } from "../../services/apiAdminQuiz";

function useQuizzes() {
    const { isPending: isLoadingQuizzes, data } = useQuery({
        queryKey: ["quizzes"],
        queryFn: getQuizzes,
        refetchOnWindowFocus: false,
    });
    const quizzes = data?.data?.data?.quizzes;
    return { isLoadingQuizzes, quizzes };
}

export default useQuizzes;
