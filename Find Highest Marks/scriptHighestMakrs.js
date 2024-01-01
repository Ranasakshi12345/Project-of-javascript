const studentMarksForm = document.querySelector(".studentForm");
const studentResult = document.querySelector("#blankContainer");

studentMarksForm.addEventListener("submit" , function (event){
    event.preventDefault();

    const marks = Array.from(this.elements['marks[]']).map
    (element => parseFloat(element.value));

    const highestMarks = Math.max(...marks);
    const studentIndex = marks.findIndex(marks => marks === highestMarks) +1;
    const studentName = `Student ${studentIndex}`;

    const results = isNaN(highestMarks) ? "Please enter valid makrs for all student" : `${studentName} scored the highest marks : ${highestMarks}`;

    studentResult.innerHTML = results;
});