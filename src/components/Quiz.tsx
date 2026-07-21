import { CircleHelp } from 'lucide-react';

type QuizItemData = {
    question: string;
    options: string[];
    answer: string;
};

type QuizProps = {
    data: QuizItemData[];
};

const optionLabels = ['a', 'b', 'c', 'd'];

const Quiz = ({ data }: QuizProps) => {
    return (
        <div className="px-8 mt-6">
            <div
                className="px-8 border-[#a7a7a7] rounded-2xl overflow-hidden py-6 flex flex-col items-center relative"
            >
                <div
                    className="absolute inset-0 z-0 opacity-40"
                    style={{
                        background: "url('/paper.jpg')",
                        backgroundSize: "contain",
                        backgroundPosition: "left",
                        backgroundRepeat: "repeat",
                    }}
                />
                <div className="relative w-full">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="size-10 bg-[#6C3FA5] rounded-full flex justify-center items-center text-white">
                            <CircleHelp className="size-6" strokeWidth={2.5} />
                        </div>
                        <div className="relative inline-block text-3xl font-[Carter_One] leading-none text-[#2C3E50]">
                            <div className="flex gap-2 items-center">
                                Mini Quiz
                            </div>
                            <span
                                className="absolute left-0 right-0 -bottom-2 h-1.5"
                                style={{
                                    background:
                                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='6' viewBox='0 0 200 6'%3E%3Cpath d='M0 3 C20 0,40 6,60 3 S100 0,120 3 S160 6,200 3' stroke='%236C3FA5' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\") repeat-x"
                                }}
                            />
                        </div>
                        <span className="text-gray-500 text-base mt-1 ml-2">Choose the correct answer.</span>
                    </div>

                    {/* Questions Grid */}
                    <div className="grid grid-cols-3 gap-3 mt-6">
                        {data.map((item, index) => (
                            <QuizQuestion
                                key={index}
                                index={index}
                                {...item}
                            />
                        ))}
                    </div>

                    {/* Answer Key */}
                    <div className="mt-6 rounded-xl border-2 border-[#6C3FA5]/30 bg-white overflow-hidden">
                        <div className="flex items-center">
                            {/* Left label */}
                            <div className="bg-[#6C3FA5] text-white px-5 py-3 flex items-center gap-3 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                                    <polyline points="10 17 15 12 10 7" />
                                    <line x1="15" y1="12" x2="3" y2="12" />
                                </svg>
                                <div>
                                    <div className="font-bold text-sm uppercase tracking-wider">Answer Key</div>
                                    <div className="text-[11px] text-white/70 leading-tight">Check your answers<br />and track your progress!</div>
                                </div>
                            </div>

                            {/* Answer boxes */}
                            <div className="flex flex-1 items-center justify-center gap-2 px-4 py-3">
                                {data.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center gap-1">
                                        <div className="size-7 bg-[#6C3FA5] rounded-md flex items-center justify-center text-white text-xs font-bold">
                                            {index + 1}
                                        </div>
                                        <div className="text-sm font-bold text-[#2C3E50]">
                                            {item.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

type QuizQuestionProps = {
    index: number;
    question: string;
    options: string[];
    answer: string;
};

const QuizQuestion = ({ index, question, options }: QuizQuestionProps) => {
    return (
        <div className="bg-white rounded-xl border border-[#6C3FA5]/25 px-4 py-3 flex flex-col">
            {/* Question number + text */}
            <div className="flex gap-2.5 items-start">
                <div
                    className="size-7 bg-[#6C3FA5] rounded-full flex justify-center items-center text-white text-sm font-bold shrink-0 mt-0.5"
                >
                    {index + 1}
                </div>
                <p className="text-[14px] leading-[1.35] text-[#2C3E50] font-medium">
                    {question}
                </p>
            </div>

            {/* Options */}
            <div className="mt-3 ml-1 flex flex-col gap-1.5">
                {options.map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center gap-2 text-[13.5px] text-[#2C3E50]">
                        <span className="font-medium text-[#6C3FA5]">{optionLabels[optIndex]})</span>
                        <span>{option}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
