var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date,
  seller: {
    type: Schema.Types.String, ref: 'User'
  }
});

mongoose.model('Product', productSchema);
var Product = mongoose.model('Product');
//---------------------ADD YOUR PRODUCTS HERE----------------------------

Product.create({name: 'HamBurger', price:'2000', seller:'Omar Emad'});
Product.create({name: 'Hotdog', price:'3000', seller:'Omar Emad'});
Product.create({name: 'PlayStation', price:'4000', seller:'Omar Emad'});

Product.create({name: 'iPhone', price:'10000', seller:'Nader Waguih'});
Product.create({name: 'Laptop', price:'11000', seller:'Nader Waguih'});
Product.create({name: 'Computer', price:'12000', seller:'Nader Waguih'});

//---------------------ADD YOUR PRODUCTS HERE----------------------------
Product.create({name: 'Macbook', price:'20000', seller:'Yasmine Osama'});
Product.create({name: 'Alienware', price:'50000', seller:'Yasmine Osama'});
Product.create({name: 'HP-Omen15', price:'30000', seller:'Yasmine Osama'});


Product.create({name: 'Lion King', price:'200', seller:'Ramy Ahmed'});
Product.create({name: 'Golden Spoon', price:'1500', seller:'Ramy Ahmed'});
Product.create({name: 'Cow', price:'400000', seller:'Ramy Ahmed'});
Product.create({name: 'SheeshTawook', price:'2014', seller:'Abdellatiif'});
Product.create({name: 'Shawerma', price:'1084', seller:'Abdellatiif'});
Product.create({name: 'Apple Pie', price:'1065', seller:'Abdellatiif'});
Product.create({name: 'WaterMelon', price:'1065', seller:'Abdellatiif'});

Product.create({name: 'Football Jersey', price:'500', seller:'Youssam Joseph'});
Product.create({name: 'Official Match Ball', price:'600', seller:'Youssam Joseph'});
Product.create({name: 'Football boots', price:'300', seller:'Youssam Joseph'});

Product.create({name: 'MacBook Pro', price:'27000', seller:'David Mina'});
Product.create({name: 'iPhone 8 Plus', price:'16000', seller:'David Mina'});
Product.create({name: 'Power Bank', price:'650', seller:'David Mina'});

Product.create({name: 'Mr.potato Head', price:'9000', seller:'Amr Elshehaly'});
Product.create({name: 'Mrs.potato Head', price:'1', seller:'Mr.potato Head'});
Product.create({name: 'Woody', price:'12000', seller:'Amr Elshehaly'});




Product.create({name: 'Lenovo Laptop', price:'11000', seller:'Shady Sherif'});
Product.create({name: 'Casio Calculator', price:'200', seller:'Shady Sherif'});
Product.create({name: 'Leather Jacket', price:'2500', seller:'Shady Sherif'});


Product.create({name: 'iPhone X', price:'28000', seller:'Farid Khaled'});
Product.create({name: 'Macbook Pro', price:'60000', seller:'Farid Khaled'});
Product.create({name: 'HP s6000', price:'500', seller:'Farid Khaled'});
Product.create({name: 'Seagate portable 1 TB', price:'1600', seller:'Farid Khaled'});



Product.create({name: 'HamBurger', price:'2000', seller:'Omar Emad'});
Product.create({name: 'PlayStation', price:'4000', seller:'Omar Emad'});
Product.create({name: 'Hotdog', price:'3000', seller:'Omar Emad'});

Product.create({name: 'Swatch', price:'3500', seller:'Amgad Ashraf'});
Product.create({name: 'HP Laptop', price:'19000', seller:'Amgad Ashraf'});

Product.create({name: 'Samsung TV', price:'17500', seller:'Amgad Ashraf'});


Product.create({name: 'Laptop', price:'9000', seller:'Yasmina Elsaket'});
Product.create({name: 'Pandora', price:'7000', seller:'Yasmina Elsaket'});
Product.create({name: 'Jacket', price:'1000', seller:'Yasmina Elsaket'});
Product.create({name: 'New Balance', price:'2000', seller:'Yasmina Elsaket'});
Product.create({name: 'Kitkat', price:'10', seller:'Yasmina Elsaket'});
Product.create({name: 'Bag', price:'1500', seller:'Yasmina Elsaket'})
Product.create({name: 'Sleeve', price:'200', seller:'Yasmina Elsaket'});
Product.create({name: 'Basket', price:'300', seller:'Yasmina Elsaket'});
Product.create({name: 'TV', price:'10000', seller:'Yasmina Elsaket'});

Product.create({name: 'My poor soul', price:'1', seller:'Ahmed Hatem'});
Product.create({name: 'One Coin', price:'1', seller:'Ahmed Hatem'});
Product.create({name: '193 Lockpicks', price:'193', seller:'Ahmed Hatem'});

Product.create({name: 'Samsung', price:'5000', seller:'Akram Ashraf'});
Product.create({name: 'Oneplus', price:'8000', seller:'Akram Ashraf'});
Product.create({name: 'Rolex', price:'12000', seller:'Akram Ashraf'});
Product.create({name: 'Converse',price:'1500',seller:'Malak Hatem'});
Product.create({name: 'Vans',price:'900',seller:'Malak Hatem'});
Product.create({name: 'Pizza',price:'250',seller:'Malak Hatem'});
Product.create({name: 'Alienware', price:'30,000', seller:'Ahmed Ashraf'});
Product.create({name: 'Lenovo Y50', price:'15,500', seller:'Ahmed Ashraf'});
Product.create({name: 'LG Smart TV', price:'16,000', seller:'Ahmed Ashraf'});
//---------------------ADD YOUR PRODUCTS HERE----------------------------
Product.create({name: 'Happy Days - Burger Classic', price:'40', seller:'ShadyTantawy'});
Product.create({name: 'Super Car - Mega Burger', price:'70', seller:'Shadshad'});
Product.create({name: 'yalla yabny 5allas', price:'555', seller:'TantawyGroup'});

Product.create({name: 'Gibson 59 Les Paul', price: '12000', seller: 'Mohamed Nawar'});
Product.create({name: '50 watt tube amp', price: '6000', seller: 'Mohamed Nawar'});
Product.create({name: 'A strand of McSwags beard hair', price: '375', seller: 'Mohamed Nawar'});