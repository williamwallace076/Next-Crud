import { useState } from "react";
import Cliente from "../core/Cliente"
import Entrada from "./Entrada";
import Botao from "./Botao";


interface FormularioProps{
    cliente: Cliente
    clienteMudou?:(cliente: Cliente)=>void
    cancelado?: ()=> void
}

export default function Formulario(props:FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade?? 0)
    return(
        <div>
            {id ? (
                <Entrada somenteLeitura 
                texto="Código" 
                valor={id}/>
            ):false}

            <Entrada 
            texto="Nome" 
            valor={nome}
            valorMudou={setNome}
            className="mb-2"
            />
            <Entrada texto="Idade" 
            tipo="number"
             valor={idade}
             valorMudou={setIdade}
             className="mb-2"
             />
             <div className="flex justify-end mt-3"> 
                <Botao cor="blue" className="mr-2" onClick={()=>props.clienteMudou?.(new Cliente(nome,idade,id))}>
                    {id?'alterar' : "salvar"}
                </Botao>
                <Botao onClick={props.cancelado } cor='gray'>
                    Cancelar
                </Botao>
             </div>
        </div>
    )
}