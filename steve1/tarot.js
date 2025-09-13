const tarot_major_arcana = {
    "The Fool (Air)":{
        "value": 0,
        "yes-no": "yes",
        "keywords": "New beginnings, Potential, Spontaneity, Innocence and idealism, Adventure, Taking risks",
        "upright keywords": "beginnings, freedom, innocence, originality, adventure, idealism, spontaneity",
        "reversed keywords": "reckless, careless, distracted, naive, foolish, gullible, stale, dull",
        "symbols": [
            "cliff (consequences, risks, leap of faith)",
            "dog (warning, companion, loyalty)",
            "white rose (purity, innocence)",
            "innocent traveller",
            "bag in hand",

        ]
    },
    "The Magician (Air)":{
        "value": 1,
        "yes-no": "yes",
        "keywords": "Willpower and manifestation, Resourcefulness and skill, Inspired action",
        "upright keywords": "willpower, desire, being resourceful, skill, ability, concentration, manifestation",
        "reversed keywords": "manipulation, cunning, trickery, wasted talent, illusion, deception",
        "symbols": [
            "tools (skills, abilities)",
            "pointing up to the heavens; pointing down to the Earth",
            "infinity (creation)",
        ]
    },
    "The High Priestess (Water)":{
        "value": 2,
        "yes-no": "maybe",
        "keywords": "Intuition, Mystery, Subconscious Mind, Innner Illumination, Divine Feminine",
        "upright keywords": "unconscious, intuition, mystery, spirituality, higher power, inner voice",
        "reversed keywords": "repressed intuition, hidden motives, superficiality, confusion, cognitive dissonance",
        "symbols": [
            "pillars (dualities, balance, masculine & feminine)",
            "crescent moon (femininity, cycles)",
            "veil (mystery, hidden truth)",
            "scroll of hidden knowledge"
        ]
    },
    "The Empress (Earth)":{
        "value": 3,
        "yes-no": "yes",
        "keywords": "Fertility & Growth, Nurturing Love, Abundance & Luxury, Connection to Nature",
        "upright keywords": "divine feminine, sensuality, fertility, nurturing, creativity, beauty, abundance, nature",
        "reversed keywords": "insecurity, overbearing, negligence, smothering, lack of growth, lack of progress",
        "symbols": [
            "wheat (fertitily, abundance)",
            "venus (beauty, love)",
            "crown (authority, power)",
        ]
    },"The Emperor (Fire)":{
        "value": 4,
        "yes-no": "maybe",
        "keywords": "Authority & Leadership, Structure & Discipline, Protection & Stability, Material Success",
        "upright keywords": "stability, structure, protection, authority, control, practicality, focus, discipline",
        "reversed keywords": "tyrant, domineering, rigid, stubborn, lack of discipline, recklessness",
        "symbols": [
            "rams heads (strength, assertiveness)",
            "scepter (influence, responsibility)",
            "mountains (stability, obstacles overcome)",
        ]
    },
    "The Hierophant (Earth)":{
        "value": 5,
        "yes-no": "maybe",
        "keywords": "Tradition, Mentorship & Education, Conformity, Marriage & Commitment, Moral Guidance",
        "upright keywords": "tradition, social groups, conventionality, conformity, education, knowledge, beliefs",
        "reversed keywords": "rebellion, unconventionality, non-conformity, new methods, ignorance",
        "symbols": [
            "temple crown (spriritual authority, wisdom)",
            "keys (knowledge, reavealing mysteries)",
            "hand gesture (blessing, guidance)",
        ]
    },
    "The Lovers (Air)":{
        "value": 6,
        "yes-no": "yes",
        "keywords": "Love & Relationships, Choices, Harmony & Values Alignment, Unity",
        "upright keywords": "love, unions, partnerships, relationships, choices, romance, balance, unity",
        "reversed keywords": "disharmony, imbalance, conflict, detachment, bad choices, indecision",
        "symbols": [
            "angel (divine guidance, protection)",
            "sun (clarity, joy)",
            "tree of knowledge (commitment, evolution)",
        ]
    },
    "The Chariot (Water)":{
        "value": 7,
        "yes-no": "yes",
        "keywords": "Victory & Success, Ambition & Willpower, Control & Self-Discipline, Forward Movement",
        "upright keywords": "success, ambition, determination, willpower, control, self-discipline, focus",
        "reversed keywords": "forceful, no direction, no control, powerless, aggression, obstacles",
        "symbols": [
            "sphinxes (unifying opposing forces)",
            "winged shield (protection, inspiration, navigation)",
            "chariot cover (connection to celestial)",
        ]
    },
    "Strength (Fire)":{
        "value": 8,
        "yes-no": "yes",
        "keywords": "Inner Strength, Courage & Compassion, Self-Control, Patience",
        "upright keywords": "courage, bravery, confidence, compassion, self-confidence, inner power",
        "reversed keywords": "self-doubt, weakness, low confidence, inadequacy, cowardice, forcefulness",
        "symbols": [
            "lion (animal nature, courage)",
            "infinity (endurance, resilience)",
            "flowers (beauty, serenity)",
        ]
    },
    "The Hermit (Earth)":{
        "value": 9,
        "yes-no": "maybe",
        "keywords": "Self-Reflection, Introspection, Solitude, Inner Guidance, Guidance from a Mentor",
        "upright keywords": "self-reflection, introspection, contemplation, withdrawal, solitude, search for self",
        "reversed keywords": "loneliness, isolation, recluse, being anti-social, rejection, returning to society",
        "symbols": [
            "lantern (wisdom, knowledge, illumination)",
            "staff (authority, guidance)",
            "robes (invisibility, concealment)",
        ]
    },
    "The Wheel of Fortune (Fire)":{
        "value": 10,
        "yes-no": "yes",
        "keywords": "Good Luck & Fortune, A Decisive Turning Point, Life Cycles, Karma",
        "upright keywords": "change, cycles, fate, decisive moments, luck, fortune, unexpected events",
        "reversed keywords": "bad luck, lack of control, clinging to control, unwelcome changes, delays",
        "symbols": [
            "sphinx (equilibrium)",
            "serpent (descent of evil)",
            "anubis (rise of good fortune)",
        ]
    },
    "Justice (Air)":{
        "value": 11,
        "yes-no": "maybe",
        "keywords": "Justice & Fairness, Accountability, Truth & Integrity, Cause & Effect",
        "upright keywords": "justice, karma, consequence, accountability, law, truth, honesty, integrity, cause and effect",
        "reversed keywords": "injustice, retribution, dishonesty, corruption, dishonesty, unfAirness, avoiding accountability",
        "symbols": [
            "sword (cause and effect, logic)",
            "scales (objectivity, fAirness)",
            "pillars (balance, law, structure)",
        ]
    },
    "The Hanged Man (Water)":{
        "value": 12,
        "yes-no": "maybe",
        "keywords": "Surrender & Sacrifice, New Perspective, Patience & Waiting, Contemplation",
        "upright keywords": "sacrifice, waiting, uncertainty, lack of direction, perspective, contemplation",
        "reversed keywords": "stalling, disinterest, stagnation, avoiding sacrifice, standstill, apathy",
        "symbols": [
            "halo (enlightenment from surrender)",
            "reversed position (new perspective)",
            "bound foot (sacrifice, acceptance, surrender)",
        ]
    },
    "Death (Water)":{
        "value": 13,
        "yes-no": "no",
        "keywords": "Transformation, Endings, Letting Go, Renewal & Rebirth",
        "upright keywords": "transformation, endings, change, transition, letting go, release",
        "reversed keywords": "fear of change, repeating negative patterns, resisting change, stagnancy, decay",
        "symbols": [
            "skeleton (that which endures death)",
            "armor (invincibility)",
            "white rose (purification, immortality)",
        ]
    },
    "Temperance (Fire)":{
        "value": 14,
        "yes-no": "yes",
        "keywords": "Balance & Harmony, Patience & Moderation, Healing & Purpose, Alchemy",
        "upright keywords": "balance, peace, patience, moderation, calm, tranquillity, harmony, serenity",
        "reversed keywords": "imbalance, excess, extremes, discord, recklessness, hastiness",
        "symbols": [
            "yellow triange (harmony between Earthly and spiritual)",
            "pouring cups (creating unity)",
            "foot in Water (connection to unconscious)",
        ]
    },
    "The Devil (Earth)":{
        "value": 15,
        "yes-no": "no",
        "keywords": "Addiction & Obsession, Materialism & Excess, Powerlessness & Bondage, Self-Sabotage",
        "upright keywords": "oppression, addiction, obsession, dependency, excess, powerlessness, limitations",
        "reversed keywords": "independence, freedom, revelation, release, reclaiming power, reclaiming control",
        "symbols": [
            "nudity (lack of protection, vulnerability)",
            "chains (bondage, addiction, enslavement)",
            "demon (ego, illusion, base desires)",
        ]
    },
    "The Tower (Fire)":{
        "value": 16,
        "yes-no": "no",
        "keywords": "Disaster & Destruction, Upheaval & Sudden Change, Revelation, Rebuilding",
        "upright keywords": "disaster, destruction, upheaval, trauma, sudden change, chaos",
        "reversed keywords": "averting disaster, delaying the inevitable, resisting change",
        "symbols": [
            "lightning bolt (sudden change, upheaval)",
            "crumbling tower (destruction of false beliefs, revelation)",
            "falling people (loss of control, liberation from constraints)",
        ]
    },
    "The Star (Air)":{
        "value": 17,
        "yes-no": "yes",
        "keywords": "Hope & Optimism, Healing & Renewal, Inspiration & Creativity, Trust in the Universe",
        "upright keywords": "hope, inspiration, positivity, faith, renewal, healing, rejuvenation",
        "reversed keywords": "hopelessness, despAir, negativity, lack of faith, despondent",
        "symbols": [
            "eight pointed star (morning star, direction)",
            "pouring Water (aquarius, calmness to life's flow)",
            "fertile ground (new growth, rejuvination)",
        ]
    },
    "The Moon (Water)":{
        "value": 18,
        "yes-no": "no",
        "keywords": "Intuition & Dreams, Illusion & Uncertainty, Hidden Truths, Release of Negativity",
        "upright keywords": "illusion, intuition, uncertainty, confusion, complexity, secrets, unconscious",
        "reversed keywords": "fear, deception, anxiety, misunderstanding, misinterpretation, clarity, understanding",
        "symbols": [
            "wolves (tame vs wild aspect of mind)",
            "crawfish (subconscious, dreams)",
            "towers (severity vs mercy)",
        ]
    },
    "The Sun (Fire)":{
        "value": 19,
        "yes-no": "yes",
        "keywords": "Success & Triumph, Vitality & Joy, Truth & clarity, Innocence & Inner Child",
        "upright keywords": "happiness, success, optimism, vitality, joy, confidence, happiness, truth",
        "reversed keywords": "blocked happiness, excessive enthusiasm, pessimism, unrealistic expectations, conceitedness",
        "symbols": [
            "sun (clarity, joy, success)",
            "child (innocence, playfulness)",
            "sunflowers (growth, vitality, positivity)",
        ]
    },
    "Judgement (Fire)":{
        "value": 20,
        "yes-no": "yes",
        "keywords": "Awakening & Renewal, Purpose & Calling, Absolution & Forgiveness, Important Decisions",
        "upright keywords": "self-evaluation, awakening, renewal, purpose, reflection, reckoning",
        "reversed keywords": "self-doubt, lack of self-awareness, failure to learn lessons, self-loathing",
        "symbols": [
            "angel (divine guidance, awakening)",
            "trumpet (call to action, revelation)",
            "rising dead (rebirth, transformation)",
        ]
    },
    "The World (Earth)":{
        "value": 21,
        "yes-no": "yes",
        "keywords": "Completion, Wholeness, Achievement & Success, New Beginnings, Sense of Belonging",
        "upright keywords": "completion, achievement, fulfilment, sense of belonging, wholeness, harmony",
        "reversed keywords": "lack of closure, lack of achievement, feeling incomplete, emptiness",
        "symbols": [
            "laurel wreath (achievement, completion)",
            "dancer (harmony, balance, movement, change)",
            "four elements (wholeness, integration)",
        ]
    }
}

const tarot_minor_arcana = {
    "Cups":{
        "suit": "Cups", "suit element": "Water",
        "suit keywords": "Emotions, feelings, relationships, intuition, and the heart.",
        "suit duality": "Passive, Receptive",
        "suit astrology": "cancer, scorpio, pisces",
        "suit alt names": "chalices, goblets, vessels",
        "suit jung": "Feeling", "suit direction": "West", "suit time": "Autumn, Dusk",
        "cards":{
            "Ace of Cups":{
                "value": "1. New beginnings. Pure, raw potential.",
                "yes-no": "yes",
                "keywords": "New Beginnings, Love & Compassion, Creativity & Intuition, Spriritual Awakening, Opportunity",
                "upright keywords": "love, new feelings, emotional awakening, creativity, spirituality, intuition, joy, happiness",
                "reversed keywords": "coldness, emptiness, emotional loss, blocked creativity, feeling unloved, gloominess, sadness",
                "symbols": [
                    "lotuses in Water (enlightenment, rebirth, fertility)",
                    "dove (peace, love, divine inspiration)",
                    "five streams of Water (four elements and aether)"
                ]
            },
            "Two of Cups":{
                "value": "2. Duality, Balance, Connections, Choices",
                "yes-no": "yes",
                "keywords": "Connection & Partnership, Harmony & Unity, Balance & Respect, Communication, Auspiciousness",
                "upright keywords": "unity, partnership, attraction, connection, close bonds, mutual respect, emotional intimacy",
                "reversed keywords": "separation, rejection, division, imbalance, tension, bad communication, withdrawal, distance",
                "symbols": [
                    "lion (courage, justice)",
                    "caduceus (balance, healing, harmony)",
                    "two figures (equal footing, trust)"
                ]
            },
            "Three of Cups":{
                "value": "3. Growth, Expansion, Manifestation",
                "yes-no": "yes",
                "keywords": "Friendship & Community, Celebration & Joy, Emotional Fulfillment, Collaboration & Support, Career Success",
                "upright keywords": "friendship, community, celebrations, gatherings, social events, emotional fulfillment, support",
                "reversed keywords": "gossip, scandal, excess, isolation, loneliness, solitude, imbalanced social life, emotional disconnection",
                "symbols": [
                    "clear skies (easy times, wisdom)",
                    "fruits (abundance, joyful gatherings)",
                    "red robe (passion, vitality)"
                ]
            },
            "Four of Cups":{
                "value": "4. Structure, Stability, Consolidation, Rest, Stagnation",
                "yes-no": "maybe",
                "keywords": "Apathy & Discontent, Missed Opportunities, Self-Absorption & Negativity, Nostalgia & Refusal, Emotional Withdrawal",
                "upright keywords": "apathy, contemplation, discontent, emotional detachment, introspection, lack of excitement, stagnation",
                "reversed keywords": "clarity, awareness, acceptance, choosing happiness, new beginnings, emotional growth, engagement",
                "symbols": [
                    "crossed arms (being closed to others)",
                    "tree (growth, creation, knowledge)",
                    "hand (divine intervention, new opportunities)"
                ]
            },
            "Five of Cups":{
                "value": "5. Conflict, Change, Challenge, Instability, Adversity",
                "yes-no": "no",
                "keywords": "Disappointment & Grief, Regret & Lost Opportunity, Focus on the Negative, Blindness to Blessings, Emotional Wounds",
                "upright keywords": "loss, grief, disappointment, sadness, mourning, discontent, self-pity, regret, emotional pain",
                "reversed keywords": "acceptance, moving on, finding peace, contentment, seeing positives, emotional healing, resilience",
                "symbols": [
                    "black cloak (mourning, grief)",
                    "overturned cups (past failures, negativity)",
                    "bridge in distance (ability to overcome obstacles)"
                ]
            },
            "Six of Cups":{
                "value": "6. Harmony, Solution, Adjustment, New Balance, Healing",
                "yes-no": "yes",
                "keywords":"Nostalgia & Childhood, Reconnection & Renewal, Comfort & Simplicity, Family & Generosity",
                "upright keywords": "nostalgia, memories, familiarity, healing, comfort, sentimentality, pleasure, joy of childhood",
                "reversed keywords": "stuck in the past, clinging to memories, inability to move on, lack of growth, feeling disconnected",
                "symbols": [
                    "castle (security, comfort, protection)",
                    "children (innocence, nostalgia, memories)",
                    "flowers (growth, beauty, renewal)"
                ]
            },
            "Seven of Cups":{
                "value": "7. Reflection, Introspection, Assessment, Choice",
                "yes-no": "no",
                "keywords": "Choices & Opportunities, Illusion & Fantasy, Wishful Thinking, Indecision, Subconscious & Imagination",
                "upright keywords": "choices, searching for purpose, illusion, fantasy, daydreaming, wishful thinking, indecision",
                "reversed keywords": "lack of purpose, disarray, confusion, distractions, avoidance, clarity in choices, facing reality",
                "symbols": [
                    "jewelry (wealth, money)",
                    "clouds (confusion, uncertainty, contemplation)",
                    "snake (warning, consequences)"
                ]
            },
            "Eight of Cups":{
                "value": "8. Movement, Achievement, Progress, Effort",
                "yes-no": "maybe",
                "keywords": "Leaving the Familiar, Spiritual Growth & Self Discovery, Embarking on a New Path",
                "upright keywords": "abandonment, walking away, letting go, searching for truth, leaving behind, self-discovery",
                "reversed keywords": "staying in comfort zone, fear of change, lack of direction, emotional attachment, avoiding decisions",
                "symbols": [
                    "mountains (obstacles, difficulties, struggles)",
                    "moon (intuition, subconscious, the unknown)",
                    "pathway (journey, transition, moving on)"
                ]
            },
            "Nine of Cups":{
                "value": "9. Culmination, Fruition, Near-Completion, Final Challenge",
                "yes-no": "yes",
                "keywords": "Wishes Fulfilled, Emotional Contentment, Joy & Happiness, Self-Satisfaction, Sensual Pleasures",
                "upright keywords": "wishes coming true, contentment, satisfaction, success, achievements, recognition, pleasure",
                "reversed keywords": "unhappiness, lack of fulfillment, disappointment, superficiality, disillusionment, inner conflict",
                "symbols": [
                    "red hat (passion, vitality)",
                    "white robe (purity, innocence)",
                    "confident pose (pride, achievement)"
                ]
            },
            "Ten of Cups":{
                "value": "10. Completion, Transition, Renewal (whether positive or negative), Seeds of a new beginning.",
                "yes-no": "yes",
                "keywords": "Emotional Fulfillment, Harmony & Peace, Family & Community, Lasting Happiness, Gratitude",
                "upright keywords": "happiness, fulfillment, emotional stability, domestic harmony, security, love, family connections",
                "reversed keywords": "unhappy home, separation, domestic conflict, disharmony, isolation, unmet expectations, emotional distance",
                "symbols": [
                    "adults (partnership, respect, understanding)",
                    "rainbow (dreamings coming true, fulfillment",
                    "children (love, affection, family)"
                ]
            },
            "Page of Cups":{
                "value": "The Pages represent the initial, curious, and youthful energy of each suit. They are learners, messengers, and have an open-hearted, creative approach.",
                "yes-no": "yes",
                "keywords": "Creativity & Imagination, Intuition & Inner Voice, New Beginnings & Messages, Emotional Expression & Vulnerability",
                "upright keywords": "idealism, sensitivity, creativity, intuition, emotional openness, new beginnings, self-expression",
                "reversed keywords": "emotional block, creative stagnation, insecurity in relationships, avoidance of reality, self-doubt",
                "symbols": [
                    "lotuses on tunic (enlightenment, rebirth, fertility)",
                    "fish (messages, inspiration, new ideas)",
                    "sea (creativity, dreams, emotions)"
                ]
            },
            "Knight of Cups":{
                "value": "The Knights are active, driven, and often impulsive. They represent the movement and action phase of the suit, carrying out the energy of the court with a focused, single-minded drive.",
                "yes-no": "yes",
                "keywords": "Romantic Idealism, Emotional Sensitivity, Artistic & Creative Expression, Offers & Invitations, Heartfelt Gestures",
                "upright keywords": "idealist, charming, artistic, graceful, tactful, diplomatic, mediator, negotiator",
                "reversed keywords": "disappointment, tantrums, moodiness, turmoil, avoiding conflict, vanity, emotional instability",
                "symbols": [
                    "winged helm (divine creativity, messenger)",
                    "river (emotional movement, fluidity)",
                    "fish on cloak (intuition, creativity)"
                ]
            },
            "Queen of Cups":{
                "value": "The Queens embody the mature, receptive, and intuitive energy of their suit. They have faced their inner challenges and now possess a deep, compassionate understanding. They are the emotional and creative power behind the scenes.",
                "yes-no": "yes",
                "keywords": "Emotional Intelligence, Intuition, Nurturing & Compassion, Authentic Expresssion, Boundaries, Creativity",
                "upright keywords": "compassion, warmth, kindness, intuition, healer, supportive, emotional health, self-love",
                "reversed keywords": "insecurity, neediness, emotional instability, dependence, overwhelm, neglecting self-care, martyrdom",
                "symbols": [
                    "Water nymphs (inner child, unconsciousness)",
                    "shells (inner wisdom, protection, mystery)",
                    "blue robes (wisdom, serenity, unconscious)"
                ]
            },
            "King of Cups":{
                "value": "The Kings represent the culmination of the suit's energy, demonstrating full mastery and control over its domain in the external world. They are the leaders, directing and controlling the suit's power with authority and sound judgment.",
                "yes-no": "yes",
                "keywords": "Emotional Mastery, Compassion & Wisdom, Leadership, Creativity & Intellect",
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
        "suit": "Pentacles", "suit element": "Earth",
        "suit keywords": "The physical world, material possessions, finances, health, and practical matters.",
        "suit duality": "Passive",
        "suit astrology": "Taurus, Virgo, Capricorn",
        "suit alt names": "coins, disks",
        "suit jung": "Sensation", "suit direction": "North", "suit time": "Winter, Midnight",
        "cards":{
            "Ace of Pentacles":{
                "value": "1. New beginnings. Pure, raw potential.",
                "yes-no": "yes",
                "keywords": "New Beginnings, Abundance & Prosperity, Manifestation, Grounded Potential, Holistic Well-Being",
                "upright keywords": "new opportunities, resources, abundance, prosperity, security, stability, manifestation",
                "reversed keywords": "missed opportunities, financial instability, poor investments, scarcity mindset, emotional insecurity",
                "symbols": [
                    "hand (divine intervention, opportunity)",
                    "garden (abundance, fertility)",
                    "mountains behind (effort, obstacles to be overcome)"
                ]
            },
            "Two of Pentacles":{
                "value": "2. Duality, Balance, Connections, Choices",
                "yes-no": "maybe",
                "keywords": "Balance, Adaptability, Juggling Priorities, Vitality & flow",
                "upright keywords": "balancing resources, adaptation, resourcefulness, flexibility, managing priorities, juggling responsibilities",
                "reversed keywords": "imbalance, unorganized, overwhelmed, messiness, chaos, overextending, rejecting love, too many bills",
                "symbols": [
                    "ocean wave (fluctuations, ebb and flow)",
                    "infinity (balance, possibilities)",
                    "juggling (adaptability, speed)"
                ]
            },
            "Three of Pentacles":{
                "value": "3. Growth, Expansion, Manifestation",
                "yes-no": "yes",
                "keywords": "Teamwork & Collaboration, Planning & Competence, Mastery of Skills, Education & Apprenticeship, Meaninful Work",
                "upright keywords": "teamwork, collaboration, shared goals, apprenticeship, effort, pooling energy, diverse skills",
                "reversed keywords": "lack of coheshion, lack of teamwork, apathy, poor motivation, conflict, ego, competition",
                "symbols": [
                    "apprentice (skill, learning)",
                    "priests (planning, vision, trust)",
                    "stone structure (foundation, stability)"
                ]
            },
            "Four of Pentacles":{
                "value": "4. Structure, Stability, Consolidation, Rest, Stagnation",
                "yes-no": "no",
                "keywords": "Security & Stability, Possessiveness & Control, Value & Abundance, Self-Preservation",
                "upright keywords": "possessiveness, insecurity, hoarding, stablility, security, materialism, wealth, boundaries",
                "reversed keywords": "generosity, giving, spending, openness, financial insecurity, reckless spending, release from past",
                "symbols": [
                    "pentacles under feet (suppression, oppression)",
                    "crown (focus, authority, control)",
                    "city (protection, boundaries, isolation)"
                ]
            },
            "Five of Pentacles":{
                "value": "5. Conflict, Change, Challenge, Instability, Adversity",
                "yes-no": "no",
                "keywords": "Hardship & Loss, Isolation & Rejection, Financial & Health Difficulties, Hidden Support, Resilience & Growth",
                "upright keywords": "hardship, loss, isolation, feeling abandoned, adversity, struggle, unemployment, alienation",
                "reversed keywords": "positive changes, recovery from loss, overcoming adversity, forgiveness, feeling welcomed, renewed hope",
                "symbols": [
                    "snow (isolation, struggle, purification)",
                    "windows (hope, opportunity, safety)",
                    "crutches (support, reliance, dependency)"
                ]
            },
            "Six of Pentacles":{
                "value": "6. Harmony, Solution, Adjustment, New Balance, Healing",
                "yes-no": "yes",
                "keywords": "Generosity & Balance, Reciprocity, Receiving Support, Good Karma",
                "upright keywords": "generosity, charity, community, support, sharing, giving and receiving, gratitude, reciprocity, kindness",
                "reversed keywords": "power struggles, selfishness, inequality, exploitation, unreciprocated generosity, financial instability",
                "symbols": [
                    "giving figure (generosity, wealth)",
                    "scales (balance, fAirness)",
                    "beggars (charity, gratitude)"
                ]
            },
            "Seven of Pentacles":{
                "value": "7. Reflection, Introspection, Assessment, Choice",
                "yes-no": "maybe",
                "keywords": "Patience & Waiting, Evaluation & Reflection, Long-Term Vision, Harvest Approaching",
                "upright keywords": "harvest, rewards, growth, progress, perseverance, patience, planning, long-term vision",
                "reversed keywords": "unfinished work, procrastination, low effort, waste of time, lack of growth, setbacks, impatience",
                "symbols": [
                    "crops (growth, fruit of one's laboor)",
                    "field (growth, cultivation, labor)",
                    "figure's pose (exhaustion, disatisfaction)"
                ]
            },
            "Eight of Pentacles":{
                "value": "8. Movement, Achievement, Progress, Effort",
                "yes-no": "yes",
                "keywords": "Dedication & Mastery, Hard Work & Perseverance, Meaningful Work, Skill Development, Professional Financial Growth",
                "upright keywords": "skill, talent, craftmanship, dedication, commitment, mastery, accomplishment, high standards",
                "reversed keywords": "lack of quality, rushed job, bad reputation, lack of motivation, mediocrity, laziness, low skill",
                "symbols": [
                    "hammer (development, hard work)",
                    "town (home, distractions)",
                    "figure's clothes (red for passion, blue for wisdom)"
                ]
            },
            "Nine of Pentacles":{
                "value": "9. Culmination, Fruition, Near-Completion, Final Challenge",
                "yes-no": "yes",
                "keywords": "Financial Independence & Security, Self-Sufficiency & Autonomy, Abundance & Luxury, Enjoying the Rewards",
                "upright keywords": "rewarded efforts, success, achievement, independence, leisure, material security, self-sufficiency",
                "reversed keywords": "being guarded, living beyond means, material instability, reckless spending, superficiality",
                "symbols": [
                    "walled garden (luxury, protection)",
                    "falcon (freedom, ambition)",
                    "grapes (abundance, prosperity, havest)"
                ]
            },
            "Ten of Pentacles":{
                "value": "10. Completion, Transition, Renewal (whether positive or negative), Seeds of a new beginning.",
                "yes-no": "yes",
                "keywords": "Abundance & Wealth, Family & Legacy, Stability & Security, Completion & Fulfillment, Generational Success",
                "upright keywords": "legacy, roots, family, ancestry, inheritance, windfall, foundations, privilege, affluence, stability, tradition",
                "reversed keywords": "family disputes, bankruptcy, debt, fleeting success, conflict over money, instability, breaking traditions",
                "symbols": [
                    "bridge (connections, harmony)",
                    "family (legacy, heritage, relationships)",
                    "dogs (loyalty, companionship)"
                ]
            },
            "Page of Pentacles":{
                "value": "The Pages represent the initial, curious, and youthful energy of each suit. They are learners, messengers, and have an open-hearted, creative approach.",
                "yes-no": "yes",
                "keywords": "Curiosity & Learning, Diligence & Focus, New Opportunities, Tangible Results, Messages and Communication",
                "upright keywords": "ambitious, diligent, goal oriented, planner, consistent, star student, studious, grounded, loyal, faithful, dependable",
                "reversed keywords": "foolish, immature, irresponsible, lazy, underachiever, procrastinator, missed chances, poor prospects",
                "symbols": [
                    "green robes (spiritual growth, harmony)",
                    "landscape (growth, fertility, potential)",
                    "red hat (passion, vitality)"
                ]
            },
            "Knight of Pentacles":{
                "value": "The Knights are active, driven, and often impulsive. They represent the movement and action phase of the suit, carrying out the energy of the court with a focused, single-minded drive.",
                "yes-no": "yes",
                "keywords": "Diligence & Hard Work, Patience & Methodical Approach, Responsibility, Reliability & Stability, Practicality",
                "upright keywords": "practical, reliable, efficient, stoic, slow and steady, hard-working, committed, patient, conservative",
                "reversed keywords": "workaholic, laziness, dull, boring, no initiative, cheap, irresponsible, gambler, risky investments",
                "symbols": [
                    "field (growth, cultivation, labor)",
                    "black horse (unseen strengths, instinct)",
                    "red robes and bridle (passion, vitality)"
                ]
            },
            "Queen of Pentacles":{
                "value": "The Queens embody the mature, receptive, and intuitive energy of their suit. They have faced their inner challenges and now possess a deep, compassionate understanding. They are the emotional and creative power behind the scenes.",
                "yes-no": "yes",
                "keywords": "Nurturning & Caring, Practicality & Responsibility, Material Security & Abundance, Patience & Persistence, Down-to-Earth Wisdom",
                "upright keywords": "generous, caring, nurturing, homebody, good business sense, practical, comforting, welcoming, sensible, luxurious",
                "reversed keywords": "selfish, unkempt, jealous, insecure, greedy, materialistic, gold digger, intolerant, self-absorbed, envious",
                "symbols": [
                    "red robes and bridle (passion, vitality)",
                    "rabbit (fertility, prosperity)",
                    "floral arbor (beauty, nature)"
                ]
            },
            "King of Pentacles":{
                "value": "The Kings represent the culmination of the suit's energy, demonstrating full mastery and control over its domain in the external world. They are the leaders, directing and controlling the suit's power with authority and sound judgment.",
                "yes-no": "yes",
                "keywords": "Abundance and Security, Achievement, Leadership and Responsibility, Stability and Tenacity, Practical Wisdom",
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
        "suit": "Swords", "suit element": "Air",
        "suit keywords": "The mind, intellect, logic, thinking, challenges, and communication.",
        "suit duality": "Active",
        "suit astrology": "Gemini, Libra, Aquarius",
        "suit alt names": "Spades",
        "suit jung": "Thinking", "suit direction": "East", "suit time": "Spring, Dawn",
        "cards":{
            "Ace of Swords":{
                "value": "1. New beginnings. Pure, raw potential.",
                "yes-no": "yes",
                "keywords": "Mental Breakthrough, Truth and Honesty, New Beginnings, Intellectual Prowess, Personal Power, Triumph and Victory",
                "upright keywords": "clarity, breakthrough, new ideas, concentration, vision, force, focus, truth",
                "reversed keywords": "confusion, miscommunication, hostility, arguments, destruction, chaos, uncertainty",
                "symbols": [
                    "sword (truth, clarity, knowledge)",
                    "clouds (conflict, confusion)",
                    "laurel wreath (victory, achievement)"
                ]
            },
            "Two of Swords":{
                "value": "2. Duality, Balance, Connections, Choices",
                "yes-no": "maybe",
                "keywords": "Indecision and Stalemate, Balance and Duality, Introspection, Waiting and Pause, Avoidance vs. Gathering Information",
                "upright keywords": "stalemate, difficult choices, stuck in the middle, denial, hidden information",
                "reversed keywords": "indecision, hesitancy, anxiety, too much information, no right choice, truth revealed",
                "symbols": [
                    "moon (intuition, hidden truths)",
                    "blindfold (indecision, lack of clarity)",
                    "crossed swords (conflict, stalemate)"
                ]
            },
            "Three of Swords":{
                "value": "3. Growth, Expansion, Manifestation",
                "yes-no": "no",
                "keywords": "Heartache and Betrayal, Grief and Loss, Rejection and Disappointment, Difficulty and Hardship, A Low Point",
                "upright keywords": "heartbreak, separation, sadness, grief, sorrow, upset, loss, trauma, tears",
                "reversed keywords": "healing, forgiveness, recovery, reconciliation, repressing emotions",
                "symbols": [
                    "heart (feelings in anguish)",
                    "rain (sadness, grief, temporary sorrow)",
                    "piercing swords (harsh words, criticism)"
                ]
            },
            "Four of Swords":{
                "value": "4. Structure, Stability, Consolidation, Rest, Stagnation",
                "yes-no": "maybe",
                "keywords": "Rest and Recuperation, Solitude and Reflection, Inner Peace, Rejuvenation, Mental Clarity",
                "upright keywords": "rest, relaxation, peace, sanctuary, recuperation, self-protection, rejuvenation",
                "reversed keywords": "recovery, awakening, re-entering world, release from isolation, restlessness, burnout",
                "symbols": [
                    "three swords (hardships faced in life)",
                    "coffin (ending, rest, pause)",
                    "stained glass window (guidance, spirituality)"
                ]
            },
            "Five of Swords":{
                "value": "5. Conflict, Change, Challenge, Instability, Adversity",
                "yes-no": "no",
                "keywords": "Conflict and Disagreement, Selfishness and Betrayal, Hostility and Harassment, Consequences of a 'Win'",
                "upright keywords": "arguments, disputes, aggression, bullying, intimidation, conflict, hostility, stress",
                "reversed keywords": "reconciliation, resolution, compromise, revenge, regret, remorse, cutting losses",
                "symbols": [
                    "figures in background (defeat, loss, sadness)",
                    "storm (continued conflict, restlessness)",
                    "swords being held (brutality, advantage, resourcefulness)"
                ]
            },
            "Six of Swords":{
                "value": "6. Harmony, Solution, Adjustment, New Balance, Healing",
                "yes-no": "yes",
                "keywords": "Transition and Movement, Leaving the Past Behind, Healing and Relief, Hope for the Future, Acceptance of Change",
                "upright keywords": "moving on, departure, leaving behind, distance, accepting lessons",
                "reversed keywords": "stuck in past, returning to trouble, running away from problems, trapped",
                "symbols": [
                    "still Water (calm, serenity, making peace)",
                    "waves (worry, stress)",
                    "boat (transition, journeys)"
                ]
            },
            "Seven of Swords":{
                "value": "7. Reflection, Introspection, Assessment, Choice",
                "yes-no": "no",
                "keywords": "Deceit and Betrayal, Dishonesty, Strategic Thinking, Hidden Truths, Getting Away With Something",
                "upright keywords": "lies, trickery, scheming, strategy, resourcefulness,sneakiness, cunning",
                "reversed keywords": "confession, conscience, regret, maliciousness, truth revealed",
                "symbols": [
                    "tents (civilization, wealth, power)",
                    "carried swords (stolen goods, advantages)",
                    "sneaking figure (secrecy, stealth)"
                ]
            },
            "Eight of Swords":{
                "value": "8. Movement, Achievement, Progress, Effort",
                "yes-no": "no",
                "keywords": "Feeling Trapped, Self-Imposed Limitations, Negative Mindset, Victim Mentality",
                "upright keywords": "trapped, restricted, victimised, paralysed, helpless, powerless, imprisonment",
                "reversed keywords": "freedom, release, taking control, survivor, facing fears, empowered, surrender",
                "symbols": [
                    "castle in background (proximity to safety, protection)",
                    "blindfold (restriction, lack of clarity)",
                    "puddles (intuition, subconscious)"
                ]
            },
            "Nine of Swords":{
                "value": "9. Culmination, Fruition, Near-Completion, Final Challenge",
                "yes-no": "no",
                "keywords": "Fear & Anxiety, Mental Torment, Despair & Distress, Unfounded Worries",
                "upright keywords": "fear, anxiety, negativity, breaking point, despAir, nightmares, isolation",
                "reversed keywords": "recovery, learning to cope, facing life, finding help, shame, guilt, mental health issues",
                "symbols": [
                    "roses on quilt (beauty arising from truth)",
                    "dark background (fear, hopelessness)",
                    "sitting figure (isolation, vulnerability)"
                ]
            },
            "Ten of Swords":{
                "value": "10. Completion, Transition, Renewal (whether positive or negative), Seeds of a new beginning.",
                "yes-no": "no",
                "keywords": "Endings & Collapse, Betrayal & Pain, Hitting Rock Bottom, The Lowest Point, Opportunity for Renewal",
                "upright keywords": "ruin, failure, bitterness, collapse, exhaustion, dead end, victimization, betrayal",
                "reversed keywords": "survival, improvement, healing, lessons learned, despAir, relapse",
                "symbols": [
                    "yellow sky (dawn, morning, rebirth)",
                    "dark sky (despAir, hopelessness)",
                    "face down figure (surrender, acceptance)"
                ]
            },
            "Page of Swords":{
                "value": "The Pages represent the initial, curious, and youthful energy of each suit. They are learners, messengers, and have an open-hearted, creative approach.",
                "yes-no": "yes",
                "keywords": "Intellectual Curiosity, Communication, New Ideas, Youthful Energy, Mental Agility",
                "upright keywords": "curious, witty, chatty, communicative, inspired, vigilant, alert, mental agility",
                "reversed keywords": "scatterbrained, cynical, sarcastic, gossipy, insulting, rude, lack of planning",
                "symbols": [
                    "wind (agility, speed, movement)",
                    "figure's stance (preparation, readiness to leap)",
                    "clouds and birds (coming storm, tension)"
                ]
            },
            "Knight of Swords":{
                "value": "The Knights are active, driven, and often impulsive. They represent the movement and action phase of the suit, carrying out the energy of the court with a focused, single-minded drive.",
                "yes-no": "yes",
                "keywords": "Action & Determination, Intellectual Clarity, Courage & Assertiveness, Initiative & Progress",
                "upright keywords": "assertive, direct, impatient, intellectual, daring, focused, perfectionist, ambitious",
                "reversed keywords": "rude, tactless, forceful, bully, aggressive, vicious, ruthless, arrogant",
                "symbols": [
                    "trees and clouds (storm, destruction)",
                    "charging stance (aggression, attack, action, speed)",
                    "butterflies on horse (transformation, psyche, soul)"
                ]
            },
            "Queen of Swords":{
                "value": "The Queens embody the mature, receptive, and intuitive energy of their suit. They have faced their inner challenges and now possess a deep, compassionate understanding. They are the emotional and creative power behind the scenes.",
                "yes-no": "yes",
                "keywords": "Clarity and Intellect, Independence and Self-Sufficiency, Honesty and Truth, Wisdom from Hardship, Fairness and Objectivity, Courage and Tenacity",
                "upright keywords": "honest, independent, principled, fAir, constructive criticism, objective, perceptive",
                "reversed keywords": "pessimistic, malicious, manipulative, harsh, bitter, spiteful, cruel, deceitful, unforgiving",
                "symbols": [
                    "cherub on throne (messengers, watchers, guardians)",
                    "butterflies (transformation, psyche, soul)",
                    "clouds on cloak (motion, Air element)"
                ]
            },
            "King of Swords":{
                "value": "The Kings represent the culmination of the suit's energy, demonstrating full mastery and control over its domain in the external world. They are the leaders, directing and controlling the suit's power with authority and sound judgment.",
                "yes-no": "yes",
                "keywords": "Intellectual Power, Authority & Control, Truth & Objectivity, Critical Thinking & Logic, Discipline & Organization",
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
        "suit": "Wands", "suit element": "Fire",
        "suit keywords": "Creativity, passion, ambition, willpower, and new impulses or energies towards action.",
        "suit duality": "Active",
        "suit astrology": "Aries, Leo, Sagitarius",
        "suit alt names": "rods, clubs, scepters",
        "suit jung": "Intuition", "suit direction": "South", "suit time": "Summer, Noon",
        "cards":{
            "Ace of Wands":{
                "value": "1. New beginnings. Pure, raw potential.",
                "yes-no": "yes",
                "keywords": "A New Beginning, Inspiration & Ideas, Action & Passion, Willpower, Opportunity",
                "upright keywords": "inspiration, creative spark, new initiative, passion, enthusiasm, energy, growth, opportunities",
                "reversed keywords": "delays, blocks, lack of passion, lack of energy, hesitancy, creative blocks, uninspired",
                "symbols": [
                    "wand (creativity, inspiration, potential)",
                    "flame (passion, energy, transformation)",
                    "hand (divine intervention, opportunity)"
                ]
            },
            "Two of Wands":{
                "value": "2. Duality, Balance, Connections, Choices",
                "yes-no": "yes",
                "keywords": "Decision-Making, Future Planning, Opportunity & Ambition, Inner Conflict",
                "upright keywords": "planning, first steps, making decisions, leaving comfort, taking risks",
                "reversed keywords": "bad planning, overanalyzing, not taking action, playing it safe, avoiding risk",
                "symbols": [
                    "globe (exploration, ambition)",
                    "castle (stability, future planning)",
                    "mountains (distant plans, obstacles)"
                ]
            },
            "Three of Wands":{
                "value": "3. Growth, Expansion, Manifestation",
                "yes-no": "yes",
                "keywords": "Foresight and Planning, Momentum and Confidence, New Opportunities and Expansion, Adventure and New Directions, Preparation for Action, Trusting Your Efforts",
                "upright keywords": "momentum, confidence, expansion, growth, foresight, looking ahead",
                "reversed keywords": "restriction, limitations, lack of progress, obstacles, delays, frustration",
                "symbols": [
                    "stone floor (achievements, firm foundations)",
                    "green cloak (renewed energy, growth)",
                    "wands in ground (stability, groundwork being laid)"
                ]
            },
            "Four of Wands":{
                "value": "4. Structure, Stability, Consolidation, Rest, Stagnation",
                "yes-no": "yes",
                "keywords": "Celebration and Happiness, Stability and Security, Harmony and Community, Completion and Reward, Rest and Reflection",
                "upright keywords": "community, home, celebrations, reunions, parties, gatherings, stability, belonging",
                "reversed keywords": "lack of support, instability, feeling unwelcome, transience, lack of roots, home conflict",
                "symbols": [
                    "dancing figures (happiness, harmony, freedom)",
                    "floral canopy (joy, abundance)",
                    "castle (security, foundation, stability)"
                ]
            },
            "Five of Wands":{
                "value": "5. Conflict, Change, Challenge, Instability, Adversity",
                "yes-no": "no",
                "keywords": "Conflict & Disagreement, Competition, Tension & Aggression, Ego & Pettiness, Lack of Cooperation",
                "upright keywords": "conflict, competition, arguments, aggression, tension, rivals, clashes of ego",
                "reversed keywords": "end of conflict, cooperation, agreements, truces, harmony, peace, avoiding conflict",
                "symbols": [
                    "five wands (unique idea or goal)",
                    "five figures (competition, conflict, rivalry)",
                    "battle (internal discord, external conflict)"
                ]
            },
            "Six of Wands":{
                "value": "6. Harmony, Solution, Adjustment, New Balance, Healing",
                "yes-no": "yes",
                "keywords": "Victory and Triumph, Recognition and Reward, Self-Confidence, Good News, Completion, Leadership, Public Acclaim",
                "upright keywords": "success, victory, triumph, rewards, recognition, praise, acclaim, pride",
                "reversed keywords": "failure, lack of recognition, no rewards, lack of achievement",
                "symbols": [
                    "horse (strength, intuition)",
                    "laurel wreath (victory, achievement, honor)",
                    "crowd (recognition, support)"
                ]
            },
            "Seven of Wands":{
                "value": "7. Reflection, Introspection, Assessment, Choice",
                "yes-no": "no",
                "keywords": "Defense and Protection, Courage and Assertion, Competition and Conflict, Resilience and Perseverance, Authenticity and Independence, Self-Belief",
                "upright keywords": "protectiveness, standing up for yourself, defending yourself, protecting territory",
                "reversed keywords": "giving up, admitting defeat, yielding, lack of self belief, surrender",
                "symbols": [
                    "clear skies (wisdom, clarity)",
                    "hill (advantage, confidence, higher ground)",
                    "other wands (challenges)"
                ]
            },
            "Eight of Wands":{
                "value": "8. Movement, Achievement, Progress, Effort",
                "yes-no": "yes",
                "keywords": "Swift Movement, Progress & Momentum, Communication & Travel, Action & Completion, End of Stagnation",
                "upright keywords": "movement, speed, progress, quick decisions, sudden changes, excitement",
                "reversed keywords": "waiting, slowness, chaos, delays, losing momentum, hastiness, being unprepared",
                "symbols": [
                    "landscape (peace, growth, goals)",
                    "flight (speed, communication)",
                    "clear skies (no obstacles, wisdom)"
                ]
            },
            "Nine of Wands":{
                "value": "9. Culmination, Fruition, Near-Completion, Final Challenge",
                "yes-no": "yes",
                "keywords": "Resilience, Perseverance, Vigilance and Boundaries, Inner Strength, Lessons from the Past",
                "upright keywords": "last stand, persistence, grit, resilience, perseverance, close to success, fatigue",
                "reversed keywords": "stubbornness, rigidity, defensiveness, refusing compromise, giving up",
                "symbols": [
                    "distant mountains (unnoticed possibilities)",
                    "bandage (healing, past struggles, distress)",
                    "fence of wands (defense, vigilance, fortification)"
                ]
            },
            "Ten of Wands":{
                "value": "10. Completion, Transition, Renewal (whether positive or negative), Seeds of a new beginning.",
                "yes-no": "no",
                "keywords": "Overload, Burde, Near Success, Stressful Effort, Call to Action",
                "upright keywords": "burden, responsibility, duty, stress, obligation, burning out, struggles",
                "reversed keywords": "failure to delegate, shouldering too much responsibility, collapse, breakdown",
                "symbols": [
                    "bend back (stress, difficulty)",
                    "mountain (struggles, challenges, obstacles)",
                    "house in distance (shelter, security)"
                ]
            },
            "Page of Wands":{
                "value": "The Pages represent the initial, curious, and youthful energy of each suit. They are learners, messengers, and have an open-hearted, creative approach.",
                "yes-no": "yes",
                "keywords": "Inspiration & Creativity, New Ventures, Enthusiasm & Discovery, Action & Courage",
                "upright keywords": "adventure, excitement, fresh ideas, cheerfulness, energetic, fearless, extroverted",
                "reversed keywords": "hasty, impatient, lacking ideas, tantrums, laziness, boring, unreliable, distracted",
                "symbols": [
                    "desert (resilience in hars environment)",
                    "salamanders (adaptability, renewal, transformation)",
                    "pyramids (goals, thriving in harsh conditions)"
                ]
            },
            "Knight of Wands":{
                "value": "The Knights are active, driven, and often impulsive. They represent the movement and action phase of the suit, carrying out the energy of the court with a focused, single-minded drive.",
                "yes-no": "yes",
                "keywords": "Energy and Action, Adventure and Exploration, Passion and Enthusiasm, Independence and Freedom, Boldness and Charisma",
                "upright keywords": "courageous, energetic, charming, hero, rebellious, hot tempered, free spirit",
                "reversed keywords": "arrogant, reckless, impatient, lack of self control, passive, volatile, domineering",
                "symbols": [
                    "salamanders (adaptability, renewal, transformation)",
                    "Horse (stamina, strength)",
                    "desert (resilience in hars environment)",
                ]
            },
            "Queen of Wands":{
                "value": "The Queens embody the mature, receptive, and intuitive energy of their suit. They have faced their inner challenges and now possess a deep, compassionate understanding. They are the emotional and creative power behind the scenes.",
                "yes-no": "yes",
                "keywords": "Confidence & Charisma, Creativity & Passion, Courage & Strength, Authenticity, Leadership & Advocacy, Optimism & Joy",
                "upright keywords": "confident, self-assured, passionate, determined, social, charismatic, vivacious, optimistic",
                "reversed keywords": "demanding, vengeful, low confidence, jealous, selfish, temperamental, bully",
                "symbols": [
                    "lions on throne (leo, instinct, majesty)",
                    "black cat (intuition, independence, mystery)",
                    "sunflower (vitality, warmth, positivity)",
                ]
            },
            "King of Wands":{
                "value": "The Kings represent the culmination of the suit's energy, demonstrating full mastery and control over its domain in the external world. They are the leaders, directing and controlling the suit's power with authority and sound judgment.",
                "yes-no": "yes",
                "keywords": "Leadership & Vision, Confidence & Determination, Bold Action, Passion & Enthusiasm, Implementation",
                "upright keywords": "leadership, vision, big picture, taking control, daring decisions, boldness, optimism",
                "reversed keywords": "forceful, domineering, tyrant, vicious, powerless, ineffective, weak leader",
                "symbols": [
                    "lions on throne (leo, instinct, majesty)",
                    "salamanders (adaptability, renewal, transformation)",
                    "crown (status, honor)",
                ]
            }
        }
    }
}