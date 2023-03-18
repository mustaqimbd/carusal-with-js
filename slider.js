const images = [
    './my-carousel/images/pic-1.jpg',
    './my-carousel/images/pic-2.jpg',
    './my-carousel/images/pic-3.jpg',
    './my-carousel/images/pic-4.jpg',
    './my-carousel/images/pic-5.jpg',
    './my-carousel/images/pic-6.jpg',
    './my-carousel/images/pic-7.jpg',
    './my-carousel/images/pic-8.jpg',
    './my-carousel/images/pic-9.jpg'
]
let imgIndex = 0;
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex]
    document.getElementById('slider-img').src = imgUrl;
    imgIndex++;
}, 1000)