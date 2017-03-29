
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
  $.ajax({
    url: '/list.action',
    method: 'get',
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
