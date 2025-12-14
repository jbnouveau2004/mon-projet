const API = 'http://localhost:3000/api';

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