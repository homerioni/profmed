ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.892969, 37.479786],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'Профмед'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mapPin.svg',
            // Размеры метки.
            iconImageSize: [rem(2.3), rem(2.9)],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [rem(-1.1), rem(-2.7)]
        });

    myMap.geoObjects.add(myPlacemark);
});