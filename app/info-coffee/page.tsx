import Image from 'next/image';

import { Header } from '@/widgets/header';

export default function InfoCoffee() {
    return (
        <>
            <Header />
            <div className="flex h-screen flex-col px-8">
                <section className="flex flex-col border-b border-black pb-20">
                    <p className="black-han-sans my-5 text-xl font-bold tracking-tighter">남기는 말</p>
                    <div className="mb-10 flex flex-col items-center">
                        <Image src="/pace.png" alt="stack" width={400} height={400} className="object-contain " />
                        <p className="mt-2 text-center text-[10px] text-[#666]">Roaster, Pacecoffee</p>
                    </div>
                    <p className="text-sm mb-4 leading-relaxed">
                        우리가 흔히 마셔온 에스프레소는 깊고 진하며, 때로는 쓰기까지 한 강렬한 한 잔이었습니다. 다크
                        로스팅된 블렌드는 그 진한 풍미와 크레마로 익숙함을 주지만, 커피의 다양한 개성은 가려질 수 밖에
                        없었습니다.
                    </p>
                    <p className="text-sm mb-4 leading-relaxed">
                        하지만 라이트 로스팅된 싱글 오리진 에스프레소는 산뜻한 산미, 과일이나 꽃의 향, 그리고 한 잔 안에
                        담긴 복합적인 이야기를 느끼실 수 있습니다.
                    </p>
                    <p className="text-sm mb-4 leading-relaxed">
                        쓴 커피가 아닌, {'"'}맛을 읽을 수 있는{'"'} 커피. 이제 에스프레소는 익숙함을 넘어 ‘취향’을 말할
                        수 있게 되었습니다
                    </p>
                    <p className="text-sm mb-4 leading-relaxed">
                        이번 행사를 통해 당신의 첫 번째 싱글 오리진 에스프레소가 좋은 경험으로 기억되길 바랍니다.
                    </p>
                </section>

                <section className="flex flex-col pt-10 mb-10 ">
                    <p className="text-xl font-medium pb-10 tracking-tighter">Ethiopia Sidama Bensa Murago Natural</p>
                    <p className="text-sm *:mt-4 mb-6 leading-relaxed">
                        알로커피의 “타미루 타데세 테세마”가 가공한 내추럴 커피입니다. 최근 마셔본 내추럴 커피 중
                        복합성이 좋으면서 가장 클린한 커피를 골랐습니다.
                    </p>
                    <div className="flex flex-col items-center  mb-5">
                        <Image src="/7.png" alt="stack" width={400} height={400} className="object-contain" />
                        <p className="text-[10px] mt-2 text-[#666] text-center">Producer, Tamiru Tadesse Tesema</p>
                    </div>
                    <p className="text-sm *:mt-4 mb-4 leading-relaxed">
                        에스프레소를 가볍게 세번 저어 아로마를 즐기신 후 세번에 나누어 드셔주세요. 보랏빛을 연상하며
                        드시면 에스프레소를 좀 더 즐기실 이해하실 수 있습니다.
                    </p>
                    <p className="text-sm mb-4 leading-relaxed">
                        첫 모금에는 패션프룻이나 망고 같은 향긋하고 상큼한 열대과일의 느낌이, 두 번째 모금에서는
                        오렌지와 블루베리의 생기있고 신뜻한 산미와 함께 과즙에서 오는 맑은 단맛을 느끼실 수 있습니다.
                        마지막 세번 째 모금은 블루베리 캔디가 연상되는 여운이 지속됩니다.
                    </p>
                    <ol className="flex flex-col text-sm tracking-tight">
                        <li>notes : passion fruit, orange, blueberry candy</li>
                        <li>producer : Tamiru Tadesse Tesema</li>
                        <li>altitude : 2,340 - 2,480 masl</li>
                        <li>varietal : 74158</li>
                        <li>roasted : light</li>
                    </ol>
                </section>
                <section className="flex flex-col">
                    <div className="flex flex-col items-center mb-10">
                        <Image src="/3.png" alt="stack" width={400} height={400} className="object-contain" />
                        <p className="text-[10px] mt-2 text-[#666] text-center">Producer, Tamiru Tadesse Tesema</p>
                    </div>
                    <div className="flex flex-col items-center mb-10">
                        <Image src="/tamiru.png" alt="stack" width={400} height={400} className="object-contain" />
                        <p className="text-[10px] mt-2 text-[#666] text-center">Producer, Tamiru Tadesse Tesema</p>
                    </div>
                </section>
                <section className="flex flex-col">
                    <div className="flex flex-col items-center mb-10">
                        <Image src="/123.png" alt="stack" width={300} height={300} className="object-contain " />
                        <p className="text-[10px] text-[#666] mt-2 text-center">Tadesse/Alo, 네츄럴 커피 가공소</p>
                    </div>
                    <div className="flex flex-col items-center mb-10">
                        <Image src="/2.png" alt="stack" width={400} height={400} className="object-contain " />
                        <p className="text-[10px] text-[#666] mt-2 text-center">Tadesse/Alo, 네츄럴 커피 가공 장면</p>
                    </div>
                </section>
            </div>
        </>
    );
}
