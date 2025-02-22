import { useParams } from "react-router-dom";

function MailboxDetails(props){

    const {mailboxId}=useParams()

    const singleMailBox= props.mailBoxes.find((mailBox)=>(
        mailBox._id === Number(mailboxId)
    ))


    return(
        <>
        <h1>Mailbox {singleMailBox._id}</h1>
        <h2>Details</h2>
        <p>Boxholder: {singleMailBox.boxholder}</p>
        <p>Box Size: {singleMailBox.boxSize}</p>
        </>
    )
}

export default MailboxDetails;