function showGallery(streetName) {
    document.getElementById('portfolioGalleryContainer').scrollIntoView({ behavior: 'smooth' });

    var streetNameElement = document.getElementById('streetName');
    streetNameElement.innerHTML = '<span class="underline">' + streetName + '</span>';

    var gallery = document.getElementById('portfolioGallery');
    gallery.innerHTML = '';

    var images = [];

    if (streetName === 'NE Timber Hills Dr') {
        images = [
            'images/ne-timber-hills-dr/Artboard8.png',
            'images/ne-timber-hills-dr/Artboard9.png',
            'images/ne-timber-hills-dr/Artboard10.png',
            'images/ne-timber-hills-dr/Artboard11.png',
            'images/ne-timber-hills-dr/Artboard1.png',
            'images/ne-timber-hills-dr/Artboard2.png',
            'images/ne-timber-hills-dr/Artboard3.png',
            'images/ne-timber-hills-dr/Artboard4.png',
            'images/ne-timber-hills-dr/Artboard5.png',
            'images/ne-timber-hills-dr/Artboard6.png',
            'images/ne-timber-hills-dr/Artboard7.png',
            'images/ne-timber-hills-dr/Artboard13.png',
            'images/ne-timber-hills-dr/Artboard14.png',
            'images/ne-timber-hills-dr/Artboard15.png',
            'images/ne-timber-hills-dr/Artboard16.png',
            'images/ne-timber-hills-dr/Artboard17.png',
            'images/ne-timber-hills-dr/Artboard18.png'
        ];
    } else if (streetName === 'Theden St') {
        images = [
            'images/theden-st/Artboard8.png',
            'images/theden-st/Artboard9.png',
            'images/theden-st/Artboard10.png',
            'images/theden-st/Artboard11.png',
            'images/theden-st/Artboard12.png',
            'images/theden-st/Artboard34.png',
            'images/theden-st/Artboard35.png',
            'images/theden-st/Artboard36.png',
            'images/theden-st/Artboard1.png',
            'images/theden-st/Artboard2.png',
            'images/theden-st/Artboard3.png',
            'images/theden-st/Artboard4.png',
            'images/theden-st/Artboard5.png',
            'images/theden-st/Artboard6.png'
        ];
    } else if (streetName === 'W 126th St') {
        images = [
            'images/w-126th-st/Artboard1.png',
            'images/w-126th-st/Artboard2.png',
            'images/w-126th-st/Artboard3.png',
            'images/w-126th-st/Artboard4.png',
            'images/w-126th-st/Artboard5.png',
            'images/w-126th-st/Artboard6.png',
            'images/w-126th-st/Artboard7.png',
            'images/w-126th-st/Artboard13.png',
            'images/w-126th-st/Artboard14.png',
            'images/w-126th-st/Artboard15.png',
            'images/w-126th-st/Artboard16.png',
            'images/w-126th-st/Artboard17.png',
            'images/w-126th-st/Artboard8.png'
        ];
    } else if (streetName === 'Terrace St') {
        images = [
            'images/terrace-st/Artboard8.png',
            'images/terrace-st/Artboard9.png',
            'images/terrace-st/Artboard10.png',
            'images/terrace-st/Artboard11.png',
            'images/terrace-st/Artboard12.png',
            'images/terrace-st/Artboard34.png',
            'images/terrace-st/Artboard1.png',
            'images/terrace-st/Artboard2.png',
            'images/terrace-st/Artboard3.png',
            'images/terrace-st/Artboard4.png',
            'images/terrace-st/Artboard5.png',
            'images/terrace-st/Artboard6.png',
            'images/terrace-st/Artboard7.png',
            'images/terrace-st/Artboard13.png',
            'images/terrace-st/Artboard14.png',
            'images/terrace-st/Artboard15.png',
            'images/terrace-st/Artboard16.png',
            'images/terrace-st/Artboard17.png'
        ];
    } else if (streetName === 'High Dr') {
        images = [
            'images/high-dr/Artboard1.png',
            'images/high-dr/Artboard2.png',
            'images/high-dr/Artboard3.png',
            'images/high-dr/Artboard4.png',
            'images/high-dr/Artboard5.png',
            'images/high-dr/Artboard6.png',
            'images/high-dr/Artboard7.png',
            'images/high-dr/Artboard13.png',
            'images/high-dr/Artboard14.png',
            'images/high-dr/Artboard15.png',
            'images/high-dr/Artboard16.png',
            'images/high-dr/Artboard17.png',
            'images/high-dr/Artboard18.png',
            'images/high-dr/Artboard19.png',
            'images/high-dr/Artboard20.png',
            'images/high-dr/Artboard21.png',
            'images/high-dr/Artboard22.png',
            'images/high-dr/Artboard23.png',
            'images/high-dr/Artboard24.png',
            'images/high-dr/Artboard25.png',
            'images/high-dr/Artboard26.png',
            'images/high-dr/Artboard27.png',
            'images/high-dr/Artboard28.png'
        ];
    } else if (streetName === 'Berryhill Dr') {
        images = [
            'images/berryhill-dr/Artboard1.png',
            'images/berryhill-dr/Artboard2.png',
            'images/berryhill-dr/Artboard3.png',
            'images/berryhill-dr/Artboard4.png',
            'images/berryhill-dr/Artboard5.png',
            'images/berryhill-dr/Artboard6.png',
            'images/berryhill-dr/Artboard7.png',
            'images/berryhill-dr/Artboard13.png',
            'images/berryhill-dr/Artboard14.png',
            'images/berryhill-dr/Artboard15.png',
            'images/berryhill-dr/Artboard16.png',
            'images/berryhill-dr/Artboard17.png',
            'images/berryhill-dr/Artboard18.png'
        ];
    } else if (streetName === '51st St') {
        images = [
            'images/51st-st/Artboard8.png',
            'images/51st-st/Artboard9.png',
            'images/51st-st/Artboard10.png',
            'images/51st-st/Artboard11.png',
            'images/51st-st/Artboard12.png',
            'images/51st-st/Artboard1.png',
            'images/51st-st/Artboard2.png',
            'images/51st-st/Artboard3.png',
            'images/51st-st/Artboard4.png',
            'images/51st-st/Artboard5.png',
            'images/51st-st/Artboard6.png',
            'images/51st-st/Artboard7.png'
        ];
    }

    images.forEach(function(imageSrc) {
        var imgElement = document.createElement('a');
        imgElement.href = imageSrc;
        imgElement.setAttribute('data-fancybox', 'gallery');
        var img = document.createElement('img');
        img.src = imageSrc;
        imgElement.appendChild(img);
        gallery.appendChild(imgElement);
    });

    $('[data-fancybox="gallery"]').fancybox({
    });
}