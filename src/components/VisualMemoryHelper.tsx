import Eye from '../icons/Eye'
import { transparentize } from '../utils/color'

const VisualMemoryHelper = () => {
    return (
        <div className='border border-[#037ACA] border-dashed rounded-2xl'>
            <div className="px-4">
                <div className="flex gap-4 items-center py-3">
                    <Eye className='size-9 text-[#037ACA]' />
                    <div className="">
                        <div className="relative inline-block text-3xl font-[Carter_One] text-[#2C3E50] leading-none text-center mb-2">
                            <div className="flex gap-2 items-center">
                                Visual Memory Aids
                            </div>

                            <span
                                className="absolute left-0 right-0 -bottom-2 h-1.5"
                                style={{
                                    background:
                                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='6' viewBox='0 0 200 6'%3E%3Cpath d='M0 3 C20 0,40 6,60 3 S100 0,120 3 S160 6,200 3' stroke='%23037ACA' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\") repeat-x"
                                }}
                            />
                        </div>
                        <p>See it. Remember it.</p>
                    </div>
                </div>
            </div>
            <div className="py-3 px-2 grid gap-2">
                <VisualMemoryItem
                    word="butted heads"
                    meaning="Strong disagreement or constant arguing."
                    image="./visual-guide-aids/butted_heads.png"
                    color="#885022"
                />
                <VisualMemoryItem
                    word="Closed Off"
                    meaning="Emotionally shut down; not open or aproachable."
                    image="./visual-guide-aids/closed_off.png"
                    color="#082831"
                />
                <VisualMemoryItem
                    word="Skewed"
                    meaning="Biased, unbalanced, or one-sided."
                    image="./visual-guide-aids/skewed.png"
                    color="#011d36"
                />
            </div>
        </div>
    )
}

type VisualMemoryItemProps = {
    word: string;
    meaning: string;
    image: string;
    color: string;
}

const VisualMemoryItem = ({
    word,
    meaning,
    image,
    color
}: VisualMemoryItemProps) => {
    return (
        <div
            className="flex items-center gap-2 pl-4 pr-3 border rounded-xl"
            style={{
                backgroundColor: transparentize(color, 0.05),
                borderColor: transparentize(color, 0.20)
            }}
        >
            <div>
                <h3
                    className='font-bold text-xl capitalize'
                    style={{
                        color
                    }}
                >
                    {word}
                </h3>
                <p>{meaning}</p>
            </div>
            <div className="w-50">
                <img src={image} alt="..." />
            </div>
        </div>
    )
}

export default VisualMemoryHelper