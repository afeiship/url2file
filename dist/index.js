'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slateHyperscript = require('slate-hyperscript');

var _nextSlatePlugin = require('@jswork/next-slate-plugin');

var _nextSlatePlugin2 = _interopRequireDefault(_nextSlatePlugin);

var _nextCssText = require('@jswork/next-css-text');

var _nextCssText2 = _interopRequireDefault(_nextCssText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @usage:
 * Transforms.setNodes(editor, { type:'blockquote' })
 *
 * 注意这里的 style处理，所有的 block 元素，都有可能被直接设置 style;
 * input/output 都需要针对style写一些代码
 */

exports.default = _nextSlatePlugin2.default.define({
  id: 'paragraph',
  serialize: {
    input: function input(_ref, children) {
      var el = _ref.el;

      var nodeName = el.nodeName.toLowerCase();
      if (nodeName === 'p') {
        var css = el.style.cssText;
        return (0, _slateHyperscript.jsx)('element', { type: 'paragraph', style: _nextCssText2.default.css2obj(css) }, children);
      }
    },
    output: function output(node, children) {
      var style = node.style;

      return '<p' + style + '>' + children + '</p>';
    }
  },
  render: function render(_, _ref2) {
    var attributes = _ref2.attributes,
        children = _ref2.children,
        element = _ref2.element;

    return _react2.default.createElement(
      'p',
      attributes,
      children
    );
  }
});