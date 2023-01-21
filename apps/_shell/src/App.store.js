import { makeObservable, observable } from 'mobx'

class TodoListModel {
  number = 1

  constructor() {
    makeObservable(this, {
      number: observable
    })
  }
}

export default new TodoListModel()