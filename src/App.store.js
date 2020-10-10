import { action, observable } from "mobx"

const createItems = (ids = [1,3,4]) => {
  return ids.map(id => ({
    id,
    name: 'item with id: #' + id
  }))
}

class TodoListModel {
  @observable selectedItem
  @observable items = createItems()

  @action reloadItems = () => {
    this.items = createItems([1,2,3,4])
  }

  selectItem = (item) => {
    this.selectedItem = item
  }
}

export default new TodoListModel()