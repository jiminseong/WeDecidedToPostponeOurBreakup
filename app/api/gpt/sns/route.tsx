import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
    const { location, date, content, imageName, imageDescription } = await req.json();

    if (!location || !date || !content || !imageName || !imageDescription) {
        return NextResponse.json({ error: '모든 정보가 필요합니다' }, { status: 400 });
    }

    try {
        const prompt = `
        역할: 당신은 제천 여행의 매력을 소개하는 인공지능 제천 메이트입니다! 아래의 정보를 바탕으로, 제천에서의 경험을 담아 SNS에 공유할 글을 작성해주세요.

        장소명: ${location}
        방문 일시: ${date}
        느낀 점: ${content}
        사진 이름 : ${imageName}
        사진 설명 : ${imageDescription}
        
        여행 경험을 생생하게 전달하며, 장소의 매력을 돋보이게 해주세요. 독자들이 이 장소를 방문하고 싶어지도록 감성적이고 설득력 있는 문구로 작성해 주세요.
        최종 결과는 JSON 형식으로 제공해주세요: 내용은 줄바꿈 '\n'을 넣어서 작성해줘
        {
          "snsTitle": "여기에 제목",
          "snsContent": "여기에 내용"
        }
        `;

        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
        });

        const responseText = completion.choices[0]?.message?.content || '응답을 생성할 수 없습니다.';

        // JSON 형태로 응답을 파싱
        let parsedResponse;
        try {
            parsedResponse = JSON.parse(responseText);
            if (!parsedResponse.snsTitle || !parsedResponse.snsContent) {
                throw new Error('응답에 필요한 snsTitle 또는 snsContent가 없습니다.');
            }
        } catch (e) {
            console.error('Error parsing JSON response or missing fields:', e);
            return NextResponse.json({ error: '응답을 파싱할 수 없거나 필요한 필드가 없습니다.' }, { status: 500 });
        }

        return NextResponse.json(parsedResponse);
    } catch (error) {
        console.error('Error fetching GPT response:', error);
        return NextResponse.json({ error: 'GPT 응답을 가져오는 도중 오류가 발생했습니다.' }, { status: 500 });
    }
}
