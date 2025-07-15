import Image from 'next/image';
export const InfoScreen = () => {
    return (
        <div className="flex p-4 h-screen flex-col">
            {/* <p className="text-2xl font-bold tracking-tight mb-4">와사비의 마음을 아시나요</p> */}
            <Image src="/wassabi1.png" alt="wassabi" width={350} height={350} className="object-cover" />
            <Image src="/wassabi2.png" alt="wassabi" width={350} height={350} className="object-cover" />
        </div>
    );
};
