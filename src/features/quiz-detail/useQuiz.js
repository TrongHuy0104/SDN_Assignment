import { useQuery } from "@tanstack/react-query";
import { getQuiz } from "../../services/apiAdminQuiz";
import { useParams } from "react-router-dom";

function useQuiz() {
    const { id } = useParams();
    const { isPending: isLoadingQuiz, data } = useQuery({
        queryKey: ["quiz"],
        queryFn: () => getQuiz(id),
        refetchOnWindowFocus: false,
    });
    const quiz = data?.data?.data?.quiz;
    return { isLoadingQuiz, quiz };
}

export default useQuiz;
