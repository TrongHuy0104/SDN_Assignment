import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteQuiz } from "../../services/apiAdminQuiz";
// import { toast } from "react-hot-toast";

function useDeleteQuiz() {
    const queryClient = useQueryClient();
    const { mutate: deleteQuizAPI, isPending: isDeleting } = useMutation({
        mutationFn: deleteQuiz,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["quizzes"],
            });
        },
        onError: () => {
            toast.error("Delete quiz failed");
        },
    });
    return { deleteQuizAPI, isDeleting };
}

export default useDeleteQuiz;
