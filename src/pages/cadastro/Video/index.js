import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({ titulo }) => titulo);
    const {
        handleChange, 
        values, 
        handleSubmit,
        loading
    } = useForm({
        titulo: '',
        url: '',
        categoria: ''
    });

    const cadastrarVideo = () => {
        const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
        });

        videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id

        }).then(() => {
            history.push('/');
            alert('Video cadastrado!!!')
        });
    };

    useEffect(() => {
        categoriasRepository
        .getAll()
        .then((categoriasFromServer) => {
            setCategorias(categoriasFromServer)
            //console.log(categoriasFromServer)
        });
    },[]);

    return (
        <PageDefault>
            <h1>Cadastro de Video</h1>
            <form onSubmit={handleSubmit(cadastrarVideo)}>
                <FormField 
                    label="Título do Vídeo"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />
                <FormField 
                    label="URL"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />
                <FormField 
                    label="Categoria"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                    suggestions={ categoryTitles }
                />
                <Button type="submit">
                    Cadastrar
                </Button>
            </form>

            <Link to="/cadastro/categoria">
                Link para cadastro
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;