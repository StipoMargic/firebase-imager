import React from 'react';
import { useStorage } from '../hooks/firebase';

const ProgressBar = ({ image, setImage }) => {
  const { url, progress } = useStorage(image);
  console.log(progress);
  return <div></div>;
};

export default ProgressBar;
