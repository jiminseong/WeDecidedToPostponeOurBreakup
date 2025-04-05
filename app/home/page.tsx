import HomePage from '@/views/home';

type PageProps = {
    params: Record<string, never>;

    searchParams?: { success?: string };
};

export default function Page({ searchParams }: PageProps) {
    const success = searchParams?.success === 'true';

    return <HomePage pretty={success} />;
}
