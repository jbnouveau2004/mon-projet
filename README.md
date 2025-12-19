mon-projet/
├── backend/
│ ├── app.js
│ ├── server.js
│ ├── config/
│ │ └── db.js
│ ├── models/
│ │ └── messageModel.js
│ ├── controllers/
│ │ └── messageController.js
│ ├── routes/
│ │ └── messageRoutes.js
│ └── database.db
│
└── frontend/
    ├── index.html
    ├── app.js
    └── style.css

mkdir backend frontend
cd backend
npm init -y
npm install express sqlite3 cors

création des fichiers et sous-dossier

A changer dans app.js mettre un domaine en production
const API = 'http://localhost:3000/api';

Pour afficher les messages:
curl http://localhost:3000/api/messages

Pour ajouter des messages:
curl -X POST http://localhost:3000/api/messages \
  -H "Content-Type: application/json" \
  -d '{"contenu":"Message de test"}'

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
cd frontend
python3 -m http.server 8080

PASSAGE DE SQLITE A MYSQL:
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

créer une TABLE
mysql -u jb -p nodeapp
entrer mode passe utilisateur jb
puis:
CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  contenu TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
EXIT;


installer le driver Mysql sur le projet Node.js
cd backend
npm install mysql2

remplacer le fichier /backend/config/db.js
remplacer le fichier /backend/models/messageModel.js
remplacer le fichier /backend/controllers/messageController.js

Tester:
cd backend
node server.js

curl -X POST http://localhost:3000/api/messages \
  -H "Content-Type: application/json" \
  -d '{"contenu":"Message de test"}'

creer les variables d'environnement:
cd backend
npm install dotenv
mousepade .env puis entrer le code
Attention ne pas mettre localhost mais 127.0.0.1

MISE EN PLACE D'UN SYSTEME D'AUTHENTIFICATION

A voir plus tard......................

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
