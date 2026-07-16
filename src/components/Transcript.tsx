import React from 'react'
import ScrollText from '../icons/ScrollText';
import Arrow from '../icons/Arrow';

const Transcript = () => {
    return (
        <div className="py-6 px-8 text-black relative z-10">
            <div
                className="px-8 border-[#a7a7a7] rounded-2xl overflow-hidden py-6 flex flex-col items-center relative"
            >
                <div
                    className="absolute inset-0 z-0 opacity-40"
                    style={{
                        background: "url('/image.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "left",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                <div className="relative pt-1">
                    <div className="relative inline-block text-3xl font-[Carter_One] text-[#2C3E50] leading-none text-center mb-4">
                        <div className="flex gap-2 items-center">
                            <ScrollText
                                className='text-[#037ACA]'
                            />
                            Transcript
                        </div>

                        <span
                            className="absolute left-0 right-0 -bottom-2 h-1.5"
                            style={{
                                background:
                                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='6' viewBox='0 0 200 6'%3E%3Cpath d='M0 3 C20 0,40 6,60 3 S100 0,120 3 S160 6,200 3' stroke='%23037ACA' stroke-width='2.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\") repeat-x"
                            }}
                        />
                    </div>
                    <table className="text-xl">
                        {/* List of Transcripts */}
                        <tbody>
                            <TranscriptItem
                                speaker='Abhishek'
                                transcript={{
                                    text: 'I did it my way and I did it on my own volition',
                                    highlight: [{ text: 'volition' }]
                                }}
                                previousHighlight={0}
                            />
                            <TranscriptItem
                                speaker='Host'
                                transcript={{
                                    text: "Facetious, you're too facetious?",
                                    highlight: [{ text: 'Facetious' }]
                                }}
                                previousHighlight={1}
                            />
                            <TranscriptItem
                                speaker='Abhishek'
                                transcript={{
                                    text: "Although estranged and now divorced, the first person he wants to go to...",
                                    highlight: [{ text: 'estranged' }]
                                }}
                                previousHighlight={2}
                            />
                            <TranscriptItem
                                speaker='Abhishek'
                                transcript={{
                                    text: "I think sometimes we get very skewed culturally.",
                                    highlight: [{ text: 'skewed' }]
                                }}
                                previousHighlight={3}
                            />
                            <TranscriptItem
                                speaker='Abhishek'
                                transcript={{
                                    text: "The most daunting thing to go on a red carpet for me.",
                                    highlight: [{ text: 'daunting' }]
                                }}
                                previousHighlight={4}
                            />
                            <TranscriptItem
                                speaker='Abhishek'
                                transcript={{
                                    text: "And I never butted heads with her after that.",
                                    highlight: [{ text: 'butted heads' }]
                                }}
                                previousHighlight={5}
                            />
                            <TranscriptItem
                                speaker='Host'
                                transcript={{
                                    text: "I've seen, uh, girls in villages say that they have curbed child marriage because of sports.",
                                    highlight: [{ text: 'curbed' }]
                                }}
                                previousHighlight={6}
                            />
                            <TranscriptItem
                                speaker='Host'
                                transcript={{
                                    text: "And those were movies that had very closed off, and kind of aggressive men.",
                                    highlight: [{ text: 'closed off' }]
                                }}
                                previousHighlight={7}
                            />
                        </tbody>
                    </table>
                </div>
            </div>
            <Arrow
                className='size-13 absolute -bottom-2 left-30 -translate-x-1/2 -rotate-25'
                style={{
                    color: '#213B52',
                }}
            />
        </div>
    )
}

type Highlight = {
    text: string;
    occurrence?: number; // default: 0
};

type Props = {
    speaker: string;
    transcript: {
        text: string;
        highlight: Highlight[];
    };
    previousHighlight?: number;
};

const TranscriptItem = ({ speaker, transcript, previousHighlight }: Props) => {
    let rendered = transcript.text;

    let currentHighlight = 1;

    transcript.highlight.forEach(({ text, occurrence = 0 }) => {
        const escaped = text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

        let count = -1;

        rendered = rendered.replace(
            new RegExp(escaped, "gi"),
            (match) => {
                count++;

                if (count === occurrence) {
                    return `__HIGHLIGHT_START__${match}__HIGHLIGHT_END__`;
                }

                return match;
            }
        );
    });

    const parts = rendered.split(
        /(__HIGHLIGHT_START__.*?__HIGHLIGHT_END__)/
    );

    return (
        <tr
        // className='border-b-2 border-b-red-500'
        >
            <td className="font-[Bricolage_Grotesque] font-bold pr-6 py-2 align-top">
                {speaker}:
            </td>

            <td className='py-2'>
                {parts.map((part, index) => {
                    if (
                        part.startsWith("__HIGHLIGHT_START__") &&
                        part.endsWith("__HIGHLIGHT_END__")
                    ) {
                        return (
                            <span
                                key={index}
                                className="text-[#037ACA] font-semibold relative pr-3"
                            >
                                {part
                                    .replace("__HIGHLIGHT_START__", "")
                                    .replace("__HIGHLIGHT_END__", "")}
                                {/* <div className="absolute -bottom-1 left-0 w-full h-px bg-[#037ACA] animate-pulse"></div> */}
                                <div className="absolute -top-3 -right-0.5 bg-[#037ACA] text-white text-xs rounded-full px-1 aspect-square flex justify-center items-center select-none">
                                    {previousHighlight + (currentHighlight++)}
                                </div>
                            </span>
                        );
                    }

                    return <React.Fragment key={index}>{part}</React.Fragment>;
                })}
            </td>
        </tr>
    );
};

export default Transcript