
let currentTab;

function showContent(tabName) {
    if(currentTab != null)
    {
        currentTab.className = currentTab.className.replace(/ activebutton/, "");
    }
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
    content.classList.remove('active');
    });

    currentTab = document.getElementsByClassName(tabName)[0];

    if(currentTab !== null && currentTab !== undefined)
    {
        currentTab.className += " activebutton";
    }

    var content = document.getElementById(tabName);
    content.classList.add('active');
}

function copyToClipboard() {
  const username = 'qltes';
  navigator.clipboard.writeText(username);
  alert('Username Copied to Clipboard!');
}