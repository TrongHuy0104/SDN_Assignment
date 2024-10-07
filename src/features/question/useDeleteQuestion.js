import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteQuestion } from "../../services/apiAdminQuestion";

function useDeleteQuestion() {
    const queryClient = useQueryClient();
    const { mutate: deleteQuestionAPI, isPending: isDeleting } = useMutation({
        mutationFn: deleteQuestion,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["questions"],
            });
        },
        onError: () => {
            toast.error("Delete question failed");
        },
    });
    return { deleteQuestionAPI, isDeleting };
}

export default useDeleteQuestion;
