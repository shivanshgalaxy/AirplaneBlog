document.querySelector('#Blackbird').addEventListener("click", function(){
    document.querySelector('#linkAlert').classList.toggle('d-none');
})

document.querySelector(".alert").addEventListener("click", function () {
    document.querySelector('#linkAlert').classList.add('d-none');
})