import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route } from "react-router";
import Documents from "./pages/Documents.tsx";
import Bookmarks from "./pages/Bookmarks.tsx";
import Signup from "./pages/Signup.tsx";
import Signin from "./pages/Signin.tsx";
import Trash from "./pages/Trash.tsx";
import Note from "./pages/Note.tsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Documents />} />
            <Route path="/note" element={<Note />} />
            <Route path="/sign-in" element={<Signin/>} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/trash" element={<Trash />} />
        </Routes>
    );
}