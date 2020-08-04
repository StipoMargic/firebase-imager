import { useState, useEffect } from 'react';
import { imageFirestore, imageStorage, timestamp } from '../config/firebase';

export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storage = imageStorage.ref(file.name);
    const collection = imageFirestore.collection('images');

    storage.put(file).on(
      'state_changed',
      (snap) => {
        setProgress((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storage.getDownloadURL();
        const timeStamp = timestamp();

        await collection.add({ url, timeStamp });

        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = imageFirestore.collection(collection).onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsub();
  }, [collection]);

  return { docs };
};
