import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, LeftSection, RightSection } from "../components/Layout";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import Input from "../components/Input";

function SignUp() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError("");
        console.log("User Registered:", formData);
        // Handle form submission logic here
    };

    return (
        <Container>
            {/* Header with Home Button */}
            <div className="absolute top-4 left-4">
                <Link to="/" className="text-blue-600 font-bold text-lg">Home</Link>
            </div>

            <LeftSection>
                <h1 className="text-5xl font-bold mb-4 text-blue-600">Create an Account</h1>
                <p className="text-lg text-gray-600">
                    Join Fifty Poems to participate in weekly poetry submissions and explore
                    collaborative creativity.
                </p>
            </LeftSection>
            <RightSection>
                <Card>
                    <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <Button type="submit" variant="signup">Sign Up</Button>
                    </form>
                </Card>
            </RightSection>
        </Container>
    );
}

export default SignUp;
