var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');
mongoose.Promise = global.Promise;

var products = [
    new Product({
        imagePath: 'http://images-eu.amazon.com/images/P/2212122322.08.LZZZZZZZ.jpg',
        title: 'Livre Java',
        description: 'Apprendre le langage Java.',
        price: 10
    }),
    new Product({
        imagePath: 'http://www.images-chapitre.com/ima1/original/492/69560492_13917028.jpg',
        title: 'Livre Git',
        description: 'Maitrisez la gestion de vos versions.',
        price: 12
    }),
    new Product({
        imagePath: 'http://media.ldlc.com/ld/products/00/03/66/71/LD0003667103_2.jpg',
        title: 'GEFORCE GTX 1080',
        description: 'Carte graphique MSI.',
        price: 799
    }),
    new Product({
        imagePath: 'http://media.ldlc.com/ld/products/00/01/35/14/LD0001351464_2.jpg',
        title: 'Carte mère MSI 970 Gaming',
        description: '2 ports PCI-Express 2.0.',
        price: 99
    }),
    new Product({
        imagePath: 'https://support.itel.com/hc/en-us/article_attachments/200929885/ethernet.jpg',
        title: 'Cable Ethernet',
        description: 'Longueur du cable : 2m.',
        price: 3
    }),
    new Product({
        imagePath: 'http://image.darty.com/accessoires/entretien_cafetiere_expresso/autre_accessoire_cafe/lavazza_capsu_appassionatame_k1509031353381A_105044749.jpg',
        title: 'Café Lavazza',
        description: '16 capsules.',
        price: 16
    })
];
var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}