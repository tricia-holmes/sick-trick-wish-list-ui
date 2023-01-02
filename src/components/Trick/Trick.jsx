import './Trick.css'

export default function Trick({ name, stance, obstacle, url, id }) {
  return (
    <div className='trick__container' id={id}>
      <h2>
        <span>{stance}</span> {name}
      </h2>
      <p>
        <span>Obstacle: </span>
        {obstacle}
      </p>
      <span>Link to Tutorial:</span>
      <a href={url}>{url}</a>
    </div>
  )
}
