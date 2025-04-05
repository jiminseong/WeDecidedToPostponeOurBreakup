import { NextRequest, NextResponse } from 'next/server';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3 } from '@/lib/s3';
import { v4 as uuid } from 'uuid';

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    console.log(file);
    if (!file) {
        return NextResponse.json({ error: '파일이 없습니다.' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${uuid()}_${file.name}`;

    const bucket = process.env.AWS_S3_BUCKET!;
    const command = new PutObjectCommand({
        Bucket: bucket,
        Key: `uploads/${fileName}`,
        Body: buffer,
        ContentType: file.type,
    });

    await s3.send(command);

    const publicUrl = `https://${bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/uploads/${fileName}`;
    return NextResponse.json({ url: publicUrl });
}
