/* eslint-disable */
import React from 'react';
import RemarkMathPlugin from 'remark-math';
import MathJax from 'react-mathjax';
import Markdown from 'react-markdown/with-html';

function MathMarkdown(props) {
  const newProps = {
    ...props,
    plugins: [
      RemarkMathPlugin,
    ],
    renderers: {
      ...props.renderers,
      math: props => <MathJax.Node className="center" formula={props.value} />,
      inlineMath: props => <MathJax.Node inline formula={props.value} />,
    },
  };
  return (
    <MathJax.Provider input="tex">
      <Markdown {...newProps} />
    </MathJax.Provider>
  );
}

export { MathMarkdown as default };
