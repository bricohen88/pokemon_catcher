// ===== CONSTANTS =====
const SPRITE_BASE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const AREAS = [
  { name: 'Pallet Town', pokemon: [1, 4, 7, 133, 25], color: '#4CAF50', icon: '\u{1F3E0}' },
  { name: 'Viridian Forest', pokemon: [10, 13, 16, 19, 43], color: '#2E7D32', icon: '\u{1F332}' },
  { name: 'Mt. Moon', pokemon: [35, 39, 41, 74, 95], color: '#5C6BC0', icon: '\u{26F0}\uFE0F' },
  { name: 'Cerulean City', pokemon: [54, 79, 118, 120, 116], color: '#0288D1', icon: '\u{1F30A}' },
  { name: 'Vermilion Port', pokemon: [100, 81, 56, 66, 72], color: '#E65100', icon: '\u{26F5}' },
  { name: 'Lavender Town', pokemon: [92, 104, 52, 37, 96], color: '#7B1FA2', icon: '\u{1F47B}' },
  { name: 'Safari Zone', pokemon: [111, 115, 123, 127, 128], color: '#827717', icon: '\u{1F335}' },
  { name: 'Power Plant', pokemon: [125, 126, 132, 137, 143], color: '#F9A825', icon: '\u{26A1}' }
];

const POKEDEX = {
  // Pallet Town
  1:   { name: 'Bulbasaur',    evolvesTo: 2 },
  2:   { name: 'Ivysaur',      evolvesTo: 3 },
  3:   { name: 'Venusaur',     evolvesTo: null },
  4:   { name: 'Charmander',   evolvesTo: 5 },
  5:   { name: 'Charmeleon',   evolvesTo: 6 },
  6:   { name: 'Charizard',    evolvesTo: null },
  7:   { name: 'Squirtle',     evolvesTo: 8 },
  8:   { name: 'Wartortle',    evolvesTo: 9 },
  9:   { name: 'Blastoise',    evolvesTo: null },
  25:  { name: 'Pikachu',      evolvesTo: 26 },
  26:  { name: 'Raichu',       evolvesTo: null },
  133: { name: 'Eevee',        evolvesTo: 136 },  // Stone evolution
  134: { name: 'Vaporeon',     evolvesTo: null },
  135: { name: 'Jolteon',      evolvesTo: null },
  136: { name: 'Flareon',      evolvesTo: null },
  // Viridian Forest
  10:  { name: 'Caterpie',     evolvesTo: 11 },
  11:  { name: 'Metapod',      evolvesTo: 12 },
  12:  { name: 'Butterfree',   evolvesTo: null },
  13:  { name: 'Weedle',       evolvesTo: 14 },
  14:  { name: 'Kakuna',       evolvesTo: 15 },
  15:  { name: 'Beedrill',     evolvesTo: null },
  16:  { name: 'Pidgey',       evolvesTo: 17 },
  17:  { name: 'Pidgeotto',    evolvesTo: 18 },
  18:  { name: 'Pidgeot',      evolvesTo: null },
  19:  { name: 'Rattata',      evolvesTo: 20 },
  20:  { name: 'Raticate',     evolvesTo: null },
  43:  { name: 'Oddish',       evolvesTo: 44 },
  44:  { name: 'Gloom',        evolvesTo: 45 },
  45:  { name: 'Vileplume',    evolvesTo: null },
  // Mt. Moon
  35:  { name: 'Clefairy',     evolvesTo: 36 },
  36:  { name: 'Clefable',     evolvesTo: null },
  39:  { name: 'Jigglypuff',   evolvesTo: 40 },
  40:  { name: 'Wigglytuff',   evolvesTo: null },
  41:  { name: 'Zubat',        evolvesTo: 42 },
  42:  { name: 'Golbat',       evolvesTo: null },
  74:  { name: 'Geodude',      evolvesTo: 75 },
  75:  { name: 'Graveler',     evolvesTo: 76 },
  76:  { name: 'Golem',        evolvesTo: null },
  95:  { name: 'Onix',         evolvesTo: 208 },  // Stone evolution
  208: { name: 'Steelix',      evolvesTo: null },
  // Cerulean City
  54:  { name: 'Psyduck',      evolvesTo: 55 },
  55:  { name: 'Golduck',      evolvesTo: null },
  79:  { name: 'Slowpoke',     evolvesTo: 80 },
  80:  { name: 'Slowbro',      evolvesTo: null },
  116: { name: 'Horsea',       evolvesTo: 117 },
  117: { name: 'Seadra',       evolvesTo: null },
  118: { name: 'Goldeen',      evolvesTo: 119 },
  119: { name: 'Seaking',      evolvesTo: null },
  120: { name: 'Staryu',       evolvesTo: 121 },  // Stone evolution
  121: { name: 'Starmie',      evolvesTo: null },
  // Vermilion Port
  100: { name: 'Voltorb',      evolvesTo: 101 },
  101: { name: 'Electrode',    evolvesTo: null },
  81:  { name: 'Magnemite',    evolvesTo: 82 },
  82:  { name: 'Magneton',     evolvesTo: null },
  56:  { name: 'Mankey',       evolvesTo: 57 },
  57:  { name: 'Primeape',     evolvesTo: null },
  66:  { name: 'Machop',       evolvesTo: 67 },
  67:  { name: 'Machoke',      evolvesTo: 68 },
  68:  { name: 'Machamp',      evolvesTo: null },
  72:  { name: 'Tentacool',    evolvesTo: 73 },
  73:  { name: 'Tentacruel',   evolvesTo: null },
  // Lavender Town
  37:  { name: 'Vulpix',       evolvesTo: 38 },
  38:  { name: 'Ninetales',    evolvesTo: null },
  52:  { name: 'Meowth',       evolvesTo: 53 },
  53:  { name: 'Persian',      evolvesTo: null },
  92:  { name: 'Gastly',       evolvesTo: 93 },
  93:  { name: 'Haunter',      evolvesTo: 94 },
  94:  { name: 'Gengar',       evolvesTo: null },
  96:  { name: 'Drowzee',      evolvesTo: 97 },
  97:  { name: 'Hypno',        evolvesTo: null },
  104: { name: 'Cubone',       evolvesTo: 105 },
  105: { name: 'Marowak',      evolvesTo: null },
  // Safari Zone
  111: { name: 'Rhyhorn',      evolvesTo: 112 },
  112: { name: 'Rhydon',       evolvesTo: null },
  115: { name: 'Kangaskhan',   evolvesTo: null },
  123: { name: 'Scyther',      evolvesTo: null },
  127: { name: 'Pinsir',       evolvesTo: null },
  128: { name: 'Tauros',       evolvesTo: null },
  // Power Plant
  125: { name: 'Electabuzz',   evolvesTo: null },
  126: { name: 'Magmar',       evolvesTo: null },
  132: { name: 'Ditto',        evolvesTo: null },
  137: { name: 'Porygon',      evolvesTo: null },
  143: { name: 'Snorlax',      evolvesTo: null }
};

function spriteUrl(id) {
  return SPRITE_BASE + id + '.png';
}

// ===== STATE =====
let gameState = { caught: [], pokemon: {} };
let currentAreaIndex = null;
let encounterPokemonId = null;
let interactPokemonId = null;
let interactBusy = false;

function migrateOldSave(parsed) {
  if (parsed.pokemon) return parsed;
  const migrated = { caught: parsed.caught || [], pokemon: {} };
  const oldHappiness = parsed.happiness || {};
  const oldEvolved = parsed.evolved || {};
  const allBaseIds = new Set([
    ...Object.keys(oldHappiness).map(Number),
    ...Object.keys(oldEvolved).map(Number)
  ]);
  for (const baseId of allBaseIds) {
    migrated.pokemon[baseId] = {
      happiness: oldHappiness[baseId] || 0,
      currentForm: oldEvolved[baseId] || baseId
    };
  }
  return migrated;
}

function loadState() {
  try {
    const saved = localStorage.getItem('pokemonGameState');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && Array.isArray(parsed.caught)) {
        gameState = migrateOldSave(parsed);
      }
    }
  } catch (e) { /* use defaults */ }
}

function getPokemonData(baseId) {
  return gameState.pokemon[baseId] || { happiness: 0, currentForm: baseId };
}

function getHappiness(baseId) {
  return getPokemonData(baseId).happiness;
}

function addHappiness(baseId, amount) {
  if (!gameState.pokemon[baseId]) {
    gameState.pokemon[baseId] = { happiness: 0, currentForm: baseId };
  }
  gameState.pokemon[baseId].happiness = Math.min(100, gameState.pokemon[baseId].happiness + amount);
  saveState();
  return gameState.pokemon[baseId].happiness;
}

function getCurrentFormId(baseId) {
  return getPokemonData(baseId).currentForm;
}

function canEvolve(baseId) {
  const currentForm = getCurrentFormId(baseId);
  return !!POKEDEX[currentForm].evolvesTo;
}

function getDisplayId(baseId) {
  return getCurrentFormId(baseId);
}

function getDisplayName(baseId) {
  return POKEDEX[getDisplayId(baseId)].name;
}

function saveState() {
  localStorage.setItem('pokemonGameState', JSON.stringify(gameState));
}

function isCaught(id) {
  return gameState.caught.includes(id);
}

function isAreaUnlocked(idx) {
  if (idx === 0) return true;
  const prevArea = AREAS[idx - 1];
  return prevArea.pokemon.every(id => isCaught(id));
}

function getUncaughtInArea(idx) {
  return AREAS[idx].pokemon.filter(id => !isCaught(id));
}

function getCaughtInArea(idx) {
  return AREAS[idx].pokemon.filter(id => isCaught(id));
}

function catchPokemon(id) {
  if (!gameState.caught.includes(id)) {
    gameState.caught.push(id);
    saveState();
  }
}

function getAreaForPokemon(id) {
  for (const area of AREAS) {
    if (area.pokemon.includes(id)) return area.name;
  }
  return '';
}

// ===== SCREEN MANAGEMENT =====
const nav = document.getElementById('bottom-nav');

function showScreen(screenId, params) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelector(`[data-screen="${screenId}"]`).classList.add('active');

  // Update nav
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.nav === screenId);
  });

  // Hide nav on encounter and interact
  nav.classList.toggle('hidden', screenId === 'encounter' || screenId === 'interact');

  // Render screen
  switch (screenId) {
    case 'map': renderMap(); break;
    case 'area': renderArea(params); break;
    case 'encounter': renderEncounter(params); break;
    case 'pokedex': renderPokedex(); break;
    case 'sticker': renderSticker(); break;
    case 'interact': renderInteract(params); break;
  }
}

// Nav buttons
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => showScreen(btn.dataset.nav));
});

// ===== MAP SCREEN =====
function renderMap() {
  const container = document.getElementById('map-container');
  container.innerHTML = '';

  AREAS.forEach((area, idx) => {
    const unlocked = isAreaUnlocked(idx);
    const caught = getCaughtInArea(idx).length;
    const total = area.pokemon.length;
    const allCaught = caught === total;

    const card = document.createElement('div');
    card.className = 'area-card' + (unlocked ? '' : ' locked');
    card.innerHTML = `
      <div class="area-icon" style="background:${area.color}20">${area.icon}</div>
      <div class="area-info">
        <div class="area-name">${area.name}</div>
        <div class="area-progress-text">${caught}/${total} caught</div>
        <div class="area-progress-bar">
          <div class="area-progress-fill" style="width:${(caught/total)*100}%;background:${area.color}"></div>
        </div>
      </div>
      ${allCaught ? '<div class="area-card-complete">\u2B50</div>' : ''}
    `;

    if (unlocked) {
      card.addEventListener('click', () => showScreen('area', idx));
    }

    container.appendChild(card);
  });

  const totalPokemon = AREAS.reduce((sum, a) => sum + a.pokemon.length, 0);
  if (gameState.caught.length === totalPokemon) {
    const banner = document.createElement('div');
    banner.className = 'area-complete-msg';
    banner.textContent = '\u{1F389} You caught them all! You\'re a Pokemon Master! \u{1F389}';
    container.prepend(banner);
  }
}

// ===== AREA SCREEN =====
function renderArea(areaIndex) {
  if (areaIndex !== undefined) currentAreaIndex = areaIndex;
  const area = AREAS[currentAreaIndex];

  document.getElementById('area-title').textContent = area.name;

  // Set header color
  const header = document.querySelector('[data-screen="area"] .screen-header');
  header.style.background = area.color;

  const grid = document.getElementById('area-grid');
  grid.innerHTML = '';

  area.pokemon.forEach(id => {
    const caught = isCaught(id);
    const card = document.createElement('div');
    card.className = 'pokemon-card ' + (caught ? 'caught' : 'uncaught');
    card.innerHTML = `
      <img src="${spriteUrl(id)}" alt="${caught ? POKEDEX[id].name : '???'}" crossorigin="anonymous">
      <div class="pokemon-name">${caught ? POKEDEX[id].name : '???'}</div>
    `;
    grid.appendChild(card);
  });

  const uncaught = getUncaughtInArea(currentAreaIndex);
  const searchBtn = document.getElementById('search-btn');
  const completeMsg = document.getElementById('area-complete-msg');

  if (uncaught.length === 0) {
    searchBtn.style.display = 'none';
    completeMsg.style.display = 'block';

    // Find next locked area
    const nextIdx = currentAreaIndex + 1;
    if (nextIdx < AREAS.length && isAreaUnlocked(nextIdx)) {
      completeMsg.innerHTML = `\u{1F389} All Pokemon caught here! <br><strong>${AREAS[nextIdx].name}</strong> is now unlocked!`;
    } else if (nextIdx >= AREAS.length) {
      completeMsg.innerHTML = '\u{1F31F} All Pokemon in this area caught! Amazing!';
    } else {
      completeMsg.innerHTML = '\u{2B50} All Pokemon caught here! Great job!';
    }
  } else {
    searchBtn.style.display = 'block';
    searchBtn.disabled = false;
    completeMsg.style.display = 'none';
  }
}

document.getElementById('area-back-btn').addEventListener('click', () => showScreen('map'));

document.getElementById('search-btn').addEventListener('click', () => {
  const uncaught = getUncaughtInArea(currentAreaIndex);
  if (uncaught.length > 0) {
    const randomId = uncaught[Math.floor(Math.random() * uncaught.length)];
    showScreen('encounter', randomId);
  }
});

// ===== ENCOUNTER SCREEN =====
let encounterBusy = false;
let berryCount = 0;
let catchBonus = 0;
let ringAnimId = null;
let ringRadius = 90;
const BASE_CATCH_RATE = 0.4;

function renderEncounter(pokemonId) {
  if (pokemonId !== undefined) encounterPokemonId = pokemonId;
  encounterBusy = false;
  berryCount = 3;
  catchBonus = 0;

  const area = AREAS[currentAreaIndex];
  const encounterEl = document.querySelector('[data-screen="encounter"]');
  encounterEl.style.background = `linear-gradient(180deg, ${area.color}99, ${area.color}cc, ${area.color})`;

  const sprite = document.getElementById('encounter-sprite');
  sprite.src = spriteUrl(encounterPokemonId);
  sprite.classList.remove('hidden', 'dodging', 'happy');
  sprite.className = 'encounter-sprite';

  document.getElementById('encounter-name').textContent = POKEDEX[encounterPokemonId].name;
  document.getElementById('encounter-text').textContent = `A wild ${POKEDEX[encounterPokemonId].name} appeared!`;
  document.getElementById('encounter-bonus').textContent = '';
  document.getElementById('encounter-bonus').className = 'encounter-bonus';

  // Show action buttons, hide everything else
  document.getElementById('encounter-actions').style.display = 'flex';
  document.getElementById('berry-btn').disabled = false;
  document.getElementById('berry-count').textContent = 'x3';
  document.getElementById('catch-btn').disabled = false;
  document.getElementById('ring-throw-btn').style.display = 'none';
  document.getElementById('encounter-continue-btn').style.display = 'none';
  document.getElementById('berry-game').style.display = 'none';
  document.getElementById('catch-ring-wrap').style.display = 'none';

  const pokeballZone = document.getElementById('pokeball-zone');
  pokeballZone.classList.remove('visible');
  document.getElementById('pokeball').className = 'pokeball';

  document.getElementById('confetti-container').innerHTML = '';

  if (ringAnimId) { cancelAnimationFrame(ringAnimId); ringAnimId = null; }
}

// Event listeners
document.getElementById('encounter-back-btn').addEventListener('click', () => {
  if (!encounterBusy) {
    if (ringAnimId) { cancelAnimationFrame(ringAnimId); ringAnimId = null; }
    showScreen('area');
  }
});

document.getElementById('encounter-continue-btn').addEventListener('click', () => {
  showScreen('area');
});

document.getElementById('berry-btn').addEventListener('click', startBerryGame);
document.getElementById('catch-btn').addEventListener('click', startCatchRing);
document.getElementById('ring-throw-btn').addEventListener('click', onRingThrow);

// ===== BERRY MINI-GAME =====
function startBerryGame() {
  if (encounterBusy || berryCount <= 0) return;
  encounterBusy = true;

  // Hide action buttons, show berry game
  document.getElementById('encounter-actions').style.display = 'none';
  document.getElementById('encounter-text').textContent = 'Tap the berry when Pokemon is near!';

  // Start pokemon dodging
  const sprite = document.getElementById('encounter-sprite');
  sprite.classList.remove('happy');
  sprite.className = 'encounter-sprite dodging';

  // Show berry
  const berryGame = document.getElementById('berry-game');
  berryGame.style.display = 'flex';
  const berryTarget = document.getElementById('berry-target');
  berryTarget.className = 'berry-target';
  berryTarget.style.display = '';

  // Listen for berry tap (one-shot)
  berryTarget.onclick = onBerryTap;
}

function onBerryTap() {
  const berryTarget = document.getElementById('berry-target');
  berryTarget.onclick = null; // prevent double-tap

  berryCount--;
  document.getElementById('berry-count').textContent = 'x' + berryCount;

  // Check if pokemon is near center horizontally using animation timing
  // Animation is 3.5s. The center zone is between the first up (-1) and first up (+1)
  // on each side. These are the transition moments where it passes through center.
  // Near center: 0-4%, 24-36%, 42-54%, 74-100% (pauses + hops through middle)
  const sprite = document.getElementById('encounter-sprite');
  const anims = sprite.getAnimations();
  let hit = false;
  if (anims.length > 0) {
    const anim = anims[0];
    const progress = (anim.currentTime % 3500) / 3500;
    // Center zones: start pause, returning from left through center,
    // center pause, returning from right through center, end pause
    hit = (progress <= 0.06)  ||                  // start center
          (progress >= 0.24 && progress <= 0.42) || // returning from left, through center, heading right
          (progress >= 0.66 && progress <= 0.84) || // returning from right, through center
          (progress >= 0.90);                       // end center pause
  }

  // Freeze pokemon in place and throw berry
  sprite.style.animationPlayState = 'paused';
  berryTarget.classList.add('fly');
  document.getElementById('encounter-text').textContent = '';

  setTimeout(() => {
    berryTarget.style.display = 'none';
    document.getElementById('berry-game').style.display = 'none';

    // Reset pokemon to center before showing result
    sprite.classList.remove('dodging');
    sprite.style.animationPlayState = '';
    sprite.style.transform = '';

    if (hit) {
      catchBonus += 0.15;
      sprite.className = 'encounter-sprite happy';
      document.getElementById('encounter-text').textContent = 'Success! Increased catch chance!';
      showBonusText('Yum!');
    } else {
      sprite.className = 'encounter-sprite';
      document.getElementById('encounter-text').textContent = 'Missed! The berry fell on the ground!';
    }

    setTimeout(() => finishBerryRound(), 1200);
  }, 600);
}

function finishBerryRound() {
  const sprite = document.getElementById('encounter-sprite');
  sprite.classList.remove('dodging', 'happy');
  sprite.className = 'encounter-sprite';

  // Re-show action buttons
  document.getElementById('encounter-actions').style.display = 'flex';
  if (berryCount <= 0) {
    document.getElementById('berry-btn').disabled = true;
  }
  encounterBusy = false;
}

function showBonusText(text) {
  const bonus = document.getElementById('encounter-bonus');
  bonus.textContent = text;
  bonus.className = 'encounter-bonus';
  void bonus.offsetWidth;
  bonus.className = 'encounter-bonus pop';
}

// ===== CATCH RING GAME =====
function startCatchRing() {
  if (encounterBusy) return;
  encounterBusy = true;

  // Hide action buttons
  document.getElementById('encounter-actions').style.display = 'none';
  document.getElementById('encounter-text').textContent = 'Wait for the green ring... then throw!';

  // Show ring and throw button
  document.getElementById('catch-ring-wrap').style.display = '';
  document.getElementById('ring-throw-btn').style.display = '';
  document.getElementById('ring-throw-btn').disabled = false;

  // Animate ring shrinking in a loop
  ringRadius = 95;
  const ring = document.getElementById('catch-ring');
  let ringStartTime = performance.now();
  const ringDuration = 2800; // 2.8 seconds per cycle

  function animateRing(now) {
    const elapsed = now - ringStartTime;
    const progress = Math.min(elapsed / ringDuration, 1);

    // Shrink from 95 to 20
    ringRadius = 95 - progress * 75;
    ring.setAttribute('r', ringRadius);

    // Color: red (>65) -> yellow (40-65) -> green (<40)
    if (ringRadius > 65) {
      ring.style.stroke = '#EE1515'; // red
    } else if (ringRadius > 40) {
      ring.style.stroke = '#FFC107'; // yellow
    } else {
      ring.style.stroke = '#4CAF50'; // green
    }

    ring.setAttribute('stroke-width', Math.max(4, ringRadius * 0.08));

    if (progress >= 1) {
      // Loop — reset ring to start again
      ringStartTime = now;
      ringRadius = 95;
    }

    ringAnimId = requestAnimationFrame(animateRing);
  }

  ringAnimId = requestAnimationFrame(animateRing);
}

function onRingThrow() {
  // Stop ring animation
  if (ringAnimId) { cancelAnimationFrame(ringAnimId); ringAnimId = null; }

  // Hide ring and throw button
  document.getElementById('catch-ring-wrap').style.display = 'none';
  document.getElementById('ring-throw-btn').style.display = 'none';

  // Calculate timing bonus based on ring color
  let timingBonus = 0;
  let timingText = '';
  if (ringRadius > 65) {
    timingBonus = -0.10;
    timingText = 'Too early... bad throw!';
  } else if (ringRadius > 40) {
    timingBonus = 0;
    timingText = 'Nice throw!';
  } else {
    timingBonus = 0.15;
    timingText = 'Excellent throw!';
  }

  showBonusText(timingText);

  // Calculate final catch rate
  let totalRate = BASE_CATCH_RATE + catchBonus + timingBonus;
  totalRate = Math.max(0.20, Math.min(0.95, totalRate)); // clamp 20%-95%

  // Execute the throw with this catch rate
  executeCatch(totalRate);
}

// ===== POKEBALL THROW & RESULT =====
function executeCatch(catchRate) {
  const sprite = document.getElementById('encounter-sprite');
  const pokeballZone = document.getElementById('pokeball-zone');
  const pokeball = document.getElementById('pokeball');
  const encounterText = document.getElementById('encounter-text');

  encounterText.textContent = '';

  // Show pokeball and animate throw
  pokeballZone.classList.add('visible');
  pokeball.className = 'pokeball';
  void pokeball.offsetWidth;
  pokeball.classList.add('throw-anim');

  // After throw animation, hide sprite
  setTimeout(() => {
    sprite.classList.add('hidden');
  }, 400);

  // After throw, shake
  setTimeout(() => {
    pokeball.classList.remove('throw-anim');
    void pokeball.offsetWidth;
    pokeball.classList.add('shake-anim');
    encounterText.textContent = '...';
  }, 650);

  // After shakes, determine result
  setTimeout(() => {
    const caught = Math.random() < catchRate;

    if (caught) {
      pokeball.classList.remove('shake-anim');
      void pokeball.offsetWidth;
      pokeball.classList.add('catch-anim');
      onCatchSuccess();
    } else {
      onCatchEscape();
    }
  }, 2000);
}

function onCatchSuccess() {
  const name = POKEDEX[encounterPokemonId].name;
  document.getElementById('encounter-text').textContent = `Gotcha! ${name} was caught!`;

  catchPokemon(encounterPokemonId);
  createConfetti();

  setTimeout(() => {
    const contBtn = document.getElementById('encounter-continue-btn');
    contBtn.style.display = '';
    contBtn.textContent = 'Continue';
    encounterBusy = false;
  }, 800);
}

function onCatchEscape() {
  const name = POKEDEX[encounterPokemonId].name;
  const pokeball = document.getElementById('pokeball');
  const sprite = document.getElementById('encounter-sprite');

  pokeball.classList.remove('shake-anim');
  void pokeball.offsetWidth;
  pokeball.classList.add('break-anim');

  setTimeout(() => {
    sprite.classList.remove('hidden');
    sprite.className = 'encounter-sprite';
    document.getElementById('pokeball-zone').classList.remove('visible');
    pokeball.className = 'pokeball';

    document.getElementById('encounter-text').textContent = `Oh no! ${name} got away!`;

    const contBtn = document.getElementById('encounter-continue-btn');
    contBtn.style.display = '';
    contBtn.textContent = 'Back to Area';
    encounterBusy = false;
  }, 500);
}

function createConfetti() {
  const container = document.getElementById('confetti-container');
  container.innerHTML = '';
  const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A29BFE', '#FD79A8', '#00B894', '#FDCB6E'];

  for (let i = 0; i < 40; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = (Math.random() * 8 + 6) + 'px';
    piece.style.height = (Math.random() * 8 + 6) + 'px';
    piece.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';
    piece.style.animationDelay = (Math.random() * 0.5) + 's';
    if (Math.random() > 0.5) piece.style.borderRadius = '50%';
    container.appendChild(piece);
  }
}

// ===== POKEDEX SCREEN =====
// Get all forms a base Pokemon has been through (base + evolved stages)
function getOwnedForms(baseId) {
  const forms = [baseId];
  const currentForm = getCurrentFormId(baseId);
  let formId = baseId;
  while (POKEDEX[formId].evolvesTo && formId !== currentForm) {
    forms.push(POKEDEX[formId].evolvesTo);
    formId = POKEDEX[formId].evolvesTo;
  }
  if (!forms.includes(currentForm)) forms.push(currentForm);
  return forms;
}

function renderPokedex() {
  const baseIds = AREAS.flatMap(a => a.pokemon);
  const grid = document.getElementById('pokedex-grid');
  grid.innerHTML = '';

  const totalPokemon = baseIds.length;

  // Build full list: for caught Pokemon, include all owned forms
  const entries = [];
  baseIds.forEach(id => {
    if (isCaught(id)) {
      getOwnedForms(id).forEach(formId => {
        entries.push({ formId, baseId: id, caught: true });
      });
    } else {
      entries.push({ formId: id, baseId: id, caught: false });
    }
  });

  // Sort by Pokedex number
  entries.sort((a, b) => a.formId - b.formId);

  const totalInDex = entries.length;
  const ownedInDex = entries.filter(e => e.caught).length;
  document.getElementById('pokedex-count').textContent = `${gameState.caught.length}/${totalPokemon} caught | ${ownedInDex}/${totalInDex} in Pokedex`;

  entries.forEach(({ formId, baseId, caught }) => {
    const name = caught ? POKEDEX[formId].name : '???';
    const card = document.createElement('div');
    card.className = 'pokemon-card ' + (caught ? 'caught' : 'uncaught');
    card.innerHTML = `
      <img src="${spriteUrl(formId)}" alt="${name}" crossorigin="anonymous">
      <div class="pokemon-name">${name}</div>
      <div class="pokemon-number">#${String(formId).padStart(3, '0')}</div>
    `;

    if (caught) {
      card.addEventListener('click', () => showScreen('interact', baseId));
    }

    grid.appendChild(card);
  });
}

// ===== INTERACT SCREEN =====
function renderInteract(pokemonId) {
  if (pokemonId !== undefined) interactPokemonId = pokemonId;
  interactBusy = false;

  const displayId = getDisplayId(interactPokemonId);
  const displayName = getDisplayName(interactPokemonId);
  const happiness = getHappiness(interactPokemonId);
  const evolved = !canEvolve(interactPokemonId);

  // Set background color based on area
  const area = AREAS.find(a => a.pokemon.includes(interactPokemonId));
  const interactEl = document.querySelector('[data-screen="interact"]');
  if (area) {
    interactEl.style.background = `linear-gradient(180deg, ${area.color}99, ${area.color}cc, ${area.color})`;
  }

  document.getElementById('interact-name').textContent = displayName;
  document.getElementById('interact-number').textContent = `#${String(displayId).padStart(3, '0')}`;

  const sprite = document.getElementById('interact-sprite');
  sprite.src = spriteUrl(displayId);
  sprite.className = 'interact-sprite';

  document.getElementById('interact-status').textContent = '';
  document.getElementById('interact-status').className = 'interact-status';
  document.getElementById('interact-berry').style.display = 'none';
  document.getElementById('evolve-confetti').innerHTML = '';

  updateHappinessBar(happiness);

  // If already evolved, hide buttons and show max message
  const actions = document.getElementById('interact-actions');
  if (evolved) {
    actions.style.display = 'none';
    document.getElementById('happiness-label').textContent = 'Fully evolved!';
  } else {
    actions.style.display = 'flex';
    document.getElementById('happiness-label').textContent = 'Happiness';
    document.getElementById('pet-btn').disabled = false;
    document.getElementById('feed-btn').disabled = false;
    document.getElementById('play-btn').disabled = false;
  }
}

function updateHappinessBar(value) {
  document.getElementById('happiness-fill').style.width = value + '%';
  document.getElementById('happiness-value').textContent = `${value}/100`;
}

function showInteractStatus(text) {
  const el = document.getElementById('interact-status');
  el.textContent = text;
  el.className = 'interact-status';
  void el.offsetWidth;
  el.className = 'interact-status pop';
}

function disableInteractBtns() {
  document.getElementById('pet-btn').disabled = true;
  document.getElementById('feed-btn').disabled = true;
  document.getElementById('play-btn').disabled = true;
}

function enableInteractBtns() {
  if (!!canEvolve(interactPokemonId)) {
    document.getElementById('pet-btn').disabled = false;
    document.getElementById('feed-btn').disabled = false;
    document.getElementById('play-btn').disabled = false;
  }
}

// Pet: Pokemon wiggles happily
function onPet() {
  if (interactBusy) return;
  interactBusy = true;
  disableInteractBtns();

  const sprite = document.getElementById('interact-sprite');
  sprite.className = 'interact-sprite pet-anim';
  showInteractStatus('Loves the pets!');

  const newHappiness = addHappiness(interactPokemonId, 8);
  updateHappinessBar(newHappiness);

  setTimeout(() => {
    sprite.className = 'interact-sprite';
    interactBusy = false;
    enableInteractBtns();
    checkEvolve();
  }, 600);
}

// Feed: Berry flies up to Pokemon
function onFeed() {
  if (interactBusy) return;
  interactBusy = true;
  disableInteractBtns();

  const berry = document.getElementById('interact-berry');
  berry.style.display = '';
  berry.className = 'interact-berry';
  void berry.offsetWidth;
  berry.className = 'interact-berry fly-up';

  showInteractStatus('Yum! So tasty!');

  const newHappiness = addHappiness(interactPokemonId, 12);

  setTimeout(() => {
    berry.style.display = 'none';
    berry.className = 'interact-berry';
    updateHappinessBar(newHappiness);

    // Happy wiggle after eating
    const sprite = document.getElementById('interact-sprite');
    sprite.className = 'interact-sprite pet-anim';

    setTimeout(() => {
      sprite.className = 'interact-sprite';
      interactBusy = false;
      enableInteractBtns();
      checkEvolve();
    }, 500);
  }, 700);
}

// Play: Pokemon runs back and forth
function onPlay() {
  if (interactBusy) return;
  interactBusy = true;
  disableInteractBtns();

  const sprite = document.getElementById('interact-sprite');
  sprite.className = 'interact-sprite play-anim';
  showInteractStatus('So much fun!');

  const newHappiness = addHappiness(interactPokemonId, 15);
  updateHappinessBar(newHappiness);

  setTimeout(() => {
    sprite.className = 'interact-sprite';
    interactBusy = false;
    enableInteractBtns();
    checkEvolve();
  }, 2600);
}

// Evolution check and animation
function checkEvolve() {
  if (!canEvolve(interactPokemonId)) return;
  if (getHappiness(interactPokemonId) < 100) return;

  const currentForm = getCurrentFormId(interactPokemonId);
  const evolvedId = POKEDEX[currentForm].evolvesTo;
  if (!evolvedId) return;

  interactBusy = true;
  disableInteractBtns();

  const sprite = document.getElementById('interact-sprite');
  const evolvedName = POKEDEX[evolvedId].name;

  showInteractStatus('What\'s happening...?');

  setTimeout(() => {
    // Phase 1: glow and shrink
    sprite.className = 'interact-sprite evolve-glow';

    setTimeout(() => {
      // Phase 2: swap sprite and flash in
      sprite.src = spriteUrl(evolvedId);
      sprite.className = 'interact-sprite evolve-flash';

      // Create confetti
      const container = document.getElementById('evolve-confetti');
      container.innerHTML = '';
      const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A29BFE', '#FD79A8', '#00B894', '#FDCB6E'];
      for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width = (Math.random() * 8 + 6) + 'px';
        piece.style.height = (Math.random() * 8 + 6) + 'px';
        piece.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';
        piece.style.animationDelay = (Math.random() * 0.5) + 's';
        if (Math.random() > 0.5) piece.style.borderRadius = '50%';
        container.appendChild(piece);
      }

      // Store evolved form and reset happiness for next evolution
      if (!gameState.pokemon[interactPokemonId]) {
        gameState.pokemon[interactPokemonId] = { happiness: 0, currentForm: interactPokemonId };
      }
      gameState.pokemon[interactPokemonId].currentForm = evolvedId;
      gameState.pokemon[interactPokemonId].happiness = 0;
      saveState();

      showInteractStatus(`Evolved into ${evolvedName}!`);
      document.getElementById('interact-name').textContent = evolvedName;
      document.getElementById('interact-number').textContent = `#${String(evolvedId).padStart(3, '0')}`;
      updateHappinessBar(0);

      setTimeout(() => {
        sprite.className = 'interact-sprite';
        interactBusy = false;
        // Check if there's another evolution available
        if (canEvolve(interactPokemonId)) {
          document.getElementById('happiness-label').textContent = 'Happiness';
          enableInteractBtns();
        } else {
          document.getElementById('interact-actions').style.display = 'none';
          document.getElementById('happiness-label').textContent = 'Fully evolved!';
        }
      }, 800);
    }, 2000);
  }, 800);
}

// Event listeners
document.getElementById('interact-back-btn').addEventListener('click', () => {
  if (!interactBusy) showScreen('pokedex');
});
document.getElementById('pet-btn').addEventListener('click', onPet);
document.getElementById('feed-btn').addEventListener('click', onFeed);
document.getElementById('play-btn').addEventListener('click', onPlay);

// ===== STICKER STUDIO =====
let stickerPhoto = null; // Image element of current background
let placedStickers = [];
let currentBgName = null; // null = custom photo, string = scene name

// Stock scene backgrounds drawn with canvas
const STOCK_SCENES = [
  { name: 'Pallet Town', areaIndex: 0, draw: drawPalletTown },
  { name: 'Viridian Forest', areaIndex: 1, draw: drawViridianForest },
  { name: 'Mt. Moon', areaIndex: 2, draw: drawMtMoon },
  { name: 'Cerulean City', areaIndex: 3, draw: drawCeruleanCity },
  { name: 'Vermilion Port', areaIndex: 4, draw: drawVermilionPort },
  { name: 'Lavender Town', areaIndex: 5, draw: drawLavenderTown },
  { name: 'Safari Zone', areaIndex: 6, draw: drawSafariZone },
  { name: 'Power Plant', areaIndex: 7, draw: drawPowerPlant }
];

function drawPalletTown(ctx, w, h) {
  // Sky
  const sky = ctx.createLinearGradient(0, 0, 0, h * 0.6);
  sky.addColorStop(0, '#87CEEB');
  sky.addColorStop(1, '#B0E0FF');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h * 0.6);
  // Sun
  ctx.fillStyle = '#FFE66D';
  ctx.beginPath(); ctx.arc(w * 0.8, h * 0.15, 40, 0, Math.PI * 2); ctx.fill();
  // Grass
  const grass = ctx.createLinearGradient(0, h * 0.55, 0, h);
  grass.addColorStop(0, '#7BC67E');
  grass.addColorStop(1, '#4CAF50');
  ctx.fillStyle = grass;
  ctx.fillRect(0, h * 0.55, w, h * 0.45);
  // Path
  ctx.fillStyle = '#D2B48C';
  ctx.fillRect(w * 0.35, h * 0.55, w * 0.3, h * 0.45);
  // Houses
  drawHouse(ctx, w * 0.05, h * 0.3, 70, 60, '#E74C3C');
  drawHouse(ctx, w * 0.65, h * 0.32, 65, 55, '#3498DB');
  // Fence
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2;
  for (let x = 0; x < w; x += 20) {
    ctx.strokeRect(x, h * 0.52, 12, 18);
  }
}

function drawHouse(ctx, x, y, w, h, roofColor) {
  ctx.fillStyle = '#FFF8DC';
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = roofColor;
  ctx.beginPath();
  ctx.moveTo(x - 8, y);
  ctx.lineTo(x + w / 2, y - h * 0.5);
  ctx.lineTo(x + w + 8, y);
  ctx.fill();
  ctx.fillStyle = '#8B4513';
  ctx.fillRect(x + w * 0.35, y + h * 0.4, w * 0.3, h * 0.6);
  ctx.fillStyle = '#87CEEB';
  ctx.fillRect(x + w * 0.1, y + h * 0.15, w * 0.2, w * 0.2);
  ctx.fillRect(x + w * 0.65, y + h * 0.15, w * 0.2, w * 0.2);
}

function drawViridianForest(ctx, w, h) {
  // Sky through canopy
  ctx.fillStyle = '#2D5016';
  ctx.fillRect(0, 0, w, h);
  // Light patches
  ctx.fillStyle = '#3A6B1E';
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.arc(Math.random() * w, Math.random() * h * 0.5, 60 + Math.random() * 40, 0, Math.PI * 2);
    ctx.fill();
  }
  // Sunbeams
  ctx.fillStyle = 'rgba(255,255,150,0.08)';
  for (let i = 0; i < 5; i++) {
    const bx = w * 0.1 + i * w * 0.2;
    ctx.beginPath();
    ctx.moveTo(bx, 0);
    ctx.lineTo(bx - 30, h);
    ctx.lineTo(bx + 30, h);
    ctx.fill();
  }
  // Ground
  ctx.fillStyle = '#3E2723';
  ctx.fillRect(0, h * 0.75, w, h * 0.25);
  ctx.fillStyle = '#4E342E';
  for (let x = 0; x < w; x += 25) {
    ctx.beginPath();
    ctx.arc(x, h * 0.75, 15, Math.PI, 0);
    ctx.fill();
  }
  // Trees
  for (let i = 0; i < 6; i++) {
    const tx = i * w / 5 - 10;
    ctx.fillStyle = '#5D4037';
    ctx.fillRect(tx + 15, h * 0.3, 16, h * 0.5);
    ctx.fillStyle = '#1B5E20';
    ctx.beginPath(); ctx.arc(tx + 23, h * 0.3, 35, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#2E7D32';
    ctx.beginPath(); ctx.arc(tx + 23, h * 0.22, 28, 0, Math.PI * 2); ctx.fill();
  }
  // Mushrooms
  ctx.fillStyle = '#F44336';
  ctx.beginPath(); ctx.arc(w * 0.2, h * 0.82, 8, Math.PI, 0); ctx.fill();
  ctx.fillStyle = '#FFECB3';
  ctx.fillRect(w * 0.2 - 3, h * 0.82, 6, 10);
  ctx.fillStyle = '#F44336';
  ctx.beginPath(); ctx.arc(w * 0.7, h * 0.85, 6, Math.PI, 0); ctx.fill();
  ctx.fillStyle = '#FFECB3';
  ctx.fillRect(w * 0.7 - 2, h * 0.85, 4, 8);
}

function drawMtMoon(ctx, w, h) {
  // Night sky
  const sky = ctx.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, '#0D1B2A');
  sky.addColorStop(1, '#1B2838');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);
  // Stars
  ctx.fillStyle = '#FFF';
  for (let i = 0; i < 50; i++) {
    const sz = Math.random() * 2.5 + 0.5;
    ctx.beginPath();
    ctx.arc(Math.random() * w, Math.random() * h * 0.5, sz, 0, Math.PI * 2);
    ctx.fill();
  }
  // Moon
  ctx.fillStyle = '#F5F5DC';
  ctx.beginPath(); ctx.arc(w * 0.75, h * 0.15, 35, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#E8E0C8';
  ctx.beginPath(); ctx.arc(w * 0.73, h * 0.13, 8, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(w * 0.78, h * 0.18, 5, 0, Math.PI * 2); ctx.fill();
  // Mountains
  ctx.fillStyle = '#37474F';
  ctx.beginPath();
  ctx.moveTo(-20, h); ctx.lineTo(w * 0.3, h * 0.25); ctx.lineTo(w * 0.6, h);
  ctx.fill();
  ctx.fillStyle = '#455A64';
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h); ctx.lineTo(w * 0.65, h * 0.2); ctx.lineTo(w + 20, h);
  ctx.fill();
  // Snow caps
  ctx.fillStyle = '#ECEFF1';
  ctx.beginPath();
  ctx.moveTo(w * 0.25, h * 0.32); ctx.lineTo(w * 0.3, h * 0.25); ctx.lineTo(w * 0.35, h * 0.32);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(w * 0.6, h * 0.27); ctx.lineTo(w * 0.65, h * 0.2); ctx.lineTo(w * 0.7, h * 0.27);
  ctx.fill();
  // Cave entrance
  ctx.fillStyle = '#1A1A2E';
  ctx.beginPath();
  ctx.ellipse(w * 0.45, h * 0.85, 35, 45, 0, Math.PI, 0);
  ctx.fill();
}

function drawCeruleanCity(ctx, w, h) {
  // Sky
  const sky = ctx.createLinearGradient(0, 0, 0, h * 0.4);
  sky.addColorStop(0, '#4FC3F7');
  sky.addColorStop(1, '#81D4FA');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h * 0.4);
  // Clouds
  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  [[w * 0.2, h * 0.1], [w * 0.6, h * 0.15], [w * 0.85, h * 0.08]].forEach(([cx, cy]) => {
    ctx.beginPath(); ctx.arc(cx, cy, 20, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 20, cy - 5, 15, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx - 15, cy + 3, 13, 0, Math.PI * 2); ctx.fill();
  });
  // Water
  const water = ctx.createLinearGradient(0, h * 0.4, 0, h);
  water.addColorStop(0, '#0288D1');
  water.addColorStop(0.5, '#0277BD');
  water.addColorStop(1, '#01579B');
  ctx.fillStyle = water;
  ctx.fillRect(0, h * 0.4, w, h * 0.6);
  // Water ripples
  ctx.strokeStyle = 'rgba(255,255,255,0.2)';
  ctx.lineWidth = 1.5;
  for (let y = h * 0.45; y < h; y += 20) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    for (let x = 0; x < w; x += 10) {
      ctx.lineTo(x, y + Math.sin(x * 0.05) * 4);
    }
    ctx.stroke();
  }
  // Bridge
  ctx.fillStyle = '#8D6E63';
  ctx.fillRect(w * 0.3, h * 0.35, w * 0.4, 12);
  ctx.fillStyle = '#6D4C41';
  for (let x = w * 0.32; x < w * 0.68; x += 25) {
    ctx.fillRect(x, h * 0.25, 6, h * 0.1 + 12);
  }
  // Lily pads
  ctx.fillStyle = '#4CAF50';
  [[w * 0.15, h * 0.6], [w * 0.75, h * 0.7], [w * 0.5, h * 0.85], [w * 0.25, h * 0.8]].forEach(([cx, cy]) => {
    ctx.beginPath(); ctx.ellipse(cx, cy, 12, 8, 0, 0, Math.PI * 2); ctx.fill();
  });
}

function drawVermilionPort(ctx, w, h) {
  // Sunset sky
  const sky = ctx.createLinearGradient(0, 0, 0, h * 0.5);
  sky.addColorStop(0, '#FF6F00');
  sky.addColorStop(0.4, '#FF8F00');
  sky.addColorStop(1, '#FFB74D');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h * 0.5);
  // Sun setting
  ctx.fillStyle = '#FFEB3B';
  ctx.beginPath(); ctx.arc(w * 0.5, h * 0.35, 45, 0, Math.PI * 2); ctx.fill();
  // Ocean
  const ocean = ctx.createLinearGradient(0, h * 0.5, 0, h);
  ocean.addColorStop(0, '#0277BD');
  ocean.addColorStop(1, '#01579B');
  ctx.fillStyle = ocean;
  ctx.fillRect(0, h * 0.5, w, h * 0.5);
  // Waves
  ctx.strokeStyle = 'rgba(255,255,255,0.15)';
  ctx.lineWidth = 2;
  for (let y = h * 0.52; y < h; y += 18) {
    ctx.beginPath(); ctx.moveTo(0, y);
    for (let x = 0; x < w; x += 8) ctx.lineTo(x, y + Math.sin(x * 0.06 + y) * 5);
    ctx.stroke();
  }
  // Dock
  ctx.fillStyle = '#5D4037';
  ctx.fillRect(w * 0.1, h * 0.45, w * 0.35, 12);
  for (let x = w * 0.12; x < w * 0.44; x += 30) {
    ctx.fillRect(x, h * 0.45, 8, h * 0.15);
  }
  // Ship
  ctx.fillStyle = '#ECEFF1';
  ctx.beginPath();
  ctx.moveTo(w * 0.55, h * 0.48); ctx.lineTo(w * 0.9, h * 0.48);
  ctx.lineTo(w * 0.85, h * 0.58); ctx.lineTo(w * 0.52, h * 0.58);
  ctx.fill();
  ctx.fillStyle = '#E65100';
  ctx.fillRect(w * 0.65, h * 0.35, 15, h * 0.13);
  ctx.fillStyle = '#B71C1C';
  ctx.fillRect(w * 0.6, h * 0.42, 30, 6);
}

function drawLavenderTown(ctx, w, h) {
  // Spooky purple sky
  const sky = ctx.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, '#1A0033');
  sky.addColorStop(0.5, '#2D1B4E');
  sky.addColorStop(1, '#1A1A2E');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);
  // Stars
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  for (let i = 0; i < 30; i++) {
    ctx.beginPath();
    ctx.arc(Math.random() * w, Math.random() * h * 0.4, Math.random() * 1.5 + 0.5, 0, Math.PI * 2);
    ctx.fill();
  }
  // Moon with haze
  ctx.fillStyle = 'rgba(200,200,180,0.15)';
  ctx.beginPath(); ctx.arc(w * 0.8, h * 0.12, 50, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#E8E0C8';
  ctx.beginPath(); ctx.arc(w * 0.8, h * 0.12, 25, 0, Math.PI * 2); ctx.fill();
  // Ground
  ctx.fillStyle = '#2E1A47';
  ctx.fillRect(0, h * 0.7, w, h * 0.3);
  // Fog patches
  ctx.fillStyle = 'rgba(150,120,180,0.1)';
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.ellipse(Math.random() * w, h * 0.65 + Math.random() * h * 0.2, 80, 20, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  // Pokemon Tower
  ctx.fillStyle = '#3E2723';
  ctx.fillRect(w * 0.35, h * 0.2, w * 0.3, h * 0.5);
  // Tower tiers
  for (let i = 0; i < 4; i++) {
    const ty = h * 0.2 + i * (h * 0.12);
    ctx.fillStyle = '#4E342E';
    ctx.fillRect(w * 0.33, ty, w * 0.34, 4);
  }
  // Tower roof
  ctx.fillStyle = '#4A148C';
  ctx.beginPath();
  ctx.moveTo(w * 0.33, h * 0.2);
  ctx.lineTo(w * 0.5, h * 0.05);
  ctx.lineTo(w * 0.67, h * 0.2);
  ctx.fill();
  // Windows glowing
  ctx.fillStyle = 'rgba(255,200,50,0.6)';
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      ctx.fillRect(w * 0.4 + j * w * 0.14, h * 0.28 + i * h * 0.12, 10, 14);
    }
  }
  // Gravestones
  ctx.fillStyle = '#616161';
  [[w * 0.08, h * 0.72], [w * 0.18, h * 0.75], [w * 0.78, h * 0.73], [w * 0.88, h * 0.76]].forEach(([gx, gy]) => {
    ctx.beginPath();
    ctx.moveTo(gx, gy + 20); ctx.lineTo(gx, gy + 5);
    ctx.arc(gx + 8, gy + 5, 8, Math.PI, 0);
    ctx.lineTo(gx + 16, gy + 20);
    ctx.fill();
  });
}

function drawSafariZone(ctx, w, h) {
  // Warm sky
  const sky = ctx.createLinearGradient(0, 0, 0, h * 0.45);
  sky.addColorStop(0, '#81D4FA');
  sky.addColorStop(1, '#B3E5FC');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h * 0.45);
  // Sun
  ctx.fillStyle = '#FFF176';
  ctx.beginPath(); ctx.arc(w * 0.15, h * 0.12, 30, 0, Math.PI * 2); ctx.fill();
  // Savanna ground
  const ground = ctx.createLinearGradient(0, h * 0.4, 0, h);
  ground.addColorStop(0, '#9E9D24');
  ground.addColorStop(0.5, '#827717');
  ground.addColorStop(1, '#6D4C41');
  ctx.fillStyle = ground;
  ctx.fillRect(0, h * 0.4, w, h * 0.6);
  // Tall grass patches
  ctx.fillStyle = '#7CB342';
  for (let i = 0; i < 15; i++) {
    const gx = Math.random() * w;
    const gy = h * 0.5 + Math.random() * h * 0.4;
    ctx.beginPath();
    ctx.moveTo(gx, gy); ctx.lineTo(gx - 4, gy - 20 - Math.random() * 15);
    ctx.lineTo(gx + 4, gy); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(gx + 6, gy); ctx.lineTo(gx + 10, gy - 18 - Math.random() * 12);
    ctx.lineTo(gx + 14, gy); ctx.fill();
  }
  // Watering hole
  ctx.fillStyle = '#4FC3F7';
  ctx.beginPath(); ctx.ellipse(w * 0.65, h * 0.75, 50, 20, 0, 0, Math.PI * 2); ctx.fill();
  // Fence gate
  ctx.strokeStyle = '#5D4037';
  ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(w * 0.02, h * 0.42); ctx.lineTo(w * 0.98, h * 0.42); ctx.stroke();
  for (let x = w * 0.05; x < w; x += 35) {
    ctx.beginPath(); ctx.moveTo(x, h * 0.36); ctx.lineTo(x, h * 0.48); ctx.stroke();
  }
  // Sign
  ctx.fillStyle = '#5D4037';
  ctx.fillRect(w * 0.42, h * 0.3, 4, h * 0.12);
  ctx.fillStyle = '#8D6E63';
  ctx.fillRect(w * 0.35, h * 0.28, w * 0.18, 14);
  ctx.fillStyle = '#FFF';
  ctx.font = 'bold 8px sans-serif';
  ctx.fillText('SAFARI', w * 0.37, h * 0.28 + 10);
}

function drawPowerPlant(ctx, w, h) {
  // Stormy sky
  const sky = ctx.createLinearGradient(0, 0, 0, h * 0.6);
  sky.addColorStop(0, '#263238');
  sky.addColorStop(1, '#37474F');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h * 0.6);
  // Lightning bolts
  ctx.strokeStyle = '#FFEB3B';
  ctx.lineWidth = 3;
  [[w * 0.2, 0], [w * 0.7, 0]].forEach(([bx, by]) => {
    ctx.beginPath();
    ctx.moveTo(bx, by);
    ctx.lineTo(bx - 15, h * 0.15);
    ctx.lineTo(bx + 5, h * 0.15);
    ctx.lineTo(bx - 10, h * 0.3);
    ctx.stroke();
  });
  // Ground
  ctx.fillStyle = '#455A64';
  ctx.fillRect(0, h * 0.6, w, h * 0.4);
  // Concrete floor
  ctx.fillStyle = '#546E7A';
  ctx.fillRect(0, h * 0.58, w, 8);
  // Building
  ctx.fillStyle = '#37474F';
  ctx.fillRect(w * 0.15, h * 0.25, w * 0.7, h * 0.35);
  // Roof
  ctx.fillStyle = '#263238';
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.25); ctx.lineTo(w * 0.5, h * 0.1); ctx.lineTo(w * 0.9, h * 0.25);
  ctx.fill();
  // Windows (glowing yellow)
  ctx.fillStyle = 'rgba(255,235,59,0.7)';
  for (let i = 0; i < 4; i++) {
    ctx.fillRect(w * 0.22 + i * w * 0.16, h * 0.32, 16, 20);
  }
  // Door
  ctx.fillStyle = '#1A237E';
  ctx.fillRect(w * 0.43, h * 0.42, w * 0.14, h * 0.18);
  // Electric sparks
  ctx.fillStyle = '#FFEB3B';
  for (let i = 0; i < 8; i++) {
    const sx = Math.random() * w;
    const sy = h * 0.62 + Math.random() * h * 0.3;
    ctx.beginPath(); ctx.arc(sx, sy, 2, 0, Math.PI * 2); ctx.fill();
  }
  // Pipes
  ctx.strokeStyle = '#78909C';
  ctx.lineWidth = 6;
  ctx.beginPath(); ctx.moveTo(w * 0.85, h * 0.3); ctx.lineTo(w * 0.95, h * 0.3);
  ctx.lineTo(w * 0.95, h * 0.6); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(w * 0.15, h * 0.35); ctx.lineTo(w * 0.05, h * 0.35);
  ctx.lineTo(w * 0.05, h * 0.6); ctx.stroke();
}

function generateSceneDataURL(drawFn) {
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 350;
  drawFn(canvas.getContext('2d'), 400, 350);
  return canvas.toDataURL('image/png');
}

function renderSticker() {
  // Render background options
  const bgStrip = document.getElementById('sticker-bg-strip');
  // Keep the upload button, remove any previously added scene options
  bgStrip.querySelectorAll('.scene-bg-option').forEach(el => el.remove());

  STOCK_SCENES.forEach((scene, idx) => {
    const areaComplete = AREAS[scene.areaIndex].pokemon.every(id => isCaught(id));
    if (!areaComplete) return; // Only show scenes for completed areas

    const option = document.createElement('div');
    option.className = 'sticker-bg-option scene-bg-option';
    const thumbUrl = generateSceneDataURL(scene.draw);
    option.innerHTML = `
      <img src="${thumbUrl}" alt="${scene.name}">
      <div class="bg-scene-label">${scene.name}</div>
    `;
    option.addEventListener('click', () => setSceneBackground(scene.draw, scene.name));
    bgStrip.appendChild(option);
  });

  // Render pokemon sticker strip
  const strip = document.getElementById('sticker-strip');
  strip.innerHTML = '';

  if (gameState.caught.length === 0) {
    strip.innerHTML = '<div class="sticker-strip-empty">Catch Pokemon to use as stickers!</div>';
    return;
  }

  [...gameState.caught].sort((a, b) => a - b).forEach(id => {
    const displayId = getDisplayId(id);
    const item = document.createElement('div');
    item.className = 'sticker-strip-item';
    item.innerHTML = `<img src="${spriteUrl(displayId)}" alt="${getDisplayName(id)}" crossorigin="anonymous">`;
    item.addEventListener('click', () => addStickerToCanvas(displayId));
    strip.appendChild(item);
  });
}

function setBackground(imgSrc) {
  const wrap = document.getElementById('sticker-canvas-wrap');
  placedStickers = [];
  wrap.querySelectorAll('.sticker-item').forEach(el => el.remove());
  wrap.querySelectorAll('.sticker-bg-img, .sticker-bg-canvas').forEach(el => el.remove());
  document.getElementById('sticker-placeholder').style.display = 'none';

  stickerPhoto = new Image();
  stickerPhoto.onload = () => {
    const bgImg = document.createElement('img');
    bgImg.className = 'sticker-bg-img';
    bgImg.src = imgSrc;
    wrap.prepend(bgImg);
  };
  stickerPhoto.src = imgSrc;
}

function setSceneBackground(drawFn, sceneName) {
  const wrap = document.getElementById('sticker-canvas-wrap');
  const wrapRect = wrap.getBoundingClientRect();

  const canvas = document.createElement('canvas');
  canvas.width = Math.max(wrapRect.width * 2, 400);
  canvas.height = Math.max(wrapRect.height * 2, 350);
  drawFn(canvas.getContext('2d'), canvas.width, canvas.height);

  currentBgName = sceneName;
  setBackground(canvas.toDataURL('image/png'));
}

document.getElementById('photo-upload').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (evt) => {
    const img = new Image();
    img.onload = () => {
      const maxDim = 1200;
      let w = img.width, h = img.height;
      if (w > maxDim || h > maxDim) {
        const ratio = Math.min(maxDim / w, maxDim / h);
        w *= ratio;
        h *= ratio;
      }

      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);

      currentBgName = null;
      setBackground(canvas.toDataURL('image/jpeg', 0.9));
    };
    img.src = evt.target.result;
  };
  reader.readAsDataURL(file);
});

function addStickerToCanvas(pokemonId) {
  const wrap = document.getElementById('sticker-canvas-wrap');
  document.getElementById('sticker-placeholder').style.display = 'none';

  const img = document.createElement('img');
  img.className = 'sticker-item';
  img.src = spriteUrl(pokemonId);
  img.crossOrigin = 'anonymous';
  img.draggable = false;

  // Place in center
  const wrapRect = wrap.getBoundingClientRect();
  const size = 80;
  img.style.left = (wrapRect.width / 2 - size / 2) + 'px';
  img.style.top = (wrapRect.height / 2 - size / 2) + 'px';
  img.style.width = size + 'px';
  img.style.height = size + 'px';

  const stickerData = { element: img, imgSrc: spriteUrl(pokemonId), scale: 1 };
  placedStickers.push(stickerData);

  enableStickerDrag(img, stickerData);
  wrap.appendChild(img);
}

function enableStickerDrag(el, data) {
  let startX, startY, startLeft, startTop;
  let initialPinchDist = 0;
  let baseWidth = 80;

  el.addEventListener('touchstart', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.touches.length === 1) {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      startLeft = el.offsetLeft;
      startTop = el.offsetTop;
    } else if (e.touches.length === 2) {
      initialPinchDist = getPinchDist(e.touches);
      baseWidth = el.offsetWidth;
    }
  }, { passive: false });

  el.addEventListener('touchmove', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.touches.length === 1 && initialPinchDist === 0) {
      const touch = e.touches[0];
      el.style.left = (startLeft + touch.clientX - startX) + 'px';
      el.style.top = (startTop + touch.clientY - startY) + 'px';
    } else if (e.touches.length === 2) {
      const dist = getPinchDist(e.touches);
      const scale = dist / initialPinchDist;
      const newSize = Math.max(40, Math.min(200, baseWidth * scale));
      el.style.width = newSize + 'px';
      el.style.height = newSize + 'px';
      data.scale = newSize / 80;
    }
  }, { passive: false });

  el.addEventListener('touchend', (e) => {
    if (e.touches.length === 0) {
      initialPinchDist = 0;
    }
  });

  // Mouse support for desktop
  let mouseDown = false;
  el.addEventListener('mousedown', (e) => {
    e.preventDefault();
    mouseDown = true;
    startX = e.clientX;
    startY = e.clientY;
    startLeft = el.offsetLeft;
    startTop = el.offsetTop;
  });

  document.addEventListener('mousemove', (e) => {
    if (!mouseDown) return;
    el.style.left = (startLeft + e.clientX - startX) + 'px';
    el.style.top = (startTop + e.clientY - startY) + 'px';
  });

  document.addEventListener('mouseup', () => {
    mouseDown = false;
  });
}

function getPinchDist(touches) {
  return Math.hypot(
    touches[0].clientX - touches[1].clientX,
    touches[0].clientY - touches[1].clientY
  );
}

document.getElementById('save-sticker-btn').addEventListener('click', saveStickerImage);

function saveStickerImage() {
  const wrap = document.getElementById('sticker-canvas-wrap');
  const wrapRect = wrap.getBoundingClientRect();

  const canvas = document.createElement('canvas');
  // Use higher res for quality
  const scale = 2;
  canvas.width = wrapRect.width * scale;
  canvas.height = wrapRect.height * scale;
  const ctx = canvas.getContext('2d');
  ctx.scale(scale, scale);

  // Draw background
  if (stickerPhoto) {
    // Fill white background first
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, wrapRect.width, wrapRect.height);

    // Draw photo to fit
    const imgRatio = stickerPhoto.width / stickerPhoto.height;
    const wrapRatio = wrapRect.width / wrapRect.height;
    let dw, dh, dx, dy;
    if (imgRatio > wrapRatio) {
      dw = wrapRect.width;
      dh = wrapRect.width / imgRatio;
      dx = 0;
      dy = (wrapRect.height - dh) / 2;
    } else {
      dh = wrapRect.height;
      dw = wrapRect.height * imgRatio;
      dx = (wrapRect.width - dw) / 2;
      dy = 0;
    }
    ctx.drawImage(stickerPhoto, dx, dy, dw, dh);
  } else {
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, wrapRect.width, wrapRect.height);
  }

  // Draw stickers in order
  const stickerEls = Array.from(wrap.querySelectorAll('.sticker-item'));

  if (stickerEls.length === 0) {
    triggerDownload(canvas);
    return;
  }

  // Load all sticker images, then draw in DOM order
  Promise.all(stickerEls.map(el => {
    return new Promise(resolve => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve({ img, el });
      img.onerror = () => resolve({ img: null, el });
      img.src = el.src;
    });
  })).then(results => {
    results.forEach(({ img, el }) => {
      if (img) {
        ctx.drawImage(img, el.offsetLeft, el.offsetTop, el.offsetWidth, el.offsetHeight);
      }
    });
    triggerDownload(canvas);
  });
}

function formatDateTime() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}_${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

function triggerDownload(canvas) {
  const link = document.createElement('a');
  const dt = formatDateTime();
  if (currentBgName) {
    const safeName = currentBgName.toLowerCase().replace(/[^a-z0-9]+/g, '_');
    link.download = `${safeName}_${dt}.png`;
  } else {
    link.download = `pokemon_catcher_${dt}.png`;
  }
  link.href = canvas.toDataURL('image/png');
  link.click();
}

// ===== SPRITE PRELOADING =====
function preloadSprites() {
  const allIds = AREAS.flatMap(a => a.pokemon);
  allIds.forEach(id => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = spriteUrl(id);
  });
}

// ===== INITIALIZATION =====
loadState();
preloadSprites();
showScreen('map');

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .catch(err => console.log('SW registration failed:', err));
}
