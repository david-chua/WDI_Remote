var CoffeeShop = {
  Coffee: {
    Flavor:
    HotorCold:
    TypeofBeverage:
    Price:
    Cream:
  }
}

User = {
  Username:
  Name:
  Address:
  PaymentMethod:
    Cash:
    Card:
      CardType:
      CardNumber:
  OrderHistory:
}

Order: {
  Coffee:
  Amount:
  PaymentMethod:
}

Part II:
var CoffeeShop = {
  Shop:
  [{
    Location: String,
    Distance: String
}]
  Coffee: [{
    Flavor: String,
    HotorCold: String,
    TypeofBeverage: String,
    Price: Number,
    Cream: Boolean
  }]
User = [{
  Username: String,
  Name: String,
  Address: String,
  PaymentMethod: [{
    Cash: Number,
    Card: Number,
      CardType: String,
      CardNumber: Number,
      Expiration: Number,
      SecurityCode: Number,
    }]
  OrderHistory:
  Order:[{
    Coffee: array,
    Amount: number,
    PaymentMethod: array
}]
}]

Part III:
var Starbucks = new Shop {
  Location: Springfield Mall,
  Distance: 0.3 Miles,
  User: [{
    Username: david_chua,
    Address: 2455 Here Avenue,
    PaymentMethods: [{
      Cash: 00.00,
      Card: [{
        CardType: Visa,
        CardNumber: 224294252525265624
      }],
    }],
    Order: [{
      Coffee: [{
        Flavor: White Chocolate,
        HotorCold: Hot
        TypeofBeverage: Latte
        Price: $3.59
        Cream: Yes
      }]
    }]
  }]
}
