import PageOutline from "../components/PageOutline.tsx";
import { FolderOpen, Notebook, Plus, SquarePen } from "lucide-react";
import DropdownButton from "../components/DropdownButton.tsx";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faBook } from "@fortawesome/free-solid-svg-icons";
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
    const [folder, setFolder] = useState(false);
    const [notebook, setNotebook] = useState(false);
    const [selectedColor, setSelectedColor] = useState("#74C0FC");
    const navigate = useNavigate();

    const colors = [
        "#FF6768", "#FF9138", "#FFDE59", "#8DDB6D", "#74C0FC", "#C6B1FA", "#FEC5CE", "#C2C2C2", "#242424",
    ];

    const handleClose = () => {
        setFolder(false);
        setNotebook(false);

    };

    const handleColorClick = (color: string) => {
        setSelectedColor(color);
    };

    function handleFolderClick() {
        setSelectedColor("#74C0FC")
        setFolder(true);
    }

    function handleNotebookClick() {
        setSelectedColor("#74C0FC")
        setNotebook(true);
    }

    function handleNoteClick() {
        navigate("/note");
    }

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
                open={folder}
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
                    {/* Folder Icon */}
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
                        placeholder={"Untitled"}
                        variant="outlined"
                        sx={{
                            width: "100%",
                            maxWidth: "300px", // Limits width
                            "& .MuiOutlinedInput-root": {
                                height: "40px",

                            },
                        }}
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
                    <Button variant="contained" onClick={handleClose}>
                        Done
                    </Button>
                </DialogActions>
            </BootstrapDialog>

            {/*Notebook Popup*/}
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={notebook}
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
                        placeholder={"Untitled"}
                        variant="outlined"
                        sx={{
                            width: "100%",
                            maxWidth: "300px", // Limits width
                            "& .MuiOutlinedInput-root": {
                                height: "40px",

                            },
                        }}
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
                    <Button variant="contained" onClick={handleClose}>
                        Done
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
