export const resultShareHandler = () => {
    if (typeof window !== 'undefined' && (window as any).Kakao) {
        const kakao = (window as any).Kakao;

        if (!kakao.isInitialized()) {
            kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
        }

        kakao.Share.sendCustom({
            templateId: 114039,
        });
    }
};
