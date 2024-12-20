import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../index.css';
import {Editor} from '@tinymce/tinymce-react';
import {useState} from 'react';
import {ArrowLeft, FilePlus, Bookmark, PanelLeft, Plus, Trash2} from "lucide-react";
import {Link, useParams} from "react-router";
import { Divider, TextField} from "@mui/material";
import * as React from 'react';
import MonacoEditorModal from "../components/MonacoEditorModal.tsx";

export default function Note() {
    const {params} = useParams();
    console.log(params);
    const [pages, setPages] = useState([
        { id: 1, name: params}
    ]);
    const [currentPage, setCurrentPage] = useState(0);
    const [newPageName, setNewPageName] = useState('');
    const [language, setLanguage] = useState('');
    const [tinyEditor, setTinyEditor] = useState<Editor | null>(null);
    const [open, setOpen] = React.useState(false);
    const [editingCodeBlock, setEditingCodeBlock] = useState({ content: '', element: null });


    const handleClose = () => {
        setOpen(false);
    };
    const convertMonacoToHTML = (monacoContent, language) => {

        return `<pre><code class="language-${language} ">${monacoContent}</code></pre>`;
    };
    const handleFormSubmit = (editorContent) => {
        console.log('Submitted content:', editorContent);
        if (!tinyEditor) {
            console.error('tinyEditor is not initialized');
            return;
        }
        const formattedContent = convertMonacoToHTML(editorContent, language);
        tinyEditor.insertContent(formattedContent);


    };

    const handleAddPage = () => {
        const newPage = { id: pages.length + 1, name: `Page ${pages.length + 1}`, content: '' };
        setPages([...pages, newPage]);
        setCurrentPage(pages.length); // Set the newly created page as the current page
    };

    const handleRenamePage = (e:any) => {
        setNewPageName(e.target.value);
    };

    const handleSaveName = () => {
        const updatedPages = pages.map((page, index) =>
            index === currentPage ? { ...page, name: newPageName } : page
        );
        setPages(updatedPages);
        setNewPageName(''); // Reset the input field
    };

    const handleContentChange = (newContent:any) => {
        const updatedPages = pages.map((page, index) =>
            index === currentPage ? { ...page, content: newContent } : page
        );
        const storedUserData = localStorage.getItem("userData");

        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            const page = userData.Documents.notes.filter( note => note.name == params);
            console.log(page);
            // page["pageData"] = updatedPages;
            localStorage.setItem("userData", JSON.stringify(userData));
        }
        setPages(updatedPages);

    };


    const handlePageClick = (index:any) => {
        setCurrentPage(index);
    };


    return (
        <div className="w-full h-screen flex flex-col">
            <div className="fixed top-0 left-0 w-full bg-[#192535]/60 z-10 p-3 px-10">
                <div className="flex justify-between items-center gap-5">
                    <Link to={"/"}>
                        <ArrowLeft />
                    </Link>
                    <div className="bg-[#7692FF] rounded-full h-10 w-10 flex justify-center items-center">
                        <PanelLeft className={"hover:text-[#1E1E1E]"} />
                    </div>

                    <Divider orientation="vertical" variant="middle" flexItem />

                    <TextField
                        id="standard-helperText"
                        placeholder={pages[currentPage].name}
                        size={"small"}
                        value={newPageName}
                        onChange={handleRenamePage}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSaveName();
                            }
                        }}
                        InputProps={{
                            style: {
                                color: 'white',
                                fontSize: '1rem',
                            },
                            disableUnderline: true,
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                border: '2px solid #7692FF',
                                borderRadius: '8px',
                                color: 'white',
                            },
                            '& .MuiOutlinedInput-root.Mui-focused': {
                                border: '2px solid #ABD2FA',
                            },
                            '& .MuiOutlinedInput-root:hover': {
                                border: '2px solid #ABD2FA',
                            },
                            input: {
                                color: 'white',
                            },
                        }}
                    />

                    <div className="flex-grow flex justify-center items-center gap-5">
                        <h1 className={"font-light text-2xl text-white"}>Codebook</h1>
                    </div>

                    <button className="text-white px-4 py-2 rounded" onClick={handleAddPage}>
                        <FilePlus />
                    </button>

                    <Trash2/>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <button>
                        <Bookmark />
                    </button>
                </div>
            </div>

            <div className="flex-grow mt-16 flex">
                <div className="w-1/6 p-4 overflow-y-auto bg-[#192535]/60">
                    <div className="mb-4 flex flex-col space-y-2">
                        {pages.map((page, index) => (
                            <div
                                key={page.id}
                                className={`cursor-pointer p-2 rounded-lg ${currentPage === index ? 'bg-[#7692FF]' : 'bg-[#4B3F72]'}`}
                                onClick={() => handlePageClick(index)}
                            >
                                {page.name}
                            </div>
                        ))}
                        <div
                            className={'flex items-center justify-center cursor-pointer py-2 rounded-lg bg-[#ABD2FA]'}
                            onClick={handleAddPage}
                        >
                            <Plus />
                        </div>
                    </div>
                </div>

                {/* Editor on the right */}
                <div className="w-full p-4 overflow-y-auto">
                    <Editor
                        apiKey='t6rd8exbyi54m4vsc06ghkttdbc02wwivyhiefh76rql1m2i'
                        value={pages[currentPage].content}
                        onEditorChange={handleContentChange}
                        init={{
                            plugins: [
                                // Core editing features
                                'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                            ],
                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image insertMonacoEditor media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                            tinycomments_mode: 'embedded',
                            tinycomments_author: 'Author name',
                            mergetags_list: [
                                { value: 'First.Name', title: 'First Name' },
                                { value: 'Email', title: 'Email' },
                            ],
                            setup: (editor) => {
                                // Define the custom button to insert Monaco editor
                                editor.ui.registry.addButton('insertMonacoEditor', {
                                    tooltip: 'Insert code snippet',
                                    icon: "code-sample",
                                    onAction: (_) => {
                                        setTinyEditor(editor)
                                        setOpen(true)
                                    }

                                });
                            },
                            width: '100%',
                            height: '100%',
                            resize: true,
                            skin: 'outside',
                            icons: 'thin',
                            content_style: `
            body {
                background-color: #1E1E1E;
                color: white;
                direction: ltr;
            }
            pre {
                background-color: white;
                color: white;
                padding: 16px;
                border-radius: 8px;
                font-size: 1rem;
                overflow-x: auto;
                cursor: pointer;
            }
            code {
                font-family: 'Courier New', monospace;
                color: white;
                cursor: pointer;
            }
        `,
                        }}
                        initialValue={""}
                    />

                </div>
            </div>
            <MonacoEditorModal open={open} onClose={handleClose} onSubmit={handleFormSubmit}/>
        </div>
    );
}
