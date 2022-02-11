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
})