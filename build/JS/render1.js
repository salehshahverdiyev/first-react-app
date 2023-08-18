// -------------------- ADDITION --------------------

const feedbacks = localStorage.getItem("feedbacks")
  ? JSON.parse(localStorage.getItem("feedbacks"))
  : [];

if (feedbacks.length !== 0) {
  // If there are feedbacks, then render each of them
  $("#container2").html(/*html*/ `
${feedbacks
  .map(
    (feedback) => /*html*/ `
    <div class="container2-el p-3 bg-gray-100 rounded-xl border border-black m-3">
      <div class="container2-el-title font-semibold text-xl">${feedback.title}</div> 
      <div class="container2-el-description">${feedback.description}</div> 
    </div>
    `
  )
  .join(" ")}
`);
} else {
  // If there are no feedbacks, then render add feedback view
  $("#container2").html(/*html*/ `
<img src="../images/Group 16.svg" alt="nofeedback" />
<p id="first">There is no feedback yet.</p>
<p id="second">
    Got a suggestion? Found a bug that needs to be squashed? We love hearing
    about new ideas to improve our app.
</p>
<button id="endfb">+ Add Feedback</button>
`);
}
