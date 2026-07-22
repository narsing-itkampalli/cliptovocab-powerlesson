import VolumeFilled from '../icons/VolumeFilled'
import Book from '../icons/Book';

type VocabularyItemData = {
    word: string;
    pos: string;
    pronunciation: string;
    definition: string;
    example: string;
    image: string;
};

type VocabularyListProps = {
    data: VocabularyItemData[];
};

const VocabularyList = ({ data }: VocabularyListProps) => {
    return (
        <div className="px-8 text-lg">
            <div className="px-8 border-[#a7a7a7] rounded-2xl overflow-hidden py-6 flex flex-col items-center relative">
                <div
                    className="absolute inset-0 z-0 opacity-40"
                    style={{
                        background: "url('/paper.jpg')",
                        backgroundSize: "contain",
                        backgroundPosition: "left",
                        backgroundRepeat: "repeat",
                    }}
                />
                <div className="relative">
                    <div className="flex pl-4">
                        <div className="relative inline-block text-3xl font-[Carter_One] leading-none text-[#2C3E50] text-center mb-4">
                            <div className="flex gap-2 items-center">
                                <Book
                                    className='text-[#037ACA]'
                                />
                                Vocabulary
                            </div>

                            <span
                                className="absolute left-0 right-0 -bottom-2 h-1.5"
                                style={{
                                    background:
                                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='6' viewBox='0 0 200 6'%3E%3Cpath d='M0 3 C20 0,40 6,60 3 S100 0,120 3 S160 6,200 3' stroke='%23037ACA' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\") repeat-x"
                                }}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-2">
                        {data.slice(0, 6).map((item, index) => (
                            <VocabularyListItem
                                key={index}
                                index={index}
                                {...item}
                            />
                        ))}
                    </div>
                    {/* <div className="hidden print:block col-span-3 break-after-page"></div> */}
                    <div className="grid grid-cols-3 gap-3 pt-5">
                        {data.slice(6).map((item, index) => (
                            <VocabularyListItem
                                key={index + 6}
                                index={index + 6}
                                {...item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

type VocabularyListItemProps = {
    index: number;
    word: string;
    pos: string;
    pronunciation: string;
    definition: string;
    example: string;
    image: string;
}

const VocabularyListItem = ({ index, word, pos, pronunciation, definition, example, image }: VocabularyListItemProps) => {
    const number = new URLSearchParams(location.search).get("n") || "1";

    return (
        <div className="bg-white px-4 pb-4 pt-2 flex flex-col items-center shadow-md rounded-2xl border-2 border-[#037ACA]/60">
            <div className="w-full flex relative">
                <div
                    className="size-8 bg-[#037ACA] rounded-full flex justify-center items-center font-semibold text-white mt-1 absolute"
                >
                    {index + 1}
                </div>
                {/* <div className="size-24 p-2 bg-[#037ACA]/10 border border-[#037ACA]/20 flex justify-center items-center rounded-full mt-1 mx-auto">
                    <img src={image} alt={word} className='w-full h-auto object-contain' />
                </div> */}
                <div className="h-32 flex justify-center items-center rounded-full mt-1 mx-auto">
                    <img src={`/db/visuals/${number}/vocab/${image}`} alt={word} className='w-auto h-full object-contain' />
                </div>
            </div>
            <div className="">
                <div className="mt-3">
                    <h2 className='capitalize font-[inter] text-[#037ACA] font-bold text-2xl'>{word}</h2>
                    <div className="flex gap-2 items-center mt-1">
                        <div className='text-sm font-medium'>({pos})</div>
                        <div className="flex gap-1 text-xs items-center rounded-full px-1 py-0.5 border border-[#037ACA]/30 font-medium">
                            <VolumeFilled className='size-3.5 flex-none' />
                            <span className='text-shadow-sm leading-none'>{pronunciation}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-3 leading-[130%] text-base">
                    {definition}
                </div>
                <div className="mt-5 leading-[130%]">
                    <span className="text-base font-semibold text-[#037ACA]">Example:</span>{" "}
                    <span className='italic text-base'>
                        "{example}"
                    </span>
                </div>
            </div>
        </div>
    )
}

export default VocabularyList