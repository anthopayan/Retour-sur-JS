const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


function Liste() {
    var tableauName = books.map(obj => {
        var rObj = {};
        rObj["title"] = obj.title;
        console.log(rObj);
    });
}
    

function Emprunt_verrif() {
    const result = JSON.parse(JSON.stringify(books));
    result.sort(function(a, b) {
        return a.rented - b.rented;
    }); 
    if (result[0].rented == 0){
        console.log("Au moins un livre n'a jamais été emprunté !");
    }
    else{
        console.log("Tous les livres ont été empruntés au moins une fois !");
    }
}

function Must() {
    const result = JSON.parse(JSON.stringify(books));
    result.sort(function(a, b) {
        return b.rented - a.rented;
    });             
    console.log(result[0]);
}
                   


function Less() {
    const result = JSON.parse(JSON.stringify(books));
    result.sort(function(a, b) {
        return a.rented - b.rented;
    });             
    console.log(result[0]);
}

function Delete() {
    books.splice(books.findIndex(element => element.id == 133712),1);             
    console.log(books);
}