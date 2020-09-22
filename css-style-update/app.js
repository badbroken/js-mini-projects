const inputs = document.querySelectorAll('.controls input'); //Select All inputs on the page
//All the inputs are selected with Queryselector and stored in
//Inputs Nodelist

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    // || '' added to prevent having undefined value
    //Dataset contains all the data attributes from HTML
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    // document is the document we are working on
    //documentElement selects the documents element
    //style.setProperty helps us change the CSS variable
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
// looping through the each inputs in nodelist