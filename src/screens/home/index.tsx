import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/widgets/layout';
import { MovingMarque } from '@/widgets/moving-marque';
import { Playlist } from '@/widgets/playlist';

export const HomeScreen = () => {
    return (
        <Layout>
            <main className="flex flex-col pb-4 px-8 pt-2">
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
                        {/* <p className="text-xs tracking-tighter">
                            와사바의 마음은 미스터 초밥왕 1권에 나오는 에피소드로
                        </p> */}
                        <div className="flex items-center mt-1">
                            <span className="text-xs pr-1 hover:underline">⟶</span>
                            <p className="text-xs font-semibold tracking-tighter"> See more</p>
                        </div>
                    </div>

                    <div className="flex flex-col pt-10 py-5 border-t border-black">
                        <Link href="/info-coffee">
                            <Image src="/7.png" alt="stack" width={400} height={400} className="object-contain " />
                        </Link>
                        <p className="text-[26px] pt-5 pb-12 tracking-tighter font-bold">Ethiopia Bensa Murago</p>
                        <p className="text-xs">
                            우리가 흔히 마셔온 에스프레소는 깊고 진하며, 때로는 쓰기까지 한 강렬한 한 잔이었습니다. 다크
                            로스팅된 블렌드는 그 진한 풍미와 크레마로 익숙함을 주지만, 커피의 다양한 개성은 가려질 수
                            밖에 없었습니다. 하지만 라이트 로스팅된 싱글 오리진 에스프레소는 산뜻한 산미, 과일이나 꽃의
                            향, 그리고 한 잔 안에 담긴 복합적인 이야기를 느끼실 수 있습니다.
                        </p>
                        <Link href="/info-coffee" className="flex items-center">
                            <div className="flex mt-8 h-[100px]">
                                <span className="text-xs pr-1 hover:underline">⟶</span>
                                <p className="text-xs font-semibold tracking-tighter"> See more</p>
                            </div>
                        </Link>
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
                        <p className="text-[26px] pt-5 pb-4 tracking-tighter font-bold">Stack Up Espresso</p>
                        <p className="text-xs  tracking-tight hover:underline">I ♥ Espresso T-shirt for the winner</p>
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
