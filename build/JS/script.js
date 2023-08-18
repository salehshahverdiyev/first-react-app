const goFeed1 = document.getElementById("startfb");
goFeed1.onclick = () => {
  location.href = "../HTML/newfeedback.html";
};

const goRoadmap = document.getElementById("rm");
goRoadmap.onclick = () => {
  location.href = "../HTML/roadmap.html";
};

const goFeed2 = document.getElementById("endfb");
// Check if there is goFeed2, because it's not rendered in all cases
if (goFeed2) {
  goFeed2.onclick = () => {
    location.href = "../HTML/newfeedback.html";
  };
}