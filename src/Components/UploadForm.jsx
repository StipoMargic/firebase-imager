import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const formChanged = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ['image/png', 'image/gif', 'image/jpeg'];

    if (file && allowedTypes.includes(file.type)) {
      setImage(file);
      setError(null);
    } else {
      setImage(null);
      setError('Image is wrong type!');
    }
  };

  return (
    <form>
      <label>
        <input type='file' onChange={formChanged} />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {image && <ProgressBar image={image} setImage={setImage} />}
      </div>
    </form>
  );
};

export default UploadForm;
