'use client';
import React, { useState, useEffect } from 'react';
import postChatGpt from '../api/postChatGpt';
import Input from '@/widgets/input/Input';
import Loading from './Loading';

interface ConversaitionProps {}

const Conversaition: React.FC<ConversaitionProps> = ({}) => {
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        age: '',
        foodPreference: '',
        travelPreference: '',
        healthInformation: '',
    });

    useEffect(() => {
        setUserData({
            name: localStorage.getItem('name') || '',
            age: localStorage.getItem('age') || '',
            foodPreference: localStorage.getItem('foodPreference') || '',
            travelPreference: localStorage.getItem('travelPreference') || '',
            healthInformation: localStorage.getItem('healthInformation') || '',
        });
    }, []);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input, isUser: true };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setIsLoading(true);

        try {
            const { name, age, foodPreference, travelPreference, healthInformation } = userData;
            console.log(name, age, foodPreference, travelPreference, healthInformation);

            const gptResponse = await postChatGpt(
                input,
                name,
                age,
                foodPreference,
                travelPreference,
                healthInformation,
            );

            const botMessage = { text: gptResponse.response || '응답을 생성할 수 없습니다.', isUser: false };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error sending request to ChatGPT:', error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: '오류가 발생했습니다. 다시 시도해 주세요.', isUser: false },
            ]);
        } finally {
            setInput('');
            setIsLoading(false);
        }
    };

    return (
        <div className="relative h-full">
            <div className="mt-[1em] h-[80%] overflow-scroll">
                <div className="flex gap-[1em]">
                    <div className="h-[21px] w-[3px] bg-[#8adf28]/50"></div>
                    <p className="text-lg text-left font-semibold text-[#4a6f1e]">
                        안녕하세요 {userData.name}님! , 제천 여행 도우미 제천 메이트입니다!
                    </p>
                </div>
                <div className="flex gap-[1em]">
                    <div className="h-[21px] w-[3px] gap-4 bg-[#8adf28]/50"></div>
                    <p className="text-lg text-left font-semibold text-[#4a6f1e]">
                        제천에 대해 궁금한 걸 모두 말씀해주세요!
                    </p>
                </div>

                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.isUser ? 'flex-row-reverse' : ''}`}>
                        <div
                            className={`text-lg px-4 text-left font-semibold ${msg.isUser ? 'border-r-2 border-[#8adf28]/50 text-black' : 'border-l-2 border-[#8adf28]/50 text-[#4a6f1e]'} mb-4 mt-4`}
                        >
                            {msg.text.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                ))}

                {isLoading && <Loading />}
            </div>

            <div className="z-5 absolute bottom-4 box-border flex w-full gap-[1em]">
                <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="메시지를 입력하세요"
                    className="w-full"
                    disabled={isLoading}
                />
                <button onClick={handleSend} className="w-16 rounded-md bg-jgreen p-2 text-white" disabled={isLoading}>
                    전송
                </button>
            </div>
        </div>
    );
};

export default Conversaition;
