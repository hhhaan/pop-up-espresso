import { MovingMarque } from '@/widgets/moving-marque';
import { Playlist } from '@/widgets/playlist';

export const HomeScreen = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center">
            <div className="flex flex-col items-center text-center gap-4">
                <div className="flex w-full px-5 justify-center flex-col items-center text-center gap-4">
                    <Playlist />
                </div>
                <p className="text-xs">will be added on dday</p>
                <MovingMarque />
            </div>
        </div>
    );
};
