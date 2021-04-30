//modal javascript
function createModal() {
    document.getElementById('modalbackground').style.display="block";
    console.log('foo');
}
function closeModal() {
    document.getElementById('modalbackground').style.display="none";
}
document.getElementById('newproject').addEventListener('click',e=>createModal());
document.getElementById('closemodal').addEventListener('click',e=>closeModal());
//document.getElementById('modalbackground').addEventListener('click',e=>closeModal());

//have rowbox which is a counter for boxes on each row, max 4 boxes on each row max 8 projects, indexes store all info
//JSON.stringify and json.parse
function findSubjects(subjectarray) {
    subjectarray.forEach(subject=>{
        var newoption = document.createElement("option");
        newoption.value = subject;
        newoption.innerText = subject;
        document.getElementById('subject').appendChild(newoption);
    })
    if(subjectarray.length == 0) {
        var newoption = document.createElement("option");
        newoption.value = 'No Subjects';
        newoption.innerText = 'No Subjects';
        document.getElementById('subject').appendChild(newoption);
    }
}
/*
var row1=0;
var row2=0;
localStorage.setItem('row1',row1);
var placeholder = [];
localStorage.setItem('subjectarray',JSON.stringify(placeholder))
var subjectarray = JSON.parse(localStorage.getItem('subjectarray'));
document.getElementById('newproject').addEventListener('click',e=>findSubjects(subjectarray));
function addNewProject(row1,row2) {
    if(row1+row2>8) {
        alert("Error: you can have a maximum of 8 projects at a time.");
        return;
    } else if(row1>=4) {
        row2+=1;
    } else {
        row1+=1;
    }
    //stuff will go here later
}

document.getElementById('submitbutton').addEventListener('click',addNewProject(row1,row2));


*/