import React, { useState } from 'react';
import BottomSheet from './BottomSheet';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      {/* <button onClick={handleOpen}>Open Bottom Sheet</button> */}
      <BottomSheet isOpen={isOpen} onClose={handleClose}>
        <div style={{ padding: '20px',border:"2px solid red",width:"20%",margin:"auto",textAlign:"center" }}>
          <h2>LOREM IPSUM</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eum labore quo numquam cumque molestiae dolores quis odio voluptatem libero nam beatae dolor hic illo, consectetur vitae nemo voluptatum sapiente.</p>
        </div>
      </BottomSheet>
    </div>
  );
}

export default App;
