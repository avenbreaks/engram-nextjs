import * as React from "react";
function UniswapIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 12,
    fill: "#FF007D"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#fff",
    clipPath: "url(#b)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.745 4.758c-.215-.033-.224-.036-.122-.051.194-.03.651.01.967.084.736.172 1.405.614 2.12 1.4l.19.208.273-.043c1.145-.182 2.308-.038 3.283.406.269.122.691.364.743.427.018.02.049.147.068.284.074.474.038.836-.11 1.106-.08.148-.084.194-.03.321a.31.31 0 0 0 .281.175c.242 0 .503-.386.623-.923l.048-.214.095.106c.522.583.931 1.376 1 1.94l.02.148-.088-.134a1.663 1.663 0 0 0-.497-.513c-.35-.228-.72-.306-1.698-.357-.885-.045-1.385-.12-1.881-.28-.845-.272-1.27-.632-2.273-1.929-.446-.577-.72-.895-.995-1.151-.623-.584-1.234-.89-2.017-1.01Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.4 6.044c.022-.385.074-.64.182-.873a.934.934 0 0 1 .088-.167.596.596 0 0 1-.041.15c-.078.227-.092.535-.037.895.069.455.106.521.594 1.013.23.231.496.521.593.647l.176.227-.176-.162c-.214-.199-.708-.586-.818-.642-.073-.036-.084-.036-.129.008-.042.04-.05.102-.057.392-.008.452-.071.743-.222 1.032-.081.158-.094.124-.02-.054.054-.131.06-.19.06-.628 0-.878-.107-1.09-.728-1.45a6.833 6.833 0 0 0-.576-.295 2.197 2.197 0 0 1-.281-.136c.017-.017.623.158.866.25.364.138.423.155.468.139.028-.012.043-.097.057-.346h.001ZM9.162 7.548c-.435-.592-.706-1.5-.647-2.178l.018-.21.099.017c.187.034.509.152.66.243.412.247.591.572.773 1.408.054.245.124.522.156.617.051.15.248.503.406.732.115.166.04.244-.214.221-.388-.034-.912-.39-1.25-.85Zm6.708 4.405c-2.04-.808-2.757-1.51-2.757-2.695 0-.174.006-.317.014-.317.007 0 .086.057.175.128.413.326.876.466 2.159.65.754.11 1.177.197 1.569.325 1.245.406 2.015 1.232 2.199 2.357.052.326.022.938-.066 1.261-.068.255-.276.714-.331.732-.016.006-.03-.052-.034-.13-.02-.422-.238-.834-.601-1.142-.414-.35-.97-.63-2.327-1.169Zm-1.431.337a3.541 3.541 0 0 0-.098-.425l-.053-.153.097.108c.134.147.24.336.33.589.068.193.075.25.075.562 0 .307-.01.372-.073.544a1.72 1.72 0 0 1-.43.675c-.373.375-.852.58-1.543.667-.12.015-.47.04-.777.056-.776.04-1.287.122-1.745.28a.372.372 0 0 1-.132.031c-.018-.018.295-.202.552-.324.364-.173.726-.268 1.537-.4.4-.066.815-.146.92-.178.992-.3 1.503-1.073 1.34-2.032Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.374 13.927c-.271-.574-.334-1.128-.185-1.645.016-.057.04-.1.057-.1.015 0 .08.033.141.075.126.083.375.222 1.043.58.832.448 1.307.794 1.63 1.19.282.346.457.742.541 1.222.048.272.02.93-.051 1.204-.224.866-.743 1.546-1.486 1.942a1.787 1.787 0 0 1-.217.106c-.01 0 .03-.099.088-.22.25-.515.279-1.015.09-1.571-.116-.341-.352-.757-.827-1.46-.553-.817-.688-1.036-.824-1.323Zm-7.66 3.097c.758-.63 1.699-1.077 2.557-1.215.442-.056.89-.039 1.327.05.548.14 1.04.45 1.295.818.249.362.356.675.468 1.376.044.275.092.553.105.615.084.363.247.653.448.798.32.231.873.246 1.416.038a.708.708 0 0 1 .177-.055c.02.02-.253.2-.445.295-.228.12-.483.18-.74.177-.498 0-.91-.25-1.256-.757a5.979 5.979 0 0 1-.338-.667c-.363-.817-.543-1.065-.965-1.338-.368-.238-.842-.28-1.198-.108-.469.227-.6.816-.263 1.19.157.16.362.267.585.302a.626.626 0 0 0 .653-.36.614.614 0 0 0 .054-.257c0-.246-.096-.385-.337-.494-.33-.146-.683.025-.682.33 0 .13.058.212.19.272.085.037.088.04.018.026-.302-.063-.373-.422-.13-.66.292-.285.896-.16 1.102.231.087.165.098.491.022.688-.171.442-.665.675-1.168.548-.343-.087-.481-.18-.894-.598-.716-.727-.994-.869-2.027-1.027l-.199-.031.225-.187Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.352 4.002c2.393 2.863 4.042 4.044 4.225 4.293.151.206.094.392-.164.537a1.588 1.588 0 0 1-.589.162c-.168 0-.226-.063-.226-.063-.097-.09-.152-.075-.652-.949-.424-.655-.854-1.307-1.289-1.956-.036-.034-.035-.034 1.22 2.18.202.46.04.63.04.695 0 .134-.038.204-.205.389-.279.306-.403.65-.494 1.363-.1.8-.384 1.364-1.17 2.33-.46.566-.535.67-.651.898-.147.287-.187.448-.203.81-.017.383.016.63.135.997.103.321.213.532.49.956.24.366.378.638.378.745 0 .084.016.084.388 0 .887-.196 1.608-.543 2.014-.97.251-.264.31-.41.312-.771.001-.236-.007-.286-.072-.422-.105-.22-.297-.405-.72-.69-.556-.375-.793-.675-.857-1.089-.055-.34.008-.58.314-1.213.318-.657.397-.937.45-1.598.035-.427.081-.596.206-.732.13-.14.247-.188.57-.23.524-.072.856-.205 1.13-.454a.968.968 0 0 0 .355-.74l.011-.237-.133-.152C8.683 7.538 4.03 3.567 4 3.567c-.006 0 .152.196.352.435Zm1.115 11.123a.416.416 0 0 0-.131-.554c-.171-.113-.44-.059-.44.088 0 .045.025.078.082.106.096.049.103.103.028.215-.077.113-.07.211.017.28.14.107.34.048.444-.134ZM9.63 9.8c-.246.074-.485.33-.56.6-.045.165-.019.454.049.542.11.144.215.182.501.18.56-.003 1.047-.24 1.104-.537.046-.242-.168-.578-.462-.726-.2-.08-.42-.101-.632-.06Zm.656.504c.085-.121.048-.251-.1-.34-.279-.169-.703-.03-.703.231 0 .13.22.272.423.272.135 0 .32-.079.38-.163Z",
    clipRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "b"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M4 3h16v17H4z"
  }))));
}
const ForwardRef = React.forwardRef(UniswapIcon);
export default ForwardRef;