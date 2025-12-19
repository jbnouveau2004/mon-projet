mon-projet/
├── backend/
│ ├── .env
│ ├── app.js
│ ├── server.js
│ ├── config/
│ │ └── db.js
│ ├── models/
│ │ └── itemModel.js
│ ├── controllers/
│ │ └── itemController.js
│ ├── routes/
│ │ └── itemRoutes.js
│ └── database.db
│
└── frontend/
    ├── index.html
    ├── app.js
    └── style.css

mkdir backend frontend etc...
cd backend
npm init -y
npm install express cors

Installation MYSQL:
apt-get install mysql-server (raspberry)
ou
apt-get install mariadb-server (linux pc)

mysql_secure_installation
puis entrer le mot de passe root
puis faire "n" "n" "y" "n" "y" "y"

créer une DATABASE:
mysql
puis:
CREATE DATABASE nodeapp CHARACTER SET utf8mb4;
CREATE USER 'jb'@'localhost' IDENTIFIED BY '3929';
GRANT ALL PRIVILEGES ON nodeapp.* TO 'jb'@'localhost';
FLUSH PRIVILEGES;
EXIT;

installer le driver Mysql sur le projet Node.js
cd backend
npm install mysql2

installer les variable d'invironnement
cd backend
npm install dotenv
.env dans backend:
PORT=3000
DB_HOST=127.0.0.1 #Ne pas mettre localhost
DB_USER=jb
DB_PASSWORD=3929
DB_NAME=nodeapp


CRUD stock

CREATE TABLE stock (
id INT AUTO_INCREMENT PRIMARY KEY,
emplacement VARCHAR(7) NOT NULL,
reference VARCHAR(50) NOT NULL,
taille VARCHAR(50) NOT NULL,
designation VARCHAR(255) NOT NULL,
quantite VARCHAR(10) NOT NULL
);

EXPORTER EN CSV

mysql -u root -p nodeapp
SELECT * FROM messages INTO OUTFILE '/home/jb/Bureau/fichier.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '' LINES TERMINATED BY '\n';

si pas autorisé à écrire un fichier avec mariadb
mariadb -u jb -p nodeapp -e "SELECT * FROM messages"   --batch --raw | sed 's/\t/;/g' > fichier.csv



IMPORTER UN CSV

LOAD DATA INFILE '/tmp/clients.csv'
INTO TABLE clients
FIELDS TERMINATED BY ';'
ENCLOSED BY ''
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

si pas autorisé à écrire un fichier avec mariadb
LOAD DATA LOCAL INFILE '/tmp/clients.csv'
INTO TABLE clients
FIELDS TERMINATED BY ';'
ENCLOSED BY ''
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

****************************************** TEST **************************
CREATE

curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"emplacement":"CIN0000", "reference":"ref", "taille":"test", "designation":"testest", "quantite":"2"}'

READ ALL

curl http://localhost:3000/api/items

READ ONE

curl http://localhost:3000/api/items/1

UPDATE

curl -X PUT http://localhost:3000/api/items/1 \
  -H "Content-Type: application/json" \
  -d '{"emplacement":"CIN0000", "reference":"ref", "taille":"test", "designation":"testest", "quantite":"2"}'

DELETE

curl -X DELETE http://localhost:3000/api/items/1

******************************** FIN TEST *********************************

Cas 1: Ajouter une route pour afficher sur le navigateur la page HTML avec EXPRESS (http://localhost:3000)

backend/app.js à la fin:

Ajouter fichiers statiques:
const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend')));

Ajouter une route:
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

cd backend
node server.js

Cas 2 plus PRO: Front séparé avec python (http://localhost:8080)
cd backend
node server.js

cd frontend
python3 -m http.server 8080