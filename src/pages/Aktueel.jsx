import React from 'react'
import BackButton from '../components/BackButton';

const Aktueel = () => {
  const url = window.location.pathname
  return (
    <div className="w-full h-[500px] flex justify-center items-center mt-8">
      <BackButton url={url}/>
    </div>
  );
}

export default Aktueel
