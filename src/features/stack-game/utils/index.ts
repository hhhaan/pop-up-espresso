import { GAME_CONFIG } from '../config';

export const calculateCanvasSize = (containerWidth: number, windowHeight: number) => {
    const containerHeight = windowHeight - GAME_CONFIG.CANVAS.MARGIN;
    const aspectRatio = GAME_CONFIG.CANVAS.ASPECT_RATIO;

    let width = Math.min(containerWidth - GAME_CONFIG.CANVAS.CONTAINER_PADDING, GAME_CONFIG.CANVAS.DEFAULT_WIDTH);
    let height = width / aspectRatio;

    if (height > containerHeight) {
        height = containerHeight;
        width = height * aspectRatio;
    }

    return { width, height };
};
