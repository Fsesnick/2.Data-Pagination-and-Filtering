# 2.Data Pagination and Filtering
Display a long list of student information.
## functions

*showPage()

Index to get 9 studens per page, or you can choose how many students per page, changing the value o 'ItemsPerPage' variable.
```bash
  let startIndex = (page * ItemsPerPage) - ItemsPerPage;
  let endIndex = page * ItemsPerPage;
```
*addPagination()
 
 To calculate the number of buttons needed, depending on the size of the list
 ```bash
 let numOfPages = Math.ceil(list.length / ItemsPerPage);
 ```
