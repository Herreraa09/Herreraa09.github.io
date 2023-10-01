const toggleBtn = document.querySelector(".sidebar-toggle");

const sidebar = document.querySelector(".sidebar");

const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", ()=>{
    sidebar.classList.add("active");
});

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.remove("active");
})