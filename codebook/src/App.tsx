import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route } from "react-router";
import Documents from "./pages/Documents.tsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Documents />} />
        </Routes>
    );
}