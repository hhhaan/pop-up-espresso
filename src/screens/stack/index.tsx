// 'use client';

// import { useEffect, useRef, useState } from 'react';

// import Link from 'next/link';

// import { GAME_CONFIG } from '@/features/stack-game/config';
// import { useStackGame } from '@/features/stack-game/hooks/use-stack-game';
// import { calculateCanvasSize } from '@/features/stack-game/utils';
// import { Layout } from '@/widgets/layout';

// export const StackGameScreen = () => {
//     const containerRef = useRef<HTMLDivElement | null>(null);
//     const [canvasSize, setCanvasSize] = useState<{ width: number; height: number }>({
//         width: GAME_CONFIG.CANVAS.DEFAULT_WIDTH,
//         height: GAME_CONFIG.CANVAS.DEFAULT_HEIGHT,
//     });

//     const { canvasRef, gameState } = useStackGame(canvasSize);
//     const { score, gameOver } = gameState;

//     useEffect(() => {
//         const handleResize = () => {
//             const container = containerRef.current;
//             if (!container) return;
//             const newSize = calculateCanvasSize(container.clientWidth, window.innerHeight);
//             setCanvasSize(newSize);
//         };

//         handleResize();
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <Layout>
//             <div className="flex flex-col items-center justify-center mt-4 p-4 ">
//                 <h1 className={`${GAME_CONFIG.FONT.TITLE_SIZE} font-bold mb-4 text-center`}>
//                     Stack it up! Gift for Winner
//                 </h1>

//                 <div ref={containerRef} className="w-full max-w-md">
//                     <div className={`relative bg-${GAME_CONFIG.COLORS.BACKGROUND} p-4`}>
//                         <canvas
//                             ref={canvasRef}
//                             className={`border border-${GAME_CONFIG.COLORS.CANVAS_BORDER} w-full mx-auto h-auto block`}
//                             style={{
//                                 width: `${canvasSize.width}px`,
//                                 height: `${canvasSize.height}px`,
//                                 maxWidth: '100%',
//                                 touchAction: 'manipulation',
//                                 userSelect: 'none',
//                                 WebkitUserSelect: 'none',
//                             }}
//                         />

//                         {gameOver && (
//                             <div className="absolute inset-0 flex flex-col items-center justify-center">
//                                 <div className="p-6 rounded-lg text-center">
//                                     <h2
//                                         className={`${GAME_CONFIG.FONT.GAME_OVER_SIZE} font-jersey-10-charted font-bold text-red-500 mb-4`}
//                                     >
//                                         Its Over!
//                                     </h2>
//                                     <p className={`${GAME_CONFIG.FONT.SCORE_DISPLAY_SIZE} font-jersey-10-charted mb-4`}>
//                                         Score: {score}
//                                     </p>
//                                     <button onClick={() => window.location.reload()}>Retry</button>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//             <div className="p-8">
//                 <ul>
//                     <li className="font-bold">티셔츠 받는 방법 !!!</li>
//                     <li>1. 게임 화면을 캡쳐해주세요.</li>
//                     <li>2. 콜링과 페이스커피 인스타그램 계정을 태그하여 스토리에 공유하면 끝!</li>

//                     <li>*최고 점수를 확인하고 계속 도전하세요! </li>
//                 </ul>
//                 <Link href="https://www.instagram.com/kolding_loft/">
//                     <p className="underline font-bold text-blue-500 mt-5">인스타 바로 가기</p>
//                 </Link>
//             </div>
//         </Layout>
//     );
// };
'use client';

import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import { GAME_CONFIG } from '@/features/stack-game/config';
import { useStackGame } from '@/features/stack-game/hooks/use-stack-game';
import { calculateCanvasSize } from '@/features/stack-game/utils';
import { Layout } from '@/widgets/layout';

export const StackGameScreen = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [canvasSize, setCanvasSize] = useState<{ width: number; height: number }>({
        width: GAME_CONFIG.CANVAS.DEFAULT_WIDTH,
        height: GAME_CONFIG.CANVAS.DEFAULT_HEIGHT,
    });

    const { canvasRef, gameState } = useStackGame(canvasSize);
    const { score, gameOver } = gameState;

    useEffect(() => {
        const handleResize = () => {
            const container = containerRef.current;
            if (!container) return;
            const newSize = calculateCanvasSize(container.clientWidth, window.innerHeight);
            setCanvasSize(newSize);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center mt-4 p-4 ">
                <h1 className={`${GAME_CONFIG.FONT.TITLE_SIZE} font-bold mb-4 text-center`}>
                    Stack it up! Gift for Winner
                </h1>

                <div ref={containerRef} className="w-full max-w-md">
                    <div className={`relative bg-${GAME_CONFIG.COLORS.BACKGROUND} p-4`}>
                        <canvas
                            ref={canvasRef}
                            className={`border border-${GAME_CONFIG.COLORS.CANVAS_BORDER} w-full mx-auto h-auto block`}
                            style={{
                                width: `${canvasSize.width}px`,
                                height: `${canvasSize.height}px`,
                                maxWidth: '100%',
                                touchAction: 'manipulation',
                                userSelect: 'none',
                                WebkitUserSelect: 'none',
                            }}
                        />

                        {gameOver && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="p-6 rounded-lg text-center">
                                    <h2
                                        className={`${GAME_CONFIG.FONT.GAME_OVER_SIZE} font-jersey-10-charted font-bold text-red-500 mb-4`}
                                    >
                                        Its Over!
                                    </h2>
                                    <p className={`${GAME_CONFIG.FONT.SCORE_DISPLAY_SIZE} font-jersey-10-charted mb-4`}>
                                        Score: {score}
                                    </p>
                                    <button onClick={() => window.location.reload()}>Retry</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-bold mb-4 text-center">티셔츠 받는 방법</h2>

                <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-3">
                        <span className=" font-bold">1.</span>
                        <p>게임 화면을 캡쳐해주세요</p>
                    </div>

                    <div className="flex items-center space-x-3">
                        <span className=" font-bold">2.</span>
                        <p>콜링과 페이스커피 인스타그램 계정을 태그하여 스토리에 공유하면 끝!</p>
                    </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">* 최고 점수를 확인하고 계속 도전하세요!</p>

                <Link href="https://www.instagram.com/kolding_loft/">
                    <div className=" text-black py-3 px-4 rounded-lg underline font-medium">인스타그램 바로가기</div>
                </Link>
            </div>
        </Layout>
    );
};
