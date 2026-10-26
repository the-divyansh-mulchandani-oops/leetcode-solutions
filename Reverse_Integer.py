class Solution:
    def reverse(self, x: int) -> int:
        if x<0:
            negative_flag=-1
            x=x*-1
        else:
            negative_flag=1
        x=str(x)
        x=x[::-1] ## or use for loop
        x=int(x)
        x=x*negative_flag
        min_val=-1*(2**31)
        max_val=-1*min_val
        max_val+=-1
        if x<min_val or x>max_val:
            return 0
        return x
