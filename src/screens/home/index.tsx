import Image from 'next/image';
import Link from 'next/link';

import { MovingMarque } from '@/widgets/moving-marque';
import { Playlist } from '@/widgets/playlist';

export const HomeScreen = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col pb-4 px-4 pt-2">
                <header>
                    <div className="flex justify-between">
                        <Image src="/logo.png" alt="logo" width={50} height={50} />
                        <Image src="/logo.png" alt="logo" width={50} height={50} />
                        <Image src="/logo.png" alt="logo" width={50} height={50} />
                    </div>
                </header>
                <main>
                    <div className="flex justify-center my-4">
                        <Playlist />
                    </div>

                    <div className="flex flex-col mt-4">
                        <div className="flex flex-col mb-5">
                            <div className="flex flex-col my-10">
                                <Link className="h-[230px] mb-10 w-full flex justify-center items-center" href="/info">
                                    <Image
                                        src="/wassabi.png"
                                        alt="wassabi"
                                        width={350}
                                        height={350}
                                        className="object-contain w-full h-auto"
                                    />
                                </Link>
                                <p className="text-[26px] tracking-tight font-bold">Stories</p>
                                <p className="mt-5 text-sm tracking-tight">see more</p>
                            </div>
                        </div>

                        <div className="flex flex-col mb-5">
                            <p className="text-[26px] tracking-tight font-bold">{'Stacking Espresso'}</p>
                            <Link className="mt-2 h-[230px] w-full" href="/stack">
                                <Image src="/stack.png" alt="stack" width={350} height={350} />
                            </Link>
                            <p className="mt-2 text-sm tracking-tight">try it</p>
                        </div>
                    </div>
                </main>
            </div>
            <MovingMarque />
        </div>
    );
};
