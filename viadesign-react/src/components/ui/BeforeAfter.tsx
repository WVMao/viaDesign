import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface BeforeAfterProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
    description?: string;
}

const BeforeAfter = ({
    beforeImage,
    afterImage,
    beforeLabel = "Avant",
    afterLabel = "Après",
    description
}: BeforeAfterProps) => {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging && e.type !== 'mousemove' && e.type !== 'touchmove') return;

        const container = e.currentTarget.getBoundingClientRect();
        const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const position = ((x - container.left) / container.width) * 100;

        setSliderPos(Math.min(Math.max(position, 0), 100));
    };

    return (
        <div className="flex flex-col gap-4">
            <div
                className="relative aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none border border-gray-200 dark:border-slate-800"
                onMouseMove={handleMove}
                onTouchMove={handleMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
            >
                {/* After Image (Background) */}
                <img
                    src={afterImage}
                    alt="Après"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Before Image (Foreground) */}
                <div
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    style={{ width: `${sliderPos}%` }}
                >
                    <img
                        src={beforeImage}
                        alt="Avant"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ width: `${100 / (sliderPos / 100)}%` }} // Counter-scale to keep image fixed
                    />
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute inset-y-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-10"
                    style={{ left: `${sliderPos}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                        <div className="flex gap-0.5">
                            <ChevronRight className="w-4 h-4 text-gray-400 rotate-180" />
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                </div>

                {/* Labels */}
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-bold rounded-full pointer-events-none">
                    {beforeLabel}
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/50 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full pointer-events-none">
                    {afterLabel}
                </div>
            </div>
            {description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 italic text-center">
                    {description}
                </p>
            )}
        </div>
    );
};

export default BeforeAfter;
