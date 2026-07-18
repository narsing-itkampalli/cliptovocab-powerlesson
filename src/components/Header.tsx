import logoMini from '../assets/logo-mini.png';

type HeaderProps = {
    data: {
        chapter: string;
        image: string;
    };
};

const Header = ({ data }: HeaderProps) => {
    return (
        <div className='w-full min-h-16.5 bg-[#C6ECDC] flex items-center justify-between'>
            <div className='pl-12 pt-5 pb-3'>
                <div className="flex gap-2 items-center">
                    <div className="w-12">
                        <img
                            src={logoMini}
                            alt="header-logo"
                            className='w-full h-auto object-contain'
                        />
                    </div>
                    <span className='font-[inter] font-bold text-xl text-[#213B52]'>
                        Clip
                        <span className='text-[#037ACA]'>To</span>
                        Vocab
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <h1 className='text-5xl font-[Carter_One] mt-2 leading-none'>
                        <span className='text-[#037ACA]'>POWER</span>{' '}
                        <span className='text-[#213B52]'>LESSON</span>
                    </h1>
                </div>
            </div>
            <div className='w-fit mt-auto relative pr-12'>
                <div className="handwritten text-[40px] absolute top-1 right-10 leading-none text-[#323d41]">{data.chapter}</div>
                <div className="h-24">
                    <img
                        src={data.image}
                        alt="header-pattern"
                        className='h-full object-contain'
                    />
                </div>
            </div>
        </div>
    )
}

export default Header