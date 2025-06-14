// Așteaptă ca toată pagina să fie încărcată
document.addEventListener('DOMContentLoaded', function() {
    console.log("Script.js s-a încărcat corect!"); // Mesaj de verificare în consolă

    // --- FUNCȚIONALITATE COPIERE IP ---
    const copyBtn = document.getElementById('copy-btn');
    
    // Verificăm dacă butonul a fost găsit
    if (copyBtn) {
        console.log("Butonul de copiere a fost găsit.");

        copyBtn.addEventListener('click', () => {
            console.log("Butonul a fost apăsat!");
            const ip = copyBtn.dataset.ip;

            if (ip) {
                console.log(`Încerc să copiez IP-ul: ${ip}`);
                navigator.clipboard.writeText(ip).then(() => {
                    console.log("IP copiat cu succes!");
                    // Feedback pentru utilizator
                    const originalText = copyBtn.querySelector('.ip-text').textContent;
                    const copyIcon = copyBtn.querySelector('.copy-icon');
                    copyBtn.querySelector('.ip-text').textContent = 'COPIAT!';
                    copyIcon.style.backgroundImage = "url('https://img.icons8.com/ios-glyphs/30/FFFFFF/checkmark--v1.png')";

                    setTimeout(() => {
                        copyBtn.querySelector('.ip-text').textContent = originalText;
                        copyIcon.style.backgroundImage = "url('https://img.icons8.com/ios-glyphs/30/FFFFFF/copy.png')";
                    }, 2500);

                }).catch(err => {
                    // Aceasta este partea cea mai importantă - afișează eroarea
                    console.error("A apărut o eroare la copierea IP-ului:", err);
                    alert("Eroare la copiere. Asigură-te că site-ul este pe HTTPS.");
                });
            } else {
                console.error("Nu am găsit atributul 'data-ip' pe buton.");
            }
        });
    } else {
        console.error("Nu am găsit elementul cu ID-ul 'copy-btn'.");
    }

    // Aici continuă restul codului pentru status, scântei, etc...
    // ... (restul codului din script.js rămâne la fel) ...
});