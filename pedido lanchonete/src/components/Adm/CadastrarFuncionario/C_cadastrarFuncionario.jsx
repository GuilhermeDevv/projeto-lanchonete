import React, { useEffect, useRef, useState } from 'react';

import { ContainerFuncionario, ContentFuncionario, FormFuncionario } from './style';

export function C_cadastrarFuncionario() {
    const [radio, setRadio] = useState('');
    const inputRef = useRef(null);
    useEffect(() => {
        const input = inputRef.current;

        function handleInput(event) {
            const cpf = event.target.value;
            const regex = /\d{3}\.\d{3}\.\d{3}-\d{2}/;

            // Adiciona os caracteres "." e "-" no input
            input.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

        }

        input.addEventListener('input', handleInput);

        return () => {
            input.removeEventListener('input', handleInput);
        };
    }, []);

    function handleChange(event) {
        setRadio(event.target.value);
    }

    return (
        <ContainerFuncionario>
            <ContentFuncionario>
                <h1>Cadastrar funcionários</h1>
                <FormFuncionario>
                    <div>
                        <label>Nome</label>
                        <input type="text" placeholder='Nome completo' />
                    </div>
                    <label>Sexo</label>
                    <span>
                        <label>Feminino</label>
                        <input
                            type="radio"
                            value="F"
                            checked={radio === 'F'}
                            onChange={handleChange}
                        />
                        <label>  Masculino</label>
                        <input
                            type="radio"
                            value="M"
                            checked={radio === 'M'}
                            onChange={handleChange}
                        />
                    </span>
                    <div>
                        <label>CPF</label>
                        <input type="text" ref={inputRef} id="cpf" name="cpf" placeholder='000-000-000.00' />
                    </div>
                    <div>
                        <label>IDADE</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor='cargo' >Cargo</label>
                        <select name="cargo" id="cargo">
                            <option value="adm">Administrador</option>
                            <option value="caixa">Caixa</option>
                            <option value="garcom">Garçom</option>
                            <option value="entregador">Entregador</option>
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                </FormFuncionario>
            </ContentFuncionario>
        </ContainerFuncionario>
    );
}

