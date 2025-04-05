import HomePage from '@/views/home';

export default function Page({ searchParams }: { searchParams: { success?: string } }) {
    const isSuccess = searchParams.success === 'true';
    return <HomePage pretty={isSuccess} />;
}
