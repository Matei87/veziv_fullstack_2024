import { useState, useEffect } from 'react';
import ArtworkElement from './ArtworkElement';
import api from '../services/api';

const ArtworkList = () => {
  const [artworks, setArtworks] = useState([]);
  const [status, setStatus] = useState('all');

  const fetchArtworks = async () => {
    const response = await api.getArtworks();
    setArtworks(response.data);
  };

  useEffect(() => {
    fetchArtworks();
  }, []);

  const handleDelete = async (id) => {
    await api.deleteArtwork(id);
    const response = await api.getArtworks();
    setArtworks(response.data);
  };

  return (
    <div className='container'>
      <h1>Artwork List</h1>
      <select
        name='status'
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value='all'>All</option>
        <option value='displayed'>Displayed</option>
        <option value='hidden'>Hidden</option>
      </select>
      <ul>
        {status === 'all'
          ? artworks.map(({ _id, title, description, clientLink, image }) => (
              <ArtworkElement
                key={_id}
                _id={_id}
                title={title}
                description={description}
                clientLink={clientLink}
                image={image}
                handleDelete={handleDelete}
              />
            ))
          : artworks
              .filter((element) => element.status === status)
              .map(({ _id, title, description, clientLink, image }) => (
                <ArtworkElement
                  key={_id}
                  _id={_id}
                  title={title}
                  description={description}
                  clientLink={clientLink}
                  image={image}
                  handleDelete={handleDelete}
                />
              ))}
      </ul>
    </div>
  );
};

export default ArtworkList;
