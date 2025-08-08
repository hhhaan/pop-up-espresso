import Image from 'next/image';

import { Layout } from '@/widgets/layout';

export const InfoScreen = () => {
    return (
        <Layout>
            <div className="flex flex-col px-5 h-screen">
                <p className="text-[26px] py-5 tracking-tighter font-bold">와사비의 마음</p>
                <p className="text-sm py-2 tracking-tighter leading-relaxed">
                    와사비의 마음을 아시나요, 미스터 초밥왕 1권의 마지막 에피소드인 와사비의 마음은 어쩌면 27권까지의
                    미스터 초밥왕을 관통하는 에피소드라고 생각합니다.
                </p>
                <div className="flex flex-col items-center">
                    <Image src="/wassabi4.png" alt="wassabi" width={400} height={400} className="object-cover" />
                    <p className="text-xs mt-2 text-[#666] tracking-tighter text-center">
                        와사비의 마음 - 미스터 초밥왕 1권 中
                    </p>
                </div>
                <p className="text-sm py-2 tracking-tighter leading-relaxed">
                    미스터 초밥왕에서 되풀이 해 강조하는 내용은 초밥 요리사들의 진심어린 마음입니다. 초밥 옆에서
                    중요해보이지는 않지만,
                </p>
                <p className="text-sm mt-2 tracking-tighter leading-relaxed">
                    와사비의 마음은 손님께 나가는 음료 한잔에 담긴 모든 진심어린 마음들의 집합입니다. 미스터 초밥왕의
                    주제가 초밥 요리사들의 진심어린 마음인 것과 같이, 좋은 재료를 대하는 바리스타들의 마음도 이와
                    같습니다. 에스프레소 한 잔에 와사비의 마음을 고스란히 담아.. 행사를 준비하면서 모든 일에 대하는
                    태도도 다시 한번 생각해보게 되는
                </p>
                <p className="text-sm mt-2 tracking-tighter leading-relaxed">
                    커피도 이와 다르지 않습니다. 커피 또한 농작물로서 한잔의 커피가 나오기 위해서는
                </p>

                <div className="flex flex-col items-center mt-10">
                    <Image src="/review.png" alt="review" width={400} height={250} className="object-contain" />
                    <p className="text-xs mt-2 text-[#666] tracking-tighter text-center"> reaction</p>
                </div>

                <div className="flex flex-col items-center mt-10">
                    <Image src="/wassabiheart.png" alt="review" width={200} height={200} className="object-contain" />
                    <p className="text-xs mt-2 text-[#666] tracking-tighter text-center"> 와사비의 마음</p>
                </div>
            </div>
        </Layout>
    );
};
