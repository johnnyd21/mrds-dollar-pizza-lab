import React from 'react';
import Slice from './slice';
import plain from './images/plain.jpg';
import pepperoni from './images/pepperoni.jpg';
import './css/menu.css';

function Menu() {
  return(
    <div className='Menu container-fluid'>
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>
        <Slice 
        img={plain}
        title="Plain"
        description="It's got cheese, it's got tomato sauce, and it's only  a dollar. What more could you ask for?"
        price="1.00" />

<Slice 
        img={pepperoni}
        title="Pepperoni"
        description="It's got cheese, it's got tomato sauce, and pepperonins and it's only  a dollar. What more could you ask for?"
        price="1.00" />
      </div>
    </div>
  );
}

export default Menu;
