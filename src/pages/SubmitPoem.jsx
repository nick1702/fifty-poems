import { useState } from "react";
import { Container } from "../components/Layout";
import { Button } from "../components/Button";
import Textarea from "../components/Textarea";

function SubmitPoem() {
    const [poem, setPoem] = useState("");
    const [error, setError] = useState("");
    const weeklyPrompt = "Describe a moment of stillness in nature.";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!poem.trim()) {
            setError("Poem content cannot be empty.");
            return;
        }
        setError("");
        console.log("Poem Submitted:", poem);
        // Handle submission logic here
        setPoem("");
    };

    return (
        <div className="flex h-screen">
            {/* Placeholder for Navbar */}
            <aside className="w-64 bg-gray-100 p-6 hidden md:block">
                <h2 className="text-xl font-bold">Navbar</h2>
                {/* Future navbar items */}
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <h1 className="text-4xl font-bold mb-6 text-blue-600">{weeklyPrompt}</h1>
                <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-4 flex flex-col items-center">
                    <Textarea
                        name="poem"
                        placeholder="Write your poem here..."
                        value={poem}
                        onChange={(e) => setPoem(e.target.value)}
                        required
                        className="w-full text-center"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="flex justify-center w-full">
                        <Button type="submit" variant="signup">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SubmitPoem;