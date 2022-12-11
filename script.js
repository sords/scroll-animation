const track = document.getElementById('img-track');

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}
window.onmouseup = e => {
    track.dataset.mouseDownAt = '0'
}
window.onmousemove = e => {
    if (track.dataset.mouseDownAt === '0') return;
    const mouseDelt = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const persentage = (mouseDelt / maxDelta) * -100,
        nextpersentage1 = parseFloat(track.dataset.prevPercentage) + persentage,
        nextpersentage =  Math.max(Math.min(nextpersentage1, 0), -100);

    track.dataset.persentage = nextpersentage

    // track.style.transform = `translate(${nextpersentage}%,-50%)`
    track.animate({
        transform: `translate(${nextpersentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    for (const image of track.getElementsByClassName('image')) {
        // image.style.objectPosition  = `${nextpersentage + 100}% 50%`;
        // console.log(nextpersentage)
        image.animate({
            objectPosition: `${nextpersentage + 80}% 50%`
        }, {duration: 1200, fill: 'forwards'})
    }
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = '0';
    track.dataset.prevPercentage = track.dataset.persentage

}


