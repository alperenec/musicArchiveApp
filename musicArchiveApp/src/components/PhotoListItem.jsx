import React from 'react';
import { useRemovePhotoMutation } from '../store';
import { RiDeleteBin6Line } from 'react-icons/ri';
import CircularProgress from '@mui/material/CircularProgress';

function PhotoListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };
  return (
    <div
      style={{ margin: '20px', cursor: 'pointer', position: 'relative', borderRadius: '10px', overflow: 'hidden' }}
      onClick={handleRemovePhoto}
    >
      <img src={photo.url} alt="" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
      <div className="deleteCircularDiv">
        {results.isLoading ? (
          <CircularProgress style={{ width: '20px', height: '20px' }} />
        ) : (
          <RiDeleteBin6Line />
        )}
      </div>
    </div>
  );
}

export default PhotoListItem;
