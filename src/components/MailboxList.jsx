import { Link } from "react-router-dom";

function MailboxList(props){
    return(
        <>
        <h1>Mailbox List</h1>
        <ul>
        {props.mailBoxes.map((mailBox)=>(
            <li key={mailBox._id} className="Whiteb">
               <Link to={`/mailboxes/${mailBox._id}`}><p>Mailbox {mailBox._id} </p></Link>
            </li>
        ))}
        </ul>
        </>
    )
}

export default MailboxList;