# from math import sqrt
# #Bai 1
# a = (145)
# b = (23) 
# print(a+b, a-b, a*b, a**b, a//b, a%b)

# #Bai 2
# a=int(input("Nhap a ="))
# b=int(input("Nhap b ="))
# c=int(input("Nhap c ="))
# delta = (b*b-4*a*c)
# if (delta>0):
#     x1 = int((-b+sqrt(delta))/2*a)
#     x2 = int((-b-sqrt(delta))/2*a)
#     print( "Phuong trinh co 2 nghiem phan biet:")  
#     print("x1=" + str(x1))
#     print("x2=" + str(x2)) 
# if (delta<0):
#     print("Phuong trinh vo nghiem")

# #Bai 3
# r = 15
# pi = 3.14
# S = (pi*r**2)
# print ("Dien tich hinh tron la:" + str(S))

# #Bai 4
# a = 7
# b = 9
# c = (sqrt(a**2+b**2))
# print("Do dai canh huyen la:" + str(c))


# n=int(input("Nhap n (n < 10^9)="))
# n1 = n
# nsum = 0
# x = 0
# y = 1
# while (nsum < n1):
#     z = x + y
#     x = y
#     y = z
#     if (y > n):
#      print (x)
#      nsum = (x + nsum)
#      n = n - x
#      x = 0
#      y = 1
     
        

# n=int(input("enter n < 10⁹="))
# n1 = n
# nsum = 0
# a = 0
# b = 1
# while (nsum < n1):
#     c = a + b
#     a = b
#     b = c
#     if (b > n):
#      print (a)
#      nsum = (a + nsum)
#      n = n-a
#      a = 0
#      b = 1