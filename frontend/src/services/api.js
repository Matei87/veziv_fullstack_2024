import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getArtwork = (id) => api.get(`/artworks/${id}`);
export const getArtworks = () => api.get('/artworks');
export const createArtwork = (data) =>
  api.post('/artworks', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
export const updateArtwork = (id, data) =>
  api.put(`/artworks/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
export const deleteArtwork = (id) => api.delete(`/artworks/${id}`);

export default {
  getArtwork,
  getArtworks,
  createArtwork,
  updateArtwork,
  deleteArtwork,
};
