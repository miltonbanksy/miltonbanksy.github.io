const settlement_names_uk = [
    "amp","ash",
    "bar","beach","beacon","bed","black","bod","bourn","brack","bridge","bright","buck","bury",
    "cam","chest","chester","cock","combe","cong","congle","crew",
    "dale","don","dun",
    "fen","field","fold","font","ford",
    "grass",
    "ham","hel","hill","hove","hunt","hurst",
    "king",
    "lake","land","low",
    "man","marlowe","mere","mouth",
    "nan","nell","nut",
    "pen","pool",
    "ram","rest","run",
    "salt","sand","sea","shire","shore","stable","stoke","stone",
    "tin","ting","toll","ton","turn",
    "vale",
    "wich","wick","work"
];

const settlement_names_fantasy_prefix = [
    "abbey","amber","angle","ankle","arch","axe",
    "baron","black","blood","body","boot","bow","bread",
    "candle","castle","cauldron","chain","chalice","cloak","cloud","clover","coin","cook",
    "ember",
    "furrow",
    "galley","gallow","goblet","gold","gray",
    "helm","hope","horse",
    "iron",
    "keep","knight",
    "mace","mail","mead","milk",
    "plow","prince",
    "quill",
    "royal",
    "saddle","shield","stew","sword",
    "tower",
    "white","wine",
    "yellow"
]

const settlement_names_fantasy_suffix = [
    "basin","bath","bay","bottom","bowl",
    "channel","cliff","creek","cross","cut",
    "dale","downs","dunes",
    "end",
    "falls","fell","field",
    "gash","gulf",
    "hill","hole",
    "lake","land",
    "moat","mound","mount",
    "orchard",
    "pass","peak","pit","plain","pond","pool","pot",
    "range","ridge","river",
    "sands","sea","shire","slope","stream",
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