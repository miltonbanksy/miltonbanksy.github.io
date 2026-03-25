const settlement_names_uk = [
    "amp","ash",
    "bar","bark","barn","beach","beacon","bed","black","bod","bourn","brack","bridge","bright","buck","bury",
    "cam","chest","chester","cock","combe","cong","congle","corn","crew",
    "dale","don","dun",
    "fen","field","fold","font","ford",
    "grass",
    "ham","hel","hill","hove","hunt","hurst",
    "king","knot",
    "lake","land","lock","low",
    "man","marlowe","mat","mere","mouth",
    "nan","nell","new","nut",
    "pen","pool","port",
    "ram","rest","ring","run","rush",
    "salt","sand","sea","shire","shore","side","stable","staple","stock","stoke","stone",
    "tin","ting","toll","ton","turn",
    "vale",
    "wash","way","wich","wick","work"
];

const settlement_names_fantasy_prefix = [
    "abbey","amber","angle","ankle","arch","axe",
    "baron","black","blood","body","boot","bow","bread","bronze",
    "candle","castle","cauldron","chain","chalice","cloak","cloud","clover","coin","cook","copper","crag",
    "darling","drummer","dry","dusk","dust",
    "ember",
    "fern","furrow",
    "galley","gallow","goblet","gold","gray",
    "helm","hope","horse",
    "iron",
    "keep","knight",
    "mace","mail","mead","milk",
    "plow","prince",
    "quill",
    "royal",
    "saddle","shield","silver","stew","sword",
    "tower",
    "vine",
    "white","willow","wine",
    "yellow"
]

const settlement_names_fantasy_suffix = [
    "bank","bar","barrow","basin","bath","bay","beach","bench","bottom","bowl","burrow",
    "cape","cave","channel","cliff","crag","crater","creek","cross","cut",
    "dale","downs","dunes",
    "end",
    "falls","fan","fell","fen","field","flood",
    "gap","gash","gulch","gulf","gulley",
    "hill","hole","hollow",
    "lake","land",
    "marsh","meadow","moat","mound","mount",
    "needle","nest",
    "orchard",
    "pass","peak","pit","plain","pond","pool","pot",
    "range","ridge","river","rock",
    "sands","sea","shire","shore","slope","spit","spring","stack","strait","stream","stump","swamp",
    "tap","tarn","top","trip",
    "valley"
]

function capitalizeFirstLetter(string) {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const btnSettlementUK = document.querySelector('#btn-settlement-uk');
const btnSettlementFantasy = document.querySelector('#btn-settlement-fantasy');
const displaySettlement = document.querySelector('#display-settlement');

btnSettlementUK.addEventListener('click', () => {
    const settlement_index_1 = Math.floor(Math.random() * settlement_names_uk.length);
    const settlement_name_1_lower = settlement_names_uk[settlement_index_1];
    const settlement_name_1_upper = capitalizeFirstLetter(settlement_name_1_lower);

    const settlement_index_2 = Math.floor(Math.random() * settlement_names_uk.length);
    const settlement_name_2 = settlement_names_uk[settlement_index_2];
    displaySettlement.innerHTML = settlement_name_1_upper+settlement_name_2;
});

btnSettlementFantasy.addEventListener('click', () => {
    const settlement_index_1 = Math.floor(Math.random() * settlement_names_fantasy_prefix.length);
    const settlement_name_1 = settlement_names_fantasy_prefix[settlement_index_1];

    const settlement_index_2 = Math.floor(Math.random() * settlement_names_fantasy_suffix.length);
    const settlement_name_2 = settlement_names_fantasy_suffix[settlement_index_2];
    displaySettlement.innerHTML = `${settlement_name_1}, ${settlement_name_2}`;
});