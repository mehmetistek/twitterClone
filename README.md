##React,Tailwind,Firebase kullanılarak oluşturulmuş bu proje twitter benzeri bir projedir.Kullanıcılar mesaj ve fotoğraf paylaşabimekte, gönderilerini daha sonra düzenleyip silebilmektedirler.

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

Screen Gif
  ![Image](https://github.com/user-attachments/assets/15a44cc5-1bc0-4d0e-90ec-cf87975c987d)


  
