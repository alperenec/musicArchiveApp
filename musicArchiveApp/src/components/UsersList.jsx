import React from 'react';
import { useFetchUsersQuery, useAddUserMutation } from '../store';
import Skeleton from '@mui/material/Skeleton';
import UsersListItem from './UsersListItem';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function UsersList() {
  const { data, isError, isFetching } = useFetchUsersQuery();
  const [addUser, results] = useAddUserMutation();

  const handleUserAdd = () => {
    addUser();
  };

  let content;
  if (isFetching) {
    content = <Skeleton variant="rectangular" sx={{ width: '100%', height: '600px', bgcolor: '#87CEEB' }} />;
  } else if (isError) {
    content = <div style={{ color: 'red' }}>Hata Var</div>;
  } else {
    content = data.map((user) => {
      return <div className="component-container"><UsersListItem key={user.id} user={user} /></div>;
    });
  }

  return (
    <div style={{ backgroundColor: '#87CEEB', borderRadius: '15px', padding: '10px' }}>
      <div className="topArrangement">
        <h1 style={{ fontSize: '20px', color: '#fff' }}>Kişiler</h1>
        <Button variant="contained" onClick={handleUserAdd} disabled={results.isLoading}>
          {results.isLoading ? <CircularProgress size={24} /> : <span>Kişi Ekle+</span>}
        </Button>
      </div>
      {content}
    </div>
  );
}

export default UsersList;
