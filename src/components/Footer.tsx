// import { Instagram } from 'lucide-react';

import InstagramIcon from "../icons/InstagramIcon"

const Footer = ({ links }: { links: { instagram: { label: string; url: string }; linfio: { label: string; url: string } } }) => {
    return (
        <div className='w-full flex items-center justify-center mt-12 mb-10 px-4'>
            <div
                className='flex items-center justify-center rounded-2xl px-8 py-4 shadow-lg w-fit gap-10 lg:gap-14'
                style={{
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                }}
            >

                {/* Left Side - Instagram */}
                <a
                    href={links.instagram.url}
                    target="_blank"
                    rel="noreferrer"
                    className='flex items-center gap-4 group cursor-pointer no-underline'
                >
                    <div className='w-13 h-13 rounded-[14px] bg-linear-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200'>
                        <InstagramIcon
                            strokeWidth={2}
                            className="size-8"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[18px] font-semibold text-white uppercase tracking-wider leading-tight' style={{ fontFamily: 'Inter, sans-serif' }}>
                            Watch the Reel
                        </span>
                        <span
                            className='text-[13px] text-gray-400 group-hover:text-blue-300 transition-colors mt-0.5'
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            {links.instagram.label}
                        </span>
                    </div>
                </a>

                {/* Divider */}
                <div className='w-px h-12 bg-gray-600' />

                {/* Right Side - Linfio */}
                <a
                    href={links.linfio.url}
                    target="_blank"
                    rel="noreferrer"
                    className='flex items-center gap-4 group cursor-pointer no-underline'
                >
                    <div className='w-13 h-13 rounded-[14px] overflow-hidden shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200'>
                        <img
                            src="/linfio.png"
                            alt="Linfio logo"
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[18px] font-semibold text-white uppercase tracking-wider leading-tight' style={{ fontFamily: 'Inter, sans-serif' }}>
                            Save & Practice on Linfio
                        </span>
                        <span
                            className='text-[13px] text-gray-400 group-hover:text-blue-300 transition-colors mt-0.5'
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            {links.linfio.label}
                        </span>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default Footer
