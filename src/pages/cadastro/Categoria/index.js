import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        nome:'',
        descricao: '',
        cor: ''
    }

    const [state, setState] = useState(valoresIniciais);

    function setValue(key, value){
        setState({
            ...state,
            [key]: value
        });
    }
    
    function handleChange(ChangeEvent){
        const { value } = ChangeEvent.target;
        setValue(
            ChangeEvent.target.getAttribute('name'), 
            value
        );
    }

    function handleSubmit(FormEvent){
        FormEvent.preventDefault();
        setCategorias([
            ...categorias,
            state
        ]);
        setState(valoresIniciais)
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {state.nome}</h1>

            <form onSubmit={handleSubmit}>
                <FormField
                    inputType='input'
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={state.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição do Video"
                    type="text"
                    name="descricao"
                    value={state.descricao}
                    onChange={handleChange}                   
                />

                <FormField
                    // style={{ background: state.cor}}
                    label='Cor'
                    inputType="input"
                    name="cor"
                    type="color"
                    value={state.cor}
                    onChange={handleChange}
                />

                {/* <fieldset>
                    <label>Descrição:</label>
                    <textarea
                        name="descricao"
                        type="text"
                        value={state.descricao}
                        onChange={handleChange}
                    />
                </fieldset> */}
                {/* <fieldset style={{ background: state.cor}}>
                    <label htmlFor="cor">Cor:</label>
                    <input
                        name="cor"
                        type="color"
                        value={state.cor}
                        onChange={handleChange}
                    />
                </fieldset> */}
                <fieldset>
                    <button>Cadastrar</button>
                </fieldset>
            </form>
            <ul>
                {categorias.map((categorias, index) => {
                    return(
                        <li key={`${categorias} ${index}`}>
                            {categorias.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;