// Define fieldName so it will be ez to use in different cases
const fieldName = "feedbacks";

// Add event listener for form submit
document.getElementById("addfeedback").addEventListener("click", (e) => {
  // Prevent form from default action
  e.preventDefault();

  // Get values from fields
  const title = document.getElementById("g1").value;
  const description = document.getElementById("g3").value;

  /* 
    1. Get field from localStorage
    2. If there is then parse it and convert to array
    3. If it's not created it will return an empty array
  */
  const items = localStorage.getItem(fieldName)
    ? JSON.parse(localStorage.getItem(fieldName))
    : [];

  // Push obj to array
  items.push({
    title,
    description,
  });

  // Set it to localStorage by converting array into string
  localStorage.setItem(fieldName, JSON.stringify(items));
});

// TODO ~ REMOVE: It's not important for you, you can remove it. Just to show array in HTML
const items = JSON.parse(localStorage.getItem(fieldName));

const newFeed = document.getElementById("addfeedback")
newFeed.onclick = () => {
    location.href="../HTML/index.html";
};

const cancelFeed = document.getElementById("cancel")
cancelFeed.onclick = () => {
    location.href="../HTML/index.html";
};
