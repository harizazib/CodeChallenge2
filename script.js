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

document.write("<div class='output-box'>");
document.write("<h2>Section 03 Result</h2>");

// 3.Create Looping (for loop) to print student data such name, credithours and current gpa and their eligibility (status)
for (var i = 0; i < studentData.length; i++){

    document.write("<div>");
    document.write("<b>Name:</b> " + studentData[i][0] + "<br>");
    document.write("<b>Credit Hours:</b> " + studentData[i][1] + "<br>");
    document.write("<b>Current GPA:</b> " + studentData[i][2] + "<br>");
    // -- AI ASSISTED CODE START --
    document.write("<b>Status:</b> " + checkEligibility(studentData[i][1], studentData[i][2]) + "<br>");
    // -- AI ASSISTED CODE END -- 
    document.write("<hr style='border-top: 1px dotted #ccc;'>");
    document.write("</div>");

}