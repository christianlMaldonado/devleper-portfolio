import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Bit Academy",
      title: "Developer",
      img: "assets/Bitacademy.png",
      icon: "assets/twitter.png",
      desc: "We Love the work Christian has done on making this online school possible",
    },
    {
      id: 2,
      name: "Origin Coast Coffee",
      title: "Founder + Ceo",
      img: "assets/coffee.jpg",
      icon: "assets/youtube.png",
      desc: "Christian has developed ground breaking applicaitons for us with simplicity in mind to keep our users engaged",
      featured: true,
    },
    // {
    //   id: 3,
    //   name: "",
    //   title: "User",
    //   img: "assets/intropic.png",
    //   icon: "assets/linkedin.png",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    // },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}