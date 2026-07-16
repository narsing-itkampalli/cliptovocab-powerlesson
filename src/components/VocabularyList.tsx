import VolumeFilled from '../icons/VolumeFilled'

const VocabularyList = () => {
    return (
        <div className="px-8 text-xl">
            <div className="flex pl-8">
                <div className="relative inline-block text-3xl font-[Carter_One] leading-none text-[#037ACA] text-center mb-4">
                    Vocabulary

                    <span
                        className="absolute left-0 right-0 -bottom-2 h-1.5"
                        style={{
                            background:
                                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='6' viewBox='0 0 200 6'%3E%3Cpath d='M0 3 C20 0,40 6,60 3 S100 0,120 3 S160 6,200 3' stroke='%23037ACA' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\") repeat-x"
                        }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-2">
                <VocabularyListItem
                    index={0}
                    word="Volition"
                    pos="noun"
                    pronunciation="vo-LI-shun"
                    definition="Ability to make your own decisions and act on them without being forced."
                    example="She left the company of her own volition, not because she was fired."
                    image="/word-img/volition.png"
                />
                <VocabularyListItem
                    index={1}
                    word="Facetious"
                    pos="adjective"
                    pronunciation="fuh-SEE-shus"
                    definition="Treating a serious subject in a humorous or joking way."
                    example="Stop being facetious; this is a very serious meeting."
                    image="/word-img/facetious.png"
                />
                <VocabularyListItem
                    index={2}
                    word="Estranged"
                    pos="adjective"
                    pronunciation="es-TRAYNJd"
                    definition="No longer close or connected to someone you were once close to."
                    example="He hasn't spoken to his estranged father in years."
                    image="/word-img/estranged.png"
                />
                <VocabularyListItem
                    index={3}
                    word="Skewed"
                    pos="adjective"
                    pronunciation="skewd"
                    definition="Not balanced or fair; showing only one side of something."
                    example="The survey results were skewed because they only asked teenagers."
                    image="/word-img/skewed.png"
                />
                <VocabularyListItem
                    index={4}
                    word="Daunting"
                    pos="adjective"
                    pronunciation="DAWN-ting"
                    definition="Seeming difficult enough to make you feel nervous or less confident."
                    example="Moving to a new country can be a daunting prospect."
                    image="/word-img/daunting.png"
                />
                <VocabularyListItem
                    index={5}
                    word="Butted heads"
                    pos="idiom"
                    pronunciation="bu-tid heads"
                    definition="Argued or disagreed strongly with someone."
                    example="The marketing manager and the sales director always butt heads over the budget."
                    image="/word-img/butted_heads.png"
                />
                <VocabularyListItem
                    index={6}
                    word="Curbed"
                    pos="verb"
                    pronunciation="kurbd"
                    definition="Kept under control or prevented from becoming worse."
                    example="You need to curb your spending if you want to save for a house."
                    image="/word-img/curbed.png"
                />
                <VocabularyListItem
                    index={7}
                    word="Closed off"
                    pos="phrasal verb"
                    pronunciation="klozd off"
                    definition="Unwilling to share feelings, thoughts, or personal experiences."
                    example="After the accident, he became very closed off to his friends."
                    image="/word-img/closed_off.png"
                />
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
    return (
        <div className="border border-[#037ACA]/20 bg-white -ml-px -mt-px p-4 flex gap-6">
            <div className="">
                <div
                    className="size-8 bg-[#037ACA] rounded-full flex justify-center items-center font-semibold text-white -mt-1"
                >
                    {index + 1}
                </div>
                <div className="size-24 p-1 bg-[#037ACA]/10 border border-[#037ACA]/20 flex justify-center items-center rounded-full mt-1">
                    <img src={image} alt={word} className='w-full h-auto object-contain' />
                </div>
            </div>
            <div className="">
                <div className="">
                    <h2 className='capitalize font-[inter] text-[#037ACA] font-bold text-2xl'>{word}</h2>
                    <div className="flex gap-2 items-center mt-1">
                        <div className='text-base'>({pos})</div>
                        <div className="flex gap-2 text-base items-center border rounded-full px-2 py-0.5 border-[#037ACA]/30 font-medium">
                            <VolumeFilled className='size-4.5 flex-none' />
                            <span className='text-shadow-sm leading-none'>{pronunciation}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-2 font-medium">
                    {definition}
                </div>
                <div className="mt-3">
                    <span className="font-medium text-[#037ACA]">Example:</span>{" "}
                    <span className='italic'>"{example}"</span>
                </div>
            </div>
        </div>
    )
}

export default VocabularyList