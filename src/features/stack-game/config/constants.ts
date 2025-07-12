// 게임 설정 상수들

// 컵 모양 도트 패턴
const CUP_DOTS = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
];

export const GAME_CONFIG = {
    // 캔버스 설정
    CANVAS: {
        DEFAULT_WIDTH: 400,
        DEFAULT_HEIGHT: 600,
        ASPECT_RATIO: 2 / 3,
        MARGIN: 200, // 화면 여백
        CONTAINER_PADDING: 40,
    },

    // 블록 설정
    BLOCK: {
        PIXELS: CUP_DOTS,
        WIDTH: CUP_DOTS[0].length,
        HEIGHT: CUP_DOTS.length,
        PIXEL_SIZE: 3,
        ALLOWED_OFFSET: 40, // 겹치기 허용 범위
    },

    // 게임플레이 설정
    GAMEPLAY: {
        BASE_SPEED: 2,
        SPEED_MULTIPLIER: 1.5, // 속도 증가 배수
        SPEED_INCREASE_INTERVAL: 10, // 몇 스택마다 속도 증가
        SCROLL_THRESHOLD: 10, // 카메라 스크롤 시작 스택 높이
    },

    // 색상
    COLORS: {
        BLOCK_NORMAL: '#FFD700',
        BLOCK_FAILED: '#FF0000',
        TEXT: 'black',
        CANVAS_BORDER: 'gray-500',
        BACKGROUND: 'white',
    },

    // 폰트
    FONT: {
        SCORE_SIZE: '24px',
        SCORE_FAMILY: 'Arial',
        TITLE_SIZE: 'text-2xl md:text-3xl',
        GAME_OVER_SIZE: 'text-2xl',
        SCORE_DISPLAY_SIZE: 'text-lg',
    },

    // 이벤트
    CONTROLS: {
        TRIGGER_KEY: 'Space',
    },
} as const;
