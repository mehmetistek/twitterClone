import { LuMessageCircle } from "react-icons/lu";
import { FaHeart, FaRegHeart, FaRetweet } from "react-icons/fa";
import { CiShare2} from "react-icons/ci"
import { doc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";
import { auth, db } from "../../firebase";

const Buttons = ({tweet}) => {
// oturumu açık olan kullanıcı bu tweti'i like'ladı mı
const isLiked = tweet.likes.includes(auth.currentUser.uid);

  //Like butonuna tıklanınca tıklanınca:
const toggleLike = async () => {
// güncellenecek dökümanın referansını al 
const tweetRef = doc(db, "tweets", tweet.id);

//kullanıcı like'ladıysa :
// user idsini likes dizisinden kaldır
// likeladıysa user idsini likes dizisine ekle 
await updateDoc(tweetRef,{
 likes: isLiked
 
 ? arrayRemove(auth.currentUser.uid) 

 : arrayUnion(auth.currentUser.uid),
})

};

console.log(tweet.likes);
  return (
    <div className="flex justify-center items-center">
    <div className="p-3 rounded-full cursor-pointer transition hover:bg-[#51d9ff3d]">
<LuMessageCircle/>
    </div>
    <div className="p-3 rounded-full cursor-pointer transition hover:bg-[#00800067]">
<FaRetweet/>
    </div>
    <div 
    onClick={toggleLike}
     className="p-3 rounded-full cursor-pointer transition 
     hover:bg-rgba[(249,65,219,0.42)] flex items-center gap-2">
 {isLiked ?<FaHeart className="text-red-500"/> : <FaRegHeart/>}
{tweet.likes.length}
    </div>
    <div className="p-3 rounded-full cursor-pointer transition hover:bg-[#80808065]">
<CiShare2/>
    </div>
    </div>
  )
}

export default Buttons;
