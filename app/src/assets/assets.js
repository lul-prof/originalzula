import contactImage from './images/CONTACT.webp'
import zula from './images/zula.webp'

export const assets={
    contactImage,
    zula,
}

export const demoOrders=[
    {
        _id:"ord001",
        userId:"user001",
        items:[{_id:"m001",size:"xl",quantity:"1"},{_id:"m005",size:"m",quantity:"3"}],
        amount:6000,
        address:{first_name:"joe",last_name:"Doe",email:"joedoe@gmail.com",city:"Nairobi",street:"kware",landmark:"pefa kware"},
        paymentMethod:"mpesa",
        payment:true,
        status:"Order Placed",
        date:new Date("2026-09-04T12:28:00.000Z")
    },
    {
        _id:"ord002",
        userId:"user002",
        items:[{_id:"m007",size:"l",quantity:"3"}],
        amount:3000,
        address:{first_name:"mary",last_name:"Doe",email:"marydoe@gmail.com",city:"Nairobi",street:"kware",landmark:"pefa kware"},
        paymentMethod:"paypal",
        payment:false,
        status:"Out for delivery",
        date:new Date("2026-09-04T12:28:00.000Z")
    },
]