import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import styled from "styled-components";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: #FFFAEC;
    overflow-x: hidden;
`;

const MainContent = styled.div`
    display: flex;
    flex: 1;
    margin-top: 60px; /* Space for the header */
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem;
    margin-left: ${(props) => (props.isOpen ? "250px" : "80px")};
    transition: margin 0.3s ease-in-out;
`;

const PoemCard = styled.div`
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    margin-bottom: 1rem;
`;

function Profile() {
    const [isOpen, setIsOpen] = useState(true);
    const [submittedPoems, setSubmittedPoems] = useState([]);
    const [contributionBreakdown, setContributionBreakdown] = useState([]);

    // Simulated API fetch
    useEffect(() => {
        // Fake submitted poems
        setSubmittedPoems([
            { id: 1, title: "A Silent Evening", text: "The wind whispers in the trees..." },
            { id: 2, title: "Reflections", text: "Still water mirrors my soul..." },
        ]);

        // Fake contribution breakdown
        setContributionBreakdown([
            { poemTitle: "Community Poem 1", lines: ["The wind whispers...", "Still water mirrors..."] },
            { poemTitle: "Community Poem 2", lines: ["A silent call to nature."] },
        ]);
    }, []);

    return (
        <PageContainer>
            <Header />
            <MainContent>
                <Navbar isOpen={isOpen} toggleNavbar={() => setIsOpen(!isOpen)} />
                <ContentWrapper isOpen={isOpen}>
                    <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

                    {/* Section: Submitted Poems */}
                    <h2 className="text-xl font-semibold mb-4">Your Submitted Poems</h2>
                    {submittedPoems.length > 0 ? (
                        submittedPoems.map((poem) => (
                            <PoemCard key={poem.id}>
                                <h3 className="text-lg font-bold">{poem.title}</h3>
                                <p className="text-gray-700">{poem.text}</p>
                            </PoemCard>
                        ))
                    ) : (
                        <p className="text-gray-600">No poems submitted yet.</p>
                    )}

                    {/* Section: Contribution Breakdown */}
                    <h2 className="text-xl font-semibold mt-6 mb-4">Your Contributions</h2>
                    {contributionBreakdown.length > 0 ? (
                        contributionBreakdown.map((entry, index) => (
                            <PoemCard key={index}>
                                <h3 className="text-lg font-bold">{entry.poemTitle}</h3>
                                <ul className="list-disc ml-4">
                                    {entry.lines.map((line, i) => (
                                        <li key={i} className="text-gray-700">{line}</li>
                                    ))}
                                </ul>
                            </PoemCard>
                        ))
                    ) : (
                        <p className="text-gray-600">No contributions yet.</p>
                    )}
                </ContentWrapper>
            </MainContent>
        </PageContainer>
    );
}

export default Profile;
