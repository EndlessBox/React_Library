'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var HelloWorld = (function () {
  return /*#__PURE__*/React.createElement("h1", null, "Hello world");
});

var AssetCard = (function () {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("image", {
    src: "/assets/TestIamge.png",
    alt: "test"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Piece of Art"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque lorem metus, at dictum quam dignissim vel. Vivamus vehicula enim at elit viverra eleifend. Donec dictum bibendum felis. Etiam at sodales tortor, eu hendrerit velit")));
});

exports.AssetCard = AssetCard;
exports.HelloWorld = HelloWorld;
