import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import api from '../../../services/api';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);
    const valoresIniciais = {
        nome:'',
        descricao: '',
        cor: ''
    }

    const { 
        values, 
        loading, 
        handleChange, 
        handleSubmit, 
    } = useForm(valoresIniciais);

    const enviarCategoria = () => {
        setCategorias([
            ...categorias,
            values
        ]);
    }

    useEffect(() => {
        // const URL_CATEGORIA = window.location.hostname.includes('localhost') 
        //     ? 'http://localhost:8080/categorias'
        //     : 'https://devflix-ten.herokuapp.com/categorias'
        api.get('categorias').then(async (response) => {
            const dataCategorias = await response.data;
            setCategorias(dataCategorias);
            return;
        });
    },[]);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria:</h1>

            <form onSubmit={handleSubmit(enviarCategoria)}>
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição do Video"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}                   
                />

                <FormField
                    label='Cor'
                    name="cor"
                    type="color"
                    value={values.cor}
                    onChange={handleChange}
                />
                <Button>
                    Cadastrar
                </Button>
                {categorias.length === 0 && (
                    <div>
                        {loading === true ? "Enviando dados..." : ""}
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