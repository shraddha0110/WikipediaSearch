$(document).ready(function () {
    $('#search').click(function () {
        var searchTerm = $('#searchTerm').val();
        var url = 'https://en.wikipedia.org/w/api.php?action=query&&srsearch=' + searchTerm + '&prop=revisions&format=json&list=search&utf8=1';

        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "jsonp",
            success: function (data) {
                console.log(data.query.search);
                
                $('#output').html('');
                for (var i = 0; i < data.query.search.length; i++) {
                    $('#output').prepend('<li><a href=\'https://en.wikipedia.org/wiki/' + data.query.search[i].title  + '\' target=\'blank\'>' + data.query.search[i].title + '</a><br>'  + data.query.search[i].snippet + '</li><br>');
                }
            },

            error: function (err) {
                alert("Error");
            }

        });

    });
});
