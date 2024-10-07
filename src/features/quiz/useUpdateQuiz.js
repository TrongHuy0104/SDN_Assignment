import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateQuiz } from "../../services/apiAdminQuiz";

function useUpdateQuiz() {
    const queryClient = useQueryClient();
    const { mutate: updateQuizAPI, isPending: isUpdating } = useMutation({
        mutationFn: ({ id, data }) => updateQuiz(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["quizzes"],
            });
        },
        onError: () => {
            toast.error("Update quiz failed");
        },
    });
    return { updateQuizAPI, isUpdating };
}

export default useUpdateQuiz;
