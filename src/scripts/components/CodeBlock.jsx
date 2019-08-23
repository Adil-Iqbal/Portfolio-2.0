/* eslint-disable */
import React, { PureComponent } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

class CodeBlock extends PureComponent {
  static defaultProps = {
    language: null,
  };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={twilight}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export { CodeBlock as default };
