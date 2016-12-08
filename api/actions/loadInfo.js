export default function loadInfo() {
  return new Promise((resolve) => {
    resolve({
      message: 'Made with <3 By Timur',
      time: Date.now()
    });
  });
}
