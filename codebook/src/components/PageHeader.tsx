

export default function PageHeader(props:{header:string, button1:React.ReactNode, button2:React.ReactNode}) {
    return (
        <div className={"px-8 py-16 w-full"}>
            <div className="flex py-2 justify-end gap-3 items-center">
                <h1 className={"text-4xl font-medium w-full"}>{props.header}</h1>
                {props.button1}
                {props.button2}

            </div>
            <hr/>
        </div>
    )
}
