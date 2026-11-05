const KANA = [
  { kana: 'あ', sound: 'a', mnemonic: 'A fishhook curls around an upright line—say “ah!” as it catches you.', word: 'あさ', reading: 'asa', meaning: 'morning' },
  { kana: 'い', sound: 'i', mnemonic: 'Two reeds standing side by side make the long “ee” sound.', word: 'いぬ', reading: 'inu', meaning: 'dog' },
  { kana: 'う', sound: 'u', mnemonic: 'A little mouth pops open with a curved tongue: “oo!”', word: 'うみ', reading: 'umi', meaning: 'sea' },
  { kana: 'え', sound: 'e', mnemonic: 'Imagine an energetic bird with a bent beak saying “eh?”', word: 'えき', reading: 'eki', meaning: 'station' },
  { kana: 'お', sound: 'o', mnemonic: 'A round face with a little flourish looks surprised: “oh!”', word: 'おに', reading: 'oni', meaning: 'ogre' },
  { kana: 'か', sound: 'ka', mnemonic: 'The angled strokes look like a kite caught in a gust: “ka!”', word: 'かさ', reading: 'kasa', meaning: 'umbrella' },
  { kana: 'き', sound: 'ki', mnemonic: 'Picture a key with three little teeth: “kee.”', word: 'きく', reading: 'kiku', meaning: 'chrysanthemum' },
  { kana: 'く', sound: 'ku', mnemonic: 'A bird’s beak opens in a sharp angle to say “ku.”', word: 'くも', reading: 'kumo', meaning: 'cloud' },
  { kana: 'け', sound: 'ke', mnemonic: 'A kettle tips over its tall handle: “keh!”', word: 'けむり', reading: 'kemuri', meaning: 'smoke' },
  { kana: 'こ', sound: 'ko', mnemonic: 'Two neat strokes, like a corner with a top and a floor: “ko.”', word: 'こえ', reading: 'koe', meaning: 'voice' },
  { kana: 'さ', sound: 'sa', mnemonic: 'A sail catches a cross-breeze: “saa.”', word: 'さくら', reading: 'sakura', meaning: 'cherry blossom' },
  { kana: 'し', sound: 'shi', mnemonic: 'A fishing hook swoops down to the sea: “shee.”', word: 'しお', reading: 'shio', meaning: 'salt' },
  { kana: 'す', sound: 'su', mnemonic: 'A loop of string spins like a “suuu” swoosh.', word: 'すし', reading: 'sushi', meaning: 'sushi' },
  { kana: 'せ', sound: 'se', mnemonic: 'A little signpost points the way: “say” the sound “seh.”', word: 'せかい', reading: 'sekai', meaning: 'world' },
  { kana: 'そ', sound: 'so', mnemonic: 'A zigzag ribbon swirls in the breeze: “so!”', word: 'そら', reading: 'sora', meaning: 'sky' },
  { kana: 'た', sound: 'ta', mnemonic: 'A tall post with a crossbar stands at attention: “ta!”', word: 'たこ', reading: 'tako', meaning: 'octopus' },
  { kana: 'ち', sound: 'chi', mnemonic: 'A cheeky face with a curled smile says “chee!”', word: 'ちず', reading: 'chizu', meaning: 'map' },
  { kana: 'つ', sound: 'tsu', mnemonic: 'A tiny wave crests and curls: “tsu.”', word: 'つき', reading: 'tsuki', meaning: 'moon' },
  { kana: 'て', sound: 'te', mnemonic: 'A hand reaches out from its arm: “te” means hand in Japanese.', word: 'てがみ', reading: 'tegami', meaning: 'letter' },
  { kana: 'と', sound: 'to', mnemonic: 'A toe sticks out from a leg: “to.”', word: 'とり', reading: 'tori', meaning: 'bird' },
  { kana: 'な', sound: 'na', mnemonic: 'A knot ties two strokes together: “nah.”', word: 'なつ', reading: 'natsu', meaning: 'summer' },
  { kana: 'に', sound: 'ni', mnemonic: 'Two knees side by side make a pair: “knee” sounds like “ni.”', word: 'にく', reading: 'niku', meaning: 'meat' },
  { kana: 'ぬ', sound: 'nu', mnemonic: 'A noodle loops around itself at the end: “noo.”', word: 'ぬの', reading: 'nuno', meaning: 'cloth' },
  { kana: 'ね', sound: 'ne', mnemonic: 'A curled tail flicks up like a cat saying “neh?”', word: 'ねこ', reading: 'neko', meaning: 'cat' },
  { kana: 'の', sound: 'no', mnemonic: 'One smooth loop says “no” without lifting a finger.', word: 'のみ', reading: 'nomi', meaning: 'flea' },
  { kana: 'は', sound: 'ha', mnemonic: 'A person waves hello with a little flag: “ha!”', word: 'はな', reading: 'hana', meaning: 'flower' },
  { kana: 'ひ', sound: 'hi', mnemonic: 'A smiling face with a nose says “hee!”', word: 'ひと', reading: 'hito', meaning: 'person' },
  { kana: 'ふ', sound: 'fu', mnemonic: 'A puff of air escapes a mountain pass: “fuu.”', word: 'ふね', reading: 'fune', meaning: 'boat' },
  { kana: 'へ', sound: 'he', mnemonic: 'A hill rises to a peak—“hey!” you made it.', word: 'へや', reading: 'heya', meaning: 'room' },
  { kana: 'ほ', sound: 'ho', mnemonic: 'A flag on a post flaps hello: “ho!”', word: 'ほし', reading: 'hoshi', meaning: 'star' },
  { kana: 'ま', sound: 'ma', mnemonic: 'A maze has a twist in the middle: “ma.”', word: 'まど', reading: 'mado', meaning: 'window' },
  { kana: 'み', sound: 'mi', mnemonic: 'Three little strokes look like three notes: “mi.”', word: 'みず', reading: 'mizu', meaning: 'water' },
  { kana: 'む', sound: 'mu', mnemonic: 'A cow’s curly tail swishes as it says “moo.”', word: 'むし', reading: 'mushi', meaning: 'insect' },
  { kana: 'め', sound: 'me', mnemonic: 'A loop with a crossing stroke looks like an eye: “me.”', word: 'め', reading: 'me', meaning: 'eye' },
  { kana: 'も', sound: 'mo', mnemonic: 'A fish swims under two ripples: “mo.”', word: 'もも', reading: 'momo', meaning: 'peach' },
  { kana: 'や', sound: 'ya', mnemonic: 'A y-shaped path branches off: “ya!”', word: 'やま', reading: 'yama', meaning: 'mountain' },
  { kana: 'ゆ', sound: 'yu', mnemonic: 'A fish swims in a loop: “yoo.”', word: 'ゆき', reading: 'yuki', meaning: 'snow' },
  { kana: 'よ', sound: 'yo', mnemonic: 'A little yo-yo hangs from its string: “yo!”', word: 'よる', reading: 'yoru', meaning: 'night' },
  { kana: 'ら', sound: 'ra', mnemonic: 'A rabbit’s ear bends forward: “rah!”', word: 'らくだ', reading: 'rakuda', meaning: 'camel' },
  { kana: 'り', sound: 'ri', mnemonic: 'Two reeds sway in the breeze: “ree.”', word: 'りんご', reading: 'ringo', meaning: 'apple' },
  { kana: 'る', sound: 'ru', mnemonic: 'A ribbon curls into a loop: “roo.”', word: 'るす', reading: 'rusu', meaning: 'away from home' },
  { kana: 'れ', sound: 're', mnemonic: 'A little wave curls around a rock: “reh.”', word: 'れんしゅう', reading: 'renshū', meaning: 'practice' },
  { kana: 'ろ', sound: 'ro', mnemonic: 'A road loops around a bend: “row.”', word: 'ろうそく', reading: 'rōsoku', meaning: 'candle' },
  { kana: 'わ', sound: 'wa', mnemonic: 'A wave curls around a pebble: “wah.”', word: 'わに', reading: 'wani', meaning: 'crocodile' },
  { kana: 'を', sound: 'o', displaySound: 'o (written を)', mnemonic: 'This kana mostly lives in one place: as the object marker, pronounced “o.”', word: 'みずを のむ', reading: 'mizu o nomu', meaning: 'drink water' },
  { kana: 'ん', sound: 'n', mnemonic: 'A little nose hums the final sound: “nnn.”', word: 'ほん', reading: 'hon', meaning: 'book' }
];

const PICTURE_CUES = {
  'あ': { file: 'a.jpg', alt: 'Fishing hook' },
  'い': { file: 'i.jpg', alt: 'Golden reeds' },
  'う': { file: 'u.jpg', alt: 'Open mouth' },
  'え': { file: 'e.jpg', alt: 'Bird beak' },
  'お': { file: 'o.jpg', alt: 'Surprised face' },
  'か': { file: 'ka.jpg', alt: 'Kite in the sky' },
  'き': { file: 'ki.jpg', alt: 'Old keys' },
  'く': { file: 'ku.jpg', alt: 'Bird' },
  'け': { file: 'ke.jpg', alt: 'Tea kettles' },
  'こ': { file: 'ko.jpg', alt: 'Room corner' },
  'さ': { file: 'sa.jpg', alt: 'Sailboats' },
  'し': { file: 'hook.jpg', alt: 'Fishing hook close-up' },
  'す': { file: 'su.jpg', alt: 'Ball of yarn' },
  'せ': { file: 'se.jpg', alt: 'Signpost' },
  'そ': { file: 'present.jpg', alt: 'Gift with a red bow' },
  'た': { file: 'ta.jpg', alt: 'Flagpoles' },
  'ち': { file: 'chi.jpg', alt: 'Smiling dog' },
  'つ': { file: 'tsu.jpg', alt: 'Ocean wave' },
  'て': { file: 'te.jpg', alt: 'Open hand' },
  'と': { file: 'to.jpg', alt: 'Baby toes' },
  'な': { file: 'na.jpg', alt: 'Rope knots' },
  'に': { file: 'ni.jpg', alt: 'Knee' },
  'ぬ': { file: 'nu.jpg', alt: 'Noodle bowl' },
  'ね': { file: 'ne.jpg', alt: 'Cat' },
  'の': { file: 'no.jpg', alt: 'Rope loops' },
  'は': { file: 'ha.jpg', alt: 'Boat with flags' },
  'ひ': { file: 'hi.jpg', alt: 'Smiling woman' },
  'ふ': { file: 'fu.jpg', alt: 'Misty mountain clouds' },
  'へ': { file: 'he.jpg', alt: 'Mountain peaks' },
  'ほ': { file: 'ho.jpg', alt: 'Flag on a post office' },
  'ま': { file: 'maze.jpg', alt: 'Hedge maze' },
  'み': { file: 'mi.jpg', alt: 'Music notes' },
  'む': { file: 'mu.jpg', alt: 'Cow' },
  'め': { file: 'eye.jpg', alt: 'Close-up of an eye' },
  'も': { file: 'mo.jpg', alt: 'Fish underwater' },
  'や': { file: 'ya.jpg', alt: 'Fork in the road' },
  'ゆ': { file: 'yu.jpg', alt: 'Fish swimming underwater' },
  'よ': { file: 'yo.jpg', alt: 'Yo-yo' },
  'ら': { file: 'ra.jpg', alt: 'Rabbit' },
  'り': { file: 'ri.jpg', alt: 'Reeds by water' },
  'る': { file: 'ribbon.jpg', alt: 'Large red ribbon' },
  'れ': { file: 're.jpg', alt: 'River bend' },
  'ろ': { file: 'ro.jpg', alt: 'Curving road' },
  'わ': { file: 'wa.jpg', alt: 'Wave-shaped rock' },
  'を': { file: 'target.jpg', alt: 'Archery targets' },
  'ん': { file: 'n.jpg', alt: 'Close-up of a dog’s nose' }
};

const STORAGE_KEY = 'kana-new-tab-progress-v1';
const DAY = 24 * 60 * 60 * 1000;
const MINUTE = 60 * 1000;
const INTERVALS = [1, 3, 7, 14, 30, 60];

const ui = {
  headerLearned: document.querySelector('#header-learned'),
  progressCount: document.querySelector('#progress-count'),
  progressTrack: document.querySelector('#progress-track'),
  progressFill: document.querySelector('#progress-fill'),
  cardStatus: document.querySelector('#card-status'),
  cardIndex: document.querySelector('#card-index'),
  cardOverline: document.querySelector('#card-overline'),
  kanaGlyph: document.querySelector('#kana-glyph'),
  answerArea: document.querySelector('#answer-area'),
  romaji: document.querySelector('#romaji'),
  mnemonic: document.querySelector('#mnemonic'),
  mnemonicImage: document.querySelector('#mnemonic-image'),
  exampleWord: document.querySelector('#example-word'),
  exampleReading: document.querySelector('#example-reading'),
  exampleMeaning: document.querySelector('#example-meaning'),
  recallPrompt: document.querySelector('#recall-prompt'),
  revealButton: document.querySelector('#reveal-button'),
  ratingButtons: document.querySelector('#rating-buttons'),
  againButton: document.querySelector('#again-button'),
  knownButton: document.querySelector('#known-button'),
  againSchedule: document.querySelector('#again-schedule'),
  knownSchedule: document.querySelector('#known-schedule'),
  todayCount: document.querySelector('#today-count'),
  toast: document.querySelector('#toast')
};

function freshState() {
  return { progress: {}, todayDate: localDate(), todayCount: 0, lastId: null };
}

function localDate() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return freshState();
    const progress = saved.progress && typeof saved.progress === 'object' && !Array.isArray(saved.progress) ? saved.progress : {};
    const cleaned = {};
    for (const item of KANA) {
      const p = progress[item.kana];
      if (!p || typeof p !== 'object') continue;
      cleaned[item.kana] = {
        attempts: nonNegativeInt(p.attempts),
        streak: nonNegativeInt(p.streak),
        intervalDays: nonNegativeInt(p.intervalDays),
        dueAt: Number.isFinite(p.dueAt) ? p.dueAt : 0
      };
    }
    const date = typeof saved.todayDate === 'string' ? saved.todayDate : localDate();
    return {
      progress: cleaned,
      todayDate: date,
      todayCount: date === localDate() ? nonNegativeInt(saved.todayCount) : 0,
      lastId: typeof saved.lastId === 'string' ? saved.lastId : null
    };
  } catch {
    return freshState();
  }
}

function nonNegativeInt(value) {
  return Number.isSafeInteger(value) && value >= 0 ? value : 0;
}

let state = loadState();
let currentCard;
let revealed = false;
let toastTimer;

function getProgress(item) {
  return state.progress[item.kana] || { attempts: 0, streak: 0, intervalDays: 0, dueAt: 0 };
}

function chooseCard() {
  const now = Date.now();
  const due = KANA.filter(item => {
    const p = getProgress(item);
    return p.attempts > 0 && p.dueAt <= now;
  }).sort((a, b) => getProgress(a).dueAt - getProgress(b).dueAt);
  if (due.length) return { item: due[0], status: 'REVIEW' };

  const fresh = KANA.filter(item => getProgress(item).attempts === 0);
  if (fresh.length) {
    const pool = fresh.length > 1 ? fresh.filter(item => item.kana !== state.lastId) : fresh;
    return { item: pool[Math.floor(Math.random() * pool.length)], status: 'NEW KANA' };
  }

  const upcoming = [...KANA].sort((a, b) => getProgress(a).dueAt - getProgress(b).dueAt);
  return { item: upcoming[0], status: 'UP NEXT' };
}

function renderCard() {
  const chosen = chooseCard();
  currentCard = chosen.item;
  revealed = false;
  state.lastId = currentCard.kana;

  const learned = KANA.filter(item => getProgress(item).streak > 0).length;
  ui.headerLearned.textContent = String(learned);
  ui.progressCount.textContent = `${learned} / ${KANA.length}`;
  ui.progressTrack.setAttribute('aria-valuenow', String(learned));
  ui.progressFill.style.width = `${(learned / KANA.length) * 100}%`;
  ui.cardStatus.textContent = chosen.status;
  ui.cardIndex.innerHTML = `${String(KANA.findIndex(item => item.kana === currentCard.kana) + 1).padStart(2, '0')} <span>/ ${KANA.length}</span>`;
  ui.cardOverline.textContent = chosen.status === 'REVIEW' ? 'TIME TO REVIEW' : chosen.status === 'UP NEXT' ? 'READY WHEN YOU ARE' : 'TODAY’S CHARACTER';
  ui.kanaGlyph.textContent = currentCard.kana;
  ui.kanaGlyph.setAttribute('aria-label', `Hiragana character ${currentCard.kana}`);
  ui.romaji.textContent = currentCard.displaySound || currentCard.sound;
  ui.mnemonic.textContent = currentCard.mnemonic;
  const picture = PICTURE_CUES[currentCard.kana];
  ui.mnemonicImage.removeAttribute('src');
  ui.mnemonicImage.alt = `Photo: ${picture.alt}`;
  ui.exampleWord.textContent = currentCard.word;
  ui.exampleReading.textContent = currentCard.reading;
  ui.exampleMeaning.textContent = currentCard.meaning;
  ui.answerArea.hidden = true;
  ui.ratingButtons.hidden = true;
  ui.revealButton.hidden = false;
  ui.recallPrompt.hidden = false;

  const p = getProgress(currentCard);
  if (chosen.status === 'UP NEXT' && p.dueAt > Date.now()) {
    ui.recallPrompt.textContent = `Next review is ${formatDue(p.dueAt)}. Practice it early?`;
  } else {
    ui.recallPrompt.textContent = 'What sound does it make?';
  }
  ui.againSchedule.textContent = '10 min';
  ui.knownSchedule.textContent = `${INTERVALS[Math.min(p.streak, INTERVALS.length - 1)]} ${INTERVALS[Math.min(p.streak, INTERVALS.length - 1)] === 1 ? 'day' : 'days'}`;
  ui.todayCount.textContent = `${state.todayCount} reviewed today`;
  persist();
}

function formatDue(timestamp) {
  const minutes = Math.max(1, Math.ceil((timestamp - Date.now()) / MINUTE));
  if (minutes < 60) return `in ${minutes} min`;
  const hours = Math.ceil(minutes / 60);
  if (hours < 24) return `in ${hours} ${hours === 1 ? 'hour' : 'hours'}`;
  const days = Math.ceil(hours / 24);
  return `in ${days} ${days === 1 ? 'day' : 'days'}`;
}

function reveal() {
  if (revealed) return;
  revealed = true;
  const picture = PICTURE_CUES[currentCard.kana];
  ui.mnemonicImage.src = `images/${picture.file}`;
  ui.answerArea.hidden = false;
  ui.revealButton.hidden = true;
  ui.ratingButtons.hidden = false;
  ui.recallPrompt.hidden = true;
  const p = getProgress(currentCard);
  const nextInterval = INTERVALS[Math.min(p.streak, INTERVALS.length - 1)];
  ui.knownSchedule.textContent = `${nextInterval} ${nextInterval === 1 ? 'day' : 'days'}`;
  ui.againButton.focus({ preventScroll: true });
}

function recordRating(known) {
  if (!revealed) return;
  const now = Date.now();
  const previous = getProgress(currentCard);
  const next = { ...previous, attempts: previous.attempts + 1 };
  if (known) {
    next.streak += 1;
    next.intervalDays = INTERVALS[Math.min(next.streak - 1, INTERVALS.length - 1)];
    next.dueAt = now + next.intervalDays * DAY;
  } else {
    next.streak = 0;
    next.intervalDays = 0;
    next.dueAt = now + 10 * MINUTE;
  }
  state.progress[currentCard.kana] = next;
  const today = localDate();
  if (state.todayDate !== today) {
    state.todayDate = today;
    state.todayCount = 0;
  }
  state.todayCount += 1;
  renderCard();
  ui.revealButton.focus({ preventScroll: true });
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    showToast('Progress could not be saved in this browser.');
  }
}

function showToast(message) {
  ui.toast.textContent = message;
  ui.toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => ui.toast.classList.remove('visible'), 2800);
}

ui.revealButton.addEventListener('click', reveal);
ui.againButton.addEventListener('click', () => recordRating(false));
ui.knownButton.addEventListener('click', () => recordRating(true));

document.addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  const target = event.target;
  if (target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'A'].includes(target.tagName))) return;
  if (revealed && (event.key === '1' || event.key === '2')) {
    event.preventDefault();
    recordRating(event.key === '2');
  } else if (!(target instanceof HTMLElement && target.tagName === 'BUTTON') && (event.code === 'Space' || event.code === 'Enter') && !revealed) {
    event.preventDefault();
    reveal();
  }
});

renderCard();
