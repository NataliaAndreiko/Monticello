const mailInput = document.getElementById("mail-input");
const galeryPicks = $(".galery__block-item-pick");
const picksZooms = $(".zoom-in");
const header = document.getElementById('header')

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});

//jQuery use for hover effect
galeryPicks.each(function (i) {
    $(this).on("mouseover", function () {
        $(this).css("filter", "brightness(70%)");
        picksZooms.eq(i).css("display", "block");
    });

    $(this).on("mouseout", function () {
        $(this).css("filter", "brightness(100%)");
        picksZooms.eq(i).css("display", "none");
    });
});

//form validation
mailInput.onblur = function () {
    if (!mailInput.value.includes("@")) {
        mailInput.classList.add("invalid");
        mailInput.style.borderBottom = "1px solid #ff4545";
    }
};

mailInput.onfocus = function () {
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
        mailInput.style.borderBottom = "1px solid #2c4058";
    }
};

function initMap() {
    var location = { lat: 40.7128, lng: -74.006 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
        styles: [
            {
                elementType: "geometry",
                stylers: [
                    {
                        color: "#f5f5f5",
                    },
                ],
            },
            {
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#616161",
                    },
                ],
            },
            {
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        color: "#f5f5f5",
                    },
                ],
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#bdbdbd",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#eeeeee",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#757575",
                    },
                ],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#e5e5e5",
                    },
                ],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9e9e9e",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                featureType: "road.arterial",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#757575",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#dadada",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#616161",
                    },
                ],
            },
            {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9e9e9e",
                    },
                ],
            },
            {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#e5e5e5",
                    },
                ],
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#eeeeee",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#c9c9c9",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9e9e9e",
                    },
                ],
            },
        ],
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: "../assets/icons/Pin.svg",
    });
}
