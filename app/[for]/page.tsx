'use client';

import { useParams } from 'next/navigation';

import { StackGameScreen } from '@/screens/stack/for';

export default function ForPage() {
    const params = useParams();
    let slug = params?.for as string;
    slug = decodeURIComponent(slug);
    if (slug.includes('=')) {
        slug = slug.split('=')[1];
    }
    slug = slug.replace(/_/g, ' ');
    return <StackGameScreen name={slug} />;
}
