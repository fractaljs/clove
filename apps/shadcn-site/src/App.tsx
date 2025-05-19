import { useState } from 'react'

import './App.css'
import { Button as ButtonDS } from '@vinitjuspay/design-system';
import { Button } from "@/components/ui/button";
import { Alert, AlertStyle, AlertVariant } from '@vinitjuspay/design-system';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button className='bg-red-500 border-1'>Shadcn Button</Button>
      {/* <ButtonDS text='Blend Button'></ButtonDS> */}
      <Alert heading="This is an alert" description="This is an alert" variant={AlertVariant.ORANGE} style={AlertStyle.FILL}/>
    </div>
  );
}

export default App

