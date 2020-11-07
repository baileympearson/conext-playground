import React from 'react';
import './App.css';
import { ModelWrapper, ModelInput, ModelOutput } from './Model';

function App() {
  return (
    <div className="App">
        Ants supposedly can carry many times their own bodyweight - some estimates are as high as 
        1000 times their own weight.  So what would happen if an ant were the 
        size of a human?  I guess we just lucked out that ants are small! 
        <br />
        <br />

        Not quite.  The answer is not so straightforward and 
        actually lies in the mathematical relationship between surface 
        area and volume.  Let's explore how surface area and volume are related to each other.

        <br />
        <br />

      <ModelWrapper>
        For example, let's consider a parallelepid.
        <br />
        With a length of <ModelInput name="length" />,
        <br />
        a width of <ModelInput name="width" />,
        <br />
        and a height of <ModelInput name="height" />,
        <br />
          we get a surface area of <ModelOutput name="surfaceArea" />
        <br />
          and a volume of <ModelOutput name="volume" />.
      </ModelWrapper>
      
      <br />
      <br />
      <br />

      Try adjusting the dimensions of the object. Pay attention to how the surface area 
      and the volume are changing as you change the increase the dimensions.
      <br />
      <br />
      <br />
        What we can notice is that if you double the dimensions of each side,
        the surface area increases by a factor of 4.  The volume, however,
        increases by a factor of 8.  Mathematically, this makes sense.  The 
        surface area is calculated by:
      <br />
      <br />

          initial surface area = 2 * (length * width) + 2 * (length * height) + 2 * (width * height)

      <br />
      <br />
        If we double all the dimensions of the shape, we get:

      <br />
      <br />

          2 * (2 * length * 2 * width) + 2 * (2 * length * 2 * height) + 2 * (2 * width * 2 * height)

      <br />
      <br />

          = 2 * (4 * length * width) + 2 * (4 * length * height) + 2 * (4 * width * height)

      <br />
      <br />

          = 4 * initial surface area

      <br />
      <br />

      The volume is given by

      <br />
      <br />

        initial volume = length * width * height

      so doubling all the dimensions
      
      <br />
      <br />

        (2 * length) * (2 * width) * (2 * height)

      <br />
      <br />

        = 8 * length * width * height
        
      <br />
      <br />

        = 8 * initial volume

      <br/>
      <br/>
      
      In general, the volume will increase faster than the surface area as the dimensions increase.  

      <br/>
      <br/>

      Practically, this means that if an object doubles in size the mass of the object will go up by a factor
      of 8.  So as animals get larger and larger, their mass increases faster than their body area.  The more massive
      an animal, the larger the legs are required to hold the animal.  Think of the heaviest animals on the planet
      - elephants for example - and think of how massive their legs are!  

      <br/>
      <br/>

      The true answer to what would happen if an ant were the size of a human is that the ant wouldn't 
      even be able to stand up! 
    </div>
  );
}


export default App;