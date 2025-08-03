'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
    return (
        <div className="flex justify-center items-center bg-[#A0C2CB] h-[60px]">
            <Link href="/" className="flex items-center space-x-2">
                <Image src="/kolding.png" alt="logo" width={100} height={50} className="object-contain" />
                <p className="text-center font-bold text-white">X</p>
                <Image src="/Pacecoffee.png" alt="logo" width={100} height={50} className="object-contain" />
            </Link>
        </div>
    );
};
