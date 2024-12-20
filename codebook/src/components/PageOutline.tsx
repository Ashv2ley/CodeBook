import Sidebar from "./Sidebar.tsx";
import PageHeader from "./PageHeader.tsx";
import emptyImage from "../assets/no_bookmarks.png"

export default function PageOutline(props: {pageName: string, button1:React.ReactNode, button2:React.ReactNode}) {
    return (
        <div className={"flex"}>
            <Sidebar/>
            <PageHeader header={props.pageName} button1={props.button1} button2={props.button2}/>

        </div>
    );
}