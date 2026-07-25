// Meal Plan Tracker — rendering + tick-off logic

const STORAGE_KEY = "mealplan-checks-v1";

function loadChecks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveChecks(checks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(checks));
}

let checks = loadChecks();

function isChecked(dateKey, slot) {
  return !!(checks[dateKey] && checks[dateKey][slot]);
}

function toggleChecked(dateKey, slot) {
  if (!checks[dateKey]) checks[dateKey] = {};
  checks[dateKey][slot] = !checks[dateKey][slot];
  saveChecks(checks);
}

function toISODate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

// DAYS is ordered Mon..Sun; Date#getDay() is Sun=0..Sat=6
function dayIndexFor(date) {
  return (date.getDay() + 6) % 7;
}

function mondayOf(date) {
  const idx = dayIndexFor(date);
  const monday = new Date(date);
  monday.setDate(date.getDate() - idx);
  return monday;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function recipeFor(mealDef) {
  if (mealDef.recipe) return RECIPES[mealDef.recipe];
  if (mealDef.snack) return SNACKS[mealDef.snack];
  return null;
}

function renderMealCard(dateKey, slot, mealDef) {
  const recipe = recipeFor(mealDef);
  if (!recipe) return "";
  const checked = isChecked(dateKey, slot);
  const leftoverNote = mealDef.leftoverFrom
    ? `<div class="leftover-note">🔁 leftover from ${mealDef.leftoverFrom}</div>`
    : "";
  const extraNote = mealDef.note ? `<div class="meal-note">${escapeHtml(mealDef.note)}</div>` : "";
  const batchNote = recipe.note ? `<div class="meal-note">${escapeHtml(recipe.note)}</div>` : "";

  const ingredientsHtml = recipe.ingredients
    .map((i) => `<li>${escapeHtml(i)}</li>`)
    .join("");
  const methodHtml = recipe.method
    ? `<p class="method"><strong>Method:</strong> ${escapeHtml(recipe.method)}</p>`
    : "";

  return `
    <div class="meal-card ${checked ? "checked" : ""}">
      <label class="meal-header">
        <input type="checkbox" data-date="${dateKey}" data-slot="${slot}" class="meal-checkbox" ${checked ? "checked" : ""} />
        <span class="slot-label">${SLOT_LABELS[slot]}</span>
        <span class="meal-title">${escapeHtml(recipe.title)}</span>
      </label>
      ${leftoverNote}
      ${extraNote}
      <details class="recipe-details">
        <summary>Recipe</summary>
        ${batchNote}
        <ul class="ingredients">${ingredientsHtml}</ul>
        ${methodHtml}
      </details>
    </div>
  `;
}

function renderMacroBar(targets) {
  return `
    <div class="macro-bar">
      <div class="macro"><span class="macro-value">${targets.kcal}</span><span class="macro-label">kcal</span></div>
      <div class="macro"><span class="macro-value">${targets.protein}g</span><span class="macro-label">protein</span></div>
      <div class="macro"><span class="macro-value">${targets.carbs}g</span><span class="macro-label">carbs</span></div>
      <div class="macro"><span class="macro-value">${targets.fat}g</span><span class="macro-label">fat</span></div>
    </div>
  `;
}

function renderDaySection(day, dateKey, showDate) {
  const dateLabel = showDate ? ` <span class="date-label">${dateKey}</span>` : "";
  const cards = MEAL_SLOTS.map((slot) => renderMealCard(dateKey, slot, day.meals[slot])).join("");
  return `
    <section class="day-section">
      <h2 class="day-heading">${day.name}${dateLabel}</h2>
      <p class="activity">${escapeHtml(day.activity)}</p>
      ${renderMacroBar(day.targets)}
      <div class="meal-cards">${cards}</div>
    </section>
  `;
}

function renderToday() {
  const today = new Date();
  const idx = dayIndexFor(today);
  const day = DAYS[idx];
  const dateKey = toISODate(today);
  document.getElementById("view").innerHTML = renderDaySection(day, dateKey, false);
}

function renderWeek() {
  const today = new Date();
  const monday = mondayOf(today);
  const todayKey = toISODate(today);
  let html = "";
  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    const dateKey = toISODate(date);
    const day = DAYS[i];
    const isToday = dateKey === todayKey;
    html += `<div class="${isToday ? "today-highlight" : ""}">${renderDaySection(day, dateKey, true)}</div>`;
  }
  document.getElementById("view").innerHTML = html;
}

function renderRecipeCard(recipe) {
  const ingredientsHtml = recipe.ingredients.map((i) => `<li>${escapeHtml(i)}</li>`).join("");
  const methodHtml = recipe.method
    ? `<p class="method"><strong>Method:</strong> ${escapeHtml(recipe.method)}</p>`
    : "";
  const noteHtml = recipe.note ? `<div class="meal-note">${escapeHtml(recipe.note)}</div>` : "";
  return `
    <details class="recipe-details recipe-list-item">
      <summary>${escapeHtml(recipe.title)}</summary>
      ${noteHtml}
      <ul class="ingredients">${ingredientsHtml}</ul>
      ${methodHtml}
    </details>
  `;
}

function renderRecipes() {
  const mains = Object.values(RECIPES).map(renderRecipeCard).join("");
  const snacks = Object.values(SNACKS).map(renderRecipeCard).join("");
  const alternates = ALTERNATES.map(renderRecipeCard).join("");
  document.getElementById("view").innerHTML = `
    <section class="recipe-group">
      <h2 class="day-heading">Mains</h2>
      ${mains}
    </section>
    <section class="recipe-group">
      <h2 class="day-heading">Snacks</h2>
      ${snacks}
    </section>
    <section class="recipe-group">
      <h2 class="day-heading">Alternates (swap-ins for variety)</h2>
      ${alternates}
    </section>
  `;
}

const VIEWS = { today: renderToday, week: renderWeek, recipes: renderRecipes };
let currentView = "today";

function switchView(view) {
  currentView = view;
  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });
  VIEWS[view]();
}

document.addEventListener("click", (e) => {
  const tabBtn = e.target.closest(".tab-button");
  if (tabBtn) {
    switchView(tabBtn.dataset.view);
  }
});

document.addEventListener("change", (e) => {
  if (e.target.classList.contains("meal-checkbox")) {
    const { date, slot } = e.target.dataset;
    toggleChecked(date, slot);
    const card = e.target.closest(".meal-card");
    if (card) card.classList.toggle("checked", e.target.checked);
  }
});

switchView("today");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
