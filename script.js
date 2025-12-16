// 1. Define Multi-Dimensional Array studentData)
// Format: [Name (String), Credit Hour (Number), Current GPA (Number)]
var studentData = [
    ["Pavi","18","3.95"],
    ["Adry","16","3.75"],
    ["Basheer","17","3.85"],
    ["King","21","4.00"]
];

// 2. Create function to measure dean list eligibility using conditional statement

function checkEligibility(credithour, gpa){
    if(credithour >= 18 && gpa >= 3.50){
        return "<span class='eligible'>Eligible for Dean's List</span>";
    } else {
        return "<span class='not-eligible'>Not Eligible for Dean's List</span>";
    }
}
// 3.Create Looping (for loop) to print student data such name, credithours and current gpa and their eligibility (status)
function displayStudents() {
    var result = document.getElementById("result");
    result.innerHTML = "<h2>Section 03 Result</h2>";

    for (var i = 0; i < studentData.length; i++) {
        result.innerHTML +=
            "<div>" +
            "<b>Name:</b> " + studentData[i][0] + "<br>" +
            "<b>Credit Hours:</b> " + studentData[i][1] + "<br>" +
            "<b>Current GPA:</b> " + studentData[i][2] + "<br>" +
            "<b>Status:</b> " +
            checkEligibility(studentData[i][1], studentData[i][2]) +
            "<br><hr style='border-top: 1px dotted #ccc;'></div>";
    }
}

function addStudent() {
    var name = document.getElementById("name").value;
    var credit = document.getElementById("credit").value;
    var gpa = document.getElementById("gpa").value;

    // Add to array
    studentData.push([name, Number(credit), Number(gpa)]);

    // Refresh display
    displayStudents();

    // Clear input
    document.getElementById("name").value = "";
    document.getElementById("credit").value = "";
    document.getElementById("gpa").value = "";
}

displayStudents();
