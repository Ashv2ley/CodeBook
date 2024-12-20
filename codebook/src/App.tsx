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
import Shared from "./pages/Shared.tsx";

export default function App() {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData){

    } else {

        localStorage.setItem("userData", JSON.stringify({
            Documents: {
                folders:[],
                notebooks:[],
                notes:[],
                allDocuments:[]
            },
            Bookmarks: {},
            Shared: {},
            Trash: {}
        }))
    }


    return (
        <Routes>
            <Route path="/" element={<Documents />} />
            <Route path="/note/:name" element={<Note />} />
            <Route path="/sign-in" element={<Signin/>} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/shared" element={<Shared />} />
            <Route path="/trash" element={<Trash />} />
        </Routes>
    );
}