//modal javascript
function newChoice(subject) {
    var newoption = document.createElement("option");
    newoption.value = subject;
    newoption.innerText = subject;
    document.getElementById('subject').appendChild(newoption);
}
function addProject() {
    var projectlist=JSON.parse(localStorage.getItem('projects'));
    var title=document.getElementById('projtitle').value;
    var subject=document.getElementById('subject').value;
    var desc=document.getElementById('projdesc').value;
    projectlist.push([title,subject,desc]);
    localStorage.setItem('projects',JSON.stringify(projectlist));
    location.reload();
}
function displayProject(info) {
    var box = document.createElement("div");
    var text=document.createElement('p');
    var detailsbtn=document.createElement('button');
    var deletebtn=document.createElement('button');
    text.innerHTML=info[0]+' ('+info[1]+') - <span class=projectboxspan>'+info[2]+'</span>';
    detailsbtn.innerHTML='Details'
    deletebtn.innerHTML='Delete'
    box.classList.add('projectbox');
    text.classList.add('projectboxtext');
    detailsbtn.classList.add('detailsbtn');
    deletebtn.classList.add('deletebtn');
    box.appendChild(text);
    box.appendChild(detailsbtn);
    box.appendChild(deletebtn);
    document.getElementById('projectrow').appendChild(box);
    console.log('foo')
}
function createModal() {
    document.getElementById('modalbackground').style.display="block";
    console.log('foo');
}
function closeModal() {
    document.getElementById('modalbackground').style.display="none";
}
function findSubjects(subjectarray) {
    subjectarray.forEach(newChoice);
}
function findProjects(projects) {
    projects.forEach(displayProject);
}
document.getElementById('newproject').addEventListener('click',e=>createModal());
document.getElementById('newproject').addEventListener('click',e=>findSubjects(JSON.parse(localStorage.getItem('courseArray'))));
document.getElementById('closemodal').addEventListener('click',e=>closeModal());
document.getElementById('submitbutton').addEventListener('click',e=>addProject());
findProjects(JSON.parse(localStorage.getItem('projects')));
if(localStorage.getItem('projects')==null) {
    localStorage.setItem('projects',[JSON.stringify([['Baking','Baking','baking descrition']])])
}
//document.getElementById('modalbackground').addEventListener('click',e=>closeModal());

//have rowbox which is a counter for boxes on each row, max 4 boxes on each row max 8 projects, indexes store all info
//JSON.stringify and json.parse
