import React from 'react'
import Calendar from './Calendar'
import Overons from './Overons';
import Contact from '../pages/Contact';

const Root = () => {
 
  return (
    <div className="bg-[url('./assets/images/map_adam2.png')] bg-no-repeat bg-right-bottom">
      <Calendar />
      <Overons />
      <Contact />
    </div>
  );
}

export default Root
