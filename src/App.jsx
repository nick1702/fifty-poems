import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center">
            <Routes>
                {/* Define your routes here */}
                <Route path="/" element={<h1 className="text-3xl font-bold">Poetry Platform is Working!</h1>} />
            </Routes>
        </div>
    );
}

export default App;