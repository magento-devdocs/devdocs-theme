function timeSince(date) {
  
  var buildString = function(number, intervalName) {
    var pluralIntervalName = (number === 1) ? intervalName : intervalName + "s";
    return number + " " + pluralIntervalName + " ago";
  }

  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return buildString(interval, "year");
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return buildString(interval, "month");
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return buildString(interval, "day");
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return buildString(interval, "hour");
  }
  return "Just now";
}

var time = document.getElementById("last-modified-at");

if (time) {
  
  var modifiedDate = new Date(time.getAttribute("datetime"));

  if (!isNaN(modifiedDate)) {
    var modifiedTimeAgo = timeSince(modifiedDate);
    var modifiedDateString = time.innerText;

    time.innerText = modifiedTimeAgo;

    if (modifiedDateString) {
      time.parentElement.onclick = function() {
        time.innerText === modifiedTimeAgo
          ? (time.innerText = modifiedDateString)
          : (time.innerText = modifiedTimeAgo);
      };
    }
  }
}
