
//var map;
//var infoWindow;

//var markersData = [
//    {
//        lat: 40.6386333,
//        lng: -8.745,
//        nome: "Parque de Campismo Praia da Barra",
//        morada1: "Rua Diogo Cão, 125",
//        morada2: "Praia da Barra",
//        codPostal: "3830-772 Gafanha da Nazaré" // não colocar virgula no último item de cada maracdor
//    },
//    {
//        lat: 40.59955,
//        lng: -8.7498167,
//        nome: "Parque de Campismo da Costa Nova",
//        morada1: "Quinta dos Patos, n.º 2",
//        morada2: "Praia da Costa Nova",
//        codPostal: "3830-453 Gafanha da Encarnação" // não colocar virgula no último item de cada maracdor
//    },
//    {
//        lat: 40.6247167,
//        lng: -8.7129167,
//        nome: "Parque de Campismo da Gafanha da Nazaré",
//        morada1: "Rua dos Balneários do Complexo Desportivo",
//        morada2: "Gafanha da Nazaré",
//        codPostal: "3830-225 Gafanha da Nazaré" // não colocar virgula no último item de cada maracdor
//    } // não colocar vírgula no último marcador
//];


//function initialize() {
//    chamaMapa(); 
//    var mapOptions = {
//        center: new google.maps.LatLng(40.601203, -8.668173),
//        zoom: 17,
//        mapTypeId: 'roadmap',
//    };

//    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
//    infoWindow = new google.maps.InfoWindow();
    
//    google.maps.event.addListener(map, 'click', function () {
//        infoWindow.close();
//    });

//    displayMarkers();
//}
//google.maps.event.addDomListener(window, 'load', initialize);

//function displayMarkers() {

//    var bounds = new google.maps.LatLngBounds();
    
//    for (var i = 0; i < markersData.length; i++) {

//        var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
//        var nome = markersData[i].nome;
//        var morada1 = markersData[i].morada1;
//        var morada2 = markersData[i].morada2;
//        var codPostal = markersData[i].codPostal;

//        createMarker(latlng, nome, morada1, morada2, codPostal);        
//        bounds.extend(latlng);
//    }
    
//    map.fitBounds(bounds);
//}

//// Função que cria os marcadores e define o conteúdo de cada Info Window.
//function createMarker(latlng, nome, morada1, morada2, codPostal) {
//    var marker = new google.maps.Marker({
//        map: map,
//        position: latlng,
//        title: nome
//    });
    
//    google.maps.event.addListener(marker, 'click', function () {

//        // Variável que define a estrutura do HTML a inserir na Info Window.
//        var iwContent = '<div id="iw_container">' +
//            '<div class="iw_title">' + nome + '</div>' +
//            '<div class="iw_content">' + morada1 + '<br />' +
//            morada2 + '<br />' +
//            codPostal + '</div></div>';
        
//        infoWindow.setContent(iwContent);
       
//        infoWindow.open(map, marker);
//    });
//}

//function chamaMapa() {
//    //aqui vamos definir as coordenadas de latitude e longitude no qual
//    //sera exibido o nosso mapa
//    var latlng = new google.maps.LatLng(-30.0277, -51.2287); //DEFINE A LOCALIZAÇÃO EXATA DO MAPA
//    //aqui vamos configurar o mapa, como o zoom, o centro do mapa, etc
//    var myOptions = {
//        zoom: 15,//utilizaremos o zoom 15
//        center: latlng,//aqui a nossa variavel constando latitude e
//        //longitude ja declarada acima
//        mapTypeId: google.maps.MapTypeId.ROADMAP
//    };
//    //criando o mapa dentro da div com o id="map_canvas" que ja criamos
//    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
//    //DEFINE AS COORDENADAS do ponto exato - CENTRALIZAÇÃO DO MAPA
//    map.setCenter(new google.maps.LatLng(-30.0277, -51.2287));
//}
//function abreLink() {
//    window.open('http://www.google.com.br');
//}