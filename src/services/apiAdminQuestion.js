import axios from "../utils/axios";

export async function getQuestions() {
    try {
        const data = await axios.get("/question");
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function createQuestion(id, postData) {
    try {
        const data = await axios({
            method: "POST",
            url: `/quizzes/${id}/question`,
            data: postData,
        });
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function updateQuestion(id, postData) {
    try {
        const data = await axios({
            method: "PATCH",
            url: `/question/${id}`,
            data: postData,
        });
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteQuestion(id) {
    try {
        await axios.delete(`/question/${id}`);
    } catch (error) {
        console.error(error);
    }
}
