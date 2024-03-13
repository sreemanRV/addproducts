import React, { useState } from 'react';
import 'firebase/database';
import axios from 'axios';

const DeleteDataComponent = () => {
  const [dataIdToDelete, setDataIdToDelete] = useState('');

  const handleDelete = () => {
    if (!dataIdToDelete) {
      console.error("Please enter a data ID to delete");
      return;
    }
    const databaseURL = 'https://your-firebase-project-id.firebaseio.com'; // Replace with your Firebase Realtime Database URL
    const dataPath = `products/${dataIdToDelete}.json`; // Replace with your data path
    axios.delete(`${databaseURL}/${dataPath}`)
      .then(() => {
        console.log("Data deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div>
      {/* Input for the data ID to delete */}
      <input
        type="text"
        placeholder="Enter Data ID to delete"
        value={dataIdToDelete}
        onChange={(e) => setDataIdToDelete(e.target.value)}
      />
      {/* Button to trigger deletion */}
      <button onClick={handleDelete}>Delete Data</button>
    </div>
  );
};

export default DeleteDataComponent;
