import Image from 'next/image';

import { Layout } from '@/widgets/layout';

export const InfoScreen = () => {
    return (
        <Layout>
            <div className="flex flex-col px-8">
                <p className="black-han-sans font-bold text-[24px] py-5 tracking-tighter ">와사비의 마음</p>
                <p className="text-sm tracking-tighter leading-relaxed">
                    와사비의 마음, 들어보셨나요? 미스터 초밥왕 1권의 마지막 에피소드인 ‘와사비의 마음’은 어쩌면 시리즈
                    전체를 관통하는 주제라고 생각합니다. 미스터 초밥왕에서 되풀이 해 강조하는 건 초밥 요리사들의
                    진심어린 마음입니다. 좋은 재료를 고르고, 손질하고, 가공하고 수 많은 과정 속 진심 어린 마음들의
                    집합이 와사비의 마음이죠..
                </p>
                <div className="flex flex-col items-center py-10">
                    <Image src="/wassabi4.png" alt="wassabi" width={400} height={400} className="object-cover" />
                    <p className="text-xs mt-2 text-[#666] tracking-tighter text-center">
                        와사비의 마음 - 미스터 초밥왕 1권 中
                    </p>
                </div>
                <p className="text-sm mt-2 tracking-tighter leading-relaxed">
                    커피도 마찬가지입니다. 생두를 고르는 순간부터, 로스팅, 추출하는 순간까지 맛있어져라 하는 주문을
                    걸면서 말입니다. 이번 행사는 이런 와사비의 마음을, 에스프레소 한 잔에 담아 전달하고자
                    시작되었습니다.
                </p>
                <p className="text-sm mt-2 tracking-tighter leading-relaxed">
                    이번 행사를 기회로 벽 밖의 거인처럼 무시무시했던 에스프레소에 대한 소문을 잠재워 지기를 바라면서.. .
                </p>

                <div className="flex flex-col items-center mt-10">
                    <Image src="/review.png" alt="review" width={400} height={250} className="object-contain" />
                    <p className="text-xs mt-2 text-[#666] tracking-tighter text-center">
                        미스터 초밥왕의 유명한 리액션{' '}
                    </p>
                </div>
                <div className="flex flex-col items-center mt-10">
                    <Image src="/wadfji.png" alt="review" width={400} height={250} className="object-contain" />
                    <p className="text-xs mt-2 text-[#666] tracking-tighter text-center">h2 中</p>
                </div>

                <div className="flex flex-col items-center my-10">
                    <Image src="/wassabiheart.png" alt="review" width={200} height={200} className="object-contain" />
                    <p className="text-xs mt-2 text-[#666] tracking-tighter text-center">진짜 와사비의 마음</p>
                </div>
            </div>
        </Layout>
    );
};
