import { makeObservable, observable } from 'mobx'

class HomePageCtrl {
  number = 1

  constructor() {
    makeObservable(this, {
      number: observable
    })
  }

  increment = () => {
    this.number++
  }
}

export default new HomePageCtrl()