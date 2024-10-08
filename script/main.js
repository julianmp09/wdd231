const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// menu hamburguesa
// The funtions for hamburger button.

const hamButton = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

hamButton.addEventListener('click', () => {
	navbar.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// 
const courseContainer = document.getElementById('course');
const totalCreditsDisplay = document.getElementById('total-credits');

// Function to calculate the total credits
const calculateTotalCredits = (courses) => {
    return courses.reduce((total, course) => total + course.credits, 0);
}

// Function to display courses in the container
const displayCourses = (filteredCourses) => {
    courseContainer.innerHTML = ''; // Clean the container
    filteredCourses.forEach(course => {
        const button = document.createElement('button');
        button.classList.add('category-2');
        button.textContent = `${course.subject} ${course.number}`;
        if (course.completed) {
            button.classList.add('completed');
        } else {
            button.classList.add('not-completed');
        }
        courseContainer.appendChild(button);
    });

    // Show total credits
    const totalCredits = calculateTotalCredits(filteredCourses);
    totalCreditsDisplay.textContent = totalCredits; // Update the total credits in the span
}

// Function to filter courses
const filterCourses = (category) => {
    let filteredCourses;
    if (category === 'CSE') {
        filteredCourses = courses.filter(course => course.subject === 'CSE');
    } else if (category === 'WDD') {
        filteredCourses = courses.filter(course => course.subject === 'WDD');
    } else {
        filteredCourses = courses; // Show all courses
    }
    displayCourses(filteredCourses);
}

// Show all courses on page load
displayCourses(courses);

// Create the global variables
const year = document.querySelector("#currentyear");
const modified = document.querySelector("#lastModified");

// I created this arrow funtion only for have the date and hour. Function to format the date
const formatDate = (date) => {
    let options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };
    return date.toLocaleDateString("es-ES", options);
}

// Use the date object
const today = new Date();
const oLastModif = new Date(document.lastModified);
const formattedDate = formatDate(oLastModif);

// assigning to variable "year" the current date
year.innerHTML = `${today.getFullYear()}`;

// assigning to variable modified the last modication
modified.innerHTML = ` Last Modification: ${formattedDate}`;