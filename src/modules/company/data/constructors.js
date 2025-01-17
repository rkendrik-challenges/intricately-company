class Company {
  constructor(company = {}) {
    const {
      name = '',
      notes = '',
      spend = '',
      spendAbility = {}
    } = company

    this.name = name
    this.notes = notes
    this.spend = spend
    this.spendAbility = new SpendAbility(spendAbility)
  }
}

class SpendAbility {
  constructor (spendAbility = {}) {
    const {
      min = '',
      max = ''
    } = spendAbility

    this.min = min
    this.min = max
  }
}

export {
  Company,
  SpendAbility
}
