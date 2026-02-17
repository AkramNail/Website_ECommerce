

fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data => {
    
    let dataMan = [];
    let dataElec = [];
    let dataHasil;               
    const elementListCard = document.getElementById("product-list");
    const elementListCardMan = document.getElementById("product-list-pria");
    const elementListCardElec = document.getElementById("product-list-elec");

    function CekKategori(element){
        if(element.category == "men's clothing"){
            dataMan.push(element);
        }
        if(element.category == "electronics"){
            dataElec.push(element);
        }
    }

    function MembuatCardProduk(image, title, price){
        return `<div class="card m-2 mt-0">
            <img 
                class="produk-img"
                src="${image}" alt="">
            <h6
            class="produk-text">
                ${title}
            </h6>
            <h6
            class="produk-harga fw-bold">
                $ ${price}
            </h6>
        </div>`;
    }

    function MengambilDataSemuaProduk(){
        
        let yes = ``;
        let active = 'active';
        let loop = 1;
        let cardPertama = true;

        dataHasil.forEach(element => {
            
            CekKategori(element);

            let cardProduk = MembuatCardProduk(element.image, element.title, element.price);
            
            if(cardPertama == false){
                active = '';
            }

            if(loop % 5 == 0){
                yes += cardProduk;
                elementListCard.innerHTML += 
                    `<div 
                    class="carousel-item ${active}">
                        <div class="d-flex justify-content-start">`
                            + yes +
                        `</div>
                    </div>`;
                yes = ``;
                cardPertama = false;
            }else{
                yes += cardProduk;
            }
            
            loop += 1;
        
        });
    }

    function MengambilDataProdukMan(){
        let loop = 1;
        let jumlah = Math.floor(dataMan.length / 5);

        if(jumlah == 0){
        
            let listCard = ``;
        
            dataMan.forEach(element => {
                listCard += MembuatCardProduk(element.image, element.title, element.price);
                loop += 1;
            });

            elementListCardMan.innerHTML +=
                `<div class="carousel-item active">
                    <div class="d-flex justify-content-start">`
                        + listCard +
                    `</div>
                </div>`;
            
            listCard = ``;

        }else{
            
            let listCard = ``;
            let sudahAktif = false;
            let activeMan = 'active';

            dataMan.forEach(element => {
                listCard += MembuatCardProduk(element.image, element.title, element.price);

                if(loop % 5 == 0 || loop == dataMan.length){
                    if(sudahAktif == true){
                        activeMan = '';
                    }
                    elementListCardMan.innerHTML +=
                        `<div class="carousel-item ${activeMan}">
                            <div class="d-flex justify-content-start">`
                                + listCard +
                            `</div>
                        </div>`;
                    
                    listCard = ``;
                    activeMan = true;
                }
                loop += 1;
            });
        }
    }

    function MengambilDataProdukElec(){
        let loop = 1;
        let jumlah = Math.floor(dataElec.length / 5);

        if(jumlah == 0){
        
            let listCard = ``;
        
            dataElec.forEach(element => {
                listCard += MembuatCardProduk(element.image, element.title, element.price);
                loop += 1;
            });

            elementListCardElec.innerHTML +=
                `<div class="carousel-item active">
                    <div class="d-flex justify-content-start">`
                        + listCard +
                    `</div>
                </div>`;
            
            listCard = ``;

        }else{
            
            let listCard = ``;
            let sudahAktif = false;
            let activeElec = 'active';

            dataElec.forEach(element => {
                listCard += MembuatCardProduk(element.image, element.title, element.price);
                console.table(loop);
                console.table(dataElec.length);
                if(loop % 5 == 0 || loop == dataElec.length){
                    if(sudahAktif == true){
                        activeElec = '';
                    }
                    elementListCardElec.innerHTML +=
                        `<div class="carousel-item ${activeElec}">
                            <div class="d-flex justify-content-start">`
                                + listCard +
                            `</div>
                        </div>`;
                    
                    listCard = ``;
                    activeElec = true;
                }
                loop += 1;
            });
        }
    }

    dataHasil = data; 

    console.table(dataHasil);
    
    MengambilDataSemuaProduk();
    MengambilDataProdukMan();
    MengambilDataProdukElec();
});