function order() {
  //$('.order').css({ display: 'flex' })
  //$('body').css({ overflowY: 'hidden' })

  alert("Заказ временно недоступен, обратитесь в Telegram @wwyynnee")
}

function closeOrder() {
  $('.order').hide()
  $('body').css({ overflowY: 'scroll' })
}
