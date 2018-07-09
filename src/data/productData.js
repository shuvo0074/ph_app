var imSourcea= require('../contents/productImages/ancotil.png')
var imSourcea2= require('../contents/productImages/alverin.png')
var imSourcea3= require('../contents/productImages/antif.png')
var imSourcea4= require('../contents/productImages/antipro.png')
var imSourcea5= require('../contents/productImages/antiplet.png')
var imSourcea6= require('../contents/productImages/artiflex.png')

var prod = require('../contents/product.html')

var productsData = [
    {
        "key":1,
        "name":" Alverin",
        "desc":" Alverine citrate .",
        "imageS": require('../contents/Alverin.png') ,
        "details": require('../contents/Alverin.html') ,

    },
    {
        "key":2,
        "name":"Ancotil ",
        "desc":" Bromazepam .",
        "imageS": require('../contents/Ancotil.png') ,
        "details": require('../contents/Ancotil.html') ,

    },
    {
        "key":3,
        "name":"Antif ",
        "desc":" Amoxycillin .",
        "imageS": require('../contents/Antif.png') ,
        "details": require('../contents/Antif.html') ,

    },
    {
        "key":4,
        "name":"AntiPro ",
        "desc":" Metronidazole .",
        "imageS": require('../contents/AntiPro.png') ,
        "details": require('../contents/AntiPro.html') ,

    },
    {
        "key":5,
        "name":"Artiflex ",
        "desc":"  ",
        "imageS": require('../contents/Artiflex.png') ,
        "details": require('../contents/Artiflex.html') ,

    },
    {
        "key":6,
        "name":"Babiz ",
        "desc":" Vitamin B complex and Zinc .",
        "imageS": require('../contents/Babiz.png') ,
        "details": require('../contents/Babiz.html') ,

    },
    {
        "key":7,
        "name":"Bactab ",
        "desc":" Baclofen BP",
        "imageS": require('../contents/Bactab.png') ,
        "details": require('../contents/Bactab.html') ,

    },
    {
        "key":8,
        "name":"Cleomycin300 ",
        "desc":" Clindamycin ",
        "imageS": require('../contents/Cleomycin300.png') ,
        "details": require('../contents/Cleomycin300.html') ,

    },
    {
        "key":9,
        "name":"CodOil",
        "desc":"Cod liver oil",
        "imageS": require('../contents/CodOil.png') ,
        "details": require('../contents/CodOil.html') ,

    },
    {
        "key":10,
        "name":"Colamin",
        "desc":"Mecobalamin",
        "imageS": require('../contents/Colamin.png') ,
        "details": require('../contents/Colamin.html') ,

    },
    {
        "key":11,
        "name":"CoralCd",
        "desc":"Calcium Carbonate from coral source",
        "imageS": require('../contents/CoralCd.png') ,
        "details": require('../contents/CoralCd.html') ,

    },
    {
        "key":12,
        "name":"Curacid",
        "desc":"Esomeprazole",
        "imageS": require('../contents/Curacid.png') ,
        "details": require('../contents/Curacid.html') ,

    },
    {
        "key":13,
        "name":"Depanil",
        "desc":"Clonazepam",
        "imageS": require('../contents/Depanil.png') ,
        "details": require('../contents/Depanil.html') ,

    },
    {
        "key":14,
        "name":"Depresil",
        "desc":"Flupenthixol & Melitracen",
        "imageS": require('../contents/Depresil.png') ,
        "details": require('../contents/Depresil.html') ,

    },
    {
        "key":15,
        "name":"Destacin",
        "desc":"Deslaretodine",
        "imageS": require('../contents/Destacin.png') ,
        "details": require('../contents/Destacin.html') ,

    },
    {
        "key":16,
        "name":"DiversaGold",
        "desc":"A to Z",
        "imageS": require('../contents/DiversaGold.png') ,
        "details": require('../contents/DiversaGold.html') ,

    },
    {
        "key":17,
        "name":"Droxil",
        "desc":"Cefadroxil",
        "imageS": require('../contents/Droxil.png') ,
        "details": require('../contents/Droxil.html') ,

    },
    {
        "key":18,
        "name":"Dysma",
        "desc":"Tiemonium Methylsulphate",
        "imageS": require('../contents/Dysma.png') ,
        "details": require('../contents/Dysma.html') ,

    },
    {
        "key":19,
        "name":"E_gold",
        "desc":"Vitamin E",
        "imageS": require('../contents/E_gold.png') ,
        "details": require('../contents/E_gold.html') ,

    },
    {
        "key":20,
        "name":"Fenargic",
        "desc":"Fexofenadine",
        "imageS": require('../contents/Fenargic.png') ,
        "details": require('../contents/Fenargic.html') ,

    },
    {
        "key":21,
        "name":"Fungitrol",
        "desc":"Fluconazole",
        "imageS": require('../contents/Fungitrol.png') ,
        "details": require('../contents/Fungitrol.html') ,

    },
    {
        "key":22,
        "name":"Kenodol",
        "desc":"Ketorolac tromethamine",
        "imageS": require('../contents/Kenodol.png') ,
        "details": require('../contents/Kenodol.html') ,

    },
    {
        "key":23,
        "name":"Laxativ",
        "desc":"Lactulose",
        "imageS": require('../contents/Laxativ.png') ,
        "details": require('../contents/Laxativ.html') ,

    },
    {
        "key":24,
        "name":"Lethiquin",
        "desc":"Levofloxacin",
        "imageS": require('../contents/Lethiquin.png') ,
        "details": require('../contents/Lethiquin.html') ,

    },
    {
        "key":25,
        "name":"Lindex",
        "desc":"Cephradine",
        "imageS": require('../contents/Lindex.png') ,
        "details": require('../contents/Lindex.html') ,

    },
    {
        "key":26,
        "name":"Lipicut",
        "desc":"Atorvastatin",
        "imageS": require('../contents/Lipicut.png') ,
        "details": require('../contents/Lipicut.html') ,

    },
    {
        "key":27,
        "name":"Losartium50",
        "desc":"Losartan Potassium",
        "imageS": require('../contents/Losartium50.png') ,
        "details": require('../contents/Losartium50.html') ,

    },
    {
        "key":28,
        "name":"Losartium_H",
        "desc":"Losartan Potassium and Hydrochlorothiazide",
        "imageS": require('../contents/Losartium_H.png') ,
        "details": require('../contents/Losartium_H.html') ,

    },
    {
        "key":29,
        "name":"Maxbac",
        "desc":"Ceftazidime",
        "imageS": require('../contents/Maxbac.png') ,
        "details": require('../contents/Maxbac.html') ,

    },
    {
        "key":30,
        "name":"Maxflo_U",
        "desc":"Tamsulosin HCl",
        "imageS": require('../contents/Maxflo_U.png') ,
        "details": require('../contents/Maxflo_U.html') ,

    },
    {
        "key":31,
        "name":"Merotic",
        "desc":"",
        "imageS": require('../contents/Merotic.png') ,
        "details": require('../contents/Merotic.html') ,

    },
    {
        "key":32,
        "name":"MonproX",
        "desc":"Montelukast",
        "imageS": require('../contents/MonproX.png') ,
        "details": require('../contents/MonproX.html') ,

    },
    {
        "key":33,
        "name":"Neurodol",
        "desc":"Vitamin b1 b6 b12",
        "imageS": require('../contents/Neurodol.png') ,
        "details": require('../contents/Neurodol.html') ,

    },
    {
        "key":34,
        "name":"Ngcef",
        "desc":"Cefixime",
        "imageS": require('../contents/Ngcef.png') ,
        "details": require('../contents/Ngcef.html') ,

    },
    {
        "key":35,
        "name":"Normogut",
        "desc":"Domperidone",
        "imageS": require('../contents/Normogut.png') ,
        "details": require('../contents/Normogut.html') ,

    },
    {
        "key":36,
        "name":"NT_par",
        "desc":"Albendazole",
        "imageS": require('../contents/NT_par.png') ,
        "details": require('../contents/NT_par.html') ,

    },
    {
        "key":37,
        "name":"Omag_DR",
        "desc":"Omeprazole",
        "imageS": require('../contents/Omag_DR.png') ,
        "details": require('../contents/Omag_DR.html') ,

    },
    {
        "key":38,
        "name":"OrafenPlus",
        "desc":"Diclofenac Sodium & idocaine Cl",
        "imageS": require('../contents/OrafenPlus.png') ,
        "details": require('../contents/OrafenPlus.html') ,

    },
    {
        "key":39,
        "name":"OrafenSR",
        "desc":"Diclofenac Sodium",
        "imageS": require('../contents/OrafenSR.png') ,
        "details": require('../contents/OrafenSR.html') ,

    },
    {
        "key":40,
        "name":"Oryx",
        "desc":"Ceftriaxone",
        "imageS": require('../contents/Oryx.png') ,
        "details": require('../contents/Oryx.html') ,

    },
    {
        "key":41,
        "name":"Ostacid",
        "desc":"Calcium Carbonate",
        "imageS": require('../contents/Ostacid.png') ,
        "details": require('../contents/Ostacid.html') ,

    },
    {
        "key":42,
        "name":"Ostacid_D",
        "desc":"Calcium & Vitamin D",
        "imageS": require('../contents/Ostacid_D.png') ,
        "details": require('../contents/Ostacid_D.html') ,

    },
    {
        "key":43,
        "name":"Pantocure",
        "desc":"Pantoprazole BP",
        "imageS": require('../contents/Pantocure.png') ,
        "details": require('../contents/Pantocure.html') ,

    },
    {
        "key":44,
        "name":"Pedicin",
        "desc":"Erythromycin",
        "imageS": require('../contents/Pedicin.png') ,
        "details": require('../contents/Pedicin.html') ,

    },
    {
        "key":45,
        "name":"PediZinc",
        "desc":"Zinc sulphate USP",
        "imageS": require('../contents/PediZinc.png') ,
        "details": require('../contents/PediZinc.html') ,

    },
    {
        "key":46,
        "name":"Perpen",
        "desc":"Flucloxicilin",
        "imageS": require('../contents/Perpen.png') ,
        "details": require('../contents/Perpen.html') ,

    },
    {
        "key":47,
        "name":"Pregmin",
        "desc":"Carbonyl Iron & Folic Acid",
        "imageS": require('../contents/Pregmin.png') ,
        "details": require('../contents/Pregmin.html') ,

    },
    {
        "key":48,
        "name":"Pregmin_Z",
        "desc":"Carbonyl Iron,Folic Acid & Zinc",
        "imageS": require('../contents/Pregmin_Z.png') ,
        "details": require('../contents/Pregmin_Z.html') ,

    },
    {
        "key":49,
        "name":"Prevencid",
        "desc":"Omeprazole",
        "imageS": require('../contents/Prevencid.png') ,
        "details": require('../contents/Prevencid.html') ,

    },
    {
        "key":50,
        "name":"Ranflox",
        "desc":"Ciprofloxacin",
        "imageS": require('../contents/Ranflox.png') ,
        "details": require('../contents/Ranflox.html') ,

    },
    {
        "key":51,
        "name":"Ranoxen",
        "desc":"Naproxen",
        "imageS": require('../contents/Ranoxen.png') ,
        "details": require('../contents/Ranoxen.html') ,

    },
    {
        "key":52,
        "name":"RanoxenPlus500",
        "desc":"Naproxen & Esomeprazole",
        "imageS": require('../contents/RanoxenPlus500.png') ,
        "details": require('../contents/RanoxenPlus500.html') ,

    },
    {
        "key":53,
        "name":"Ranvit_B",
        "desc":"Vitamin B complex",
        "imageS": require('../contents/Ranvit_B.png') ,
        "details": require('../contents/Ranvit_B.html') ,

    },
    {
        "key":54,
        "name":"Ranzith",
        "desc":"Azithromycin",
        "imageS": require('../contents/Ranzith.png') ,
        "details": require('../contents/Ranzith.html') ,

    },
    {
        "key":55,
        "name":"Recofast",
        "desc":"Cefuroxime",
        "imageS": require('../contents/Recofast.png') ,
        "details": require('../contents/Recofast.html') ,

    },
    {
        "key":56,
        "name":"Sartec",
        "desc":"CetrizineDihydrochloride",
        "imageS": require('../contents/Sartec.png') ,
        "details": require('../contents/Sartec.html') ,

    },
    {
        "key":57,
        "name":"Sedaquil",
        "desc":"Midazolam",
        "imageS": require('../contents/Sedaquil.png') ,
        "details": require('../contents/Sedaquil.html') ,

    },
    {
        "key":58,
        "name":"Tacs",
        "desc":"Paracetamol + Caffeine",
        "imageS": require('../contents/Tacs.png') ,
        "details": require('../contents/Tacs.html') ,

    },
    {
        "key":59,
        "name":"TacsDol",
        "desc":"Paracetamol & Tramadol",
        "imageS": require('../contents/TacsDol.png') ,
        "details": require('../contents/TacsDol.html') ,

    },
    {
        "key":60,
        "name":"Vesocal",
        "desc":"Amlodipine",
        "imageS": require('../contents/Vesocal.png') ,
        "details": require('../contents/Vesocal.html') ,

    },
    {
        "key":61,
        "name":"VesocalPlus",
        "desc":"Amlodipine + Atenolol",
        "imageS": require('../contents/VesocalPlus.png') ,
        "details": require('../contents/VesocalPlus.html') ,

    },
    {
        "key":62,
        "name":"Xepodox",
        "desc":"cefpodoxime",
        "imageS": require('../contents/Xepodox.png') ,
        "details": require('../contents/Xepodox.html') ,

    },
    {
        "key":63,
        "name":"X_Pectoran",
        "desc":"Bromhexine Hydrochloride",
        "imageS": require('../contents/X_Pectoran.png') ,
        "details": require('../contents/X_Pectoran.html') ,

    },
    {
        "key":64,
        "name":"Zenil",
        "desc":"Ranitidine",
        "imageS": require('../contents/Zenil.png') ,
        "details": require('../contents/Zenil.html') ,

    },

]
export default productsData;