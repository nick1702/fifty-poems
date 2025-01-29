import { useState } from "react";
import { Button } from "../components/Button";
import Textarea from "../components/Textarea";
import Navbar from "../components/Navbar";

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
            <Navbar />

            {/* Main Content: Positioned to the right of Navbar */}
            <div className="flex-1 flex flex-col justify-start px-12 py-8" style={{ marginLeft: "250px" }}>
                <h1 className="text-4xl font-bold mb-6 text-blue-600">{weeklyPrompt}</h1>
                <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-4">
                    <Textarea
                        name="poem"
                        placeholder="Write your poem here..."
                        value={poem}
                        onChange={(e) => setPoem(e.target.value)}
                        required
                        className="w-full"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="flex justify-end">
                        <Button type="submit" variant="signup">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SubmitPoem;
