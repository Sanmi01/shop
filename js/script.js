
var j = 0;
var p = 1;
document.querySelectorAll('.add-to-cart-button').forEach((event) => {
    let x = event.parentElement;
    let t = x.children[0].src;
    let e = x.children[1].children[0].innerText;
    let w = x.children[1].children[1].innerText;
    // let p = 1;
    // let j = 0;

    const position = "beforeend";
    const item = `
            <div class="checkout-item">
            <div class="checkout-item-image">
                <img src = "${t}" />
            </div>
            <span class="checkout-item-name">${e}</span>
            <span class="quantity"><span class="decrease"><</span> <span class="value">${p}</span> <span class="increase">></span></span>
            <span class="price">${w}</span>
            <span class="remove-button">✕</span>
            </div>
`;

    function y (){
        if (j == 0) {
            document.getElementById('output').insertAdjacentHTML(position, item);
            j++
        } else {
        p = Number(p);
        p++;
        document.querySelectorAll('.value').forEach((q) => {
            q.innerText = p;
        })
        }
       }
    event.addEventListener('click', y)


});

function removeItem(e) {
    if(e.target.classList.contains('remove-button')) {
        let s = e.target.parentElement;

        p = 1;
        j = 0;
        document.querySelector('#output').removeChild(s);
    }
}
document.getElementById('output').addEventListener('click', removeItem);

function increment(e) {
    if(e.target.classList.contains('decrease')) {
        p = e.target.nextElementSibling.innerText;
        p = Number(p);
        p--;
        if (p == 0 ) {
            let h = e.target.parentElement.parentElement;
            document.querySelector('#output').removeChild(h);
            p = 1;
            j = 0;

        }
        e.target.nextElementSibling.innerText = p;
    } else if (e.target.classList.contains('increase')) {
        let p = e.target.previousElementSibling.innerText;
        p = Number(p);
        p++;
        e.target.previousElementSibling.innerText = p;
    }
};

document.querySelector("#output").addEventListener('click', increment);



function total() {
    document.querySelectorAll('.price').forEach((qwe) => {
        console.log(qwe)
        // alert('2')
    })
}

document.getElementById('total').addEventListener('click', total);
