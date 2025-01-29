import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 px-6">
            <h1 className="text-4xl font-bold mb-4">Welcome to Fifty Poems</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl">
                Every week, a new one-word prompt is released. Submit your poem and be part of a collaborative poetic experience.
            </p>
            <div className="mt-6 flex space-x-4">
                <Link to="/sign-up" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
                    Get Started
                </Link>
                <Link to="/sign-in" className="bg-gray-300 text-gray-900 px-6 py-3 rounded-lg shadow hover:bg-gray-400">
                    Sign In
                </Link>
            </div>
        </div>
    );
}

export default Landing;
