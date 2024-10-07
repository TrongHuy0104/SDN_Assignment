import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Question from "./pages/Question";
import AppLayout from "./layout/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import QuizDetail from "./pages/QuizDetail";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route element={<Quiz />} index />
                        <Route path="quiz/:id" element={<QuizDetail />} />
                        <Route path="question" element={<Question />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
