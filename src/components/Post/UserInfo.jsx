import moment from "moment";
import { MdEdit } from "react-icons/md";

const UserInfo = ( {tweet} ) => {
    // kullanıcı isminden yola çıkarak bir nickname oluşturdk.
const username = 
tweet.user.name.toLowerCase(). replace (/ /g, "_") + Math.round
 ( Math.random () * 99);

 //tarih verisine eriş
let date = tweet.createdAt?.toDate();

//Moment kutüphanesiyle suanki tarihten uzaklığını hesapla
date = moment(date).fromNow();

  return (
    <div className="flex gap-3 items-center whitespace-nowrap">
    <p className="text-gray-400 text sm">{tweet.user.name}</p>
    <p className="text-gray-400 text sm">@{username}</p>
    <p>{date}</p>
   {tweet.isEdited && (
    <p className="text-gray-400 text-xs">
        <MdEdit className="md:hidden"/>
        <span className="max-md:hidden">*düzenlendi</span>
    </p>
   )}
    </div>
  )
}
export default UserInfo;

