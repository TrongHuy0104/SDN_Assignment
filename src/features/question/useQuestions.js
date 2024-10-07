import { useQuery } from "@tanstack/react-query";
import { getQuestions } from "../../services/apiAdminQuestion";

function useQuestions() {
    const { isPending: isLoadingQuestions, data } = useQuery({
        queryKey: ["questions"],
        queryFn: getQuestions,
        refetchOnWindowFocus: false,
    });
    const questions = data?.data?.data?.questions;
    return { isLoadingQuestions, questions };
}

export default useQuestions;
