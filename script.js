document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchHistoryList = document.getElementById('searchHistory');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');

    
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    
    function displaySearchHistory() {
    searchHistoryList.innerHTML = '';
    searchHistory.forEach(term => {
        const li = document.createElement('li');
        li.textContent = term;
        searchHistoryList.appendChild(li);
    });
    }

    function addSearchTerm(term) {
    searchHistory.push(term);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    displaySearchHistory();
    }
    searchBtn.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        addSearchTerm(searchTerm);
        searchInput.value = '';
    }
    });
    clearHistoryBtn.addEventListener('click', function() {
    searchHistory = [];
    localStorage.removeItem('searchHistory');
    displaySearchHistory();
    });
    
    displaySearchHistory();
});
