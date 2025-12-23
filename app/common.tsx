export enum Problem {
  problem1 = `
Бодлого 1.

n = int(input())

# n sondgoi bol tegsh untsugt uuseh bolomjgui gej shalgana yagd gevel bodlog der eyreg burel too gej ugsun
if n % 2 == 1:
    print(0)
else:
  # hylbar bodohin tuld niit urta huvaana 
    k = n // 2
    
    # garch irsen value g tegsh sondgoigoorn shalgaad 
    if k % 2 == 1:  # sondgoi baival tegsh untsugt uusehgui uchras 
        result = (k - 1) // 2 # orj irsen ees 1 iig hasaad 2 huvaana bolomjit too garch irne
    else: 
        result = k // 2 - 1 
    
    print(result)
  `,

  problem2 = `n = int(input())
a = list(map(int, input().split()))

max_squares = 0

# Бүх боломжит эхлэх өнгийг турших (0-ээс n-1)
for start in range(n):
    # Хамгийн бага будгийн хэмжээг олох
    min_paint = min(a)
    
    # Бүтэн cycle-ээр будагдсан квадратуудын тоо
    total = min_paint * n
    
    # Үлдсэн будгийн массив
    remaining = [a[i] - min_paint for i in range(n)]
    
    # start өнгөөс эхлээд үлдсэн будгаар хэдэн нэмэлт квадрат будаж чадах
    pos = start
    while remaining[pos] > 0:
        remaining[pos] -= 1
        total += 1
        pos = (pos + 1) % n
    
    max_squares = max(max_squares, total)

print(max_squares)`,
}
