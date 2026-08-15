# Teknisen Portfolion Tyylianalyysi ja Parannusehdotukset

Tämä raportti sisältää analyysin nykyisestä portfoliostasi (samirautanen.fi) näyttökuvien pohjalta, sekä listauksen parhaista suunnittelukäytännöistä tekniselle asiantuntijalle (AI Engineer & Agentic Systems Architect). 

Keskitymme ihmislähtöiseen, ammattimaiseen ja luotettavaan ilmeeseen, välttäen tekoälyn suosimia kliseitä, kuten lasimaisuutta (glassmorphism) ja neon-hohtoisia gradientteja.

---

## 1. Ihanteelliset speksit tekniselle portfoliolle (Ei AI-kliseitä)

Tekoälyinsinöörin ja arkkitehdin portfolion tulee viestiä järjestelmällisyyttä, selkeyttä ja asiantuntemusta. Paras tapa saavuttaa tämä on ns. "Swiss Design" -tyyppinen tai utilitaristinen minimalismi, joka antaa itse työn ja arkkitehtuurin puhua puolestaan.

### Fontit ja Typografia
*   **Pääfontti (Leipäteksti & Otsikot):** Puhdas, neutraali ja erittäin luettava sans-serif. Esimerkiksi *Inter, Helvetica Neue, Roboto, tai SF Pro*. Nämä viestivät vakaata insinöörimäisyyttä.
*   **Korostusfontti (Tagit, Koodinpätkät, Metatiedot):** Monospace-fontti (tasalevyinen) tuo tyylikästä teknistä twistiä. Esimerkiksi *Fira Code, JetBrains Mono tai Roboto Mono*.
*   **Koot:** Suuret, rohkeat ja tiiviit otsikot (H1 esim. 48px-64px) luomaan vahvan hierarkian. Riittävän suuri, helppolukuinen leipäteksti (16px-18px).

### Värimaailma
*   Unohdetaan neon-siniset, violetit ja "kyberpunk"-tyyliset hohtavat gradientit.
*   **Pohja:** Monokromaattinen tai erittäin korkean kontrastin paletti. Puhdas valkoinen (`#FFFFFF`) tai aavistuksen murrettu, vaalea luonnonvalkoinen/harmaa (esim. `#F9FAFB`) taustaksi.
*   **Teksti:** Syvä tummanharmaa/hiilenmusta (esim. `#111827` tai `#171717`). Ei täysin pikimustaa (`#000000`), jotta voimakas kontrasti ei rasita silmiä ruudulta luettaessa.
*   **Korostusväri (Aksentti):** Yksi vahva, luotettava "insinööriväri". Esimerkiksi tiilenpunainen, syvä metsänvihreä, tai klassinen, murrettu sähkönsininen (kuten Tailwindin `blue-600` tai `indigo-600`), jota käytetään säästeliäästi vain painikkeissa ja linkeissä.

### Sivun asettelu ja Tyyli (Kortit)
*   **Kortit:** "Flat design" (litteä suunnittelu). Vältä syviä varjoja ja täysin lasimaisia efektejä. Suosi 1px vahvuisia, hyvin hillittyjä reunoja (borders, esim. `#E5E7EB`) erottamaan kortit taustasta, tai vain äärimmäisen pehmeää, luonnollista varjoa (soft shadow).
*   **Asettelu:** Tiukka grid-pohjainen (ruudukko) asettelu. Paljon "valkoista tilaa" (negative space) elementtien ympärillä, mikä tekee sivusta rauhallisen, arvokkaan ja helposti silmäiltävän.

---

## 2. Analyysi nykyisestä portfoliosta

### Vahvuudet
*   **Asettelu ja Rakenne:** "Selected Work" -osion 3-sarakkeinen grid on selkeä ja toimiva. Korttien sisäinen informaatiohierarkia (Kuva -> Otsikko -> Kuvaus -> Tagit -> Toimintolinkki) on erittäin looginen ja helppolukuinen.
*   **Navigaatio:** Ylälaidan kelluva "pill"-mallinen navigaatiopalkki on moderni, siisti ja pitää päähuomion itse sisällössä.
*   **Sisällön määrä:** Sivu ei ole ahdettu liian täyteen tekstiä, vaan se on nopeasti ymmärrettävissä.

### Kehityskohteet (Parannettavaa)
*   **Hero-osion grafiikka (Verkosto/Konstellaatio):** Tämä abstrakti solmugrafiikka on yksi suurimmista "Tech/AI-kliseistä". Se tekee taustasta levottoman ja häiritsee nimen sekä tittelin luettavuutta, kun viivat risteävät tekstin yli. Se voi antaa hieman halvan tai "valmisteemamaisen" vaikutelman verrattuna kovan tason asiantuntijaan.
*   **Projektien kuvitus:** Korteissa olevat hohtavat, neon-siniset verkostojen ja aivojen kuvat ("CareAssist AI", "ContractSense AI") ovat juuri sitä tekoälyn generoimaa tai stock-kuva -tyyliä, josta halusit eroon. Ne vievät uskottavuutta oikealta insinöörityöltä ja saavat projektit näyttämään abstrakteilta konsepteilta konkreettisten tuotteiden sijaan. ("Digital Twin" -kortin kuva on paljon paremmalla suunnalla, koska se näyttää aidommalta käyttöliittymältä).
*   **Typografian välit (Tracking):** Hero-osiossa "SAMI RAUTANEN" -nimen kirjainvälit ovat erittäin suuret, mikä tekee sanasta hieman hajanaisen ja vie siltä voimaa.
*   **Korttien ja Tagien Kontrasti:** Korttien taustaväri verrattuna sivun yleiseen taustaväriin luo hieman "mutaisen" (muddy) vaikutelman; ne eivät erotu tarpeeksi terävästi. Lisäksi teknologioita listaavat pillerimäiset tagit (esim. "AWS SQS", "Lambda") kaipaavat hieman napakampaa kontrastia taustaansa vasten ollakseen helpommin luettavia.

---

## 3. Konkreettiset toimenpidesuositukset

1.  **Vaihda Hero-kuvitus ammattimaisemmaksi ja kliinisemmäksi:**
    *   Poista abstrakti verkostografiikka taustalta kokonaan.
    *   **Tilalle vaihtoehtoja:** 
        *   Vain puhdas, erittäin vahvaan typografiaan luottava otsikko suurella valkoisella tilalla (minimalistinen lähestymistapa).
        *   Laadukas, ammattimainen ja asiallinen kasvokuva (viestii luottamusta).
        *   Erittäin kliininen, vektoripohjainen arkkitehtuurikaavio (esim. mustavalkoinen AWS/System design -diagrammi) jostain monimutkaisesta rakentamastasi järjestelmästä.
2.  **Päivitä Projektikorttien Kuvat:**
    *   Korvaa tekoälyn generoimat neon-verkostokuvat jollain seuraavista:
        *   Aidoilla kuvakaappauksilla käyttöliittymistä tai raporteista.
        *   Puhtailla, selkeillä arkkitehtuurikaavioilla (solidilla taustavärillä).
        *   Pelkistetyillä, typografisilla "kansikuvilla", joissa on vain projektin lyhenne/logo tai olennaisin data.
3.  **Hienosäädä Typografia (Teeman päivitys):**
    *   Pienennä "SAMI RAUTANEN" -nimen kirjainväliä (letter-spacing/tracking), jotta se on tiiviimpi, yhtenäisempi ja iskevämpi.
    *   Vaihda tagien (esim. React, FastAPI) fontti monospace-tyyppiseksi (esim. *Fira Code*), jotta ne erottuvat leipätekstistä ja näyttävät teknisemmiltä.
4.  **Siirry täyteen "Flat Design" -tyyliin (Korttien päivitys):**
    *   Poista tai vähennä merkittävästi korttien taustavärin eroa sivun taustaan. 
    *   Käytä korttien ympärillä puhdasta, ohutta (1px) vaaleanharmaata reunaa (border) erottamaan ne. Tämä tekee ilmeestä heti modernimman ja ammattimaisemman ohjelmistokehityksen standardien mukaan (vrt. esim. Vercelin, Stripen tai Linearin sivustojen design).
