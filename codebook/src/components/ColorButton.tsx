
export default function ColorButton(props:{color:string}) {
    return (
        <div className="h-8 w-8 rounded-full cursor-pointer hover:"
             style={{ backgroundColor: props.color }}></div>
    );
};