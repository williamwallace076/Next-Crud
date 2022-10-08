import { table } from 'console'
import Head from 'next/head'
import Image from 'next/image'
import Botao from '../components/Botao'
import Formulario from '../components/formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import useClientes from '../hooks/useClientes'

export default function Home() {

  const {
    cliente,
     clientes,
      novoCliente,
    salvarCliente,
     selecionarCliente, 
    excluirCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
    flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white
    `}>
      <Layout titulo="Cadastro simples">
        {tabelaVisivel? (
          <>
            <div className='flex justify-end'>
              <Botao cor='green' className='mb-4' onClick={() => novoCliente(cliente)}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}