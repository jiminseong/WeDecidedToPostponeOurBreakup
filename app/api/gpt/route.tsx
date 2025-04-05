import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
    const { input, name, age, foodPreference, travelPreference, healthInformation } = await req.json();

    if (!name || !age || !foodPreference || !travelPreference || !healthInformation || !input) {
        return NextResponse.json({ error: '모든 정보가 필요합니다' }, { status: 400 });
    }

    try {
        const prompt = `
      역할: 제천에 관한 인공지능 제천 메이트입니다!
      여러분의 여행 취향을 편하게 작성해주세요.

      사용자가 보낸 질문: ${input}
      사용자 이름: ${name}
      사용자 나이: ${age}
      음식 취향: ${foodPreference}
      여행 취향: ${travelPreference}
      건강 유의 정보: ${healthInformation}

      위 정보를 이용해서 '대한민국 충북 제천시'의 여행 정보를 추천해드립니다.
      다른 지역에 대한 정보는 제공하지 않으며, 제천에 맞는 추천만을 드립니다.
      무엇보다 줄바꿈을 포함시켜 주세요.
        `;

        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
        });

        const responseText = completion.choices[0]?.message?.content || '응답을 생성할 수 없습니다.';

        return NextResponse.json({ response: responseText });
    } catch (error) {
        console.error('Error fetching GPT response:', error);
        return NextResponse.json({ error: 'Error fetching GPT response' }, { status: 500 });
    }
}
