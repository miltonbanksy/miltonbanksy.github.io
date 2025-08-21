const STORAGE_KEY = "lastSmokeTime";
let timerInterval = null;

const prompts = [
  "Smokers have no problem in seeing that heroin will do absolutely nothing for them and that they neither need nor want it.\n\nYou don’t have to keep convincing yourself that heroin will do absolutely nothing for you.\n\nSo why do you think heroin addicts have this great desire to inject themselves with the drug?\n\nDo you envy them?\n\nOr do you thank your lucky stars that you’re not going through the same hell as them?\n\nIf you could help them, wouldn’t you tell them to stop?\n\nWhy do you think they can’t see their predicament in the same way as you?\n\nCould it be because their perspective has been distorted by the drug?\n\nNow consider this: non smokers regard you and your predicament in exactly the same way.\n\nIt’s clear to them that there is no pleasure and that smoking leaves you feeling more insecure, unrelaxed and distracted.\n\nTheir perception is not distorted by any drug.",
  "If you believe that you lack the willpower to quit smoking, then you haven’t yet understood the nature of the trap you’re in.\n\nThe more you will yourself to quit, the more you build up the belief that you’re depriving yourself of something precious, and so the more you crave the very thing you’re trying to give up.",
  "TRUTH: SMOKING DOES NOTHING FOR YOU WHATSOEVER.\n\nWhen you accept this as a fact, all desire disappears.",
  "Do you fear that life will be worse without cigarettes?\n\nThe only reason you might think life will be worse without cigarettes is because your addiction makes you miserable when you don’t smoke. As long as you continue to feed the Little Monster, this will be the case.\n\nLose the cigarettes and the fear goes too.",
  "When you choose not to smoke...\n\nYOU ARE NOT GIVING UP ANYTHING.\n\nYOU ARE MAKING WONDERFUL GAINS.\n\nBegin not with a feeling of doom and gloom, but instead with a feeling of elation and excitement.",
  "The ONLY reason I smoke is to feed the Little Monster – addiction.",
  "I am in an ingenious trap that makes me think smoking gives me pleasure and/or a crutch when, in fact, it does the opposite.",
  "Do you fear that if you don't smoke, you will be unable to handle stress and that you will fail?\n\nDo you fear that if you don't smoke, you will be unable to concentrate and that you will fail?\n\nThe fear of failure is illogical.\n\nThe fear of failure drives actors to learn their lines.\n\nThe fear of failure drives musicians to master their instruments.\n\nThe fear of success is caused by nicotine addiction and brainwashing.\n\nRemove them and the fear goes too.",
  "As a non-smoker, think about everything you stand to gain.\n\nHow proud will those around you be?\n\nHow proud will you feel?",
  "Look at the time since you last smoked. I will appreciate that time. I will build on it!",
  "I need to think seriously about the cost of smoking. I'm frustrated at myself for burning away that money. I can use it. I can save it. Any option is better than burning it away.",
  "A cigarette is an object that my brain has associates with relief, but it could really be any object, yet, a cigarette is the absolute worst object I could choose to fool myself with.",
  "Chocolate and candies are are highly desirable, yet, I don't constantly think about my next chocolate fix, and even if I did crave chocolate, it's far healthier than having a cigarette.",
  "I will imagine for a moment, being a non-smoker. I imagine going through life without worrying about when I can smoke next. I want to enjoy life without that extra anxiety and stress.",
  "Life is really hard. Smoking doesn't solve that. It just adds another layer to the my problem.",
  "Imagine a clean, smoke-free environment, and fresh smelling clothes. I want to think about how hard Joy works to clean our house. Why do I want to make that even more difficult, with smoke stains and smells.",
  "I must consider how my passive smoking and second hand smoke affects other people. Joy already has asthma and breathing problems. If I can't or won't do it for myself, I should do it for Joy. There's no excuse for harming others through my own selfishness and stubborness",
  "Irreparable problems are the next stage from smoker's cough. I will act now, by not failing. I will beat this craving.",
  "If life really is that bad, I will stick a rope around my neck, instead of a cigarette in my mouth. Really think about that."
]


// Called when 'I Smoked' button is clicked
function stamp_time_now() {
  const now = new Date();
  localStorage.setItem(STORAGE_KEY, now.toISOString());
  update_last_log(now);
  start_timer(now);
}


// Load and display the last logged time
function load_last_log(){
  const savedTime = localStorage.getItem(STORAGE_KEY);
  if (savedTime) {
    const savedDate = new Date(savedTime);
    update_last_log(savedDate);
    start_timer(savedDate);
  } else {
    document.getElementById("label_last_log").innerHTML = "No smoking record yet.";
    document.getElementById("time_since").innerHTML = "";
  }
}


function update_last_log(dateObj){
  const dateString = dateObj.toDateString();
  const timeString = dateObj.toLocaleTimeString();
  const displayText = `${dateString} at ${timeString}`
  document.getElementById("label_last_log").innerHTML = displayText;
}

// Start or restart the live timer
function start_timer(startTime) {
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  function update_time_since() {
    const now = new Date();
    const diffMs = now - startTime;

    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const output = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    document.getElementById("time_since").innerText = output;
  }

  update_time_since(); // run once immediately
  timerInterval = setInterval(update_time_since, 1000); // then update every second
}


let promptIndex = 0;

function prompts_start() {
  const promptText = prompts[promptIndex];
  document.getElementById("display_prompts").innerText = promptText;

  // Move to the next prompt, loop back to 0 if at the end
  promptIndex = (promptIndex + 1) % prompts.length;
}

const clickCigPrompts = [
  "I understand that nicotine is an addictive drug.",
  "Nicotine withdrawal causes the stress and anxiety.",
  "I don't want to smoke a cigarette.",
  "I don't need to smoke a cigarette.",
  "I am free to choose not to smoke.",
  "I don't like the smell of smoke.",
  "The taste is vile.",
  "I can't stand coughing.",
  "I don't smoke.",
  "I am certain that smoking does nothing for me.",
  "Smoking doesn't provide me with any pleasure or support.",
  "I understand that I am not giving up anything.",
  "I understand that no smoker has every enjoyed smoking.",
  "I understand that willpower won't help me to quit - if anything it will make it harder.",
  "I understand that my addiction to nicotine is all to do with the drug and nothing to do with my personality.",
  "I understand that there is no need to avoid the triggers when I have no desire to smoke."
];

function clickCig(){
  alert(clickCigPrompts.join("\n"))
}


// When page loads...
window.addEventListener("load", load_last_log); // 'load' waits for everything to load first.