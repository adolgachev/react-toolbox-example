import React from 'react';
// import 'react-toolbox/lib/commons.scss';           // Import common styles
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import CancelButton from './CancelButton.js';         // A button imported as a raw component
import ThemeableButton from './ThemeableButton.js';
import { Button } from 'react-toolbox/lib/button'; // Bundled component import

const App = () => (
  <div>
    <PurpleAppBar />
    <section style={{ padding: 20 }}>

      {/* Component variant with overriden styles */}
      <SuccessButton label='Success' primary raised />

      {/* Component using default theme (from library) */}
      <Button label='Primary Button' primary />

      {/* Component using own custom theme */}
      <CancelButton label='Cancel' primary raised />

      {/* Component using default theme but style overriden locally */}
      <Button label='Styled Button' primary style={{ color: 'red' }} />

      {/* Component imported with no theme but using theme supplied with context */}
      <ThemeableButton label='Themeable Button' primary />

    </section>
  </div>
);

export default App;
