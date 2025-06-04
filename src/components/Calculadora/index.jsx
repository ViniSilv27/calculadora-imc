import React, { useState, useEffect } from 'react';
import { PatternFormat, NumericFormat } from 'react-number-format';
import './calculadora.css'

function CalculadoraIMC() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');    
    const [imc, setImc] = useState(0);     
    const [mostrarResultado, setMostrarResultado] = useState(false); 
    const [situacao, setSituacao] = useState('');

    // Função para lidar com a mudaçna do peos
    const handlePesoChange = (values) => {
        setPeso(values.value); 
    };


    const calcularImcValor = () => {
        const alturaFloat = parseFloat(altura); 
        const pesoFloat = parseFloat(peso);     

        if (alturaFloat > 0 && pesoFloat > 0) {
            const resultado = (pesoFloat / (alturaFloat * alturaFloat)).toFixed(2);
            return resultado;
        }
        return '';
    };

    const handleButtonClick = () => {
        if (mostrarResultado) {
            // Se o resultado já está visível, o botão serve para "Limpar"
            setAltura('');
            setPeso('');
            setImc(0);
            setSituacao('');
            setMostrarResultado(false); // Oculta o resultado
        } else {
            // Se o resultado não está visível, o botão serve para "Calcular IMC"
            setMostrarResultado(true); // Exibe o resultado e aciona o useEffect
        }
    }

    useEffect(() => {
    if (mostrarResultado) { 
        const novoImc = calcularImcValor();
        if (novoImc) { 
            const imcNumerico = parseFloat(novoImc);
            setImc(imcNumerico); 
            determinarSituacao(imcNumerico); 
        } else {
            setSituacao('Por favor, insira valores válidos para altura e peso.');
            setImc(0); 
        }

    } else {
        setSituacao(''); 
        setImc(0); 
    }
}, [mostrarResultado, altura, peso]); 

    
    

    const determinarSituacao = (imcValor) => { 
        if (imcValor < 17) {
            setSituacao('Muito abaixo do peso');
        }else if (imcValor >= 17 && imcValor < 18.50){
            setSituacao("Abaixo do Peso")
        }else if (imcValor >= 18.5 && imcValor < 25){
            setSituacao("Peso Normal")
        }else if (imcValor >= 25 && imcValor < 30){
            setSituacao("Sobrepeso")
        }else if (imcValor >= 30 && imcValor < 35){
            setSituacao("Obesidade Grau I")
        }else if (imcValor >= 35 && imcValor < 40){
            setSituacao("Obesidade Grau II (Severa)")
        }else if (imcValor >= 40 ){
            setSituacao("Obesidade Grau III (Morbida)")
        }
    };



    return (
        <header>
            <div className='container '>
                <h1 className='titulo'>Calcule seu IMC</h1>
                <form className='formulario'>
                    <label className='formulario-label'>
                        Altura (m):
                        <PatternFormat
                        className='formulario-input'
                            format="#.##"
                            value={altura}
                            onChange={(e) => setAltura(e.target.value)} 
                            allowEmptyFormatting 
                        />
                    </label>
                    <label className='formulario-label'>
                        Peso (kg):
                        <NumericFormat
                            className='formulario-input'
                            id="peso"
                            name="peso"
                            value={peso}
                            onValueChange={handlePesoChange} 
                            decimalScale={1} 
                            fixedDecimalScale={true} 
                            allowNegative={false} 
                            isAllowed={(values) => {
                                const { floatValue } = values;
                                if (floatValue === undefined || floatValue === null) return true;
                                return floatValue >= 0 && floatValue <= 999.9;
                            }}
                        />
                    </label>
                    <button className='button' type="button" onClick={handleButtonClick}>
                        {mostrarResultado ? 'Limpar' : 'Calcular IMC'}
                    </button>
                </form>

                {mostrarResultado && ( 
                    <div className='toggleResultado'>
                        <h3> O seu IMC é: {imc !== 0 ? imc : 'Insira valores válidos'}</h3>
                        <p>{situacao}</p> 
                    </div>
                )}
            </div>
        </header>

    );
}

export default CalculadoraIMC;