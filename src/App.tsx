import Header from "./components/Header"
import Transcript from "./components/Transcript"
import VocabularyList from "./components/VocabularyList"


function App() {

    return (
        <div>
            <Header />
            <div className="">
                <Transcript />
                <VocabularyList />
            </div>
        </div>
    )
}

export default App
