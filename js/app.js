const list = document.querySelector('#book-list ul');

// delete book function
list.addEventListener('click', function(e){
    if(e.target.className == 'delete')
    {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// add book function
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type = "text"]').value;

    console.log(value);

    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content to elements
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    // add classess to element
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append elements to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})