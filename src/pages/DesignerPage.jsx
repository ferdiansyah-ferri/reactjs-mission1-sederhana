import Avatar from "../components/img/avatar.jpg";
import GambarBg1 from "../components/img/GambarBg1.jpg";
import style from "../components/styles/Desain.module.css";
import Rating from "../components/Rating";

const DesignerPage = () => {
  return (
    <>
      <div className={style.NavbarDsg}>
        <h2>Videobelajar</h2>
        <button className={style.ButtonDsg}>Kategori</button>
        <img src={Avatar} alt="" className={style.imgDsg} />
      </div>
      <div className={style.JudulDsg}>
        <p className={style.JudulP}>
          Beranda/Desain/Gapai Karier Impianmu Sebagai Seorang UI/UX Designer &
          Product Manager
        </p>
      </div>
      <div className={style.JudulPage}>
        <div className={style.ContentPage}>
          <h1>
            Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
            Manager.
          </h1>
          <p>Belajar bersama tutor profesional di Video Course.</p>
          <p>Kapanpun di manapun.</p>
          <Rating totalStars={5} />
        </div>
      </div>
      <div className={style.Deskripsi}>
        <h3>Deskripsi</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, animi
          aspernatur asperiores nemo esse totam vel qui numquam corporis amet ad
          nisi cupiditate placeat nobis earum ut dolores illo facere?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          numquam placeat vel rerum praesentium temporibus non aliquam maxime
          porro dolorem totam asperiores similique recusandae, sit tenetur
          exercitationem officia veritatis quibusdam?
        </p>
      </div>
      <div className={style.ContainerTutor}>
        <h4>Belajar bersama Tutor Profesioanal</h4>
        <div className={style.ContainerCard}>
          <div className={style.CardTutor}>
            <div className={style.dataTutorImage}>
              <img src={Avatar} alt="" width={50} height={50} />
              <ul className={style.NamaTutor}>
                <li> Peri Perdiansah</li>
                <li>
                  Senior Talent Acquisition di <strong>WingsGroup</strong>
                </li>
              </ul>
            </div>

            <p>
              Berkarier di bidang HR selama lebih dari 3 tahun saat ini bekerja
              sebagai senior talent Acquistion Specialist di WingsGroup
              Indonesia(Sayap Mas Utama)selama hampir 1 tahun
            </p>
          </div>
          <div className={style.CardTutor}>
            <div className={style.dataTutorImage}>
              <img src={Avatar} alt="" width={50} height={50} />
              <ul className={style.NamaTutor}>
                <li> Peri Perdiansah</li>
                <li>
                  Senior Talent Acquisition di <strong>WingsGroup</strong>
                </li>
              </ul>
            </div>

            <p>
              Berkarier di bidang HR selama lebih dari 3 tahun saat ini bekerja
              sebagai senior talent Acquistion Specialist di WingsGroup
              Indonesia(Sayap Mas Utama)selama hampir 1 tahun
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignerPage;
