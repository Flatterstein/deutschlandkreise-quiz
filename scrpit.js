// 🗺️ Liste aller Landkreise
const kreise = [
    { name: "Alb-Donau-Kreis", x: 500, y: 600 },
    { name: "Biberach", x: 520, y: 620 },
    { name: "Bodenseekreis", x: 530, y: 650 },
    { name: "Düsseldorf (Stadt)", x: 300, y: 200 },
    { name: "München (Stadt)", x: 700, y: 800 },
    { name: "Hamburg (Stadt)", x: 600, y: 100 },
    // Hier ALLE Landkreise mit den korrekten Koordinaten einfügen
];

// 🎯 Zufälligen Landkreis auswählen
let aktuellerKreis = kreise[Math.floor(Math.random() * kreise.length)];
document.getElementById("frage").innerText = `Klicke auf: ${aktuellerKreis.name}`;

// 🖱️ Klick-Event auf der Karte
document.getElementById("karte").addEventListener("click", function(event) {
    let klickX = event.offsetX;
    let klickY = event.offsetY;

    // 📏 Berechnung der Distanz zum gesuchten Landkreis
    let abstand = Math.sqrt(
        Math.pow(klickX - aktuellerKreis.x, 2) + 
        Math.pow(klickY - aktuellerKreis.y, 2)
    );

    if (abstand < 30) {
        document.getElementById("status").innerText = "✅ Richtig!";
        setTimeout(() => location.reload(), 1500);
    } else {
        document.getElementById("status").innerText = "❌ Falsch! Versuche es erneut.";
    }
});
