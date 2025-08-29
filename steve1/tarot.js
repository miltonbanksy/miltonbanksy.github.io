const tarot_cards = {
    "Cups":{
        "suit": "Cups", "suit element": "water",
        "suit keywords": "emotion, feelings, habits, healing, intuition, relationships, spirituality",
        "suit duality": "passive, receptive",
        "suit astrology": "cancer, scorpio, pisces",
        "suit alt names": "chalices, goblets, vessels",
        "suit jung": "feeling", "suit direction": "West", "suit time": "Autumn, Dusk",
        "cards":{
            "Ace of Cups":{
                "value": 1,
                "yes-no": "yes",
                "upright keywords": "love, new feelings, emotional awakening, creativity, spirituality, intuition, joy, happiness",
                "reversed keywords": "coldness, emptiness, emotional loss, blocked creativity, feeling unloved, gloominess, sadness",
                "symbols": [
                    "lotuses in water (enlightenment, rebirth, fertility)",
                    "dove (peace, love, divine inspiration)",
                    "five streams of water (four elements and aether)"
                ]
            },
            "Two of Cups":{
                "value": 2,
                "yes-no": "yes",
                "upright keywords": "unity, partnership, attraction, connection, close bonds, mutual respect, emotional intimacy",
                "reversed keywords": "separation, rejection, division, imbalance, tension, bad communication, withdrawal, distance",
                "symbols": [
                    "lion (courage, justice)",
                    "caduceus (balance, healing, harmony)",
                    "two figures (equal footing, trust)"
                ]
            },
            "Three of Cups":{
                "value": 3,
                "yes-no": "yes",
                "upright keywords": "friendship, community, celebrations, gatherings, social events, emotional fulfillment, support",
                "reversed keywords": "gossip, scandal, excess, isolation, loneliness, solitude, imbalanced social life, emotional disconnection",
                "symbols": [
                    "clear skies (easy times, wisdom)",
                    "fruits (abundance, joyful gatherings)",
                    "red robe (passion, vitality)"
                ]
            },
            "Four of Cups":{
                "value": 4,
                "yes-no": "maybe",
                "upright keywords": "apathy, contemplation, discontent, emotional detachment, introspection, lack of excitement, stagnation",
                "reversed keywords": "clarity, awareness, acceptance, choosing happiness, new beginnings, emotional growth, engagement",
                "symbols": [
                    "crossed arms (being closed to others)",
                    "tree (growth, creation, knowledge)",
                    "hand (divine intervention, new opportunities)"
                ]
            },
            "Five of Cups":{
                "value": 5,
                "yes-no": "no",
                "upright keywords": "loss, grief, disappointment, sadness, mourning, discontent, self-pity, regret, emotional pain",
                "reversed keywords": "acceptance, moving on, finding peace, contentment, seeing positives, emotional healing, resilience",
                "symbols": [
                    "black cloak (mourning, grief)",
                    "overturned cups (past failures, negativity)",
                    "bridge in distance (ability to overcome obstacles)"
                ]
            },
            "Six of Cups":{
                "value": 6,
                "yes-no": "yes",
                "upright keywords": "nostalgia, memories, familiarity, healing, comfort, sentimentality, pleasure, joy of childhood",
                "reversed keywords": "stuck in the past, clinging to memories, inability to move on, lack of growth, feeling disconnected",
                "symbols": [
                    "castle (security, comfort, protection)",
                    "children (innocence, nostalgia, memories)",
                    "flowers (growth, beauty, renewal)"
                ]
            },
            "Seven of Cups":{
                "value": 7,
                "yes-no": "no",
                "upright keywords": "choices, searching for purpose, illusion, fantasy, daydreaming, wishful thinking, indecision",
                "reversed keywords": "lack of purpose, disarray, confusion, distractions, avoidance, clarity in choices, facing reality",
                "symbols": [
                    "jewelry (wealth, money)",
                    "clouds (confusion, uncertainty, contemplation)",
                    "snake (warning, consequences)"
                ]
            },
            "Eight of Cups":{
                "value": 8,
                "yes-no": "maybe",
                "upright keywords": "abandonment, walking away, letting go, searching for truth, leaving behind, self-discovery",
                "reversed keywords": "staying in comfort zone, fear of change, lack of direction, emotional attachment, avoiding decisions",
                "symbols": [
                    "mountains (obstacles, difficulties, struggles)",
                    "moon (intuition, subconscious, the unknown)",
                    "pathway (journey, transition, moving on)"
                ]
            },
            "Nine of Cups":{
                "value": 9,
                "yes-no": "yes",
                "upright keywords": "wishes coming true, contentment, satisfaction, success, achievements, recognition, pleasure",
                "reversed keywords": "unhappiness, lack of fulfillment, disappointment, superficiality, disillusionment, inner conflict",
                "symbols": [
                    "red hat (passion, vitality)",
                    "white robe (purity, innocence)",
                    "confident pose (pride, achievement)"
                ]
            },
            "Ten of Cups":{
                "value": 10,
                "yes-no": "yes",
                "upright keywords": "happiness, fulfillment, emotional stability, domestic harmony, security, love, family connections",
                "reversed keywords": "unhappy home, separation, domestic conflict, disharmony, isolation, unmet expectations, emotional distance",
                "symbols": [
                    "adults (partnership, respect, understanding)",
                    "rainbow (dreamings coming true, fulfillment",
                    "children (love, affection, family)"
                ]
            },
            "Page of Cups":{
                "value": 11,
                "yes-no": "yes",
                "upright keywords": "idealism, sensitivity, creativity, intuition, emotional openness, new beginnings, self-expression",
                "reversed keywords": "emotional block, creative stagnation, insecurity in relationships, avoidance of reality, self-doubt",
                "symbols": [
                    "lotuses on tunic (enlightenment, rebirth, fertility)",
                    "fish (messages, inspiration, new ideas)",
                    "sea (creativity, dreams, emotions)"
                ]
            },
            "Knight of Cups":{
                "value": 12,
                "yes-no": "yes",
                "upright keywords": "idealist, charming, artistic, graceful, tactful, diplomatic, mediator, negotiator",
                "reversed keywords": "disappointment, tantrums, moodiness, turmoil, avoiding conflict, vanity, emotional instability",
                "symbols": [
                    "winged helm (divine creativity, messenger)",
                    "river (emotional movement, fluidity)",
                    "fish on cloak (intuition, creativity)"
                ]
            },
            "Queen of Cups":{
                "value": 13,
                "yes-no": "yes",
                "upright keywords": "compassion, warmth, kindness, intuition, healer, supportive, emotional health, self-love",
                "reversed keywords": "insecurity, neediness, emotional instability, dependence, overwhelm, neglecting self-care, martyrdom",
                "symbols": [
                    "water nymphs (inner child, unconsciousness)",
                    "shells (inner wisdom, protection, mystery)",
                    "blue robes (wisdom, serenity, unconscious)"
                ]
            },
            "King of Cups":{
                "value": 14,
                "yes-no": "yes",
                "upright keywords": "wise, diplomatic, emotional balance, creativity, compassion, advisor, self-awareness",
                "reversed keywords": "overwhelmed, anxious, cold, repressed, withdrawn, manipulative, selfish, emotionally unstable",
                "symbols": [
                    "fish (messages, inspiration, new ideas)",
                    "ship (exploration, movement)",
                    "scepter (authority, power)"
                ]
            }
        }
    },
    "Pentacles":{
        "suit": "Pentacles", "suit element": "earth",
        "suit keywords": "nature, body, material world, stability, responsibility, practicality, experience, reliability",
        "suit duality": "passive",
        "suit astrology": "Taurus, Virgo, Capricorn",
        "suit alt names": "coins, disks",
        "suit jung": "sensation", "suit direction": "North", "suit time": "Winter, Midnight",
        "cards":{
            "Ace of Pentacles":{
                "value": 1,
                "yes-no": "yes",
                "upright keywords": "new opportunities, resources, abundance, prosperity, security, stability, manifestation",
                "reversed keywords": "missed opportunities, financial instability, poor investments, scarcity mindset, emotional insecurity",
                "symbols": [
                    "hand (divine intervention, opportunity)",
                    "garden (abundance, fertility)",
                    "mountains behind (effort, obstacles to be overcome)"
                ]
            },
            "Two of Pentacles":{
                "value": 2,
                "yes-no": "maybe",
                "upright keywords": "balancing resources, adaptation, resourcefulness, flexibility, managing priorities, juggling responsibilities",
                "reversed keywords": "imbalance, unorganized, overwhelmed, messiness, chaos, overextending, rejecting love, too many bills",
                "symbols": [
                    "ocean wave (fluctuations, ebb and flow)",
                    "infinity (balance, possibilities)",
                    "juggling (adaptability, speed)"
                ]
            },
            "Three of Pentacles":{
                "value": 3,
                "yes-no": "yes",
                "upright keywords": "teamwork, collaboration, shared goals, apprenticeship, effort, pooling energy, diverse skills",
                "reversed keywords": "lack of coheshion, lack of teamwork, apathy, poor motivation, conflict, ego, competition",
                "symbols": [
                    "apprentice (skill, learning)",
                    "priests (planning, vision, trust)",
                    "stone structure (foundation, stability)"
                ]
            },
            "Four of Pentacles":{
                "value": 4,
                "yes-no": "no",
                "upright keywords": "possessiveness, insecurity, hoarding, stablility, security, materialism, wealth, boundaries",
                "reversed keywords": "generosity, giving, spending, openness, financial insecurity, reckless spending, release from past",
                "symbols": [
                    "pentacles under feet (suppression, oppression)",
                    "crown (focus, authority, control)",
                    "city (protection, boundaries, isolation)"
                ]
            },
            "Five of Pentacles":{
                "value": 5,
                "yes-no": "no",
                "upright keywords": "hardship, loss, isolation, feeling abandoned, adversity, struggle, unemployment, alienation",
                "reversed keywords": "positive changes, recovery from loss, overcoming adversity, forgiveness, feeling welcomed, renewed hope",
                "symbols": [
                    "snow (isolation, struggle, purification)",
                    "windows (hope, opportunity, safety)",
                    "crutches (support, reliance, dependency)"
                ]
            },
            "Six of Pentacles":{
                "value": 6,
                "yes-no": "yes",
                "upright keywords": "generosity, charity, community, support, sharing, giving and receiving, gratitude, reciprocity, kindness",
                "reversed keywords": "power struggles, selfishness, inequality, exploitation, unreciprocated generosity, financial instability",
                "symbols": [
                    "giving figure (generosity, wealth)",
                    "scales (balance, fairness)",
                    "beggars (charity, gratitude)"
                ]
            },
            "Seven of Pentacles":{
                "value": 7,
                "yes-no": "maybe",
                "upright keywords": "harvest, rewards, growth, progress, perseverance, patience, planning, long-term vision",
                "reversed keywords": "unfinished work, procrastination, low effort, waste of time, lack of growth, setbacks, impatience",
                "symbols": [
                    "crops (growth, fruit of one's laboor)",
                    "field (growth, cultivation, labor)",
                    "figure's pose (exhaustion, disatisfaction)"
                ]
            },
            "Eight of Pentacles":{
                "value": 8,
                "yes-no": "yes",
                "upright keywords": "skill, talent, craftmanship, dedication, commitment, mastery, accomplishment, high standards",
                "reversed keywords": "lack of quality, rushed job, bad reputation, lack of motivation, mediocrity, laziness, low skill",
                "symbols": [
                    "hammer (development, hard work)",
                    "town (home, distractions)",
                    "figure's clothes (red for passion, blue for wisdom)"
                ]
            },
            "Nine of Pentacles":{
                "value": 9,
                "yes-no": "yes",
                "upright keywords": "rewarded efforts, success, achievement, independence, leisure, material security, self-sufficiency",
                "reversed keywords": "being guarded, living beyond means, material instability, reckless spending, superficiality",
                "symbols": [
                    "walled garden (luxury, protection)",
                    "falcon (freedom, ambition)",
                    "grapes (abundance, prosperity, havest)"
                ]
            },
            "Ten of Pentacles":{
                "value": 10,
                "yes-no": "yes",
                "upright keywords": "legacy, roots, family, ancestry, inheritance, windfall, foundations, privilege, affluence, stability, tradition",
                "reversed keywords": "family disputes, bankruptcy, debt, fleeting success, conflict over money, instability, breaking traditions",
                "symbols": [
                    "bridge (connections, harmony)",
                    "family (legacy, heritage, relationships)",
                    "dogs (loyalty, companionship)"
                ]
            },
            "Page of Pentacles":{
                "value": 11,
                "yes-no": "yes",
                "upright keywords": "ambitious, diligent, goal oriented, planner, consistent, star student, studious, grounded, loyal, faithful, dependable",
                "reversed keywords": "foolish, immature, irresponsible, lazy, underachiever, procrastinator, missed chances, poor prospects",
                "symbols": [
                    "green robes (spiritual growth, harmony)",
                    "landscape (growth, fertility, potential)",
                    "red hat (passion, vitality)"
                ]
            },
            "Knight of Pentacles":{
                "value": 12,
                "yes-no": "yes",
                "upright keywords": "practical, reliable, efficient, stoic, slow and steady, hard-working, committed, patient, conservative",
                "reversed keywords": "workaholic, laziness, dull, boring, no initiative, cheap, irresponsible, gambler, risky investments",
                "symbols": [
                    "field (growth, cultivation, labor)",
                    "black horse (unseen strengths, instinct)",
                    "red robes and bridle (passion, vitality)"
                ]
            },
            "Queen of Pentacles":{
                "value": 13,
                "yes-no": "yes",
                "upright keywords": "generous, caring, nurturing, homebody, good business sense, practical, comforting, welcoming, sensible, luxurious",
                "reversed keywords": "selfish, unkempt, jealous, insecure, greedy, materialistic, gold digger, intolerant, self-absorbed, envious",
                "symbols": [
                    "red robes and bridle (passion, vitality)",
                    "rabbit (fertility, prosperity)",
                    "floral arbor (beauty, nature)"
                ]
            },
            "King of Pentacles":{
                "value": 14,
                "yes-no": "yes",
                "upright keywords": "abundance, prosperity, security, ambitious, safe, kind, patriarchal, protective, businessman, provider, sensual, reliable",
                "reversed keywords": "greed, materialistic, wasteful, chauvanist, poor financial decisions, gambler, exploitative, possessive",
                "symbols": [
                    "grapes (abundance, prosperity, harvest)",
                    "bulls on throne (strength, determination, groundedness)",
                    "castle (security, foundation, stability)"
                ]
            }
        }
    },
    "Swords":{
        "suit": "Swords", "suit element": "air",
        "suit keywords": "awareness, logic, ideas, intellect, communication",
        "suit duality": "active",
        "suit astrology": "Gemini, Libra, Aquarius",
        "suit alt names": "spades",
        "suit jung": "thinking", "suit direction": "East", "suit time": "Spring, Dawn",
        "cards":{
            "Ace of Swords":{
                "value": 1,
                "yes-no": "yes",
                "upright keywords": "clarity, breakthrough, new ideas, concentration, vision, force, focus, truth",
                "reversed keywords": "confusion, miscommunication, hostility, arguments, destruction, chaos, uncertainty",
                "symbols": [
                    "sword (truth, clarity, knowledge)",
                    "clouds (conflict, confusion)",
                    "laurel wreath (victory, achievement)"
                ]
            },
            "Two of Swords":{
                "value": 2,
                "yes-no": "maybe",
                "upright keywords": "stalemate, difficult choices, stuck in the middle, denial, hidden information",
                "reversed keywords": "indecision, hesitancy, anxiety, too much information, no right choice, truth revealed",
                "symbols": [
                    "moon (intuition, hidden truths)",
                    "blindfold (indecision, lack of clarity)",
                    "crossed swords (conflict, stalemate)"
                ]
            },
            "Three of Swords":{
                "value": 3,
                "yes-no": "no",
                "upright keywords": "heartbreak, separation, sadness, grief, sorrow, upset, loss, trauma, tears",
                "reversed keywords": "healing, forgiveness, recovery, reconciliation, repressing emotions",
                "symbols": [
                    "heart (feelings in anguish)",
                    "rain (sadness, grief, temporary sorrow)",
                    "piercing swords (harsh words, criticism)"
                ]
            },
            "Four of Swords":{
                "value": 4,
                "yes-no": "maybe",
                "upright keywords": "rest, relaxation, peace, sanctuary, recuperation, self-protection, rejuvenation",
                "reversed keywords": "recovery, awakening, re-entering world, release from isolation, restlessness, burnout",
                "symbols": [
                    "three swords (hardships faced in life)",
                    "coffin (ending, rest, pause)",
                    "stained glass window (guidance, spirituality)"
                ]
            },
            "Five of Swords":{
                "value": 5,
                "yes-no": "no",
                "upright keywords": "arguments, disputes, aggression, bullying, intimidation, conflict, hostility, stress",
                "reversed keywords": "reconciliation, resolution, compromise, revenge, regret, remorse, cutting losses",
                "symbols": [
                    "figures in background (defeat, loss, sadness)",
                    "storm (continued conflict, restlessness)",
                    "swords being held (brutality, advantage, resourcefulness)"
                ]
            },
            "Six of Swords":{
                "value": 6,
                "yes-no": "yes",
                "upright keywords": "moving on, departure, leaving behind, distance, accepting lessons",
                "reversed keywords": "stuck in past, returning to trouble, running away from problems, trapped",
                "symbols": [
                    "still water (calm, serenity, making peace)",
                    "waves (worry, stress)",
                    "boat (transition, journeys)"
                ]
            },
            "Seven of Swords":{
                "value": 7,
                "yes-no": "no",
                "upright keywords": "lies, trickery, scheming, strategy, resourcefulness,sneakiness, cunning",
                "reversed keywords": "confession, conscience, regret, maliciousness, truth revealed",
                "symbols": [
                    "tents (civilization, wealth, power)",
                    "carried swords (stolen goods, advantages)",
                    "sneaking figure (secrecy, stealth)"
                ]
            },
            "Eight of Swords":{
                "value": 8,
                "yes-no": "no",
                "upright keywords": "trapped, restricted, victimised, paralysed, helpless, powerless, imprisonment",
                "reversed keywords": "freedom, release, taking control, survivor, facing fears, empowered, surrender",
                "symbols": [
                    "castle in background (proximity to safety, protection)",
                    "blindfold (restriction, lack of clarity)",
                    "puddles (intuition, subconscious)"
                ]
            },
            "Nine of Swords":{
                "value": 9,
                "yes-no": "no",
                "upright keywords": "fear, anxiety, negativity, breaking point, despair, nightmares, isolation",
                "reversed keywords": "recovery, learning to cope, facing life, finding help, shame, guilt, mental health issues",
                "symbols": [
                    "roses on quilt (beauty arising from truth)",
                    "dark background (fear, hopelessness)",
                    "sitting figure (isolation, vulnerability)"
                ]
            },
            "Ten of Swords":{
                "value": 10,
                "yes-no": "no",
                "upright keywords": "ruin, failure, bitterness, collapse, exhaustion, dead end, victimization, betrayal",
                "reversed keywords": "survival, improvement, healing, lessons learned, despair, relapse",
                "symbols": [
                    "yellow sky (dawn, morning, rebirth)",
                    "dark sky (despair, hopelessness)",
                    "face down figure (surrender, acceptance)"
                ]
            },
            "Page of Swords":{
                "value": 11,
                "yes-no": "yes",
                "upright keywords": "curious, witty, chatty, communicative, inspired, vigilant, alert, mental agility",
                "reversed keywords": "scatterbrained, cynical, sarcastic, gossipy, insulting, rude, lack of planning",
                "symbols": [
                    "wind (agility, speed, movement)",
                    "figure's stance (preparation, readiness to leap)",
                    "clouds and birds (coming storm, tension)"
                ]
            },
            "Knight of Swords":{
                "value": 12,
                "yes-no": "yes",
                "upright keywords": "assertive, direct, impatient, intellectual, daring, focused, perfectionist, ambitious",
                "reversed keywords": "rude, tactless, forceful, bully, aggressive, vicious, ruthless, arrogant",
                "symbols": [
                    "trees and clouds (storm, destruction)",
                    "charging stance (aggression, attack, action, speed)",
                    "butterflies on horse (transformation, psyche, soul)"
                ]
            },
            "Queen of Swords":{
                "value": 13,
                "yes-no": "yes",
                "upright keywords": "honest, independent, principled, fair, constructive criticism, objective, perceptive",
                "reversed keywords": "pessimistic, malicious, manipulative, harsh, bitter, spiteful, cruel, deceitful, unforgiving",
                "symbols": [
                    "cherub on throne (messengers, watchers, guardians)",
                    "butterflies (transformation, psyche, soul)",
                    "clouds on cloak (motion, air element)"
                ]
            },
            "King of Swords":{
                "value": 14,
                "yes-no": "yes",
                "upright keywords": "reason, authority, discipline, integrity, morality, serious, high standards, strict",
                "reversed keywords": "irrational, dictator, oppressive, inhumane, controlling, cold, ruthless, dishonest",
                "symbols": [
                    "butterflies on throne (transformation, psyche, soul)",
                    "blue roses (serenity, wisdom, maturity)",
                    "moons on throne (intuition, subconscious, the unknown)"
                ]
            }
        }
    },
    "Wands":{
        "suit": "Wands", "suit element": "fire",
        "suit keywords": "courage, energy, desire, drive, willpower, creativity, power",
        "suit duality": "active",
        "suit astrology": "Aries, Leo, Sagitarius",
        "suit alt names": "rods, clubs, scepters",
        "suit jung": "intuition", "suit direction": "South", "suit time": "Summer, Noon",
        "cards":{
            "Ace of Wands":{
                "value": 1,
                "yes-no": "yes",
                "upright keywords": "inspiration, creative spark, new initiative, passion, enthusiasm, energy, growth, opportunities",
                "reversed keywords": "delays, blocks, lack of passion, lack of energy, hesitancy, creative blocks, uninspired",
                "symbols": [
                    "wand (creativity, inspiration, potential)",
                    "flame (passion, energy, transformation)",
                    "hand (divine intervention, opportunity)"
                ]
            }
        }
    }
}