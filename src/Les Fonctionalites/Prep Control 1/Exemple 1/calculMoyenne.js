export function calculerMoyenne(notes) {
  const somme = notes.reduce((acc, note) => acc + note, 0);
  return (somme / notes.length).toFixed(2); // Arrondir à 2 décimales
}
