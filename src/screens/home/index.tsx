import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/widgets/layout';
import { MovingMarque } from '@/widgets/moving-marque';
import { Playlist } from '@/widgets/playlist';

export const HomeScreen = () => {
    return (
        <Layout>
            <main className="flex flex-col pb-4 px-5 pt-2">
                <div className="flex justify-center mb-10">
                    <Playlist />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col py-10 border-t border-black">
                        <Link href="/info">
                            <Image
                                src="/wassabi4.png"
                                alt="logo"
                                width={400}
                                height={400}
                                className="object-contain mb-1 "
                            />
                        </Link>
                        <p className="text-[26px] pt-5 pb-5 tracking-tighter font-bold">Inspiration</p>
                        <p className="text-xs tracking-tighter">
                            와사바의 마음은 미스터 초밥왕 1권에 나오는 에피소드로
                        </p>
                        <div className="flex items-center mt-5">
                            <span className="text-xs pr-1 hover:underline">⟶</span>
                            <p className="text-xs font-semibold tracking-tighter"> See more</p>
                        </div>
                    </div>

                    <div className="flex flex-col py-10 border-t border-black">
                        <Link href="/info-coffee">
                            <Image src="/7.png" alt="stack" width={400} height={400} className="object-contain " />
                        </Link>
                        <p className="text-[26px] pt-5 pb-12 tracking-tighter font-bold">Ethiopia Bensa Murago</p>

                        <div className="flex h-[200px]">
                            <span className="text-xs pr-1 hover:underline">⟶</span>
                            <p className="text-xs font-semibold tracking-tighter"> See more</p>
                        </div>
                    </div>
                    <Link href="/stack" className="flex flex-col py-10 border-t border-black">
                        <video
                            src={'/stack2.mp4'}
                            className="object-contain border-black border-1"
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                        {/* <p className="text-xs py-5 tracking-tighter">Game</p> */}
                        <p className="text-[26px] pt-5 pb-5 tracking-tighter font-bold">Stack Up Espresso</p>
                        <p className="text-xs  tracking-tighter hover:underline">I ♥ Espresso T-shirt for the winner</p>
                        <div className="flex items-center mt-5">
                            <span className="text-xs pr-1 hover:underline">⟶</span>
                            <p className="text-xs font-semibold tracking-tighter hover:underline"> GET IT NOW</p>
                        </div>
                    </Link>
                </div>
            </main>
            <MovingMarque />
        </Layout>
    );
};
