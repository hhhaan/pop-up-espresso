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
                    <div className="flex justify-center mt-5 mb-10">
                        <Playlist />
                    </div>
                    {/* <div className="flex justify-center mt-5 mb-10">
                        <input type="text" className="text-xs w-full border px-2 py-2" placeholder="신청곡" />
                        <button className="text-xs text-white bg-black px-2 py-2">submit</button>
                    </div> */}
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-col py-10 border-t border-black">
                            <p className="text-[26px] mb-2 tracking-tighter font-bold">Stories</p>
                            <Link href="/info">
                                <Image
                                    src="/wassabi4.png"
                                    alt="logo"
                                    width={400}
                                    height={400}
                                    className="object-contain "
                                />
                            </Link>
                            <p className="text-xs tracking-tighter">Inspiration</p>
                            {/* <p className="mt-5 text-sm tracking-tighter">와사비의 마음을 아시나요</p> */}
                            <p className="mt-5 text-sm font-semibold tracking-tighter hover:underline">→ see more</p>
                        </div>

                        <div className="flex flex-col py-10 border-t border-black">
                            <p className="text-[26px] mb-5 tracking-tighter font-bold">Stacking Up Espresso</p>
                            <Link href="/stack">
                                <Image
                                    src="/stack1.png"
                                    alt="stack"
                                    width={400}
                                    height={400}
                                    className="object-contain border-black border-1"
                                />
                            </Link>
                            <p className="mt-5 text-sm font-semibold tracking-tighter hover:underline">→ try it</p>
                        </div>
                    </div>
                </main>
            </div>
            <MovingMarque />
        </div>
    );
};
