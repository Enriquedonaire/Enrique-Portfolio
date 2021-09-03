"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzM2YjQxMWY5MDM4MzUyYjMyNzMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLE1BQU0sR0FBRyxDQUVsQjtBQUNJQyxFQUFBQSxLQUFLLEVBQUUsWUFEWDtBQUVJQyxFQUFBQSxVQUFVLEVBQUU7QUFGaEIsQ0FGa0IsRUFNbEI7QUFDSUQsRUFBQUEsS0FBSyxFQUFFLE1BRFg7QUFFSUMsRUFBQUEsVUFBVSxFQUFFO0FBRmhCLENBTmtCLEVBVWxCO0FBQ0lELEVBQUFBLEtBQUssRUFBRSxLQURYO0FBRUlDLEVBQUFBLFVBQVUsRUFBRTtBQUZoQixDQVZrQixFQWNsQjtBQUNJRCxFQUFBQSxLQUFLLEVBQUUsU0FEWDtBQUVJQyxFQUFBQSxVQUFVLEVBQUU7QUFGaEIsQ0Fka0IsRUFrQmxCO0FBQ0lELEVBQUFBLEtBQUssRUFBRSxRQURYO0FBRUlDLEVBQUFBLFVBQVUsRUFBRTtBQUZoQixDQWxCa0IsRUFzQmxCO0FBQ0lELEVBQUFBLEtBQUssRUFBRSxXQURYO0FBRUlDLEVBQUFBLFVBQVUsRUFBRTtBQUZoQixDQXRCa0IsRUEwQmxCO0FBQ0lELEVBQUFBLEtBQUssRUFBRSxRQURYO0FBRUlDLEVBQUFBLFVBQVUsRUFBRTtBQUZoQixDQTFCa0IsRUE4QmxCO0FBQ0lELEVBQUFBLEtBQUssRUFBRSxZQURYO0FBRUlDLEVBQUFBLFVBQVUsRUFBRTtBQUZoQixDQTlCa0IsQ0FBZjtBQXFDQSxJQUFNQyxXQUFXLEdBQUcsQ0FFdkI7QUFDSUMsRUFBQUEsS0FBSyxFQUFFLGtDQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRSxrRUFGakI7QUFHSUMsRUFBQUEsSUFBSSxFQUFFLElBSFY7QUFJSUMsRUFBQUEsRUFBRSxFQUFFO0FBSlIsQ0FGdUIsRUFTdkI7QUFDSUgsRUFBQUEsS0FBSyxFQUFFLGdDQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRSxrRUFGakI7QUFHSUMsRUFBQUEsSUFBSSxFQUFFLElBSFY7QUFJSUMsRUFBQUEsRUFBRSxFQUFFO0FBSlIsQ0FUdUIsRUFldkI7QUFDSUgsRUFBQUEsS0FBSyxFQUFFLDhDQURYO0FBRUlDLEVBQUFBLFdBQVcsRUFBRSxrRUFGakI7QUFHSUMsRUFBQUEsSUFBSSxFQUFFLElBSFY7QUFJSUMsRUFBQUEsRUFBRSxFQUFFO0FBSlIsQ0FmdUIsRUFxQnZCO0FBQ0lILEVBQUFBLEtBQUssRUFBRSx5REFEWDtBQUVJQyxFQUFBQSxXQUFXLEVBQUUsa0VBRmpCO0FBR0lDLEVBQUFBLElBQUksRUFBRSxJQUhWO0FBSUlDLEVBQUFBLEVBQUUsRUFBRTtBQUpSLENBckJ1QixDQUFwQjtBQStCQSxJQUFNQyxRQUFRLEdBQUcsQ0FDcEI7QUFDSUMsRUFBQUEsSUFBSSxFQUFFLG1CQURWO0FBRUlKLEVBQUFBLFdBQVcsRUFBRSxpS0FGakI7QUFHSUssRUFBQUEsS0FBSyxFQUFFLGNBSFg7QUFJSUMsRUFBQUEsT0FBTyxFQUFFO0FBSmIsQ0FEb0IsRUFRcEI7QUFDSUYsRUFBQUEsSUFBSSxFQUFFLFNBRFY7QUFFSUosRUFBQUEsV0FBVyxFQUFFLGlLQUZqQjtBQUdJSyxFQUFBQSxLQUFLLEVBQUUsZ0JBSFg7QUFJSUMsRUFBQUEsT0FBTyxFQUFFO0FBSmIsQ0FSb0IsRUFjcEI7QUFDSUYsRUFBQUEsSUFBSSxFQUFFLFVBRFY7QUFFSUosRUFBQUEsV0FBVyxFQUFFLGlLQUZqQjtBQUdJSyxFQUFBQSxLQUFLLEVBQUUsUUFIWDtBQUlJQyxFQUFBQSxPQUFPLEVBQUU7QUFKYixDQWRvQixFQW9CcEI7QUFDSUYsRUFBQUEsSUFBSSxFQUFFLGtCQURWO0FBRUlKLEVBQUFBLFdBQVcsRUFBRSxpS0FGakI7QUFHSUssRUFBQUEsS0FBSyxFQUFFLGdCQUhYO0FBSUlDLEVBQUFBLE9BQU8sRUFBRTtBQUpiLENBcEJvQixFQTBCcEI7QUFDSUYsRUFBQUEsSUFBSSxFQUFFLGVBRFY7QUFFSUosRUFBQUEsV0FBVyxFQUFFLGlLQUZqQjtBQUdJSyxFQUFBQSxLQUFLLEVBQUUsaUJBSFg7QUFJSUMsRUFBQUEsT0FBTyxFQUFFO0FBSmIsQ0ExQm9CLEVBZ0NwQjtBQUNJRixFQUFBQSxJQUFJLEVBQUUsV0FEVjtBQUVJSixFQUFBQSxXQUFXLEVBQUUsaUtBRmpCO0FBR0lLLEVBQUFBLEtBQUssRUFBRSxpQkFIWDtBQUlJQyxFQUFBQSxPQUFPLEVBQUU7QUFKYixDQWhDb0IsQ0FBakI7QUF5Q0EsSUFBTUMsS0FBSyxHQUFHLENBQ2pCO0FBQ0lSLEVBQUFBLEtBQUssRUFBRSxPQURYO0FBRUlTLEVBQUFBLE9BQU8sRUFDSCx1SUFIUjtBQUlJQyxFQUFBQSxRQUFRLEVBQ0o7QUFMUixDQURpQixFQVFqQjtBQUNJVixFQUFBQSxLQUFLLEVBQUUsU0FEWDtBQUVJUyxFQUFBQSxPQUFPLEVBQ0gsdUlBSFI7QUFJSUMsRUFBQUEsUUFBUSxFQUNKO0FBTFIsQ0FSaUIsRUFlakI7QUFDSVYsRUFBQUEsS0FBSyxFQUFFLFFBRFg7QUFFSVMsRUFBQUEsT0FBTyxFQUNILHVJQUhSO0FBSUlDLEVBQUFBLFFBQVEsRUFDSjtBQUxSLENBZmlCLENBQWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG5cclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0phdmFTY3JpcHQnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDEwMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdIVE1MJyxcclxuICAgICAgICBwZXJjZW50YWdlOiAxMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnQ1NTJyxcclxuICAgICAgICBwZXJjZW50YWdlOiAxMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUmVhY3RKUycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnTmV4dEpTJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3NSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdFeHByZXNzSlMnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDkwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ05vZGVKUycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnR2l0L0dpdGh1YicsXHJcbiAgICAgICAgcGVyY2VudGFnZTogMTAwLFxyXG4gICAgfSxcclxuXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXMgPSBbXHJcblxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnRnVsbC1TdGFjayBEZXZlbG9wZXIgYXQgSXJvbmhhY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBcIixcclxuICAgICAgICBmcm9tOiAyMDIxLFxyXG4gICAgICAgIHRvOiAyMDIxLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdGdWxsLVN0YWNrIERldmVsb3BlciBGcmVlbGFuY2UnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBcIixcclxuICAgICAgICBmcm9tOiAyMDE5LFxyXG4gICAgICAgIHRvOiAyMDIwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnRGlnaXRhbCBDaW5lbWEgYXQgTWF0ZXJpYSBQcmlzbWEgUHJvZHVjdGlvbnMnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBcIixcclxuICAgICAgICBmcm9tOiAyMDA5LFxyXG4gICAgICAgIHRvOiAyMDE5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnRG9jdG9yLU9waHRoYWxtb2xvZ2lzdCBhdCBDT0QgRGlhZ25vc2lzIE9jdWxhciBDbGluaWNhbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIFwiLFxyXG4gICAgICAgIGZyb206IDIwMDksXHJcbiAgICAgICAgdG86IDIwMTksXHJcblxyXG4gICAgfSxcclxuXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnR29rdSBpbiB0aGUgQ2xvdWQnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3Jkc1wiLFxyXG4gICAgICAgIGltYWdlOiAnR29rdUdhbWUuanBnJyxcclxuICAgICAgICB3ZWJzaXRlOiBcImh0dHBzOi8vZW5yaXF1ZWRvbmFpcmUuZ2l0aHViLmlvL0dPS1UtSU4tVEhFLUNMT1VELUdBTUVcIlxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0Z1bm55ZnknLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3Jkc1wiLFxyXG4gICAgICAgIGltYWdlOiAnZnVubnlmeUFwcC5qcGcnLFxyXG4gICAgICAgIHdlYnNpdGU6IFwiaHR0cHM6Ly9mdW5ueWZ5Lmhlcm9rdWFwcC5jb21cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnUmVjeWNsdXAnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZXJlIGFyZSBtYW55IHZhcmlhdGlvbnMgb2YgcGFzc2FnZXMgb2YgTG9yZW0gSXBzdW0gYXZhaWxhYmxlLCBidXQgdGhlIG1ham9yaXR5IGhhdmUgc3VmZmVyZWQgYWx0ZXJhdGlvbiBpbiBzb21lIGZvcm0sIGJ5IGluamVjdGVkIGh1bW91ciwgb3IgcmFuZG9taXNlZCB3b3Jkc1wiLFxyXG4gICAgICAgIGltYWdlOiAnYmcuanBnJyxcclxuICAgICAgICB3ZWJzaXRlOiBcImh0dHBzOi8vcmVjeWNsdXAuaGVyb2t1YXBwLmNvbS9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnQ292aWQtMTkgVHJhY2tlcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLCBvciByYW5kb21pc2VkIHdvcmRzXCIsXHJcbiAgICAgICAgaW1hZ2U6ICdwb3J0Zm9saW80LnBuZycsXHJcbiAgICAgICAgd2Vic2l0ZTogXCJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnTW9lYmlvdXMtSG9tZScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLCBvciByYW5kb21pc2VkIHdvcmRzXCIsXHJcbiAgICAgICAgaW1hZ2U6ICdwb3J0Zm9saW81LmpwZWcnLFxyXG4gICAgICAgIHdlYnNpdGU6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ01vb2QtU29uZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bSBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLCBvciByYW5kb21pc2VkIHdvcmRzXCIsXHJcbiAgICAgICAgaW1hZ2U6ICdwb3J0Zm9saW82LmpwZWcnLFxyXG4gICAgICAgIHdlYnNpdGU6IFwiXCJcclxuICAgIH0sXHJcbl07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlJlYWN0XCIsXHJcbiAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgXCJMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2ludCBleGNlcHR1cmkgZWEgZXhwbGljYWJvLiBJbGx1bSBzdXNjaXBpdCBpbGxvLCBwb3JybyBxdWlzcXVhbSB2b2x1cHRhdGVtXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6XHJcbiAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cud2FsbHBhcGVydGlwLmNvbS93bWltZ3MvMTAtMTA1NjY1X2VhcnRoLWhvbG9ncmFtLWRpZ2l0YWwtZ2xvYmUtd29ybGQtaG9sb2dyYXBoaWMtaW1hZ2UtaG9sb2dyYW0uanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkFuZ3VsYXJcIixcclxuICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgICBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW50IGV4Y2VwdHVyaSBlYSBleHBsaWNhYm8uIElsbHVtIHN1c2NpcGl0IGlsbG8sIHBvcnJvIHF1aXNxdWFtIHZvbHVwdGF0ZW1cIixcclxuICAgICAgICBpbWFnZVVSTDpcclxuICAgICAgICAgICAgXCJodHRwczovL3d3dy5lbGltcGFyY2lhbC5jb20vX19leHBvcnQvMTYxMDUwMzQ1MTEzNS9zaXRlcy9lbGltcGFyY2lhbC9pbWcvMjAyMS8wMS8xMi9kaXNlbnhvLWRlLWhvbG9ncmFtYXMuanBnXzU1NDY4ODQ2OC5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTmV4dGpzXCIsXHJcbiAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgXCJMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2ludCBleGNlcHR1cmkgZWEgZXhwbGljYWJvLiBJbGx1bSBzdXNjaXBpdCBpbGxvLCBwb3JybyBxdWlzcXVhbSB2b2x1cHRhdGVtXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6XHJcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS92ZWN0b3ItZ3JhdGlzL2ZvbmRvLWNvbmNlcHRvLXRlY25vbG9naWEtZnV0dXJhLWNpcmN1aXRvLWNpYmVybmV0aWNvLW9qby12ZXJkZS1henVsXzQyMDc3LTM0MjQuanBnXCIsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuIl0sIm5hbWVzIjpbInNraWxscyIsInNraWxsIiwicGVyY2VudGFnZSIsImV4cGVyaWVuY2VzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZyb20iLCJ0byIsInByb2plY3RzIiwibmFtZSIsImltYWdlIiwid2Vic2l0ZSIsInBvc3RzIiwiY29udGVudCIsImltYWdlVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==