document.addEventListener("DOMContentLoaded", function () {
    const btnCloseSidebar = document.querySelector(".btnCloseSidebar");
    const sideBar = document.querySelector(".sideBar");
    const headerContent = document.querySelector(".header-content");
    const textElements = document.querySelectorAll(".textPage, .textSignOut");
    const logoFull = document.querySelector(".logoFull");
    const logoIcon = document.querySelector(".logoIcon");

    // Trạng thái sidebar (mở = true, đóng = false)
    let sidebarOpen = true;

    btnCloseSidebar.addEventListener("click", function () {
        sidebarOpen = !sidebarOpen;

        if (!sidebarOpen) {
            // Thu gọn sidebar
            sideBar.classList.add("collapsed");
            headerContent.classList.add("expanded");

            // Ẩn text
            textElements.forEach((el) => {
                el.style.display = "none";
            });

            // Hiện logo icon, ẩn logo đầy đủ
            logoFull.style.display = "none";
            logoIcon.style.display = "block";
        } else {
            // Mở rộng sidebar
            sideBar.classList.remove("collapsed");
            headerContent.classList.remove("expanded");

            // Hiện text
            textElements.forEach((el) => {
                el.style.display = "block";
            });

            // Hiện logo đầy đủ, ẩn logo icon
            logoFull.style.display = "block";
            logoIcon.style.display = "none";
        }
    });
});

document.querySelectorAll(".recipeCard").forEach((e) => {
    e.addEventListener("click", function () {
        // Điều hướng đến trang recipeDetail.html
        window.location.href = "recipeDetail.html";
    });
});

document.getElementById('addRecipe').addEventListener('click', function () {
    window.location.href = "addRecipe.html";
})