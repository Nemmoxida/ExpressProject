export default function getHome() {
  const getData = (req, res) => {
    res.send(
      `<html><h1>Selamat datang di page utama!</h1>
  <p>ini adalah project uas matkul pemprograman berbasis platform</p>
  <p>Anggota: <p>
  <ul>
    <li>Muhamad Ilham Fauzy<li><li>Mohamad Ibnu Nizar Husaini<li><li>Exza Fauzan Sofyan<li>
  </li></html>`,
    );
  };
  return getData;
}
