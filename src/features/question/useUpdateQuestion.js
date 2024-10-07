import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateQuestion } from "../../services/apiAdminQuestion";

function useUpdateQuestion() {
    const queryClient = useQueryClient();
    const { mutate: updateQuestionAPI, isPending: isUpdating } = useMutation({
        mutationFn: ({ id, data }) => updateQuestion(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["questions"],
            });
        },
        onError: () => {
            toast.error("Update question failed");
        },
    });
    return { updateQuestionAPI, isUpdating };
}

export default useUpdateQuestion;
