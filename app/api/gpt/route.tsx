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

판단 기준:
- 텀블러(다회용 컵)가 사진에 명확히 보이는 경우 true
- 그렇지 않으면 false

⛔️ 주의: 아래 형식의 **JSON만 응답**하고, 절대 코드블럭(\\\`\\\`)이나 설명은 포함하지 마세요.

정확히 이렇게 응답하세요:
true 

혹은

false

장소: ${location}
                  `,
                        },
                        {
                            type: 'image_url',
                            image_url: {
                                url: image,
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
