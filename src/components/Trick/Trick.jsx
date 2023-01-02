import './Trick.css'

export default function Trick({ name, stance, obstacle, url }) {
  return (
    <div className="trick__container">
      <h2>{name}</h2>
      <p>{stance}</p>
      <p>{obstacle}</p>
      <a href={url}>{url}</a>
    </div>
  )
}
