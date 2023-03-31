// Get all the tab elements
const tabs = document.querySelectorAll('.tab');

// Loop through each tab element
tabs.forEach((tab, index) => {
  // Add a click event listener to the tab
  tab.addEventListener('click', () => {
    // Get the ID of the clicked tab
    const tabId = tab.getAttribute('id');
    
    // Remove the activeTab class from the previously active tab
    document.querySelector('.tab.activeTab').classList.remove('activeTab');
    
    // Add the activeTab class to the clicked tab
    tab.classList.add('activeTab');
    
    const content = document.querySelectorAll('.tabContents');
    // Hide the previously active tab content

    document.querySelector('.tabContents.activeContent').classList.remove('activeContent');
    content[index].classList.add('activeContent');

  });
});