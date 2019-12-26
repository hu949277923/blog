class Animal {
  private name:string;
  constructor(name: string) {
    this.name = name
  }
  move(distanceInMeters: number) {
    console.log(`test${this.name} moved ${distanceInMeters}`)
  }
}