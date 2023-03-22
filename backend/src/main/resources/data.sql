INSERT INTO tb_user (name, email, password) VALUES ('Alex', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Maria', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');


INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');


INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);


INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Arena do Grêmio', 55662, 'Porto Alegre - RS', 'https://archello.s3.eu-central-1.amazonaws.com/images/2013/12/10/1-1343.1506072179.125.jpg', -29.9739734, -51.1970005);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Beira Rio', 50848, 'Porto Alegre - RS', 'https://www.rbsdirect.com.br/imagesrc/25633438.jpg?w=700', -30.0654496, -51.7961627);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Allianz Parque', 52000, 'São Paulo - SP', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Imagens_da_Cidade_de_S%C3%A3o_Paulo_e_Zool%C3%B3gico_da_Capital_Paulista._%2847480340301%29.jpg', -23.5276157, -46.6829509);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Maracanã', 78838, 'Rio de Janeiro - RJ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Maracana_2022.jpg/1200px-Maracana_2022.jpg',-22.9139068, -43.2315809);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Morumbi', 66795, 'São Paulo - SP', 'https://blog.jovempan.com.br/fernandosampaio/wp-content/uploads/sites/6/2009/12/Morumbi.jpg', -23.6010029, -46.7222281);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Neo Química Arena', 48234, 'São Paulo - SP', 'https://tntsports.com.br/__export/1655858607376/sites/esporteinterativo/img/2022/06/21/gettyimages-1218121746.jpg_423682103.jpg', -23.5453172, -46.4764563);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Fonte Nova', 48000, 'Salvador - BA', 'https://blog.maxmilhas.com.br/wp-content/uploads/2019/05/Arena-Fonte-Nova-Est%C3%A1dios-da-Copa-Am%C3%A9rica-2019.jpg', -12.9789048, -38.5052644);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('São Januário', 21880, 'Rio de Janeiro - RJ', 'https://terceirotempo.uol.com.br/imagens/45/99/w693_h460_arq_94599.webp',-22.8911598, -43.2302314);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Couto Pereira', 40502, 'Curitiba - PR', 'https://cdngo.academiadasapostasbrasil.com/addons/default/modules/stats/img/venues/600/2874.webp', -25.420971, -49.261669);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Arena da Baixada', 42372, 'Curitiba - PR', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/04/4a/13/iluminacao-noturna-da.jpg?w=1200&h=-1&s=1', -25.4482067, -49.2791753);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Serra Dourada', 50049, 'Goiânia - GO', 'https://www.estadios.net/wp-content/uploads/2019/01/estadio-serra-dourada-inicial.jpg', -16.6990567, -49.2363408);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Mineirão',61927, 'Belo Horizonte - MG', 'https://prefeitura.pbh.gov.br/sites/default/files/styles/slideshow/public/estrutura-de-governo/bhtrans/2019/Mineir%C3%A3o%20-%20foto%20Breno%20Pataro%20PBH.jpg?itok=zNH9bjFU', -19.8658619, -43.9733202);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Arena Independência', 23000, 'Belo Horizonte - MG', 'http://polidorojunior.com.br/wp-content/uploads/2016/01/Arena.jpg', -19.9087657, -43.9201896);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Nilton Santos', 45217, 'Rio de Janeiro - RJ', 'https://www.estadios.net/wp-content/uploads/2019/02/estadio-nilton-santos-inicial.jpg', -22.8932699, -43.2945015);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Nabi Abi Chedid', 15010, 'Bragança Paulista - SP', 'https://ecrie.com.br/sistema/conteudos/imagem/m_57_0_1_20092021150950.jpg', -22.9653901, -46.5396611);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Arena Pantanal', 44097, 'Cuiabá - MS', 'https://s2.glbimg.com/cpiWISV5NkSQcx7mw7GI9q-qrLM=/0x0:1024x575/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/3/p/tAjhXIS3mmsESd961UQg/93823219-2601790440040066-7569270828542459904-o.jpg', -15.6040142, -56.1238132);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Castelão', 63903, 'Fortaleza - CE', 'https://conteudo.imguol.com.br/c/esporte/23/2019/03/15/foto-aerea-do-castelao-1552676239338_v2_4x3.jpg', -3.807278, -38.5246218);
INSERT INTO tb_stadium (name, capacity, location, img_Url, latitude, longitude) VALUES ('Vila Belmiro', 16068, 'Santos - SP', 'https://media.santosfc.com.br/wp-content/uploads/2022/08/Foto-tu.drone-4-1.jpeg', -23.9510271, -46.3393382);


INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Grêmio', 85216, 1, 3, 5, 2, 'a', 'https://logodetimes.com/times/gremio/logo-gremio-1024.png', 1);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Internacional', 76156, 1, 2, 1, 3, 'a', 'https://logodetimes.com/times/internacional/logo-internacional-512.png', 2);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Palmeiras', 136670, 0, 3, 4, 11, 'a', 'https://logodetimes.com/times/palmeiras/logo-palmeiras-512.png', 3);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Atlético-MG', 84501, 0, 1, 2, 2, 'a', 'https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-512.png', 12);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('América-MG', 1900, 0, 0, 0, 0, 'a', 'https://logodetimes.com/times/america-mineiro/logo-america-mineiro-512.png', 13);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Athletico-PR', 40000, 0, 0, 1, 1, 'a', 'https://logodetimes.com/times/atletico-paranaense/logo-atletico-paranaense-512.png', 10);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Bahia', 49000, 0, 0, 0, 2, 'a', 'https://logodetimes.com/times/bahia/logo-bahia-512.png', 7);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Botafogo', 39604, 0, 0, 0, 2, 'a', 'https://logodetimes.com/times/botafogo/logo-botafogo-512.png', 14);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Bragantino', 5000, 0, 0, 0, 0, 'a', 'https://logodetimes.com/times/red-bull-bragantino/logo-red-bull-bragantino-512.png', 15);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Corinthians', 116000, 2, 1, 3, 7, 'a', 'https://logodetimes.com/times/corinthians/logo-corinthians-512.png', 6);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Coritiba', 39264, 0, 0, 0, 1, 'a', 'https://logodetimes.com/times/coritiba/logo-coritiba-512.png', 9);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Cruzeiro', 61167, 0, 2, 6, 4, 'a', 'https://logodetimes.com/times/cruzeiro/logo-cruzeiro-512.png', 12);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Cuiabá', 5000, 0, 0, 0, 0, 'a', 'https://logodetimes.com/times/cuiaba/logo-cuiaba-512.png', 16);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Flamengo', 100000, 1, 3, 4, 7, 'a', 'https://logodetimes.com/times/flamengo/logo-flamengo-512.png', 4);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Fluminense', 57218, 0, 0, 1, 4, 'a', 'https://logodetimes.com/times/fluminense/logo-fluminense-512.png', 4);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Fortaleza', 41635, 0, 0, 0, 0, 'a', 'https://logodetimes.com/times/fortaleza/logo-fortaleza-512.png', 17);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Goiás', 6000, 0, 0, 0, 0, 'a', 'https://logodetimes.com/times/goias/logo-goias-esporte-clube-512.png', 11);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('São Paulo', 41713, 3, 3, 0, 6, 'a', 'https://logodetimes.com/times/sao-paulo/logo-sao-paulo-512.png', 5);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Santos', 32338, 2, 3, 1, 8, 'a', 'https://logodetimes.com/times/santos/logo-santos-512.png', 18);
INSERT INTO tb_team (name, members, international_Cups, continental_Cups, national_Cups, national_Leagues, serie, img_Url, stadium_id) VALUES ('Vasco', 54877, 0, 1, 1, 4, 'a', 'https://logodetimes.com/times/vasco-da-gama/logo-vasco-da-gama-512.png', 8);


INSERT INTO tb_player (name, nickname, birth_Date, img_Url, team_id) VALUES ('João da Silva', 'João', TIMESTAMP WITH TIME ZONE '1999-08-11', 'https://img.a.transfermarkt.technology/portrait/header/44352-1668156555.jpg?lm=1', 1);
INSERT INTO tb_player (name, nickname, birth_Date, img_Url, team_id) VALUES ('Lucas Silva', 'Lucas', TIMESTAMP WITH TIME ZONE '1999-08-11', 'https://img.a.transfermarkt.technology/portrait/header/44352-1668156555.jpg?lm=1', 2);
INSERT INTO tb_player (name, nickname, birth_Date, img_Url, team_id) VALUES ('Marcos Alexandre', 'Marcos', TIMESTAMP WITH TIME ZONE '1999-08-11', 'https://img.a.transfermarkt.technology/portrait/header/44352-1668156555.jpg?lm=1', 3);
INSERT INTO tb_player (name, nickname, birth_Date, img_Url, team_id) VALUES ('Emanuel Salvador', 'Manu', TIMESTAMP WITH TIME ZONE '1999-08-11', 'https://img.a.transfermarkt.technology/portrait/header/44352-1668156555.jpg?lm=1', 1);