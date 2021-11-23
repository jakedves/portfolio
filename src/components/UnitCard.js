/**
 * UnitCards will be white cards briefly introducing some of the key units I have undertaken at
 * Bath University.
 *
 * @param unitTitle: The title of the unit the card is showing
 * @param unitDesc: A brief overview of what was taught in that unit
 * @param unitGrade: The grade that was given in that unit, if applicable
 * @param unitLink: The link to that unit in the University of Bath catalogue
 * @returns
 */
export default function UnitCard({ unit }) {
  return (
    <div className="unit-card">
      <a href={unit.unitLink} target="_blank">
        <h4 className="unit-card-head">{unit.unitTitle}</h4>
      </a>
      <p className="unit-card-desc">{unit.unitDesc}</p>
      <footer className="unit-card-grade">
        Grade: {unit.unitGrade ? unit.unitGrade : "N/A"}
      </footer>
    </div>
  );
}
