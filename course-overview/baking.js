function addBakingCourse() {
    var courses=JSON.parse(localStorage.getItem('courseArray'));
    courses.push('Baking')
    localStorage.setItem('courseArray',JSON.stringify(courses));
}
if(localStorage.getItem('projects')==null) {
    localStorage.setItem('projects',[JSON.stringify([['Baking','Baking','baking descrition']])])
}
localStorage.setItem('currentpage','baking.html')
document.getElementById('buybutton').addEventListener('click',e=>addBakingCourse());