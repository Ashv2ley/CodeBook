import PageOutline from "../components/PageOutline.tsx";
import { FolderOpen, Notebook, Plus, SquarePen } from "lucide-react";
import DropdownButton from "../components/DropdownButton.tsx";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faBook, faFile } from "@fortawesome/free-solid-svg-icons";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(4), // Increased padding
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(2),
    },
}));

export default function Documents() {
    const [folderOpen, setFolderOpen] = useState(false);
    const [notebookOpen, setNotebookOpen] = useState(false);
    const [name, setName] = useState("Untitled");
    const [selectedColor, setSelectedColor] = useState("#74C0FC");
    const [isBookmarked, setBookmark] = useState(false);
    const navigate = useNavigate();
    const colors = [
        "#FF6768", "#FF9138", "#FFDE59", "#8DDB6D", "#74C0FC", "#C6B1FA", "#FEC5CE", "#C2C2C2", "#242424",
    ];

    const handleClose = () => {
        setFolderOpen(false);
        setNotebookOpen(false);
        setName("Untitled");
        setSelectedColor("#74C0FC");
    };

    const handleRename = (e:any) => {
        setName(e.target.value);
    };

    const handleColorClick = (color: string) => {
        setSelectedColor(color);
    };

    function handleFolderClick() {
        setFolderOpen(true);
    }

    function handleNotebookClick() {
        setNotebookOpen(true);
    }

    function handleNoteClick() {
        const storedUserData = localStorage.getItem("userData");

        if (storedUserData) {
            const userData = JSON.parse(storedUserData);

            const date = new Date();
            let month = ''
            switch (new Date().getMonth()+1) {
                case 1:
                    month = "Jan";
                    break;
                case 2:
                    month = "Feb";
                    break;
                case 3:
                    month = "Mar";
                    break;
                case 4:
                    month = "Apr";
                    break;
                case 5:
                    month = "May";
                    break;
                case 6:
                    month = "Jun";
                    break;
                case 7:
                    month = "Jul";
                    break;
                case 8:
                    month = "Aug";
                    break;
                case 9:
                    month = "Sep";
                    break;
                case 10:
                    month = "Oct";
                    break;
                case 11:
                    month = "Nov";
                    break;
                case 12:
                    month = "Dec";
            }
            const createDate = `${month} ${ date.getDate()}, ${date.getFullYear()}`;
            const createTime = `${date.getHours()-12}:${date.getMinutes()} ${date.getHours()>=12? 'PM':'AM'}`;

            const note = {
                name: name,
                selectedColor: 'white',
                createDate: createDate,
                createTime: createTime,
                isBookmarked: isBookmarked,
                icon: <FontAwesomeIcon icon={faFile}/>,
                type: 'note',
                pageData:''
            }
            userData.Documents.notes.push(note);
            userData.Documents.allDocuments.push(note);


            localStorage.setItem("userData", JSON.stringify(userData));
            navigate(`/note/${name}`);

        } else {
            console.log("User data not found in local storage");
        }

    }

    const handleFolderSubmit = () => {

        const storedUserData = localStorage.getItem("userData");

        if (storedUserData) {
            const userData = JSON.parse(storedUserData);

            const date = new Date();
            let month = ''
            switch (new Date().getMonth()+1) {
                case 1:
                    month = "Jan";
                    break;
                case 2:
                    month = "Feb";
                    break;
                case 3:
                    month = "Mar";
                    break;
                case 4:
                    month = "Apr";
                    break;
                case 5:
                    month = "May";
                    break;
                case 6:
                    month = "Jun";
                    break;
                case 7:
                    month = "Jul";
                    break;
                case 8:
                    month = "Aug";
                    break;
                case 9:
                    month = "Sep";
                    break;
                case 10:
                    month = "Oct";
                    break;
                case 11:
                    month = "Nov";
                    break;
                case 12:
                    month = "Dec";
            }
            const createDate = `${month} ${ date.getDate()}, ${date.getFullYear()}`;
            const createTime = `${date.getHours()-12}:${date.getMinutes()} ${date.getHours()>=12? 'PM':'AM'}`;

            const folder = {
                name: name,
                selectedColor: selectedColor,
                createDate: createDate,
                createTime: createTime,
                isBookmarked: isBookmarked,
                icon: <FontAwesomeIcon icon={faFolder}/>,
                type:'folder'
            }
            userData.Documents.folders.push(folder);
            userData.Documents.allDocuments.push(folder);

            localStorage.setItem("userData", JSON.stringify(userData));


            handleClose();
        } else {
            console.log("User data not found in local storage");
        }
    };

    const handleNotebookSubmit = () => {

        const storedUserData = localStorage.getItem("userData");

        if (storedUserData) {
            const userData = JSON.parse(storedUserData);

            const date = new Date();
            let month = ''
            switch (new Date().getMonth()+1) {
                case 1:
                    month = "Jan";
                    break;
                case 2:
                    month = "Feb";
                    break;
                case 3:
                    month = "Mar";
                    break;
                case 4:
                    month = "Apr";
                    break;
                case 5:
                    month = "May";
                    break;
                case 6:
                    month = "Jun";
                    break;
                case 7:
                    month = "Jul";
                    break;
                case 8:
                    month = "Aug";
                    break;
                case 9:
                    month = "Sep";
                    break;
                case 10:
                    month = "Oct";
                    break;
                case 11:
                    month = "Nov";
                    break;
                case 12:
                    month = "Dec";
            }
            const createDate = `${month} ${ date.getDate()}, ${date.getFullYear()}`;
            const createTime = `${date.getHours()-12}:${date.getMinutes()} ${date.getHours()>=12? 'PM':'AM'}`;

            const notebook = {
                name: name,
                selectedColor: selectedColor,
                createDate: createDate,
                createTime: createTime,
                isBookmarked: isBookmarked,
                icon: <FontAwesomeIcon icon={faBook}/>,
                type:'notebook'
            }
            userData.Documents.notebooks.push(notebook);
            userData.Documents.allDocuments.push(notebook);

            localStorage.setItem("userData", JSON.stringify(userData));


            handleClose();
        } else {
            console.log("User data not found in local storage");
        }
    };


    return (
        <div className="">
            <PageOutline
                pageName={"Documents"}
                button1={
                    <DropdownButton
                        item1ClickAction={handleFolderClick}
                        item2ClickAction={handleNotebookClick}
                        item3ClickAction={handleNoteClick}
                        placeholder={
                            <>
                                <Plus size={18} className="mr-2" /> New
                            </>
                        }
                        item1={
                            <>
                                <FolderOpen size={18} className="mr-3" /> Folder
                            </>
                        }
                        item2={
                            <>
                                <Notebook size={18} className="mr-3" /> Notebook
                            </>
                        }
                        item3={
                            <>
                                <SquarePen size={18} className="mr-3" /> Quick Note
                            </>
                        }
                    />
                }
                button2={
                    <DropdownButton
                        placeholder={<>Sort by Date</>}
                        item1={<>Sort by Date</>}
                        item2={<>Sort by Name</>}
                        item3={<>Sort by Type</>}
                    />
                }
            />
            {/*Folder Popup*/}
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={folderOpen}
                fullWidth
                maxWidth="xs"
                sx={{
                "& .MuiPaper-root": {
                    borderRadius: "10px", // Set the desired border radius
                },
            }}
            >
                <DialogTitle
                    id="customized-dialog-title"
                    sx={{ m: 0, fontWeight: "bold" }}
                >
                    New Folder
                </DialogTitle>
                <DialogContent
                    dividers
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <FontAwesomeIcon
                        icon={faFolder}
                        style={{
                            color: `${selectedColor}`,
                            fontSize: "8rem",

                        }}
                    />
                    {/* Input Box */}
                    <TextField
                        id="outlined-basic"
                        placeholder={name}
                        variant="outlined"
                        sx={{
                            width: "100%",
                            maxWidth: "300px", // Limits width
                            "& .MuiOutlinedInput-root": {
                                height: "40px",

                            },
                        }}
                        onChange={handleRename}
                    />
                    <div className="flex justify-center gap-2 flex-wrap">
                        {colors.map((color) => (
                            <div
                                key={color}
                                onClick={() => handleColorClick(color)}
                                className={`w-8 h-8 rounded-full cursor-pointer transition-all duration-200 ease-in-out
                                        ${selectedColor === color ? "border-4 border-gray-200" : ""}
                                        `}
                                style={{backgroundColor: color}}
                            ></div>
                        ))}
                    </div>

                </DialogContent>
                <DialogActions sx={{gap: 1}}>
                    <Button variant="outlined" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={() => {
                        handleFolderSubmit();
                        handleClose();
                    }}>
                        Done
                    </Button>
                </DialogActions>
            </BootstrapDialog>

            {/*Notebook Popup*/}
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={notebookOpen}
                fullWidth
                maxWidth="xs"
                sx={{
                    "& .MuiPaper-root": {
                        borderRadius: "10px", // Set the desired border radius
                    },
                }}
            >
                <DialogTitle
                    id="customized-dialog-title"
                    sx={{ m: 0, fontWeight: "bold" }}
                >
                    New Notebook
                </DialogTitle>
                <DialogContent
                    dividers
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    {/* Folder Icon */}
                    <FontAwesomeIcon
                        icon={faBook}
                        style={{
                            color: `${selectedColor}`,
                            fontSize: "8rem",

                        }}
                    />
                    {/* Input Box */}
                    <TextField
                        id="outlined-basic"
                        placeholder={name}
                        variant="outlined"
                        sx={{
                            width: "100%",
                            maxWidth: "300px", // Limits width
                            "& .MuiOutlinedInput-root": {
                                height: "40px",

                            },
                        }}
                        onChange={handleRename}
                    />
                    <div className="flex justify-center gap-2 flex-wrap">
                        {colors.map((color) => (
                            <div
                                key={color}
                                onClick={() => handleColorClick(color)}
                                className={`w-8 h-8 rounded-full cursor-pointer transition-all duration-200 ease-in-out
                                        ${selectedColor === color ? "border-4 border-gray-200" : ""}
                                        `}
                                style={{backgroundColor: color}}
                            ></div>
                        ))}
                    </div>

                </DialogContent>
                <DialogActions sx={{gap: 1}}>
                    <Button variant="outlined" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={() => {
                        handleNotebookSubmit();
                        handleClose();
                    }}>
                        Done
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
