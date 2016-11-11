import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import { Button } from 'react-toolbox/lib/button/Button'; // import raw so can set up to be themeable

class ThemeableButton extends Component {
  render() {
    const { theme } = this.props;
    return (
      <Button {...this.props} theme={theme} />
    )
  }
}

export default themr('TButton')(ThemeableButton);
