class Sol():
    def evenN(self,n):
        if n<=0:
            return 
        self.evenN(n-1)
        print(2*n, end=' ')
n=int(input())
Sol().evenN(n)
