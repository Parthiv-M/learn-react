const ScientistProfile = ({
  name,
  imageUrl,
  profession,
  awards,
  discovery,
}) => {
  const awards = "";
  awards.forEach((element) => {
    awards += element + ", ";
  });
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imageUrl}
        alt="Maria Skłodowska-Curie"
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length}</b>()
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
};
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <ScientistProfile
        name={"Maria Skłodowska-Curie"}
        imageUrl={"https://i.imgur.com/szV5sdGs.jpg"}
        profession={"Physicist and chemist"}
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
        discovery={"Polonium (element)"}
      />
      <ScientistProfile
        name={"Katsuko Saruhashi"}
        imageUrl={"https://i.imgur.com/YfeOqp2s.jpg"}
        profession={"Geochemist"}
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovery={"A method for measuring carbon dioxide in seawater"}
      />
    </div>
  );
}
