import React, { useEffect } from 'react';
import { useStorage } from '../hooks/firebase';

const ProgressBar = ({ image, setImage }) => {
  const { url, progress } = useStorage(image);

  useEffect(() => {
    if (url) {
      setImage(null);
    }
  }, [url, setImage]);

  return <div className='progress-bar' style={{ width: `${progress}%` }}></div>;
};

export default ProgressBar;
