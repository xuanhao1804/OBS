import axios from "axios";

const API_URL = "https://backend.sachtructuyen.shop/api/v1/slider";

const getAllSliders = () => {
    return axios.get(API_URL);
}

const deleteSlider = (sliderId) => {
    return axios.delete(API_URL + '/' + sliderId);
}

const addSlider = (slider) => {
    return axios.post(API_URL, slider);
}

export {getAllSliders, deleteSlider, addSlider};