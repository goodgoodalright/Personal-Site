(function($) {
    const showVideo = document.getElementById("showVideo");
    const btn = document.getElementById("toggle");
    btn.onclick = function() {
        if (targetDiv.style.display !== "none") {
            showVideo.style.display = "none";
        } else {
            showVideo.style.display = "contents";
        }
    }
})(jQuery);