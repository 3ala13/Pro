"use strict";
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 3987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Subscribe)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/subscribe.json
const subscribe_namespaceObject = JSON.parse('{"T":"Restez au courant de mes dernières actualités en vous abonnant !"}');
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
;// CONCATENATED MODULE: ./src/components/sections/Subscribe.jsx



const SubscribeSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            id: "about",
            className: "mil-p-90-90",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row justify-content-center",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-lg-8",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mil-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "mil-up mil-mb-60",
                                children: subscribe_namespaceObject.T
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mil-up",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                    action: app/* settings.mailchimp.url */.Xd.Gp.H,
                                    method: "post",
                                    target: "_blank",
                                    className: "mil-subscribe-form",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "email",
                                            placeholder: "Your Email",
                                            name: "EMAIL",
                                            required: true
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "hidden",
                                            name: app/* settings.mailchimp.key */.Xd.Gp.J
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            type: "submit",
                                            children: "S'inscrire"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const Subscribe = (SubscribeSection);


/***/ }),

/***/ 3265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Date)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


function Date({ dateString  }) {
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
        dateTime: dateString,
        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, "LLLL d, yyyy")
    });
}


/***/ })

};
;