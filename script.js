var now = new Date().getTime();
function appendHistoryItem(historyItem) {
    var historyParagraph = jQuery("<p>").text(historyItem.url);
    jQuery('#history').append(historyParagraph);
}
chrome.history.search({
        'text': '',              // Return every history item....
        'startTime': 0,  // that was accessed less than one week ago.
        'maxResults': 2147483647
    },
    function(historyItems) {
        var finishTime = new Date().getTime();
        console.log(finishTime - now);
        console.log("2");
        console.log(historyItems);
        jQuery('#history').append(jQuery("<p>").text(historyItems.length))
        // For each history item, get details on all visits.
        for (var i = 0; i < historyItems.length; ++i) {
            var historyItem = historyItems[i];
            appendHistoryItem(historyItem);
        }
    });
console.log("1");