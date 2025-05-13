function showPaymentForm() {
  const form = document.getElementById('simuForm');
  if (form.checkValidity()) {
    document.getElementById('paymentSection').style.display = 'block';
  } else {
    alert("Veuillez remplir tous les champs correctement.");
  }
}

document.getElementById('paymentForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const numero = this.numero.value;
  const operateur = this.operateur.value;

  if (!/^6[5789][0-9]{7}$/.test(numero)) {
    alert("Numéro invalide. Format attendu : 6XX XXX XXX");
    return;
  }

  // Simulation du paiement réussi
  alert(Paiement de 1000 FCFA via ${operateur.toUpperCase()} réussi.);

  const data = new FormData(document.getElementById('simuForm'));
  const vd = parseFloat(data.get("vd"));
  const taux = parseFloat(data.get("tarif"));

  // Simulation simple d’un coût douanier (à enrichir)
  const dd = (vd * taux) / 100;
  const da = (vd > 200000) ? (vd * 0.25) : 0; // Exemple : Droit d'accise si > 200k
  const tva = (vd + dd + da) * 0.175;
  const total = vd + dd + da + tva;

document.getElementById("montantDouane").innerText = Coût total estimé : ${total.toFixed(2)} FCFA;
  document.getElementById("resultat").style.display = 'block';
});

