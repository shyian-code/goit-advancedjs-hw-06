let some: unknown;
some = "Text";
let str: string;

if (typeof some === "string") {
  str = some;
} else {
  // Обробка випадку, коли тип не є string
  console.error("Значення не є рядком");
}

export {};
