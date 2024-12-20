import noBookmarksImage from "../assets/no_bookmarks.png"
import noDocumentsImage from "../assets/no_documents.png"
import noSharedImage from "../assets/no_shared.png"
import noTrash from "../assets/no_trash.png"
import {Bookmark} from "lucide-react"
import EmptyPage from "./EmptyPage.tsx";
import DocumentCard from "./DocumentCard.tsx";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function PageHeader(props:{header:string, button1:React.ReactNode, button2:React.ReactNode}) {

    const storedUserData = localStorage.getItem("userData");
    const userData = JSON.parse(storedUserData);
    const [style1, setStyle1] = useState("px-8 pt-12 w-full h-screen flex flex-col items-center justify-center")
    const [style2, setStyle2] = useState("flex flex-wrap flex-grow items-center")

    useEffect(()=>{
        let name = userData[props.header]
        if (props.header == "Documents") {
            name = userData[props.header].allDocuments
        }

        if (Object.keys(name).length !== 0) {
            setStyle1("px-8 pt-12 w-full h-screen");
            setStyle2("flex flex-wrap gap-16 py-10 max-w-6xl mx-10");
        }
    })


    return (
        <div className={style1}>
            <div className={"w-full"}>
                <div className="flex py-2 justify-end gap-3 items-center">
                    <h1 className={"text-4xl font-medium w-full"}>{props.header}</h1>
                    {props.button1}
                    {props.button2}
                </div>
                <hr/>
            </div>
            <div className={style2}>
                {props.header === "Bookmarks" && (
                    Object.keys(userData.Bookmarks).length === 0 ? (
                        <EmptyPage
                            image={noBookmarksImage}
                            alt={"Image of empty bookmarks"}
                            header={"Find things quicker with Bookmarks"}
                            description={
                                <>
                                    Simply tap <Bookmark size={20}/> to add documents, folders, or bookmark a page
                                </>
                            }
                        />
                    ) : null

                )}

                {props.header === "Documents" && (
                    Object.keys(userData.Documents.allDocuments).length === 0 ? (
                        <EmptyPage
                            image={noDocumentsImage}
                            alt={"Image of empty documents"}
                            header={"Ready to fill your library with life?"}
                            description={
                                "Add a notebook, create a folder, or write a quick note to get started"
                            }
                        />
                    ) : (
                        userData.Documents.allDocuments.map((document) => (
                            <DocumentCard
                                key={document.name}
                                Icon={
                                    <FontAwesomeIcon
                                        icon={document.icon.props.icon}
                                        style={{fontSize: "8rem", color: document.selectedColor}}
                                    />
                                }
                                itemDate={document.createDate}
                                itemTime={document.createTime}
                                itemName={document.name}
                                itemType={document.type}
                            />
                        ))
                    )
                )}

                {props.header === "Shared" && (
                    Object.keys(userData.Shared).length === 0 ? (
                        <EmptyPage
                            image={noSharedImage}
                            alt={"Image of empty shared files"}
                            header={"No shared documents"}
                            description={"Documents shared by you or others will appear here"}
                        />
                    ) : null

                )}

                {props.header === "Trash" && (
                    Object.keys(userData.Trash).length === 0 ? (
                        <EmptyPage
                            image={noTrash}
                            alt={"Image of empty trash can"}
                            header={"Trash is empty."}
                            description={""}
                        />
                    ) : null
                )}
            </div>
        </div>
    )
}
