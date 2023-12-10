/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps {
  title?: string;
  // Додайте інші властивості, які можуть бути присутні в компоненті
}

class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

class Page extends Component<{
  title?: string; // Маємо тут тільки ту властивість, яку потрібно
}> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// Приклад використання:
const page = new Page({ title: 'My Page' });
page.pageInfo(); // Виведе "My Page"

export {};