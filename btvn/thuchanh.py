import math
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

# a= float(input("Nhap a ="))
# b= float(input("Nhap b ="))
# c= float(input("Nhap c ="))
# if a == 0 :
#     if b == 0 :
#         if c == 0 :
#             print('phuong trinh vo so nghiem')
#         else :
#             print('phuong trinh vo nghiem')
#     else :
#         print('phuong trinh co 1 nghiem x=' + str(-c/b))
# else :
#     delta = (b*b-4*a*c)
#     if (delta > 0):
#         x1 = (-b+sqrt(delta))/2*a
#         x2 = (-b-sqrt(delta))/2*a
#         print( "Phuong trinh co 2 nghiem phan biet:")  
#         print("x1=" + str(x1))
#         print("x2=" + str(x2)) 
#     elif (delta == 0) :
#         print('Phuong trinh co nghiem kep x=' + str(-b/2*a))
#     else :
#         print('phuong trinh vo nghiem')

# a= float(input("Nhap a ="))
# b= float(input("Nhap b ="))
# c= float(input("Nhap c ="))
# if (a == 0) :
#     if(b == 0) :
#         if (c <= 0) :
#             print('bat phuong trinh vo ly')
#         else :
#             print('bat phuong trinh co nghiem thuoc R') 
#     elif (b > 0) :
#         print('phuong trinh co nghiem x >' + str(-c/b)) 
#     else :
#         print('phuong trinh co nghiem x <' + str(-c/b)) 
# else :       
#     delta = (b*b-4*a*c)
#     if (delta < 0) :
#         if (a < 0) :
#             print('bat phuong trinh vo nghiem')
#         elif (a > 0) :
#             print('bat phuong trinh co nghiem thuoc R')
#     elif (delta == 0) :
#         if (a < 0) :
#             print('bat phuong trinh vo nghiem')
#         elif (a > 0) :
#             print('bat phuong trinh co nghiem thuoc R tru' + str(-b/2*a))
#     else :
#         x1 = (-b+sqrt(delta))/2*a
#         x2 = (-b-sqrt(delta))/2*a
#         if (a > 0) :
#             print('bat phuong trinh co nghiem (−∞;' + str(x1) + ')∪(' + str(x2) +';+∞)')
#         elif (a < 0) :
#             print('bat phuong trinh co nghiem tu ' + str(x1) + 'den' + str(x2))

# n = int(input('nhap so luong virus'))
# s = n
# i = 1
# while s <= 1000000000 :
#     s = s*2
#     i = i + 1
# print('sau',i,'ngay so luong virus vuot 1 ti')

# n = int(input('nhap so tien(trieu dong)'))
# s = n
# i = 0
# for x in range (1,11) :
#     s = s + (s * 7 / 100)
#     i = i + 1
#     print('nam thu',i, 'so tien la',round(s,2),'trieu dong')

# n = int(input('n='))
# for x in range (1,11) :
#     a = n * x
#     print(f'{n} x {x} = {a}')

# def pi() :
#     pi = 0
#     n = 4
#     d = 1
#     for i in range (1,1000000) :
#         a = 2*(i % 2) - 1
#         pi += a * n / d
#         d += 2
#     print(pi)
# pi()

# for x in range (1 , 11) :
#     for y in range (x , 101 , 10) :
#         print(y , end = '')
#     print

# n = int(input('n='))
# count = 0
# sum = 0
# while(n != 0) :
#     csc = n % 10
#     count = count + 1
#     sum = sum + csc
#     n = n // 10
# print(count)
# print(sum)

# n = int(input('n='))
# i = 2
# while (n > 1) :
#     while (n % i != 0) :
#         i = i + 1
#     print(i , end = '')
#     n = n // i

# def pi(n) :
#     p = 1
#     a = 1
#     for x in range (1 , n) :
#         a = a + 2
#         if x % 2 == 1 :
#             p = p - 1 / a
#         else :
#             p = p + 1 / a
#     return (4 * p)
# print(pi(123456))

# a = int(input('a ='))
# def rectangle(b) :
#     for x in range(1 , b + 1) :
#         if (x == 1) | (x == b) :
#             print(10 * '*')
#         else :
#             print('*' , ' ' * 6 , '*')
# print(rectangle(a))
