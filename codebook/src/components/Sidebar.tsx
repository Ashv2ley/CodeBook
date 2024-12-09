import {Link, useLocation} from "react-router";

export default function Sidebar() {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div className="bg-darkBlue border border-gray-700 flex flex-col p-10 w-fit h-screen items-center font-montserrat gap-10">
            <h1 className={"text-4xl font-light"}>Codebook</h1>
            <div className="flex flex-col gap-5">
                {location.pathname === "/" ? (<Link to={"/"} className={"font-medium text-lg bg-lightBlue hover:bg-lightBlue/80 p-3 px-8 rounded-lg"}>Documents</Link>) : (<Link to={"/"} className={"font-medium text-lg bg-transparent p-3 px-8 rounded-lg"}>Documents</Link>)}
                {location.pathname === "/bookmarks" ? (<Link to={"/bookmarks"} className={"font-medium text-lg bg-lightBlue hover:bg-lightBlue/80 p-3 px-8 rounded-lg"}>Bookmarks</Link>) : (<Link to={"/bookmarks"} className={"font-medium text-lg bg-transparent p-3 px-8 rounded-lg"}>Bookmarks</Link>)}
                {location.pathname === "/shared" ? (<Link to={"/shared"} className={"font-medium text-lg bg-lightBlue hover:bg-lightBlue/80 p-3 px-8 rounded-lg"}>Shared</Link>) : (<Link to={"/shared"} className={"font-medium text-lg bg-transparent p-3 px-8 rounded-lg"}>Shared</Link>)}
                {location.pathname === "/trash" ? (<Link to={"/trash"} className={"font-medium text-lg bg-lightBlue hover:bg-lightBlue/80 p-3 px-8 rounded-lg"}>Trash</Link>) : (<Link to={"/trash"} className={"font-medium text-lg bg-transparent p-3 px-8 rounded-lg"}>Trash</Link>)}
            </div>
        </div>
    );
}