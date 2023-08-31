"use strict";
exports.id = 970;
exports.ids = [970];
exports.modules = {

/***/ 4424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/about.json
const about_namespaceObject = JSON.parse('{"ri":{"B":"/img/person/avatar.jpg","w":"avatar"},"TN":"Bonjour, mon nom est Ala, <br/>je suis spécialiste web et marketing numérique basé au Québec","WL":"Je possède une solide expérience dans la création de sites web en utilisant des plateformes telles que Wordpress, Wix, Odoo, ainsi que d\'autres outils de développement. Mes compétences en HTML et CSS sont de niveau intermédiaire, me permettant de personnaliser efficacement les sites que je crée","uF":{"B":"/img/person/sign.png","w":"signature"}}');
;// CONCATENATED MODULE: ./src/components/sections/About.jsx


const AboutSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
            id: "about",
            className: "mil-p-0-90",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-oval-frame-2 mil-mb-90",
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: about_namespaceObject.ri.B,
                        alt: about_namespaceObject.ri.w
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mil-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "mil-up mil-mb-30",
                                    dangerouslySetInnerHTML: {
                                        __html: about_namespaceObject.TN
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-quote mil-up mil-mb-30",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "fas fa-quote-left"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "mil-up mil-mb-30",
                                    children: about_namespaceObject.WL
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: about_namespaceObject.uF.B,
                                    alt: about_namespaceObject.uF.w,
                                    className: "mil-up mil-sign"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const About = (AboutSection);


/***/ }),

/***/ 3578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_HeroOne)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/hero-1.json
const hero_1_namespaceObject = JSON.parse('{"Oc":"Bonjour! Mon nom est","TN":"Ala<br/>Kahlat","WL":"Spécialiste web et marketing numérique"}');
;// CONCATENATED MODULE: ./src/components/sections/HeroOne.jsx


const HeroOne = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
            className: "mil-side-banner mil-center",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-banner-top mil-up"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mil-banner-title",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mil-upper mil-dark mil-up mil-mb-30",
                            children: hero_1_namespaceObject.Oc
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                            className: "mil-up mil-mb-30",
                            dangerouslySetInnerHTML: {
                                __html: hero_1_namespaceObject.TN
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "mil-upper mil-dark mil-up",
                            children: hero_1_namespaceObject.WL
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-up mil-oval-frame",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mil-circle-text",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                version: "1.1",
                                xmlns: "http://www.w3.org/2000/svg",
                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                x: "0px",
                                y: "0px",
                                viewBox: "0 0 300 300",
                                enableBackground: "new 0 0 300 300",
                                xmlSpace: "preserve",
                                className: "mil-ct-svg mil-rotate",
                                "data-value": "360",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            id: "circlePath",
                                            d: "M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                        cx: "150",
                                        cy: "100",
                                        r: "75",
                                        fill: "none"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("use", {
                                                xlinkHref: "#circlePath",
                                                fill: "none"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("text", {
                                                style: {
                                                    "letterSpacing": "6.5px"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx("textPath", {
                                                    xlinkHref: "#circlePath",
                                                    children: "Scroll down - Scroll down - "
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "#about",
                                className: "mil-button",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "feather feather-arrow-down",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("line", {
                                            x1: "12",
                                            y1: "5",
                                            x2: "12",
                                            y2: "19"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("polyline", {
                                            points: "19 12 12 19 5 12"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const sections_HeroOne = (HeroOne);


/***/ }),

/***/ 6258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LatestPosts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/latest-posts.json
const latest_posts_namespaceObject = JSON.parse('{"T":"Dernier article","j":2}');
// EXTERNAL MODULE: ./src/lib/date.js
var date = __webpack_require__(3265);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/LatestPosts.jsx




const LatestPostsSection = ({ posts , layout , imageHorizontal  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mil-section-title mil-up",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-divider"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        children: latest_posts_namespaceObject.T
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "mil-p-90-30",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-between align-items-center",
                    children: posts.slice(0, latest_posts_namespaceObject.j).map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: `/blog/${item.id}`,
                                className: "mil-blog-card mil-mb-60",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mil-cover mil-up",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: item.image,
                                                alt: item.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "mil-link mil-icon-link",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    className: "feather feather-arrow-right",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("line", {
                                                            x1: "5",
                                                            y1: "12",
                                                            x2: "19",
                                                            y2: "12"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("polyline", {
                                                            points: "12 5 19 12 12 19"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mil-descr",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                className: "mil-up mil-mb-30",
                                                children: item.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mil-up",
                                                children: item.short
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, `blog-post-${key}`))
                })
            })
        ]
    });
};
/* harmony default export */ const LatestPosts = (LatestPostsSection);


/***/ }),

/***/ 5081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/services.json
const services_namespaceObject = JSON.parse('{"T":"Services","e":[{"title":"Gestion des campagnes publicitaires","icon":"/img/icons/1.svg","text":"Optimisez votre visibilité et multipliez vos conversions en me confiant la gestion experte de vos campagnes publicitaires.","link":"/services/service-1"},{"title":"création/Gestion de sites Web","icon":"/img/icons/2.svg","text":"J\'associe l\'esthétique et la fonctionnalité avec ma maîtrise des CMS, créant ainsi des sites Web captivants et performants.","link":"/services/service-2"},{"title":"Conception UX/UI","icon":"/img/icons/3.svg","text":"Ma maîtrise de Canva et du design UI/UX fusionne l\'esthétique et la convivialité, créant des expériences visuelles mémorables.","link":"/services/service-3"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/Services.jsx



const ServicesSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mil-section-title mil-up",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-divider"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        children: services_namespaceObject.T
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "mil-p-90-30",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-between align-items-center",
                    children: services_namespaceObject.e.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mil-icon-box mil-center mil-mb-60",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-service-icon mil-up",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: item.icon,
                                            alt: item.title,
                                            className: "mil-mb-30"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "mil-up mil-mb-30",
                                        children: item.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "mil-up mil-mb-30",
                                        children: item.text
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-up",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: item.link,
                                            className: "mil-link mil-icon-link",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "feather feather-arrow-right",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("line", {
                                                        x1: "5",
                                                        y1: "12",
                                                        x2: "19",
                                                        y2: "12"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("polyline", {
                                                        points: "12 5 19 12 12 19"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        }, `services-item-${key}`))
                })
            })
        ]
    });
};
/* harmony default export */ const Services = (ServicesSection);


/***/ }),

/***/ 6204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SkillsOne)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/skills-1.json
const skills_1_namespaceObject = JSON.parse('{"T":"Compétences linguistiques","e":[{"label":"Anglais","value":"70"},{"label":"Français","value":"95"},{"label":"Arabe","value":"80"}]}');
;// CONCATENATED MODULE: ./src/components/sections/SkillsOne.jsx


const SkillsOneSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mil-section-title mil-up",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-divider"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        children: skills_1_namespaceObject.T
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "mil-lang-skills mil-p-90-60",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-between align-items-center",
                    children: skills_1_namespaceObject.e.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-6 col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mil-lang-skills-item mil-center mil-up mil-mb-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-circular-progress",
                                        "data-value": `${item.value}%`,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-counter-frame mil-upper mil-dark",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "mil-counter",
                                                    "data-number": item.value,
                                                    children: "0"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "%"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                        className: "mil-up",
                                        children: item.label
                                    })
                                ]
                            })
                        }, `skills1-item-${key}`))
                })
            })
        ]
    });
};
/* harmony default export */ const SkillsOne = (SkillsOneSection);


/***/ }),

/***/ 6140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_SkillsTwo)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/skills-2.json
const skills_2_namespaceObject = JSON.parse('{"T":"Compétences techniques","e":[{"label":"Outils CMS (Wordpress, Odoo, Wix..)","value":"95"},{"label":"Canva","value":"95"},{"label":"Google Ads","value":"85"},{"label":"Google analytics","value":"70"},{"label":"Hootsuite","value":"90"},{"label":"Html","value":"50"},{"label":"Css","value":"40"},{"label":"Figma/Adobe XD","value":"40"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/sections/SkillsTwo.jsx



const SkillsTwo = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mil-section-title mil-up",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-divider"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        children: skills_2_namespaceObject.T
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "mil-p-90-60",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-between align-items-center",
                    children: skills_2_namespaceObject.e.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mil-lang-skills-item mil-mb-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                        className: "mil-up mil-mb-30",
                                        children: item.label
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-line-progress mil-up",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mil-bar",
                                            "data-value": `${item.value}%`
                                        })
                                    })
                                ]
                            })
                        }, `skills2-item-${key}`))
                })
            })
        ]
    });
};
/* harmony default export */ const sections_SkillsTwo = (SkillsTwo);


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