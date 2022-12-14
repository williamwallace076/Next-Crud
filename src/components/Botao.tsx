interface BotaoProps{
    cor?:'green' | 'blue' | 'gray' | 'red'
    className?:string
    children:any
    onClick?: () => void
}

export default function(props: BotaoProps){
    const cor = props.cor
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>

    )
}