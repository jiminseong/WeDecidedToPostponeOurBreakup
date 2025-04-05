import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
    const { image, location = '스타벅스 경기 성남점' } = await req.json();

    if (!image || !location) {
        return NextResponse.json({ error: '모든 정보가 필요합니다' }, { status: 400 });
    }

    try {
        //TODO : 여기에 이미지가 텀블러인지 판별 isSuccess : true or false로 반환하는 프롬프팅이 필요

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'user',
                    content: [
                        {
                            type: 'text',
                            text: `
        당신은 친환경 활동 인증 도우미입니다.
        아래 이미지를 분석해서 텀블러 인증 사진인지 판단해 주세요.
        "텀블러가 명확하게 보이면 true, 아니면 false"로 판단해 주세요.
        
        결과는 JSON으로만:
        { "isSuccess": true }
        
        장소: ${location}
                  `,
                        },
                        {
                            type: 'image_url',
                            image_url: {
                                url: image, // ← 여기 꼭 data:image/png;base64,... 로 전달!
                            },
                        },
                    ],
                },
            ],
        });

        const responseText = completion.choices[0]?.message?.content || '응답을 생성할 수 없습니다.';

        return NextResponse.json({ response: responseText });
    } catch (error) {
        console.error('Error fetching GPT response:', error);
        return NextResponse.json({ error: 'Error fetching GPT response' }, { status: 500 });
    }
}
