Voici les corrections des exercices 1 à 9 avec les titres en gras pour chaque exercice :

---

**Exercice 1**  
Code corrigé :

```javascript
function Welcome(props) {
  return <h1>Bonjour, {props.name}!</h1>;
}

// Utilisation du composant
<Welcome name="Alice" />;
```

Explication :  
Le composant `Welcome` reçoit la prop `name` et l'affiche dans un message de bienvenue.

---

**Exercice 2**  
Code corrigé :

```javascript
function UserCard(props) {
  return (
    <div className="user-card">
      <p>Nom : {props.name}</p>
      <p>Âge : {props.age}</p>
      <p>Email : {props.email}</p>
    </div>
  );
}

// Utilisation du composant
<UserCard name="Alice Dupont" age={25} email="alice.dupont@example.com" />;
```

Explication :  
Le composant `UserCard` prend plusieurs props (`name`, `age`, `email`) et affiche les informations utilisateur.

---

**Exercice 3**  
Code corrigé :

```javascript
function Product(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Prix : {props.price} €</p>
    </div>
  );
}

// Utilisation du composant
<Product name="Ordinateur portable" price={1200} />;
```

Explication :  
Le composant `Product` affiche le nom et le prix d'un produit en utilisant les props `name` et `price`.

---

**Exercice 4**  
Code corrigé :

```javascript
function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}

// Utilisation du composant
<Button label="Cliquez ici" onClick={() => alert("Bouton cliqué!")} />;
```

Explication :  
Le composant `Button` utilise une prop `label` pour le texte et `onClick` pour la fonction associée.

---

**Exercice 5**  
Code corrigé :

```javascript
function ImageCard(props) {
  return (
    <div className="image-card">
      <img src={props.src} alt={props.alt} />
      <p>{props.alt}</p>
    </div>
  );
}

// Utilisation du composant
<ImageCard src="https://example.com/image.jpg" alt="Une belle image" />;
```

Explication :  
Le composant `ImageCard` affiche une image avec une description passée via les props `src` et `alt`.

---

**Exercice 6**  
Code corrigé :

```javascript
function Counter({ count, increment, decrement }) {
  return (
    <div>
      <h1>Compteur : {count}</h1>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
    </div>
  );
}

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return <Counter count={count} increment={increment} decrement={decrement} />;
}
```

Explication :  
Le composant `Counter` utilise des props pour incrémenter et décrémenter un compteur dans `App`.

---

**Exercice 7**  
Code corrigé :

```javascript
function Task(props) {
  return <li>{props.taskName}</li>;
}

function TaskList() {
  const tasks = ["aaa", "bbb", "ccc"];
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task key={index} taskName={task} />
      ))}
    </ul>
  );
}
```

Explication :  
Le composant `TaskList` affiche une liste de tâches, chaque tâche est rendue par le composant `Task`.

---

**Exercice 8**  
Code corrigé :

```javascript
function Notification({ message, type }) {
  const getClassName = () => {
    switch (type) {
      case "success":
        return "notafication-success";
      case "warning":
        return "notification-warning";
      case "error":
        return "notification-error";
      default:
        return "";
    }
  };

  return (
    <div className={`notification ${getClassName()}`}>
      <p>{message}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Notification type="success" message="Opération réussie!" />
      <Notification type="warning" message="Attention !" />
      <Notification type="error" message="Erreur!" />
    </div>
  );
}
```

Explication :  
Le composant `Notification` affiche des messages avec différents styles selon la prop `type`.

---

Cela devrait t’aider à bien comprendre chaque correction.
