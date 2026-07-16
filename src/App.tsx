import CulturalNotes from "./components/CulturalNotes"
import Header from "./components/Header"
import PronunciationGuide from "./components/PronunciationGuide"
import Transcript from "./components/Transcript"
import VisualMemoryHelper from "./components/VisualMemoryHelper"
import VocabularyList from "./components/VocabularyList"


function App() {

    return (
        <div>
            <Header />
            <div className="">
                <Transcript />
                <VocabularyList />
            </div>
            <div className="px-8 mt-6">
                <div
                    className="px-8 border-[#a7a7a7] rounded-2xl overflow-hidden py-6 flex flex-col items-center relative"
                >
                    <div
                        className="absolute inset-0 z-0 opacity-40"
                        style={{
                            background: "url('/paper-2.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "left",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <VisualMemoryHelper />
                            <PronunciationGuide />
                        </div>
                        <div className="pt-4">
                            <CulturalNotes />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
