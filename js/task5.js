let products = [
    {
        name: "Шоколад",
        price: 115
    },
    {
        name: "Виноград",
        price: 299
    },
    {
        name: "Бананы",
        price: 109
    },
    {
        name: "Яблоки",
        price: 145
    },
    {
        name: "Гранат",
        price: 798
    },
    {
        name: "Зефир",
        price: 113
    },
    {
        name: "Батончик",
        price: 54
    },
    {
        name: "Вафельная трубочка",
        price: 33
    },
    {
        name: "Печенье",
        price: 288
    },
    {
        name: "Пряники",
        price: 62
    },
    {
        name: "Торт",
        price: 1017
    }    
];

for (let product of products) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.innerHTML = product.name;
    p.innerHTML = `Цена: ${product.price} &#8381;`;
    div.appendChild(h2);
    div.appendChild(p);
    document.body.appendChild(div);
}