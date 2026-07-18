import { useEffect, useState } from "react"
import CulturalNotes from "./components/CulturalNotes"
import Header from "./components/Header"
import PronunciationGuide from "./components/PronunciationGuide"
import Transcript from "./components/Transcript"
import VisualMemoryHelper from "./components/VisualMemoryHelper"
import VocabularyList from "./components/VocabularyList"


function App() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <Header data={data.header} />
            <div className="">
                <Transcript data={data.transcript} />
                <VocabularyList data={data.vocabulary} />
            </div>
            <div className="px-8 mt-6">
                <div
                    className="px-8 border-[#a7a7a7] rounded-2xl overflow-hidden py-6 flex flex-col items-center relative"
                >
                    <div
                        className="absolute inset-0 z-0 opacity-40"
                        style={{
                            background: "url('/paper-2.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "left",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <VisualMemoryHelper data={data.visualMemory} />
                            <PronunciationGuide data={data.pronunciationGuide} />
                        </div>
                        <div className="pt-4">
                            <CulturalNotes data={data.culturalNotes} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
