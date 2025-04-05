import axios from 'axios';

const postChatGpt = async (
    image: string, //타입 미정
) => {
    try {
        const response = await axios.post('/api/gpt', {
            image,
        });
        return response.data;
    } catch (error) {
        console.error('Error sending request to ChatGPT:', error);
    }
};

export default postChatGpt;
