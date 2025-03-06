import React from 'react';
import AlbumList from './AlbumList';
import ExpandablePanel from './ExpandablePanel';
import { FaTrash } from 'react-icons/fa';
import { useRemoveUserMutation } from '../store';
import CircularProgress from '@mui/material/CircularProgress';

function UsersListItem({ user }) {
  const [removeUser, results] = useRemoveUserMutation();

  const handleClick = () => {
    removeUser(user);
  };

  const header = (
    <>
      <button
        style={{ marginRight: '30px', border: 'none', cursor: 'pointer' }}
        onClick={handleClick}
        disabled={results.isLoading}
        aria-label="Sil"
      >
        {results.isLoading ? <CircularProgress style={{ width: '20px', height: '20px' }} /> : <FaTrash />}
      </button>
      {user.name}
    </>
  );
  return (
    <div className="component-container">
      <ExpandablePanel header={header} style={{ backgroundColor: '#98FB98' }}>
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  );
}

export default UsersListItem;
