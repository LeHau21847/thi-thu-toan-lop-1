import re

text = """
Bài 1: Tính
16 + 1 = 17, 10 + 1 = 11
18 - 3 = 15, 14 + 2 = 16

Bài 2: Tính
12 + 3 = 15, 19 - 4 = 15
18 + 1 = 19, 13 + 2 = 15

Bài 3: Tính
17 - 16 = 1, 16 - 12 = 4
6 + 12 = 18, 13 + 2 = 15

Bài 4: Tính
2 + 14 = 16, 16 - 2 = 14
10 - 6 = 4, 19 - 1 = 18

Bài 5: Tính
20 - 10 = 10, 10 - 10 = 0
10 + 10 = 20, 10 + 20 = 30

Bài 6: Tính
30 - 10 = 20, 30 - 20 = 10
20 + 10 = 30, 20 + 30 = 50

Bài 7: Tính
50 - 40 = 10, 10 + 40 = 50
30 + 20 = 50, 30 - 20 = 10

Bài 8: Tính
2 + 6 + 1 = 9, 9 - 4 - 1 = 4
4 + 5 + 1 = 10, 6 - 4 - 2 = 0

Bài 9: Tính
8 - 3 - 2 = 3, 6 - 2 - 3 = 1
4 - 3 - 1 = 0, 5 + 3 + 2 = 10

Bài 10: Tính
10 + 10 + 10 = 30, 30 - 10 - 10 = 10
10 + 20 + 10 = 40, 40 - 10 - 10 = 20

Bài 11: Sắp xếp các số 24, 45, 36, 58 theo thứ tự
Từ lớn đến bé: 58, 45, 36, 24
Từ bé đến lớn: 24, 36, 45, 58

Bài 12: Sắp xếp các số 46, 36, 38, 63 theo thứ tự
Từ lớn đến bé: 63, 46, 38, 36
Từ bé đến lớn: 36, 38, 46, 63

Bài 13: Sắp xếp các số 74, 95, 86, 75 theo thứ tự
Từ lớn đến bé: 95, 86, 75, 74
Từ bé đến lớn: 74, 75, 86, 95

Bài 14: Sắp xếp các số 76, 90, 85, 67 theo thứ tự
Từ lớn đến bé: 90, 85, 76, 67
Từ bé đến lớn: 67, 76, 85, 90

Bài 15: Sắp xếp các số 54, 85, 76, 80 theo thứ tự
Từ lớn đến bé: 85, 80, 76, 54
Từ bé đến lớn: 54, 76, 80, 85

Bài 16: Điền dấu >, <, =
14 + 5 > 15, 17 < 12 + 6
16 > 10 - 1, 15 - 3 < 14
14 + 3 > 10, 19 > 10 - 5
16 = 6 + 10, 17 - 4 < 14

Bài 17: Điền dấu >, <, =
18 < 12 + 7, 13 + 3 < 14
80 < 90 - 50, 80 < 40 + 50
90 > 60 + 20, 60 < 80 - 20
95 > 45 + 31, 98 > 82 - 52

Bài 18: Điền dấu >, <, =
72 - 10 > 70, 74 - 30 < 30 + 20
78 > 62 + 16, 73 + 13 > 84
90 > 30 + 50, 80 < 40 + 45
89 > 60 + 20, 60 = 40 + 20

Bài 19: Điền dấu >, <, =
90 - 10 = 80, 90 - 40 = 70 + 10

Bài 25: Tính
15 + 3 + 1 = 19, 10 + 2 - 1 = 11
15 - 4 + 8 = 19, 11 + 7 + 1 = 19

Bài 26: Tính
18 - 18 + 4 = 4, 19 - 6 + 2 = 15
18 - 6 + 1 = 13, 10 + 9 - 2 = 17
90 - 30 + 10 = 70, 80 - 80 + 70 = 70

Bài 27: Tính
20 + 30 + 10 = 60, 10 + 80 - 30 = 60
40 - 30 + 50 = 60, 20 - 10 + 70 = 80

Bài 28: Tính
50 - 30 + 20 = 40, 90 - 80 + 20 = 30
35 + 3 - 4 = 34, 56 - 20 - 4 = 32

Bài 30: Tính
30 + 4 + 10 = 44, 92 - 12 + 5 = 85
55 - 22 - 3 = 30, 30 + 16 - 6 = 40
"""

out = []
out.append('  2: {')
out.append('    title: "Tuần 2 – Luyện Tập Toán",')
out.append('    sections: [')
out.append('      {')
out.append('        id: "essay",')
out.append('        label: "BÀI TOÁN",')
out.append('        icon: "✏️",')
out.append('        questions: [')

blocks = text.strip().split('\n\n')
total_câu = 0
for b in blocks:
    lines = b.strip().split('\n')
    header = lines[0]
    b_id = header.split(':')[0].replace('Bài ', 'b').strip()
    out.append('          {')
    out.append(f'            id: "w2_{b_id}", type: "essay", section: "{header}",')
    out.append('            rows: [')
    
    if "Sắp xếp" in header:
        ans1 = lines[1].split(': ')[1]
        ans2 = lines[2].split(': ')[1]
        out.append(f'              {{ label: "Từ lớn đến bé:", inputId: "w2_{b_id}_1", answer: "{ans1}", hint: "Ví dụ: {ans1.split(",")[0]}, ...", longInput: true }},')
        out.append(f'              {{ label: "Từ bé đến lớn:", inputId: "w2_{b_id}_2", answer: "{ans2}", hint: "Ví dụ: {ans2.split(",")[0]}, ...", longInput: true }}')
        total_câu += 2
    else:
        rows = []
        c_idx = 1
        for l in lines[1:]:
            parts = l.split(', ')
            for p in parts:
                if " > " in p or " < " in p or (" = " in p and "Điền dấu" in header):
                    # It's a compare
                    if " > " in p:
                        left, right = p.split(' > ')
                        ans = ">"
                    elif " < " in p:
                        left, right = p.split(' < ')
                        ans = "<"
                    else:
                        left, right = p.split(' = ')
                        ans = "="
                    label = f"{left}  ...(>/</ =)...  {right}"
                else:
                    # It's an equation
                    left, right = p.split(' = ')
                    label = f"{left} ="
                    ans = right
                rows.append(f'              {{ label: "{label}", inputId: "w2_{b_id}_{c_idx}", answer: "{ans}" }}')
                c_idx += 1
                total_câu += 1
        out.append(',\n'.join(rows))
    
    out.append('            ]')
    out.append('          },')

out[-1] = out[-1].replace('},', '}')
out.append('        ]')
out.append('      }')
out.append('    ]')
out.append('  }')

with open(r'd:\WebHocCap1\w2_generated.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))

print("Total cau:", total_câu)
