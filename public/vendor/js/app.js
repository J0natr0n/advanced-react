try {
  $(document).foundation();
} catch (e) {
  console.log(e);
} finally {
  $(document).foundation();
  console.log('loaded');
}
