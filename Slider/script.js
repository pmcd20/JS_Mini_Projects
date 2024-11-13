
const minSpaceRequired = 500;
const priceSlider = document.querySelector('.price-slider');
const minSlider = document.querySelector('.min-range');
const maxSlider = document.querySelector('.max-range');
const minInput = document.querySelector('.min-input');
const maxInput = document.querySelector('.max-input');

//UI functions 
function updateMinSlider(e) {
    minInput.value = GetAllowedValue(minSlider.value, 'MIN');
    e.target.value = minInput.value;
    let newPercent = CalcualtePercentage(minSlider.value, minSlider.max);
    priceSlider.style.left = `${newPercent}%`;
}

function updateMinTextbox(e) {

    e.target.value = GetAllowedValue(NumbericOnly(e.target.value), 'MIN');
    let newPercent = CalcualtePercentage(e.target.value, minSlider.max);
    priceSlider.style.left = `${newPercent}%`;
    minSlider.value = e.target.value;
}

function updateMaxSlider(e) {
    maxInput.value = GetAllowedValue(maxSlider.value, 'MAX');
    e.target.value = maxInput.value;
    let newPercent = CalcualtePercentage(maxSlider.value, maxSlider.max);
    priceSlider.style.right = `${100 - Number(newPercent)}%`;
}

function updateMaxTextbox(e) {
    console.log(`${Number(e.target.value)} and ${Number(minInput.value)}`);

    if (Number(e.target.value) < Number(minInput.value) + minSpaceRequired) {
        return;
    }

    e.target.value = GetAllowedValue(NumbericOnly(e.target.value), 'MAX');
    let newPercent = CalcualtePercentage(e.target.value, maxSlider.max);
    priceSlider.style.right = `${100 - Number(newPercent)}%`;
    maxSlider.value = e.target.value;
}

// Add event listener
minSlider.addEventListener('input', updateMinSlider);
maxSlider.addEventListener('input', updateMaxSlider);
minInput.addEventListener('input', updateMinTextbox);
maxInput.addEventListener('input', updateMaxTextbox);

//Worker Functions

function GetAllowedValue(inputvalue, slidetype) {

    if (slidetype === 'MIN') {
        if (Number(inputvalue) >= Number(maxInput.value - minSpaceRequired)) {
            inputvalue = maxInput.value - Number(minSpaceRequired);
        }
        inputvalue = (Number(inputvalue) < Number(minSlider.min)) ? Number(minSlider.min) : Number(inputvalue);
    }

    if (slidetype === 'MAX') {
        if (Number(inputvalue) <= Number(minInput.value) + Number(minSpaceRequired)) {
            inputvalue = Number(minInput.value) + Number(minSpaceRequired);
        }
        inputvalue = (Number(inputvalue) > Number(maxSlider.max)) ? Number(maxSlider.max) : Number(inputvalue);
    }
    return inputvalue;
}

function NumbericOnly(val) {
    return val.replace(/[^0-9]/g, '');
}

function CalcualtePercentage(value, maxvalue) {
    return (Number(value) / Number(maxvalue)) * 100;
}

