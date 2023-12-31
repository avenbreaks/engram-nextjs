import * as React from "react";
function Upload2Icon({
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
    d: "M0 10v20l17.32 10 17.32-10V10L17.32 0 0 10Zm33.03 19.07-15.71 9.07-15.71-9.07V10.93l15.71-9.08 15.71 9.07v18.15Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.85 25.29v-6.24c0-.44-.36-.8-.8-.8s-.8.36-.8.8v7.17l11.07 6.39 11.07-6.39v-7.17c0-.44-.36-.8-.8-.8s-.8.36-.8.8v6.24l-9.47 5.47-9.47-5.47Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.69 12.02a.8.8 0 0 0-.29 1.1.8.8 0 0 0 1.1.29l7.02-4.05v13.52c0 .44.36.8.8.8s.8-.36.8-.8V9.35l7.03 4.06a.8.8 0 0 0 1.1-.29c.22-.38.09-.88-.29-1.1l-8.63-4.98-8.63 4.98Z"
  }));
}
const ForwardRef = React.forwardRef(Upload2Icon);
export default ForwardRef;