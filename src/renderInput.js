function createInput() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const submitBtn = document.createElement('input');

    form.className = 'searchContainer';
    input.type = 'text';
    input.id = 'citySearch';
    input.name = 'city';
    input.placeholder = 'Search for a city';
    submitBtn.type = 'submit'
    submitBtn.value = 'Search';

    form.append(input, submitBtn);
    return form;
}

function render() {
    const content = document.getElementById('content');
    const form = createInput();
    content.appendChild(form);
}

export {render}