import { observable } from "mobx";

class TodoListModel {
  @observable number = 1;
}

export default new TodoListModel()