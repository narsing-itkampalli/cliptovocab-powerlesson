import { X } from 'lucide-react';

type CommonMistakeItemData = {
    incorrect: string;
    incorrectHighlight?: string[];
    correct: string;
    correctHighlight?: string[];
    explanation: string;
};

type CommonMistakesProps = {
    data: CommonMistakeItemData[];
};

const renderWithHighlights = (text: string, highlights?: string[], highlightClass: string = "") => {
    if (!highlights || highlights.length === 0) return <span>{text}</span>;
    
    // Sort highlights by length descending to match longer phrases first
    const sortedHighlights = [...highlights].sort((a, b) => b.length - a.length);
    const regex = new RegExp(`(${sortedHighlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    
    const parts = text.split(regex);
    
    return (
        <>
            {parts.map((part, i) => {
                const isHighlight = sortedHighlights.some(h => h.toLowerCase() === part.toLowerCase());
                return isHighlight ? (
                    <span key={i} className={highlightClass}>{part}</span>
                ) : (
                    <span key={i}>{part}</span>
                );
            })}
        </>
    );
};

const CommonMistakes = ({ data }: CommonMistakesProps) => {
    return (
        <div className='border border-dashed border-[#037ACA] rounded-2xl'>
            <div className="flex gap-4 items-center py-3 px-4">
                <X className='size-8 text-[#DC2626] bg-[#DC2626]/15 rounded-full p-1 shrink-0' strokeWidth={3} />
                <div className="">
                    <div className="relative inline-block text-3xl font-[Carter_One] text-[#2C3E50] leading-none text-center mb-2">
                        <div className="flex gap-2 items-center">
                            Common Mistakes
                        </div>

                        <span
                            className="absolute left-0 right-0 -bottom-2 h-1.5"
                            style={{
                                background:
                                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='6' viewBox='0 0 200 6'%3E%3Cpath d='M0 3 C20 0,40 6,60 3 S100 0,120 3 S160 6,200 3' stroke='%23DC2626' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\") repeat-x"
                            }}
                        />
                    </div>
                    <p>Avoid these errors.</p>
                </div>
            </div>
            <div className="px-4 pb-4 grid gap-3 mt-1">
                {data.map((item, index) => (
                    <div key={index}>
                        <div className="flex items-start gap-2 text-base text-[#2C3E50]">
                            <span className="text-[#DC2626] font-bold shrink-0">✗</span>
                            <span>{renderWithHighlights(item.incorrect, item.incorrectHighlight, "text-[#DC2626] font-bold")}</span>
                        </div>
                        <div className="flex items-start gap-2 text-base mt-0.5 text-[#2C3E50]">
                            <span className="text-[#16A34A] font-bold shrink-0">✓</span>
                            <span>{renderWithHighlights(item.correct, item.correctHighlight, "text-[#16A34A] font-bold")}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1 ml-5">({item.explanation})</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommonMistakes;
