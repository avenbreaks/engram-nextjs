import * as React from "react";
function GrowIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36.25 40",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M21.84 10.39c0-.44-.36-.8-.8-.8h-5.86c-.44 0-.8.36-.8.8s.36.8.8.8h5.86c.44 0 .8-.36.8-.8Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36.25 10.46 18.12 0 0 10.46l17.32 10v7.68L.8 18.61V30l17.32 10 17.32-10V18.61l-16.52 9.54v-7.68l17.32-10ZM18.12 1.85l14.91 8.61-14.91 8.61-14.91-8.61 14.91-8.61ZM2.41 21.39 17.32 30v7.68L2.41 29.07v-7.68Zm31.43 0v7.68l-14.91 8.61V30l14.91-8.61Z"
  }));
}
const ForwardRef = React.forwardRef(GrowIcon);
export default ForwardRef;