import { Link } from "react-router-dom";
import { Container, LeftSection, RightSection } from "../components/Layout";
import { Card } from "../components/Card";
import { Button } from "../components/Button";

function Landing() {
    return (
        <Container>
            <LeftSection>
                <h1 className="text-5xl font-bold mb-4 text-blue-600">Welcome to Fifty Poems</h1>
                <p className="text-lg text-gray-600">
                    A unique poetry experience where every week, a new one-word prompt inspires
                    a collection of creative voices. Submit your poem and contribute to a
                    collaborative poetic masterpiece.
                </p>
            </LeftSection>
            <RightSection>
                <Card>
                    <h2 className="text-xl font-semibold mb-4">Join the Community</h2>
                    <Button to="/sign-up" variant="signup">Get Started</Button>
                    <Button to="/sign-in" variant="signin">Sign In</Button>
                </Card>
            </RightSection>
        </Container>
    );
}

export default Landing;
