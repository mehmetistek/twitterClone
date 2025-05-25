# Kütüphaneler

-react-router-dom
-react-toastify
-react-icons
-moment
-uuid
-firebase
-tailwind

# Authentication (Kimlik Doğrulama)
-Br kullanıcının kimliğini doğrulama sürecidir.
-Kullanıcı adı / şifre, parmak izi, google hesabı kimlik 
doğrulama için kullanılabilir.

# Authorization (Yetkilendirme)
-Bir kullanıcının sistemin kaykaklarına / işlevlerine /
 sayfalarına erişim sürecidir.
-Yani kimlik doğrulama başarılı olduktan sonra ne 
kadar erişime sahip olduğunu belirleme sürecidir.

import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

  

  //oturumu kapalıysa anasayfaya yönlendir.

  //oturum açıksa devam et# twitterClone
