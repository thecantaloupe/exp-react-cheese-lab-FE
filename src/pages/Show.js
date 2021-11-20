import { useState } from "react"

function Show(props) {
  const id = props.match.params.id
  const cheese = props.cheese
  const person = cheese.find(p => p._id === id)

  // state for form
  const [editForm, setEditForm] = useState(person)

  // handleChange for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value})
  }
  // const newState = {...editForm}
  // newState[event.target.name] = event.target.value
  // setEditForm(newState)

  // handleSubmit function for form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateCheese(editForm, person._id)
    // redirect cheese back to index
    props.history.push("/")
  }

  const removePerson = () => {
    props.deleteCheese(person._id)
    props.history.push("/")
  }

  return (
    <div className="person">
      <h1>{person.name}</h1>
      <h2>{person.title}</h2>
      <img src={person.image} alt={person.name} />
      <button id="delete" onClick={removePerson}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Update Cheese" />
      </form>
    </div>
  )
}

export default Show