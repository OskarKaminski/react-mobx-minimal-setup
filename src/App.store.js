import { observable } from "mobx";

class TodoListModel {
  constructor(){
    this.number = observable.box(1)
  }
}

export default new TodoListModel()