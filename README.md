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

Cas 2 plus PRO: Front séparé avec python (http://localhost:8080)
cd frontend
python3 -m http.server 8080