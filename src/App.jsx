import { useState, useEffect } from 'react'

function App() {

const TOTAL_NON_COUVERT = 82762008.23

const OBJECTIF_60 = TOTAL_NON_COUVERT * 0.60

const clientsInitial = [

{ nom: 'JET CONTRACTORS', solde: 16768778.70 },
{ nom: 'MARCONT STRUCTURES', solde: 12315000.00 },
{ nom: 'SAID BELHAJ', solde: 8724126.82 },
{ nom: 'ESPACE METAUX DU MAROC', solde: 5949622.05 },
{ nom: 'KADIRI HOUCEINE', solde: 4320832.51 },
{ nom: 'SOTAFER', solde: 4237071.32 },
{ nom: 'KIT MATERIAUX', solde: 3129283.63 },
{ nom: 'NOUSSI KHALID', solde: 2151176.61 },
{ nom: 'INTEC BATI', solde: 2100256.10 },
{ nom: 'META PUB', solde: 2063989.20 },
{ nom: 'ATELIER METALLURGIQUE OUSAMO FRERES', solde: 2047645.63 },
{ nom: 'JBILI HOUSSEIN', solde: 1977242.62 },
{ nom: 'AHEDOUNE HAMZA', solde: 1627397.64 },
{ nom: 'AIT MELLOUL METAL', solde: 1621883.56 },
{ nom: 'KETI SARL', solde: 1591518.01 },
{ nom: 'PLUMAG', solde: 1573760.80 },
{ nom: 'ETS ASSMELLAL', solde: 1123081.98 },
{ nom: 'TGCC', solde: 1096305.44 },
{ nom: 'AGATOLE SARL', solde: 1037010.00 },
{ nom: 'KADIRI AHMED', solde: 990778.34 },
{ nom: 'LUXUS METAL', solde: 861549.20 },
{ nom: 'MOUHSSIN FER', solde: 674401.01 },
{ nom: 'EL KASMI OMAR', solde: 673088.90 },
{ nom: 'H2M POLES', solde: 561996.00 },
{ nom: 'SADET', solde: 553766.40 },
{ nom: 'ATELIER INDUSTRIEL CHERIFIEN A.I.C', solde: 543434.40 },
{ nom: 'TANGISTEEL', solde: 498086.00 },
{ nom: 'EL WALID WORLD SERVICES', solde: 462048.00 },
{ nom: 'COMPANIANORTH', solde: 458080.00 },
{ nom: 'SILL SOUSS', solde: 396028.03 },
{ nom: 'BELHAJ EL MOKHTAR', solde: 390267.09 },
{ nom: 'MIDI FER', solde: 384298.00 },
{ nom: 'M & L ENGINEERING', solde: 355041.60 },
{ nom: 'TIFRMIT ACIER', solde: 291118.40 },
{ nom: 'BESBASSI DES TRAVAUX METAL', solde: 282763.20 },
{ nom: 'MAHBOUB FER', solde: 269069.00 },
{ nom: 'MAC STEEL SARL', solde: 252624.41 },
{ nom: 'NEW PREFA BATIMENT', solde: 238464.00 },
{ nom: 'PINTAPLANA MAROC', solde: 180011.40 },
{ nom: 'LUX LIGHTING', solde: 178308.00 },
{ nom: 'GO PROFILS', solde: 150770.98 },
{ nom: 'KHOUCHAR', solde: 138552.00 },
{ nom: 'ENTREPRISE HACHANI SARL', solde: 104784.00 },
{ nom: 'NEW SIGNALISATION ROUTIERE', solde: 98878.80 },
{ nom: 'ACI METAUX', solde: 90440.00 },
{ nom: 'IBDAAE AZAKHRAFA', solde: 81000.00 },
{ nom: 'TASSILA MATERIAUX INDUSTRIEL ET NEGOCE', solde: 71544.00 },
{ nom: 'MEGA POST TENSION', solde: 60871.20 },
{ nom: 'TG STEEL', solde: 55416.00 },
{ nom: 'BECOMAR', solde: 50784.00 },
{ nom: 'BENELHOU FRERES', solde: 50203.20 },
{ nom: 'GLOBAL INGENIERIE CONCEPTION INFRASTRUCTURES', solde: 37392.00 },
{ nom: 'MAGHREB GRILLAGE', solde: 20000.00 },
{ nom: 'GENERAL CONTRACTOR DEVELOPPEMENT', solde: 19255.61 },
{ nom: 'CHENTOUF AHMED', solde: 13664.76 },
{ nom: 'AIC METALLURGIE', solde: 3744.00 },
{ nom: 'AVANTAGE BETON ET SERVICE', solde: 2851.20 },
{ nom: 'HAMID SLAOUI', solde: 2049.60 },
{ nom: 'DIBRI METAL', solde: 1380.00 },
{ nom: 'SEA ENGINNERING', solde: 1017.39 },
{ nom: 'ATLAS METAL', solde: 534.83 },
{ nom: 'ROMA FER', solde: 507.01 },
{ nom: 'HOMESENSE', solde: 300.00 },
{ nom: 'ILYASS CHAFAA', solde: 200.00 },
{ nom: 'MONTAGE INOX', solde: 199.02 },
{ nom: 'AGHOUAR MOHAMED', solde: 100.01 },
{ nom: 'STE SYSTHERM', solde: -152.71 },
{ nom: 'ACHARKI AZIBI MOHAMED', solde: -230.82 },
{ nom: 'UNION METAL', solde: -270.00 },
{ nom: 'HASSAN AMJOTE', solde: -304.00 },
{ nom: 'NOVA FER', solde: -360.01 },
{ nom: 'DAMANE PREFA', solde: -1296.00 },
{ nom: 'STE DE BATIMENT ET DE BETON MOULE', solde: -2616.00 },
{ nom: 'CATCHY COM', solde: -3650.58 },
{ nom: 'BETON TECHNOLOGY', solde: -3888.00 },
{ nom: 'SAGI CERAMICA', solde: -6136.80 },
{ nom: 'STE HNI DE TRAVAUX', solde: -6574.01 },
{ nom: 'ASTROMETAL', solde: -9700.00 },
{ nom: 'MAGINEER GMBH', solde: -21227.40 },
{ nom: 'ASSMELLAL STEEL', solde: -29700.00 },
{ nom: 'KASMI FER', solde: -34423.53 },
{ nom: 'DESAM MAROC Sarl', solde: -37090.00 },
{ nom: 'EL MAIMOUNI MOHAMED', solde: -79947.99 },
{ nom: 'MAHBOUB MOHAMED', solde: -268981.50 },
{ nom: 'SOMA METAUX', solde: -440071.36 },
{ nom: 'EL OUAFI HICHAM', solde: -564431.17 },
{ nom: 'CRET', solde: -1734583.50 },

]

const [encaissements, setEncaissements] = useState(() => {
const saved = localStorage.getItem('encaissements')
return saved ? JSON.parse(saved) : {}
})

const [previsions, setPrevisions] = useState(() => {
const saved = localStorage.getItem('previsions')
return saved ? JSON.parse(saved) : {}
})

const [statuts, setStatuts] = useState(() => {
const saved = localStorage.getItem('statuts')
return saved ? JSON.parse(saved) : {}
})

useEffect(() => {
localStorage.setItem(
'encaissements',
JSON.stringify(encaissements)
)
}, [encaissements])

useEffect(() => {
localStorage.setItem(
'previsions',
JSON.stringify(previsions)
)
}, [previsions])

useEffect(() => {
localStorage.setItem(
'statuts',
JSON.stringify(statuts)
)
}, [statuts])

function formatMontant(nombre) {
return new Intl.NumberFormat(
'fr-MA',
{
minimumFractionDigits: 2,
maximumFractionDigits: 2,
}
).format(nombre)
}

const totalEncaissement =
Object.values(encaissements)
.reduce(
(total, valeur) =>
total + (Number(valeur) || 0),
0
)

const totalPrevision =
Object.values(previsions)
.reduce(
(total, valeur) =>
total + (Number(valeur) || 0),
0
)

const totalRestant =
TOTAL_NON_COUVERT - totalEncaissement

const progression =
(totalEncaissement / OBJECTIF_60) * 100

return (

<div
style={{
background: '#f1f5f9',
minHeight: '100vh',
padding: 30,
fontFamily: 'Segoe UI'
}}
>

<div
style={{
maxWidth: 1800,
margin: '0 auto'
}}
>

<div
style={{
background:
'linear-gradient(135deg,#0f172a,#2563eb)',
padding: 30,
borderRadius: 20,
color: 'white',
marginBottom: 30,
}}
>

<h1
style={{
margin: 0,
fontSize: 38,
}}
>
📊 Dashboard Recouvrement
</h1>

<p
style={{
opacity: 0.8,
marginTop: 10,
}}
>
Pilotage intelligent des créances clients
</p>

</div>

<div
style={{
display: 'grid',
gridTemplateColumns:
'repeat(auto-fit,minmax(250px,1fr))',
gap: 20,
marginBottom: 30,
}}
>

<KPI
title='Total Non Couvert'
value={`${formatMontant(TOTAL_NON_COUVERT)} MAD`}
color='#dc2626'
/>

<KPI
title='Total Prévision'
value={`${formatMontant(totalPrevision)} MAD`}
color='#2563eb'
/>

<KPI
title='Encaissement du Mois'
value={`${formatMontant(totalEncaissement)} MAD`}
color='#16a34a'
/>

<KPI
title='Total Restant'
value={`${formatMontant(totalRestant)} MAD`}
color='#ea580c'
/>

<KPI
title='Progression Encaissement'
value={`${Math.round(progression)} %`}
color='#7c3aed'
/>

</div>

<div
style={{
background: 'white',
padding: 20,
borderRadius: 20,
overflowX: 'auto'
}}
>

<h2>Liste des Clients</h2>

<table
style={{
width: '100%',
borderCollapse: 'collapse',
marginTop: 20,
}}
>

<thead>

<tr
style={{
background: '#0f172a',
color: 'white',
}}
>

<th style={thStyle}>Client</th>
<th style={thStyle}>Solde Non Couvert</th>
<th style={thStyle}>Prévision</th>
<th style={thStyle}>Statut</th>
<th style={thStyle}>Encaissement</th>
<th style={thStyle}>Restant</th>

</tr>

</thead>

<tbody>

{clientsInitial.map((client, index) => {

const encaisse =
Number(encaissements[client.nom]) || 0

const restant =
client.solde - encaisse

return (

<tr
key={index}
style={{
borderBottom: '1px solid #e2e8f0'
}}
>

<td style={tdStyle}>
{client.nom}
</td>

<td style={tdStyle}>
{formatMontant(client.solde)} MAD
</td>

<td style={tdStyle}>

<input
type='number'
value={
previsions[client.nom] || ''
}
onChange={(e) =>
setPrevisions({
...previsions,
[client.nom]:
e.target.value
})
}
style={inputStyle}
/>

</td>

<td style={tdStyle}>

<select
value={
statuts[client.nom] ||
'À relancer'
}
onChange={(e) =>
setStatuts({
...statuts,
[client.nom]:
e.target.value
})
}
style={inputStyle}
>

<option>À relancer</option>
<option>Promesse</option>
<option>Litige</option>
<option>Payé</option>

</select>

</td>

<td style={tdStyle}>

<input
type='number'
value={
encaissements[client.nom] || ''
}
onChange={(e) =>
setEncaissements({
...encaissements,
[client.nom]:
e.target.value
})
}
style={inputStyle}
/>

</td>

<td
style={{
...tdStyle,
fontWeight: 'bold',
color:
restant > 0
? '#dc2626'
: '#16a34a'
}}
>
{formatMontant(restant)} MAD
</td>

</tr>

)

})}

</tbody>

</table>

</div>

</div>

</div>

)

}

function KPI({
title,
value,
color
}) {

return (

<div
style={{
background: 'white',
padding: 20,
borderRadius: 18,
}}
>

<div
style={{
color: '#64748b',
fontSize: 14,
}}
>
{title}
</div>

<h2
style={{
color,
marginTop: 10,
}}
>
{value}
</h2>

</div>

)

}

const thStyle = {
padding: 14,
textAlign: 'left',
}

const tdStyle = {
padding: 14,
}

const inputStyle = {
padding: 8,
borderRadius: 8,
border: '1px solid #cbd5e1',
width: 140,
}

export default App