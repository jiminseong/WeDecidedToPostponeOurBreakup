import axios from 'axios';

const postChatGpt = async (
    input: string,
    name: string,
    age: string,
    foodPreference: string,
    travelPreference: string,
    healthInformation: string,
) => {
    try {
        const response = await axios.post('/api/gpt', {
            input,
            name,
            age,
            foodPreference,
            travelPreference,
            healthInformation,
        });
        return response.data;
    } catch (error) {
        console.error('Error sending request to ChatGPT:', error);
    }
};

export default postChatGpt;
