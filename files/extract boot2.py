from pathlib import Path

p = Path("js/boot2.js")
text = p.read_text(encoding="utf-8")

terms = ["import(", "createElement", "appendChild", "boot", "main"]

for term in terms:
    print(f"\n--- {term} ---")
    start = 0
    count = 0
    while True:
        i = text.find(term, start)
        if i < 0 or count >= 5:
            break
        print(text[max(0, i-250):i+500])
        print()
        start = i + len(term)
        count += 1