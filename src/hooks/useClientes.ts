import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {

    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])//obtendo clientes do repositorio


    useEffect(obterTodos, []) // inicializar estado junto com a inicializacao da pagina

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
        console.log(cliente)
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    function novoCliente(cliente: Cliente) {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela,
    }

}