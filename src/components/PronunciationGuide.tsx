import Mic from "../icons/Mic"

const PronunciationGuide = () => {
    return (
        <div className='border border-dashed border-[#037ACA] rounded-2xl'>
            <div className="flex gap-4 items-center px-4 py-3">
                <Mic className='size-9 text-[#037ACA]' />
                <div className="">
                    <div className="relative inline-block text-3xl font-[Carter_One] text-[#2C3E50] leading-none text-center mb-2">
                        <div className="flex gap-2 items-center">
                            Pronunciation Guide
                        </div>

                        <span
                            className="absolute left-0 right-0 -bottom-2 h-1.5"
                            style={{
                                background:
                                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='6' viewBox='0 0 200 6'%3E%3Cpath d='M0 3 C20 0,40 6,60 3 S100 0,120 3 S160 6,200 3' stroke='%23037ACA' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\") repeat-x"
                            }}
                        />
                    </div>
                    <p>Connected Speech Tips</p>
                </div>
            </div>
            <div className="py-3 px-4 grid gap-2">
                <PronunciationGuideItem
                    index={0}
                    sentence="On my own volition"
                    pronunciation="on-my-own voh-li-shun"
                    guide="Notice how the stress is on 'voh' and the 'li' is light."
                />
                <PronunciationGuideItem
                    index={1}
                    sentence="You're too facetious"
                    pronunciation="you're-too fuh-see-shus"
                    guide="The 'a' and 'e' blend into a soft 'uh' and 'ee' sound."
                />
                <PronunciationGuideItem
                    index={3}
                    sentence="Closed off"
                    pronunciation="clo-zdofff"
                    guide="The 'd' in closed links directly into the 'o' of off."
                />
            </div>
        </div>
    )
}

type PronunciationGuideItemProps = {
    index: number;
    sentence: string;
    pronunciation: string;
    guide: string;
}

const PronunciationGuideItem = ({ index, sentence, pronunciation, guide }: PronunciationGuideItemProps) => {

    return (
        <div className="flex gap-4 text-lg">
            <div className="size-8 flex-none rounded-full bg-[#601DAD] text-white flex justify-center items-center mt-2">
                {index + 1}
            </div>
            <div className={index !== 0 ? "border-t pt-2 border-[#601DAD]/40" : ""}>
                <div className="font-semibold text-xl text-[#601DAD]">"{sentence}"</div>
                <div className="px-2 rounded-lg bg-[#601DAD]/20 text-[#601DAD] text-base w-fit font-medium mt-2">
                    {pronunciation}
                </div>
                <div className="mt-2">
                    {guide}
                </div>
            </div>
        </div>
    );
}

export default PronunciationGuide