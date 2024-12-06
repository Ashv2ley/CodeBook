import {Link} from "react-router";

export default function Sidebar() {
    return (
        <div className="bg-darkBlue flex flex-col justify-center p-10 w-fit h-screen font-montserrat">
            <h1 className={"text-4xl font-light"}>Codebook</h1>
            <div className="flex flex-col">
                <Link to={"/"} className={"font-medium text-xl"}>Documents</Link>
                <Link to={"/bookmarks"} className={"font-medium text-xl"}>Bookmarks</Link>
                <Link to={"/trash"} className={"font-medium text-xl"}>Trash</Link>
            </div>


        </div>
    );
}