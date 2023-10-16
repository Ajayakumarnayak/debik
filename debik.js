function showSection(sectionId) {
    // Hide all content sections
    var sections = document.getElementsByClassName('hidden');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Show the selected content section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'flex';
}

function thankyou(){
    const popup = window.open('thankyou.html','PopupWindow', 'width=1200, height=400');
}
function showup(sectionId) {
    var sections = document.getElementsByClassName('gateway');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Show the selected content section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'flex';

}