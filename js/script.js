function showGallery(streetName) {
    var streetNameElement = document.getElementById('streetName');
    streetNameElement.innerHTML = '<span class="underline">' + streetName + '</span>';

    var gallery = document.getElementById('portfolioGallery');
    gallery.innerHTML = '';

    var images = [];

    if (streetName === 'NE Timber Hills Dr') {
        images = [
            'images/ne-timber-hills-dr/DSC00061.jpg',
            'images/ne-timber-hills-dr/DSC00062.jpg',
            'images/ne-timber-hills-dr/DSC00080.jpg',
            'images/ne-timber-hills-dr/DSC00138.jpg',
            'images/ne-timber-hills-dr/DSC00045.jpg',
            'images/ne-timber-hills-dr/DSC00045.jpg',
            'images/ne-timber-hills-dr/DSC00063.jpg',
            'images/ne-timber-hills-dr/DSC00075.jpg',
            'images/ne-timber-hills-dr/DSC00082.jpg',
            'images/ne-timber-hills-dr/DSC00087.jpg',
            'images/ne-timber-hills-dr/DSC00089.jpg',
            'images/ne-timber-hills-dr/DSC00096.jpg',
            'images/ne-timber-hills-dr/DSC00109.jpg',
            'images/ne-timber-hills-dr/DSC00115.jpg',
            'images/ne-timber-hills-dr/DSC00117.jpg',
            'images/ne-timber-hills-dr/DSC00140.jpg',
            'images/ne-timber-hills-dr/DSC00143.jpg',
            'images/ne-timber-hills-dr/DSC00152.jpg'
        ];
    } else if (streetName === 'Theden St') {
        images = [
            'images/theden-st/leekitchen-3.JPG',
            'images/theden-st/leekitchen-4.JPG',
            'images/theden-st/leekitchen-5.JPG',
            'images/theden-st/leekitchen-10.JPG',
            'images/theden-st/leekitchen-12.JPG',
            'images/theden-st/leekitchen-18.JPG',
            'images/theden-st/leekitchen-21.JPG',
            'images/theden-st/leekitchen-23.JPG',
            'images/theden-st/leekitchen-1.JPG',
            'images/theden-st/leekitchen-6.JPG',
            'images/theden-st/leekitchen-13.JPG',
            'images/theden-st/leekitchen-14.JPG',
            'images/theden-st/leekitchen-22.JPG',
            'images/theden-st/leekitchen-24.JPG'
        ];
    } else if (streetName === 'W 126th St') {
        images = [
            'images/w-126th-st/SOE00010.jpg',
            'images/w-126th-st/SOE00013.jpg',
            'images/w-126th-st/SOE00047.jpg',
            'images/w-126th-st/SOE00050.jpg',
            'images/w-126th-st/SOE00053.jpg',
            'images/w-126th-st/SOE00058.jpg',
            'images/w-126th-st/SOE00061.jpg',
            'images/w-126th-st/SOE00062.jpg',
            'images/w-126th-st/SOE00082.jpg',
            'images/w-126th-st/SOE00090.jpg',
            'images/w-126th-st/SOE00099.jpg',
            'images/w-126th-st/SOE00115.jpg',
            'images/w-126th-st/SOE00030.jpg'
        ];
    } else if (streetName === 'Terrace St') {
        images = [
            'images/terrace-st/DSC00065.jpg',
            'images/terrace-st/DSC00067.jpg',
            'images/terrace-st/DSC00069.jpg',
            'images/terrace-st/DSC00078.jpg',
            'images/terrace-st/DSC00104.jpg',
            'images/terrace-st/DSC00106.jpg',
            'images/terrace-st/DSC00024.jpg',
            'images/terrace-st/DSC00028.jpg',
            'images/terrace-st/DSC00031.jpg',
            'images/terrace-st/DSC00035.jpg',
            'images/terrace-st/DSC00038.jpg',
            'images/terrace-st/DSC00042.jpg',
            'images/terrace-st/DSC00045.jpg',
            'images/terrace-st/DSC00063.jpg',
            'images/terrace-st/DSC00071.jpg',
            'images/terrace-st/DSC00092.jpg',
            'images/terrace-st/DSC00093.jpg'
        ];
    } else if (streetName === 'High Dr') {
        images = [
            'images/high-dr/SOE01956.jpg',
            'images/high-dr/SOE01959.jpg',
            'images/high-dr/SOE01960.jpg',
            'images/high-dr/SOE01962.jpg',
            'images/high-dr/SOE01968.jpg',
            'images/high-dr/SOE01969.jpg',
            'images/high-dr/SOE01972.jpg',
            'images/high-dr/SOE01973.jpg',
            'images/high-dr/SOE01978.jpg',
            'images/high-dr/SOE02000.jpg',
            'images/high-dr/SOE02017.jpg',
            'images/high-dr/SOE02032.jpg',
            'images/high-dr/SOE02041.jpg',
            'images/high-dr/SOE02042.jpg',
            'images/high-dr/SOE02045.jpg',
            'images/high-dr/SOE02046.jpg',
            'images/high-dr/SOE02049.jpg',
            'images/high-dr/SOE02058.jpg',
            'images/high-dr/SOE02066.jpg',
            'images/high-dr/SOE02087.jpg',
            'images/high-dr/SOE02092.jpg',
            'images/high-dr/SOE02101.jpg',
            'images/high-dr/SOE02113.jpg'
        ];
    } else if (streetName === 'Berryhill Dr') {
        images = [
            'images/berryhill-dr/SOE00004.jpg',
            'images/berryhill-dr/SOE00032.jpg',
            'images/berryhill-dr/SOE00043.jpg',
            'images/berryhill-dr/SOE00069.jpg',
            'images/berryhill-dr/SOE00074.jpg',
            'images/berryhill-dr/SOE00081.jpg',
            'images/berryhill-dr/SOE00084.jpg',
            'images/berryhill-dr/SOE00090.jpg',
            'images/berryhill-dr/SOE00093.jpg',
            'images/berryhill-dr/SOE00098.jpg',
            'images/berryhill-dr/SOE00115.jpg',
            'images/berryhill-dr/SOE00122.jpg',
            'images/berryhill-dr/SOE00151.jpg'
        ];
    } else if (streetName === '51st St') {
        images = [
            'images/51st-st/bath-1.JPG',
            'images/51st-st/bath-4.JPG',
            'images/51st-st/bath-5.JPG',
            'images/51st-st/bath-6.JPG',
            'images/51st-st/bath-7.JPG',
            'images/51st-st/bath-8.JPG',
            'images/51st-st/bath-15.JPG',
            'images/51st-st/bath-18.JPG',
            'images/51st-st/bath-3.JPG',
            'images/51st-st/bath-11.JPG',
            'images/51st-st/bath-14.JPG',
            'images/51st-st/bath-16.JPG',
            'images/51st-st/bath-19.JPG'
        ];
    }

    images.forEach(function(imageSrc) {
        var img = document.createElement('img');
        img.src = imageSrc;
        gallery.appendChild(img);
    });
}
