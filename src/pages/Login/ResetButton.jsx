import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const ResetButton = ({ email }) => {

    //şifre sıfırlama epostası gönder
const handleReset = () =>  {
    sendPasswordResetEmail(auth, email)
    .then(() => 
        toast.info("Şifre sıfırlama epostası gönderildi. Mailinizi kontrol edin")
)
    .catch(() => toast.error("mail gönderilemiyor"));
};

  return (
    <button onClick={handleReset} className="text-red-500">
     Şifrenizi mi unuttunuz?
    </button>
  )
}

export default ResetButton;
