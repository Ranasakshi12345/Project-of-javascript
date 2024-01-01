const books = [
    { title: 'Book One', author: 'jane doe', year: 2008 },
    { title: 'Book Two', author: 'john smith', year: 2012 },
    { title: 'Book Three', author: 'susan brown', year: 2015 },
    { title: 'Book Four', author: 'lisa jones', year: 2009 },
  ];
  
  const filteredBooks = books.filter(book => book.year >= 2010)
    .map(book => ({
      ...book,
      author: book.author.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')
    }));
  
  console.log(filteredBooks);
  