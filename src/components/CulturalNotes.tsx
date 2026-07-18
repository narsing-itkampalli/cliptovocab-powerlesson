import { Star } from 'lucide-react'

type CulturalNotesItemData = {
    heading: string;
    subtext: string;
    image: string;
};

type CulturalNotesProps = {
    data: CulturalNotesItemData[];
};

const CulturalNotes = ({ data }: CulturalNotesProps) => {
    return (
        <div className='border border-[#037ACA] border-dashed rounded-2xl'>
            <div className="flex gap-4 items-center py-3 px-4">
                <Star className='size-8 fill-current text-[#037ACA]' />
                <div className="">
                    <div className="relative inline-block text-3xl font-[Carter_One] text-[#2C3E50] leading-none text-center mb-2">
                        <div className="flex gap-2 items-center">
                            Cultural Notes & Nuances
                        </div>

                        <span
                            className="absolute left-0 right-0 -bottom-2 h-1.5"
                            style={{
                                background:
                                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='6' viewBox='0 0 200 6'%3E%3Cpath d='M0 3 C20 0,40 6,60 3 S100 0,120 3 S160 6,200 3' stroke='%23037ACA' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\") repeat-x"
                            }}
                        />
                    </div>
                    <p>Go beyond the meaning.</p>
                </div>
            </div>
            <div className="py-3 px-4 grid gap-2">
                {data.map((item, index) => (
                    <CulturalNotesItem
                        key={index}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}

type CulturalNotesItemProps = {
    heading: string;
    subtext: string;
    image: string;
}

const CulturalNotesItem = ({ heading, subtext, image }: CulturalNotesItemProps) => {
    return (
        <div className="flex gap-4 px-4 py-3 border border-[#0A6441]/20 rounded-2xl">
            <div className="size-20 p-2 flex-none bg-[#0A6441]/10 rounded-2xl flex justify-center items-center">
                <img src={image} alt="..." className='size-full object-contain' />
            </div>
            <div>
                <div className="font-semibold text-xl text-[#0A6441]">{heading}</div>
                <div className="mt-1">
                    {subtext}
                </div>
            </div>
        </div>
    )
}

export default CulturalNotes