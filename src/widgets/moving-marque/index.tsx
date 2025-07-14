'use client';

export const MovingMarque = () => {
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
};
