# React&Vite ile Sohbet  Uygulaması.

Karşılıklı olarak sohbet edilebilir (Full Stack).
Yazdıkça scroll aşağıya kayar
Giriş yapma ekranından sadece Google ile giriş yapılabilir ve yapılan girişlerden hesabın fotosu kullanılır

 Uygulamanın canlıya alınmış hali:
 ```http
  https://chat-app-cd456.web.app/
```

1.Not: Projeyi ben canlıya aldım ama siz react ile terminalden çalıştıracağınız kod şudur: 

```bash
cd react-chat-app
npm run dev
```

2.Not: Uygulamaya Google hesabı ile giriş yapılmakta

3.Not siz kendi firebase hesabınızı açıp aşağıdaki alanı doldurmalısınız uygulamanın çalışmasını istiyorsanız:

```bash
// Firebase yapılandırma bilgileri
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

# Kullanılan Teknolojiler
- React
- Firebase
- Vite
- Tailwind
- HTML/CSS
- JAVASCRIPT

Veri Tabanı Oluşturmak için Sırasıyla Yapılacaklar
- Authentication
- Firestore Database
- Database Rules yaz

Database Rules
```bash
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {


    match /{document=**} {
      allow read, write: if false;
    }
    
    match /messages/{docId}{
    allow read: if request.auth.uid != null;
    allow create: if canCreate();
    }
    function canCreate() {
    let signedId = request.auth.uid != null;
    let isOwner =request.auth.uid != null && request.auth.uid == request.resource.data.userUid;
    
    return signedId && isOwner;
    }
  }
}
```
# Vite teknolojisi kullanıldığından çalıştırıldığı socket

```http
  http://localhost:5173/
```
### Log Screen
![555](https://github.com/user-attachments/assets/6d1f0f33-426d-47ac-9b8b-b8636bebc8d3)

### Chat Photo
![333](https://github.com/user-attachments/assets/5adf8d10-faf7-42b1-986a-1ca4cddb68d2)
![222](https://github.com/user-attachments/assets/c09d244a-ee97-4e75-ac2e-07622e7d9114)
![223](https://github.com/user-attachments/assets/43dbf570-ec5e-4809-9877-f4346fe6988e)

