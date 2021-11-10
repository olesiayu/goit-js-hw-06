const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

inputEl.addEventListener('input', updateValue);  
        
    function updateValue() {
    const size = inputEl.value;
    spanEl.style.fontSize = size + "px";
};
