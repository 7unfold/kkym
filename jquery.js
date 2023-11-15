$(document).ready(function(){
    function changeSelected() {
        var selected = $(".selected")[0].children[0].children[0].innerHTML.toLowerCase();
        selected = "#".concat(selected);
        var playlist = $("#playlists-container")[0].children;
        for (element in playlist) {
        var check = "#".concat(playlist[element].id);
        if (check === selected) {
            $(check).toggleClass("selected");
        };
    };
    }

    changeSelected()

    $(".selectable").click(function(){
        var button = $(this);
        $(".selected").each( function( index, listItem){
            if (this !== button) {
                $(this).removeClass("selected");
            };
        });
        $(this).toggleClass("selected");
        changeSelected()
    });
});