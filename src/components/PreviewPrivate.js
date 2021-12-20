/**
 * This component will be used to tease the private repositories I have
 * on GitHub. Below this will come the contact me section so that I can
 * be contacted.
 */
export default function PreviewPrivate() {
  let images = [
    {
      path: "",
      caption: "",
    },
  ];
  let teaserTitle = "Want to see more?";
  let teaserText = `I have numerous, fully documented University projects that I can't make public for plagiarism reasons,
  however, I can still show off the code so don't hesitate to ask to see it!`;

  return (
    <section className="private-projects">
      <div className="image-row">
        {images.map((image) => {
          return (
            <img
              src={Image.path}
              caption={image.caption}
              alt={image.caption}
            ></img>
          );
        })}
      </div>
      <h1 className="section-title">{teaserTitle}</h1>
      <h5 className="teaser-text">{teaserText}</h5>
    </section>
  );
}
