import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setIsButtonVisible(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsButtonVisible(true);
  };

  return (
    <div className="App">
      {isButtonVisible && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          marginBottom: '1rem',
          maxWidth: '100%',
          padding: '0 15px',
          width: 'auto'
        }}>
          <button 
            onClick={handleModalOpen}
            className="btn btn-primary"
          >
            Add new posts
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <PostForm onClose={handleModalClose} />
          </div>
        </div>
      )}
      
      <PostList />
    </div>
  );
}

export default App;