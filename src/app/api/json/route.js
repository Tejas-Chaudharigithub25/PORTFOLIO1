

import { NextResponse } from 'next/server';

export const dynamic = "force-static";

export async function GET(request) {

    const projectsData = {
        'projects': [
            { id: 1, name: 'Tribute Page (Codsoft Task)', desc: 'An interactive tribute page honoring the life and legacy of Chhatrapati Sambaji Maharaj, the founder of the Maratha Empire. The site features a detailed biography, a gallery of key events, and quotes, all crafted with HTML, CSS, and JavaScript.', tech:['HTML', 'CSS', 'JavaScript'], link:'https://github.com/Tejas-Chaudharigithub25/CODESOFT_TASK-1', img: 'imgs/tribute.png', year: '2023' },
            { id: 2, name: 'Traverse Booking (Codsoft Task)', desc: 'Traverse" is a comprehensive travel booking website built with HTML, CSS, and JavaScript for a dynamic user interface. It uses PHP for server-side logic and MySQL to manage a robust database of flights, hotels, and tours. This project enables users to easily search, book, and manage their travel itineraries.', tech:['HTML', 'CSS', 'JavaScript','Bootstrap','PHP','MySQL'], link:'https://github.com/Tejas-Chaudharigithub25/CODESOFT_TASK-2', img: 'imgs/trav.jpg', year: '2023' },
            { id: 3, name: 'Portfolio Template', desc: 'A portfolio website template built with HTML, CSS, and JavaScript offers a clean, modern design to showcase your work. It`s fully responsive, ensuring a great viewing experience on any device, and uses smooth CSS animations and JavaScript for interactive elements. This template provides a solid foundation for anyone to quickly create a professional online portfolio', tech:['HTML', 'CSS', 'JavaScript'], link:'https://github.com/Tejas-Chaudharigithub25/Portfolio_Template', img: 'imgs/portfoliot.png', year: '2024' },
            { id: 4, name: 'To Do list', desc: 'A simple To-Do List application built with HTML, CSS, and JavaScript that allows users to create, manage, and track tasks. The application includes user authentication, enabling users to sign up, log in, and securely manage their personal tasks. Features include adding new tasks, marking tasks as complete, editing existing tasks, and deleting tasks. The interface is designed to be clean and intuitive, providing a seamless user experience for efficient task management.', tech:['HTML', 'CSS', 'JavaScript'], link:'https://github.com/Tejas-Chaudharigithub25/ToDo-List-App', img: 'imgs/todo.png', year: '2024' },
            { id: 5, name: 'Crima Activity intelligence', desc: 'Our Crime Activity Intelligence Android app is a final year project that uses XML for UI design and Java for backend logic. It allows users to input, visualize, and analyze crime data, helping to identify crime hotspots and trends. The app provides a user-friendly interface for intelligent crime data management.', tech:['Android','Xamarin','Java','Rest API'], link:'https://github.com/Tejas-Chaudharigithub25/Crime-Activity-Intelligence', img: 'https://github.com/Tejas-Chaudharigithub25/Crime-Activity-Intelligence/raw/main/Snapshots/2.png', year: '2025' },
            { id: 6, name: 'Wheather App', desc: 'A sleek, modern, and responsive weather application built with React.js and Vite. Weather-App fetches real-time weather data using the Open-Meteo API and provides location-based search get using the Nominatim API. Get instant updates on temperature, humidity, wind speed, and more with a clean and intuitive UI.', tech:['React Js', 'JavaScript', 'Bootstrap','Rest API','Weather API'], link:'https://github.com/Tejas-Chaudharigithub25/Weather-App', img: 'https://github.com/Tejas-Chaudharigithub25/Weather-App/raw/main/wheather%20App/screen%20of%20wheather%20app.png', year: '2025' },
            { id: 7, name: 'Stone Paper Scissor Game', desc: 'An interactive Rock-Paper-Scissors game built with HTML, CSS, and JavaScript. This project showcases front-end development skills, including DOM manipulation, event handling, and conditional logic. Players can enjoy a simple, engaging experience against the computer, demonstrating a practical application of core web technologies.', tech:['HTML', 'CSS', 'JavaScript'],link:'https://github.com/Tejas-Chaudharigithub25/SPS-Stone-Paper-Scissor-Game', img: 'https://github.com/Tejas-Chaudharigithub25/SPS-Stone-Paper-Scissor-Game/raw/main/SPS/assets/screen2.png', year: '2025' },
            // { id: 8, name: 'Music Player', desc: 'loe', img: , year: '2025' },
        ],
        'education': [
            { id: 1, name: 'BE. (Computer Engineering)', marks: '7.93 CGPA', university: 'North Maharashtra University', year: '2025' },
            { id: 2, name: 'Diploma in (Computer Technology)', marks: '81%', university: 'MSBTE', year: '2022' },

        ],
        'skills': [
            { id: 1, name: 'HTML', img: 'TiHtml5' },
            { id: 2, name: 'CSS', img: 'SiCss3' },
            { id: 3, name: 'JavaScript', img: 'FaJsSquare' },
            { id: 4, name: 'Bootstrap', img: 'FaBootstrap' },
            { id: 5, name: 'Tailwind', img: 'RiTailwindCssFill' },
            { id: 6, name: 'Web Development', img: 'LiaLaptopCodeSolid' },
            { id: 7, name: 'Jquery', img: 'SiJquery' },
            { id: 8, name: 'PHP', img: 'SiPhp' },
            { id: 9, name: 'Laravel', img: 'FaLaravel' },
            { id: 10, name: 'Python', img: 'SiPython' },
            { id: 11, name: 'C', img: '' },
            { id: 12, name: 'C++', img: 'TbBrandCpp' },
            { id: 13, name: 'Java', img: 'FaJava' },
            { id: 14, name: 'C#', img: '' },
            { id: 15, name: 'MERN', img: 'LiaLaptopCodeSolid' },
            { id: 16, name: 'React', img: 'FaReact' },
            { id: 17, name: 'Express js', img: 'SiExpress' },
            { id: 18, name: 'Node js', img: 'FaNode' },
            { id: 19, name: 'MySQL', img: 'SiMysql' },
            { id: 20, name: 'MongoDB', img: 'SiMongodb' },
        ],

        'certificates': [
            { id: 1, name: 'Udemy (Java Logic)', desc: 'A "Java Logic Certificate" on Udemy is not a standard, official certification. It is a certificate of completion from a specific course that focuses on core Java concepts like programming logic, data structures, and algorithms. These courses are designed to build a strong foundation in problem-solving using Java.', img: 'imgs/udemy.jpg', year: '2025' },
            { id: 2, name: 'JavaScript (Infosys Springboard)', desc: 'Learn Front-End development with JavaScript at Infosys Springboard, acquiring skills to build interactive and dynamic web applications.', img: 'imgs/infosys.jpg', year: '2023' },
            { id: 3, name: 'SQL (HackerRank)', desc: 'The HackerRank SQL (Intermediate) certificate is a 2023 online assessment that validates a person`s ability to write complex SQL queries. It serves as a verified credential for job seekers in roles like data analyst or junior database administrator, highlighting their skills in subqueries, data aggregation, and joins.', img: 'imgs/rank.jpg', year: '2023' },
            { id: 4, name: 'HTML (Great Learning)', desc: 'An HTML certificate from Great Learning in 2023 is a certificate of completion you earn after finishing their free, online "Front End Development - HTML" course. This certificate validates your fundamental knowledge of HTML, including its syntax, tags, and structure for building web pages.', img: 'imgs/html.jpg', year: '2023' },
            { id: 5, name: 'Python (Guvi)', desc: 'A Python certificate from GUVI in 2023 was a globally recognized certification, often co-certified by IIT Madras, that validated an individual`s skills in Python programming. It typically covered everything from foundational concepts to advanced topics and was earned by completing a course and passing an assessment.', img: 'imgs/guvi.jpg', year: '2023' },
        ],
        'internship': [
            { id: 1, name: 'Web Development Internship (CodSoft)', desc: 'The CodSoft 2023 web development internship was a virtual, month-long program focused on hands-on full-stack development using HTML, CSS, JavaScript, PHP, and MySQL. It was a project-based learning experience designed to help participants build a portfolio and gain practical skills.', img: 'imgs/codsoft.jpg', year: '2023' },
            { id: 2, name: 'Industrial Training at Infotech Incorporate', desc: 'Successfully completed a comprehensive industrial training program at Infosys Inc. in 2023, earning a certificate in Xamarin Forms and C# app development. The training provided hands-on experience in building cross-platform mobile applications, covering key concepts in C# programming, UI/UX design, and database integration.', img: 'imgs/infotech.jpg', year: '2022' },
        ],
        'hackathone': [
            { id: 1, name: 'Level Supermind, Mumbai.', desc: 'The Level Supermind hackathon in Mumbai is a 24-hour AI innovation event where thousands of participants build agentic AI solutions. It`s an intense coding marathon focused on practical skills, offering a platform for developers to showcase their talent and compete for prizes.', img: 'imgs/supermind.jpg', year: '2025' },
            { id: 2, name: 'Odoo Combat, Gandhinagar.', desc: 'The Odoo Combat, Gandhinagar 2023, was a 24-hour coding challenge where tech enthusiasts developed innovative solutions based on a surprise theme. Participants, including students and professionals, competed for prizes by showcasing their coding skills, teamwork, and innovation.', img: 'imgs/odoo.jpg', year: '2025' },
        ],
    };
    return NextResponse.json({ data: projectsData, headers: { 'Content-Type': 'application/json' }, msg: 'ok', status: 201 });
}