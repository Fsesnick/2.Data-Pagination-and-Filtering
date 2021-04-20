/*
Techdegree:
FSJS Project 2 - Data Pagination and Filtering
Fernanda Sesnick
*/


//Here we can change how many students we want on each page.
ItemsPerPage = 9;

/**
* Function: showPage()
* create and insert/append the elements needed to display a "page" of students
* @param {array of objects} list - The data of students.
* @param {Number} page - The number of the page to show.
**/

function showPage(list, page) {

  let startIndex = (page * ItemsPerPage) - ItemsPerPage;
  let endIndex = page * ItemsPerPage;
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
  

/**
* Function: addPagination()
* create and insert/append the elements needed for the pagination buttons
* @param {array of objects} list - The data of students.
**/

function addPagination(list) {

  let numOfPages = Math.ceil(list.length / ItemsPerPage);
    // select the element with a class of `link-list` and assign it to a variable
  let linkList = document.querySelector(".link-list");
  linkList.innerHTML ='';
   
for(i =1; i <= numOfPages; i++){
      
      linkList.insertAdjacentHTML("beforeend", `
      <li>
        <button type="button">${ i }</button>
      </li>
    `);
}
    // give the first pagination button a class of "active"
    linkList.firstElementChild.firstElementChild.className = "active";
   
    linkList.addEventListener('click', (evnt) => {
    
     if(evnt.target.tagName ==='BUTTON'){

        // remove the "active" class from the previous button
        document.querySelector(".active").className = '';
        // add the active class to the clicked button
        evnt.target.className = 'active';
        let text = evnt.target.textContent;
        showPage(list, text);
     }

    });

  }


// Call functions
showPage(data, 1);
addPagination(data);

//Aiming for Meets Expectations
