import axios from "../utils/axios";

export async function getQuizzes() {
    try {
        const data = await axios.get("/quizzes");
        return data;
    } catch (error) {
        console.error(error);
    }
}
export async function getQuiz(id) {
    try {
        const data = await axios.get(`/quizzes/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function createQuiz(postData) {
    try {
        const data = await axios({
            method: "POST",
            url: "/quizzes",
            data: postData,
        });
        return data;
    } catch (error) {
        console.error(error);
    }
}
export async function updateQuiz(id, postData) {
    try {
        const data = await axios({
            method: "PATCH",
            url: `/quizzes/${id}`,
            data: postData,
        });
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteQuiz(id) {
    try {
        await axios.delete(`/quizzes/${id}`);
    } catch (error) {
        console.error(error);
    }
}
