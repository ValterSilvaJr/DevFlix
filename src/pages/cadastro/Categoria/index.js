import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

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

    useEffect(() => {
        const URL_CATEGORIA = 'http://localhost:8080/categorias'
        fetch(URL_CATEGORIA).then(async (response) => {
            const data = await response.json();
            console.log(response);
            setCategorias(data);
            return;
        });
    },[]);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria:</h1>

            <form onSubmit={handleSubmit}>
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={state.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição do Video"
                    type="textarea"
                    name="descricao"
                    value={state.descricao}
                    onChange={handleChange}                   
                />

                <FormField
                    label='Cor'
                    name="cor"
                    type="color"
                    value={state.cor}
                    onChange={handleChange}
                />
                <Button>
                    Cadastrar
                </Button>
                {categorias.length === 0 && (
                    <div>
                        Loading...
                    </div>
                )}
            </form>
            <ul>
                {categorias.map((categoria, index) => {
                    return(
                        <li key={`${categoria} ${index}`}>
                            {categoria.titulo}
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