import { useState, useEffect } from 'react';
import { imageFirestore, imageStorage } from '../config/firebase';

export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storage = imageStorage.ref(file.name);

    storage.put(file).on(
      'state_changed',
      (snap) => {
        setProgress((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (err) => {
        setError(err);
      },
      async () => {
        setUrl(storage.getDownloadURL());
      }
    );
  }, [file]);

  return { progress, error, url };
};
