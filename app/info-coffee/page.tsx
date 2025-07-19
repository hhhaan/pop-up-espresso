import Image from 'next/image';
export default function InfoCoffee() {
    return (
        <div className="flex p-5 h-screen flex-col">
            <section className="flex flex-col pb-20 border-b border-black">
                <p className="text-xl font-medium my-5 tracking-tighter">Roaster says </p>
                <div className="flex flex-col items-center mb-10">
                    <Image src="/pace.png" alt="stack" width={400} height={400} className="object-contain " />
                    <p className="text-[10px] mt-1 text-[#666]  text-center">Roaster, Pacecoffee</p>
                </div>
                <p className="text-sm mb-2 ">
                    우리가 흔히 마셔온 에스프레소는 깊고 진하며, 때로는 쓰기까지 한 강렬한 한 잔이었습니다. 다크
                    로스팅된 블렌드는 그 진한 풍미와 크레마로 익숙함을 주지만, 커피의 다양한 개성은 가려질 수 밖에
                    없었습니다.
                </p>
                <p className="text-sm mb-2 ">
                    하지만 라이트 로스팅된 싱글 오리진 에스프레소는 산뜻한 산미, 과일이나 꽃의 향, 그리고 한 잔 안에
                    담긴 복합적인 이야기를 느끼실 수 있습니다.
                </p>
                <p className="text-sm mb-2 ">
                    쓴 커피가 아닌, {'"'}맛을 읽을 수 있는{'"'} 커피. 이제 에스프레소는 익숙함을 넘어 ‘취향’을 말할 수
                    있게 되었습니다
                </p>
                <p className="text-sm mb-2 ">
                    이번 행사를 통해 당신의 첫 번째 싱글 오리진 에스프레소가 좋은 경험으로 기억되길 바랍니다.
                </p>
            </section>

            <section className="flex flex-col pt-10 mb-20 ">
                <p className="text-xl font-medium pb-10 tracking-tighter mb-4">Ethiopia Sidama Bensa Murago Natural</p>
                <p className="text-sm tracking-tighter pb-4">
                    무라고는 타미루 타데세/알로 커피의 비교적 최근 개발된 구획으로, 주로 대회 출품용 커피를 생산합니다.
                    해당 구역에서 생산되는 체리는 74158 품종으로, 2021년 COE에서 5위를 차지한 바 있으며, 특히 이 품종은
                    2020년 제1회 에티오피아 COE에서 니구세 게메다가 1위를 수상하며 널리 알려졌습니다.
                </p>
                <div className="flex flex-col items-center mb-10">
                    <Image src="/7.png" alt="stack" width={400} height={400} className="object-contain" />
                    {/* <p className="text-xs mt-1 text-[#666] tracking-tighter text-center">Roaster, Pacecoffee</p> */}
                </div>
                <ol className="flex flex-col text-sm tracking-tight">
                    <li>notes : muscat, peach, blueberry, milk chocolate</li>
                    <li>producer : Tamiru Tadesse Tesema</li>
                    <li>altitude : 2,340 - 2,480 masl</li>
                    <li>varietal : 74158</li>
                    <li>roasted : light</li>
                </ol>
            </section>
            <section className="flex flex-col">
                <div className="flex flex-col items-center mb-10">
                    <Image src="/3.png" alt="stack" width={400} height={400} className="object-contain" />
                    <p className="text-[10px] mt-1 text-[#666] text-center">Producer, Tamiru Tadesse Tesema</p>
                </div>
                <div className="flex flex-col items-center mb-10">
                    <Image src="/tamiru.png" alt="stack" width={400} height={400} className="object-contain" />
                    <p className="text-[10px] mt-1 text-[#666] text-center">Producer, Tamiru Tadesse Tesema</p>
                </div>
            </section>
            <section className="flex flex-col">
                <div className="flex flex-col items-center mb-10">
                    <Image src="/123.png" alt="stack" width={300} height={300} className="object-contain " />
                    <p className="text-[10px] text-[#666] mt-1 text-center">Tadesse/Alo, 네츄럴 커피 가공소</p>
                </div>
                <div className="flex flex-col items-center mb-10">
                    <Image src="/2.png" alt="stack" width={400} height={400} className="object-contain " />
                    <p className="text-[10px] text-[#666] mt-1 text-center">Tadesse/Alo, 네츄럴 커피 가공 장면</p>
                </div>
            </section>
        </div>
    );
}
