
/*

function showpopup(){
    document.getElementsByClassName('popup')[0].style.display = "block";
}
*/

function submitticket(){
    hidepopup();
    }
    function hidepopup(){
        document.getElementsByClassName('popup')[0].style.display = "none";
    }
function showpopup(){
    document.getElementsByClassName('popup')[0].style.display = "block";
}




document.getElementById('popup').addEventListener('Submit', saveIssue);

function saveIssue(e) {
var issuedevname = document.getElementById('DevName').value;
var issueproj = document.getElementById('projName').value;
var issuePriority = document.getElementById('selectPriority').value;
var issueDesc = document.getElementById('issueDesc').value;
var issueId = chance.guid();


var issue = {
id: issueId,
description: issueDesc,
severity: issuePriority,
assignedTo: issuedevname,
projname: issueproj,

}

if (localStorage.getItem('issues') == null) {
var issues = [];
issues.push(issue);
localStorage.setItem('issues', JSON.stringify(issues));    
}
else {
var issues = JSON.parse(localStorage.getItem('issues'));
issues.push(issue);
localStorage.setItem('issues', JSON.stringify(issues));
}

document.getElementById('popup').reset();

fetchIssues();

e.preventDefault();
}


function fetchIssues() {
var issues = JSON.parse(localStorage.getItem('issues'));

var issuesListe = document.getElementById('issuesList');

issuesList.innerHTML = '';

for (const i = 0; i < issues.length; i++) {
var id = issues[i].id;
var desc = issues[i].description;
var severity = issues[i].severity;
var assignedTo = issues[i].assignedTo;
var projname = issues[i].projname;

issuesList.innerHTML += '<div class = "well">' +
                    '<h6>Issue ID: ' + id + '</h6>' + 
                    '<p><span class = "label label-info">' + projname + '</span></p>' +
                    '<h3>' + desc + '</h3>' +
                    '<p><span class = "glypicon glypicon-time"></span> ' + severity + '</p>' +
                    '<p><span class = "glypicon glypicon-user"></span> ' + assignedTo + '</p>' + 
                     '</div>';
}
}
