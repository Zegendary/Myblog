
setTimeout(function () {
  $.ajax({
    url: '/user.action',
    method: 'get',
    success: function (arr) {
      var liString = arr.map(function (ele) {
        return '<li>'+ ele+ '</li>'
      }).join('')
      $('#root').html(liString)
    },
    error: function (error) {
      console.log(error)
    }
  })
  //模拟post
  $.ajax({
    url: '/list.action',
    method: 'post',
    data: JSON.stringify(['hangzhou','zhangxinwang']),
    success: function (arr) {
      let liString = arr.map(function (ele) {
        return '<li>'+ ele+ '</li>'
      }).join('')
      $('#list').html(liString)
    },
    error: function (error) {
      console.log(error)
    }
  })
},1000)
