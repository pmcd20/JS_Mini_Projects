
const generatorRequest = {
    noOfWords: 10,
    noOfSections: 1,
    includeHTML: false,
    HtmlElement: ''
};

const sectionCount = document.getElementById('noOfSections');
const sectionRange = document.querySelector('.sectionRange');

const wordCount = document.getElementById('noOfwords');
const wordRange = document.querySelector('.wordRange');

const htmlSelection = document.getElementById("htmlQuestion-dropdown");
const htmlElement = document.getElementById("htmlElement-dropdown");




function UpdateSectionDisplay(e) {
    sectionCount.innerHTML = e.target.value;
    generatorRequest.noOfSections = e.target.value;
}

function UpdateWordDisplay(e) {
    wordCount.innerHTML = e.target.value;
    generatorRequest.noOfWords = e.target.value;

}


sectionRange.addEventListener('input', UpdateSectionDisplay);
wordRange.addEventListener('input', UpdateWordDisplay);
htmlSelection.addEventListener('change', () => {
    generatorRequest.includeHTML = (htmlSelection.value === "0") ? false : true;
    console.log(generatorRequest);
})

htmlElement.addEventListener('change', () => {
    generatorRequest.HtmlElement = htmlElement.value;
    console.log(generatorRequest);
})


document.addEventListener("DOMContentLoaded", () => {
    sectionCount.innerHTML = generatorRequest.noOfSections;
    wordCount.innerHTML = generatorRequest.noOfWords;
    generatorRequest.includeHTML = (htmlSelection.value === "0") ? false : true;
    generatorRequest.HtmlElement = htmlElement.value;
    console.log(generatorRequest);

});



