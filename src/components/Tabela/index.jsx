import './tabela.css'
const Tabela = () => {

    return(
        <div className='container fundo-container' >
            <table >
                <thead >
                    <tr>
                        <th>
                            IMC
                        </th>
                        <th>
                            Classificação
                        </th>
                    </tr>
                </thead>
                <tbody className='corpo'>
                    <tr>
                        <td>
                            menos de 17
                        </td>
                        <td>
                            Muito abaixo do peso
                        </td>
                    </tr>
                    <tr>
                        <td>
                            De 17 a 18.49
                        </td>
                        <td>
                            Abaixo do peso
                        </td>
                    </tr>
                    <tr>
                        <td>
                            De 18.50 a 24.99
                        </td>
                        <td>
                            Peso normal
                        </td>
                    </tr>
                    <tr>
                        <td>
                            De 25.00 a 29.99
                        </td>
                        <td>
                            Sobrepeso
                        </td>
                    </tr>
                    <tr>
                        <td>
                            De 30.00 a 34.99
                        </td>
                        <td>
                            Obesidade Grau I
                        </td>
                    </tr>
                    <tr>
                        <td>
                            De 35.00 a 39.99
                        </td>
                        <td>
                            Obesidade Grau II (severa)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Acima de 40.00
                        </td>
                        <td>
                            Obesidade Grau III (Morbida)
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tabela;