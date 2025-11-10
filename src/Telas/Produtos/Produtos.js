export default function Produtos(){
    return(
    <div>
        <h1>Página de Produtos</h1>
        <form>
                <label>Descrição do produto</label>
                <input name="nome"/>
                <br/>
                <label>Valor de Venda</label>
                <input name="valorVenda" type="number" step="0.01"/>
                <br/>
                <label>Código de barras</label>
                <input name="codigoBarras" type="text"/>
                <br/>
                <label>Estoque</label>
                <input name="estoque" type="number" />
                <br/>
                <button>Cadastrar Produto</button>
        </form>
        <br/>
        <br/>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Valor de Venda</th>
                    <th>Código de barras</th>
                    <th>Quantidade em estoque</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                 <tr>
                    <td>1</td>
                    <td>Pistão forjado</td>
                    <td>R$ 152,30</td>
                    <td>7896541238</td>
                    <td>10</td>
                    <td>
                        <button>Editar</button>
                        <button>Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}