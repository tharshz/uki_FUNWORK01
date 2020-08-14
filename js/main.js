SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function () {
    SC.stream('/tracks/231182753', function (sound) {
        //function start for button
        $('#start1').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop1').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
