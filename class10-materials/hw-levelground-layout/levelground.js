function playVideo() {
    //Hide the play button
    document.querySelector('.play-button').style.display = 'none';

    const iframe = document.querySelector('.video');
    iframe.style.display = 'block';

    const iframeSrc = iframe.src;

    // video.style.display = 'block';
    // playButton.style.display = 'none';

    iframe.src = iframeSrc + "&autoplay=1";
}