# 🦸‍♂️ DC Comics React UI

Interfaccia front-end dinamica ispirata al mondo DC Comics, realizzata in React.  
Un progetto moderno e responsive che simula un sito di fumetti, con navigazione tramite props, layout a componenti e cards dinamiche per i prodotti.

## 🛠️ Tecnologie utilizzate

- React.js
- JSX
- CSS3 (modulare o globale a scelta)
- Visual Studio Code

## 📸 Screenshot

![Anteprima](./img/preview.png)

## 🧱 Struttura dei Componenti

- `App.jsx`  
  Punto di ingresso dell’app. Gestisce il layout principale con i componenti `Header`, `Main` e `Footer`. Passa dinamicamente i link di navigazione al `Header`.

- `Header.jsx`  
  Navbar dinamica che riceve i link tramite props. Evidenzia la voce attiva.

- `Main.jsx`  
  Contiene il componente `ProductsList`, responsabile del rendering della lista dei fumetti.

- `ProductsList.jsx`  
  Mappa un array di oggetti "comics" e renderizza ogni elemento tramite `ProductsCard`.

- `ProductsCard.jsx`  
  Card di prodotto che mostra titolo, immagine, descrizione, prezzo e altri dettagli del fumetto.

## 📁 Struttura del Progetto

react-dc-comics/ ├── public/ │ └── index.html ├── src/ │ ├── App.jsx │ ├── components/ │ │ ├── Header.jsx │ │ ├── Main.jsx │ │ ├── Footer.jsx │ │ ├── ProductsList.jsx │ │ └── ProductsCard.jsx │ └── assets/ │ └── img/ │ └── preview.png ├── package.json └── README.md

## 🚀 Come eseguire il progetto

1. Clona il repository o scarica la cartella.
2. Esegui `npm install` per installare le dipendenze.
3. Avvia il server con `npm run dev` (o `npm start`).
4. Apri il browser su `http://localhost:5173` (o porta configurata).

> ⚠️ Progetto attualmente **senza backend**, solo interfaccia utente.

## 🎯 Obiettivi didattici

- Strutturare un'app React a componenti riutilizzabili.
- Passare props e gestire contenuti dinamici.
- Applicare lo stile responsive con CSS.
- Simulare la logica di navigazione tramite componenti e props.

## 👨‍💻 Autore

- Giovanni Di Bello  
- [Profilo GitHub](https://github.com/giovannidibello)

