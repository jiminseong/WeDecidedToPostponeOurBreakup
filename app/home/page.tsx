import HomePage from '@/views/home';

type PageProps = {
    searchParams?: { success?: string };
};

export default function Page({ searchParams }: PageProps) {
    const success = searchParams?.success === 'true';

    return <HomePage pretty={success} />;
}
