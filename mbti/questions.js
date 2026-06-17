// ===== MBTI Questions - Kurdish =====
// 5-point scale: تەواو سەرەوە(+2), سەرەوە(+1), بێلایەن(0), خوارەوە(-1), تەواو خوارەوە(-2)

const questions = [
  // E vs I (Extraversion vs Introversion)
  { text: "حەز دەکەم لەگەڵ خەڵکدا بم و چالاکی کۆمەڵایەتی بکەم", dimension: "EI", direction: "E" },
  { text: "پێشتر خۆش دەوێت بە تەنها بیت و بیربکەیتەوە", dimension: "EI", direction: "I" },
  { text: "ئاسانە بۆت بەیانیەکە بە خەڵکی نامۆ دەست پێبکەیت", dimension: "EI", direction: "E" },
  { text: "دوای کۆبوونەوەیەکی درێژ پێویستت بە کاتی تەنهایی هەیە", dimension: "EI", direction: "I" },
  { text: "حەز دەکەم لە شوێنی گەشتیارییە قەرەباڵغەکان", dimension: "EI", direction: "E" },
  { text: "بیرکردنەوە لەبارەی خۆتەوە باشترە لە قسەکردن", dimension: "EI", direction: "I" },
  { text: "حەز دەکەم ڕابەرایەتی بکەم لە کۆبوونەوەکاندا", dimension: "EI", direction: "E" },
  { text: "ئاسودەیت لەگەڵ هاوڕێکانی نزیکت بەڵام نە لەگەڵ خەڵکی زۆر", dimension: "EI", direction: "I" },

  // S vs N (Sensing vs Intuition)
  { text: "باشتر وردەکاریەکان ببینیت لەوەی کە شتەکان چۆن پێکەوە بەستراون", dimension: "SN", direction: "S" },
  { text: "حەز دەکەم لە بیرکردنەوەی فەلسەفی و ئایندەیی", dimension: "SN", direction: "N" },
  { text: "باشتر ڕاستی و ئەزموونی ڕاستەقینە بەکاربهێنیت", dimension: "SN", direction: "S" },
  { text: "حەز دەکەم لە داهاتوو و ئەوەی کە دەتوانێت ببێت", dimension: "SN", direction: "N" },
  { text: "باشتر شتەکان وەک خۆیان وەربگریت نەک وەکو ئەوەی دەبن", dimension: "SN", direction: "S" },
  { text: "حەز دەکەم لە بیرکردنەوەی داهاتوخوازانە", dimension: "SN", direction: "N" },
  { text: "باشتر کارە ڕاستەوخۆ و پراکتیکیەکان بکەیت", dimension: "SN", direction: "S" },
  { text: "حەز دەکەم لە دۆزینەوەی واتای شاراوە لە شتەکاندا", dimension: "SN", direction: "N" },

  // T vs F (Thinking vs Feeling)
  { text: "باشتر بڕیار بدەیت بە مەنتقی و ڕاستییەکان", dimension: "TF", direction: "T" },
  { text: "حەز دەکەم بڕیارەکان لەسەر بنەمای هەستەکان بن", dimension: "TF", direction: "F" },
  { text: "باشتر ڕاستگۆ بیت هەرچەندە هەستی کەسێک بریندار بکات", dimension: "TF", direction: "T" },
  { text: "حەز دەکەم ئاشتی و هاوبەشی لە نێوان خەڵکدا بپارێزیت", dimension: "TF", direction: "F" },
  { text: "باشتر هەڵەبژاردنەکە لە ڕووی کارامەییەوە هەڵبژێریت", dimension: "TF", direction: "T" },
  { text: "حەز دەکەم پشتگیری لە کەسانی تر بکەیت لە کاتی پێویستیدا", dimension: "TF", direction: "F" },
  { text: "باشتر نرخی ڕاستی و دادپەروەری بپارێزیت", dimension: "TF", direction: "T" },
  { text: "حەز دەکەم هەست و کەف و خۆشی خەڵکی گرنگ بدەیت", dimension: "TF", direction: "F" },

  // J vs P (Judging vs Perceiving)
  { text: "باشتر پلان بۆ داهاتوو دابنێیت و پابەندی بن", dimension: "JP", direction: "J" },
  { text: "حەز دەکەم بە شێوەیەکی ئازاد و بێ پلان بژیت", dimension: "JP", direction: "P" },
  { text: "باشتر کارەکان بە کاتی تەواو بکەیت", dimension: "JP", direction: "J" },
  { text: "حەز دەکەم هەمیشە هەلی نوێ بەکاربهێنیت", dimension: "JP", direction: "P" },
  { text: "باشتر ڕێکخستن و ڕێکخستنی کارەکان بکەیت", dimension: "JP", direction: "J" },
  { text: "حەز دەکەم گۆڕانکاری و سەرکێشی تاقی بکەیتەوە", dimension: "JP", direction: "P" },
  { text: "باشتر پێشینەی کارەکان دابنێیت و پابەند بیت", dimension: "JP", direction: "J" },
  { text: "حەز دەکەم کات و شوێنەکەت بەپێی بارودۆخ هەڵبژێریت", dimension: "JP", direction: "P" }
];