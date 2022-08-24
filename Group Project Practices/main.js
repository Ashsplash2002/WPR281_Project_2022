// Project Class
class Project
{
    constructor(name, id)
    {
        this.name = name;
        this.id = id;
    }

    // Display
    displayProject()
    {
        console.log("Name: " + this.name + ", ID: " + this.id);
    }
}

// Person Class
class Person
{
    constructor(id, firstname, surname, email, username, profilePic)
    {
        this.id = id;
        this.firstname = firstname;
        this.surname = surname;
        this.email = email;
        this.username = username;
        this.profilePic = profilePic;
    }
}

// Ticket Class
class Ticket
{
    constructor(summary, details, user, dateID, projectName)
    {
        this.summary = summary,
        this.details = details,
        this.user = user,
        this.dateID = dateID,
        this.project = setProject(projectName)
        this.priority = setPriority(this.project),
        this.assigned = setPerson(),
        this.targetResDate = setTargetResDate(this.dateID, this.priority),
        this.actualResDate = "",
        this.resolutionSumm = "",
        this.status = "open"
    }
}

// Creation of project objects
const project1 = new Project("omega", "omg");
const project2 = new Project("alpha", "alp");
const project3 = new Project("beta", "bet");
// Make Map of projects so that I don't need a case for every project when setting the project.

// Creation of Profile Pictures
// let pic1 = document.createElement

// Creation of People
const person1 = new Person(001, "Emile", "Fourie", "emileFourie@gmail.com", "Emile4Rie", "web-dev-1.png");
const person2 = new Person(002, "Ashle", "Olivier", "ashleOlivier@gmail.com", "AshSplash202", "web-dev-2.png");
const person3 = new Person(003, "Ruhan", "Potgieter", "ruhanPotgieter@gmail.com", "Potter4131", "web-dev-3.png");
const person4 = new Person(001, "Damon", "Hattingh", "damonHattingh@gmail.com", "DaRealRobinDamon", "web-dev-4.png");

function store()
{ //stores items in the localStorage
    var summary = document.getElementById('summ').value;
    var details = document.getElementById('details').value;
    var user = document.getElementById('identifier').value;
    var dateID = document.getElementById('dateID').value;
    var projectName = document.getElementById('project').value;

    let ticket = new Ticket(summary, details, user, dateID, projectName);

    let key;
    if(localStorage.length == 0)
    {
        key = 1;
    }
    else
    {
        key = localStorage.length + 1;
    }
    //converting object to string
    window.localStorage.setItem(key,JSON.stringify(ticket));
}

function editTicket()
{
    // edit ticket
}

function setPerson()
{
    // assign person object
    return person1;
}

function setStatus()
{
    // set Status according to dates
}

function setPriority(project)
{
    // Calculate priority
    //See if there are keywords in the summary and description that demand immediate attention.

    // Check to see if project is a priority or not
    let projectName = project.name;
    let proj = projectName.toLowerCase();
    
    if(proj == project1.name)
    {
        return "low";
    }
    else if(proj == project2.name)
    {
        return "high";
    }
    else if(proj == project3.name)
    {
        return "medium";
    }
    else
    {
        alert("The project entered was incorrect, please edit the ticket and add a valid project.");
    }
}

function setTargetResDate(start, priority)
{
    // set target resolution date
    // date of the report is 'start' and priority level is 'priority'

    // Declare resolution date
    let resDate = new Date(start);

    // Check priority level
    if(priority == "low")
    {
        // 15 days to fix since it is low priority
        resDate.setDate(resDate.getDate() + 15);
    }
    else if(priority == "medium")
    {
        // 10 days to fix since it is medium priority
        resDate.setDate(resDate.getDate() + 10);
    }
    else if(priority == "high")
    {
        // 5 days to fix since it is high priority
        resDate.setDate(resDate.getDate() + 5);
    }
    else
    {
        resDate = null;
    }

    return resDate;
}
function setActualResDate()
{
    // set actual resolution date
}

function setResolutionSumm()
{
    // set resolution summary
}

function setProject(projectName)
{
    // set project object
    let proj = projectName.toLowerCase();
    
    if(proj == project1.name)
    {
        return project1;
    }
    else if(proj == project2.name)
    {
        return project2;
    }
    else if(proj == project3.name)
    {
        return project3;
    }
    else
    {
        alert("The project entered was incorrect, please edit the ticket and add a valid project.");
        return null;
    }
}

function retrieveRecords()
{ //retrieves items in the localStorage
    var key = document.getElementById('retrieveKey').value; //gets key from user
    console.log("retrieve records");
    var records = window.localStorage.getItem(key); //searches for the key in localStorage
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    // alert("TypeOf: " + typeof infor);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

function removeItem()
{ //deletes item from localStorage
    var key = document.getElementById('removeKey').value; //gets key from user
    localStorage.removeItem(key) //passes key to the removeItem method
    console.log("remove items");
}

function clearStorage()
{ //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}

function showAllRecords() 
{
    for (var i = 0; i < localStorage.length; i++) 
    {
        let x = localStorage.key(i); //records
    
        let records = window.localStorage.getItem(x);

        let p = document.createElement("p");
    
        let infor = document.createTextNode(records);
    
    
    
        p.appendChild(infor);
    
        let el = document.getElementById("print");
    
        el.appendChild(p);
    
    
    
        // document.write(localStorage.getItem(x));
    
       
    
        //
    }    
}

window.onload =function()
{ //ensures the page is loaded before functions are executed.
    document.getElementById("ticketForm").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
    document.getElementById("output").onclick = showAllRecords
}