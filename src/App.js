import React from 'react';
import boxesData from './boxes';
import Box from './Box';

export default function App(props) {
  
  const [boxes, setBoxes] = React.useState(boxesData);
  
  function toggle(id){
    setBoxes(prevState => {
      return prevState.map(box => {
        
        return box.id === id 
        ? {...box, on: !box.on} 
        : box
      })
    })
  }
  
  const boxesList = boxes.map(
    box => (

      <Box 
        on={box.on} 
        handleClick={() => toggle(box.id)} 
        key={box.id} 
      />
    )
  );
  
  return (
    <main>
      <h1>Boxes will go here</h1>
      <div className='boxWrapper'>
        {boxesList}
      </div>
    </main>
  );
}
