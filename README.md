# Requirements

PHP 8

# Install dependencies

```
composer install
```

```
npm install
```

# Create .env file

Edit the `DB_CONNECTION` variable to match your database name.

```
copy .env.example .env
```

# Migrate database 

```
php artisan migrate
```

# Generate application key

```
php artisan key:generate
```

# Start the application

In separate terminals, run

```
php artisan serve
```

```
npm run dev
```
