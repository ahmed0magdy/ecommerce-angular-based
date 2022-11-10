

## Angular-Laravel Ecommerce Platform

This is a e-commerce platform made mostly using Laravel 9 and Angular 14

| [Features][] | [Requirements][] | [Install][] | [How to setting][] | [Contributors][] | [License][] |
|---|---|---|---|---|---|

## Features 

Admin
o Can login with his pre-registered email and password.
o Can view products page.
▪ Search by name.
▪ View all products.
▪ Create, update, edit and delete any product.
▪ Create product with title, image, price, details.
o Can view orders page (pending, accepted, rejected).
▪ View all orders (username, date, total price, product titles only).
▪ Take an action to modify order state.

• User
o Can view [home ,about] without login.
o home page (products with promotions).
o about page some information about the store.
o Can register with his (email. username, password, image, gender).
o Can view [products page and profile] on login.
o Products page
▪ Search by name.
▪ View all products.
▪ Add products to his cart.
▪ View added products and checkout to make order.
o Profile
▪ View his own info.
▪ Edit his own info.
▪ View his orders (accepted, rejected, pending).
▪ Cancel order if pending.


## Requirements

	Laravel 9  MySQL  Angular 14

## Install

Clone repo

```
git clone https://github.com/ahmed0magdy/ecommerce-angular-based
```

Install Composer


[Download Composer](https://getcomposer.org/download/)


composer update/install 

```
composer install
```

Install Nodejs


[Download Node.js](https://nodejs.org/en/download/)


NPM dependencies
```
npm install
```

## How to setting 

Go into .env file and change Database

```
php artisan migrate
```

```
php artisan db:seed
```
	
Generating a New Application Key
```
php artisan key:generate
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Contributors

Team 5

## License

> Copyright (C) 2022 

**[⬆ back to top](#laravel-ecommerce-platform)**

[Features]:#features
[Requirements]:#requirements
[Install]:#install
[How to setting]:#how-to-setting
[Contributors]:#contributors
[License]:#license
