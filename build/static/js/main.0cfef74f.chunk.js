(this["webpackJsonpreact-test"] = this["webpackJsonpreact-test"] || []).push([
    [0], {
        3: function (e, a, t) {
            e.exports = t(9)
        },
        8: function (e, a, t) {},
        9: function (e, a, t) {
            "use strict";
            t.r(a);
            var n = t(0),
                r = t.n(n),
                l = t(2),
                c = t.n(l),
                s = (t(8), function () {
                    return r.a.createElement("header", null, r.a.createElement("div", {
                        className: "wrapper"
                    }, r.a.createElement("div", {
                        class: "header"
                    }, r.a.createElement("a", {
                        href: "/#"
                    }, r.a.createElement("div", {
                        className: "header-logo"
                    }), " "), r.a.createElement("a", {
                        href: "tel:888",
                        className: "header-phone"
                    }, " "), r.a.createElement("div", {
                        className: "header-phonelink"
                    }, r.a.createElement("a", {
                        href: "tel:7(962)556-1234"
                    }, "+7(962)556-1234"), " "))))
                }),
                m = function () {
                    return r.a.createElement("main", null, r.a.createElement("div", {
                        class: "wrapper"
                    }, r.a.createElement("div", {
                        class: "main"
                    }, r.a.createElement("h1", {
                        class: "main-head"
                    }, "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u043c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e \u0441\u0438\u0441\u0442\u0435\u043c\u0435 4U"), r.a.createElement("div", {
                        class: "main-small"
                    }, "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u043b\u0436\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0421\u0430\u0439\u0442 \u0440\u044b\u0431\u0430\u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0443, \u0432\u0435\u0440\u0441\u0442\u0430\u043b\u044c\u0449\u0438\u043a\u0443, \u0432\u0435\u0431\u043c\u0430\u0441\u0442\u0435\u0440\u0443 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0430\u0431\u0437\u0430\u0446\u0435\u0432 \u0431\u043e\u043b\u0435\u0435."), r.a.createElement("button", {
                        class: "btn main-btn"
                    }, r.a.createElement("span", null, "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"), " "))))
                },
                o = function () {
                    var e = ["\u041f\u0435\u0440\u0432\u043e\u0435", "\u0412\u0442\u043e\u0440\u043e\u0435", "\u0422\u0440\u0435\u0442\u044c\u0435", "\u0427\u0435\u0442\u0432\u0435\u0440\u0442\u043e\u0435"],
                        a = new Map;
                    e.forEach((function (t) {
                        var n = "../build/images/".concat(e.indexOf(t) + 1, ".svg");
                        a.set(t, n)
                    }));
                    var t = e.map((function (e) {
                        return r.a.createElement("div", {
                            className: "features-slider_item"
                        }, r.a.createElement("div", {
                            className: "features-img",
                            style: {
                                backgroundImage: "url(".concat(a.get(e), ")")
                            }
                        }, " "), r.a.createElement("div", {
                            className: "features-feature"
                        }, e + " \u0446\u0435\u043b\u0435\u0432\u043e\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e", " "))
                    }));
                    return r.a.createElement("div", {
                        className: "features-slider_items"
                    }, t)
                },
                i = function () {
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
                        className: "features-slider-arrow features-slider-prev"
                    }, r.a.createElement("svg", {
                        width: "9",
                        height: "16",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.a.createElement("path", {
                        d: "M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z"
                    }))), r.a.createElement("button", {
                        className: "features-slider-arrow features-slider-next"
                    }, r.a.createElement("svg", {
                        width: "9",
                        height: "16",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.a.createElement("path", {
                        d: "M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z"
                    }))))
                },
                u = function () {
                    return r.a.createElement("section", {
                        class: "features"
                    }, r.a.createElement("div", {
                        className: "wrapper"
                    }, r.a.createElement("div", {
                        className: "features-wrapper"
                    }, r.a.createElement("h2", {
                        className: "features-head"
                    }, "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043b\u044f \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 "), r.a.createElement("div", {
                        className: "features-subhead"
                    }, "\u041e \u043d\u0430\u0441 "), r.a.createElement("div", {
                        className: "features-description"
                    }, "\u0421\u0430\u0439\u0442 \u0440\u044b\u0431\u0430\u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0443, \u0432\u0435\u0440\u0441\u0442\u0430\u043b\u044c\u0449\u0438\u043a\u0443, \u0432\u0435\u0431\u043c\u0430\u0441\u0442\u0435\u0440\u0443 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0430\u0431\u0437\u0430\u0446\u0435\u0432 \u0431\u043e\u043b\u0435\u0435 \u043c\u0435\u043d\u0435\u0435 \u043e\u0441\u043c\u044b\u0441\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430 \u0440\u044b\u0431\u044b \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435, \u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0435\u043c\u0443 \u043e\u0440\u0430\u0442\u043e\u0440\u0443 \u043e\u0442\u0442\u043e\u0447\u0438\u0442\u044c."), r.a.createElement("div", {
                        className: "features-slider"
                    }, r.a.createElement(o, null), r.a.createElement(i, null)))))
                },
                E = function () {
                    return r.a.createElement("section", {
                        className: "contact"
                    }, r.a.createElement("div", {
                        className: "wrapper"
                    }, r.a.createElement("div", {
                        className: "contact-wrapper"
                    }, r.a.createElement("h2", {
                        className: "contact-title"
                    }, "\u041e\u0441\u0442\u0430\u043b\u0438\u0441\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b?"), r.a.createElement("div", {
                        className: "contact-description"
                    }, "\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430, \u0438 \u043c\u044b \u043f\u0435\u0440\u0435\u0437\u0432\u043e\u043d\u0438\u043c \u0432\u0430\u043c"), r.a.createElement("form", {
                        action: "../mailer.smart.php",
                        class: "contact-form"
                    }, r.a.createElement("input", {
                        type: "text",
                        placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"
                    }), r.a.createElement("input", {
                        type: "tel",
                        placeholder: "\u0422\u0435\u043b\u0435\u0444\u043e\u043d"
                    }), r.a.createElement("input", {
                        type: "email",
                        placeholder: "E-mail"
                    }), r.a.createElement("button", {
                        className: "btn contact-btn"
                    }, r.a.createElement("span", null, "\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u043c\u043d\u0435"), " ")), r.a.createElement("div", {
                        className: "contact-personal"
                    }, "\u042f \u0434\u0430\u044e \u0441\u0432\u043e\u0451 ", r.a.createElement("a", {
                        href: "/#"
                    }, "\u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 "), " \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043c\u043e\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."))))
                },
                d = function () {
                    return r.a.createElement("footer", null, r.a.createElement("div", {
                        className: "footer"
                    }, r.a.createElement("div", {
                        className: "footer-logo"
                    }), r.a.createElement("div", {
                        className: "footer-company"
                    }, r.a.createElement("span", null, "\xa9 2020 XXXcompany. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.")), r.a.createElement("a", {
                        href: "tel:888",
                        className: "footer-phone"
                    }), r.a.createElement("div", {
                        className: "footer-websurfer"
                    }, r.a.createElement("span", {
                        className: "footer-websurfer_build"
                    }, "\u0421\u0434\u0435\u043b\u0430\u043d\u043e"), " ", r.a.createElement("a", {
                        href: "/#"
                    }, "\u0412\u0430\u0448\u0435 \u0438\u043c\u044f")), r.a.createElement("div", {
                        className: "footer-phonelink"
                    }, r.a.createElement("a", {
                        href: "tel:888"
                    }, "+7(962)556-1234"))))
                },
                f = function () {
                    return [r.a.createElement(s, null), r.a.createElement(m, null), r.a.createElement(u, null), r.a.createElement(E, null), r.a.createElement(d, null)]
                };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            c.a.render(r.a.createElement(r.a.StrictMode, null, r.a.createElement(f, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) {
                e.unregister()
            })).catch((function (e) {
                console.error(e.message)
            }))
        }
    },
    [
        [3, 1, 2]
    ]
]);
//# sourceMappingURL=main.0cfef74f.chunk.js.map