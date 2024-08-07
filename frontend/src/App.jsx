import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ArtworkList from './components/ArtworkList';
import ArtworkForm from './components/ArtworkForm';
import ArtworkEdit from './components/ArtworkEdit';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='main'>
        <Routes>
          <Route exact path='/' element={<ArtworkList />} />
          <Route path='/add' element={<ArtworkForm />} />
          <Route path='/edit/:id' element={<ArtworkEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
