import { BookOpen } from 'lucide-react';

type WordOriginItemData = {
    word: string;
    origin: string;
};

type WordOriginsProps = {
    data: WordOriginItemData[];
};

const WordOrigins = ({ data }: WordOriginsProps) => {
    return (
        <div className='border border-dashed border-[#037ACA] rounded-2xl'>
            <div className="flex gap-3 items-center px-4 py-3">
                <BookOpen className='size-8 text-[#7C3AED]' strokeWidth={2.5} />
                <div className="relative inline-block text-2xl font-[Carter_One] text-[#2C3E50] leading-none">
                    Word Origins
                    <span
                        className="absolute left-0 right-0 -bottom-2 h-1.5"
                        style={{
                            background:
                                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='6' viewBox='0 0 200 6'%3E%3Cpath d='M0 3 C20 0,40 6,60 3 S100 0,120 3 S160 6,200 3' stroke='%237C3AED' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\") repeat-x"
                        }}
                    />
                </div>
            </div>
            <div className="px-4 pb-4 grid gap-3 mt-1">
                {data.map((item, index) => (
                    <div key={index}>
                        <span className="font-bold text-base text-[#7C3AED] capitalize">{item.word}</span>
                        <p className="text-base text-gray-700 leading-snug mt-0.5">{item.origin}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WordOrigins;
