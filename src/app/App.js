import React from 'react';
// import 'react-toolbox/lib/commons.scss';           // Import common styles
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import CancelButton from './CancelButton.js';         // A button imported as a raw component
import { Button } from 'react-toolbox/lib/button'; // Bundled component import

const App = () => (
  <div>
    <PurpleAppBar />
    <section style={{ padding: 20 }}>
      <SuccessButton label='Success' primary raised />
      <Button label='Primary Button' primary />
      <CancelButton label='Cancel' primary raised />
      <Button label='Styled Button' primary style={{ color: 'red' }} />
    </section>
  </div>
);

export default App;
