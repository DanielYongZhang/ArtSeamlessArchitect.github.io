window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})


// 格式化时间为 mm:ss
function formatTime(seconds) {
	const minutes = Math.floor(seconds / 60);
	const secs = Math.floor(seconds % 60);
	return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  
  // 更新视频时间显示
  function updateVideoTime(video, timeDisplay) {
	const currentTime = formatTime(video.currentTime);
	const duration = formatTime(video.duration || 0); // 如果 duration 为 NaN，显示 00:00
	timeDisplay.textContent = `${currentTime} / ${duration}`;
  }
  
  // 初始化视频时间显示
  document.addEventListener('DOMContentLoaded', () => {
	const videos = document.querySelectorAll('.video');
	videos.forEach(video => {
	  const timeDisplay = video.parentElement.querySelector('.video-time');
  
	  // 加载元数据时更新总时长
	  video.addEventListener('loadedmetadata', () => {
		updateVideoTime(video, timeDisplay);
	  });
  
	  // 播放时更新当前时间
	  video.addEventListener('timeupdate', () => {
		updateVideoTime(video, timeDisplay);
	  });
	});
  });