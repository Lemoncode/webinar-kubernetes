CREATE TABLE IF NOT EXISTS beers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    brand VARCHAR(50) NOT NULL,
    is_premium BOOLEAN,
    image_url VARCHAR(255) NOT NULl
)


INSERT INTO beers (name, brand, is_premium, image_url) VALUES ('Voll Damm', 'Damm', false, '')
INSERT INTO beers (name, brand, is_premium, image_url) VALUES ('Estrella Damm', 'Damm', false, '')