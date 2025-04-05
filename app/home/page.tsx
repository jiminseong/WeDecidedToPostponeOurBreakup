import HomePage from '@/views/home';

export default function Page({ searchParams }: { searchParams?: { success?: string } }) {
    const success = searchParams?.success === 'true';
    return <HomePage pretty={success} />;
}
