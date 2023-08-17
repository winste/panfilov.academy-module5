export default (title, description, keywords) => {
  return {
    title: title,
    meta: [
      {
        name: 'description',
        content: description,
      },
      {
        name: 'keywords',
        content: keywords,
      },
    ],
  }
}
