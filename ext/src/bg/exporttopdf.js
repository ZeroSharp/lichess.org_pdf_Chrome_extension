var gameurl = $('meta[property="og:url"]').attr('content');
if (gameurl !== null)
{
    if (gameurl.indexOf('/black') !== -1) {
        gameurl = gameurl.substr(0, gameurl.lastIndexOf('/'));
    }
    var gameid = gameurl.substr(gameurl.lastIndexOf('/') + 1)
    var pgnOptions = $("strong:contains('PGN')");
    if (pgnOptions)
    {
        var embedInWebsite = pgnOptions.parent();
        if (embedInWebsite) {
            if (embedInWebsite.length === 0)
            {
                //throw Error("Could not find div within pgnOptions.");
            } else {
                //var exportToPdfLink = "http://lichess-export-pdf.eu-west-1.elasticbeanstalk.com/main.php?id=" + gameid;  
                var exportToPdfLink = "https://e7tyur4sib.execute-api.eu-west-1.amazonaws.com/dev/export/" + gameid;
                embedInWebsite.append($('<a data-icon="" class="text" target="_blank" rel="nofollow" href="' + exportToPdfLink + '">Print-friendly PDF</a>'));
            }
        }
    }
}