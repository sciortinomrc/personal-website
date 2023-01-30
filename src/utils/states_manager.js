class StatesManager{
    constructor(){
        this.setters={}
    }
    setUpdater(label, setter){
        this.setters[label] = setter
    }
    update(label, args){
        this.setters[label](...args)
    }
}

export default StatesManager