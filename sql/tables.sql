CREATE TABLE LanguagePhrases (
    id SERIAL PRIMARY KEY,
    language VARCHAR(50) NOT NULL,
    phrase VARCHAR(255) NOT NULL
);

-- users table

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL
);

-- Counter table
CREATE TABLE user_greet_count (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL UNIQUE,
    no_of_greets INTEGER
);
