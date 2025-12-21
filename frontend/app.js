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
    tr.innerHTML = '<td>' + m.id + '</td><td>' + m.emplacement + '</td><td>' + m.reference + '</td><td>' + m.taille + '</td><td>' + m.designation + '</td><td>' + m.quantite + '</td><button onclick="supprimer(' + m.id + ')">Supprimer</button><button onclick="modifier(' + m.id + ')">Modifier</button>';
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

async function supprimer(id){
    if (!confirm('Supprimmer cet élément ?'))
    return;

    await fetch(`${API}/items/${id}`, {method: 'DELETE' });

    charger2();
}

async function modifier(id){
    const res = await fetch(`${API}/items/${id}`);
    const item = await res.json();

    document.getElementById('id').style.display = "block";
    document.getElementById('modifier').style.display = "block";
    document.getElementById('annuler').style.display = "block";
    document.getElementById('ajouter').style.display = "none";

    document.getElementById('id').value = item.id;
    document.getElementById('emplacement').value = item.emplacement;
    document.getElementById('reference').value = item.reference;
    document.getElementById('taille').value = item.taille;
    document.getElementById('designation').value = item.designation;
    document.getElementById('quantite').value = item.quantite;

}

async function save(){
    const id = document.getElementById('id').value;
    const data = {
        emplacement: document.getElementById('emplacement').value,
        reference: document.getElementById('reference').value,
        taille: document.getElementById('taille').value,
        designation: document.getElementById('designation').value,
        quantite: document.getElementById('quantite').value
    };
    await fetch(`${API}/items/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    document.getElementById('id').style.display = "none";
    document.getElementById('modifier').style.display = "none";
    document.getElementById('annuler').style.display = "none";
    document.getElementById('ajouter').style.display = "block";

    const input1 = document.getElementById('emplacement');
    const input2 = document.getElementById('reference');
    const input3 = document.getElementById('taille');
    const input4 = document.getElementById('designation');
    const input5 = document.getElementById('quantite');

    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
    input5.value = '';

    charger2();

}

async function annuler(){

    document.getElementById('id').style.display = "none";
    document.getElementById('modifier').style.display = "none";
    document.getElementById('annuler').style.display = "none";
    document.getElementById('ajouter').style.display = "block";

    const input1 = document.getElementById('emplacement');
    const input2 = document.getElementById('reference');
    const input3 = document.getElementById('taille');
    const input4 = document.getElementById('designation');
    const input5 = document.getElementById('quantite');

    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
    input5.value = '';

    charger2();

}


async function rechercher() {
  const input = document.getElementById('search').value;

  if (!input) {
    charger2();
    return;
  }

  const res = await fetch(`${API}/items/search?q=${encodeURIComponent(input)}`);
  const items = await res.json();

  const tbody = document.getElementById('listing');
  tbody.innerHTML = '';
  items.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = '<td>' + item.id + '</td><td>' + item.emplacement + '</td><td>' + item.reference + '</td><td>' + item.taille + '</td><td>' + item.designation + '</td><td>' + item.quantite + '</td><button onclick="supprimer(' + item.id + ')">Supprimer</button><button onclick="modifier(' + item.id + ')">Modifier</button>';
    tbody.appendChild(tr);
  });

  input.value = '';

}
