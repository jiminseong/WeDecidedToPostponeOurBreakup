import axios from 'axios';

const postSnsChatGpt = async (
    location: string,
    date: string,
    content: string,
    imageName: string,
    imageDescription: string,
) => {
    try {
        const response = await axios.post('/api/gpt/sns', {
            location,
            date,
            content,
            imageName,
            imageDescription,
        });
        return response.data;
    } catch (error) {
        console.error('Error sending request to ChatGPT:', error);
    }
};

export default postSnsChatGpt;
