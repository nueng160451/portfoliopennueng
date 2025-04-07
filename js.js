const quotes = [
    "จงเป็นตัวของตัวเอง เพราะคนอื่นเขาถูกจับจองไปหมดแล้ว",
    "คนจะเกิดหยุดได้ไง","จงเป็นตัวของตัวเอง เพราะคนอื่นเขาถูกจับจองไปหมดแล้ว",
      "ทำให้ดีที่สุด แล้วค่อยดูผลลัพธ์",
      "ฝันให้ไกล แล้วไปให้พ้น",
      "ความพยายามอยู่ที่ไหน ความบรรไลอยู่ใกล้ๆ",
      "ไม่มีอะไรสายเกินไป แค่ไม่นอนแล้วไปให้ทัน"
     ];
  const quoteElement = document.getElementById("quote");
  function changeQuote() {
    const quoteElement = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = `"${quotes[randomIndex]}"`;
  }