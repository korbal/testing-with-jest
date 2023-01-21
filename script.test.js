const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com'
]

it('this is a test', () => {
  console.log('------------------------------------'); 
  expect('hello').toBe('hello');
  googleSearch('testtest', dbMock);
  console.log('------------------------------------');
})

it('is searching google', () => {
  expect(googleSearch('testtest', dbMock)).toEqual([]);
  expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
 // expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
})
