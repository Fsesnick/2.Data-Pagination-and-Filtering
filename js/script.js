/*
Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

let html = '';
for(let i =0; i < data.length; i++){
    let student = data[i];
    html +=`
    <li class="student-item cf">
    <div class="student-details">
    <img class="avatar" src="${student.picture.medium}" alt="Profile Picture">
    <h3>${student.name.first} ${student.name.last}</h3>
    <span class="email">${student.email}</span>
    </div>
    <div class="joined-details">
    <span class="date">${student.registered.date}</span>
    </div>
    </li>
    `;
}
//console.log(html);

document.querySelector(".student-list").insertAdjacentHTML('beforeend', html);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
