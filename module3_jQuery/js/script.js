const headerSign = $('.header__sign2');
const modalBtn = $('.present__btn');
const closeBtn = $('.modal-order__close');
const elem = $('.navigation__city');
const modalOrder = $('.modal-order');
const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');
const modalOrderForm = $('.modal-order__form');

const headerBurger = $('.header__burger');
const navigationClose = $('.navigation__close');
const navigation = $('.navigation');

modalBtn.click(function() {
  modalOrder.show(500)
});

closeBtn.click(function() {
  modalOrder.hide(500)
})

modalOrderInput.focus(function() {
  modalOrderTitle.text(`Введите ${$(this).attr('placeholder')}`)
})

modalOrderInput.blur(function() {
  modalOrderTitle.text(`Заполните форму`)
})

modalOrderForm.submit(function(e) {
  e.preventDefault();
  $.post('https://jsonplaceholder.typicode.com/todos', $(this).serialize());

})

headerBurger.click(function() {
  navigation.animate({
    left: 0
  }, 500, function() {
    navigationClose.animate({
      opacity: 1,
    }, 300, 'swing')
  })
})

const closeModal = () => {
  navigation.animate({
    left: -400
  }, 500)
}

navigationClose.on('click', closeModal)

$('body').click(function(e) {
  if(e.target !== headerBurger.get(0) && !e.target.closest('.navigation')) {
    closeModal()
  }
})
