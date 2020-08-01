import api from '../services/api';

const URL_CATEGORIAS = "categorias";

const getAll = (err) => {
    return api
        .get(URL_CATEGORIAS)
        .then(async (response) => {
            const dataVideos = await response.data;
            return dataVideos;
        })
        .catch(error => {
            err = error.response.status;
            return err;
        });
};

const getAllWithVideos = (err) => {
        return api
            .get(URL_CATEGORIAS + "?_embed=videos")
            .then(async (response) => {
                const dataVideos = await response.data;
                return dataVideos;
            })
            .catch(error => {
                err = error.response.status;
                return err;
            });
};

export default {
    getAll,
    getAllWithVideos,
}