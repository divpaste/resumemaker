document.addEventListener("DOMContentLoaded", function () {
    const editBtn = document.getElementById("edit-btn");
    const downloadBtn = document.getElementById("dwnd-btn");

    const inputs = document.querySelectorAll('input');
    const textAreas = document.querySelectorAll('textarea');
    const cals = document.querySelectorAll('.year');

    const addBtns = document.querySelectorAll('.add-btns');
    const addSkill = document.getElementById("add-skills");
    const skillsArea = document.getElementById("skills-area");
    const addEd = document.getElementById("add-education");
    const edArea = document.getElementById("education-area");
    const addInt = document.getElementById("add-interest");
    const intArea = document.getElementById("interest-area");
    const addCourse = document.getElementById("add-course");
    const courseArea = document.getElementById("course-area");

    let skillCount = 0;
    let edCount = 0;
    let intCount = 0;
    let courseCount = 0;

    downloadBtn.addEventListener('click', () => {
        let resume = document.getElementById("canvas");
        html2pdf().from(resume).save();
    });

    function editResume() {
        editBtn.innerHTML = "EXIT"
        console.log("Resume Editing Started.");
        inputs.forEach(input => {
            input.disabled = false;
        })
        addBtns.forEach(addBtn => {
            addBtn.disabled = false;
        });
        textAreas.forEach(textArea => {
            textArea.disabled = false;
        })
        cals.forEach(cal => {
            cal.disabled = false
        })
        addSkill.addEventListener("click", addSkills);
        addEd.addEventListener("click", addEds);
        addInt.addEventListener("click", addInterests);
        addCourse.addEventListener("click", addCourses);
    }

    function addSkills() {
        if (skillCount == 8) {
            console.log("No Space for more skills.");
            return;
        }
        const skill = document.createElement('input');
        skill.classList.add('resume-info');
        skill.id = "skill";
        skill.placeholder = 'Your Skill';
        skillsArea.appendChild(skill);
        skillCount++;
    }

    function addEds() {
        if (edCount == 2) {
            console.log("No space for more Education entries.");
            return;
        }

        const div = document.createElement('div');
        const deg = document.createElement('input');
        deg.classList.add('resume-info');
        deg.placeholder = 'Degree and Field of Study';
        div.appendChild(deg);

        const school = document.createElement('input');
        school.classList.add('role');
        school.placeholder = 'School / University';
        div.appendChild(school);

        const date = document.createElement('div');
        const fromLabel = document.createElement('p');
        fromLabel.classList.add('resume-info');
        fromLabel.innerHTML = `🗓️ From <select class="year" disabled>
                                    <option value=""></option>
                                    <option value="2025">2025</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                </select> 
                                To <select class="year" disabled>
                                    <option value=""></option>
                                    <option value="2025">2025</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                </select>`;
        date.appendChild(fromLabel);
        div.appendChild(date);
        edArea.appendChild(div);
        edCount++;
    }

    function addInterests() {
        if (intCount == 2) {
            console.log("No space for more Interests.");
            return;
        }

        const interestList = document.createElement('li');
        const interest = document.createElement('input');
        interest.classList.add('resume-info');
        interest.placeholder = 'Career Interest / Passion';
        interestList.appendChild(interest);
        intArea.appendChild(interestList);

        intCount++;
    }

    function addCourses() {
        if (courseCount == 4) {
            console.log("No space for more Courses.");
            return;
        }

        const courseList = document.createElement('li');
        const course = document.createElement('input');
        course.classList.add('resume-info');
        course.placeholder = 'Course Title';
        courseList.appendChild(course);
        courseArea.appendChild(courseList);

        courseCount++;
    }

    editBtn.addEventListener('click', editResume);
    function resetResume() {
        console.log("Resetting Resume.")
        editBtn.innerHTML = "EDIT";
        username.disabled = false;
        username.innerHTML = "YOUR NAME";
    }
});