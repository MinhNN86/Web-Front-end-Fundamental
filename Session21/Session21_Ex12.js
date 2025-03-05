for (let i = 0; i < 10; i++) {
  let color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
  console.log(
    `%cMàu sắc đã được thay đổi`,
    `color: ${color}; font-weight: bold;`
  );
}
