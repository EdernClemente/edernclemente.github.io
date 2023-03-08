(function() {
'use strict'
//Base de données du VRF en CSV. Peut-être mise sur un serveur si besoin. Il reste à importer la BDD pour le résidentiel et la MGP
    const csv = `reference;designation;gamme;boschResidentiel;boschTertiaireEtIndustrie;elmResidentiel;PPHT;ecoParticipation;remiseApplicable;miseEnService;description
8733500816;Climate 5000 SCI - CL5000SCI 18 OUE;Climate 5000 SCI;O;O;O;1247.00;6.67;O;N;Voici un commentaire pour vous montrer un texte explicatif du produit ou de la prestation. On peut par exemple définir les conditions de fonctionnement du produit, ses caractéristiques techniques etc.
8733500817;Climate 5000 SCI - CL5000SCI 24 OUE;Climate 5000 SCI;O;O;O;1482.00;6.67;O;N
7733700793;Climate 5000 SCI - CL5000SCI 30 OUE;Climate 5000 SCI;O;O;O;1813.00;6.67;O;N
8733500818;Climate 5000 SCI - CL5000SCI 36 OUE;Climate 5000 SCI;O;O;O;2152.00;6.67;O;N
8733500819;Climate 5000 SCI - CL5000SCI 36 OUE-3;Climate 5000 SCI;O;O;O;2233.00;6.67;O;N
7733700794;Climate 5000 SCI - CL5000SCI 42 OUE;Climate 5000 SCI;O;O;O;2255.00;6.67;O;N
8733500820;Climate 5000 SCI - CL5000SCI 48 OUE-3;Climate 5000 SCI;O;O;O;2875.00;6.67;O;N
7733700010;Climate 5000 MS - CL5000MS 18-1 CAS;Climate 5000 SCI;O;O;O;1178.00;1.67;O;N
7739833673;Climate 5000 SCI - CL5000SCI 24 CAS;Climate 5000 SCI;O;O;O;1194.00;1.67;O;N
7739833674;Climate 5000 SCI - CL5000SCI 36 CAS;Climate 5000 SCI;O;O;O;1238.00;1.67;O;N
7739833675;Climate 5000 SCI - CL5000SCI 48 CAS;Climate 5000 SCI;O;O;O;1581.00;1.67;O;N
7739834567;Façade de cassette C5000MS 7/9/12/18;Climate 5000 SCI;O;O;O;142.00;;O;N
7739834566;Façade de cassette C5000 24/36/48;Climate 5000 SCI;O;O;O;153.00;;O;N
7733700012;Climate 5000 MS - CL5000MS 18-2 DCT;Climate 5000 SCI;O;O;O;907.00;1.67;O;N
7739835549;Climate 5000 SCI - CL5000SCI 24-2 DCT;Climate 5000 SCI;O;O;O;929.00;1.67;O;N
7733700795;Climate 5000 SCI - CL5000SCI 30-2 DCT;Climate 5000 SCI;O;O;O;995.00;1.67;O;N
7739835550;Climate 5000 SCI - CL5000SCI 36-2 DCT;Climate 5000 SCI;O;O;O;1216.00;1.67;O;N
7733700796;Climate 5000 SCI - CL5000SCI 42-2 DCT;Climate 5000 SCI;O;O;O;1349.00;1.67;O;N
7739837939;Climate 5000 SCI - CL5000SCI 48-2 DCT;Climate 5000 SCI;O;O;O;1548.00;1.67;O;N
8733500821;Climate 5000 SCI - CL5000SCI 18 FCE;Climate 5000 SCI;O;O;O;641.00;1.67;O;N
7739834571;Climate 5000 SCI - CL5000SCI 24 FCE;Climate 5000 SCI;O;O;O;719.00;1.67;O;N
7739834572;Climate 5000 SCI - CL5000SCI 36 FCE;Climate 5000 SCI;O;O;O;1194.00;1.67;O;N
7739834573;Climate 5000 SCI - CL5000SCI 48 FCE;Climate 5000 SCI;O;O;O;1327.00;1.67;O;N
7731200398;Climate 5000 SCI 18 CAS Package;Climate 5000 SCI;O;O;O;2567.00;6.67;O;N
7731200399;Climate 5000 SCI 24 CAS Package;Climate 5000 SCI;O;O;O;2829.00;6.67;O;N
7731200400;Climate 5000 SCI 36 CAS Package;Climate 5000 SCI;O;O;O;3543.00;6.67;O;N
7731200401;Climate 5000 SCI 36-3 CAS Package;Climate 5000 SCI;O;O;O;3624.00;6.67;O;N
7731200393;Climate 5000 SCI 18 DCT Package;Climate 5000 SCI;O;O;O;2154.00;6.67;O;N
7731200394;Climate 5000 SCI 24 DCT Package;Climate 5000 SCI;O;O;O;2411.00;6.67;O;N
7731200395;Climate 5000 SCI 36 DCT Package;Climate 5000 SCI;O;O;O;3368.00;6.67;O;N
7731200396;Climate 5000 SCI 36-3 DCT Package;Climate 5000 SCI;O;O;O;3449.00;6.67;O;N
7731200403;Climate 5000 SCI 18 FCE Package;Climate 5000 SCI;O;O;O;1888.00;6.67;O;N
7731200404;Climate 5000 SCI 24 FCE Package;Climate 5000 SCI;O;O;O;2201.00;6.67;O;N
7731200405;Climate 5000 SCI 36 FCE Package;Climate 5000 SCI;O;O;O;3346.00;6.67;O;N
7731200406;Climate 5000 SCI 36-3 FCE Package;Climate 5000 SCI;O;O;O;3427.00;6.67;O;N
7731200402;Climate 5000 SCI 48 CAS Package;Climate 5000 SCI;O;O;O;4609.00;6.67;O;N
7733701504;Climate 5000 SCI 30 DCT Package;Climate 5000 SCI;O;O;O;2808.00;6.67;O;N
7733701505;Climate 5000 SCI 42 DCT Package;Climate 5000 SCI;O;O;O;3604.00;6.67;O;N
7731200397;Climate 5000 SCI 48 DCT Package;Climate 5000 SCI;O;O;O;4423.00;6.67;O;N
7731200407;Climate 5000 SCI 48 FCE Package;Climate 5000 SCI;O;O;O;4202.00;6.67;O;N
8733500289;Air Flux 5300 A - AF5300A 25-3;Unités extérieures Air Flux 5300 A;O;O;O;7292.00;3.55;O;N;Voici un commentaire pour vous montrer un texte explicatif du produit ou de la prestation. On peut par exemple définir les conditions de fonctionnement du produit, ses caractéristiques techniques etc.
8733500290;Air Flux 5300 A - AF5300A 28-3;Unités extérieures Air Flux 5300 A;O;O;O;7917.00;3.55;O;N;Voici un commentaire pour vous montrer un texte explicatif du produit ou de la prestation. On peut par exemple définir les conditions de fonctionnement du produit, ses caractéristiques techniques etc.
8733500291;Air Flux 5300 A - AF5300A 33-3;Unités extérieures Air Flux 5300 A;O;O;O;9167.00;3.55;O;N
8733500292;Air Flux 5300 A - AF5300A 40-3;Unités extérieures Air Flux 5300 A;O;O;O;10208.00;3.55;O;N
8733500293;Air Flux 5300 A - AF5300A 45-3;Unités extérieures Air Flux 5300 A;O;O;O;12083.00;3.55;O;N
8733500294;Air Flux 5300 A - AF5300A 50-3;Unités extérieures Air Flux 5300 A;O;O;O;13542.00;3.55;O;N
8733500295;Air Flux 5300 A - AF5300A 56-3;Unités extérieures Air Flux 5300 A;O;O;O;15000.00;3.55;O;N
8733500296;Air Flux 5300 A - AF5300A 62-3;Unités extérieures Air Flux 5300 A;O;O;O;15625.00;3.55;O;N
8733500297;Air Flux 5300 A - AF5300A 67-3;Unités extérieures Air Flux 5300 A;O;O;O;16458.00;3.55;O;N
8733500298;Air Flux 5300 A - AF5300A 73-3;Unités extérieures Air Flux 5300 A;O;O;O;18125.00;3.55;O;N
8733500299;Air Flux 5300 A - AF5300A 79-3;Unités extérieures Air Flux 5300 A;O;O;O;19167.00;3.55;O;N
8733500300;Air Flux 5300 A - AF5300A 85-3;Unités extérieures Air Flux 5300 A;O;O;O;20000.00;3.55;O;N
8733500301;Air Flux 5300 A - AF5300A 90-3;Unités extérieures Air Flux 5300 A;O;O;O;20833.00;3.55;O;N
8733500302;Air Flux 5300 A - AF5300A 25 C-3;Unités extérieures Air Flux 5300 A C;O;O;O;8385.00;3.55;O;N
8733500303;Air Flux 5300 A - AF5300A 28 C-3;Unités extérieures Air Flux 5300 A C;O;O;O;9104.00;3.55;O;N
8733500304;Air Flux 5300 A - AF5300A 33 C-3;Unités extérieures Air Flux 5300 A C;O;O;O;10542.00;3.55;O;N
8733500305;Air Flux 5300 A - AF5300A 40 C-3;Unités extérieures Air Flux 5300 A C;O;O;O;11740.00;3.55;O;N
8733500306;Air Flux 5300 A - AF5300A 45 C-3;Unités extérieures Air Flux 5300 A C;O;O;O;13896.00;3.55;O;N
8733500307;Air Flux 5300 A - AF5300A 50 C-3;Unités extérieures Air Flux 5300 A C;O;O;O;15573.00;3.55;O;N
8733500308;Air Flux 5300 A - AF5300A 56 C-3;Unités extérieures Air Flux 5300 A C;O;O;O;17250.00;3.55;O;N
8733500309;Air Flux 5300 A - AF5300A 62 C-3;Unités extérieures Air Flux 5300 A C;O;O;O;17969.00;3.55;O;N
8733500310;Air Flux 5300 A - AF5300A 67 C-3;Unités extérieures Air Flux 5300 A C;O;O;O;18927.00;3.55;O;N
8733500311;Air Flux 5300 A - AF5300A 73 C-3;Unités extérieures Air Flux 5300 A C;O;O;O;20844.00;3.55;O;N
8733500312;Air Flux 5300 A - AF5300A 79 C-3;Unités extérieures Air Flux 5300 A C;O;O;O;22042.00;3.55;O;N
8733500313;Air Flux 5300 A - AF5300A 85 C-3;Unités extérieures Air Flux 5300 A C;O;O;O;23000.00;3.55;O;N
8733500314;Air Flux 5300 A - AF5300A 90 C-3;Unités extérieures Air Flux 5300 A C;O;O;O;24583.00;3.55;O;N
7739835411;U. ext. RDCI8/25-3 8CV/25kW;Unités extérieures C5000VRF RDCI;O;O;O;9 583.00;3.55;O;N 
7739835412;U. ext. RDCI10/28-3 10CV/28kW;Unités extérieures C5000VRF RDCI;O;O;O;10 000.00;3.55;O;N
7739835413;U. ext. RDCI12/33-3 12CV/33kW;Unités extérieures C5000VRF RDCI;O;O;O;10 417.00;3.55;O;N
7739835414;U. ext. RDCI14/40-3 14CV/40kW;Unités extérieures C5000VRF RDCI;O;O;O;11 458.00;3.55;O;N
7739835415;U. ext. RDCI16/45-3 16CV/45kW;Unités extérieures C5000VRF RDCI;O;O;O;12 292.00;3.55;O;N
7739835416;U. ext. Mini VRF MDCI 8kW monophasé;Unités extérieures C5000VRF MDCI;O;O;O;2 000.00;6.67;O;N
7739835417;U. ext. Mini VRF MDCI 10kW monophasé;Unités extérieures C5000VRF MDCI;O;O;O;2 444.00;6.67;O;N
7739835418;U. ext. Mini VRF MDCI 12kW monophasé;Unités extérieures C5000VRF MDCI;O;O;O;3 222.00;6.67;O;N
7739835419;U. ext. Mini VRF MDCI 14kW monophasé;Unités extérieures C5000VRF MDCI;O;O;O;3 333.00;6.67;O;N
7739835420;U. ext. Mini VRF MDCI 16kW monophasé;Unités extérieures C5000VRF MDCI;O;O;O;3 667.00;6.67;O;N
7739835421;U. ext. Mini VRF MDCI 12kW triphasé;Unités extérieures C5000VRF MDCI;O;O;O;3 333.00;6.67;O;N
7739835422;U. ext. Mini VRF MDCI 14kW triphasé;Unités extérieures C5000VRF MDCI;O;O;O;3 444.00;6.67;O;N
7739835423;U. ext. Mini VRF MDCI 16kW triphasé;Unités extérieures C5000VRF MDCI;O;O;O;3 667.00;6.67;O;N
7739835424;U. ext. Mini VRF MDCI 18kW triphasé;Unités extérieures C5000VRF MDCI;O;O;O;4 333.00;3.55;O;N
7739835425;U. ext. Mini VRF MDCI 20kW triphasé;Unités extérieures C5000VRF MDCI;O;O;O;4 556.00;3.55;O;N
7739835426;U. ext. Mini VRF MDCI 22kW triphasé;Unités extérieures C5000VRF MDCI;O;O;O;4 778.00;3.55;O;N
7739835427;U. ext. Mini VRF MDCI 26kW triphasé;Unités extérieures C5000VRF MDCI;O;O;O;5 111.00;3.55;O;N
8733500853;U. ext. Mini VRF MDCI 40-3 triphasé;Unités extérieures C5000VRF MDCI;O;O;O;7 778.00;3.55;O;N
8733500854;U. ext. Mini VRF MDCI 45-3 triphasé;Unités extérieures C5000VRF MDCI;O;O;O;8 444.00;3.55;O;N
8733500319;Façade cassette comp. 4 voies AF-P 4CC;Unités intérieures AF-4CC;O;O;O;115.00;;O;N
7733700891;U. int. Cassette AF-4CC 17-1P;Unités intérieures AF-4CC;O;O;O;706.00;1.00;O;N
7733700892;U. int. Cassette AF-4CC 22-1P;Unités intérieures AF-4CC;O;O;O;731.00;1.00;O;N
7733700893;U. int. Cassette AF-4CC 28-1P;Unités intérieures AF-4CC;O;O;O;760.00;1.00;O;N
7733700894;U. int. Cassette AF-4CC 36-1P;Unités intérieures AF-4CC;O;O;O;810.00;1.00;O;N
7733700895;U. int. Cassette AF-4CC 45-1P;Unités intérieures AF-4CC;O;O;O;840.00;1.00;O;N
7733700896;U. int. Cassette AF-4CC 52-1P;Unités intérieures AF-4CC;O;O;O;880.00;1.00;O;N
8733500330;Façade cassette 4 voies AF-P 4C;Unités intérieures AF-4C;O;O;O;184.00;;O;N
7733700897;U. int. Cassette AF-4C 28-1 P;Unités intérieures AF-4C;O;O;O;750.00;1.00;O;N
7733700898;U. int. Cassette AF-4C 36-1 P;Unités intérieures AF-4C;O;O;O;792.00;1.00;O;N
7733700899;U. int. Cassette AF-4C 45-1 P;Unités intérieures AF-4C;O;O;O;865.00;1.00;O;N
7733700900;U. int. Cassette AF-4C 56-1 P;Unités intérieures AF-4C;O;O;O;896.00;1.00;O;N
7733700901;U. int. Cassette AF-4C 71-1 P;Unités intérieures AF-4C;O;O;O;958.00;1.00;O;N
7733700902;U. int. Cassette AF-4C 80-1 P;Unités intérieures AF-4C;O;O;O;999.00;1.00;O;N
7733700903;U. int. Cassette AF-4C 90-1 P;Unités intérieures AF-4C;O;O;O;1 200.00;1.00;O;N
7733700904;U. int. Cassette AF-4C 100-1 P;Unités intérieures AF-4C;O;O;O;1 216.00;1.00;O;N
7733700905;U. int. Cassette AF-4C 112-1 P;Unités intérieures AF-4C;O;O;O;1 247.00;1.00;O;N
7733700906;U. int. Cassette AF-4C 140-1 P;Unités intérieures AF-4C;O;O;O;1 569.00;1.00;O;N
8733500341;Façade cassette 360 AF-P 4CR;Unités intérieures AF-4CR;O;O;O;206.00;;O;N
7733700907;U. int. Cassette AF-4CR 28-1 P;Unités intérieures AF-4CR;O;O;O;750.00;1.00;O;N
7733700908;U. int. Cassette AF-4CR 36-1 P;Unités intérieures AF-4CR;O;O;O;792.00;1.00;O;N
7733700909;U. int. Cassette AF-4CR 45-1 P;Unités intérieures AF-4CR;O;O;O;865.00;1.00;O;N
7733700910;U. int. Cassette AF-4CR 56-1 P;Unités intérieures AF-4CR;O;O;O;896.00;1.00;O;N
7733700911;U. int. Cassette AF-4CR 71-1 P;Unités intérieures AF-4CR;O;O;O;958.00;1.00;O;N
7733700912;U. int. Cassette AF-4CR 80-1 P;Unités intérieures AF-4CR;O;O;O;999.00;1.00;O;N
7733700913;U. int. Cassette AF-4CR 90-1 P;Unités intérieures AF-4CR;O;O;O;1 200.00;1.00;O;N
7733700914;U. int. Cassette AF-4CR 100-1 P;Unités intérieures AF-4CR;O;O;O;1 216.00;1.00;O;N
7733700915;U. int. Cassette AF-4CR 112-1 P;Unités intérieures AF-4CR;O;O;O;1 247.00;1.00;O;N
7733700916;U. int. Cassette AF-4CR 140-1 P;Unités intérieures AF-4CR;O;O;O;1 569.00;1.00;O;N
8733500349;Façade cass. 1 voie AF-P 1C (1.8-3.6kW);Unités intérieures AF-1C;O;O;O;231.00;;O;N
8733500350;Façade cass. 1 voie AF-P 1C2 (4.5-7.1kW);Unités intérieures AF-1C;O;O;O;384.00;;O;N
7733700923;U. int. Cassette AF-1C 18-1 P;Unités intérieures AF-1C;O;O;O;795.00;1.00;O;N
7733700924;U. int. Cassette AF-1C 22-1 P;Unités intérieures AF-1C;O;O;O;931.00;1.00;O;N
7733700925;U. int. Cassette AF-1C 28-1 P;Unités intérieures AF-1C;O;O;O;1 173.00;1.00;O;N
7733700926;U. int. Cassette AF-1C 36-1 P;Unités intérieures AF-1C;O;O;O;1 195.00;1.00;O;N
7733700927;U. int. Cassette AF-1C 45-1 P;Unités intérieures AF-1C;O;O;O;1 237.00;1.00;O;N
7733700928;U. int. Cassette AF-1C 56-1 P;Unités intérieures AF-1C;O;O;O;1 260.00;1.00;O;N
7733700929;U. int. Cassette AF-1C 71-1 P;Unités intérieures AF-1C;O;O;O;1 353.00;1.00;O;N
8733500357;Façade cassette 2 voies AF-P 2C;Unités intérieures AF-2C;O;O;O;385.00;;O;N
7733700930;U. int. Cassette AF-2C 22-1 P;Unités intérieures AF-2C;O;O;O;790.00;1.00;O;N
7733700931;U. int. Cassette AF-2C 28-1 P;Unités intérieures AF-2C;O;O;O;846.00;1.00;O;N
7733700932;U. int. Cassette AF-2C 36-1 P;Unités intérieures AF-2C;O;O;O;892.00;1.00;O;N
7733700933;U. int. Cassette AF-2C 45-1 P;Unités intérieures AF-2C;O;O;O;938.00;1.00;O;N
7733700934;U. int. Cassette AF-2C 56-1 P;Unités intérieures AF-2C;O;O;O;1 031.00;1.00;O;N
7733700935;U. int. Cassette AF-2C 71-1 P;Unités intérieures AF-2C;O;O;O;1 083.00;1.00;O;N
7733700936;U. int. Gainable AF-DL 17-1 P;Unités intérieures AF-DL;O;O;O;599.00;1.00;O;N
7733700937;U. int. Gainable AF-DL 22-1 P;Unités intérieures AF-DL;O;O;O;615.00;1.00;O;N
7733700938;U. int. Gainable AF-DL 28-1 P;Unités intérieures AF-DL;O;O;O;656.00;1.00;O;N
7733700939;U. int. Gainable AF-DL 36-1 P;Unités intérieures AF-DL;O;O;O;688.00;1.00;O;N
7733700940;U. int. Gainable AF-DL 45-1 P;Unités intérieures AF-DL;O;O;O;865.00;1.00;O;N
7733700941;U. int. Gainable AF-DL 56-1 P;Unités intérieures AF-DL;O;O;O;896.00;1.00;O;N
7733700942;U. int. Gainable AF-DL 71-1 P;Unités intérieures AF-DL;O;O;O;938.00;1.00;O;N
7733700943;U. int. Gainable AF-DM 80-1 P;Unités intérieures AF-DM;O;O;O;1 115.00;1.00;O;N
7733700944;U. int. Gainable AF-DM 90-1 P;Unités intérieures AF-DM;O;O;O;1 188.00;1.00;O;N
7733700945;U. int. Gainable AF-DM 112-1 P;Unités intérieures AF-DM;O;O;O;1 250.00;1.00;O;N
7733700946;U. int. Gainable AF-DM 140-1 P;Unités intérieures AF-DM;O;O;O;1 305.00;1.00;O;N
7733700947;U. int. Gainable AF-DH 71-1;Unités intérieures AF-DH;O;O;O;1 220.00;1.00;O;N
7733700948;U. int. Gainable AF-DH 80-1;Unités intérieures AF-DH;O;O;O;1 259.00;1.00;O;N
7733700949;U. int. Gainable AF-DH 90-1;Unités intérieures AF-DH;O;O;O;1 328.00;1.00;O;N
7733700950;U. int. Gainable AF-DH 112-1;Unités intérieures AF-DH;O;O;O;1 817.00;1.00;O;N
7733700951;U. int. Gainable AF-DH 140-1;Unités intérieures AF-DH;O;O;O;1 995.00;1.00;O;N
7733700952;U. int. Gainable AF-DH 160-1;Unités intérieures AF-DH;O;O;O;2 083.00;1.00;O;N
7733700953;U. int. Gainable AF-DH 200-1;Unités intérieures AF-DH;O;O;O;2 667.00;1.00;O;N
7733700954;U. int. Gainable AF-DH 250-1;Unités intérieures AF-DH;O;O;O;3 083.00;1.00;O;N
7733700955;U. int. Gainable AF-DH 280-1;Unités intérieures AF-DH;O;O;O;3 189.00;1.00;O;N
7733700956;U. int. Gainable AF-DH 400-1;Unités intérieures AF-DH;O;O;O;4 555.56;1.00;O;N
7733700957;U. int. Gainable AF-DH 450-1;Unités intérieures AF-DH;O;O;O;4 666.67;1.00;O;N
7733700958;U. int. Gainable AF-DH 560-1;Unités intérieures AF-DH;O;O;O;4 777.78;1.00;O;N
7733700959;U. int. Gainable AF-DHS 22-1 P;Unités intérieures AF-DHS;O;O;O;722.00;1.00;O;N
7733700960;U. int. Gainable AF-DHS 28-1 P;Unités intérieures AF-DHS;O;O;O;733.00;1.00;O;N
7733700961;U. int. Gainable AF-DHS 36-1 P;Unités intérieures AF-DHS;O;O;O;756.00;1.00;O;N
7733700962;U. int. Gainable AF-DHS 45-1 P;Unités intérieures AF-DHS;O;O;O;978.00;1.00;O;N
7733700963;U. int. Gainable AF-DHS 56-1 P;Unités intérieures AF-DHS;O;O;O;1 000.00;1.00;O;N
7733700964;U. int. Gainable AF-DHS 71-1 P;Unités intérieures AF-DHS;O;O;O;1 022.00;1.00;O;N
7733700977;U. int. Console AF-FC 22-1;Unités intérieures AF-FC;O;O;O;813.00;1.00;O;N
7733700978;U. int. Console AF-FC 28-1;Unités intérieures AF-FC;O;O;O;831.00;1.00;O;N
7733700979;U. int. Console AF-FC 36-1;Unités intérieures AF-FC;O;O;O;931.00;1.00;O;N
7733700980;U. int. Console AF-FC 45-1;Unités intérieures AF-FC;O;O;O;963.00;1.00;O;N
7733700981;U. int. Console AF-FC 56-1;Unités intérieures AF-FC;O;O;O;1 031.00;1.00;O;N
7733700982;U. int. Console AF-FC 71-1;Unités intérieures AF-FC;O;O;O;1 054.00;1.00;O;N
7733700983;U. int. Console AF-FC 80-1;Unités intérieures AF-FC;O;O;O;1 129.00;1.00;O;N
7733700984;U. int. Console AF-F 22-1;Unités intérieures AF-F;O;O;O;719.00;1.00;O;N
7733700985;U. int. Console AF-F 28-1;Unités intérieures AF-F;O;O;O;748.00;1.00;O;N
7733700986;U. int. Console AF-F 36-1;Unités intérieures AF-F;O;O;O;810.00;1.00;O;N
7733700987;U. int. Console AF-F 45-1;Unités intérieures AF-F;O;O;O;838.00;1.00;O;N
7733700988;U. int. Console AF-F 56-1;Unités intérieures AF-F;O;O;O;907.00;1.00;O;N
7733700989;U. int. Console AF-F 71-1;Unités intérieures AF-F;O;O;O;929.00;1.00;O;N
7733700990;U. int. Console AF-F 80-1;Unités intérieures AF-F;O;O;O;1 005.00;1.00;O;N
8733500621;Télécommande infrarouge ARC C IR;Commandes VRF;O;O;O;98.00;0.12;O;N
7738112348;Commande filaire ARC C;Commandes VRF;O;O;O;156.00;0.12;O;N
7738112349;Commande d'hôtel ARC H;Commandes VRF;O;O;O;125.00;0.12;O;N
8733502082;Commande centralisée tactile ACC MT;Commandes VRF;O;O;O;2 222.00;0.12;O;N
8733502083;Tableau d'extension pour ACC MT (AC-EXP);Commandes VRF;O;O;O;889.00;0.12;O;N
8733500622;Bosch VRF Intelligent Manager ACC M;Commandes VRF;O;O;O;4 444.00;0.12;O;N
8733500623;Logiciel Bosch VRF Int. Manager ACC MSW;Commandes VRF;O;O;O;3 556.00;0.12;O;N
8733500624;Passerelle Bacnet - ACC BAC;Commandes VRF;O;O;O;4 556.00;0.12;O;N
8733500625;Passerelle Modbus - ACC MOD;Commandes VRF;O;O;O;4 000.00;0.12;O;N
8733500626;Passerelle Lonworks - ACC LON;Commandes VRF;O;O;O;4 444.00;0.12;O;N
8733500628;Logiciel de diagnostic Air Flux AC-DSW;Commandes VRF;O;O;O;578.00;0.12;O;N
8733500631;Raccord dériv. pour u.int. AF-BJ01;Accessoires VRF;O;O;O;54.00;;O;N
8733500632;Raccord dériv. pour u.int. AF-BJ02;Accessoires VRF;O;O;O;71.00;;O;N
8733500633;Raccord dériv. pour u.int. AF-BJ03;Accessoires VRF;O;O;O;108.00;;O;N
8733500634;Raccord dériv. pour u.int. AF-BJ04;Accessoires VRF;O;O;O;163.00;;O;N
8733500635;Raccord dériv. pour u.int. AF-BJ05;Accessoires VRF;O;O;O;206.00;;O;N
8733500636;Raccord dériv. pour u.int. AF-BJ06;Accessoires VRF;O;O;O;310.00;;O;N
8733500637;Raccord dériv. pour u.int. AF-BJ07;Accessoires VRF;O;O;O;394.00;;O;N
8733500629;Raccord dériv. pour 2 u.ext. AF-BJO 02;Accessoires VRF;O;O;O;292.00;;O;N
8733500630;Raccord dériv. pour 3 u.ext. AF-BJO 03;Accessoires VRF;O;O;O;517.00;;O;N
7739830758;Raccord U.I <16.6kW IDU-BJR01. 3 tubes;Accessoires VRF;O;O;O;83.00;;O;N
7739830759;Raccord 16.6<33kW. IDU-BJR02. 3 tubes;Accessoires VRF;O;O;O;100.00;;O;N
7739830760;Raccord 33<66kW. IDU-BJR03. 3 tubes;Accessoires VRF;O;O;O;149.00;;O;N
7739830761;Raccord 66<92kW. IDU-BJR04. 3 tubes;Accessoires VRF;O;O;O;230.00;;O;N
7739830762;Raccord >92kW. IDU-BJR05. 3 tubes;Accessoires VRF;O;O;O;292.00;;O;N
7739830755;Raccord 2 U.E ODU-BJR02. 3 tubes;Accessoires VRF;O;O;O;206.00;;O;N
7739830756;Raccord 3 U.E ODU-BJR03. 3 tubes;Accessoires VRF;O;O;O;489.00;;O;N
7739830757;Raccord 4 U.E ODU-BJR04. 3 tubes;Accessoires VRF;O;O;O;773.00;;O;N
7739835543;AHU KIT01B-1 5HP/14kW. 0-10V control;Accessoires VRF;O;O;O;88.00;0.12;O;N
7739835544;AHU KIT02B-1 10HP/28kW. 0-10V control;Accessoires VRF;O;O;O;100.00;0.12;O;N
7739835545;AHU KIT03B-1 20HP/56kW. 0-10V control;Accessoires VRF;O;O;O;117.00;0.12;O;N
7739834425;Raccord pour AHU kit (20-46kW) KIT-BJ01;Accessoires VRF;O;O;O;36.00;;O;N
7739834426;Raccord pour AHU kit (46-66kW) KIT-BJ02;Accessoires VRF;O;O;O;68.00;;O;N
7739834427;Raccord pour AHU kit (66-135kW) KIT-BJ03;Accessoires VRF;O;O;O;117.00;;O;N
7739834428;Raccord pour AHU kit (>135kW) KIT-BJ04;Accessoires VRF;O;O;O;135.00;;O;N
7739830764;SBOX01-1 Switch Box. 1 Groupe;SBOX pour RDCI;O;O;O;1 083.00;1.10;O;N
7739830765;SBOX02-1 Switch Box. 2 Groupes;SBOX pour RDCI;O;O;O;1 417.00;1.10;O;N
7739830766;SBOX04-1 Switch Box. 4 Groupes;SBOX pour RDCI;O;O;O;2 125.00;1.10;O;N
7739830767;SBOX06-1 Switch Box. 6 Groupes;SBOX pour RDCI;O;O;O;2 958.00;1.10;O;N
7739830768;SBOX02E-1 Switch Box. 1 groupe. 20-28kW;SBOX pour RDCI;O;O;O;1 417.00;1.10;O;N
7739830769;SBOX04E-1 Switch Box. 1 groupe. 40-56kW;SBOX pour RDCI;O;O;O;2 125.00;1.10;O;N
7739830763;Boitier MBB04 pour Mini VRF;Accessoires VRF;O;O;O;338.00;1.10;O;N
7733701480;Unité intérieure murale 1.7kW AF-W 17-1;Unités intérieures AF-W;O;O;O;511.00;1.00;O;N
7733701481;Unité intérieure murale 2.2kW AF-W 22-1;Unités intérieures AF-W;O;O;O;533.00;1.00;O;N
7733701482;Unité intérieure murale 2.8kW AF-W 28-1;Unités intérieures AF-W;O;O;O;556.00;1.00;O;N
7733701483;Unité intérieure murale 3.6kW AF-W 36-1;Unités intérieures AF-W;O;O;O;578.00;1.00;O;N
7733701484;Unité intérieure murale 4.5kW AF-W 45-1;Unités intérieures AF-W;O;O;O;667.00;1.00;O;N
7733701485;Unité intérieure murale 5.6kW AF-W 56-1;Unités intérieures AF-W;O;O;O;689.00;1.00;O;N
7733701486;Unité intérieure murale 7.1kW AF-W 71-1;Unités intérieures AF-W;O;O;O;700.00;1.00;O;N
7733701487;Unité intérieure murale 8.0kW AF-W 80-1;Unités intérieures AF-W;O;O;O;711.00;1.00;O;N
7733701488;Unité intérieure murale 9.0kW AF-W 90-1;Unités intérieures AF-W;O;O;O;733.00;1.00;O;N
8733502086;Adaptateur commande filaire AC-CCB;Commandes VRF;O;O;O;50.00;0.12;O;N
7733701621;Adaptateur MDCI AC-CM;Commandes VRF;O;O;O;130.00;0.12;O;N
7733701594;Kit extension AC-XYE;Commandes VRF;O;O;O;280.00;0.12;O;N
7733701489;U. int. Console/Plafonnier AF-CF 36-1;Unités intérieures AF-CF;O;O;O;800.00;1.00;O;N
7733701490;U. int. Console/Plafonnier AF-CF 45-1;Unités intérieures AF-CF;O;O;O;889.00;1.00;O;N
7733701491;U. int. Console/Plafonnier AF-CF 56-1;Unités intérieures AF-CF;O;O;O;922.00;1.00;O;N
7733701492;U. int. Console/Plafonnier AF-CF 71-1;Unités intérieures AF-CF;O;O;O;956.00;1.00;O;N
7733701493;U. int. Console/Plafonnier AF-CF 80-1;Unités intérieures AF-CF;O;O;O;1 067.00;1.00;O;N
7733701494;U. int. Console/Plafonnier AF-CF 90-1;Unités intérieures AF-CF;O;O;O;1 078.00;1.00;O;N
7733701495;U. int. Console/Plafonnier AF-CF 112-1;Unités intérieures AF-CF;O;O;O;1 311.00;1.00;O;N
7733701496;U. int. Console/Plafonnier AF-CF 140-1;Unités intérieures AF-CF;O;O;O;1 333.00;1.00;O;N
7739835666;Commande filaire (ARC R);Commandes Climate 5000 SCI;O;O;O;125.00;0.12;O;N
7733701710;Air Flux 6300 A - AF6300A 22 C-3;Unités extérieures Air Flux 6300 A C;O;O;O;9 990.00;3.55;O;N
7733701711;Air Flux 6300 A - AF6300A 28 C-3;Unités extérieures Air Flux 6300 A C;O;O;O;10 222.00;3.55;O;N
7733701712;Air Flux 6300 A - AF6300A 33 C-3;Unités extérieures Air Flux 6300 A C;O;O;O;10 667.00;3.55;O;N
7733701713;Air Flux 6300 A - AF6300A 40 C-3;Unités extérieures Air Flux 6300 A C;O;O;O;11 778.00;3.55;O;N
7733701714;Air Flux 6300 A - AF6300A 45 C-3;Unités extérieures Air Flux 6300 A C;O;O;O;12 222.00;3.55;O;N
7733701715;Air Flux 6300 A - AF6300A 50 C-3;Unités extérieures Air Flux 6300 A C;O;O;O;12 889.00;3.55;O;N
7733701722;AF-HB 140-1;Module hydraulique AF-HB;O;O;O;4 667.00;1.00;O;N
7733701730;Raccord dériv. pour u.int. AF-BJ09;Accessoires VRF;O;O;O;67.00;;O;N
7733701723;AF-BJR 01;Accessoires VRF;O;O;O;84.00;;O;N
7733701724;AF-BJR 02;Accessoires VRF;O;O;O;100.00;;O;N
7733701725;AF-BJR 03;Accessoires VRF;O;O;O;144.00;;O;N
7733701726;AF-BJR 04;Accessoires VRF;O;O;O;222.00;;O;N
7733701727;AF-BJR 05;Accessoires VRF;O;O;O;333.00;;O;N
7733701728;AF-BJRO 02;Accessoires VRF;O;O;O;500.00;;O;N
7733701729;AF-BJRO 03;Accessoires VRF;O;O;O;778.00;;O;N
7733701731;AHU KIT 00 D;Accessoires VRF;O;O;O;467.00;0.12;O;N
7733701732;AHU KIT 01 D;Accessoires VRF;O;O;O;522.00;0.12;O;N
7733701733;AHU KIT 02 D;Accessoires VRF;O;O;O;611.00;0.12;O;N
7733701734;AHU KIT 03 D;Accessoires VRF;O;O;O;700.00;0.12;O;N
7733701716;AF-SB 01-1 L;SBOX pour AF6300AC;O;O;O;1 222.00;1.10;O;N
7733701717;AF-SB 04-1;SBOX pour AF6300AC;O;O;O;2 444.00;1.10;O;N
7733701718;AF-SB 06-1;SBOX pour AF6300AC;O;O;O;3 444.00;1.10;O;N
7733701719;AF-SB 08-1;SBOX pour AF6300AC;O;O;O;4 222.00;1.10;O;N
7733701720;AF-SB 10-1;SBOX pour AF6300AC;O;O;O;5 222.00;1.10;O;N
7733701721;AF-SB 12-1;SBOX pour AF6300AC;O;O;O;5 889.00;1.10;O;N
8733500811;Climatiseur multisplit Climate 5000 MS 18 OUE - unité extérieure;Climate 5000 MS;O;O;O;1 280.00;6.67;O;N
8733500812;Climatiseur multisplit Climate 5000 MS 27 OUE - unité extérieure;Climate 5000 MS;O;O;O;1 920.00;6.67;O;N
8733500813;Climatiseur multisplit Climate 5000 MS 36 OUE - unité extérieure;Climate 5000 MS;O;O;O;2 580.00;6.67;O;N
8733500814;Climatiseur multisplit Climate 5000 MS 42 OUE - unité extérieure;Climate 5000 MS;O;O;O;2 850.00;6.67;O;N
8733501984;Climatiseur multisplit Climate 5000 RAC 2-2 IBW - unité intérieure;Climate 5000 MS;O;O;O;265.00;1.67;O;N
8733500815;Climatiseur multisplit Climate 5000 MS 07 CAS - unité intérieure;Climate 5000 MS;O;O;O;781.00;1.67;O;N
7739833689;Climatiseur multisplit Climate 5000 MS 09 CAS - unité intérieure;Climate 5000 MS;O;O;O;823.00;1.67;O;N
7739833690;Climatiseur multisplit Climate 5000 MS 12 CAS - unité intérieure;Climate 5000 MS;O;O;O;963.00;1.67;O;N
7733700789;Climatiseur multisplit Climate 5000 MS 07-2 DCT - unité intérieure;Climate 5000 MS;O;O;O;685.00;0.12;O;N
7733700790;Climatiseur multisplit Climate 5000 MS 09-2 DCT - unité intérieure;Climate 5000 MS;O;O;O;752.00;0.12;O;N
7733700791;Climatiseur multisplit Climate 5000 MS 12-2 DCT - unité intérieure;Climate 5000 MS;O;O;O;840.00;0.12;O;N
7733700792;Climatiseur multisplit Climate 5000 MS 18-2 DCT - unité intérieure;Climate 5000 MS;O;O;O;907.00;0.12;O;N
7733701564;CL3000iU W 26 E;CLIMATE 3000i RAC;O;O;O;238.00;1.67;O;N
7733701565;CL3000i 26 E;CLIMATE 3000i RAC;O;O;O;413.00;6.67;O;N
7733701735;CL3000-Set 26 E;CLIMATE 3000i RAC;O;O;O;651.00;6.67;O;N
7733701566;CL300iU W 35 E;CLIMATE 3000i RAC;O;O;O;261.00;1.67;O;N
7733701567;CL3000i 35 E;CLIMATE 3000i RAC;O;O;O;439.00;6.67;O;N
7733701736;CL3000-Set 35 E;CLIMATE 3000i RAC;O;O;O;700.00;6.67;O;N
7733701568;CL3000iU W 53 E;CLIMATE 3000i RAC;O;O;O;380.00;1.67;O;N
7733701569;CL3000i 53 E;CLIMATE 3000i RAC;O;O;O;760.00;6.67;O;N
7733701737;CL3000-Set 53 E;CLIMATE 3000i RAC;O;O;O;1 140.00;6.67;O;N
7733701570;CL3000iU W 70 E;CLIMATE 3000i RAC;O;O;O;428.00;1.67;O;N
7733701571;CL3000i 70 E;CLIMATE 3000i RAC;O;O;O;1 123.00;6.67;O;N
7733701738;CL3000-Set 70 E;CLIMATE 3000i RAC;O;O;O;1 551.00;6.67;O;N
7733701572;CL5000iU W 26 E;CLIMATE 5000i RAC;O;O;O;273.00;1.67;O;N
7733701573;CL5000i 26 E;CLIMATE 5000i RAC;O;O;O;432.00;6.67;O;N
7733701739;CL5000i-Set 26 E;CLIMATE 5000i RAC;O;O;O;705.00;6.67;O;N
7733701574;CL5000iU W 35 E;CLIMATE 5000i RAC;O;O;O;273.00;1.67;O;N
7733701575;CL5000i 35 E;CLIMATE 5000i RAC;O;O;O;482.00;6.67;O;N
7733701740;CL5000i-Set 35 E;CLIMATE 5000i RAC;O;O;O;755.00;6.67;O;N
7733701635;CL6001i-W 25 E;CLIMATE 6001i RAC;O;O;O;523.00;1.67;O;N
7733701636;CL6001i 25 E;CLIMATE 6001i RAC;O;O;O;810.00;6.67;O;N
7733701686;CL6001i-Set 25 E - White;CLIMATE 6001i RAC;O;O;O;1 332.00;6.67;O;N
7733701637;CL6001i-W 35 E;CLIMATE 6001i RAC;O;O;O;523.00;1.67;O;N
7733701638;CL6001i 35 E;CLIMATE 6001i RAC;O;O;O;914.00;6.67;O;N
7733701687;CL6001i-Set 35 E - White;CLIMATE 6001i RAC;O;O;O;1 437.00;6.67;O;N
7733701639;CL8001i-W 25 E;CLIMATE 8001i RAC;O;O;O;653.00;1.67;O;N
7733701643;CL8000i 25 E;CLIMATE 8001i RAC;O;O;O;1 137.00;6.67;O;N
7733701688;CL8001i-Set 25 E - White;CLIMATE 8001i RAC;O;O;O;1 790.00;6.67;O;N
7733701644;CL8001i-W 35 E;CLIMATE 8001i RAC;O;O;O;653.00;1.67;O;N
7733701648;CL8001i 35 E;CLIMATE 8001i RAC;O;O;O;1 215.00;6.67;O;N
7733701692;CL8001i-Set 35 E - White;CLIMATE 8001i RAC;O;O;O;1 868.00;6.67;O;N
7733701642;CL8001i-W 25 HE R;CLIMATE 8001i RAC;O;O;O;879.00;1.67;O;N
7733701691;CL8001i-W 25 HE - RED;CLIMATE 8001i RAC;O;O;O;2 016.00;6.67;O;N
7733701647;CL8001i-W 35 HE R;CLIMATE 8001i RAC;O;O;O;1 009.00;1.67;O;N
7733701695;CL8001i-W 35 HE - RED;CLIMATE 8001i RAC;O;O;O;2 224.00;6.67;O;N
7733701641;CL8001i-W 25 HE S;CLIMATE 8001i RAC;O;O;O;879.00;1.67;O;N
7733701690;CL8001i- 25 HE - STEEL;CLIMATE 8001i RAC;O;O;O;2 016.00;6.67;O;N
7733701646;CL8001i-W 35 HE S;CLIMATE 8001i RAC;O;O;O;1 009.00;1.67;O;N
7733701694;CL8001i- 35 HE - STEEL;CLIMATE 8001i RAC;O;O;O;2 224.00;6.67;O;N
7733701640;CL8001i-W 25 HE T;CLIMATE 8001i RAC;O;O;O;879.00;1.67;O;N
7733701689;CL8001i- 25 HE - TITANIUM;CLIMATE 8001i RAC;O;O;O;2 016.00;6.67;O;N
7733701645;CL8001i-W 35 HE T;CLIMATE 8001i RAC;O;O;O;1 009.00;1.67;O;N
7733701693;CL8001i- 35 HE - TITANIUM;CLIMATE 8001i RAC;O;O;O;2 224.00;6.67;O;N
7733701510;Climate 5000 MS 14 OUE;CLIMATE 5000 MS;O;O;O;1 010.00;6.67;O;N
7733701511;Climate 5000 MS 21 OUE;CLIMATE 5000 MS;O;O;O;1 620.00;6.67;O;N
7733701512;Climate 5000 MS 28 OUE;CLIMATE 5000 MS;O;O;O;2 190.00;6.67;O;N
7736200422;Mise en service 1 circuit frigorifique jusqu'à 10 unités intérieures;Mise en service;O;O;O;440.00;;N;O
7736200423;Unité intérieure supplémentaire;Mise en service;O;O;O;25.00;;N;O
7736200425;Programmation - Télécommande centralisée jusqu'à 10 unités intérieures;Mise en service;O;O;O;330.00;;N;O
7736200426;Programmation - Unité intérieure supplémentaire;Mise en service;O;O;O;10.00;;N;O
7736200435;PRE-VISITE VRF ;Mise en service;O;O;O;440.00;;N;O
7736200436;Mise en service logiciel de supervision BVIM - SUR CONSULTATION;Mise en service;O;O;O;;;N;O
7736200437;Audit technique - Jusqu'à 10 unités intérieures;Mise en service;O;O;O;970.00;;N;O
7736200438;Audit technique - par unité intérieure supplémentaire;Mise en service;O;O;O;25.00;;N;O
0;Pré-visite offerte;Mise en service;O;O;O;-440.00;;N;O;Pré-visite pour vous montrer un texte explicatif du produit ou de la prestation. On peut par exemple définir les conditions de fonctionnement du produit, ses caractéristiques techniques etc.`

//On passe le CSV en JSON pour pouvoir le lire en objet JS
    function csvToJSON(csv) {
        let lines   = csv.split("\n"),
            line,
            result  = {},
            headers = lines[0].split(";")

        for(var i = 1; i < lines.length; i++) {
            let obj         = {},
                currentline = lines[i].split(";")

            for(var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j]
            }
            result['line' + i] = obj
        }
        return JSON.stringify(result)
    }
//Model view controller
    let M = {}, V = {}, C = {}

//Le modèle qui contient toutes les informations du projet : Nom de devis, nom du commercial etc...
    M = {
        quotes: {
            number: localStorage.getItem('numberOfQuotes') || 0,
            totalPrice: localStorage.getItem('totalPriceOfQuotes') || 0,
            averageDiscount: localStorage.getItem('averageDiscountOfQuotes') || {numerator: 0, denominator: 1}
        },
        projectInformations: {
            name: '',
            quoteType: 0,
            salesManArea: localStorage.getItem('salesManArea') || 'TTSFR1',// On récupère les cookies du navigateur
            salesManNbr: localStorage.getItem('salesManNbr') || 0,
            salesManName: localStorage.getItem('salesManName') || '',
            salesManPhone: localStorage.getItem('salesManPhone') || '',
            salesManEmail: localStorage.getItem('salesManEmail') || '',
            companyName: '',
            companyAdress: '',
            companyCity: '',
            clientName: '',
            clientPhone: '',
            clientEmail: '',
            userName: localStorage.getItem('userName') || '',
            userJob: localStorage.getItem('userJob') || '',
            managerName: localStorage.getItem('managerName') || '',
            managerJob: localStorage.getItem('managerJob') || ''
        },
        projectQuote: {
            discount: [0, 0, 0, 0],
            priceExcludingTaxes: 0,
            ecoTaxes: 0,
            container: {},
            selectedItem: 'Pas d\'article correspondant',
            selectedSection: {}
        },
        salesMenList: {//Liste des commerciaux à compléter
            TTSFR1: [{name: 'FEIST Daniel', phone: '0610970416', email: 'daniel.feist@fr.bosch.com', manager: 'Frederic Agar'}, {name: 'ROMANOWSKI Johan', phone: '0371898190', email: 'johann.romanowski@fr.bosch.com', manager: 'Frederic Agar'}, {name: 'DEGHAYE Paul', phone: '0678417249', email: 'paul.deghaye@fr.bosch.com', manager: 'Frederic Agar'}, {name: 'BAUDUIN Maxime', phone: '0623660848', email: 'maxime.bauduin@fr.bosch.com', manager: 'Frederic Agar'}],
            TTSFR3: [{name: 'AJMAK Mohamed', phone: '0607162677', email: 'mohamed.ajmak@fr.bosch.com', manager: 'Hugues Roudiere'}, {name: 'ROSSINI Hervé', phone: '0629751034', email: 'herve.rossini@fr.bosch.com', manager: 'Hugues Roudiere'}, {name: 'LIOTARD Augustin', phone: '0634332041', email: 'augustin.liotard@fr.bosch.com', manager: 'Hugues Roudiere'}, {name: 'PERREAL François', phone: '0614533725', email: 'françois.perreal@fr.bosch.com', manager: 'Hugues Roudiere'}, {name: 'LAUNAY Thierry', phone: '0616413198', email: 'thierry.launay@fr.bosch.com', manager: 'Hugues Roudiere'}]
        },
        priceDataBase : JSON.parse(csvToJSON(csv)),//Base de prix
        rangesDataBase : ['Climate 5000 SCI', 'Unités extérieures Air Flux 5300 A', 'Unités extérieures Air Flux 5300 A C', 'Unités extérieures C5000VRF RDCI', 'Unités extérieures C5000VRF MDCI', 'Unités intérieures AF-4CC', 'Unités intérieures AF-4C', 'Unités intérieures AF-4CR', 'Unités intérieures AF-1C', 'Unités intérieures AF-2C', 'Unités intérieures AF-DL', 'Unités intérieures AF-DM', 'Unités intérieures AF-DH', 'Unités intérieures AF-DHS', 'Unités intérieures AF-FC', 'Unités intérieures AF-F', 'Commandes VRF', 'Accessoires VRF', 'SBOX pour RDCI', 'Unités intérieures AF-W', 'Unités intérieures AF-CF', 'Commandes Climate 5000 SCI', 'Unités extérieures Air Flux 6300 A C', 'Module hydraulique AF-HB', 'SBOX pour AF6300AC', 'Climate 5000 MS', 'CLIMATE 3000i RAC', 'CLIMATE 5000i RAC', 'CLIMATE 6001i RAC', 'CLIMATE 8001i RAC', 'CLIMATE 5000 MS', 'Mise en service', 'Geste commercial'],
        setQuotes: function(quote) {
            this.quotes.number++
            this.quotes.totalPrice                  = this.quotes.totalPrice + quote.price
            this.quotes.averageDiscount.numerator   = this.quotes.averageDiscount.numerator + quote.discountNumerator
            this.quotes.averageDiscount.denominator = this.quotes.averageDiscount.denominator + quote.discountDenominator
        },
        getQuotes: function() {
            return this.quotes
        },
        setProjectInformations: function(form) {
            this.projectInformations.name           = form.name
            this.projectInformations.quoteType      = form.quoteType
            this.projectInformations.companyName    = form.companyName
            this.projectInformations.companyAdress  = form.companyAdress
            this.projectInformations.companyCity    = form.companyCity
            this.projectInformations.clientName     = form.clientName
            this.projectInformations.clientPhone    = form.clientPhone
            this.projectInformations.clientEmail    = form.clientEmail
            this.projectInformations.managerJob     = form.managerJob

            localStorage.setItem('salesManArea', form.salesManArea)
            localStorage.setItem('salesManNbr', form.salesManNbr)
            localStorage.setItem('salesManName', form.salesManName)
            localStorage.setItem('salesManPhone', this.salesMenList[form.salesManArea][form.salesManNbr].phone)
            localStorage.setItem('salesManEmail', this.salesMenList[form.salesManArea][form.salesManNbr].email)
            localStorage.setItem('userName', form.userName)
            localStorage.setItem('userJob', form.userJob)
            localStorage.setItem('managerName', this.salesMenList[form.salesManArea][form.salesManNbr].manager)

            this.projectInformations.salesManArea   = localStorage.getItem('salesManArea')
            this.projectInformations.salesManName   = localStorage.getItem('salesManName')
            this.projectInformations.salesManNbr    = parseInt(localStorage.getItem('salesManNbr'))
            this.projectInformations.salesManPhone  = localStorage.getItem('salesManPhone')
            this.projectInformations.salesManEmail  = localStorage.getItem('salesManEmail')
            this.projectInformations.userName       = localStorage.getItem('userName')
            this.projectInformations.userJob        = localStorage.getItem('userJob')
            this.projectInformations.managerName    = localStorage.getItem('managerName')
        },
        getProjectInformations: function() {
            return this.projectInformations
        },
        setProjectQuoteDiscount: function(d) {
            this.projectQuote.discount = [d[0], d[1], d[2], (d[0] + d[1] + d[2]) / 3]
        },
        setProjectQuotePriceExcludingTaxes: function(d) {
            let totalPrice = 0
            d.forEach(productPrice => {
                totalPrice = totalPrice + productPrice
            })
            this.projectQuote.priceExcludingTaxes = totalPrice
        },
        setProjectQuoteEcoTaxes: function(d) {
            let ecoTaxes = 0
            d.forEach(productTaxe => {
                ecoTaxes = ecoTaxes + productTaxe
            })
            this.projectQuote.ecoTaxes = ecoTaxes
        },
        setProjectQuoteContainer: function(d) {
            this.projectQuote.container = d
        },
        getProjectQuote: function() {
            return this.projectQuote
        },
        getPriceDataBase: function() {
            return this.priceDataBase
        },
        setSelectedItem: function(d) {
            if(d) {
                this.projectQuote.selectedItem = d
            } else {
                this.projectQuote.selectedItem = 'Pas d\'article correspondant'
            }
        },
        getSelectedItem: function() {
            return this.projectQuote.selectedItem
        },
        setSelectedSection: function(d) {
            this.projectQuote.selectedSection = d
        },
        getSelectedSection: function() {
            return this.projectQuote.selectedSection
        },
        setProjectInformationsAboutSalesMan: function() {

        },
        getSalesMan: function() {
            return this.salesMenList[this.projectInformations.salesManArea][this.projectInformations.salesManNbr]
        },
        getSalesMenNames: function(d) {
            let array = this.salesMenList[d],
            result = []

            for (var i = 0; i < array.length; i++) {
                result.push(array[i].name)
            }

            return result
        }
    }

    //La vue

    V = {
        //Select stat labels of the home page and update their value
        quotesNumber: document.querySelector('.card:nth-child(1) p:first-child'),
        quotesTotalPrice: document.querySelector('.card:nth-child(2) p:first-child'),
        quotesAverageDiscount: document.querySelector('.card:nth-child(3) p:first-child'),
        popUpWindow: document.getElementsByClassName('pop-up-window')[0],
        popUpItem: document.getElementsByClassName('pop-up-item')[0],

        updateStats: function(M) {
            //Met à jour les statistiques de la page menu
            this.quotesNumber.innerText = M.quotes.number.toString()
            this.quotesTotalPrice.innerText = M.quotes.totalPrice.toString()
            this.quotesAverageDiscount.innerText = (M.quotes.averageDiscount.numerator / M.quotes.averageDiscount.denominator).toString() + "%"
        },
        updatePage: function(page) {//Met à jour la couleur de la page séléctionnée dans le menu
            const   linkColor = document.querySelectorAll('.nav__link'),
                    pages = document.querySelectorAll('main div')

            linkColor.forEach(l => l.classList.remove('active'))
            pages.forEach(el => el.classList.remove('active'))

            document.getElementsByClassName(page.substring(1) + '-link')[0].classList.add('active')
            document.getElementById(page.substring(1) + '-page').classList.add('active')
        },
        showAddSection: function() {
            this.popUpWindow.classList.add('active')
        },
        addSection: function(userTitle) {
            //When the button is clicked, we add the section to the section container
            let sectionHTML =   '<tbody id="items-section" class="main-draggable" draggable="true">' +
                                    '<tr>' +
                                        '<td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform:;-ms-filter:"><path d="M10 10H14V14H10zM10 4H14V8H10zM10 16H14V20H10z"></path></svg></td></td>' +
                                        '<td colspan="6" contenteditable="">' + userTitle + '</td>' +
                                        '<td class="euro section-price">0.00</td>' +
                                        '<td class="trash"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg></td>' +
                                    '</tr>' +
                                    '<tr class="add-row draggable">' +
                                        '<td colspan="9" class="add-item"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg> Ajouter</span></td>' +
                                    '</tr>'+
                                '</tbody>'
            document.getElementById('quote-creator-container').insertAdjacentHTML('beforeend', sectionHTML)

            //Attach the event listeners to the current section
            let lastSection = document.querySelector('#items-section:last-child')
            lastSection.getElementsByClassName('trash')[0].addEventListener('click', () => {
                lastSection.remove()
                C.handlerPriceUpdate()
            })

            lastSection.addEventListener('dragstart', e => {
                if(lastSection != e.target){ return };
                //Add the class main-dragging when a container is selected
                lastSection.classList.add('main-dragging')
            })

            lastSection.addEventListener('dragend', e => {
                if(lastSection != e.target){ return };
                //Remove the class main-dragging when a container is no longer selected
                lastSection.classList.remove('main-dragging')
            })

            //Add an event when a draggable element is over the container
            lastSection.addEventListener('dragover', e => {
                //Check whether the draggable element is a row
                if(document.querySelector('.dragging')) {
                    //prevent default to allow drop
                    e.preventDefault()
                    //Find the nearest element of the row
                    const afterElement = getDragAfterElement(lastSection, e.clientY, '.draggable:not(.dragging)')
                    const draggable = document.querySelector('.dragging')
                    if (afterElement != null) {
                      lastSection.insertBefore(draggable, afterElement)
                    } else if (afterElement != undefined) {
                        lastSection.insertBefore(draggable, afterElement)
                    }
                }
            })
            
            //Open pop-up to add item
            lastSection.querySelector('.add-item span').addEventListener('click', function(e) {
                C.handlerShowAddItem(e)
            })
        },
        hideAddSection: function() {
            document.getElementsByClassName('pop-up-window')[0].getElementsByTagName('input')[0].value = ''
            this.popUpWindow.classList.remove('active')
        },
        showAddItem: function() {
            this.popUpItem.classList.add('active')
        },
        hideAddItem: function() {
            this.popUpItem.classList.remove('active')
            this.popUpItem.querySelector('.input-by-reference').value = ''
            this.popUpItem.querySelector('.quantity-input').value = ''
            this.popUpItem.getElementsByClassName('single-result')[0].innerText = "Pas d'article correspondant"
        },
        previewItem: function(name) {
            this.popUpItem.getElementsByClassName('single-result')[0].innerText = name
        },
        noItemMatches: function() {
            this.popUpItem.getElementsByClassName('single-result')[0].innerText = "Pas d'article correspondant"
        },
        addItemToSelect: function(select, optionValue, selected, disabled) {
            let option = document.createElement('option')
            option.value = optionValue
            option.innerHTML = optionValue
            if(disabled){option.setAttribute('disabled', '')}
            if(selected){option.setAttribute('selected', '')}
            select.appendChild(option)
        },
        clearSelect: function(select, sentence = '') {
            select.innerHTML = ''
            if(sentence != '') {
                this.addItemToSelect(select, sentence, true, true)
            }
        },
        displayError: function(message) {
            this.popUpItem.getElementsByClassName('item-error')[0].innerText = message
        },
        undisplayError: function() {
            this.popUpItem.getElementsByClassName('item-error')[0].innerText = ''
        },
        addItem: function(item, section) {
            let number = this.popUpItem.querySelector('.quantity-input').value,
                ecoPart = item.ecoParticipation != '' ? item.ecoParticipation : '0'
            
            if(item.PPHT == '') {item.PPHT = '0'}

            //When the button is clicked, we add the item to the right section
            let itemHTML = '<td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform:;-ms-filter:"><path d="M10 10H14V14H10zM10 4H14V8H10zM10 16H14V20H10z"></path></svg></td>' +
                            '<td class="row-reference" contenteditable="">' + item.reference + '</td>' +
                            '<td class="row-name" contenteditable="">' + item.designation + '</td>' +
                            '<td class="row-number" contenteditable="">' + number + '</td>' +
                            '<td class="euro row-price" contenteditable="">' + parseFloat((item.PPHT).replace(/\s/g, '').replace(',', '.')).toFixed(2) + '</td>' +
                            '<td class="euro row-eco-part" contenteditable="">' + parseFloat(ecoPart).toFixed(2) + '</td>' +
                            '<td class="percent row-additional-discount" contenteditable="">' + 0 + '</td>' +
                            '<td class="euro row-total-price"></td>' +
                            '<td class="trash"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg></td>'
            
            let row = document.createElement('tr')
            row.className = 'item-row draggable'
            row.setAttribute('draggable', true)
            row.innerHTML = itemHTML
            section.insertBefore(row, section.querySelector('.add-row'))

            const lastItem = section.querySelector('.item-row:nth-last-child(2)')

            lastItem.addEventListener('dragstart', () => {
                //Add the class dragging when a row is selected
                lastItem.classList.add('dragging')
            })

            lastItem.addEventListener('dragend', () => {
                //Remove the class dragging when a row is no longer selected
                lastItem.classList.remove('dragging')
            })

            lastItem.getElementsByClassName('trash')[0].addEventListener('click', () => {
                lastItem.remove()
                C.handlerPriceUpdate()
            })

            lastItem.getElementsByClassName('row-number')[0].addEventListener('input', (e) => {
                if(!isNaN(parseInt(e.srcElement.innerHTML))) {
                    C.handlerPriceUpdate.call(C)
                }
            })

            lastItem.getElementsByClassName('row-price')[0].addEventListener('input', (e) => {
                if(!isNaN(parseInt(e.srcElement.innerHTML))) {
                    C.handlerPriceUpdate.call(C)
                }
            })

            lastItem.getElementsByClassName('row-eco-part')[0].addEventListener('input', (e) => {
                if(!isNaN(parseInt(e.srcElement.innerHTML))) {
                    C.handlerPriceUpdate.call(C)
                }
            })

            lastItem.getElementsByClassName('row-additional-discount')[0].addEventListener('input', (e) => {
                if(isNaN(parseInt(e.srcElement.innerHTML))) { return }
                
                C.handlerPriceUpdate.call(C)
            })
        },
        switchToTabReference: function() {
            this.popUpItem.getElementsByClassName('active')[0].classList.remove('active')
            this.popUpItem.getElementsByClassName('reference')[0].classList.add('active')

            this.popUpItem.querySelectorAll('.displayed-tab').forEach(element => {element.classList.remove('displayed-tab')})
            this.popUpItem.getElementsByClassName('display-tab')[0].classList.add('displayed-tab')
            this.popUpItem.querySelector('.display-tab input:nth-child(1)').classList.add('displayed-tab')
            this.popUpItem.getElementsByClassName('single-result')[0].classList.add('displayed-tab')
            this.popUpItem.querySelector('.checkbox label:nth-child(1)').classList.add('displayed-tab')
            this.popUpItem.querySelector('.checkbox label:nth-child(2)').classList.add('displayed-tab')
            this.popUpItem.querySelector('.input-by-reference').value = ''
            this.popUpItem.querySelector('.quantity-input').value = ''
        },
        switchToTabRange: function() {
            this.clearSelect(document.querySelector('.result-items select'), 'Pas d\'article correspondant')
            this.popUpItem.getElementsByClassName('active')[0].classList.remove('active')
            this.popUpItem.getElementsByClassName('range')[0].classList.add('active')
            this.popUpItem.querySelector('.select-menu select').selectedIndex = 0
            this.popUpItem.querySelector('.quantity-input').value = ''

            this.popUpItem.querySelectorAll('.displayed-tab').forEach(element => {element.classList.remove('displayed-tab')})
            this.popUpItem.getElementsByClassName('display-tab')[0].classList.add('displayed-tab')
            this.popUpItem.querySelector('.display-tab span').classList.add('displayed-tab')
            this.popUpItem.getElementsByClassName('result-items')[0].classList.add('displayed-tab')
            this.popUpItem.querySelector('.checkbox label:nth-child(1)').classList.add('displayed-tab')
            this.popUpItem.querySelector('.checkbox label:nth-child(2)').classList.add('displayed-tab')
        },
        switchToTabName: function() {
            this.clearSelect(document.querySelector('.result-items select'), 'Pas d\'article correspondant')
            this.popUpItem.getElementsByClassName('active')[0].classList.remove('active')
            this.popUpItem.getElementsByClassName('name')[0].classList.add('active')
            this.popUpItem.querySelector('.input-by-name').value = ''
            this.popUpItem.querySelector('.quantity-input').value = ''

            this.popUpItem.querySelectorAll('.displayed-tab').forEach(element => {element.classList.remove('displayed-tab')})
            this.popUpItem.getElementsByClassName('display-tab')[0].classList.add('displayed-tab')
            this.popUpItem.querySelector('.display-tab input:nth-child(3)').classList.add('displayed-tab')
            this.popUpItem.getElementsByClassName('result-items')[0].classList.add('displayed-tab')
            this.popUpItem.querySelector('.checkbox label:nth-child(1)').classList.add('displayed-tab')
            this.popUpItem.querySelector('.checkbox label:nth-child(2)').classList.add('displayed-tab')
        },
        switchToTabStartUp: function() {
            this.popUpItem.getElementsByClassName('active')[0].classList.remove('active')
            this.popUpItem.getElementsByClassName('start-up')[0].classList.add('active')

            this.popUpItem.querySelectorAll('.displayed-tab').forEach(element => {element.classList.remove('displayed-tab')})
            this.popUpItem.getElementsByClassName('result-items')[0].classList.add('displayed-tab')
            this.popUpItem.querySelector('.quantity-input').value = ''
        },
        updateElement: function(el, value, method) {
            el[method] = value
        },
        getProjectInformations: function() {
            let form = {}

            form.name           = document.getElementById('project-name-info').value || ''
            form.quoteType      = document.getElementById('quote-type-info').selectedIndex
            form.salesManArea   = document.getElementById('area-info').options[document.getElementById('area-info').selectedIndex].text || ''
            form.salesManNbr    = document.getElementById('sales-rep-name-info').selectedIndex || 0
            form.salesManPhone  = document.getElementById('sales-rep-phone').value || ''
            form.salesManEmail  = document.getElementById('sales-rep-email').value || ''
            form.companyName    = document.getElementById('company-name-info').value || ''
            form.companyAdress  = document.getElementById('company-adress-info').value || ''
            form.companyCity    = document.getElementById('company-zip-info').value || ''
            form.clientName     = document.getElementById('client-name-info').value || ''
            form.clientPhone    = document.getElementById('client-phone-info').value || ''
            form.clientEmail    = document.getElementById('client-email-info').value || ''
            form.userName       = document.getElementById('author-name-info').value || ''
            form.userJob        = document.getElementById('author-job-info').value || ''
            form.managerName    = document.getElementById('manager-name-info').value || ''
            form.managerJob     = document.getElementById('manager-job-info').value || ''

            if(document.getElementById('sales-rep-name-info').selectedIndex !== -1) {form.salesManName   = document.getElementById('sales-rep-name-info').options[document.getElementById('sales-rep-name-info').selectedIndex || 0].text || ''}

            return form
        },
        updateSalesRepNames: function(names) {
            let select = document.getElementById('sales-rep-name-info'), newOption, optionText
            select.options.length = 0
            names.forEach(name => { 
                newOption = document.createElement('option')
                optionText = document.createTextNode(name)
                newOption.appendChild(optionText)
                select.appendChild(newOption)
            })
        },
        updateSalesRep: function(d) {
            document.getElementById('sales-rep-phone').value    = d.phone
            document.getElementById('sales-rep-email').value    = d.email
            document.getElementById('manager-name-info').value  = d.manager
            document.getElementById('manager-job-info').value   = 'Directeur régional'
        }
    }

    //Le controlleur 
    //Les handlers sont souvent appelés par les events listener plus bas

    C = {
        model: M,
        view: V,
        priceDataBase: M.getPriceDataBase(),
        handlerStats: function() {
            this.view.updateStats(this.model)
        },
        handlerUpdatePage: function(link) {
            this.view.updatePage(link || window.location.hash || "#home")
        },
        handlerAddOptionToRangeDropDown() {
            let select = document.querySelector('.display-tab .select-menu select')
            this.model.rangesDataBase.forEach(el => this.view.addItemToSelect(select, el))
        },
        handlerShowAddSection: function() {
            this.view.showAddSection()
        },
        handlerAddSection: function(userTitle) {
            //Get the user title an insert it into the new section
            this.view.addSection(userTitle || document.getElementsByClassName('pop-up-window')[0].getElementsByTagName('input')[0].value || '')
            this.handlerHideAddSection()
        },
        handlerHideAddSection: function() {
            this.view.hideAddSection()
        },
        handlerShowAddItem: function(e) {
            this.view.showAddItem()
            this.model.setSelectedSection(e.composedPath()[3])
        },
        handlerHideAddItem: function() {
            this.view.hideAddItem()
            this.view.undisplayError()
            this.view.switchToTabReference()
            this.model.setSelectedItem(false)
        },
        handlerAddItem: function() {
            if(this.model.getSelectedItem() == 'Pas d\'article correspondant') {
                this.view.displayError('Sélectionnez un produit')
            } else if(isNaN(parseInt(document.querySelector('.quantity-input').value))) {
                this.view.displayError('Entrez une quantité valide')
            } else {
                console.log(this.model.getSelectedSection())
                this.view.addItem(this.model.getSelectedItem(), this.model.getSelectedSection())
                this.handlerHideAddItem()
                this.handlerPriceUpdate()
            }
        },
        handlerSwitchTab: function(tab) {
            this.view.undisplayError()
            switch(tab) {
                case 'reference':
                    this.view.switchToTabReference()
                    break
                case 'range':
                    this.view.switchToTabRange()
                    break
                case 'name':
                    this.view.switchToTabName()
                    break
                case 'start-up':
                    let selector = document.querySelector('.result-items select')
                    this.view.switchToTabStartUp()
                    this.view.clearSelect(selector)
                    this.view.addItemToSelect(selector, 'Choisissez une MES', true, true)

                    for(let key in this.priceDataBase) {
                        if(this.priceDataBase[key].miseEnService == 'O') {
                            this.view.addItemToSelect(selector, this.priceDataBase[key].designation)
                        }
                    }   

                    if(selector.options.length == 0) {
                        this.view.addItemToSelect(selector, 'Pas d\'article correspondant')
                        this.model.setSelectedItem(false)
                    } else {
                        this.handlerArticleSelectedByDropDown(selector.selectedOptions[0].innerText)
                    }
                    break
            }
        },
        checkItemInPriceDataBase: function(column, item) {
            for(let key in this.priceDataBase) {
                if(this.priceDataBase[key][column] == item) {
                    return this.priceDataBase[key]
                }
            }
            return false
        },
        searchForItems: function(item, data) {
            let matchNbr = 0,
                words = item.split(' ')

            words.forEach(el => {
                if(data.match(el)){matchNbr++}
            })
            return matchNbr
        },
        handlerFindItemBy: function(methodName) {
                let userContent,
                    select = document.querySelector('.result-items select')

                switch(methodName) {
                    case 'reference':
                        let itemMatches
                        userContent = this.view.popUpItem.querySelector('.display-tab input:nth-child(1)').value.replaceAll(' ', '')

                        //Check if it is only contain numbers
                        if (userContent.match(/^[0-9]+$/) != null) {
                            itemMatches = this.checkItemInPriceDataBase('reference', userContent)
                        } 

                        if(itemMatches) {
                            this.view.previewItem(itemMatches.designation)
                            this.view.undisplayError()
                            this.model.setSelectedItem(itemMatches)
                        } else {
                            this.view.noItemMatches()
                            this.model.setSelectedItem(false)
                        }
                        break
                    case 'range':
                        let option

                        userContent = this.view.popUpItem.querySelector('.display-tab .select-menu select').value

                        this.view.clearSelect(select)

                        for(let key in this.priceDataBase) {
                            if(this.priceDataBase[key].gamme == userContent) {
                                this.view.addItemToSelect(select, this.priceDataBase[key].designation)
                            }
                        }   

                        if(select.options.length == 0) {
                            this.view.addItemToSelect(select, 'Pas d\'article correspondant')
                            this.model.setSelectedItem(false)
                        } else {
                            this.handlerArticleSelectedByDropDown(select.selectedOptions[0].innerText)
                        }
                        break
                    case 'name':
                        userContent = this.view.popUpItem.querySelector('.input-by-name').value

                        let matchingScore,
                            searchResults = []

                        this.view.clearSelect(select)

                        for(let key in this.priceDataBase) {
                            matchingScore = this.searchForItems(userContent, this.priceDataBase[key].designation)
                            if(matchingScore !== 0) {
                                searchResults.push([matchingScore, this.priceDataBase[key]])
                            }
                        }
                        searchResults.sort().reverse()
                        searchResults.forEach(el => {
                            this.view.addItemToSelect(select, el[1].designation)
                        })

                        if(searchResults.length == 0) {
                            this.view.addItemToSelect(select, 'Pas d\'article correspondant')
                            this.model.setSelectedItem(false)
                        } else {
                            this.model.setSelectedItem(searchResults[0][1])
                            this.view.undisplayError()
                        }
                        break
                }
        },
        handlerArticleSelectedByDropDown: function(userContent) {
            let itemMatches = this.checkItemInPriceDataBase('designation', userContent) 

            if(itemMatches) {
                this.model.setSelectedItem(itemMatches)
                this.view.undisplayError()
            } else {
                this.model.setSelectedItem(false)
            }
        },
        handlerCheckQuantity: function() {
            if(!isNaN(parseInt(document.querySelector('.quantity-input').value))) {
                this.view.undisplayError()
            }
        },
        handlerPriceUpdate: function() {
            let sections = document.querySelectorAll('#items-section'),
                totalPrice, quantity, productPrice, ecoPart, additionalDiscount, reference, item, sectionPrice, sectionEcoPart, 
                globalPrice = 0,
                globalEcoPart = 0,
                globalDiscount = this.model.projectQuote.discount[3]

            sections.forEach(section => {
                sectionPrice = 0
                sectionEcoPart = 0

                section.querySelectorAll('.item-row').forEach(row => {
                    quantity = parseFloat(row.querySelector('.row-number').innerHTML)
                    productPrice = parseFloat(row.querySelector('.row-price').innerHTML)
                    ecoPart = parseFloat(row.querySelector('.row-eco-part').innerHTML)
                    additionalDiscount = parseFloat(row.querySelector('.row-additional-discount').innerHTML)
                    reference = row.querySelector('.row-reference').innerHTML
                    item = this.checkItemInPriceDataBase('reference', reference)

                    if(item.miseEnService == 'O') { 
                        totalPrice = quantity * productPrice 
                    } else {
                        totalPrice = quantity * productPrice * (1 - globalDiscount / 100) * (1 - additionalDiscount / 100)
                    }

                    this.view.updateElement(row.querySelector('.row-total-price'), totalPrice.toFixed(2), 'innerHTML')

                    sectionPrice = totalPrice + sectionPrice
                    sectionEcoPart = ecoPart + sectionEcoPart
                })
                globalPrice = globalPrice + sectionPrice
                globalEcoPart = globalEcoPart + sectionEcoPart

                this.view.updateElement(section.querySelector('.section-price'), sectionPrice.toFixed(2), 'innerHTML')
            })

            this.view.updateElement(document.querySelector('.total-discount'), this.model.projectQuote.discount[3].toFixed(2), 'value')
            this.view.updateElement(document.querySelector('.quote-price'), globalPrice.toFixed(2), 'innerHTML')
            this.view.updateElement(document.querySelector('.quote-eco-part'), globalEcoPart.toFixed(2), 'innerHTML')
        },
        handlerComputeTotalDicount: function() {
            let inputDiscount = document.getElementsByClassName('input-discount'),
                values = inputDiscount[0].value.replace(',', '.') * inputDiscount[1].value.replace(',', '.') * inputDiscount[2].value.replace(',', '.')

            if(isNaN(parseInt(values))) { return }

            for (var i = 0; i <= 2; i++) {
                this.model.projectQuote.discount[i] = inputDiscount[i].value.replace(',', '.')
            }

            this.model.projectQuote.discount[3] = ((1 - (1 - this.model.projectQuote.discount[0]/100)*(1 - this.model.projectQuote.discount[1]/100)*(1 - this.model.projectQuote.discount[2]/100)) * 100)
        },
        handlerFindSalesRep: function() {
            this.handlerUpdateProjectInformations()
            this.view.updateSalesRep(this.model.getSalesMan())
        },
        handlerUpdateSalesRepNames: function() {
            let names = this.model.getSalesMenNames(this.view.getProjectInformations().salesManArea)
            this.view.updateSalesRepNames(names)
            this.handlerFindSalesRep()
        },
        handlerUpdateProjectInformations: function() {
            this.model.setProjectInformations(this.view.getProjectInformations())
        },
        HTMLToPDF: function() {
            let HTMLquote   = document.querySelectorAll('#items-section') || [],
            quoteData       = [],
            i = 1

            quoteData.push({totalPrice: document.querySelector('.quote-price').innerHTML})

            HTMLquote.forEach(section => {
                quoteData[i] = []

                quoteData[i].push({
                    sectionName: section.querySelector('tr:nth-child(1) td:nth-child(2)').innerHTML, 
                    totalPrice : section.querySelector('tr:nth-child(1) td:nth-child(3)').innerHTML
                })

                section.querySelectorAll('.item-row').forEach(item => {
                    quoteData[i].push({
                        reference: item.querySelector('.row-reference').innerHTML,
                        name: item.querySelector('.row-name').innerHTML,
                        number: item.querySelector('.row-number').innerHTML,
                        price: item.querySelector('.row-price').innerHTML,
                        ecoPart: item.querySelector('.row-eco-part').innerHTML,
                        additionalDiscount: item.querySelector('.row-additional-discount').innerHTML,
                        totalPrice: item.querySelector('.row-total-price').innerHTML
                    })
                })
                i++
            })

            return quoteData
        },
        handlerPrintPDF: function() {
            this.handlerUpdateProjectInformations()

            this.printPDF(this.model.getProjectInformations(), this.HTMLToPDF())
        },
        printPDF: function(informations, quoteData) {

            const { jsPDF } = window.jspdf

            const doc = new jsPDF('p' , 'mm', 'a4')

            let marginLeft = 15

            //===== FIRST PAGE =====
            doc.setFontSize(10)
            doc.setFont('helvetica', 'bold')

            doc.addImage('https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/D2016804-0EA5-4A3D-8FB2-C7DBDD9FBC59.png', 'PNG', 0, 0, 1891/9, 25/9)

            doc.addImage('https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/26DC6488-2D26-4695-9B9E-38462297666C.png', 'PNG', 140, 15, 426/8, 96/8)

            doc.addImage('https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/6816B8DF-B266-4C58-9A52-F7A1BC1D3395.png', 'PNG', 78, 15, 456/8, 110/8)

            doc.text('Offre de prix', 15, 26)

            doc.line(marginLeft, 33, 194, 33, 'F')

            doc.setFont('helvetica', 'normal')
            doc.text('Numéro d\'offre', marginLeft, 40)
            doc.text('2638490792', marginLeft, 46)
            doc.text('Date de création', 60, 40)

            let date_format = new Date(),
            curDate = date_format.getDate()+'/'+date_format.getMonth()+'/'+date_format.getFullYear()

            doc.text(curDate, 60, 46)

            doc.text('Responsable de l\'offre', marginLeft, 55)
            doc.text(informations.userName, 60, 55)
            doc.text('Nom du client', marginLeft, 61)
            doc.text(informations.clientName, 60, 61)
            doc.text('Email du client', marginLeft, 67)
            doc.text(informations.clientEmail, 60, 67)
            doc.text('Téléphone du client', marginLeft, 73)
            doc.text(informations.clientPhone, 60, 73)
            doc.text('Date de validité du devis', marginLeft, 82)
            let maxDate
            curDate > '01/03/2023' ? maxDate = '01/03/2023' : maxDate = date_format.getMonth()+'/'+ date_format.getDate()+'/2023'

            doc.text(maxDate, 60, 82)
            doc.text('Nom du projet', marginLeft, 88)
            doc.text(informations.name, 60, 88)

            doc.text('A l\'attention de :', 120, 55)
            doc.setFont('helvetica', 'bold')
            doc.text(informations.companyName, 120, 61)
            doc.setFont('helvetica', 'normal')
            doc.text(informations.companyAdress, 120, 66)
            doc.text(informations.companyCity, 120, 71)

            doc.text(marginLeft, 110, 'Cher partenaire,')

            doc.text('Nous vous remercions pour votre consultation et vous prions de bien vouloir trouver ci-dessous l’offre de prix correspondante.', marginLeft, 117, { maxWidth: 179, align: 'justify' })

            doc.text('Pour toute demande d’information complémentaire ou questionnement relatif à cette offre, n’hésitez pas à vous rapprocher de votre interlocuteur commercial habituel ou à notre service avant-ventes tertiaire.projets@bosch.com', marginLeft, 128, { maxWidth: 179, align: 'justify' })

            doc.text('Nous vous souhaitons une bonne réception de cette offre, en espérant qu’elle puisse retenir toute votre attention et se concrétiser.', marginLeft, 139, { maxWidth: 179, align: 'justify' })

            doc.text('Responsable de la prescription', marginLeft, 160)
            doc.text(informations.salesManName, marginLeft, 165)
            doc.text(informations.salesManPhone, marginLeft, 170)
            doc.text(informations.managerJob, marginLeft, 180)
            doc.text(informations.managerName, marginLeft, 185)

            doc.line(marginLeft, 270, 194, 270, 'F')

            doc.setFontSize(8)
            doc.text('elm.leblanc SAS – 124-126 rue de Stalingrad – 93711 Drancy Cedex', marginLeft, 275)
            doc.text('SAS au capital de 14 081 225,40 EUR – RCS Bobigny 542 097 944', marginLeft, 280)
            doc.text('N° TVA : FR 89 542 097 944 – Code APE : 2521Z – Code EORI (Site St Thégonnec) : FR54209794400822', marginLeft, 285)
            doc.text('IBAN : FR76 3000 3040 2500 0203 9568 468 – BIC : SOGEFRPP', marginLeft, 290)

            doc.addImage('https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/D2016804-0EA5-4A3D-8FB2-C7DBDD9FBC59.png', 'PNG', 0, 294.1, 1891/9, 25/9)

            //===== SECOND PAGE =====
            doc.addPage()

            let bodyContent = []

            //Ajouter description

            for (var i = 1; i < quoteData.length; i++) {
                bodyContent.push([{content: [quoteData[i][0].sectionName], colSpan: 5, styles: {fontStyle: 'bold', fontSize: '14' }}])
                
                for (var y = 1; y < quoteData[i].length; y++) {
                    bodyContent.push([quoteData[i][y].reference, quoteData[i][y].name, quoteData[i][y].price + '€', quoteData[i][y].number, quoteData[i][y].ecoPart + '€', quoteData[i][y].totalPrice + '€'],)
                
                    let item = this.checkItemInPriceDataBase('reference', quoteData[i][y].reference)

                    if(item.description) {
                        bodyContent.push(['', item.description, '', '', '', ''],)
                    }
                }
                bodyContent.push(['','','','','', quoteData[i][0].totalPrice + '€'],)
            }

            bodyContent.push(['','','','','',''],)
            bodyContent.push(['', {content: ["Montant net HT"], styles: {fontStyle: 'bold', fontSize: '10'}}, '', '', '', {content: [quoteData[0].totalPrice + '€'], styles: {fontStyle: 'bold', fontSize: '10'}}],)
            bodyContent.push(['', {content: ["Eco-part"], styles: {fontStyle: 'bold', fontSize: '10'}}, '', '', '', {content: [10 + '€'], styles: {fontStyle: 'bold', fontSize: '10'}}],)

            doc.autoTable({
              theme: 'plain',
              head: [['Référence', 'Désignation', 'PU', 'Quantité', 'Eco-taxe', 'PTHT']],
              body: bodyContent,
              didDrawPage: function(data) {
                //Header
                doc.addImage('https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/D2016804-0EA5-4A3D-8FB2-C7DBDD9FBC59.png', 'PNG', 0, 0, 1891/9, 25/9)

                doc.text('Numéro d\'offre', marginLeft, 12)
                doc.text('0987654397', 38, 12)
                doc.text('Date de création', 65, 12)
                doc.text(curDate, 90, 12)

                //Footer

                doc.text('elm.leblanc SAS – 124-126 rue de Stalingrad – 93711 Drancy Cedex', marginLeft, 290)

                doc.addImage('https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/D2016804-0EA5-4A3D-8FB2-C7DBDD9FBC59.png', 'PNG', 0, 294.1, 1891/9, 25/9)
              },
            })
            
            //===== LAST PAGE =====
            doc.addPage()

            //Header
            doc.addImage('https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/D2016804-0EA5-4A3D-8FB2-C7DBDD9FBC59.png', 'PNG', 0, 0, 1891/9, 25/9)

            doc.setFontSize(16)
            doc.autoTable({
            theme: 'plain',
            styles: {fontSize: 8},
            head: [['Conditions commerciales :']],
            body: [
              ['Les prix s’entendent en prix nets HT. Les prix indiqués sont des prix conseillés, les distributeurs restent libres de pratiquer le prix et la politique commerciale de leur choix.'],
              ['Conditions de règlement : habituelles Bosch, consultables dans nos conditions générales de vente.'],
              ['Vous avez la possibilité de consulter les principales notices techniques relatives à nos produits sur notre site www.bosch-industrial.fr'],
              ['Nous vous rappelons que cette offre est soumise à nos conditions générales de vente. Les textes complets de ces conditions figurent dans nos catalogues Chauffage et Climatisation en vigueurs, ainsi que sur www.bosch-industrial.fr'],
              ['Mentions particulières Chauffage :'],
              ['Pour le bon fonctionnement, la pérennité et la performance des système de chauffage, nous vous conseillons de suivre les recommandations de la norme NF EN 12828 « Systèmes de chauffage dans les bâtiments – conception des installations de chauffage à eau chaude ». En lien avec les recommandations de la norme, vous retrouverez l’ensemble des conditions d’exploitation de nos matériels au dernier chapitre de notre catalogue. Ces conditions incluent l’exploitation de nos générateurs, les équipements de sécurité ainsi que la qualité de l’eau en chaufferie. Enfin, nous vous rappelons que le Code de l’environnement exige la tenue d’un livret de chaufferie pour toute installation de chauffage.'],
              ['Mentions particulières Climatisation :'],
              ['La sélection et le dimensionnement des matériels sont fournis à titre indicatif sur la base des informations reçues. En l’absence d’une étude complète fournie par le demandeur, la sélection du matériel est faite selon les paramètres suivants :'],
              ['- Mode chaud : 50 W/m3 pour une température intérieure de 20 °C'],
              ['- Mode froid : 30 W/m3 pour un abaissement de 6 °C maximum, entre la température intérieure et la température extérieure'],
              ['- Taux d’hygrométrie non considéré'],
              ['- Taux de brassage d’air compris entre 6 et 8 vol/h'],
              ['La sélection basée sur ces paramètres ne peut en aucun cas remplacer une étude réalisée par un professionnel habilité et ne peut engager la responsabilité de elm.leblanc SAS.'],
              ['Conditions de garantie :'],
              ['L’ensemble des conditions de garantie de nos matériels peuvent être retrouvées dans nos conditions générales de vente.'],
              ['Chaudières, régulations, solaire thermique, traitement de l’eau, accessoires : 2 ans'],
              ['Cuves des ballons de stockage et préparateurs ECS : 3 ans'],
              ['Climatisation tertiaire VRF : 5 ans toutes pièces, compresseurs inclus, via mise en service réalisée et validée par un professionnel qualifié.'],
              ['Climatisation résidentielle Splits : 3 ans pièces, 5 ans compresseurs, via mise en service réalisée et validée par un professionnel qualifié.'],
              ['La garantie est portée à 5 ans pour les corps de chauffe des chaudières avec une mise en service réalisée et validée par notre service après-vente constructeur.'],
              ['Une extension de garantie à 10 ans peut être proposée pour les corps de chauffe des chaudières, à titre onéreux, par notre service après-vente constructeur.'],
              ['Si la mise en service de la Climatisation tertiaire VRF est réalisée par notre service après-vente constructeur, la main d’oeuvre est incluse pour les 2 premières années de garantie.'],
              ['Des informations sur les constituants conformément à l\'article 33 du règlement REACH sont disponibles sous l\'adresse suivante : www.reach.bosch-thermotechnology.com'],
            ]})

            //Footer
            doc.line(marginLeft, 270, 194, 270, 'F')

            doc.setFontSize(8)
            doc.text('elm.leblanc SAS – 124-126 rue de Stalingrad – 93711 Drancy Cedex', marginLeft, 275)
            doc.text('SAS au capital de 14 081 225,40 EUR – RCS Bobigny 542 097 944', marginLeft, 280)
            doc.text('N° TVA : FR 89 542 097 944 – Code APE : 2521Z – Code EORI (Site St Thégonnec) : FR54209794400822', marginLeft, 285)
            doc.text('IBAN : FR76 3000 3040 2500 0203 9568 468 – BIC : SOGEFRPP', marginLeft, 290)

            doc.addImage('https://raw.githubusercontent.com/EdernClemente/edernclemente.github.io/main/img/D2016804-0EA5-4A3D-8FB2-C7DBDD9FBC59.png', 'PNG', 0, 294.1, 1891/9, 25/9)

            doc.save("a4.pdf");
        }
    }

    //Les events listener

    C.handlerStats.call(C) 
    C.handlerUpdatePage.call(C)
    C.handlerAddSection.call(C, 'Entrez un nom de catégorie')
    C.handlerUpdateSalesRepNames.call(C)

    document.querySelectorAll('.nav__link').forEach(l => l.addEventListener('click', function() { 
        C.handlerUpdatePage.call(C, this.getAttribute('href'))
    }))

    document.getElementById('add-section-button').addEventListener('click', function() {
        C.handlerShowAddSection.call(C)
    })

    ////////////////////////////////////// Add section
    //Add an event listener on the close button of the window
    document.getElementsByClassName('pop-up-window')[0].getElementsByClassName('close')[0].addEventListener('click', () => {
        C.handlerHideAddSection.call(C)
    })

    //Add section when the add section button is clicked
   document.getElementsByClassName('pop-up-window')[0].getElementsByTagName('button')[0].addEventListener('click', () => {
        C.handlerAddSection.call(C)
    })

    //////////////////////////////////////// Add item
    let popUpItem = document.getElementsByClassName('pop-up-item')[0]

    //Add an event listener on the close button of the window
    popUpItem.getElementsByClassName('close')[0].addEventListener('click', () => {
        C.handlerHideAddItem.call(C)
    })

    let tabName = ['reference', 'range', 'name', 'start-up']
    tabName.forEach(tab => {
        popUpItem.getElementsByClassName(tab)[0].addEventListener('click', () => {
            C.handlerSwitchTab(tab)
        })
    })

    C.handlerAddOptionToRangeDropDown()

    popUpItem.querySelector('.display-tab input:nth-child(1)').addEventListener('input', () => {
        C.handlerFindItemBy('reference')
    })

    popUpItem.querySelector('.display-tab span select').addEventListener('change', () => {
        C.handlerFindItemBy('range')
    })

    popUpItem.querySelector('.pop-up-item .result-items select').addEventListener('change', (e) => {
        C.handlerArticleSelectedByDropDown(e.target.value)
    })

    popUpItem.querySelector('.display-tab input:nth-child(3)').addEventListener('input', () => {
        C.handlerFindItemBy('name')
    })

    popUpItem.querySelector('.quantity-input').addEventListener('input', () => {
        C.handlerCheckQuantity()
    })

    //Add item when the add item button is clicked
    popUpItem.getElementsByClassName('normal-btn')[0].addEventListener('click', function() {
        C.handlerAddItem.call(C)
    })

    document.querySelectorAll('.input-discount').forEach(el => {
        el.addEventListener('input', () => {
            C.handlerComputeTotalDicount.call(C)
            C.handlerPriceUpdate.call(C)
        })
    }) 

    //Update Sales Rep part
    document.querySelector('#area-info').addEventListener('change', function() {
        C.handlerUpdateSalesRepNames.call(C)
    }) 

    document.querySelector('#sales-rep-name-info').addEventListener('change', function() {
        C.handlerFindSalesRep.call(C)
    }) 

    //Parse HTML to PDF
    document.querySelector('#toolbar-container div:nth-child(2) .normal-btn:nth-child(2)').addEventListener('click', function() {
        C.handlerPrintPDF.call(C)
    })  
})()

//Fonction pour le drag and drop
function getDragAfterElement(container, y, searchedClass) {
  const draggableElements = [...container.querySelectorAll(searchedClass)]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

const mainContainer = document.querySelector('#quote-creator-container')

//Fonction pour le drag and drop
//Add an event when a draggable element is over the main container
mainContainer.addEventListener('dragover', e => {
    //Check whether the draggable element is a container
    if (document.querySelector('.main-dragging')) {
        //prevent default to allow drop
        e.preventDefault()
        //Find the nearest element of the container
        const afterElement = getDragAfterElement(mainContainer, e.clientY, '.main-draggable:not(.main-dragging)')
        const activeDraggable = document.querySelector('.main-dragging')
        if (afterElement != null) {
          mainContainer.insertBefore(activeDraggable, afterElement)
        }
         else {
            mainContainer.appendChild(activeDraggable)
        }
    }
})