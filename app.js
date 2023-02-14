const pageNumber = document.getElementById('pageNumber');
const issuesData = document.getElementById('issuesData');
//Fetching Data

const fetchIssues = (pageNumber) => {
  const url = `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayIssues(data))
    .catch((error) => console.log(error));
};
// Display Data in li
const displayIssues = (issues) => {
  issuesData.innerHTML = '';
  issues.forEach((issue) => {
    const issueName = document.createElement('li');
    issueName.textContent = issue.title;
    issuesData.appendChild(issueName);
  });
};
// page setting
var currentPage = 1;
fetchIssues(currentPage);
pageNumber.textContent = `Page Number ${currentPage}`;

document.getElementById('next').addEventListener('click', () => {
  currentPage += 1;
  fetchIssues(currentPage);
  pageNumber.textContent = `Page Number: ${currentPage}`;
});

document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage -= 1;
    fetchIssues(currentPage);
    pageNumber.textContent = `Page Number: ${currentPage}`;
  }
}); 