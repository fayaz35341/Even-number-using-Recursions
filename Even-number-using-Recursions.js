class Sol{
    evenN(n){
        if (n<=0){
            return
        }
        this.evenN(n-1)
        console.log(2*n)
    }
}
const n=parseInt(prompt('enter a Number'))
new Sol().evenN(n)
