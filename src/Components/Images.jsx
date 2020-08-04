import React from 'react';
import { useFirestore } from '../hooks/firebase';

const Images = ({ setClickedImage }) => {
  const { docs } = useFirestore('images');

  console.log(docs);

  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => (
          <div className='img-wrap' key={doc.id}>
            <img
              onClick={() => setClickedImage(doc.url)}
              src={doc.url}
              alt='test'
            />
          </div>
        ))}
    </div>
  );
};

export default Images;
