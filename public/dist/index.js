webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {
setTimeout(function () {
  $.ajax({
    url: '/user.action',
    method: 'get',
    success: function (arr) {
      var liString = arr.map(function (ele) {
        return '<li>' + ele + '</li>';
      }).join('');
      $('#root').html(liString);
    },
    error: function (error) {
      console.log(error);
    }
  });
  $.ajax({
    url: '/list.action',
    method: 'get',
    success: function (arr) {
      let liString = arr.map(function (ele) {
        return '<li>' + ele + '</li>';
      }).join('');
      $('#list').html(liString);
    },
    error: function (error) {
      console.log(error);
    }
  });
}, 1000);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
],[1]);
//# sourceMappingURL=index.js.map