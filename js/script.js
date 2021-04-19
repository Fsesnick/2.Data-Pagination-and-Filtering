/*
Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
ItemsPerPage = 9;

function showPage(list, page) {

  let startIndex = (page * ItemsPerPage) - ItemsPerPage;
  let endIndex = page * ItemsPerPage;
     // select the element with a class of `student-list` 
  let studentList = document.querySelector(".student-list");
  studentList.innerHTML ='';

  for(let i = 0; i< list.length; i++){

    // element to display the student information
      let html ='';

      if(i >= startIndex && i < endIndex ){

        html += ` <li class="student-item cf">
         <div class="student-details">
             <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
             <h3>${list[i].name.first} ${list[i].name.last}</h3>
             <span class="email">${list[i].email}</span>
             </div>
             <div class="joined-details">
             <span class="date">${list[i].registered.date}</span>
         </div>
         </li>
       `;
         studentList.insertAdjacentHTML('beforeend', html); 
      }
      
    }
    
  }
  
showPage(data, 1);




/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions


/*
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
*/