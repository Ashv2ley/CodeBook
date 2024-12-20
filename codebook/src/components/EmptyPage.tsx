
export default function EmptyPage(props:{image:any, alt:string, header:string, description:string}) {
    return (
        <div className={"flex flex-col gap-2"}>
                <img src={props.image} alt={props.alt}/>
                <div className={"flex flex-col gap-1 items-center justify-center "}>
                    <h1 className={"text-xl font-medium"}>{props.header}</h1>
                    <p className={"flex items-center py-1 gap-1 text-gray-400"}>{props.description}
                    </p>
                </div>
            </div>
    )
};