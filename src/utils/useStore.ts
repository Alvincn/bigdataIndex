export class LOCALSTORAGE {
    setItem(name:string,value:string) {
        window.localStorage.setItem(name,value)
    }
    getItem(name:string){
        return window.localStorage.getItem(name)
    }
    removeItem(name:string){
        window.localStorage.removeItem(name)
    }
    clearItem() {
        window.localStorage.clear()
    }
}

export class SESSIONSTORAGE {
    setItem(name:string,value:string) {
        window.sessionStorage.setItem(name,value)
    }
    getItem(name:string){
        return window.sessionStorage.getItem(name)
    }
    removeItem(name:string){
        window.sessionStorage.removeItem(name)
    }
    clearItem() {
        window.sessionStorage.clear()
    }
}
