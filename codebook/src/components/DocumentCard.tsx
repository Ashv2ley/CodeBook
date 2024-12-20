import * as React from "react";
import {Link} from "react-router";
import {useState, useEffect} from "react";

export default function DocumentCard(props:{itemName:string, itemDate:string, itemTime:string,Icon: React.ReactNode, itemType:string}) {
    const [page, setPage] = useState("");

    useEffect(() => {
        if (props.itemType === "note"){
            setPage(`/note/${props.itemName}`);
        }else if(props.itemType === "notebook"){
            setPage(`/notebook/${props.itemName}`);
        }else{
            setPage(`/folder/${props.itemName}`);
        }
    }, [props]);


    return (
        <Link to={page} className="flex flex-col items-center justify-center text-center">
            <span>{props.Icon}</span>
            <div className="flex flex-col py-2">
                <h1>{props.itemName}</h1>
                <p className={"text-gray-400 text-xs"}>{props.itemDate} at {props.itemTime}</p>
            </div>

        </Link>
    );
}