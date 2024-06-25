const getAllWainWrights = async () => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    const jsonData = await response.json();
    // document.querySelector("#wainwrights-list").src = jsonData.message;
    return jsonData.results(0);
}

function fetchWainWrightsAndDisplay(wainwrights) {
    const wainwrightsList = document.getElementById('wainwrights-list');
    wainwrightsList.innerHTML = '';
    
     wainwrights.forEach(wainwright => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${wainwright.name}, Height: ${wainwright.height}, Area: ${wainwright.area}`;
        wainwrightsList.appendChild(listItem);
    });
}


function handleFormSubmit(event) {
    event.preventDefault();
    const filterInput = document.getElementById('filter-input').value.toLowerCase();
    console.log('Filter value:', filterInput);
    filterWainwrights(filterInput);
}


function filterWainwrights(filterValue) {
    const filteredWainwrights = data.filter(wainwright => 
        wainwright.name.toLowerCase().includes(filterValue)
    );
    displayWainwrights(filteredWainwrights);
}

document.getElementById('filter-form').addEventListener('submit', handleFormSubmit);


fetchWainWrightsAndDisplay();



