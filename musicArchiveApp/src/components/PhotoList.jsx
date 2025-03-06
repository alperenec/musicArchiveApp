import React from 'react';
import { useAddPhotoMutation, useFetchPhotosQuery } from '../store';
import PhotoListItem from './PhotoListItem';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';

function PhotoList({ album }) {
  const { data, isError, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  const handlePhotoAdd = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: '100%', height: '200px', bgcolor: '#FFB6C1' }} />
    );
  } else if (isError) {
    content = <div style={{ color: 'red' }}>Hata Var</div>;
  } else {
    content = data.map((photo) => {
      return <div className="component-container"><PhotoListItem key={photo.id} photo={photo} /></div>;
    });
  }

  return (
    <div style={{ backgroundColor: '#FFB6C1', borderRadius: '15px', padding: '10px' }}>
      <div className="topArrangement">
        <h3 style={{ color: '#fff' }}>{album.title} Fotoları</h3>
        <Button variant="contained" onClick={handlePhotoAdd} disabled={results.isLoading}>
          {results.isLoading ? <CircularProgress size={24} /> : <span>Foto Ekle+</span>}
        </Button>
      </div>
      <div className="fotoDiv">{content}</div>
    </div>
  );
}

export default PhotoList;
