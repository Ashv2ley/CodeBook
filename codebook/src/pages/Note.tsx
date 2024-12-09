import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react';
import { useState, useRef } from 'react';
import {ArrowLeft, FilePlus, Bookmark, PanelLeft, Plus} from "lucide-react"
import * as monaco from 'monaco-editor';
import {Link} from "react-router";
import {Divider, TextField} from "@mui/material";

export default function Note() {
    const [pages, setPages] = useState([
        { id: 1, name: 'Page 1', content: 'Welcome to TinyMCE!' }
    ]);
    const [currentPage, setCurrentPage] = useState(0);
    const [newPageName, setNewPageName] = useState('');
    const monacoContainerRef = useRef(null);

    const handleAddPage = () => {
        const newPage = { id: pages.length + 1, name: `Page ${pages.length + 1}`, content: '' };
        setPages([...pages, newPage]);
        setCurrentPage(pages.length); // Set the newly created page as the current page
    };

    const handleRenamePage = (e) => {
        setNewPageName(e.target.value);
    };

    const handleSaveName = () => {
        const updatedPages = pages.map((page, index) =>
            index === currentPage ? { ...page, name: newPageName } : page
        );
        setPages(updatedPages);
        setNewPageName(''); // Reset the input field
    };

    const handleContentChange = (newContent) => {
        const updatedPages = pages.map((page, index) =>
            index === currentPage ? { ...page, content: newContent } : page
        );
        setPages(updatedPages);
    };

    const handlePageClick = (index) => {
        setCurrentPage(index);
    };

    const setupMonacoEditor = () => {
        if (monacoContainerRef.current) {
            monaco.editor.create(monacoContainerRef.current, {
                value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
                language: 'typescript',
                theme: "vs-dark"
            });
        }
    };

    return (
        <div className="w-full h-screen flex flex-col">

            <div className="fixed top-0 left-0 w-full bg-[#192535]/60 z-10 p-3 px-10">
                <div className="flex justify-between items-center gap-5">
                    <Link to={"/"}>
                        <ArrowLeft/>
                    </Link>
                    <div className="bg-[#7692FF] rounded-full h-10 w-10 flex justify-center items-center">
                        <PanelLeft className={"hover:text-[#1E1E1E]"}/>
                    </div>

                    <Divider orientation="vertical" variant="middle" flexItem/>

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
                        <FilePlus/>
                    </button>
                    <Divider orientation="vertical" variant="middle" flexItem/>
                    <button>
                        <Bookmark/>
                    </button>
                </div>
            </div>


            {/* Pages list and editor content */}
            <div className="flex-grow mt-16 flex">
                {/* Pages list on the left */}
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
                            <Plus/>
                        </div>
                    </div>
                </div>

                {/* Editor on the right */}
                <div className="w-full p-4 overflow-y-auto">
                    <TinyMCEEditor
                        apiKey="t6rd8exbyi54m4vsc06ghkttdbc02wwivyhiefh76rql1m2i"
                        value={pages[currentPage].content}
                        onEditorChange={handleContentChange}
                        init={{
                            plugins: [
                                'anchor',
                                'autolink',
                                'charmap',
                                'codesample',
                                'emoticons',
                                'image',
                                'link',
                                'lists',
                                'media',
                                'searchreplace',
                                'table',
                                'visualblocks',
                                'wordcount',
                            ],
                            directionality: 'ltr',
                            toolbar:
                                'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link insertMonacoEditor image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat', // Add custom button here
                            tinycomments_mode: 'embedded',
                            tinycomments_author: 'Author name',
                            mergetags_list: [
                                {value: 'First.Name', title: 'First Name'},
                                {value: 'Email', title: 'Email'},
                            ],
                            width: '100%',
                            height: '100%',
                            resize: true,

                            setup: (editor) => {
                                // Define the custom button to insert Monaco editor
                                editor.ui.registry.addButton('insertMonacoEditor', {
                                    tooltip: 'Insert code snippet',
                                    icon:"</>",
                                    onAction: (_) => {
                                        editor.insertContent('<div id="monaco-editor-container"></div>'); // Insert the container for Monaco editor
                                        setTimeout(setupMonacoEditor, 500); // Set up Monaco editor after TinyMCE renders
                                    },
                                });
                            },

                            skin: 'outside',
                            icons: 'thin',
                            content_style: `body {
                            background-color: #1e1e1e;
                            color: white;
                            direction: ltr;}
                            border: 5px solid red;`,
                        }}

                        initialValue={pages[currentPage].content}
                    />

                    <div ref={monacoContainerRef} id="monaco-editor-container" style={monacoEditorStyle}></div>
                </div>
            </div>
        </div>
    );
}

// Inline style for Monaco editor container
const monacoEditorStyle = {
    width: '100%',
    height: '400px', // Adjust the height as needed
};
