import React from 'react';
import Header from './Header';
import Particles from 'react-particles-js';
function App() {
  return (
    <div className="App">
        <Particles 
          params={{
            particles:{
              number:{
                value:30,
                  density:{
                    enable:true, 
                    value_area:900
                  }
              },
              shape:"circle",
              stroke:{
                width:6,
                color:"#fff",
              }
            }
          }}
        />
        <Header />
    </div>
  );
}

export default App;
