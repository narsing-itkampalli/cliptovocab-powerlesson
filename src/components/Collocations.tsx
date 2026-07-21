import { Link2 } from 'lucide-react';

type CollocationItemData = {
    word: string;
    collocations: string[];
};

type CollocationsProps = {
    data: CollocationItemData[];
};

const Collocations = ({ data }: CollocationsProps) => {
    return (
        <div className='border border-dashed border-[#037ACA] rounded-2xl'>
            <div className="flex gap-3 items-center px-4 py-3">
                <Link2 className='size-8 text-[#D97706]' strokeWidth={2.5} />
                <div className="relative inline-block text-2xl font-[Carter_One] text-[#2C3E50] leading-none">
                    Collocations & Natural Usage
                    <span
                        className="absolute left-0 right-0 -bottom-2 h-1.5"
                        style={{
                            background:
                                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='6' viewBox='0 0 200 6'%3E%3Cpath d='M0 3 C20 0,40 6,60 3 S100 0,120 3 S160 6,200 3' stroke='%23D97706' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\") repeat-x"
                        }}
                    />
                </div>
            </div>
            <div className="px-4 pb-4 grid gap-2 mt-1">
                {data.map((item, index) => (
                    <div key={index}>
                        <span className="font-bold text-base text-[#2C3E50] capitalize underline underline-offset-2 decoration-[#D97706]/40">{item.word}</span>
                        <div className="text-base text-gray-700 leading-relaxed mt-0.5">
                            {item.collocations.map((c, i) => (
                                <span key={i}>
                                    • {c}{i < item.collocations.length - 1 ? '    ' : ''}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collocations;
