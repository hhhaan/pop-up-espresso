import Image from 'next/image';
import Link from 'next/link';

import { MovingMarque } from '@/widgets/moving-marque';
import { Playlist } from '@/widgets/playlist';

export const HomeScreen = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <div className="flex flex-col items-center gap-4">
                <div className="flex w-full px-5 justify-center flex-col items-center gap-4">
                    <Playlist />
                </div>
                <p className="text-xs">will be added on dday</p>
                <MovingMarque />
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <Link href="/" className="flex justify-center items-center bg-[#A0C2CB] h-[60px] mb-10">
            <Image src="/kolding.png" alt="logo" width={100} height={50} className="object-contain pr-2" />
            <p className="text-center font-bold text-white">X</p>
            <Image src="/Pacecoffee.png" alt="logo" width={100} height={50} className="object-contain pl-2" />
        </Link>
    );
};
