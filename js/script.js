var userName = prompt('Qual è il tuo cognome?');
alert(userName);

var familyNameGroup = ['Buffon', 'Cannavaro', 'Nesta', 'Barzagli', 'Grosso', 'Pirlo', 'Del Piero', 'Gattuso', 'Totti', 'Materazzi', 'Toni', 'Oddo', 'Zaccardo','De Rossi'];
alert(familyNameGroup);

familyNameGroup.push(userName);
alert(familyNameGroup);
familyNameGroup.sort();

var posizioneNome;

for (var i = 0; i < familyNameGroup.length; i++) {
  var formazioneGlorie = document.getElementById('cognomi').innerHTML;
  document.getElementById('cognomi').innerHTML = formazioneGlorie + '<li>' + familyNameGroup[i] + '</li>';
  if (familyNameGroup[i] == userName) {
    posizioneNome = i;
    console.log(posizioneNome + 1);
  }
}
document.getElementById('cognomi').innerHTML += 'Il tuo Nome è nella posizione numero:'+ ' ' + (posizioneNome + 1);
