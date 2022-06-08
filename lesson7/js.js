
const imagesToLoad = document.querySelectorAll("[data-src]");

const imgOptions = {
    threshold: 0, 
    rootMargin: "0px 0px -300px 0px"
};

const loadImages = (image) => {
    let src = image.getAttribute('data-src');
    image.setAttribute('src', src);
    image.removeAttribute('data-src');};


if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);


    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });

}

else {

}
// let imagesToLoad = document.querySelectorAll('img[data-src]');
// const loadImages = (image) => {
//   image.setAttribute('src', image.getAttribute('data-src'));
//   image.onload = () => {
//     image.removeAttribute('data-src');
//   };
// }

// if('IntersectionObserver' in window) {
//     const observer = new IntersectionObserver((items, observer) => {
//       items.forEach((item) => {
//         if(item.isIntersecting) {
//           loadImages(item.target);
//           observer.unobserve(item.target);
//         }
//       });
//     });
//     imagesToLoad.forEach((img) => {
//       observer.observe(img);
//     });
//   } else {
//     imagesToLoad.forEach((img) => {
//       loadImages(img);
//     });
//   }

// ;

// imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });