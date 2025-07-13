'use client';

import { useEffect, useRef, useState } from 'react';

import { GAME_CONFIG } from '@/features/stack-game/config';

export const StackGameScreen = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [canvasSize, setCanvasSize] = useState<{ width: number; height: number }>({
        width: GAME_CONFIG.CANVAS.DEFAULT_WIDTH,
        height: GAME_CONFIG.CANVAS.DEFAULT_HEIGHT,
    });

    // 화면 크기 계산 함수
    const calculateCanvasSize = () => {
        const container = containerRef.current;
        if (!container) return { width: GAME_CONFIG.CANVAS.DEFAULT_WIDTH, height: GAME_CONFIG.CANVAS.DEFAULT_HEIGHT };

        const containerWidth = container.clientWidth;
        const containerHeight = window.innerHeight - GAME_CONFIG.CANVAS.MARGIN; // 여백 고려

        // 비율을 유지하면서 크기 조정 (2:3 비율)
        const aspectRatio = GAME_CONFIG.CANVAS.ASPECT_RATIO;
        let width = Math.min(containerWidth - GAME_CONFIG.CANVAS.CONTAINER_PADDING, GAME_CONFIG.CANVAS.DEFAULT_WIDTH);
        let height = width / aspectRatio;

        if (height > containerHeight) {
            height = containerHeight;
            width = height * aspectRatio;
        }

        return { width, height };
    };

    // 리사이즈 핸들러
    useEffect(() => {
        const handleResize = () => {
            const newSize = calculateCanvasSize();
            setCanvasSize(newSize);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        const canvasWidth = canvasSize.width;
        const canvasHeight = canvasSize.height;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        const pixelSize = GAME_CONFIG.BLOCK.PIXEL_SIZE;
        const blockWidth = GAME_CONFIG.BLOCK.WIDTH * pixelSize;
        const blockHeight = GAME_CONFIG.BLOCK.HEIGHT * pixelSize;
        const allowedOffset = GAME_CONFIG.BLOCK.ALLOWED_OFFSET;
        const baseSpeed = GAME_CONFIG.GAMEPLAY.BASE_SPEED;
        const scrollThreshold = GAME_CONFIG.GAMEPLAY.SCROLL_THRESHOLD; // 스크롤 시작할 스택 높이

        // 게임 상태
        const stack: { x: number; y: number }[] = [];
        const currentBlock = { x: 0, y: 0, speed: baseSpeed };
        let direction = 1;
        let cameraOffset = 0; // 카메라 오프셋

        function drawCup(x: number, y: number, isFailedBlock: boolean = false) {
            // 카메라 오프셋을 적용한 y 좌표
            const screenY = y + cameraOffset;

            // 화면 밖의 블록은 그리지 않음 (최적화)
            if (screenY + blockHeight < 0 || screenY > canvasHeight) return;

            GAME_CONFIG.BLOCK.PIXELS.forEach((row, rowIndex) => {
                row.forEach((pixel, colIndex) => {
                    if (pixel === 1) {
                        if (ctx) {
                            ctx.fillStyle = isFailedBlock
                                ? GAME_CONFIG.COLORS.BLOCK_FAILED
                                : GAME_CONFIG.COLORS.BLOCK_NORMAL;
                            ctx.fillRect(
                                x + colIndex * pixelSize,
                                screenY + rowIndex * pixelSize,
                                pixelSize,
                                pixelSize
                            );
                        }
                    }
                });
            });
        }

        function checkCollision(newBlockX: number): boolean {
            if (stack.length === 0) return false;

            const lastBlock = stack[stack.length - 1];
            const distance = Math.abs(newBlockX - lastBlock.x);

            return distance > allowedOffset;
        }

        function updateCamera() {
            // 스택이 일정 높이에 도달하면 카메라를 위로 이동
            if (stack.length > scrollThreshold) {
                const targetOffset = (stack.length - scrollThreshold) * blockHeight;
                cameraOffset = targetOffset;
            }
        }

        function draw() {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            // 카메라 업데이트
            updateCamera();

            // 스택 그리기 (카메라 오프셋 적용)
            stack.forEach((block) => drawCup(block.x, block.y));

            // 현재 블록 그리기
            const currentBlockY = canvasHeight - blockHeight * (stack.length + 1);

            const isCurrentBlockFailed = gameOver;

            drawCup(currentBlock.x, currentBlockY, isCurrentBlockFailed);

            ctx.fillStyle = GAME_CONFIG.COLORS.TEXT;
            ctx.font = `bold ${GAME_CONFIG.FONT.SCORE_SIZE} ${GAME_CONFIG.FONT.SCORE_FAMILY}`;
            ctx.fillText(`Score: ${stack.length}`, 10, 30);

            // 현재 블록 움직임
            currentBlock.x += currentBlock.speed * direction;
            if (currentBlock.x + blockWidth > canvasWidth || currentBlock.x < 0) {
                direction *= -1;
            }

            animationFrameId = requestAnimationFrame(draw);
        }

        draw();

        // 게임 액션 공통 로직
        const executeGameAction = () => {
            if (gameOver) return;

            if (checkCollision(currentBlock.x)) {
                setGameOver(true);

                // 마지막으로 빨간색으로 한 번 더 그리기
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                updateCamera();
                stack.forEach((block) => drawCup(block.x, block.y));

                const currentBlockY = canvasHeight - blockHeight * (stack.length + 1);
                drawCup(currentBlock.x, currentBlockY, true); // 강제로 빨간색

                ctx.fillStyle = GAME_CONFIG.COLORS.TEXT;
                ctx.font = `bold ${GAME_CONFIG.FONT.SCORE_SIZE} ${GAME_CONFIG.FONT.SCORE_FAMILY}`;
                ctx.fillText(`Score: ${stack.length}`, 10, 30);

                cancelAnimationFrame(animationFrameId);
                return;
            }

            const newBlock = { x: currentBlock.x, y: canvasHeight - blockHeight * (stack.length + 1) };

            stack.push(newBlock);
            setScore(stack.length);

            // 속도 증가
            const speedMultiplier = Math.pow(
                GAME_CONFIG.GAMEPLAY.SPEED_MULTIPLIER,
                Math.floor(stack.length / GAME_CONFIG.GAMEPLAY.SPEED_INCREASE_INTERVAL)
            );
            currentBlock.speed = baseSpeed * speedMultiplier;

            currentBlock.x = 0;
            direction = 1;
        };

        // 키보드 이벤트
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === GAME_CONFIG.CONTROLS.TRIGGER_KEY) {
                e.preventDefault();
                executeGameAction();
            }
        };

        // 터치 이벤트
        const handleCanvasTouch = (e: TouchEvent) => {
            e.preventDefault();
            e.stopPropagation();
            executeGameAction();
        };

        // 클릭 이벤트
        const handleCanvasClick = (e: MouseEvent) => {
            e.preventDefault();
            executeGameAction();
        };

        // 이벤트 리스너 등록
        window.addEventListener('keydown', handleKeyDown);
        canvas.addEventListener('touchstart', handleCanvasTouch, { passive: false });
        canvas.addEventListener('click', handleCanvasClick);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            canvas.removeEventListener('touchstart', handleCanvasTouch);
            canvas.removeEventListener('click', handleCanvasClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, [canvasSize]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
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

                    {/* 게임오버 오버레이 */}
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
    );
};
