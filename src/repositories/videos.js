import api from '../services/api';

const URL_VIDEOS = "videos";

const create = (objetoVideo) => {
        return api
            .post(URL_VIDEOS + "?_embed=videos", objetoVideo, {
                headers: {
                    'Content-type': 'application/json'
                },
            })
            .catch(error => {
                const err = error.response.status;
                return err;
            });
};

export default {
    create,
}