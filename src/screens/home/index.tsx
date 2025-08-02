import Link from 'next/link';

import { ExternalLink } from 'lucide-react';

import { Layout } from '@/widgets/layout';
import { MovingMarque } from '@/widgets/moving-marque';
import { Playlist } from '@/widgets/playlist';

export const HomeScreen = () => {
    const infoLink = 'https://www.instagram.com/p/DMzpFD4P7q4/?utm_source=ig_web_copy_link&igsh=YW8wcG9lZDg1dW5s';
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <div className="flex w-full px-5 justify-center flex-col items-center gap-4">
                    <Playlist />
                </div>
                <p className="text-xs mt-4">will be added on dday</p>
                <Link href={infoLink} className="text-xs flex items-center gap-1 mt-2">
                    <ExternalLink size={12} />
                    get more info
                </Link>
                <MovingMarque />
            </div>
        </Layout>
    );
};
