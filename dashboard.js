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
localStorage.setItem('currentpage','dashboard.html')
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