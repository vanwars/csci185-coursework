// ignore this function for now. We'll go over it
// on Wednesday:
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2024/fall/`;
    courseList = await fetch(url).then((response) => response.json());
    displayResults(courseList);
}

function displayResults(courses) {
    // your code here.
    console.log(courses);
}
