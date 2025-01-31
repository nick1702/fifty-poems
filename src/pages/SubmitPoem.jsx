import { useState } from "react";
import { Button } from "../components/Button";
import Textarea from "../components/Textarea";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";

const PageContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #DAEED7;
    overflow-x: hidden;
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;

function SubmitPoem() {
    const [poem, setPoem] = useState("");
    const [error, setError] = useState("");
    const [isOpen, setIsOpen] = useState(true);
    const weeklyPrompt = "Describe a moment of stillness in nature.";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!poem.trim()) {
            setError("Poem content cannot be empty.");
            return;
        }
        setError("");
        console.log("Poem Submitted:", poem);
        setPoem("");
    };

    return (
        <PageContainer>
            <Navbar isOpen={isOpen} toggleNavbar={() => setIsOpen(!isOpen)} />
            <Header />
            <ContentWrapper style={{ marginLeft: isOpen ? "250px" : "80px", transition: "margin 0.3s ease-in-out" }}>
                <div className="w-full max-w-3xl px-6 text-center">
                    <h1 className="text-4xl font-bold mb-6 text-blue-600">{weeklyPrompt}</h1>
                    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
                        <Textarea
                            name="poem"
                            placeholder="Write your poem here..."
                            value={poem}
                            onChange={(e) => setPoem(e.target.value)}
                            required
                            className="w-full"
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <div className="flex justify-center">
                            <Button type="submit" variant="signup">Submit</Button>
                        </div>
                    </form>
                </div>
            </ContentWrapper>
            <Footer />
        </PageContainer>
    );
}

export default SubmitPoem;
