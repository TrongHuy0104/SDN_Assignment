import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createQuestion } from "../../services/apiAdminQuestion";

function useCreateQuestion() {
    const queryClient = useQueryClient();
    const { mutate: createQuestionAPI, isPending: isCreating } = useMutation({
        mutationFn: ({ id, data }) => createQuestion(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["questions"],
            });
        },
        onError: () => {
            toast.error("Create question failed");
        },
    });
    return { createQuestionAPI, isCreating };
}

export default useCreateQuestion;
