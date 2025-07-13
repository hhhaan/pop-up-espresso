'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const HomeScreen = () => {
    const router = useRouter();
    return (
        <div>
            <header>
                <SimpleMarquee />
            </header>
            <main>
                <div className="flex justify-center mt-4 px-4">
                    <iframe
                        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                        height="450"
                        style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px' }}
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                        src="https://embed.music.apple.com/kr/playlist/espresso-is-comming/pl.u-ZmblxWruVr42erq?l=en-GB"
                    ></iframe>
                </div>

                <div className="flex flex-col mt-4 px-4">
                    <div className="flex flex-col mb-5">
                        <p className="text-[26px] tracking-tight font-bold">{'Stories'}</p>
                        <div
                            className="mt-2 h-[230px] w-full flex justify-center items-center"
                            onClick={() => router.push('/info')}
                        >
                            <Image src="/wassabi.png" alt="wassabi" width={350} height={350} className="object-cover" />
                        </div>

                        <p className="mt-5 text-sm tracking-tight">see more</p>
                    </div>

                    <div className="flex flex-col mb-5">
                        <p className="text-[26px] tracking-tight font-bold">{'Stacking Espresso'}</p>
                        <div className="mt-2 h-[230px] w-full" onClick={() => router.push('/stack')}>
                            <Image src="/stack.png" alt="stack" width={350} height={350} />
                        </div>
                        <p className="mt-2 text-sm tracking-tight">try it</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default function SimpleMarquee() {
    const text = 'ESPRESSO IS ALL YOU NEED';

    return (
        <div className="w-full overflow-hidden bg-white py-4">
            <div className="flex whitespace-nowrap border-y border-black">
                <div
                    className="flex-shrink-0 font-normal animate-scroll tracking-normal"
                    style={{ fontSize: '6rem', color: '#000000' }}
                >
                    {text}&nbsp;&nbsp;
                </div>
                {/* 복제된 텍스트 (끊김 없는 루프) */}
                <div
                    className="flex-shrink-0 font-normal animate-scroll tracking-normal"
                    style={{ fontSize: '6rem', color: '#000000' }}
                >
                    {text}&nbsp;&nbsp;
                </div>
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
            `}</style>
        </div>
    );
}
