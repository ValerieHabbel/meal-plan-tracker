// Meal plan data — merged from meal-plan (1).md and recipes.md
// All quantities are per serving unless noted otherwise.

const RECIPES = {
  oats: {
    title: "Overnight Oats (base recipe)",
    servings: 1,
    ingredients: [
      "Oats: 50g (rest days) / 60g (training/cycling days) / 70g (Tuesday)",
      "Protein powder: 1 scoop, ~25-30g",
      "Milk or unsweetened soy milk: 180ml",
      "Fruit: ~80-100g (a banana, or a handful of berries)",
      "Optional: 1 tsp chia or flax seeds",
    ],
    method:
      "Combine oats, protein powder, and milk in a jar. Stir well so the powder doesn't clump. Top with fruit (fresh fruit can go in the night before or added in the morning — berries hold up fine overnight, banana is better added fresh). Seeds can go in with the oats. Refrigerate overnight.",
  },
  bigSalad: {
    title: "Big Salad (Tue/Fri office days)",
    servings: 1,
    ingredients: [
      "Chickpeas, cooked/canned, drained: 150g",
      "Cooked beetroot: 80g, diced",
      "Egg: 1 large, boiled (add a 2nd egg on Tuesday)",
      "Mixed salad greens: 100g",
      "Extra vegetables (cucumber, tomato, pepper): ~100g, chopped",
      "Olive oil: 1 tbsp (15ml)",
      "Lemon juice or vinegar: 1 tbsp",
      "On Fri: add 30g feta, crumbled",
    ],
    method:
      "Toss greens, chickpeas, beetroot, and chopped vegetables together. Top with halved boiled egg(s). Whisk olive oil and lemon juice/vinegar, drizzle over. On Tuesday, add a slice of bread (40g) or a small cooked grain portion (60g cooked) on the side.",
  },
  lentilSoup: {
    title: "Lentil Soup + Feta (Mon)",
    servings: 1,
    ingredients: [
      "Red or green lentils, dry: 60g",
      "Vegetable stock: 400ml",
      "Onion: ½, diced",
      "Carrot: 1, diced",
      "Garlic: 1 clove, minced",
      "Feta: 30g, crumbled on top",
      "Bread: 1 slice (40g)",
    ],
    method:
      "Sauté onion, carrot, and garlic in a little olive oil until soft. Add lentils and stock, simmer 20-25 min until lentils are tender. Blend partially or leave chunky. Top with feta, serve with bread.",
  },
  tofuStirFry: {
    title: "Tofu & Vegetable Stir-Fry with Rice (Mon — cook double)",
    servings: 2,
    note: "Makes 2 servings — eat one Monday, refrigerate the other for Wednesday's lunch.",
    ingredients: [
      "Firm tofu: 300g total, cubed (150g/serving)",
      "Mixed stir-fry vegetables (broccoli, carrot, pepper, mangetout): 400g total (200g/serving)",
      "Garlic: 2 cloves, minced",
      "Ginger: 2 tsp, grated",
      "Soy sauce: 4 tbsp total",
      "Sesame oil: 2 tsp total",
      "Rice, dry: 120g total (≈160g cooked per serving)",
    ],
    method:
      "Cook rice per package instructions — enough for both servings. Pan-fry tofu cubes in a little oil until golden on most sides, set aside. Stir-fry vegetables with garlic and ginger 4-5 min until just tender. Return tofu to pan, add soy sauce and sesame oil, toss to coat. Split stir-fry and rice into two portions; refrigerate one for Wednesday (reheats well, or eat cold as a rice-bowl-style lunch).",
  },
  salmonDinner: {
    title: "Salmon, Roasted Potatoes & Greens (Tue — bigger portion)",
    servings: 1,
    ingredients: [
      "Salmon fillet: 120g",
      "Potatoes: 250g, cut into wedges",
      "Green vegetables (broccoli, green beans, or spinach): 150g",
      "Olive oil: 1 tbsp",
      "Lemon: ½, for serving",
      "Bread or extra grain: 1 slice/small portion on the side, since Tuesday needs the extra carbs",
    ],
    method:
      "Toss potato wedges in olive oil, roast at 200°C for 30-35 min, turning halfway. Season salmon and bake or pan-sear (bake: 200°C for 12-15 min; pan: 4 min skin-side down, 2-3 min other side). Steam or sauté greens. Serve together with a lemon wedge.",
  },
  whiteBeanStew: {
    title: "White Bean & Vegetable Stew with Parmesan (Wed — cook double)",
    servings: 2,
    note: "Makes 2 servings — eat one Wednesday, refrigerate the other for Thursday's lunch.",
    ingredients: [
      "White beans (cannellini or butter beans), cooked/canned: 400g total (200g/serving)",
      "Tinned tomatoes: 400g total (200g/serving)",
      "Onion: 1, diced",
      "Celery: 2 sticks, diced",
      "Carrot: 2, diced",
      "Garlic: 2 cloves, minced",
      "Parmesan, grated: 40g total (20g/serving)",
      "Crusty bread: 1 slice per serving (40g)",
    ],
    method:
      "Sauté onion, celery, carrot, and garlic until softened. Add tomatoes and beans, simmer 15-20 min until thickened — enough for both servings. Season well. Split into two containers, top each with parmesan. Refrigerate one for Thursday (reheats well; stews often taste better the next day).",
  },
  shrimpPasta: {
    title: "Shrimp & Vegetable Pasta (Thu)",
    servings: 1,
    ingredients: [
      "Shrimp/prawns, raw, peeled: 150g",
      "Whole wheat pasta, dry: 85g",
      "Cherry tomatoes: 100g, halved",
      "Garlic: 1-2 cloves, minced",
      "Spinach or courgette: 80g",
      "Olive oil: 1 tbsp",
      "Chili flakes: pinch (optional)",
    ],
    method:
      "Cook pasta per package instructions. Meanwhile, sauté garlic in olive oil, add shrimp and cook 2-3 min per side until pink. Add tomatoes and spinach/courgette, cook until tomatoes soften and greens wilt. Toss with drained pasta.",
  },
  bakedCod: {
    title: "Baked Cod, Roasted Vegetables & Wild Rice (Fri)",
    servings: 1,
    ingredients: [
      "Cod fillet: 130g",
      "Wild rice (or wild rice blend), dry: 60g (≈160g cooked)",
      "Roasted vegetables (courgette, pepper, red onion): 150g",
      "Olive oil: 1 tbsp",
      "Lemon: ½",
    ],
    method:
      "Cook wild rice per package instructions (usually 25-40 min). Toss vegetables in olive oil, roast at 200°C for 20-25 min. Season cod, bake at 200°C for 12-15 min until opaque and flakes easily. Serve together with lemon.",
  },
  whiteBeanEggFetaSalad: {
    title: "White Bean, Egg & Feta Salad (Sat — cook double)",
    servings: 2,
    note: "Makes 2 servings — eat one Saturday, refrigerate the other for Sunday.",
    ingredients: [
      "White beans (cannellini), cooked/canned: 240g total (120g/serving)",
      "Eggs: 2, boiled (1/serving)",
      "Feta: 80g total (40g/serving)",
      "Mixed salad leaves: 160g total (80g/serving)",
      "Cherry tomatoes: 160g total (80g/serving), halved",
      "Red onion: ½, thinly sliced (split across both)",
      "Olive oil: 2 tbsp total",
      "Red wine vinegar: 2 tbsp total",
      "Bread: 1 slice per serving (40g)",
    ],
    method:
      "Combine beans, tomatoes, onion, and leaves in a large bowl — enough for both servings. Boil eggs (8-9 min for a slightly firm yolk), halve. Dress with olive oil and vinegar, toss. Split into two containers, top each with 1 egg and half the feta. Store the second portion in the fridge (add the dressing fresh to that one if you can, so the leaves don't wilt overnight — or dress just before eating).",
  },
  tofuCurry: {
    title: "Tofu Curry with Brown Rice (Sat — cook double)",
    servings: 2,
    note: "Makes 2 servings — eat one Saturday, refrigerate the other for Sunday's dinner.",
    ingredients: [
      "Firm tofu: 300g total, cubed (150g/serving)",
      "Coconut milk: 400ml total (light or regular)",
      "Curry paste (red or yellow): 4 tbsp total",
      "Mixed vegetables (pepper, spinach, green beans): 300g total (150g/serving)",
      "Brown rice, dry: 130g total (≈180g cooked per serving)",
    ],
    method:
      "Cook brown rice per package instructions — enough for both servings. Pan-fry tofu until lightly golden, set aside. In the same pan, fry curry paste 1-2 min, add coconut milk, bring to a simmer. Add vegetables, cook 5-7 min. Return tofu to pan, warm through. Split curry and rice into two portions; refrigerate one for Sunday (reheats very well — curries often improve overnight).",
  },
};

const SNACKS = {
  yogurtBerries: { title: "Greek yogurt + berries", ingredients: ["150g yogurt", "60g berries", "small handful granola"] },
  proteinShake: { title: "Protein shake + banana", ingredients: ["1 scoop protein powder", "water or milk", "1 banana", "handful granola"] },
  yogurtBananaGranola: { title: "Greek yogurt + banana + granola", ingredients: ["150-200g Greek yogurt", "1 banana", "handful granola"] },
  cottageCheese: { title: "Cottage cheese + cucumber", ingredients: ["150g cottage cheese", "sliced cucumber", "few rice cakes"] },
  edamame: { title: "Edamame", ingredients: ["100g shelled, steamed"] },
  yogurtHoney: { title: "Greek yogurt + honey", ingredients: ["150g yogurt", "1 tsp honey"] },
  hummus: { title: "Hummus + veg sticks", ingredients: ["60g hummus", "carrot/pepper sticks"] },
  almondsApple: { title: "Almonds + apple", ingredients: ["25g almonds", "1 apple"] },
  cottageCheeseApple: { title: "Cottage cheese + apple", ingredients: ["150-200g cottage cheese", "1 apple"] },
};

const ALTERNATES = {
  quinoaBowl: {
    title: "Quinoa Bowl",
    ingredients: ["Quinoa: 60g dry", "Roasted vegetables: 150g", "Chickpeas: 100g", "Feta: 30g", "Tahini-lemon dressing: 1 tbsp tahini + 1 tbsp lemon juice, thinned with water"],
  },
  halloumiGrainBowl: {
    title: "Halloumi & Roasted Vegetable Grain Bowl",
    ingredients: ["Halloumi: 80g, sliced and pan-fried", "Grain (bulgur/farro/quinoa): 60g dry", "Roasted vegetables: 150g", "Rocket: 50g", "Olive oil + balsamic glaze"],
  },
  veggieBeanChili: {
    title: "Veggie & Bean Chili",
    ingredients: ["Kidney/black beans: 200g", "Tinned tomatoes: 200g", "Onion: ½", "Pepper: 1", "Garlic: 1 clove", "Chili powder + cumin: 1 tsp each", "Greek yogurt: 2 tbsp, to top"],
  },
};

// Per-meal macros below are from the "protein-boosted" version of the plan
// (yogurt added in place of shakes, extra egg/feta on some days) — estimates,
// not lab-precise.
// getDay(): Sun=0..Sat=6 — DAYS is ordered Mon..Sun, so index = (getDay()+6)%7
const DAYS = [
  {
    key: "mon",
    name: "Monday",
    activity: "WFH, strength training",
    targets: { kcal: 1800, protein: 150, carbs: 180, fat: 55 },
    meals: {
      breakfast: { recipe: "oats", note: "60g oats + Greek yogurt", macros: { kcal: 560, protein: 49, carbs: 73, fat: 8 } },
      lunch: { recipe: "lentilSoup", note: "+ egg + 60g feta (boosted)", macros: { kcal: 650, protein: 39, carbs: 68, fat: 20 } },
      dinner: { recipe: "tofuStirFry", note: "180g tofu", macros: { kcal: 565, protein: 32, carbs: 66, fat: 17.5 } },
      snack: { snack: "yogurtBerries", macros: { kcal: 185, protein: 17, carbs: 23, fat: 2 } },
    },
  },
  {
    key: "tue",
    name: "Tuesday",
    activity: "Office, 70min cycling + 90min rowing — big day",
    targets: { kcal: 2800, protein: 150, carbs: 410, fat: 60 },
    meals: {
      breakfast: { recipe: "oats", note: "70g oats + extra fruit + yogurt", macros: { kcal: 705, protein: 60.5, carbs: 96, fat: 9 } },
      lunch: { recipe: "bigSalad", note: "extra egg + slice of bread", macros: { kcal: 665, protein: 32, carbs: 75, fat: 29 } },
      dinner: { recipe: "salmonDinner", note: "bigger potatoes + bread", macros: { kcal: 810, protein: 41, carbs: 91, fat: 31.5 } },
      snack: { snack: "yogurtBananaGranola", macros: { kcal: 342, protein: 28, carbs: 50, fat: 3 } },
    },
  },
  {
    key: "wed",
    name: "Wednesday",
    activity: "WFH, strength training, 30min cycling",
    targets: { kcal: 2000, protein: 150, carbs: 220, fat: 55 },
    meals: {
      breakfast: { recipe: "oats", note: "60g oats + Greek yogurt", macros: { kcal: 560, protein: 49, carbs: 73, fat: 8 } },
      lunch: { recipe: "tofuStirFry", leftoverFrom: "Monday", macros: { kcal: 565, protein: 32, carbs: 66, fat: 17.5 } },
      dinner: { recipe: "whiteBeanStew", note: "boosted", macros: { kcal: 610, protein: 35, carbs: 84, fat: 15 } },
      snack: { snack: "cottageCheese", macros: { kcal: 200, protein: 19, carbs: 22, fat: 3 } },
    },
  },
  {
    key: "thu",
    name: "Thursday",
    activity: "Different office, 30min cycling",
    targets: { kcal: 1750, protein: 150, carbs: 165, fat: 55 },
    meals: {
      breakfast: { recipe: "oats", note: "50g oats + Greek yogurt", macros: { kcal: 523, protein: 47.7, carbs: 67, fat: 7.3 } },
      lunch: { recipe: "whiteBeanStew", leftoverFrom: "Wednesday", macros: { kcal: 610, protein: 35, carbs: 84, fat: 15 } },
      dinner: { recipe: "shrimpPasta", note: "200g shrimp (boosted)", macros: { kcal: 630, protein: 48, carbs: 65, fat: 17 } },
      snack: { snack: "edamame", macros: { kcal: 120, protein: 11, carbs: 9, fat: 5 } },
    },
  },
  {
    key: "fri",
    name: "Friday",
    activity: "Office, 50min cycling",
    targets: { kcal: 1900, protein: 150, carbs: 195, fat: 55 },
    meals: {
      breakfast: { recipe: "oats", note: "60g oats + Greek yogurt", macros: { kcal: 560, protein: 49, carbs: 73, fat: 8 } },
      lunch: { recipe: "bigSalad", note: "+ 2 eggs + 40g feta", macros: { kcal: 610, protein: 32, carbs: 58, fat: 30 } },
      dinner: { recipe: "bakedCod", macros: { kcal: 450, protein: 36, carbs: 46, fat: 15.5 } },
      snack: { snack: "yogurtHoney", macros: { kcal: 110, protein: 15, carbs: 11, fat: 0 } },
    },
  },
  {
    key: "sat",
    name: "Saturday",
    activity: "Strength training, 30min cycling",
    targets: { kcal: 2000, protein: 150, carbs: 220, fat: 55 },
    meals: {
      breakfast: { recipe: "oats", note: "60g oats + Greek yogurt", macros: { kcal: 560, protein: 49, carbs: 73, fat: 8 } },
      lunch: { recipe: "whiteBeanEggFetaSalad", note: "boosted", macros: { kcal: 715, protein: 37, carbs: 60, fat: 35.7 } },
      dinner: { recipe: "tofuCurry", note: "180g tofu", macros: { kcal: 650, protein: 36, carbs: 73, fat: 24 } },
      snack: { snack: "hummus", macros: { kcal: 205, protein: 6, carbs: 17, fat: 12 } },
    },
  },
  {
    key: "sun",
    name: "Sunday",
    activity: "Rest day",
    targets: { kcal: 1600, protein: 150, carbs: 130, fat: 50 },
    meals: {
      breakfast: { recipe: "oats", note: "50g oats + Greek yogurt", macros: { kcal: 523, protein: 47.7, carbs: 67, fat: 7.3 } },
      lunch: { recipe: "whiteBeanEggFetaSalad", leftoverFrom: "Saturday", macros: { kcal: 715, protein: 37, carbs: 60, fat: 35.7 } },
      dinner: { recipe: "tofuCurry", leftoverFrom: "Saturday", macros: { kcal: 650, protein: 36, carbs: 73, fat: 24 } },
      snack: { snack: "cottageCheeseApple", macros: { kcal: 215, protein: 18.5, carbs: 30, fat: 3 } },
    },
  },
];

const MEAL_SLOTS = ["breakfast", "lunch", "dinner", "snack"];
const SLOT_LABELS = { breakfast: "Breakfast", lunch: "Lunch", dinner: "Dinner", snack: "Snack" };
