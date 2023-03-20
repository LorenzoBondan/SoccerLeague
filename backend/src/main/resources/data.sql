INSERT INTO tb_user (name, email, password) VALUES ('Alex', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Maria', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');


INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');


INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);


INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Arena do Grêmio', 52000, 'Porto Alegre - RS', 'https://google.com', -29.9739734, -51.1970005);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Beira Rio', 48000, 'Porto Alegre - RS', 'https://google.com', -29.9739734, -51.1970005);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Arena Palmeiras', 52000, 'Porto Alegre - RS', 'https://google.com', -29.9739734, -51.1970005);


INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Grêmio', 85000, 1, 3, 5, 2, 'a', 'https://google.com', 1);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Internacional', 70000, 1, 2, 1, 3, 'a', 'https://google.com', 2);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Palmeiras', 130000, 0, 3, 4, 11, 'a', 'https://google.com', 3);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Atlético-MG', 125000, 0, 1, 2, 2, 'a', 'https://google.com', 1);


INSERT INTO tb_player (name, nickname, birth_Date, img_Url, team_id) VALUES ('João da Silva', 'João', TIMESTAMP WITH TIME ZONE '1999-08-11', 'https://google.com', 1);
INSERT INTO tb_player (name, nickname, birth_Date, img_Url, team_id) VALUES ('Lucas Silva', 'Lucas', TIMESTAMP WITH TIME ZONE '1999-08-11', 'https://google.com', 2);
INSERT INTO tb_player (name, nickname, birth_Date, img_Url, team_id) VALUES ('Marcos Alexandre', 'Marcos', TIMESTAMP WITH TIME ZONE '1999-08-11', 'https://google.com', 3);
INSERT INTO tb_player (name, nickname, birth_Date, img_Url, team_id) VALUES ('Emanuel Salvador', 'Manu', TIMESTAMP WITH TIME ZONE '1999-08-11', 'https://google.com', 1);