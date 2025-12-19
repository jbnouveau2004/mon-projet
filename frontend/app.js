const API = 'http://192.168.1.108:3000/api';

async function charger() {
  const res = await fetch(`${API}/messages`);
  const data = await res.json();

  const ul = document.getElementById('liste');
  ul.innerHTML = '';
  data.forEach(m => {
    const li = document.createElement('li');
    li.textContent = m.contenu;
    ul.appendChild(li);
  });
}

async function envoyer() {
  const input = document.getElementById('message');

  await fetch(`${API}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contenu: input.value })
  });

  input.value = '';
  charger();
}

charger();

async function charger2() {
  const res = await fetch(`${API}/items`);
  const data = await res.json();

  const tbody = document.getElementById('listing');
  tbody.innerHTML = '';
  data.forEach(m => {
    const tr = document.createElement('tr');
    tr.innerHTML = '<td>' + m.id + '</td><td>' + m.emplacement + '</td><td>' + m.reference + '</td><td>' + m.taille + '</td><td>' + m.designation + '</td><td>' + m.quantite + '</td>';
    tbody.appendChild(tr);
  });
}

async function ajouter() {
  const input1 = document.getElementById('emplacement');
  const input2 = document.getElementById('reference');
  const input3 = document.getElementById('taille');
  const input4 = document.getElementById('designation');
  const input5 = document.getElementById('quantite');

  await fetch(`${API}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ emplacement: input1.value, reference: input2.value, taille: input3.value, designation: input4.value, quantite: input5.value })
  });

  input1.value = '';
  input2.value = '';
  input3.value = '';
  input4.value = '';
  input5.value = '';
  charger2();
}

charger2();