'use client';
import React, { useRef, useEffect, useState } from 'react';

const CanvasCaptcha = ({ text }: { text: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const drawCaptcha = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = 200;
        canvas.height = 60;

        // 배경색
        ctx.fillStyle = '#f8f9fa';
        ctx.fillRect(0, 0, 200, 60);

        // 노이즈 점들
        for (let i = 0; i < 30; i++) {
            ctx.fillStyle = `rgba(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100}, 0.3)`;
            ctx.fillRect(Math.random() * 200, Math.random() * 60, 2, 2);
        }

        // 방해 선 2-3개
        for (let i = 0; i < 3; i++) {
            ctx.strokeStyle = `rgba(${Math.random() * 150}, ${Math.random() * 150}, ${Math.random() * 150}, 0.5)`;
            ctx.lineWidth = Math.random() * 2 + 1;
            ctx.beginPath();
            ctx.moveTo(Math.random() * 200, Math.random() * 60);
            ctx.lineTo(Math.random() * 200, Math.random() * 60);
            ctx.stroke();
        }

        // 텍스트 그리기
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const colors = ['#333', '#555', '#777', '#999'];

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const x = 30 + i * 25 + (Math.random() - 0.5) * 10;
            const y = 30 + (Math.random() - 0.5) * 8;

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate((Math.random() - 0.5) * 0.4);

            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            ctx.fillText(char, 0, 0);

            ctx.restore();
        }
    };

    useEffect(() => {
        drawCaptcha();
    }, [text]);

    return (
        <div className="flex items-center space-x-3">
            <canvas ref={canvasRef} className="border border-gray-300 rounded bg-white" />
        </div>
    );
};

export const Captcha = ({ onSuccess }: { onSuccess?: (success: boolean) => void }) => {
    const [currentWord, setCurrentWord] = useState('');
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const words = ['espresso', 'allyouneed'];

    const generateNew = () => {
        const word = words[Math.floor(Math.random() * words.length)];
        setCurrentWord(word);
        setInput('');
        setError('');
    };

    useEffect(() => {
        generateNew();
    }, []);

    const handleSubmit = async () => {
        if (!input.trim()) return;

        setIsLoading(true);
        setError('');

        try {
            // await fetch('/api/captcha/verify', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ input: input.trim(), expected: currentWord })
            // });

            // 임시 클라이언트 검증
            if (input.toLowerCase().trim() === currentWord.toLowerCase()) {
                onSuccess?.(true);
            } else {
                setError('Please try again');
                setTimeout(() => {
                    generateNew();
                }, 1500);
            }
        } catch (err) {
            setError('Verification failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
                <h3 className="text-lg font-semibold text-center mb-4">Authentication is required</h3>

                <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Please enter the text below:</p>
                    <CanvasCaptcha text={currentWord} />
                </div>

                <div className="space-y-3">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter the text"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                        disabled={isLoading}
                    />

                    <button
                        onClick={handleSubmit}
                        disabled={!input.trim() || isLoading}
                        className="w-full px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500 disabled:bg-gray-300 transition-colors"
                    >
                        {isLoading ? 'Verifying...' : 'Submit'}
                    </button>
                </div>

                {error && <p className="text-red-600 text-sm text-center mt-3">{error}</p>}
            </div>
        </div>
    );
};

// pages/api/captcha/verify.ts
/*
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { input, expected } = req.body;

    if (input?.toLowerCase().trim() === expected?.toLowerCase()) {
        res.status(200).json({ success: true });
    } else {
        res.status(400).json({ success: false, message: 'Invalid captcha' });
    }
}
*/
