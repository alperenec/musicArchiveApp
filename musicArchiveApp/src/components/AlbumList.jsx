import React from 'react';
import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
import AlbumListItem from './AlbumListItem';

function AlbumList({ user }) {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAlbumAdd = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton variant="rectangular" sx={{ width: '100%', height: '200px', bgcolor: '#98FB98' }} />;
  } else if (isError) {
    content = <div style={{ color: 'red' }}>Hata Var</div>;
  } else {
    content = data.map((album) => {
      return <div className="component-container"><AlbumListItem key={album.id} album={album} /></div>;
    });
  }

  return (
    <div style={{ backgroundColor: '#98FB98', borderRadius: '15px', padding: '10px' }}>
      <div className="topArrangement">
        <h3 style={{ color: '#fff' }}>{user.name} Albümü</h3>
        <Button variant="contained" onClick={handleAlbumAdd} disabled={results.isLoading} aria-label="Albüm Ekle">
          {results.isLoading ? <CircularProgress size={24} /> : <span>Albüm Ekle+</span>}
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumList;
