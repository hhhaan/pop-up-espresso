import { useEffect, useRef, useState } from 'react';

import { GAME_CONFIG } from '@/features/stack-game/config';

interface GameState {
    score: number;
    gameOver: boolean;
}

export const useStackGame = (canvasSize: { width: number; height: number }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [gameState, setGameState] = useState<GameState>({ score: 0, gameOver: false });

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
        const scrollThreshold = GAME_CONFIG.GAMEPLAY.SCROLL_THRESHOLD;

        // 게임 상태
        const stack: { x: number; y: number }[] = [];
        const currentBlock = { x: 0, y: 0, speed: baseSpeed };
        let direction = 1;
        let cameraOffset = 0;

        // 게임 오버 상태를 로컬 변수로 관리하여 불필요한 리렌더링 방지
        let isGameOver = false;

        function drawCup(x: number, y: number, isFailedBlock: boolean = false) {
            if (!ctx) return;
            const screenY = y + cameraOffset;
            if (screenY + blockHeight < 0 || screenY > canvasHeight) return;

            GAME_CONFIG.BLOCK.PIXELS.forEach((row, rowIndex) => {
                row.forEach((pixel, colIndex) => {
                    if (pixel === 1) {
                        ctx.fillStyle = isFailedBlock
                            ? GAME_CONFIG.COLORS.BLOCK_FAILED
                            : GAME_CONFIG.COLORS.BLOCK_NORMAL;
                        ctx.fillRect(x + colIndex * pixelSize, screenY + rowIndex * pixelSize, pixelSize, pixelSize);
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
            if (stack.length > scrollThreshold) {
                cameraOffset = (stack.length - scrollThreshold) * blockHeight;
            }
        }

        function draw() {
            ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
            updateCamera();

            stack.forEach((block) => drawCup(block.x, block.y));

            const currentBlockY = canvasHeight - blockHeight * (stack.length + 1);
            drawCup(currentBlock.x, currentBlockY, isGameOver);

            if (ctx) {
                ctx.fillStyle = GAME_CONFIG.COLORS.TEXT;
                ctx.font = `bold ${GAME_CONFIG.FONT.SCORE_SIZE} ${GAME_CONFIG.FONT.SCORE_FAMILY}`;
                ctx.fillText(`Score: ${stack.length}`, 10, 30);
            }

            if (!isGameOver) {
                currentBlock.x += currentBlock.speed * direction;
                if (currentBlock.x + blockWidth > canvasWidth || currentBlock.x < 0) {
                    direction *= -1;
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        }

        const executeGameAction = () => {
            if (isGameOver) return;

            if (checkCollision(currentBlock.x)) {
                isGameOver = true;
                setGameState({ score: stack.length, gameOver: true });
                return;
            }

            const newBlock = { x: currentBlock.x, y: canvasHeight - blockHeight * (stack.length + 1) };
            stack.push(newBlock);
            setGameState((prev) => ({ ...prev, score: stack.length }));

            const speedMultiplier = Math.pow(
                GAME_CONFIG.GAMEPLAY.SPEED_MULTIPLIER,
                Math.floor(stack.length / GAME_CONFIG.GAMEPLAY.SPEED_INCREASE_INTERVAL)
            );
            currentBlock.speed = baseSpeed * speedMultiplier;
            currentBlock.x = 0;
            direction = 1;
        };

        const handleInteraction = (e: Event) => {
            e.preventDefault();
            executeGameAction();
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === GAME_CONFIG.CONTROLS.TRIGGER_KEY) {
                handleInteraction(e);
            }
        };

        // 이벤트 리스너 등록
        window.addEventListener('keydown', handleKeyDown);
        canvas.addEventListener('touchstart', handleInteraction, { passive: false });
        canvas.addEventListener('click', handleInteraction);

        draw();

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            canvas.removeEventListener('touchstart', handleInteraction);
            canvas.removeEventListener('click', handleInteraction);
            cancelAnimationFrame(animationFrameId);
        };
    }, [canvasSize]);

    return { canvasRef, gameState };
};
