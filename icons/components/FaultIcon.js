const React = require("react");
function FaultIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 34.64 40",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M34.64 30V10L17.32 0 0 10v20l17.32 10 17.32-10ZM1.61 10.93l15.71-9.08 15.72 9.07v18.15l-15.72 9.07-15.71-9.07V10.93Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.34 23.15c.44 0 .8-.36.8-.8V10.46c0-.44-.36-.8-.8-.8s-.8.36-.8.8v11.88c0 .44.36.8.8.8ZM19.07 28.29c0-.97-.79-1.75-1.75-1.75s-1.75.79-1.75 1.75.79 1.75 1.75 1.75 1.75-.79 1.75-1.75Z"
  }));
}
const ForwardRef = React.forwardRef(FaultIcon);
module.exports = ForwardRef;