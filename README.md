# NodeJS shopping cart

- **Language**: *javascript*
- **Implementation**: *node*
- **Framework**: *express*
- **Package manager**: *npm*
- **Template engine**: *handlebars*
- **Database** : *mongoDB*



### Interface

- Sign up/in
- User profile
- Products
- Cart
- Checkout

### Products

Products are listed on <u>seed/product-seeder.js</u> file.

Before running the server, execute seeder

```
$node seed/product-seeder.js
```

### Check out

Insert your stripe key on <u>routes/index.js</u>(secret key) and <u>public/javascripts/checkout.js</u>(public key).