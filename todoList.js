const todoList = {
  items: [
    {
      text: "Завершить текущий челлендж",
      completed: false,
    },
    {
      text: "Отдохнуть во время перерыва",
      completed: false,
    },
    {
      text: "Помочь напарнику понять код",
      completed: false,
    },
    {
      text: "Выиграть в мафию",
      completed: true,
    },
  ],

  printAll: function () {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.print(i));
    }
  },

  add: function (text) {
    const newObj = {
      text: "Перейти к следующему релизу",
      completed: false,
    };
    items.unshift(newObj);
  },

  remove: function (index) {
    this.items.splice(index, 1);
    return this.items;
  },

  print: function (index) {
    console.log(this.items[index].text);

    if (this.items.completed === false) {
      return `[ ] + ${this.items[index]}`;
    }
    if (this.items.completed === true) return `[x] + ${this.items[index]}`;
  },

  complete: function (index) {
    this.items[index].completed = true;
  },
};
