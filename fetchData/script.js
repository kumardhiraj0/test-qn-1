document.addEventListener("DOMContentLoaded", fetchData);

function fetchData() {
  const skeletonLoader = document.querySelector(".skeleton-loader");
  const dataContainer = document.querySelector(".data-container");
  const dataList = document.getElementById("data-list");

  skeletonLoader.style.display = "flex";
  dataContainer.style.display = "none";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      // Hide the skeleton loader and show the data container
      skeletonLoader.style.display = "none";
      dataContainer.style.display = "block";

      // Create list items and append them to the data list
      data.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item.title;
        dataList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.log("Error:", error);
      skeletonLoader.style.display = "none";
      dataContainer.style.display = "block";
      dataList.innerHTML = "Failed to fetch data.";
    });
}
