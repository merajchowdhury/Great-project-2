let button = document.getElementById('open-btn');
let modal = document.getElementById('modal-container');
let close = document.getElementById('close-btn');

button.addEventListener('click', function(){
    modal.style.display = 'block';
});

close.addEventListener('click', function(){
    modal.style.display = 'none';
})