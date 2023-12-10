/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Приклад використання з рядковим ключем та числовим значенням
const stringNumberPair: KeyValuePair<string, number> = {
  key: "example",
  value: 42,
};

// Приклад використання з числовим ключем та рядковим значенням
const numberStringPair: KeyValuePair<number, string> = {
  key: 123,
  value: "example",
};

export {};