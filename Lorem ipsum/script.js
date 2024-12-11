
const generatorRequest = {
    noOfWords: 10,
    noOfSections: 1,
    includeHTML: false,
    HtmlElement: ''
};


const loremIpsumText = [
    "Lorem ipsum dolor sit amet, consectetur",
    "adipiscing elit, sed do eiusmod tempor",
    "incididunt ut labore et dolore magna",
    "aliqua. Diam in arcu cursus euismod",
    "quis viverra nibh. Nunc aliquet bibendum",
    "enim facilisis gravida neque convallis",
    "a cras. Sagittis purus sit amet volutpat",
    "Consequat mauris. Duis ultricies lacus",
    "sed turpis tincidunt id. Consequat interdum",
    "varius sit amet mattis vulputate. Enim sed",
    "faucibus turpis in eu. Ridiculus mus mauris",
    "vitae ultricies leo integer malesuada nunc vel.",
    "Nulla pharetra diam sit amet nisl suscipit.",
    "Lobortis elementum nibh tellus molestie nunc",
    "non blandit massa enim. Dis parturient montes",
    "nascetur ridiculus mus. Justo nec ultrices dui",
    "sapien eget. Enim tortor at auctor urna nunc.",
    "Dictumst quisque sagittis purus sit amet volutpat",
    "consequat mauris nunc."
].join(' ');

const sectionCount = document.getElementById('noOfSections');
const sectionRange = document.querySelector('.sectionRange');

const wordCount = document.getElementById('noOfwords');
const wordRange = document.querySelector('.wordRange');

const htmlSelection = document.getElementById("htmlQuestion-dropdown");
const htmlElement = document.getElementById("htmlElement-dropdown");

const generate = document.getElementById('generateText');
const outputLorem = document.getElementById('outputLorem');





function UpdateSectionDisplay(e) {
    sectionCount.innerHTML = e.target.value;
    generatorRequest.noOfSections = e.target.value;
}

function UpdateWordDisplay(e) {
    wordCount.innerHTML = e.target.value;
    generatorRequest.noOfWords = e.target.value;

}

function OutPutText(e) {

    const arrayOfWords = loremIpsumText.split(' ');
    const sliced = arrayOfWords.slice(0, generatorRequest.noOfWords)
    console.log(sliced);

    const lines = [];

    for (let i = 0; i < generatorRequest.noOfSections; i++) {
        lines.push(sliced.join(' '));
    }

    const formattedText = lines.join('\n');
    outputLorem.value = formattedText;






    // outputLorem.innerHTML = loremIpsumText;
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


generate.addEventListener('click', OutPutText);



