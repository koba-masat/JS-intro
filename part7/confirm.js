document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fm').addEventListener('submit', function (e) {
        if (!window.confirm('can I send?')) {
            e.preventDefault();
       }
    }, false);
}, false);