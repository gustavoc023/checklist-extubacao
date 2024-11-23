function validateItem(id) {
    const item = document.getElementById(`item${id}`);
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
        item.classList.add('green');
    } else {
        item.classList.remove('green');
    }
}

function validateNumeric(id) {
    const item = document.getElementById(`item${id}`);
    const input = item.querySelector('input[type="number"]');
    if (input && input.value) {
        item.classList.remove('green'); // Não muda para verde
    }
}

function validateYesNo(id) {
    const item = document.getElementById(`item${id}`);
    const radios = item.querySelectorAll('input[type="radio"]');
    let selected = false;
    radios.forEach((radio) => {
        if (radio.checked) selected = true;
    });
    if (selected) {
        item.classList.remove('green'); // Não muda para verde
    }
}

function validateSubItems(id) {
    const item = document.getElementById(`item${id}`);
    const subItems = item.querySelectorAll('.sub-item input[type="checkbox"]');
    const allChecked = Array.from(subItems).every((input) => input.checked);
    if (allChecked) {
        item.classList.add('green'); // Muda para verde quando todos os subitens são marcados
    } else {
        item.classList.remove('green');
    }
}
