import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createQuiz } from "../../services/apiAdminQuiz";
// import { toast } from "react-hot-toast";

function useCreateQuiz() {
    const queryClient = useQueryClient();
    const { mutate: createQuizAPI, isPending: isCreating } = useMutation({
        mutationFn: (data) => createQuiz(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["quizzes"],
            });
        },
        onError: () => {
            toast.error("Create quiz failed");
        },
    });
    return { createQuizAPI, isCreating };
}

export default useCreateQuiz;
