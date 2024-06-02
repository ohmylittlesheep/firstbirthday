let pageSwiper = new Swiper('.swiper-page', {
    direction: 'vertical',
    height: window.outerHeight,
    spaceBetween: 20,
    on: {
      resize: function(){
        pageSwiper.params.height = window.outerHeight;
        for ( var i = 0; i < pageSwiper.slides.length; i++ ){
          pageSwiper.slides[i].style.height = `${window.outerHeight}px`;
        }
      },
    }
})

var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});

var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(37.48529903978291, 126.89692206617288),
			level: 2
		};

		var map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.48529903978291, 126.89692206617288); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 지도가 확대 또는 축소되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
kakao.maps.event.addListener(map, 'zoom_changed', function() {        
    
});