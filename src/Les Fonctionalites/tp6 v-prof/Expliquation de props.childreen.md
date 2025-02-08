 `props.children` dans React

---

### Résumé sur `props.children` dans React

**Qu'est-ce que c'est ?**
- `props.children` est une propriété spéciale dans React qui permet de passer des éléments enfants à un composant.

**Utilisation :**
- Elle est utilisée pour rendre ou manipuler les éléments enfants passés à un composant.

**Exemple :**
```jsx
const MonComposant = (props) => {
  return (
    <div>
      <h1>Titre</h1>
      <div>{props.children}</div> {/* Affiche les enfants */}
    </div>
  );
};

const App = () => {
  return (
    <MonComposant>
      <p>Ceci est un enfant.</p>
    </MonComposant>
  );
};
```

**Avantages :**
- **Flexibilité** : Crée des composants réutilisables pouvant contenir divers contenus.
- **Composition** : Favorise la création d'interfaces modulaires et maintenables.

---

N'hésitez pas à demander si vous avez besoin de plus d'informations ou d'autres résumés !