const tarot_cards = {
    "Cups":{
        "suit": "Cups", "suit element": "water",
        "suit keywords": "emotion, feelings, habits, healing, intuition, relationships, spirituality",
        "suit duality": "passive, receptive",
        "suit astrology": "cancer, scorpio, pisces",
        "suit alt names": "chalices, goblets, vessels",
        "suit jung": "feeling", "suit direction": "west", "suit time": "autumn, dusk",
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
        "suit": "Pentacles",
        "suit element": "",
        "suit keywords": "",
        "suit duality": "",
        "suit astrology": "",
        "suit alt names": "",
        "suit jung": "",
        "suit direction": "",
        "suit time": ""
    },
    "Swords":{
        "suit": "Pentacles",
        "suit element": "",
        "suit keywords": "",
        "suit duality": "",
        "suit astrology": "",
        "suit alt names": "",
        "suit jung": "",
        "suit direction": "",
        "suit time": ""
    },
    "Wands":{
        "suit": "Pentacles",
        "suit element": "",
        "suit keywords": "",
        "suit duality": "",
        "suit astrology": "",
        "suit alt names": "",
        "suit jung": "",
        "suit direction": "",
        "suit time": ""
    }
}