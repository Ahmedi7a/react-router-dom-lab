import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MailboxForm(props) {

    const navigate = useNavigate()

    const initialState = {
        boxholder: '',
        boxSize: '',
    }
    const [formData, setFormData] = useState(initialState)

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.addMailBox(formData);
        setFormData(initialState)
        navigate('/mailboxes')
    }


    return (
        <>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter a Boxholder:</label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={formData.boxholder}
                    name="boxholder"
                />
                <label htmlFor="">Select a Box Size:</label>
                <select
                    name="boxSize"
                    onChange={handleChange}
                    value={formData.boxSize}
                >
                    <option value="" disabled>Select a Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>

                <button type="submit">Add Mailbox</button>

            </form>
        </>
    )
}

export default MailboxForm;