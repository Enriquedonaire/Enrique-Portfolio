"use strict";
self["webpackHotUpdate_N_E"]("pages/post",{

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skills": function() { return /* binding */ skills; },
/* harmony export */   "experiences": function() { return /* binding */ experiences; },
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "posts": function() { return /* binding */ posts; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var skills = [{
  skill: 'JavaScript',
  percentage: 100
}, {
  skill: 'HTML',
  percentage: 100
}, {
  skill: 'CSS',
  percentage: 100
}, {
  skill: 'ReactJS',
  percentage: 85
}, {
  skill: 'NextJS',
  percentage: 75
}, {
  skill: 'ExpressJS',
  percentage: 90
}, {
  skill: 'NodeJS',
  percentage: 75
}, {
  skill: 'Git/Github',
  percentage: 100
}];
var experiences = [{
  title: 'Full-Stack Developer at Ironhack',
  description: "There are many variations of passages of Lorem Ipsum available, ",
  from: 2021,
  to: 2021
}, {
  title: 'Full-Stack Developer Freelance',
  description: "There are many variations of passages of Lorem Ipsum available, ",
  from: 2019,
  to: 2020
}, {
  title: 'Digital Cinema at Materia Prisma Productions',
  description: "There are many variations of passages of Lorem Ipsum available, ",
  from: 2009,
  to: 2019
}, {
  title: 'Doctor-Ophthalmologist at COD Diagnosis Ocular Clinical',
  description: "There are many variations of passages of Lorem Ipsum available, ",
  from: 2009,
  to: 2019
}];
var projects = [{
  name: 'Goku in the Cloud',
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
  image: 'GokuGame.jpg',
  website: "https://enriquedonaire.github.io/GOKU-IN-THE-CLOUD-GAME"
}, {
  name: 'Funnyfy',
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
  image: 'funnyfyApp.jpg',
  website: "https://funnyfy.herokuapp.com"
}, {
  name: 'Recyclup',
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
  image: 'bg.jpg',
  website: "https://recyclup.herokuapp.com/"
}, {
  name: 'Covid-19 Tracker',
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
  image: 'portfolio4.png',
  website: ""
}, {
  name: 'Moebious-Home',
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
  image: 'portfolio5.jpeg',
  website: ""
}, {
  name: 'Mood-Song',
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
  image: 'portfolio6.jpeg',
  website: ""
}];
var posts = [{
  title: "React",
  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
  imageURL: "https://www.wallpapertip.com/wmimgs/10-105665_earth-hologram-digital-globe-world-holographic-image-hologram.jpg"
}, {
  title: "Angular",
  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
  imageURL: "https://www.elimparcial.com/__export/1610503451135/sites/elimparcial/img/2021/01/12/disenxo-de-hologramas.jpg_554688468.jpg"
}, {
  title: "Nextjs",
  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
  imageURL: "https://image.freepik.com/vector-gratis/fondo-concepto-tecnologia-futura-circuito-cibernetico-ojo-verde-azul_42077-3424.jpg"
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC5jMzZiNDExZjkwMzgzNTJiMzI3My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsTUFBTSxHQUFHLENBRWxCO0FBQ0lDLEVBQUFBLEtBQUssRUFBRSxZQURYO0FBRUlDLEVBQUFBLFVBQVUsRUFBRTtBQUZoQixDQUZrQixFQU1sQjtBQUNJRCxFQUFBQSxLQUFLLEVBQUUsTUFEWDtBQUVJQyxFQUFBQSxVQUFVLEVBQUU7QUFGaEIsQ0FOa0IsRUFVbEI7QUFDSUQsRUFBQUEsS0FBSyxFQUFFLEtBRFg7QUFFSUMsRUFBQUEsVUFBVSxFQUFFO0FBRmhCLENBVmtCLEVBY2xCO0FBQ0lELEVBQUFBLEtBQUssRUFBRSxTQURYO0FBRUlDLEVBQUFBLFVBQVUsRUFBRTtBQUZoQixDQWRrQixFQWtCbEI7QUFDSUQsRUFBQUEsS0FBSyxFQUFFLFFBRFg7QUFFSUMsRUFBQUEsVUFBVSxFQUFFO0FBRmhCLENBbEJrQixFQXNCbEI7QUFDSUQsRUFBQUEsS0FBSyxFQUFFLFdBRFg7QUFFSUMsRUFBQUEsVUFBVSxFQUFFO0FBRmhCLENBdEJrQixFQTBCbEI7QUFDSUQsRUFBQUEsS0FBSyxFQUFFLFFBRFg7QUFFSUMsRUFBQUEsVUFBVSxFQUFFO0FBRmhCLENBMUJrQixFQThCbEI7QUFDSUQsRUFBQUEsS0FBSyxFQUFFLFlBRFg7QUFFSUMsRUFBQUEsVUFBVSxFQUFFO0FBRmhCLENBOUJrQixDQUFmO0FBcUNBLElBQU1DLFdBQVcsR0FBRyxDQUV2QjtBQUNJQyxFQUFBQSxLQUFLLEVBQUUsa0NBRFg7QUFFSUMsRUFBQUEsV0FBVyxFQUFFLGtFQUZqQjtBQUdJQyxFQUFBQSxJQUFJLEVBQUUsSUFIVjtBQUlJQyxFQUFBQSxFQUFFLEVBQUU7QUFKUixDQUZ1QixFQVN2QjtBQUNJSCxFQUFBQSxLQUFLLEVBQUUsZ0NBRFg7QUFFSUMsRUFBQUEsV0FBVyxFQUFFLGtFQUZqQjtBQUdJQyxFQUFBQSxJQUFJLEVBQUUsSUFIVjtBQUlJQyxFQUFBQSxFQUFFLEVBQUU7QUFKUixDQVR1QixFQWV2QjtBQUNJSCxFQUFBQSxLQUFLLEVBQUUsOENBRFg7QUFFSUMsRUFBQUEsV0FBVyxFQUFFLGtFQUZqQjtBQUdJQyxFQUFBQSxJQUFJLEVBQUUsSUFIVjtBQUlJQyxFQUFBQSxFQUFFLEVBQUU7QUFKUixDQWZ1QixFQXFCdkI7QUFDSUgsRUFBQUEsS0FBSyxFQUFFLHlEQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRSxrRUFGakI7QUFHSUMsRUFBQUEsSUFBSSxFQUFFLElBSFY7QUFJSUMsRUFBQUEsRUFBRSxFQUFFO0FBSlIsQ0FyQnVCLENBQXBCO0FBK0JBLElBQU1DLFFBQVEsR0FBRyxDQUNwQjtBQUNJQyxFQUFBQSxJQUFJLEVBQUUsbUJBRFY7QUFFSUosRUFBQUEsV0FBVyxFQUFFLGlLQUZqQjtBQUdJSyxFQUFBQSxLQUFLLEVBQUUsY0FIWDtBQUlJQyxFQUFBQSxPQUFPLEVBQUU7QUFKYixDQURvQixFQVFwQjtBQUNJRixFQUFBQSxJQUFJLEVBQUUsU0FEVjtBQUVJSixFQUFBQSxXQUFXLEVBQUUsaUtBRmpCO0FBR0lLLEVBQUFBLEtBQUssRUFBRSxnQkFIWDtBQUlJQyxFQUFBQSxPQUFPLEVBQUU7QUFKYixDQVJvQixFQWNwQjtBQUNJRixFQUFBQSxJQUFJLEVBQUUsVUFEVjtBQUVJSixFQUFBQSxXQUFXLEVBQUUsaUtBRmpCO0FBR0lLLEVBQUFBLEtBQUssRUFBRSxRQUhYO0FBSUlDLEVBQUFBLE9BQU8sRUFBRTtBQUpiLENBZG9CLEVBb0JwQjtBQUNJRixFQUFBQSxJQUFJLEVBQUUsa0JBRFY7QUFFSUosRUFBQUEsV0FBVyxFQUFFLGlLQUZqQjtBQUdJSyxFQUFBQSxLQUFLLEVBQUUsZ0JBSFg7QUFJSUMsRUFBQUEsT0FBTyxFQUFFO0FBSmIsQ0FwQm9CLEVBMEJwQjtBQUNJRixFQUFBQSxJQUFJLEVBQUUsZUFEVjtBQUVJSixFQUFBQSxXQUFXLEVBQUUsaUtBRmpCO0FBR0lLLEVBQUFBLEtBQUssRUFBRSxpQkFIWDtBQUlJQyxFQUFBQSxPQUFPLEVBQUU7QUFKYixDQTFCb0IsRUFnQ3BCO0FBQ0lGLEVBQUFBLElBQUksRUFBRSxXQURWO0FBRUlKLEVBQUFBLFdBQVcsRUFBRSxpS0FGakI7QUFHSUssRUFBQUEsS0FBSyxFQUFFLGlCQUhYO0FBSUlDLEVBQUFBLE9BQU8sRUFBRTtBQUpiLENBaENvQixDQUFqQjtBQXlDQSxJQUFNQyxLQUFLLEdBQUcsQ0FDakI7QUFDSVIsRUFBQUEsS0FBSyxFQUFFLE9BRFg7QUFFSVMsRUFBQUEsT0FBTyxFQUNILHVJQUhSO0FBSUlDLEVBQUFBLFFBQVEsRUFDSjtBQUxSLENBRGlCLEVBUWpCO0FBQ0lWLEVBQUFBLEtBQUssRUFBRSxTQURYO0FBRUlTLEVBQUFBLE9BQU8sRUFDSCx1SUFIUjtBQUlJQyxFQUFBQSxRQUFRLEVBQ0o7QUFMUixDQVJpQixFQWVqQjtBQUNJVixFQUFBQSxLQUFLLEVBQUUsUUFEWDtBQUVJUyxFQUFBQSxPQUFPLEVBQ0gsdUlBSFI7QUFJSUMsRUFBQUEsUUFBUSxFQUNKO0FBTFIsQ0FmaUIsQ0FBZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wcm9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBza2lsbHMgPSBbXHJcblxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnSmF2YVNjcmlwdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogMTAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0hUTUwnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDEwMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdDU1MnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDEwMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdSZWFjdEpTJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4NSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdOZXh0SlMnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDc1LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0V4cHJlc3NKUycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogOTAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnTm9kZUpTJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3NSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdHaXQvR2l0aHViJyxcclxuICAgICAgICBwZXJjZW50YWdlOiAxMDAsXHJcbiAgICB9LFxyXG5cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNlcyA9IFtcclxuXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdGdWxsLVN0YWNrIERldmVsb3BlciBhdCBJcm9uaGFjaycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIFwiLFxyXG4gICAgICAgIGZyb206IDIwMjEsXHJcbiAgICAgICAgdG86IDIwMjEsXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Z1bGwtU3RhY2sgRGV2ZWxvcGVyIEZyZWVsYW5jZScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIFwiLFxyXG4gICAgICAgIGZyb206IDIwMTksXHJcbiAgICAgICAgdG86IDIwMjBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdEaWdpdGFsIENpbmVtYSBhdCBNYXRlcmlhIFByaXNtYSBQcm9kdWN0aW9ucycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIFwiLFxyXG4gICAgICAgIGZyb206IDIwMDksXHJcbiAgICAgICAgdG86IDIwMTlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdEb2N0b3ItT3BodGhhbG1vbG9naXN0IGF0IENPRCBEaWFnbm9zaXMgT2N1bGFyIENsaW5pY2FsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mIExvcmVtIElwc3VtIGF2YWlsYWJsZSwgXCIsXHJcbiAgICAgICAgZnJvbTogMjAwOSxcclxuICAgICAgICB0bzogMjAxOSxcclxuXHJcbiAgICB9LFxyXG5cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdHb2t1IGluIHRoZSBDbG91ZCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLCBvciByYW5kb21pc2VkIHdvcmRzXCIsXHJcbiAgICAgICAgaW1hZ2U6ICdHb2t1R2FtZS5qcGcnLFxyXG4gICAgICAgIHdlYnNpdGU6IFwiaHR0cHM6Ly9lbnJpcXVlZG9uYWlyZS5naXRodWIuaW8vR09LVS1JTi1USEUtQ0xPVUQtR0FNRVwiXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnRnVubnlmeScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLCBvciByYW5kb21pc2VkIHdvcmRzXCIsXHJcbiAgICAgICAgaW1hZ2U6ICdmdW5ueWZ5QXBwLmpwZycsXHJcbiAgICAgICAgd2Vic2l0ZTogXCJodHRwczovL2Z1bm55ZnkuaGVyb2t1YXBwLmNvbVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdSZWN5Y2x1cCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLCBvciByYW5kb21pc2VkIHdvcmRzXCIsXHJcbiAgICAgICAgaW1hZ2U6ICdiZy5qcGcnLFxyXG4gICAgICAgIHdlYnNpdGU6IFwiaHR0cHM6Ly9yZWN5Y2x1cC5oZXJva3VhcHAuY29tL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdDb3ZpZC0xOSBUcmFja2VyJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mIExvcmVtIElwc3VtIGF2YWlsYWJsZSwgYnV0IHRoZSBtYWpvcml0eSBoYXZlIHN1ZmZlcmVkIGFsdGVyYXRpb24gaW4gc29tZSBmb3JtLCBieSBpbmplY3RlZCBodW1vdXIsIG9yIHJhbmRvbWlzZWQgd29yZHNcIixcclxuICAgICAgICBpbWFnZTogJ3BvcnRmb2xpbzQucG5nJyxcclxuICAgICAgICB3ZWJzaXRlOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdNb2ViaW91cy1Ib21lJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mIExvcmVtIElwc3VtIGF2YWlsYWJsZSwgYnV0IHRoZSBtYWpvcml0eSBoYXZlIHN1ZmZlcmVkIGFsdGVyYXRpb24gaW4gc29tZSBmb3JtLCBieSBpbmplY3RlZCBodW1vdXIsIG9yIHJhbmRvbWlzZWQgd29yZHNcIixcclxuICAgICAgICBpbWFnZTogJ3BvcnRmb2xpbzUuanBlZycsXHJcbiAgICAgICAgd2Vic2l0ZTogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnTW9vZC1Tb25nJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGVyZSBhcmUgbWFueSB2YXJpYXRpb25zIG9mIHBhc3NhZ2VzIG9mIExvcmVtIElwc3VtIGF2YWlsYWJsZSwgYnV0IHRoZSBtYWpvcml0eSBoYXZlIHN1ZmZlcmVkIGFsdGVyYXRpb24gaW4gc29tZSBmb3JtLCBieSBpbmplY3RlZCBodW1vdXIsIG9yIHJhbmRvbWlzZWQgd29yZHNcIixcclxuICAgICAgICBpbWFnZTogJ3BvcnRmb2xpbzYuanBlZycsXHJcbiAgICAgICAgd2Vic2l0ZTogXCJcIlxyXG4gICAgfSxcclxuXTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcG9zdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiUmVhY3RcIixcclxuICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgICBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW50IGV4Y2VwdHVyaSBlYSBleHBsaWNhYm8uIElsbHVtIHN1c2NpcGl0IGlsbG8sIHBvcnJvIHF1aXNxdWFtIHZvbHVwdGF0ZW1cIixcclxuICAgICAgICBpbWFnZVVSTDpcclxuICAgICAgICAgICAgXCJodHRwczovL3d3dy53YWxscGFwZXJ0aXAuY29tL3dtaW1ncy8xMC0xMDU2NjVfZWFydGgtaG9sb2dyYW0tZGlnaXRhbC1nbG9iZS13b3JsZC1ob2xvZ3JhcGhpYy1pbWFnZS1ob2xvZ3JhbS5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQW5ndWxhclwiLFxyXG4gICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgIFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbnQgZXhjZXB0dXJpIGVhIGV4cGxpY2Fiby4gSWxsdW0gc3VzY2lwaXQgaWxsbywgcG9ycm8gcXVpc3F1YW0gdm9sdXB0YXRlbVwiLFxyXG4gICAgICAgIGltYWdlVVJMOlxyXG4gICAgICAgICAgICBcImh0dHBzOi8vd3d3LmVsaW1wYXJjaWFsLmNvbS9fX2V4cG9ydC8xNjEwNTAzNDUxMTM1L3NpdGVzL2VsaW1wYXJjaWFsL2ltZy8yMDIxLzAxLzEyL2Rpc2VueG8tZGUtaG9sb2dyYW1hcy5qcGdfNTU0Njg4NDY4LmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJOZXh0anNcIixcclxuICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgICBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW50IGV4Y2VwdHVyaSBlYSBleHBsaWNhYm8uIElsbHVtIHN1c2NpcGl0IGlsbG8sIHBvcnJvIHF1aXNxdWFtIHZvbHVwdGF0ZW1cIixcclxuICAgICAgICBpbWFnZVVSTDpcclxuICAgICAgICAgICAgXCJodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL3ZlY3Rvci1ncmF0aXMvZm9uZG8tY29uY2VwdG8tdGVjbm9sb2dpYS1mdXR1cmEtY2lyY3VpdG8tY2liZXJuZXRpY28tb2pvLXZlcmRlLWF6dWxfNDIwNzctMzQyNC5qcGdcIixcclxuICAgIH0sXHJcbl07XHJcblxyXG4iXSwibmFtZXMiOlsic2tpbGxzIiwic2tpbGwiLCJwZXJjZW50YWdlIiwiZXhwZXJpZW5jZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZnJvbSIsInRvIiwicHJvamVjdHMiLCJuYW1lIiwiaW1hZ2UiLCJ3ZWJzaXRlIiwicG9zdHMiLCJjb250ZW50IiwiaW1hZ2VVUkwiXSwic291cmNlUm9vdCI6IiJ9