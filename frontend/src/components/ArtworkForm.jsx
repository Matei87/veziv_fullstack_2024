import { useState } from 'react';
import api from '../services/api';
import convertToBase64 from '../services/convertToBase64.js';

const ArtworkForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    clientLink: '',
    status: 'displayed',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setFormData({ ...formData, image: base64 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', formData.title);
    form.append('description', formData.description);
    form.append('clientLink', formData.clientLink);
    form.append('status', formData.status);
    if (formData.image) {
      form.append('image', formData.image);
    }
    await api.createArtwork(form);
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        value={formData.title}
        onChange={handleChange}
        placeholder='Title'
        required
      />
      <textarea
        name='description'
        value={formData.description}
        onChange={handleChange}
        placeholder='Description'
        required
      ></textarea>
      <input type='file' name='image' onChange={handleFileChange} />
      <input
        type='text'
        name='clientLink'
        value={formData.clientLink}
        onChange={handleChange}
        placeholder='Client Link'
        required
      />
      <select name='status' value={formData.status} onChange={handleChange}>
        <option value='displayed'>Displayed</option>
        <option value='hidden'>Hidden</option>
      </select>
      <button type='submit'>Save</button>
    </form>
  );
};

export default ArtworkForm;
