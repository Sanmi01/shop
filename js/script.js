// document.getElementById("abc").addEventListener('click', () => {
//     alert("2")
// })

// var y = document.getElementsByClassName("item");
// y.addEventListener('click', () => {
//     alert("2")
// })

// document.querySelectorAll('.item').forEach((e) => {
//     e.addEventListener('click', () => {
//         e.style.display = 'none';
//     })
    
// })

document.querySelectorAll(".add-to-cart-button").forEach((e) => {
    e.addEventListener('click', () => {
        var y = document.getElementById('item-count').innerText;
        y++;
        document.getElementById('item-count').innerText = y;
    })
})