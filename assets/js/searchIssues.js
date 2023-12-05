// Get the form
let searchIssueForm = document.getElementById("search-issue-form");

// Get the details of the issues of the project in JSON
let searchJson = document.getElementById("issue-data").getAttribute("data");

// Parse the data
let searchIssues = JSON.parse(searchJson);

// Get the element where searched results will be shown
let searchList = document.getElementById("issues-list");

// Event listener for form submission
searchIssueForm.addEventListener("submit", function (e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Create an empty array where results will be stored
  let searchedIssues = [];

  // Get form data
  let titleValue = searchIssueForm.querySelector('input[name="tie"]').value;
  let descriptionValue =
    searchIssueForm.querySelector('input[name="des"]').value;

  // Add issues to the searched issues array based on search criteria
  searchIssues.map((el) => {
    if (el.title == titleValue || el.description == descriptionValue) {
      if (!searchedIssues.includes(el)) {
        searchedIssues.push(el);
      }
    }
  });

  // Clear the existing content in the searchList element
  searchList.innerHTML = "";

  // Create a div for each searched issue and add details to the searchList element
  for (let issue of searchedIssues) {
    let Div = document.createElement("div");
    Div.style = "none";
    Div.innerHTML = `
      <div class="card w-100" >
        <div class="card-body" >
          <h4 class="card-title">Title : ${issue.title} </h4>
          <h5 class="card-title">Author : ${issue.author}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Description : ${issue.description}
          </h6>
        </div>
      </div>
    `;
    searchList.appendChild(Div);
  }
});
