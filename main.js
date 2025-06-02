class Bar {
  constructor() {
    this.progress;
    this.tittle = "Minha barra de progresso";
    this.percent = 0;
    this.arrow = "↓";
    this.checkBox;
    this.add;
    this.modules = [];
    this.Render();
    this.StyleEvents();
    this.ProgressEvents();
  }

  Render(){}
  StyleEvents(){}
  ProgressEvents(){}

  RemoveBar() {}
}