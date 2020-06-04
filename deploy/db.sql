CREATE TABLE IF NOT EXISTS beers (
    id integer PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    brand VARCHAR(50) NOT NULL,
    is_premium BOOLEAN,
    image_url VARCHAR(255) NOT NULl
);


INSERT INTO beers (id, name, brand, is_premium, image_url) VALUES (1, 'Voll Damm', 'Damm', false, '') ON CONFLICT (id) DO NOTHING;
INSERT INTO beers (id, name, brand, is_premium, image_url) VALUES (2, 'Estrella Damm', 'Damm', false, '') ON CONFLICT (id) DO NOTHING;
INSERT INTO beers (id, name, brand, is_premium, image_url) VALUES (3, 'Impaled', 'Espina de Ferro', true, '') ON CONFLICT (id) DO NOTHING;
INSERT INTO beers (id, name, brand, is_premium, image_url) VALUES (4, 'Mala Vida', 'Montseny', true, '') ON CONFLICT (id) DO NOTHING;
