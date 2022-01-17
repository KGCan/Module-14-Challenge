const {changeDate} = require('../utils/helpers');


//create test so show that format_date() takes the date objects and returns them in a MM/DD/YYYY format
test('changeDate() returns a string for the date', () => {
    const newDate = new Date('2022-01-16 20:17');

    expect(changeDate(newDate)).toBe('1/16/2022');
});



//   const url1 = format_url('http://test.com/page/1');
//   const url2 = format_url('https://www.coolstuff.com/abcdefg/');
//   const url3 = format_url('https://www.google.com?q=hello');

//   expect(url1).toBe('test.com');
//   expect(url2).toBe('coolstuff.com');
//   expect(url3).toBe('google.com');
// });

// test('format_plural() returns a pluralized word', () => {
//   const word1 = format_plural('tiger', 1);
//   const word2 = format_plural('lion', 2);

//   expect(word1).toBe('tiger');
//   expect(word2).toBe('lions');
// });

// test('format_date() returns a date string', () => {
//   const date = new Date('2020-03-20 16:12:03');

//   expect(format_date(date)).toBe('3/20/2020');
// });