const colors = [
    '#3498db',
    '#e74c3c',
    '#9b59b6',
    '#2ecc71',
    '#f1c40f',
    '#1abc9c',
    '#34495e',
    '#d35400',
  ];
  
  document.getElementById('colorBtn').addEventListener('click', changeBackgroundColor);
  
  function changeBackgroundColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
  }
  