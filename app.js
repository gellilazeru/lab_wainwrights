let wainwrightsData; //declaring at the top for a single rather than const; 'let' because likely to change

const wainwrightsList = document.querySelector("#wainwrights-list");

// #1: grab data from API/resource
const getAllWainwrights = async () => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");

    const data = await response.json();
    // console.log(data);
    // assign response to wainwrightsData global variable
    wainwrightsData = data;
    mapWainwrights(wainwrightsData);
    console.log(wainwrightsData);
}


// displaying info
const mapWainwrights = (wainwrightsArray) => {
    wainwrightsList.innerText = "";
    for (wainwright of wainwrightsArray){
        let wainwrightElement = document.createElement("li");

        addWainwrightInfoToElement(wainwrightElement)

        wainwrightsList.appendChild(wainwrightElement);
    }
}

const addWainwrightInfoToElement = (wainwrightElement) => {
    let wainwrightNameElement = document.createElement("h2");
    wainwrightNameElement.innerText = wainwright.name;
    wainwrightElement.appendChild(wainwrightNameElement);

    let wainwrightHeightElement = document.createElement("h4");
    wainwrightHeightElement.innerText = `Height : ${wainwright.heightMetres}m / ${wainwright.heightFeet}ft`;
    wainwrightElement.appendChild(wainwrightHeightElement);

    let wainwrightAreaElement = document.createElement("p");
    wainwrightAreaElement.innerText = `Area: ${wainwright.area.areaName}`
    wainwrightElement.appendChild(wainwrightAreaElement);

}

// filter wainwrights
const filterWainwrights = async (filterTerm) => {
    let filteredWainwrightsList = await wainwrightsData.filter(wainwright => wainwright.name.toLowerCase().includes(filterTerm));
    // console.log(filteredWainwrightsList);
    mapWainwrights(filteredWainwrightsList);
}

const form = document.querySelector("#filter-wainwrights-form");

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    wainwrightsList.innerText = "";
    let filterTerm = evt.target['filter-term'].value.toLowerCase();
    console.log(filterTerm);
    filterWainwrights(filterTerm);
})


getAllWainwrights();


// THE REST OF MY ORIGINAL CODE: 

// function fetchWainWrightsAndDisplay(wainwrights) {
//     const wainwrightsList = document.getElementById('wainwrights-list');
//     wainwrightsList.innerHTML = '';
    
//      wainwrights.forEach(wainwright => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `Name: ${wainwright.name}, Height: ${wainwright.height}, Area: ${wainwright.area}`;
//         wainwrightsList.appendChild(listItem);
//     });
// }


// function handleFormSubmit(event) {
//     event.preventDefault();
//     const filterInput = document.getElementById('filter-input').value.toLowerCase();
//     console.log('Filter value:', filterInput);
//     filterWainwrights(filterInput);
// }


// function filterWainwrights(filterValue) {
//     const filteredWainwrights = data.filter(wainwright => 
//         wainwright.name.toLowerCase().includes(filterValue)
//     );
//     displayWainwrights(filteredWainwrights);
// }

// document.getElementById('filter-form').addEventListener('submit', handleFormSubmit);


// fetchWainWrightsAndDisplay();



