
const namesBritishFemales = [
    "Abigail", "Ada", "Adele", "Alexandra", "Alice", "Amber", "Amelia", "Amy", "Anna", "Annabelle", "Anne", "Aria", "Ariana", "Ariel", "Asher", "Ashley", "Audrey", "Aurora",
    "Ava", 
    "Beatrice", "Bella", "Bethany", "Bianca", "Bonnie", "Brianna", "Brooke", 
    "Camilla", "Carla", "Catherine", "Charlotte", "Chloe", "Clara", "Cleo", 
    "Daisy", "Dakota", "Dana", "Daniella", "Daphne", "Darcie", "Daria", "Davina", "Dawn", "Daya", "Divine", "Deborah", "Delilah", "Demi", "Destiny", "Diana", "Dixie", "Dollie", "Dora", "Dorothy", "Dottie",
    "Edith", "Eleanor", "Eliza", "Elizabeth", "Ella", "Ellie", "Elsie", "Emily", "Emma", "Erin", "Esme", "Eva", "Evelyn",
    "Evie", 
    "Faith", "Farah", "Faye", "Felicia", "Felicity", "Fern", "Fifi", "Flora", "Florence", "Flossie", "Flower", "Francesca", "Frederica", "Freya", "Frida", 
    "Georgia", "Georgina", "Gertrude","Gillian","Grace", "Hallie", "Hannah",
    "Harper", "Harriet", "Hazel", "Heidi", "Holly", "Imogen", "India", "Isabella", "Isla",
    "Ivy", "Jasmine", "Jessica", "Joanna", "Josephine", "Julia", "Kate", "Katherine", "Katie", "Lara",
    "Laura", "Lauren", "Layla", "Leah", "Lilly", "Lily", "Lucy", "Luna", "Lydia", "Maisie",
    "Martha", "Mary", "Matilda", "Maya", "Megan", "Millie", "Molly", "Nancy", "Naomi", "Natasha", "Niamh",
    "Olivia", "Ophelia", "Orla", "Paige", "Phoebe", "Poppy", "Rebecca", "Rosie", "Ruby", "Sophie",
    "Tamara", "Teri", "Tess", "Trudy", 
    "Valentina", "Valerie", "Vanessa", "Venus", "Vera", "Veronica", "Victoria", "Vienna", "Viola", "Violet", "Virginia", "Vivienne"
];
const namesBritishMales = [
    "Adam", "Adrian", "Albie", "Albert", "Alexander", "Alfie", "Alfred", "Andrew", "Angus", "Anthony",
    "Archie", "Arthur", "Asher", "Austin", "Barney", "Ben", "Benjamin", "Blake", "Bobby", "Bradley",
    "Brandon", "Callum", "Calvin", "Cameron", "Charles", "Charlie", "Chester", "Christian", "Christopher", "Cian",
    "Connor", "Daniel", "David", "Dexter", "Dominic", "Dylan", "Edward", "Eli", "Elijah", "Elliot",
    "Elliott", "Ellis", "Ethan", "Ewan", "Felix", "Finlay", "Finley", "Finn", "Francis", "Freddie",
    "Frederick", "Gabriel", "George", "Gregory", "Hamish", "Harley", "Harrison", "Harry", "Harvey", "Henry",
    "Hugo", "Hunter", "Isaac", "Isaiah", "Jack", "Jacob", "Jake", "James", "Jamie", "Jasper",
    "Jayden", "Jenson", "Joel", "John", "Jonathan", "Joseph", "Joshua", "Jude", "Kai", "Kian",
    "Kyle", "Laurence", "Leo", "Leon", "Leonard", "Lewis", "Liam", "Logan", "Louis", "Lucas",
    "Luke", "Malcolm", "Marcus", "Mason", "Matthew", "Max", "Michael", "Milo", "Nathan", "Nicholas"
];
const namesBritishSurnames = [
    "Adams", "Allen", "Anderson", "Armstrong", "Atkinson", "Bailey", "Baker", "Barker", "Barnes", "Bell",
    "Bennett", "Black", "Blake", "Booth", "Bradley", "Brown", "Bryant", "Burton", "Butler", "Campbell",
    "Carr", "Carter", "Chapman", "Clark", "Clarke", "Collins", "Cook", "Cooper", "Cox", "Crawford",
    "Cunningham", "Davies", "Davis", "Dawson", "Day", "Dixon", "Douglas", "Duncan", "Edwards", "Elliott",
    "Ellis", "Evans", "Fisher", "Fletcher", "Ford", "Foster", "Fox", "Fraser", "Gibson", "Graham",
    "Grant", "Gray", "Green", "Griffiths", "Hall", "Hamilton", "Harris", "Harrison", "Hart", "Harvey",
    "Hawkins", "Hayes", "Henderson", "Hill", "Holmes", "Hopkins", "Howard", "Hudson", "Hughes", "Hunt",
    "Hunter", "Jackson", "James", "Jenkins", "Johnson", "Johnston", "Jones", "Kelly", "Kennedy", "Khan",
    "King", "Knight", "Lane", "Lawrence", "Lawson", "Lee", "Lewis", "Lloyd", "Martin", "Mason",
    "Matthews", "Miller", "Mitchell", "Moore", "Morgan", "Morris", "Murphy", "Murray", "Nelson", "Newton"
]

const oddNames = [
    "adder", "ample", "angle", "apple", "april", "arrow", "art", "autumn",
    "bad", "bag", "bake", "barn", "beak", "beaker", "beat", "bellow", "bend", "big", "bird", "bite", "bitter", "black", "blank", "blink", "blood", "bloom", "blot", "blunt", "blush", "body", "bone", "boost", "bomb", "bottle", "bottom", "bow", "brace", "breast", "bright", "brim", "bronze", "brow", "buckle", "bug", "bung", "bulb",
    "candle", "cheer", "chin", "choke", "clean", "clever", "clock", "coal", "cobble", "cockle", "coin", "collar", "conker", "cook", "crab", "crack", "crawl", "crease", "creep", "crescent", "crest", "cross", "curve", 
    "dance", "dandy", "dare", "dark", "dash", "deep", "dew", "dim", "dog", "drape", "dread", "dream", "drift", "drop", "dry", "dust",
    "eager", "early", "easy", "egg", "elbow", "elf", "ember", "end", "envy",
    "face", "fang", "far", "farm", "father", "feather", "fever", "finger", "flake", "flannel", "fleck", "fool", "foot", "forge", "fossil", "fright", "frock", "fun", "funk", "funnel", "fur",
    "gallop", "gallow", "gamble", "gap", "gay", "gaze", "glove", "gold", "good", "grab", "grain", "grass", "gray", "great", "gull", "gum", "gut",
    "hair", "hall", "hand", "harm", "harp", "harsh", "hat", "haunt", "hay", "head", "health", "heap", "heart", "heir", "herb", "hill", "hinder", "hint", "hit", "hold", "honey", "honor", "host", "hot", "hound", "hurry", "hush",
    "idol", "imp", "iron", 
    "jangle", "jiggle", "joint", "judge", "jug", "juice",
    "karma", "keep", "keg", "kennel", "kettle", "key", "kick", "kid", "kidney", "kind", "king", "knuckle",
    "lady", "lamp", "large", "lash", "lay", "leather", "leg", "lemon", "lever", "lime", "lip", "lock", "lode", "long", "love", "loyal", "lung",
    "man", "march", "mask", "meal", "meat", "mellow", "might", "minute", "moist", "mold", "monk", "mop", "motor", "muscle", "mush",
    "nail", "nap", "near", "neat", "neck", "nest", "new", "night", "nip", "noon", "nose", "nut",
    "old", "olive", "omen", "organ", "oval",
    "paper", "parch", "patch", "pay", "peach", "pedal", "peel", "pick", "pin", "pint", "play", "pluck", "plumb", "pocket", "polish", "pond", "pop", "pouch", "prawn", "press", "pretty", "pringle", "pull", "punt", "pure",
    "quarrel", "quench", "quiver",
    "rail", "rain", "ram", "reach", "roll", "rope", "round", "rib", "ridge", "ring", "rinse", "ripple", "rose", "rub", 
    "sack", "salad", "search", "season", "seat", "scallop", "score", "shackle", "shake", "sharp", "shed", "shudder", "shut", "sick", "side", "silver", "sin", "skip", "slam", "sleep", "slope", "slow", "slumber", "smootch", "smooth", "snore", "snort", "socket", "soft", "sound", "spine", "splinter", "split", "spring", "sprout", "squash", "star", "starch", "steal", "steam", "steel", "stew", "stiff", "stitch", "stone", "stool", "strange", "strangle", "strap", "strike", "strum", "study", "suckle", "suffer", "sun", "sweep", "sweet",
    "tall", "table", "tail", "tea", "temper", "tank", "tart", "tender", "tent", "thread", "throb", "thrush", "thumb", "tight", "time", "tint", "toad", "tongue", "tool", "top", "tough", "tower", "track", "trample", "tread", "treat", "trump", "twitch", 
    "usher", "utter",
    "veil", "vile", "vine", 
    "wand", "waft", "war", "warm", "wart", "waste", "wave", "way", "wear", "weasle", "weather", "weep", "weight", "west", "whimper", "whip", "whistle", "white", "wick", "wind", "wine", "winter", "wipe", "wise", "wish", "witch", "wolf", "wonder", "work", "worn", "wrack", "wreck",
];