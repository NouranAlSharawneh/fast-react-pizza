import { useState } from 'react';
import Button from '../../ui/Button.jsx';
import { useDispatch } from 'react-redux';
import { updateUserName } from './userSlice.js';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // a gurd clause
    if (!username) return;

    dispatch(updateUserName(username));
    naviagte('./menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="input mb-8 w-72"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
