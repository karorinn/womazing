
  class ItcAccordion {
      constructor(target, config) {
          this._el = typeof target === 'string' ? document.querySelector(target) : target;
          const defaultConfig = {
          alwaysOpen: true
          };
          this._config = Object.assign(defaultConfig, config);
          this.addEventListener();
      }
      addEventListener() {
          this._el.addEventListener('click', (e) => {
          const elHeader = e.target.closest('.accordion__header');
          if (!elHeader) {
              return;
          }
          if (!this._config.alwaysOpen) {
              const elOpenItem = this._el.querySelector('.accordion__item_show');
              if (elOpenItem) {
              elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
              }
          }
          elHeader.parentElement.classList.toggle('accordion__item_show');
          });
      }
  }

  new ItcAccordion('#accordion-1');

  const list =document.querySelector('.list'), //получаю список
    items = document.querySelectorAll('.shop__item') //получаю элементы списка
    listItems = document.querySelectorAll('.list__item')

  function getItems(className){
    items.forEach(item => {
      if (item.classList.contains(className)) {
        item.style.display = 'block'  
        } else{
          item.style.display = 'none'
        }
  })

  }
  function filter() { //функция фильтр
    list.addEventListener('click', event => { //Обработчик событий "кликa"
      const targetId = event.target.dataset.id //получаю значение атрибутов data-id 
      const target = event.target

      listItems.forEach(listItem =>listItem.classList.remove('active')) //убираю класс активности у всех элементов
      target.classList.add('active')//дабвыление класса активности выбранному элементу

      if(target.classList.contains('list__item')){
        target.classList.add('active')//класс активности не исчезает
      }
      console.log(targetId) //вывожу атрибуты

      switch(targetId){
        case 'all':
          getItems('shop__item')
          break
        case 'tshirt':
          getItems(targetId)
        break
        case 'sweetshot':
          getItems(targetId)
        break
        case 'kardig':
          getItems(targetId)
        break
        case 'kupalnik':
          getItems(targetId)
        break
        case 'tolstovka':
          getItems(targetId)
        break
      }
    })
  }
  filter() //вызов функции

  const img = document.querySelector('.slider-image');
  const dots = document.querySelectorAll('.slider-dot');
  // Создадим массив всех изображений
  const imgArr = ['images/Фото товара.png','./images/Фото товара (1).png','./images/Фото товара (2).png'];
  // Создаем текущий индекс
  let currentIndex = 0;

  // Функция смены индекса у dots
  function changeIndex(ind) {
      //Получаем индекс 
      currentIndex = ind;
      // Произвести процесс смены слайдов
      slide(currentIndex);
  }

  function nextIndex(direction){
      currentIndex +=direction;
      // дополнительно делаем проверку чтобы индекс не вышел за пределы
      if(currentIndex >= imgArr.length){
          // Получаем первый элемент путем обнуления
          currentIndex = 0;
      } else if (currentIndex<0) {
          // Получаем последний элемент
          currentIndex = imgArr.length - 1;
      }
      slide(currentIndex);    
  }

  function slide(index){
      img.style.display = 'none';
      setTimeout(()=>{
          img.style.display = 'block';
      }, 0);
      //меняем атрибут src
      img.src = imgArr[index];
      //Обновляем точки
      updateDots(index);
      
  }
  // Активный статус 
  function updateDots(index) {
      for (let dot of dots) {
          dot.classList.remove('activ');
      }
      dots[index].classList.add('activ');
  }

  // Модальное окно
  const modal = document.getElementById("modal");
  const btn = document.getElementById("open-modal__btn");
  const closeBtn = document.querySelector(".modal__close");

  btn.addEventListener("click", function () {
    modal.classList.add("modal_active");

    closeBtn.addEventListener("click", closeModal);

    function closeModal() {
      modal.classList.remove("modal_active");

      closeBtn.removeEventListener("click", closeModal);

      modal.removeEventListener("click", hideModal);
    }

    modal.addEventListener("click", hideModal);

    //Закрытие при клике вне зоны модального окна
    function hideModal(event) {
      if (event.target === modal) {
        closeModal();
      }
    }
  });

    //======================//
    //Создание бургер меню
    //получаем иконку бургер меню
    const hamb = document.querySelector("#hamb");
    const popup = document.querySelector("#popup");
    // Глубокое клонирование со всем содержимым
    const menu = document.querySelector("#menu").cloneNode(1);
    // const body = document.body;
    
    hamb.addEventListener("click", hambHandler);

    function hambHandler(e) {
      popup.classList.toggle('open');
      renderPopup();
      // body.classList.toggle('noscroll');
    }
    function renderPopup() {
      popup.appendChild(menu);
    }

    //======================//
