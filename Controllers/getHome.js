export default function getHome() {
  const getData = (req, res) => {
    res.send(
      `<h1>Selamat datang di page utama!</h1>
  <p>ini adalah project uas matkul pemprograman berbasis platform</p>
  <p>Anggota: <p>
  <li>
  <ul>Muhamad Ilham Fauzy<ul>
  <ul>Mohamad Ibnu Nizar Husaini<ul>
  <ul>Exza Fauzan Sofyan<ul>
  </li>`,
    );
  };
  return getData;
}
