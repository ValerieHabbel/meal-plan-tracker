# Meal Plan Tracker

A small mobile-friendly web app for following a weekly meal plan: see each day's meals and recipes, and tick them off as you eat them. No build step, no backend — static files only.

## Use it

Open `index.html` in a browser, or serve the folder locally:

```
python -m http.server 8000
```

then visit `http://localhost:8000`.

On a phone, open the deployed URL and use "Add to Home Screen" to install it like an app (works offline after the first load).

## Views

- **Today** — today's meals, macro targets, and check-off boxes
- **Week** — the full 7-day rotation, checkable per day
- **Recipes** — every recipe, snack, and alternate in one browsable list

Checked-off state is stored per calendar date in the browser's `localStorage`, so each new day starts fresh automatically.
