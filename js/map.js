ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.735383, 37.701646],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'Sanuvox'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mapPin.svg',
            // Размеры метки.
            iconImageSize: [rem(6.4), rem(6.4)],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [rem(-3), rem(-6)]
        });

    myMap.geoObjects.add(myPlacemark);
});